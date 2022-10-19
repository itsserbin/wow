<?php

namespace App\Console\Commands;

use App\Models\Enums\OrderStatus;
use App\Repositories\Statistics\OrdersStatisticsRepository;
use App\Repositories\OrdersRepository;
use Carbon\Carbon;
use Illuminate\Console\Command;

class OrdersStatisticCommand extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'orderStatistics:count';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Command description';

    private mixed $ordersRepository;
    private mixed $ordersStatisticsRepository;

    /**
     * Create a new command instance.
     *
     * @return void
     */
    public function __construct()
    {
        parent::__construct();
        $this->ordersRepository = app(OrdersRepository::class);
        $this->ordersStatisticsRepository = app(OrdersStatisticsRepository::class);
    }

    /**
     * Execute the console command.
     *
     * @return int
     */
    public function handle()
    {
        $dateNow = Carbon::now()->toDateString();

        $statisticsNow = $this->ordersStatisticsRepository->getRowByDate($dateNow);

        if (!$statisticsNow) {
            $model = $this->ordersStatisticsRepository->createNewModel();
            $model->date = $dateNow;

            $model->save();
        }

        $statisticsAll = $this->ordersStatisticsRepository->getAll();

        foreach ($statisticsAll as $item) {
            if ($item->applications !== ($item->completed + $item->refunds + $item->cancel)){
                $item->applications = $this->ordersRepository->countOrdersByStatus(null, $item->date);
                $item->unprocessed = $this->ordersRepository->countOrdersByStatus('new', $item->date);
                $item->completed = $this->ordersRepository->countOrdersByStatus('done', $item->date);
                $item->refunds = $this->ordersRepository->countOrdersByStatus('return', $item->date);
                $item->cancel = $this->ordersRepository->countOrdersByStatus('canceled', $item->date);
                $item->at_the_post_office = $this->ordersRepository->countOrdersByStatus('at_the_post_office', $item->date);
                $item->in_process = $this->ordersRepository->countOrdersByStatus('processed', $item->date);
                $item->transferred_to_supplier = $this->ordersRepository->countOrdersByStatus('transferred_to_supplier', $item->date);
                $item->awaiting_dispatch = $this->ordersRepository->countOrdersByStatus('awaiting_dispatch', $item->date);
                $item->awaiting_prepayment = $this->ordersRepository->countOrdersByStatus('awaiting_prepayment', $item->date);
                $item->on_the_road = $this->ordersRepository->countOrdersByStatus('on_the_road', $item->date);
                $item->requires_clarification = $this->ordersRepository->countOrdersByStatus('requires_clarification', $item->date);
                if ($item->applications) {
                    $item->canceled_orders_rate = $item->cancel / $item->applications;
                    $item->returned_orders_ratio = $item->refunds / $item->applications;
                    $item->received_parcel_ratio = $item->completed / $item->applications;
                }
                $item->update();
            }
        }
    }
}
