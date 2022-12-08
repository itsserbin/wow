<?php

namespace App\Models\Enums;

class Permissions
{
    const state = [
        ['name' => 'Show bookkeeping', 'slug' => 'show-bookkeeping'],
        ['name' => 'Show bookkeeping profits', 'slug' => 'show-bookkeeping-profits'],
        ['name' => 'Show bookkeeping costs', 'slug' => 'show-bookkeeping-costs'],
        ['name' => 'Show bookkeeping orders', 'slug' => 'show-bookkeeping-orders'],
        ['name' => 'Show bookkeeping marketing', 'slug' => 'show-bookkeeping-marketing'],
        ['name' => 'Show bookkeeping managers', 'slug' => 'show-bookkeeping-managers'],
        ['name' => 'Show bookkeeping cash-flows', 'slug' => 'show-bookkeeping-cash-flows'],
        ['name' => 'Create bookkeeping cash-flows', 'slug' => 'create-bookkeeping-cash-flows'],
        ['name' => 'Destroy bookkeeping cash-flows', 'slug' => 'destroy-bookkeeping-cash-flows'],

        ['name' => 'Show options', 'slug' => 'show-options'],
        ['name' => 'Show main options', 'slug' => 'show-main-options'],
        ['name' => 'Edit main options', 'slug' => 'edit-main-options'],
        ['name' => 'Show scripts options', 'slug' => 'show-scripts-options'],
        ['name' => 'Edit scripts options', 'slug' => 'edit-scripts-options'],

        ['name' => 'Show nova poshta senders', 'slug' => 'show-option-nova-poshta-senders'],
        ['name' => 'Create nova poshta senders', 'slug' => 'create-option-nova-poshta-senders'],
        ['name' => 'Destroy nova poshta senders', 'slug' => 'destroy-option-nova-poshta-senders'],
        ['name' => 'Edit nova poshta senders', 'slug' => 'edit-option-nova-poshta-senders'],

        ['name' => 'Edit products', 'slug' => 'edit-products'],
        ['name' => 'Create products', 'slug' => 'create-products'],
        ['name' => 'Show products', 'slug' => 'show-products'],
        ['name' => 'Destroy products', 'slug' => 'destroy-products'],

        ['name' => 'Edit orders', 'slug' => 'edit-orders'],
        ['name' => 'Create orders', 'slug' => 'create-orders'],
        ['name' => 'Show orders', 'slug' => 'show-orders'],
        ['name' => 'Destroy orders', 'slug' => 'destroy-orders'],

        ['name' => 'Edit clients', 'slug' => 'edit-clients'],
        ['name' => 'Create clients', 'slug' => 'create-clients'],
        ['name' => 'Show clients', 'slug' => 'show-clients'],
        ['name' => 'Destroy clients', 'slug' => 'destroy-clients'],

        ['name' => 'Edit users', 'slug' => 'edit-users'],
        ['name' => 'Create users', 'slug' => 'create-users'],
        ['name' => 'Show users', 'slug' => 'show-users'],
        ['name' => 'Destroy users', 'slug' => 'destroy-users'],

        ['name' => 'Edit categories', 'slug' => 'edit-categories'],
        ['name' => 'Create categories', 'slug' => 'create-categories'],
        ['name' => 'Show categories', 'slug' => 'show-categories'],
        ['name' => 'Destroy categories', 'slug' => 'destroy-categories'],

        ['name' => 'Edit reviews', 'slug' => 'edit-reviews'],
        ['name' => 'Create reviews', 'slug' => 'create-reviews'],
        ['name' => 'Show reviews', 'slug' => 'show-reviews'],
        ['name' => 'Destroy reviews', 'slug' => 'destroy-reviews'],

        ['name' => 'Edit providers', 'slug' => 'edit-providers'],
        ['name' => 'Create providers', 'slug' => 'create-providers'],
        ['name' => 'Show providers', 'slug' => 'show-providers'],
        ['name' => 'Destroy providers', 'slug' => 'destroy-providers'],

        ['name' => 'Edit pages', 'slug' => 'edit-pages'],
        ['name' => 'Create pages', 'slug' => 'create-pages'],
        ['name' => 'Show pages', 'slug' => 'show-pages'],
        ['name' => 'Destroy pages', 'slug' => 'destroy-pages'],

        ['name' => 'Edit colors', 'slug' => 'edit-colors'],
        ['name' => 'Create colors', 'slug' => 'create-colors'],
        ['name' => 'Show colors', 'slug' => 'show-colors'],
        ['name' => 'Destroy colors', 'slug' => 'destroy-colors'],

        ['name' => 'Edit roles', 'slug' => 'edit-roles'],
        ['name' => 'Create roles', 'slug' => 'create-roles'],
        ['name' => 'Show roles', 'slug' => 'show-roles'],
        ['name' => 'Destroy roles', 'slug' => 'destroy-roles'],

        ['name' => 'Edit permissions', 'slug' => 'edit-permissions'],
        ['name' => 'Create permissions', 'slug' => 'create-permissions'],
        ['name' => 'Show permissions', 'slug' => 'show-permissions'],
        ['name' => 'Destroy permissions', 'slug' => 'destroy-permissions'],

        ['name' => 'Edit banners', 'slug' => 'edit-banners'],
        ['name' => 'Create banners', 'slug' => 'create-banners'],
        ['name' => 'Show banners', 'slug' => 'show-banners'],
        ['name' => 'Destroy banners', 'slug' => 'destroy-banners'],

        ['name' => 'Edit translations', 'slug' => 'edit-translations'],
        ['name' => 'Create translations', 'slug' => 'create-translations'],
        ['name' => 'Show translations', 'slug' => 'show-translations'],
        ['name' => 'Destroy translations', 'slug' => 'destroy-translations'],

        ['name' => 'Edit advantages', 'slug' => 'edit-advantages'],
        ['name' => 'Create advantages', 'slug' => 'create-advantages'],
        ['name' => 'Show advantages', 'slug' => 'show-advantages'],
        ['name' => 'Destroy advantages', 'slug' => 'destroy-advantages'],

        ['name' => 'Edit faq', 'slug' => 'edit-faq'],
        ['name' => 'Create faq', 'slug' => 'create-faq'],
        ['name' => 'Show faq', 'slug' => 'show-faq'],
        ['name' => 'Destroy faq', 'slug' => 'destroy-faq'],

        ['name' => 'Edit promo-codes', 'slug' => 'edit-promo-codes'],
        ['name' => 'Create promo-codes', 'slug' => 'create-promo-codes'],
        ['name' => 'Show promo-codes', 'slug' => 'show-promo-codes'],
        ['name' => 'Destroy promo-codes', 'slug' => 'destroy-promo-codes'],

        ['name' => 'Edit xml', 'slug' => 'edit-xml'],
        ['name' => 'Create xml', 'slug' => 'create-xml'],
        ['name' => 'Show xml', 'slug' => 'show-xml'],
        ['name' => 'Destroy xml', 'slug' => 'destroy-xml'],

        ['name' => 'Edit sizes', 'slug' => 'edit-sizes'],
        ['name' => 'Create sizes', 'slug' => 'create-sizes'],
        ['name' => 'Show sizes', 'slug' => 'show-sizes'],
        ['name' => 'Destroy sizes', 'slug' => 'destroy-sizes'],

        ['name' => 'Edit telegrams', 'slug' => 'edit-telegrams'],
        ['name' => 'Create telegrams', 'slug' => 'create-telegrams'],
        ['name' => 'Show telegrams', 'slug' => 'show-telegrams'],
        ['name' => 'Destroy telegrams', 'slug' => 'destroy-telegrams'],

        ['name' => 'Edit callbacks', 'slug' => 'edit-callbacks'],
        ['name' => 'Create callbacks', 'slug' => 'create-callbacks'],
        ['name' => 'Show callbacks', 'slug' => 'show-callbacks'],
        ['name' => 'Destroy callbacks', 'slug' => 'destroy-callbacks'],

        ['name' => 'Edit images', 'slug' => 'edit-images'],
        ['name' => 'Create images', 'slug' => 'create-images'],
        ['name' => 'Show images', 'slug' => 'show-images'],
        ['name' => 'Destroy images', 'slug' => 'destroy-images'],

        ['name' => 'Edit invoices', 'slug' => 'edit-invoices'],
        ['name' => 'Create invoices', 'slug' => 'create-invoices'],
        ['name' => 'Show invoices', 'slug' => 'show-invoices'],
        ['name' => 'Destroy invoices', 'slug' => 'destroy-invoices'],

        ['name' => 'Edit supports', 'slug' => 'edit-supports'],
        ['name' => 'Show supports', 'slug' => 'show-supports'],
        ['name' => 'Destroy supports', 'slug' => 'destroy-supports'],
    ];
}
