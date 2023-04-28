<?php

namespace App\Http\Controllers;

use App\Exports\BankCardMovementsExport;
use App\Exports\ClientsExport;
use App\Exports\OrdersExport;
use Illuminate\Http\Request;
use Maatwebsite\Excel\Facades\Excel;
use Symfony\Component\HttpFoundation\BinaryFileResponse;

class ExportController extends Controller
{
    final public function orders(): BinaryFileResponse
    {
        return Excel::download(new OrdersExport(), 'orders-list.xlsx');
    }

    final public function clients(): BinaryFileResponse
    {
        return Excel::download(new ClientsExport(), 'clients-list.xlsx');
    }

    final public function bankCardMovementsExport(Request $request): BinaryFileResponse
    {
        return Excel::download(new BankCardMovementsExport($request->all()), 'bank-movements.xlsx');
    }
}
