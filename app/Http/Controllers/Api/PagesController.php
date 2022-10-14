<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Requests\Admin\Pages\CreateRequest;
use App\Http\Requests\Admin\Pages\UpdateRequest;
use App\Repositories\PagesRepository;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;

class PagesController extends BaseController
{
    private mixed $pagesRepository;

    public function __construct()
    {
        parent::__construct();
        $this->pagesRepository = app(PagesRepository::class);
    }

    public function index(Request $request): JsonResponse
    {
        $result = $this->pagesRepository->getAllWithPaginate();

        return $this->returnResponse([
            'success' => true,
            'result' => $result,
        ]);
    }

    public function create(Request $request): JsonResponse
    {
        $result = $this->pagesRepository->create($request->all());

        return $this->returnResponse([
            'success' => true,
            'result' => $result,
        ]);
    }

    public function update($id, Request $request): JsonResponse
    {
        $result = $this->pagesRepository->update($id, $request->all());

        return $this->returnResponse([
            'success' => true,
            'result' => $result,
        ]);
    }

    public function destroy($id): JsonResponse
    {
        $result = $this->pagesRepository->destroy($id);

        return $this->returnResponse([
            'success' => true,
            'result' => $result,
        ]);
    }

    public function edit($id): JsonResponse
    {
        $result = $this->pagesRepository->getById($id);

        return $this->returnResponse([
            'success' => true,
            'result' => $result,
        ]);
    }
}
