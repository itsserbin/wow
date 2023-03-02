<?php

namespace App\Exports;

use App\Models\Client;
use App\Models\Enums\ClientStatus;
use Illuminate\Support\Collection;
use Maatwebsite\Excel\Concerns\FromCollection;
use Maatwebsite\Excel\Concerns\WithColumnFormatting;
use Maatwebsite\Excel\Concerns\WithColumnWidths;
use Maatwebsite\Excel\Concerns\WithHeadings;
use Maatwebsite\Excel\Concerns\WithMapping;
use Maatwebsite\Excel\Concerns\WithStyles;
use PhpOffice\PhpSpreadsheet\Style\NumberFormat;
use PhpOffice\PhpSpreadsheet\Worksheet\Worksheet;

class ClientsExport implements FromCollection, WithMapping, WithColumnFormatting, WithHeadings, WithColumnWidths, WithStyles
{
    /**
     * @return Collection
     */
    public function collection()
    {
        return Client::select(
            'id',
            'name',
            'last_name',
            'middle_name',
            'phone',
            'status',
            'comment',
            'created_at'
        )
            ->orderBy('created_at', 'desc')
            ->get();
    }

    public function styles(Worksheet $sheet)
    {
        return [
            // Style the first row as bold text.
            1 => ['font' => ['bold' => true]],

            // Styling a specific cell by coordinate.
            'A' => ['font' => ['bold' => true]],
        ];
    }

    public function map($row): array
    {
        return [
            $row->id,
            ClientStatus::state[$row->status],
            $row->name,
            $row->last_name,
            $row->middle_name,
            $row->phone,
            $row->comment,
            $row->created_at,
        ];
    }

    public function columnWidths(): array
    {
        return [
            'A' => 10,
            'B' => 20,
            'C' => 20,
            'D' => 20,
            'E' => 20,
            'F' => 20,
            'G' => 30,
            'H' => 20,
        ];
    }

    public function headings(): array
    {
        return [
            'ID клієнта',
            'Статус',
            'Ім`я',
            'Прізвище',
            'По-батькові',
            'Телефон',
            'Коментар',
            'Дата створення',
        ];
    }

    public function columnFormats(): array
    {
        return [
            'A' => NumberFormat::FORMAT_NUMBER,
            'F' => NumberFormat::FORMAT_NUMBER,
            'H' => NumberFormat::FORMAT_DATE_DATETIME,
        ];
    }
}
