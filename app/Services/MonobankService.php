<?php

namespace App\Services;

use App\Repositories\Statistics\CostAndProfitCategoriesRepository;
use App\Repositories\Statistics\CostsRepository;

class MonobankService
{
    private mixed $apiService;
    private mixed $token;
    private mixed $costCategoriesRepository;
    private mixed $costsRepository;

    public function __construct()
    {
        $this->apiService = app(ApiService::class);
        $this->token = env('MONOBANK_API');
        $this->costCategoriesRepository = app(CostAndProfitCategoriesRepository::class);
        $this->costsRepository = app(CostsRepository::class);
    }

    /**
     */
    final public function getAccountNumber()
    {
        $url = 'https://api.monobank.ua/personal/client-info';

        $headers = ['X-Token: ' . $this->token];

        $response = $this->apiService->response($url, [], 'GET', $headers);

        if ($response['success'] === true) {
            foreach ($response['result']['accounts'] as $item) {
                if ($item['type'] === 'white') {
                    return $item['id'];
                }
            }
        }

        return false;
    }

    final public function getExtract(): array
    {
        $fromDateString = '01.04.2023';
        $fromDate = \Carbon\Carbon::createFromFormat('d.m.Y', $fromDateString);
        $from = $fromDate->timestamp;

        $toDateString = '26.04.2023';
        $toDate = \Carbon\Carbon::createFromFormat('d.m.Y', $toDateString);
        $to = $toDate->timestamp;

        $url = 'https://api.monobank.ua/personal/statement/' .
            $this->getAccountNumber() .
            '/' .
            $from .
//            \Carbon\Carbon::now()->subDays(30)->timestamp .
            '/' .
            $to;
//            time();

        $headers = ['X-Token: ' . $this->token];

        return $this->apiService->response($url, [], 'GET', $headers);
    }

    final public function setData()
    {
        $data = $this->getExtract();

        foreach ($data['result'] as $item) {
            if (isset($item['comment'])) {

                if (preg_match('/^#RC-\d+$/', $item['comment'])) {
                    $orderId = explode('-', $item['comment'])[1];
                    $code = '#RC';
                } else {
                    $code = $item['comment'];
                }

                $date = date("Y-m-d H:i:s", $item['time']);

                $ccModel = $this->costCategoriesRepository->getByCode($code);

                if ($ccModel && !$this->costsRepository->getByCostCategoryAndDate($ccModel->id, $date)) {

                    $this->costsRepository->onCreate([
                        'date' => $date,
                        'quantity' => 1,
                        'sum' => (int)(abs($item['amount']) / 100) === abs($item['amount']) / 100
                            ? number_format(abs($item['amount']) / 100, 0, '.', '')
                            : number_format(abs($item['amount']) / 100, 2, '.', ''),
                        'cost_category_id' => $ccModel->id
                    ]);
                }

            }
        }
    }
}
