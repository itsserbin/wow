<?php

namespace App\Console;

use App\Console\Commands\ApiNovaPoshtaCommand;
use App\Console\Commands\MonobankApiCommand;
use App\Console\Commands\OrdersStatisticCommand;
use App\Console\Commands\ProductStatisticsCommand;
use App\Console\Commands\SumCostsCommand;
use App\Console\Commands\SumManagersSalary;
use App\Console\Commands\SumProfitCommand;
use App\Console\Commands\SumRefundsCommand;
use App\Console\Commands\UpdateProductStatisticsCommand;
use Illuminate\Console\Scheduling\Schedule;
use Illuminate\Foundation\Console\Kernel as ConsoleKernel;

class Kernel extends ConsoleKernel
{
    protected $commands = [
        SumManagersSalary::class,
        ApiNovaPoshtaCommand::class,
        SumProfitCommand::class,
        OrdersStatisticCommand::class,
        SumCostsCommand::class,
        UpdateProductStatisticsCommand::class,
        ProductStatisticsCommand::class,
        MonobankApiCommand::class,
        SumRefundsCommand::class,
    ];

    /**
     * Define the application's command schedule.
     *
     * @param Schedule $schedule
     * @return void
     */
    final public function schedule(Schedule $schedule): void
    {
        $schedule->command('products:statistics')->everyThreeHours();
        $schedule->command('product:update_statistic')->everyThirtyMinutes();
        $schedule->command('costs:sum')->everyThirtyMinutes();
        $schedule->command('orderStatistics:count')->everyThirtyMinutes();
        $schedule->command('managers_salary:sum')->everyThirtyMinutes();
        $schedule->command('api_nova_poshta:order_integration')->everyThirtyMinutes();
        $schedule->command('profits:sum')->everyThirtyMinutes();
        $schedule->command('marketing_statistic:sum')->everyThirtyMinutes();
        $schedule->command('api:monobank')->everyThirtyMinutes();
        $schedule->command('refunds:sum')->everyThirtyMinutes();
    }

    /**
     * Register the commands for the application.
     *
     * @return void
     */
    final public function commands(): void
    {
        $this->load(__DIR__ . '/Commands');

        require base_path('routes/console.php');
    }
}
