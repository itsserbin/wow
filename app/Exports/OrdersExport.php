<?php

namespace App\Exports;

use App\Models\Enums\OrderStatus;
use App\Models\Order;
use Maatwebsite\Excel\Concerns\FromCollection;
use Maatwebsite\Excel\Concerns\WithColumnFormatting;
use Maatwebsite\Excel\Concerns\WithColumnWidths;
use Maatwebsite\Excel\Concerns\WithHeadings;
use Maatwebsite\Excel\Concerns\WithMapping;
use Maatwebsite\Excel\Concerns\WithStyles;
use PhpOffice\PhpSpreadsheet\Style\NumberFormat;
use PhpOffice\PhpSpreadsheet\Worksheet\Worksheet;

class OrdersExport implements FromCollection, WithMapping, WithColumnFormatting, WithHeadings, WithColumnWidths, WithStyles
{
    public function styles(Worksheet $sheet)
    {
        return [
            // Style the first row as bold text.
            1 => ['font' => ['bold' => true]],

            // Styling a specific cell by coordinate.
            'A' => ['font' => ['bold' => true]],
        ];
    }

    public function collection()
    {
        $columns = [
            'id',
            'status',
            'waybill',
            'client_id',
            'comment',
            'total_count',
            'total_price',
            'updated_at',
            'created_at',
        ];

        $provider = auth()->user()->provider_id;

        if ($provider) {
            return Order::where(function ($q) {
                $q->where('status', '=', OrderStatus::STATUS_TRANSFERRED_TO_SUPPLIER);
                $q->orWhere('status', '=', OrderStatus::STATUS_REQUIRES_CLARIFICATION);
                $q->orWhere('status', '=', OrderStatus::STATUS_AWAITING_DISPATCH);
            })
                ->whereHas('items', function ($q) use ($provider) {
                    $q->select('id', 'provider_id');
                    $q->whereHas('provider', function ($query) use ($provider) {
                        $query->select('id');
                        $query->where('id', $provider);
                    });
                })
                ->select($columns)
                ->with(['client' => function ($q) {
                    $q->select('id', 'name', 'last_name', 'middle_name', 'phone');
                }, 'items.product' => function ($q) {
                    $q->select('id', 'vendor_code', 'color', 'size');
                }])
                ->orderBy('id', 'desc')
                ->get();
        } else {
            return Order::select($columns)
                ->with(['client' => function ($q) {
                    $q->select('id', 'name', 'last_name', 'middle_name', 'phone');
                }, 'items.product' => function ($q) {
                    $q->select('id', 'vendor_code');
                }])
                ->orderBy('id', 'desc')
                ->get();
        }
    }

    public function columnWidths(): array
    {
        return [
            'A' => 15,
            'B' => 20,
            'C' => 20,
            'D' => 20,
            'E' => 20,
            'F' => 20,
            'G' => 10,
            'H' => 10,
            'I' => 20,
            'J' => 30,
            'K' => 30,
            'L' => 20,
        ];
    }

    public function headings(): array
    {
        return [
            'ID Замовлення',
            'Статус',
            'Ім`я',
            'Прізвище',
            'По-батькові',
            'Телефон',
            'Кількість',
            'Сума',
            'Номер накладної',
            'Товари',
            'Коментар',
            'Дата створення',
        ];
    }

    public function map($row): array
    {
        $selectedRows = [];
        foreach ($row->items as $item) {
            array_push($selectedRows, [
                'vendor_code' => (string)$item->product->vendor_code,
                'color' => implode("", (array)$item->color) ?? 'Колір не вказаний',
                'size' => implode("", (array)$item->size) ?? 'Розмір не вказаний',
            ]);
        }
        $products = [];
        foreach ($selectedRows as $selectedRow) {
            $selectedRowImplode = implode(" - ", $selectedRow);
            array_push($products, $selectedRowImplode);
        }
        return [
            $row->id,
            OrderStatus::state[$row->status],
            $row->client->name ?? '-',
            $row->client->last_name ?? '-',
            $row->client->middle_name ?? '-',
            $row->client->phone ?? '-',
            $row->total_count ?? '-',
            $row->total_price ?? '-',
            $row->waybill ?? '-',
            implode(", ", $products),
            $row->comment,
            $row->created_at->format('d.m.Y'),
        ];
    }

    public function columnFormats(): array
    {
        return [
            'F' => NumberFormat::FORMAT_NUMBER,
            'I' => NumberFormat::FORMAT_NUMBER,
        ];
    }
}
