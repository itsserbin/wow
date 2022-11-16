<?php

use App\Models\Enums\OrderStatus;
use App\Models\Order;
use App\Models\Product;
use App\Models\Statistics\ProductStatistic;
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
        Schema::create('product_statistics', function (Blueprint $table) {
            $table->id();
            $table->date('date');
            $table->integer('total')->default(0);
            $table->integer('sales')->default(0);
            $table->integer('returns')->default(0);
            $table->integer('exchanges')->default(0);
            $table->integer('canceled')->default(0);
            $table->integer('conversion_rate')->default(0);
            $table->integer('cancellation_rate')->default(0);
            $table->integer('return_rate')->default(0);
            $table->integer('exchanges_rate')->default(0);

            $table->foreignId('product_id')
                ->nullable()
                ->references('id')
                ->on('products')
                ->onDelete('cascade');

            $table->timestamps();
        });

        $firstOrder = Order::select('id', 'created_at')->orderBy('id', 'asc')->first();
        $lastOrder = Order::select('id', 'created_at')->orderBy('id', 'desc')->first();

        if ($firstOrder && $lastOrder){
            $period = new DatePeriod(
                new DateTime($firstOrder->created_at),
                new DateInterval('P1D'),
                new DateTime($lastOrder->created_at)
            );

            foreach ($period as $key => $value) {
                $date = $value->format('Y-m-d');

                foreach (Product::select('id')->get() as $product) {
                    if (!ProductStatistic::where('date', $date)->where('product_id', $product->id)->first()) {
                        $model = new ProductStatistic;
                        $model->product_id = $product->id;
                        $model->date = $date;
                        $model->save();
                    }
                }
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
        Schema::dropIfExists('product_statistics');
    }
};
