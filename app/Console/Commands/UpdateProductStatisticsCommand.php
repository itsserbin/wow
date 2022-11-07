<?php

namespace App\Console\Commands;

use App\Models\Enums\OrderStatus;
use App\Models\Product;
use Carbon\Carbon;
use Illuminate\Console\Command;

class UpdateProductStatisticsCommand extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'product:update_statistic';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Update product sales and returns';

    /**
     * Execute the console command.
     *
     * @return int
     */
    public function handle()
    {
        $date_now = Carbon::now()->toDateString();

        $products = Product::with('orderItems')->get();

        foreach ($products as $product) {
            $exchange = 0;
            $returns = 0;

            foreach ($product->orderItems as $orderItem) {
                if ($orderItem->order) {
                    if ($orderItem->order->status == OrderStatus::STATUS_RETURN) {
                        $returns += 1;
                    }
                    if ($orderItem->order->status == OrderStatus::STATUS_EXCHANGE) {
                        $exchange += 1;
                    }
                }

            }

            $product->exchange = $exchange;
            $product->returns = $returns;
            $product->update();
        }
    }
}
