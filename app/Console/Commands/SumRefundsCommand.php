<?php

namespace App\Console\Commands;

use App\Services\RefundsStatisticsService;
use Illuminate\Console\Command;

class SumRefundsCommand extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'refunds:sum';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Sum refunds';

    private mixed $refundsStatisticsService;

    public function __construct()
    {
        parent::__construct();
        $this->refundsStatisticsService = app(RefundsStatisticsService::class);
    }

    /**
     * Execute the console command.
     *
     * @return int
     */
    public function handle()
    {
        $this->refundsStatisticsService->setData();
        return Command::SUCCESS;
    }
}
