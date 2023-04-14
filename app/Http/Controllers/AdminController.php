<?php

namespace App\Http\Controllers;

use App\Models\Enums\CallbackStatus;
use App\Models\Enums\ClientStatus;
use App\Models\Enums\ClientSubStatus;
use App\Models\Enums\InvoicesStatus;
use App\Models\Enums\Options;
use App\Models\Enums\OrderStatus;
use App\Models\Enums\PaymentMethod;
use App\Models\Enums\SupportStatus;
use App\Repositories\OptionsRepository;
use Illuminate\Http\Request;
use Illuminate\Support\Carbon;
use Inertia\Inertia;
use Inertia\Response;
use Ramsey\Uuid\Type\Integer;

class AdminController extends Controller
{
    private mixed $optionsRepository;

    final public function __construct()
    {
        parent::__construct();
        $this->optionsRepository = app(OptionsRepository::class);
    }

    final public function getLogo()
    {
        return $this->optionsRepository->getOptionValue('logo');
    }

    final public function content(): Response
    {
        return Inertia::render('Admin/Content/Index', [
            'logo' => $this->getLogo()
        ]);
    }

    final public function users(): Response
    {
        return Inertia::render('Admin/Options/Users/Index');
    }

    final public function crm(): Response
    {
        return Inertia::render('Admin/Crm/Index');
    }

    final public function images(): Response
    {
        return Inertia::render('Admin/Content/Images/Index');
    }

    final public function productReviews(): Response
    {
        return Inertia::render('Admin/Content/Reviews/Products/Index');
    }

    final public function socialReviews(): Response
    {
        return Inertia::render('Admin/Content/Reviews/Socials/Index');
    }

    final public function products(): Response
    {
        return Inertia::render('Admin/Content/Products/Index');
    }

    final public function pages(): Response
    {
        return Inertia::render('Admin/Content/Pages/Index');
    }

    final public function categories(): Response
    {
        return Inertia::render('Admin/Content/Categories/Index');
    }

    final public function providers(): Response
    {
        return Inertia::render('Admin/Options/Providers/Index');
    }

    final public function roles(): Response
    {
        return Inertia::render('Admin/Options/Roles/Index');
    }

    final public function permissions(): Response
    {
        return Inertia::render('Admin/Options/Permissions/Index');
    }

    final public function orders(): Response
    {
        return Inertia::render('Admin/Crm/Orders/Index', [
            'statuses' => OrderStatus::state,
            'clientStatuses' => ClientStatus::state,
            'payment_methods' => PaymentMethod::state,
            'invoiceStatuses' => InvoicesStatus::state
        ]);
    }

    final public function clients(): Response
    {
        return Inertia::render('Admin/Crm/Clients/Index', [
            'orderStatuses' => OrderStatus::state,
            'statuses' => ClientStatus::state,
            'subStatuses' => ClientSubStatus::state
        ]);
    }

    final public function callbacks(): Response
    {
        return Inertia::render('Admin/Crm/Callbacks/Index', [
            'statuses' => CallbackStatus::state
        ]);
    }

    final public function supports(): Response
    {
        return Inertia::render('Admin/Crm/Supports/Index', [
            'statuses' => SupportStatus::state
        ]);
    }

    final public function invoices(): Response
    {
        return Inertia::render('Admin/Crm/Invoices/Index', [
            'statuses' => InvoicesStatus::state
        ]);
    }

    final public function options(): Response
    {
        return Inertia::render('Admin/Options/Index');
    }

    final public function optionsMain(): Response
    {
        return Inertia::render('Admin/Options/Main/Index');
    }

    final public function optionsScripts(): Response
    {
        return Inertia::render('Admin/Options/Scripts/Index');
    }

    final public function optionsBanners(): Response
    {
        return Inertia::render('Admin/Options/Banners/Index');
    }

    final public function optionsFaqs(): Response
    {
        return Inertia::render('Admin/Options/Faqs/Index');
    }

    final public function optionsAdvantages(): Response
    {
        return Inertia::render('Admin/Options/Advantages/Index');
    }

    final public function optionsPromoCodes(): Response
    {
        return Inertia::render('Admin/Options/PromoCodes/Index');
    }

    final public function optionsXmls(): Response
    {
        return Inertia::render('Admin/Options/Xmls/Index');
    }

    final public function optionsLogo(): Response
    {
        return Inertia::render('Admin/Options/Main/Logo');
    }

    final public function colors(): Response
    {
        return Inertia::render('Admin/Options/Colors/Index');
    }

    final public function characteristics(): Response
    {
        return Inertia::render('Admin/Options/Characteristics/Index');
    }

    final public function sizes(): Response
    {
        return Inertia::render('Admin/Options/Sizes/Index');
    }

    final public function statistics(): Response
    {
        return Inertia::render('Admin/Statistics/Index');
    }

    final public function statisticCosts(): Response
    {
        return Inertia::render('Admin/Statistics/Costs/Index');
    }

    final public function statisticRefunds(): Response
    {
        return Inertia::render('Admin/Statistics/Refunds/Index');
    }

    final public function statisticCostCategories(): Response
    {
        return Inertia::render('Admin/Statistics/CostCategories/Index');
    }

    final public function statisticProfits(): Response
    {
        return Inertia::render('Admin/Statistics/Profits/Index');
    }

    final public function statisticOrders(): Response
    {
        return Inertia::render('Admin/Statistics/Orders/Index');
    }

    final public function statisticMarketing(): Response
    {
        return Inertia::render('Admin/Statistics/Marketing/Index');
    }

    final public function statisticManagers(): Response
    {
        return Inertia::render('Admin/Statistics/Managers/Index');
    }

    final public function statisticProducts(): Response
    {
        return Inertia::render('Admin/Statistics/Products/Index');
    }
}
