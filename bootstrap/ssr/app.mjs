import { I } from "./assets/vue.m.487fc989.mjs";
import { createStore } from "vuex";
import { createGtm } from "@gtm-support/vue-gtm";
import { createI18n } from "vue-i18n";
import { createApp, h } from "vue";
import { createInertiaApp } from "@inertiajs/inertia-vue3";
import { r as resolvePageComponent } from "./assets/vendor.67403750.mjs";
import "axios";
let store = createStore({
  debug: true,
  state: {
    list: [],
    totalCount: 0,
    totalPrice: 0,
    promo_code: null,
    price_without_discount: 0
  },
  mutations: {
    async loadCart(state) {
      await axios.get("/api/v1/cart/list").then(function({ data }) {
        state.list = data.result.list;
        state.totalCount = data.result.totalCount;
        state.totalPrice = data.result.totalPrice;
        state.promo_code = data.result.promo_code;
        state.price_without_discount = data.result.price_without_discount;
      }).catch(function(response) {
        if (this.debug) {
          console.log(response);
        }
      });
    }
  }
});
const FacebookPixel = {
  install(app, options) {
    if (typeof window !== "undefined") {
      (function(f, b, e, v, n, t, s) {
        if (f.fbq)
          return;
        n = f.fbq = function() {
          n.callMethod ? n.callMethod.apply(n, arguments) : n.queue.push(arguments);
        };
        if (!f._fbq)
          f._fbq = n;
        n.push = n;
        n.loaded = true;
        n.version = "2.0";
        n.queue = [];
        t = b.createElement(e);
        t.async = true;
        t.src = v;
        s = b.getElementsByTagName(e)[0];
        s.parentNode.insertBefore(t, s);
      })(
        window,
        document,
        "script",
        "https://connect.facebook.net/en_US/fbevents.js"
      );
      window.fbq("init", options.pixelId);
      app.config.globalProperties.$fbq = function(eventName, eventData, event_id) {
        window.fbq("track", eventName, eventData, {
          event_id
        });
      };
    }
  }
};
const i18n = createI18n({});
createInertiaApp({
  resolve: (name) => resolvePageComponent(`./${name}.vue`, /* @__PURE__ */ Object.assign({ "./Cart/AdditionalProductCard.vue": () => import("./assets/AdditionalProductCard.15c754d4.mjs"), "./Cart/AdditionalProducts.vue": () => import("./assets/AdditionalProducts.e2d1afc8.mjs"), "./Cart/CartItem.vue": () => import("./assets/CartItem.44861219.mjs"), "./Cart/CartTotal.vue": () => import("./assets/CartTotal.0c5b0030.mjs"), "./Cart/Index.vue": () => import("./assets/Index.ea3259b8.mjs"), "./Cart/PromoCode.vue": () => import("./assets/PromoCode.8ded7b55.mjs"), "./Category/Breadcrumbs.vue": () => import("./assets/Breadcrumbs.d5f41fae.mjs"), "./Category/Filter.vue": () => import("./assets/Filter.a4e5f806.mjs"), "./Category/Head.vue": () => import("./assets/Head.bebd99ae.mjs"), "./Category/Index.vue": () => import("./assets/Index.3cc56a08.mjs"), "./Category/Products.vue": () => import("./assets/Products.5c862567.mjs"), "./Category/Sort.vue": () => import("./assets/Sort.5e9a57ec.mjs"), "./Checkout/CheckoutTotal.vue": () => import("./assets/CheckoutTotal.a0f222ed.mjs"), "./Checkout/Comment.vue": () => import("./assets/Comment.59e7eeb4.mjs"), "./Checkout/Delivery.vue": () => import("./assets/Delivery.345895cd.mjs"), "./Checkout/Index.vue": () => import("./assets/Index.3d264668.mjs"), "./Checkout/OrderItem.vue": () => import("./assets/OrderItem.919b04b9.mjs"), "./Checkout/Payment.vue": () => import("./assets/Payment.7ee6083c.mjs"), "./Checkout/PersonalData.vue": () => import("./assets/PersonalData.c3a22e49.mjs"), "./Components/Accordion/Accordion.vue": () => import("./assets/Accordion.635accb3.mjs"), "./Components/Accordion/AccordionItem.vue": () => import("./assets/AccordionItem.ae8efcce.mjs"), "./Components/Advantages.vue": () => import("./assets/Advantages.a72c550a.mjs"), "./Components/AllReviewsCarousel.vue": () => import("./assets/AllReviewsCarousel.b2fd9c6b.mjs"), "./Components/Banners.vue": () => import("./assets/Banners.284dbcd2.mjs"), "./Components/Breadcrumbs.vue": () => import("./assets/Breadcrumbs.1a27781b.mjs"), "./Components/Button.vue": () => import("./assets/Button.ec6da28a.mjs"), "./Components/Callback.vue": () => import("./assets/Callback.7be679fc.mjs"), "./Components/CartIcon.vue": () => import("./assets/CartIcon.79888d2e.mjs"), "./Components/Categories.vue": () => import("./assets/Categories.96c5c5cc.mjs"), "./Components/Consultation.vue": () => import("./assets/Consultation.eb2d30e5.mjs"), "./Components/Content.vue": () => import("./assets/Content.9c005b77.mjs"), "./Components/FaqComponent.vue": () => import("./assets/FaqComponent.81c94f08.mjs"), "./Components/FixedBanner.vue": () => import("./assets/FixedBanner.5b212d34.mjs"), "./Components/Footer.vue": () => import("./assets/Footer.5f194abc.mjs"), "./Components/Head.vue": () => import("./assets/Head.9b78d2ae.mjs"), "./Components/Header/Burger.vue": () => import("./assets/Burger.5bdefb2a.mjs"), "./Components/Header/BurgerMenu.vue": () => import("./assets/BurgerMenu.68621b57.mjs"), "./Components/Header/BurgerMenuLink.vue": () => import("./assets/BurgerMenuLink.116eadc2.mjs"), "./Components/Header/Header.vue": () => import("./assets/Header.4109ad68.mjs"), "./Components/Header/HeaderCategories.vue": () => import("./assets/HeaderCategories.0e67c59a.mjs"), "./Components/Header/Langs.vue": () => import("./assets/Langs.3ba4b35e.mjs"), "./Components/Header/Logo.vue": () => import("./assets/Logo.5e8f1180.mjs"), "./Components/Heading.vue": () => import("./assets/Heading.bffd39ec.mjs"), "./Components/Input.vue": () => import("./assets/Input.aac4ec2d.mjs"), "./Components/Label.vue": () => import("./assets/Label.4ae45cc4.mjs"), "./Components/LoadMore.vue": () => import("./assets/LoadMore.97937bfe.mjs"), "./Components/Loader.vue": () => import("./assets/Loader.43a0c8e2.mjs"), "./Components/Modal.vue": () => import("./assets/Modal.9c3ed2ed.mjs"), "./Components/ProductCard.vue": () => import("./assets/ProductCard.5c4ddc79.mjs"), "./Components/ProductCards.vue": () => import("./assets/ProductCards.0f12ca5a.mjs"), "./Components/ScrollToTop.vue": () => import("./assets/ScrollToTop.c4b9ced3.mjs"), "./Components/Support.vue": () => import("./assets/Support.92203d05.mjs"), "./Components/Textarea.vue": () => import("./assets/Textarea.74554057.mjs"), "./Home/AllProducts.vue": () => import("./assets/AllProducts.60bb85c8.mjs"), "./Home/BestSelling.vue": () => import("./assets/BestSelling.ae924234.mjs"), "./Home/Index.vue": () => import("./assets/Index.417c01a8.mjs"), "./Home/NewProducts.vue": () => import("./assets/NewProducts.6ed63d51.mjs"), "./Home/ProductsList.vue": () => import("./assets/ProductsList.d8756dca.mjs"), "./Page/Breadcrumbs.vue": () => import("./assets/Breadcrumbs.8ef45580.mjs"), "./Page/Index.vue": () => import("./assets/Index.14471dd5.mjs"), "./Product/AddToCart.vue": () => import("./assets/AddToCart.e8438e84.mjs"), "./Product/BestSellingProducts.vue": () => import("./assets/BestSellingProducts.0960a403.mjs"), "./Product/Breadcrumbs.vue": () => import("./assets/Breadcrumbs.e9915497.mjs"), "./Product/BuyIn1ClickModal.vue": () => import("./assets/BuyIn1ClickModal.2ff3be25.mjs"), "./Product/Characteristics.vue": () => import("./assets/Characteristics.5cdcd447.mjs"), "./Product/Content.vue": () => import("./assets/Content.d1a7bb39.mjs"), "./Product/DeliveryAndPayment.vue": () => import("./assets/DeliveryAndPayment.0dbbf951.mjs"), "./Product/Head.vue": () => import("./assets/Head.05862107.mjs"), "./Product/ImagesSlider.vue": () => import("./assets/ImagesSlider.b7de3a1c.mjs"), "./Product/Index.vue": () => import("./assets/Index.91274316.mjs"), "./Product/NewProducts.vue": () => import("./assets/NewProducts.5bfe72f9.mjs"), "./Product/RelativeProducts.vue": () => import("./assets/RelativeProducts.41aa5ed4.mjs"), "./Product/ReviewForm.vue": () => import("./assets/ReviewForm.357eadd7.mjs"), "./Product/Reviews.vue": () => import("./assets/Reviews.247fd9ed.mjs"), "./Product/SizesTable.vue": () => import("./assets/SizesTable.fcffe987.mjs"), "./Reviews/Breadcrumbs.vue": () => import("./assets/Breadcrumbs.dc298662.mjs"), "./Reviews/Card.vue": () => import("./assets/Card.53f4160b.mjs"), "./Reviews/Index.vue": () => import("./assets/Index.ca76fb73.mjs"), "./Status/Breadcrumbs.vue": () => import("./assets/Breadcrumbs.be68275e.mjs"), "./Status/Form.vue": () => import("./assets/Form.fa9bd05d.mjs"), "./Status/Index.vue": () => import("./assets/Index.fc7e7a6d.mjs"), "./Status/OrderItem.vue": () => import("./assets/OrderItem.f44a4629.mjs"), "./Status/Status.vue": () => import("./assets/Status.2cb9bde0.mjs"), "./Support/Breadcrumbs.vue": () => import("./assets/Breadcrumbs.876240f9.mjs"), "./Support/Form.vue": () => import("./assets/Form.0a09b2a3.mjs"), "./Support/Index.vue": () => import("./assets/Index.e3a9e1bb.mjs"), "./Thanks/Index.vue": () => import("./assets/Index.c28e9651.mjs"), "./Thanks/ProductCard.vue": () => import("./assets/ProductCard.2474c4a0.mjs"), "./Thanks/Timer.vue": () => import("./assets/Timer.0ea7ee2e.mjs") })),
  setup({ el, App, props, plugin }) {
    const app = createApp({ render: () => h(App, props) });
    app.use(plugin);
    app.use(i18n);
    app.use(I, Ziggy);
    app.use(store);
    {
      app.use(
        createGtm({
          id: "GTM-WSD2WKL",
          defer: false,
          compatibility: false,
          enabled: true,
          debug: false,
          loadScript: true,
          trackOnNextTick: false
        })
      );
    }
    {
      app.use(FacebookPixel, { pixelId: "2420788534721287" });
    }
    store.commit("loadCart");
    app.provide("$defaultLang", "ua");
    app.mount(el);
  }
});
