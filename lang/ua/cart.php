<?php

use App\Repositories\TranslationsRepository;

$translationRepository = new TranslationsRepository;

return [
    'text_cart_title' => $translationRepository->getBySlug('text_cart_title') ? $translationRepository->getBySlug('text_cart_title')->ua : 'text_cart_title',
    'text_promo_code' => $translationRepository->getBySlug('text_promo_code') ? $translationRepository->getBySlug('text_promo_code')->ua : 'text_promo_code',
    'text_your_promo_code' => $translationRepository->getBySlug('text_your_promo_code') ? $translationRepository->getBySlug('text_your_promo_code')->ua : 'text_your_promo_code',
    'text_cart_total_count' => $translationRepository->getBySlug('text_cart_total_count') ? $translationRepository->getBySlug('text_cart_total_count')->ua : 'text_cart_total_count',
    'text_cart_price_without_discount' => $translationRepository->getBySlug('text_cart_price_without_discount') ? $translationRepository->getBySlug('text_cart_price_without_discount')->ua : 'text_cart_price_without_discount',
    'text_cart_total_price' => $translationRepository->getBySlug('text_cart_total_price') ? $translationRepository->getBySlug('text_cart_total_price')->ua : 'text_cart_total_price',
    'text_cart_additional_products' => $translationRepository->getBySlug('text_cart_additional_products') ? $translationRepository->getBySlug('text_cart_additional_products')->ua : 'text_cart_additional_products',
    'text_cart_activate_promocode' => $translationRepository->getBySlug('text_cart_activate_promocode') ? $translationRepository->getBySlug('text_cart_activate_promocode')->ua : 'text_cart_activate_promocode',
    'text_cart_deactivate_promocode' => $translationRepository->getBySlug('text_cart_deactivate_promocode') ? $translationRepository->getBySlug('text_cart_deactivate_promocode')->ua : 'text_cart_deactivate_promocode',
    'text_thanks_page_title' => $translationRepository->getBySlug('text_thanks_page_title') ? $translationRepository->getBySlug('text_thanks_page_title')->ua : 'text_thanks_page_title',
    'text_thanks_page_description' => $translationRepository->getBySlug('text_thanks_page_description') ? $translationRepository->getBySlug('text_thanks_page_description')->ua : 'text_thanks_page_description',
    'text_thanks_page_order_id' => $translationRepository->getBySlug('text_thanks_page_order_id') ? $translationRepository->getBySlug('text_thanks_page_order_id')->ua : 'text_thanks_page_order_id',
    'text_thanks_page_specials_ends' => $translationRepository->getBySlug('text_thanks_page_specials_ends') ? $translationRepository->getBySlug('text_thanks_page_specials_ends')->ua : 'text_thanks_page_specials_ends',
    'text_thanks_page_specials' => $translationRepository->getBySlug('text_thanks_page_specials') ? $translationRepository->getBySlug('text_thanks_page_specials')->ua : 'text_thanks_page_specials',
    'text_thanks_page_add_item_to_order' => $translationRepository->getBySlug('text_thanks_page_add_item_to_order') ? $translationRepository->getBySlug('text_thanks_page_add_item_to_order')->ua : 'text_thanks_page_add_item_to_order',
    'text_thanks_page_add_item_to_order_error' => $translationRepository->getBySlug('text_thanks_page_add_item_to_order_error') ? $translationRepository->getBySlug('text_thanks_page_add_item_to_order_error')->ua : 'text_thanks_page_add_item_to_order_error',
    'text_thanks_page_add_item' => $translationRepository->getBySlug('text_thanks_page_add_item') ? $translationRepository->getBySlug('text_thanks_page_add_item')->ua : 'text_thanks_page_add_item',
];
