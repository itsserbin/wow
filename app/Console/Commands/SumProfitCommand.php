<?php

namespace App\Console\Commands;

use App\Repositories\Statistics\CostsRepository;
use App\Repositories\Statistics\ProfitsRepository;
use App\Repositories\OrderItemsRepository;
use App\Repositories\OrdersRepository;
use Carbon\Carbon;
use Illuminate\Console\Command;

class SumProfitCommand extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'profits:sum';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Command description';

    private $ordersRepository;
    private $orderItemsRepository;
    private $costsRepository;
    private $profitsRepository;

    /**
     * Create a new command instance.
     *
     * @return void
     */
    public function __construct()
    {
        parent::__construct();
        $this->ordersRepository = app(OrdersRepository::class);
        $this->orderItemsRepository = app(OrderItemsRepository::class);
        $this->costsRepository = app(CostsRepository::class);
        $this->profitsRepository = app(ProfitsRepository::class);
    }

    /**
     * Execute the console command.
     *
     * @return int
     */
    public function handle()
    {
        $date_now = Carbon::now()->toDateString();

        $profit_now = $this->profitsRepository->getRowByDate($date_now);
        $profit_old = $this->profitsRepository->getAll();

        if (!$profit_now) {
            $profit = $this->profitsRepository->createNewModel();
            $profit->date = $date_now;
            $profit->save();
        }

        foreach ($profit_old as $item) {
            $item->turnover = $this->ordersRepository->sumDoneOrdersTotalPriceByDate($item->date);
            $item->cost = $this->costsRepository->sumCostsByDate($item->date);
            $item->marginality = $this->ordersRepository->sumDoneOrdersClearTotalPriceByDate($item->date);
            $item->refunds_sum = $this->orderItemsRepository->sumRefundsByDate($item->date);
            $item->clear_profit = $item->marginality - $item->cost - $item->refunds_sum;
            $item->prepayment_sum = $this->ordersRepository->sumPrepaymentByDate($item->date);
//            $item->prepayment_wfp_sum = $this->ordersRepository->sumPrepaymentByDate($item->date, 'wfp');
//            $item->prepayment_card_sum = $this->ordersRepository->sumPrepaymentByDate($item->date, 'card');
            $item->debt_supplier = $item->marginality - $item->prepayment_sum - $item->refunds_sum;
            $item->sale_of_air_sum = $this->ordersRepository->sumPriceSalesOfAirMarginality($item->date);
            $item->average_marginality = $this->ordersRepository->averageMarginalityByDate($item->date);
            $item->additional_sales_sum = $this->orderItemsRepository->sumAdditionalSalesByDate($item->date);
            $item->additional_sales_marginality_sum = $this->orderItemsRepository->sumMarginalityAdditionalSalesByDate($item->date);
            $item->update();
        }
    }
}
