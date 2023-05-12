<?php

namespace App\Console\Commands;

use App\Repositories\Statistics\CostAndProfitCategoriesRepository;
use App\Repositories\Statistics\CostsRepository;
use App\Repositories\Statistics\ManagerSalariesRepository;
use Carbon\Carbon;
use Illuminate\Console\Command;

class SumCostsCommand extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'costs:sum';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Sum costs';

    private $managersSalaryRepository;
    private $costsRepository;
    private $costCategoriesRepository;

    /**
     * Create a new command instance.
     *
     * @return void
     */
    public function __construct()
    {
        parent::__construct();
        $this->managersSalaryRepository = app(ManagerSalariesRepository::class);
        $this->costsRepository = app(CostsRepository::class);
        $this->costCategoriesRepository = app(CostAndProfitCategoriesRepository::class);
    }

    /**
     * Execute the console command.
     *
     * @return int
     */
    public function handle()
    {

        $dateNow = Carbon::now()->toDateString();

        $statisticsNow = $this->costsRepository->getManagerSalaryRowByDate($dateNow);

        if (!$statisticsNow) {
            $this->createCostsManagerSalary($dateNow);
        }

        foreach ($this->costsRepository->getAllManagerSalaryRows() as $item) {
            if (!$this->costsRepository->getManagerSalaryRowByDate($item->date)) {
                $this->createCostsManagerSalary($item->date);
            }
            $item->sum = $this->managersSalaryRepository->sumColumnByDateRangeAndManagerId('total_price', $item->date);
            $item->total = $item->quantity * $item->sum;
            $item->update();
        }
    }

    public function createCostsManagerSalary($date)
    {
        $costCategoriesItem = $this->costCategoriesRepository->getByCode('#CC');

        if ($costCategoriesItem){
            $data = [
                'cost_category_id' => $costCategoriesItem->id,
                'comment' => null,
                'quantity' => 1,
                'date' => $date,
                'user_id' => null,
                'sum' => $this->managersSalaryRepository->sumColumnByDateRangeAndManagerId('total_price', $date),
                'total' => $this->managersSalaryRepository->sumColumnByDateRangeAndManagerId('total_price', $date)
            ];

            $this->costsRepository->create($data);
        }
    }
}
