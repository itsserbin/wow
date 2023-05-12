import {createI18n} from 'vue-i18n'

const i18n = createI18n({
    locale: 'ua',
    legacy: false,
    messages: {
        ua: {
            categories: {
                page_title: 'Категорії',
                parent: 'Батьківська категорія',
                title: 'Назва категорії',
                enter_title: 'Вкажіть назву категорії',
            },
            products: {
                page_title: 'Товари',
                search_placeholder: 'ID або артикул',
                h1: 'Назва',
                enter_h1: 'Вкажіть назву товару',
                vendor_code: 'Артикул',
                enter_vendor_code: 'Вкажіть артикул',
                price: 'Ціна',
                enter_price: 'Вкажіть ціна',
                discount_price: 'Ціна зі знижкою',
                enter_discount_price: 'Вкажіть ціну зі знижкою',
                trade_price: 'Ціна закупки',
                enter_trade_price: 'Вкажіть ціну закупки',
                views: 'Переглядів',
                sales: 'Покупок',
                returns: 'Повернень',
                refunds: 'Обмінів',
                status: 'Наявність товару',
                categories: 'Категорії',
                enter_categories: 'Оберіть категорії',
                provider: 'Постачальник',
                sizes: 'Розміри',
                enter_sizes: 'Оберіть розміри',
                colors: 'Кольори',
                enter_colors: 'Оберіть кольори',
                youtube: 'Youtube',
                enter_youtube: 'Вставте ссилку на youtube',
                content: 'Опис товару',
                size_table: 'Таблиця розмірів',
                select_characteristic_value: 'Оберіть значення'
            },
            images: {
                page_title: 'Зображення',
            },
            clients: {
                full_name: 'ФІО',
                status: 'Статус клієнта',
                sub_status: 'Додатковий клієнта',
                export: 'Експортувати',
                page_title: 'Клієнти',
                all_clients: 'Всі клієнти',
                name: 'Імʼя',
                enter_name: 'Вкажіть імʼя',
                last_name: 'Прізвище',
                enter_last_name: 'Вкажіть прізвище',
                middle_name: 'По-батькові',
                enter_middle_name: 'Вкажіть по-батькові',
                phone: 'Телефон',
                enter_phone: 'Вкажіть телефон',
                email: 'Email',
                enter_email: 'Вкажіть email',
                comment: 'Комментар',
                enter_comment: 'Комментар щодо клієнта',
                number_of_purchases: 'Всього замовлень',
                purchased_goods: 'Виконаних замовлень',
                average_check: 'Середній чек',
                whole_check: 'Загальний чек',
                search_placeholder: 'Імʼя, прізвище, по-батькові, телефон, email, коментар...',
            },
            orders: {
                page_title: 'Замовлення',
                status: 'Статус замовлення',
                manager_id: 'Менеджер',
                discount: 'Знижка',
                enter_discount_sum: 'Вкажіть сума знижки (грн.)',
                sale_of_air: 'Дод.продаж повітря',
                enter_sale_of_air_price: 'Вкажіть суму доп.продажу повітря (грн.)',
                payment_method: 'Спосіб оплати',
                parcel_reminder: 'Нагадування про посилку',
                client_card: 'Картка клієнта',
                total_count: 'Кількість',
                total_price: 'Сума',
                postal_office: 'Почтове відділення',
                enter_postal_office: 'Вкажіть почтове відділення',
                city: 'Місто',
                enter_city: 'Вкажіть місто',
                waybill: 'Номер накладної',
                waybill_sent: 'ТТН отправлена',
                waybill_resent: 'Отправить повторно',
                send_waybill_for_client: 'Отправить ТТН клиенту',
                enter_waybill: 'Вкажіть номер накладної',
                comment: 'Коментарі до замовлення',
                enter_comment: 'Вкажіть коментарі до замовлення',
                refund_other_waybill: 'Повернення по іншій ТТН',
                enter_refund_other_waybill: 'Вкажіть номер ТТН',
            },
            pages: {
                page_title: 'Сторінки',
                heading: 'Назва в меню',
                enter_heading: 'Вкажіть назву в меню',
                h1: 'Заголовок',
                enter_h1: 'Вкажіть заголовок',
            },
            options: {
                brand: 'Назва бренду',
                enter_brand: 'Вкажіть назву бренду',
                callback_status: 'Зворотній звʼязок',
                callback_status_on: 'Активний',
                callback_status_off: 'Вимкненний',
                consultation_status: 'Консультація клієнта',
                consultation_status_on: 'Активний',
                consultation_status_off: 'Вимкненний',
                schedule: 'Графік роботи',
                enter_schedule: 'Вкажіть графік роботи',
                phone: 'Телефон компанії',
                enter_phone: 'Вкажіть телефон компанії',
                email: 'Електронна пошта компанії',
                enter_email: 'Вкажіть електронну пошту компанії',
                facebook: 'Facebook сторінка',
                enter_facebook: 'Вкажіть facebook сторінку',
                instagram: 'Instagram сторінка',
                enter_instagram: 'Вкажіть instagram сторінку',
                telegram: 'Telegram',
                enter_telegram: 'Вкажіть telegram',
                viber: 'Viber',
                enter_viber: 'Вкажіть viber',
                whatsapp: 'Whatsapp',
                enter_whatsapp: 'Вкажіть whatsapp',
                fb_messenger: 'Facebook messenger',
                enter_fb_messenger: 'Вкажіть facebook messenger',
                heading_ua: 'Заголовок на головній сторінці UA',
                enter_heading_ua: 'Вкажіть заголовок на головній сторінці UA',
                heading_ru: 'Заголовок на головній сторінці RU',
                enter_heading_ru: 'Вкажіть заголовок на головній сторінці RU',
                meta_title_ua: 'META Title головної сторінки UA',
                enter_meta_title_ua: 'Вкажіть META Title головної сторінки UA',
                meta_title_ru: 'META Title головної сторінки RU',
                enter_meta_title_ru: 'Вкажіть META Title головної сторінки RU',
                meta_description_ua: 'META Description головної сторінки UA',
                enter_meta_description_ua: 'Вкажіть META Description головної сторінки UA',
                meta_description_ru: 'META Description головної сторінки RU',
                enter_meta_description_ru: 'Вкажіть META Description головної сторінки RU',
                text_delivery_and_payment_ua: 'Умови доставки та оплати на сторінці товару UA',
                text_delivery_and_payment_ru: 'Умови доставки та оплати на сторінці товару RU',
                text_return_and_exchange_ua: 'Умови обміну та повернення на сторінці товару UA',
                text_return_and_exchange_ru: 'Умови обміну та повернення на сторінці товару RU',
                text_home_page_ua: 'Текст на головній сторінці UA',
                text_home_page_ru: 'Текст на головній сторінці RU',
                text_label_logo: 'Логотип',
                text_destroyLabel: 'Видалити',
                instructions: 'Виберіть зображення логотипу',
            },
            meta: {
                title: 'META Title',
                enter_title: 'Вкажіть META Title',
                description: 'META Description',
                enter_description: 'Вкажіть META Description',
                keywords: 'META Keywords',
                enter_keywords: 'Вкажіть META Keywords',
            },
            swal: {
                data_copied: 'Дані успішно скопійовані',
                updated: 'Дані успішно оновлені',
                created: 'Дані успішно створені',
                destroyed: 'Дані успішно видалені',
                confirm_action: 'Підтвердження дії',
                confirm_destroy: 'Ви впевнені що хочете видалити цей запис?',
                sure: 'Ви впевнені?',
                error: 'Виникла помилка',
                check_data: 'Перевірте дані',
                logo: {
                    upload: 'Логотип було успішно завантажено!',
                    error: 'Виникла помилка логотип не було завантажено!',
                    destroy: {
                        success: 'Логотип було успішно видалено!',
                        error: 'Виникла помилка під час видалення логотипу!',
                    }
                }
            },
            id: 'ID',
            status: 'Статус',
            sort: 'Сортування',
            slug: 'ЧПУ',
            save: 'Зберегти',
            enter_slug: 'Вкажіть ЧПУ',
            published: 'Статус публікації',
            add: 'Додати',
            seo_text: 'SEO Текст',
            preview: 'Головне зображення',
            select_image: 'Обрати зображення',
            created_at: 'Створено',
            updated_at: 'Оновлено',
        }
    }
});

export default i18n;
