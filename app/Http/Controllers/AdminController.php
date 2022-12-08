<?php

namespace App\Http\Controllers;

use App\Models\Enums\CallbackStatus;
use App\Models\Enums\ClientStatus;
use App\Models\Enums\ClientSubStatus;
use App\Models\Enums\OrderStatus;
use App\Models\Enums\PaymentMethod;
use App\Models\Enums\SupportStatus;
use Illuminate\Http\Request;
use Illuminate\Support\Carbon;
use Inertia\Inertia;
use Inertia\Response;

class AdminController extends Controller
{
    public function __construct()
    {
        parent::__construct();
    }

    public function content(): Response
    {
        return Inertia::render('Content/Index');
    }

    public function users(): Response
    {
        return Inertia::render('Options/Users/Index');
    }

    public function crm(): Response
    {
        return Inertia::render('Crm/Index');
    }

    public function images(): Response
    {
        return Inertia::render('Content/Images/Index');
    }

    public function productReviews(): Response
    {
        return Inertia::render('Content/Reviews/Products/Index');
    }

    public function socialReviews(): Response
    {
        return Inertia::render('Content/Reviews/Socials/Index');
    }

    public function products(): Response
    {
        return Inertia::render('Content/Products/Index');
    }

    public function pages(): Response
    {
        return Inertia::render('Content/Pages/Index');
    }

    public function categories(): Response
    {
        return Inertia::render('Content/Categories/Index');
    }

    public function providers(): Response
    {
        return Inertia::render('Options/Providers/Index');
    }

    public function roles(): Response
    {
        return Inertia::render('Options/Roles/Index');
    }

    public function permissions(): Response
    {
        return Inertia::render('Options/Permissions/Index');
    }

    public function orders(): Response
    {
        return Inertia::render('Crm/Orders/Index', [
            'statuses' => OrderStatus::state,
            'payment_methods' => PaymentMethod::state
        ]);
    }

    public function clients(): Response
    {
        return Inertia::render('Crm/Clients/Index');
    }

    public function callbacks(): Response
    {
        return Inertia::render('Crm/Callbacks/Index', [
            'statuses' => CallbackStatus::state
        ]);
    }

    public function supports(): Response
    {
        return Inertia::render('Crm/Supports/Index', [
            'statuses' => SupportStatus::state
        ]);
    }

    public function invoices(): Response
    {
        return Inertia::render('Crm/Invoices/Index');
    }

    public function options(): Response
    {
        return Inertia::render('Options/Index');
    }

    public function optionsMain(): Response
    {
        return Inertia::render('Options/Main/Index');
    }

    public function optionsScripts(): Response
    {
        return Inertia::render('Options/Scripts/Index');
    }

    public function optionsBanners(): Response
    {
        return Inertia::render('Options/Banners/Index');
    }

    public function optionsFaqs(): Response
    {
        return Inertia::render('Options/Faqs/Index');
    }

    public function optionsAdvantages(): Response
    {
        return Inertia::render('Options/Advantages/Index');
    }

    public function optionsPromoCodes(): Response
    {
        return Inertia::render('Options/PromoCodes/Index');
    }

    public function optionsXmls(): Response
    {
        return Inertia::render('Options/Xmls/Index');
    }

    public function colors(): Response
    {
        return Inertia::render('Options/Colors/Index');
    }


    public function sizes(): Response
    {
        return Inertia::render('Options/Sizes/Index');
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

    public function statisticProfits(): Response
    {
        return Inertia::render('Statistics/Profits/Index');
    }

    public function statisticOrders(): Response
    {
        return Inertia::render('Statistics/Orders/Index');
    }

    public function statisticMarketing(): Response
    {
        return Inertia::render('Statistics/Marketing/Index');
    }

    public function statisticManagers(): Response
    {
        return Inertia::render('Statistics/Managers/Index');
    }

    public function statisticProducts(): Response
    {
        return Inertia::render('Statistics/Products/Index');
    }
}
