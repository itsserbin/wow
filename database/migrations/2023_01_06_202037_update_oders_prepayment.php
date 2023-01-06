<?php

use App\Models\Enums\InvoicesStatus;
use App\Models\Order;
use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration {
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        foreach (Order::where('wfp_payment', 1)->with('invoices')->get() as $item) {
            $prepayment = 0;
            $prepayment += $item->prepayment_sum;
            if (count($item->invoices)) {
                foreach ($item->invoices as $invoice) {
                    if ($invoice->status == InvoicesStatus::PAID_STATUS) {
                        $prepayment += $invoice->sum;
                    }
                }
            }

            if ($prepayment) {
                $item->prepayment = 1;
                $item->prepayment_sum = $prepayment;
                $item->update();
            }
        }

        foreach (Order::whereHas('invoices')->where('wfp_payment', 0)->with('invoices')->get() as $order) {
            $total = 0;

            foreach ($order->invoices as $invoice) {
                if ($invoice->status == InvoicesStatus::PAID_STATUS) {
                    $total += $invoice->sum;
                }
            }

            if ($total) {
                $order->prepayment = 1;
                $order->prepayment_sum = $total;
                $order->update();
            }

        }
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        //
    }
};
