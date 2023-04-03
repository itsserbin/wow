<?php

namespace App\Console\Commands;

use App\Services\MonobankService;
use Illuminate\Console\Command;

class MonobankApiCommand extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'api:monobank';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Get data from monobank API and set for DB';

    private mixed $monobankService;

    public function __construct()
    {
        parent::__construct();
        $this->monobankService = app(MonobankService::class);
    }

    /**
     * Execute the console command.
     *
     * @return int
     */
    final public function handle()
    {
        return $this->monobankService->setData();
    }
}
