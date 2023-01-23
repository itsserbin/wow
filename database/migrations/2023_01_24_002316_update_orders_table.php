<?php

use App\Models\Enums\InvoicesStatus;
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
        Schema::table('orders', function (Blueprint $table) {
            $table->integer('wfp_payment_sum')->nullable();
            $table->dropColumn('prepayment');
        });

        $orders = \App\Models\Order::where('wfp_payment',1)
            ->select('id', 'wfp_payment_sum', 'prepayment_sum')
            ->with('invoices')
            ->get();

        $ordRep = new \App\Repositories\OrdersRepository();
        foreach ($orders as $order) {
            $order->wfp_payment_sum = $order->prepayment_sum;
            $order->update();

            $ordRep->sumPrepayment($order->id);
        }

        Schema::table('orders', function (Blueprint $table) {
            $table->dropColumn('wfp_payment');
        });
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
