<?php

namespace App\Http\Controllers;

use App\Models\Enums\OrderStatus;
use App\Models\Enums\PaymentMethod;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;

class AdminController extends Controller
{
    public function __construct()
    {
        parent::__construct();
    }

    public function users(): Response
    {
        return Inertia::render('Options/Users/Index');
    }

    public function roles(): Response
    {
        return Inertia::render('Options/Roles/Index');
    }

    public function products(): Response
    {
        return Inertia::render('Products/Index');
    }

    public function categories(): Response
    {
        return Inertia::render('Categories/Index');
    }

    public function providers(): Response
    {
        return Inertia::render('Providers/Index');
    }

    public function permissions(): Response
    {
        return Inertia::render('Options/Permissions/Index');
    }

    public function orders(): Response
    {
        return Inertia::render('Orders/Index', [
            'statuses' => OrderStatus::state,
            'payment_methods' => PaymentMethod::state
        ]);
    }

    public function options(): Response
    {
        return Inertia::render('Options/Index');
    }

    public function colors(): Response
    {
        return Inertia::render('Options/Colors/Index');
    }

    public function sizes(): Response
    {
        return Inertia::render('Options/Sizes/Index');
    }

    public function images(): Response
    {
        return Inertia::render('Images/Index');
    }

    public function productReviews(): Response
    {
        return Inertia::render('Reviews/Products/Index');
    }

    public function socialReviews(): Response
    {
        return Inertia::render('Reviews/Socials/Index');
    }

    public function statistics(): Response
    {
        return Inertia::render('Statistics/Index');
    }

    public function statisticCosts(): Response
    {
        return Inertia::render('Statistics/Costs/Index');
    }

    public function statisticCostCategories(): Response
    {
        return Inertia::render('Statistics/CostCategories/Index');
    }
}
