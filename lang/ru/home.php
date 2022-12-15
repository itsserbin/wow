<?php

use App\Repositories\TranslationsRepository;

$translationRepository = new TranslationsRepository;

return [
    'text_heading_home_page' => $translationRepository->getBySlug('text_heading_home_page') ? $translationRepository->getBySlug('text_heading_home_page')->ru : 'text_heading_home_page',
    'text_best_selling' => $translationRepository->getBySlug('text_best_selling') ? $translationRepository->getBySlug('text_best_selling')->ru : 'text_best_selling',
    'text_all_products' => $translationRepository->getBySlug('text_all_products') ? $translationRepository->getBySlug('text_all_products')->ru : 'text_all_products',
    'text_load_more' => $translationRepository->getBySlug('text_load_more') ? $translationRepository->getBySlug('text_load_more')->ru : 'text_load_more',
    'text_go_to_product_card' => $translationRepository->getBySlug('text_go_to_product_card') ? $translationRepository->getBySlug('text_go_to_product_card')->ru : 'text_go_to_product_card',
    'text_reviews' => $translationRepository->getBySlug('text_reviews') ? $translationRepository->getBySlug('text_reviews')->ru : 'text_reviews',
    'text_no_reviews' => $translationRepository->getBySlug('text_no_reviews') ? $translationRepository->getBySlug('text_no_reviews')->ru : 'text_no_reviews',
    'text_faq_heading' => $translationRepository->getBySlug('text_faq_heading') ? $translationRepository->getBySlug('text_faq_heading')->ru : 'text_faq_heading',
    'text_relative_products' => $translationRepository->getBySlug('text_relative_products') ? $translationRepository->getBySlug('text_relative_products')->ru : 'text_relative_products',
    'text_latest_products' => $translationRepository->getBySlug('text_latest_products') ? $translationRepository->getBySlug('text_latest_products')->ru : 'text_latest_products',
    'text_return_and_exchange' => $translationRepository->getBySlug('text_return_and_exchange') ? $translationRepository->getBySlug('text_return_and_exchange')->ru : 'text_return_and_exchange',
    'text_delivery_and_payment' => $translationRepository->getBySlug('text_delivery_and_payment') ? $translationRepository->getBySlug('text_delivery_and_payment')->ru : 'text_delivery_and_payment',
    'text_enter_name' => $translationRepository->getBySlug('text_enter_name') ? $translationRepository->getBySlug('text_enter_name')->ru : 'text_enter_name',
    'text_enter_review' => $translationRepository->getBySlug('text_enter_review') ? $translationRepository->getBySlug('text_enter_review')->ru : 'text_enter_review',
    'text_go_to_checkout' => $translationRepository->getBySlug('text_go_to_checkout') ? $translationRepository->getBySlug('text_go_to_checkout')->ru : 'text_go_to_checkout',
    'text_continue_shopping' => $translationRepository->getBySlug('text_continue_shopping') ? $translationRepository->getBySlug('text_continue_shopping')->ru : 'text_continue_shopping',
    'text_error' => $translationRepository->getBySlug('text_error') ? $translationRepository->getBySlug('text_error')->ru : 'text_error',
    'text_error_description' => $translationRepository->getBySlug('text_error_description') ? $translationRepository->getBySlug('text_error_description')->ru : 'text_error_description',
    'text_personal_data' => $translationRepository->getBySlug('text_personal_data') ? $translationRepository->getBySlug('text_personal_data')->ru : 'text_personal_data',
    'text_name' => $translationRepository->getBySlug('text_name') ? $translationRepository->getBySlug('text_name')->ru : 'text_name',
    'text_surname' => $translationRepository->getBySlug('text_surname') ? $translationRepository->getBySlug('text_surname')->ru : 'text_surname',
    'text_enter_surname' => $translationRepository->getBySlug('text_enter_surname') ? $translationRepository->getBySlug('text_enter_surname')->ru : 'text_enter_surname',
    'text_phone' => $translationRepository->getBySlug('text_phone') ? $translationRepository->getBySlug('text_phone')->ru : 'text_phone',
    'text_enter_phone' => $translationRepository->getBySlug('text_enter_phone') ? $translationRepository->getBySlug('text_enter_phone')->ru : 'text_enter_phone',
    'text_title_checkout' => $translationRepository->getBySlug('text_title_checkout') ? $translationRepository->getBySlug('text_title_checkout')->ru : 'text_title_checkout',
    'text_email' => $translationRepository->getBySlug('text_email') ? $translationRepository->getBySlug('text_email')->ru : 'text_email',
    'text_enter_email' => $translationRepository->getBySlug('text_enter_email') ? $translationRepository->getBySlug('text_enter_email')->ru : 'text_enter_email',
    'text_delivery' => $translationRepository->getBySlug('text_delivery') ? $translationRepository->getBySlug('text_delivery')->ru : 'text_delivery',
    'text_city' => $translationRepository->getBySlug('text_city') ? $translationRepository->getBySlug('text_city')->ru : 'text_city',
    'text_enter_city' => $translationRepository->getBySlug('text_enter_city') ? $translationRepository->getBySlug('text_enter_city')->ru : 'text_enter_city',
    'text_enter_postal_office_nova_poshta' => $translationRepository->getBySlug('text_enter_postal_office_nova_poshta') ? $translationRepository->getBySlug('text_enter_postal_office_nova_poshta')->ru : 'text_enter_postal_office_nova_poshta',
    'text_postal_office_nova_poshta' => $translationRepository->getBySlug('text_postal_office_nova_poshta') ? $translationRepository->getBySlug('text_postal_office_nova_poshta')->ru : 'text_postal_office_nova_poshta',
    'text_comment' => $translationRepository->getBySlug('text_comment') ? $translationRepository->getBySlug('text_comment')->ru : 'text_comment',
    'text_enter_comment' => $translationRepository->getBySlug('text_enter_comment') ? $translationRepository->getBySlug('text_enter_comment')->ru : 'text_enter_comment',
    'text_order' => $translationRepository->getBySlug('text_order') ? $translationRepository->getBySlug('text_order')->ru : 'text_order',
    'text_send_order' => $translationRepository->getBySlug('text_send_order') ? $translationRepository->getBySlug('text_send_order')->ru : 'text_send_order',
    'text_success_send_order' => $translationRepository->getBySlug('text_success_send_order') ? $translationRepository->getBySlug('text_success_send_order')->ru : 'text_success_send_order',
    'text_work_schedule' => $translationRepository->getBySlug('text_work_schedule') ? $translationRepository->getBySlug('text_work_schedule')->ru : 'text_work_schedule',
    'text_see_more' => $translationRepository->getBySlug('text_see_more') ? $translationRepository->getBySlug('text_see_more')->ru : 'text_see_more',
];
