<?php

namespace App\Http\Controllers\Api;

use App\Repositories\FaqsRepository;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;

class FaqsController extends BaseController
{
    private mixed $faqsRepository;

    public function __construct()
    {
        parent::__construct();
        $this->faqsRepository = app(FaqsRepository::class);
    }

    public function index(): JsonResponse
    {
        return $this->returnResponse([
            'success' => true,
            'result' => $this->faqsRepository->getAllWithPaginate(),
        ]);
    }

    public function create(Request $request): JsonResponse
    {
        return $this->returnResponse([
            'success' => true,
            'result' => $this->faqsRepository->create($request->all()),
        ]);
    }

    public function update($id, Request $request): JsonResponse
    {
        return $this->returnResponse([
            'success' => true,
            'result' => $this->faqsRepository->update($id, $request->all()),
        ]);
    }

    public function destroy($id): JsonResponse
    {
        return $this->returnResponse([
            'success' => true,
            'result' => $this->faqsRepository->destroy($id),
        ]);
    }

    public function edit($id): JsonResponse
    {
        return $this->returnResponse([
            'success' => true,
            'result' => $this->faqsRepository->getById($id),
        ]);
    }

    public function list(): JsonResponse
    {
        return $this->returnResponse([
            'success' => true,
            'result' => $this->faqsRepository->getAllToPublic(),
        ]);
    }
}
