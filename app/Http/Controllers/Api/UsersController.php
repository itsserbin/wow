<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Repositories\UsersRepository;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;

class UsersController extends BaseController
{
    private mixed $usersRepository;

    public function __construct()
    {
        parent::__construct();
        $this->usersRepository = app(UsersRepository::class);
    }

    /**
     * @return JsonResponse
     */
    public function index(): JsonResponse
    {
        $result = $this->usersRepository->getAllWithPaginate();

        return $this->returnResponse([
            'success' => true,
            'result' => $result,
        ]);
    }

    /**
     * @return JsonResponse
     */
    public function all(): JsonResponse
    {
        $result = $this->usersRepository->getAll();

        return $this->returnResponse([
            'success' => true,
            'result' => $result,
        ]);
    }

    /**
     * @param UserCreateRequest $request
     * @return JsonResponse
     */
    public function create(Request $request): JsonResponse
    {
        $result = $this->usersRepository->create($request->all());

        return $this->returnResponse([
            'success' => true,
            'result' => $result,
        ]);
    }

    /**
     * @param $id
     * @return JsonResponse
     */
    public function edit($id): JsonResponse
    {
        $result = $this->usersRepository->getById($id);

        return $this->returnResponse([
            'success' => true,
            'result' => $result,
        ]);
    }

    /**
     * @param $id
     * @return JsonResponse
     */
    public function update($id, Request $request): JsonResponse
    {
        $result = $this->usersRepository->update($id, $request->all());

        return $this->returnResponse([
            'success' => true,
            'result' => $result,
        ]);
    }

    /**
     * @param $id
     * @return JsonResponse
     */
    public function destroy($id): JsonResponse
    {
        $result = $this->usersRepository->destroy($id);

        return $this->returnResponse([
            'success' => true,
            'result' => $result,
        ]);
    }

    /**
     * @param $search
     * @return JsonResponse
     */
    public function search($search): JsonResponse
    {
        $result = $this->usersRepository->search($search);

        return $this->returnResponse([
            'success' => true,
            'result' => $result,
        ]);
    }

    public function getManagersList(): JsonResponse
    {
        $result = $this->usersRepository->getManagersList();

        return $this->returnResponse([
            'success' => true,
            'result' => $result,
        ]);
    }

    public function getUser(): JsonResponse
    {
        $result = $this->usersRepository->getUser();

        return $this->returnResponse([
            'success' => true,
            'result' => $result,
        ]);
    }
}
