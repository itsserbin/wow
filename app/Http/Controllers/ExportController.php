<?php

namespace App\Http\Controllers;

use App\Exports\OrdersExport;
use Maatwebsite\Excel\Facades\Excel;
use Symfony\Component\HttpFoundation\BinaryFileResponse;

class ExportController extends Controller
{
    public function orders(): BinaryFileResponse
    {
        return Excel::download(new OrdersExport(), 'orders-list.xlsx');
    }
}
