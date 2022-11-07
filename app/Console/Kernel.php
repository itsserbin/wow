<?php

namespace App\Console;

use App\Console\Commands\ApiNovaPoshtaCommand;
use App\Console\Commands\OrdersStatisticCommand;
use App\Console\Commands\SumCostsCommand;
use App\Console\Commands\SumManagersSalary;
use App\Console\Commands\SumProfitCommand;
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
    ];

    /**
     * Define the application's command schedule.
     *
     * @param  \Illuminate\Console\Scheduling\Schedule  $schedule
     * @return void
     */
    protected function schedule(Schedule $schedule)
    {
        $schedule->command('product:update_statistic')->everyThirtyMinutes();
        $schedule->command('costs:sum')->everyThirtyMinutes();
        $schedule->command('orderStatistics:count')->everyThirtyMinutes();
        $schedule->command('managers_salary:sum')->everyThirtyMinutes();
        $schedule->command('api_nova_poshta:order_integration')->everyThirtyMinutes();
        $schedule->command('profits:sum')->everyThirtyMinutes();
        $schedule->command('marketing_statistic:sum')->everyThirtyMinutes();
    }

    /**
     * Register the commands for the application.
     *
     * @return void
     */
    protected function commands()
    {
        $this->load(__DIR__.'/Commands');

        require base_path('routes/console.php');
    }
}
