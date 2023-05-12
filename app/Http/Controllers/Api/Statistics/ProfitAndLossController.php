<?php

namespace App\Http\Controllers\Api\Statistics;

use App\Http\Controllers\Api\BaseController;
use App\Http\Controllers\Controller;
use App\Repositories\Statistics\ProfitAndLossRepository;
use Illuminate\Http\Request;

class ProfitAndLossController extends BaseController
{
    private mixed $profitAndLossRepository;

    public function __construct()
    {
        parent::__construct();
        $this->profitAndLossRepository = app(ProfitAndLossRepository::class);
    }

    final public function index(Request $request)
    {
        $result = $this->profitAndLossRepository->getAllWithPaginate($request->all());

        return $this->returnResponse([
            'success' => true,
            'result' => $result
        ]);
    }
}
