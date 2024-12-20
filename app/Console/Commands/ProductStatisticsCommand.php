<?php

namespace App\Console\Commands;

use App\Models\Enums\OrderStatus;
use App\Models\Product;
use App\Models\Statistics\ProductStatistic;
use Carbon\Carbon;
use Illuminate\Console\Command;

class ProductStatisticsCommand extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'products:statistics';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Command description';

    /**
     * Create a new command instance.
     *
     * @return void
     */
    public function __construct()
    {
        parent::__construct();
    }

    /**
     * Execute the console command.
     */
    public function handle()
    {
        $dateNow = Carbon::now()->toDateString();

        foreach (Product::select('id')->get() as $product) {
            if (!ProductStatistic::where('date', $dateNow)->where('product_id', $product->id)->first()) {
                $productStatistic = new ProductStatistic;
                $productStatistic->product_id = $product->id;
                $productStatistic->date = $dateNow;
                $productStatistic->save();
            }
        }

        $data = ProductStatistic::with([
            'product' => function ($q) {
                $q->select('id');
                $q->with([
                    'orderItems' => function ($q) {
                        $q->select('id', 'product_id', 'order_id');
                        $q->whereHas('order');
                        $q->with([
                            'order' => function ($q) {
                                $q->select('id', 'status', 'created_at');
                            }
                        ]);
                    }]);
            }
        ])->get();

        foreach ($data as $item) {
            if (count($item->product->orderItems)) {
                foreach ($item->product->orderItems as $orderItem) {
                    if ($orderItem->order->created_at->format('Y-m-d') == $item->date) {
                        $total = 0;
                        $returns = 0;
                        $exchanges = 0;
                        $sales = 0;
                        $canceled = 0;

                        $total++;

                        if ($orderItem->order->status == OrderStatus::STATUS_RETURN) {
                            $returns++;
                        }
                        if ($orderItem->order->status == OrderStatus::STATUS_EXCHANGE) {
                            $exchanges++;
                        }
                        if ($orderItem->order->status == OrderStatus::STATUS_DONE) {
                            $sales++;
                        }
                        if ($orderItem->order->status == OrderStatus::STATUS_CANCELED) {
                            $canceled++;
                        }

                        $item->total = $total;
                        $item->returns = $returns;
                        $item->exchanges = $exchanges;
                        $item->sales = $sales;
                        $item->canceled = $canceled;

                        if ($item->sales) {
                            $item->conversion_rate = $item->total / $item->sales;
                        }
                        if ($item->canceled) {
                            $item->cancellation_rate = $item->total / $item->canceled;
                        }
                        if ($item->returns) {
                            $item->return_rate = $item->total / $item->returns;
                        }
                        if ($item->exchanges) {
                            $item->exchanges_rate = $item->total / $item->exchanges;
                        }
                        $item->update();
                    }
                }
            }
        }
    }
}
