<?php

namespace App\Console\Commands;

use App\Models\Enums\OrderStatus;
use App\Repositories\Statistics\ManagerSalariesRepository;
use App\Repositories\OrderItemsRepository;
use App\Repositories\OrdersRepository;
use App\Repositories\UsersRepository;
use Carbon\Carbon;
use Illuminate\Console\Command;

class SumManagersSalary extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'managers_salary:sum';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Sum managers salary';

    private mixed $managersSalaryRepository;
    private mixed $orderItemsRepository;
    private mixed $ordersRepository;
    private mixed $usersRepository;

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
        $this->managersSalaryRepository = app(ManagerSalariesRepository::class);
        $this->usersRepository = app(UsersRepository::class);
    }

    /**
     * Execute the console command.
     *
     * @return int
     */
    public function handle()
    {
        $dateNow = Carbon::now()->format('Y-m-d');

        $managers = $this->usersRepository->getManagersList();

        if (!count($this->managersSalaryRepository->getRowsByDate($dateNow))) {
            $model = $this->managersSalaryRepository->createNewModel();
            $model->date = $dateNow;
            $model->save();

            foreach ($managers as $manager) {
                $this->createManagerModel($dateNow, $manager->id);
            }
        }

        foreach ($this->managersSalaryRepository->getAll() as $managerSalary) {
            foreach ($managers as $manager) {
                if (!$this->managersSalaryRepository->getRowByDateAndManagerId($managerSalary->date, $manager->id)) {
                    $this->createManagerModel($managerSalary->date, $manager->id);
                }
            }
        }

        foreach ($this->managersSalaryRepository->getAll() as $item) {
            $item->count_applications = $this->ordersRepository->countOrdersByStatus(null, $item->date, $item->manager_id);
            $item->count_additional_sales = $this->orderItemsRepository->countAdditionalSales($item->date, $item->manager_id);

            $item->in_process_applications = $this->ordersRepository->sumIndefiniteApplications($item->date, $item->manager_id);
            $item->returned_applications = $this->ordersRepository->countOrdersByStatus('return', $item->date, $item->manager_id);
            $item->canceled_applications = $this->ordersRepository->countOrdersByStatus('canceled', $item->date, $item->manager_id);
            $item->done_applications = $this->ordersRepository->countOrdersByStatus('done', $item->date, $item->manager_id);
            $item->total_applications = $this->ordersRepository->sumApprovalApplications($item->date, $item->manager_id);

            $item->count_parcel_reminder = $this->ordersRepository->countWithParcelReminder($item->date, $item->manager_id);

            $item->count_sale_of_air = $this->ordersRepository->sumCountSalesOfAirMarginality($item->date, $item->manager_id);
            $item->price_sale_of_air = $this->ordersRepository->sumPriceSalesOfAirMarginality($item->date, $item->manager_id);
            $item->total_sale_of_air = $item->count_sale_of_air * 15;

            $item->sum_additional_sales = $this->orderItemsRepository->sumAdditionalSalesMarginality($item->date, $item->manager_id);
            $item->count_prepayments = $this->ordersRepository->countPrepaymentsByDateAndManagerId($item->date, $item->manager_id);
//            $item->prepayments_amount = $item->count_prepayments * 10;

            $pr = $this->ordersRepository->countWithParcelReminder($item->date, $item->manager_id);
            $wpr = $this->ordersRepository->countWithoutParcelReminder($item->date, $item->manager_id);

            $item->sum_price_applications = $pr * 15;
            $item->sum_price_applications += $wpr * 12;

//            if ($item->count_applications <= 50) {
//                $item->sum_price_applications = $pr * 15;
//                $item->sum_price_applications += $wpr * 12;
//            } else {
//                $item->sum_price_applications = $pr * 15;
//                $item->sum_price_applications += $wpr * 12;
//            }
            $item->sum_price_additional_sales = $item->count_additional_sales * 15;

            $item->total_price = $item->sum_price_applications + $item->sum_price_additional_sales + $item->total_sale_of_air;
            $item->update();
        }
    }

    public function createManagerModel($date, $managerId)
    {
        $managerModel = $this->managersSalaryRepository->createNewModel();
        $managerModel->date = $date;
        $managerModel->manager_id = $managerId;
        return $managerModel->save();
    }
}
