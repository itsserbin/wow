<?php

use App\Repositories\TranslationsRepository;

$translationRepository = new TranslationsRepository;

return [
    'text_cart_title' => $translationRepository->getBySlug('text_cart_title') ? $translationRepository->getBySlug('text_cart_title')->ru : 'text_cart_title',
    'text_promo_code' => $translationRepository->getBySlug('text_promo_code') ? $translationRepository->getBySlug('text_promo_code')->ru : 'text_promo_code',
    'text_your_promo_code' => $translationRepository->getBySlug('text_your_promo_code') ? $translationRepository->getBySlug('text_your_promo_code')->ru : 'text_your_promo_code',
    'text_cart_total_count' => $translationRepository->getBySlug('text_cart_total_count') ? $translationRepository->getBySlug('text_cart_total_count')->ru : 'text_cart_total_count',
    'text_cart_price_without_discount' => $translationRepository->getBySlug('text_cart_price_without_discount') ? $translationRepository->getBySlug('text_cart_price_without_discount')->ru : 'text_cart_price_without_discount',
    'text_cart_total_price' => $translationRepository->getBySlug('text_cart_total_price') ? $translationRepository->getBySlug('text_cart_total_price')->ru : 'text_cart_total_price',
    'text_cart_additional_products' => $translationRepository->getBySlug('text_cart_additional_products') ? $translationRepository->getBySlug('text_cart_additional_products')->ru : 'text_cart_additional_products',
    'text_cart_activate_promocode' => $translationRepository->getBySlug('text_cart_activate_promocode') ? $translationRepository->getBySlug('text_cart_activate_promocode')->ru : 'text_cart_activate_promocode',
    'text_cart_deactivate_promocode' => $translationRepository->getBySlug('text_cart_deactivate_promocode') ? $translationRepository->getBySlug('text_cart_deactivate_promocode')->ru : 'text_cart_deactivate_promocode',
    'text_thanks_page_title' => $translationRepository->getBySlug('text_thanks_page_title') ? $translationRepository->getBySlug('text_thanks_page_title')->ru : 'text_thanks_page_title',
    'text_thanks_page_description' => $translationRepository->getBySlug('text_thanks_page_description') ? $translationRepository->getBySlug('text_thanks_page_description')->ru : 'text_thanks_page_description',
    'text_thanks_page_order_id' => $translationRepository->getBySlug('text_thanks_page_order_id') ? $translationRepository->getBySlug('text_thanks_page_order_id')->ru : 'text_thanks_page_order_id',
    'text_thanks_page_specials_ends' => $translationRepository->getBySlug('text_thanks_page_specials_ends') ? $translationRepository->getBySlug('text_thanks_page_specials_ends')->ru : 'text_thanks_page_specials_ends',
    'text_thanks_page_specials' => $translationRepository->getBySlug('text_thanks_page_specials') ? $translationRepository->getBySlug('text_thanks_page_specials')->ru : 'text_thanks_page_specials',
    'text_thanks_page_add_item_to_order' => $translationRepository->getBySlug('text_thanks_page_add_item_to_order') ? $translationRepository->getBySlug('text_thanks_page_add_item_to_order')->ru : 'text_thanks_page_add_item_to_order',
    'text_thanks_page_add_item_to_order_error' => $translationRepository->getBySlug('text_thanks_page_add_item_to_order_error') ? $translationRepository->getBySlug('text_thanks_page_add_item_to_order_error')->ru : 'text_thanks_page_add_item_to_order_error',
    'text_thanks_page_add_item' => $translationRepository->getBySlug('text_thanks_page_add_item') ? $translationRepository->getBySlug('text_thanks_page_add_item')->ru : 'text_thanks_page_add_item',
];
