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
                updated: 'Дані успішно оновлені',
                created: 'Дані успішно створені',
                destroyed: 'Дані успішно видалені',
                sure: 'Ви впевнені?',
                error: 'Виникла помилка',
                check_data: 'Перевірте дані'
            },
            id: 'ID',
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