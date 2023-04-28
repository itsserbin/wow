<?php

namespace App\Exports;

use App\Models\Statistics\BankCardMovement;
use JetBrains\PhpStorm\ArrayShape;
use Maatwebsite\Excel\Concerns\FromCollection;
use Maatwebsite\Excel\Concerns\WithColumnWidths;
use Maatwebsite\Excel\Concerns\WithHeadings;
use Maatwebsite\Excel\Concerns\WithMapping;
use Maatwebsite\Excel\Concerns\WithStyles;
use PhpOffice\PhpSpreadsheet\Worksheet\Worksheet;

class BankCardMovementsExport implements FromCollection, WithStyles, WithMapping, WithHeadings, WithColumnWidths

{
    private array $data;

    public function __construct(array $data = [])
    {
        $this->data = $data;
    }

    final public function styles(Worksheet $sheet): array
    {
        return [
            // Style the first row as bold text.
            1 => ['font' => ['bold' => true]],

            // Styling a specific cell by coordinate.
            'B' => ['font' => ['bold' => true]],
        ];
    }

    /**
     * @return \Illuminate\Support\Collection
     */
    final public function collection(): \Illuminate\Support\Collection
    {
        $model = BankCardMovement::select([
            'id',
            'date',
            'sum',
            'balance',
            'category_id',
            'comment',
        ]);

        $data = $this->data;

        if (isset($data['date_start'], $data['date_end'])) {
            $model->whereBetween('date', [$data['date_start'], $data['date_end']]);
        }

        if (isset($data['sort'], $data['param'])) {
            $model->orderBy($data['sort'], $data['param']);
        } else {
            $model->orderBy('date', 'desc');
        }

        return $model->with(['category:id,title'])->get(15);
    }

    #[ArrayShape(['A' => "int", 'B' => "int", 'C' => "int", 'D' => "int", 'E' => "int", 'F' => "int"])]
    final public function columnWidths(): array
    {
        return [
            'A' => 10,
            'B' => 20,
            'C' => 20,
            'D' => 10,
            'E' => 10,
            'F' => 30,
        ];
    }

    final public function headings(): array
    {
        return [
            'ID',
            'Дата',
            'Категорія',
            'Сума',
            'Залишок',
            'Коментар',
        ];
    }

    final public function map($row): array
    {
        return [
            $row->id,
            $row->date,
            $row->category ? $row->category->title : 'Без категорії',
            $row->sum,
            $row->balance,
            $row->comment,
        ];
    }
}
