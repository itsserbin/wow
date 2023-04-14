import { defineComponent, getCurrentInstance, ref, onMounted, unref, useSSRContext } from "vue";
import { ssrRenderComponent, ssrRenderList } from "vue/server-renderer";
import Loader from "./Loader-f0774e51.mjs";
import _sfc_main$3 from "./PersonalData-daf18046.mjs";
import _sfc_main$4 from "./Delivery-1e02e30f.mjs";
import _sfc_main$5 from "./Payment-fb9cb3cb.mjs";
import _sfc_main$7 from "./OrderItem-3bc300b7.mjs";
import _sfc_main$6 from "./Comment-efef970a.mjs";
import _sfc_main$8 from "./CheckoutTotal-5385c985.mjs";
import { _ as _sfc_main$1 } from "./MasterLayout-d0c49156.mjs";
import _sfc_main$2 from "./Head-671d76dc.mjs";
import { useStore } from "vuex";
import { useGtm } from "@gtm-support/vue-gtm";
import "crypto-js/hmac-md5.js";
import "crypto-js";
import { i as isLoading } from "./load-e7dd2e7a.mjs";
import "./_plugin-vue_export-helper-cc2b3d55.mjs";
import "./Label-45b40ea1.mjs";
import "./Input-4d6b8e1d.mjs";
import "./InputError-71f0cb4c.mjs";
import "./maska-e9315c75.mjs";
import "./Button-e6d9c4d7.mjs";
import "./Header-1206aee3.mjs";
import "./CartIcon-4c8884b3.mjs";
import "./Langs-57d30b91.mjs";
import "./Logo-8552d818.mjs";
import "./HeaderCategories-743d6249.mjs";
import "swiper";
import "swiper/vue";
import "./Footer-e23e0d72.mjs";
import "./FixedBanner-285b457f.mjs";
import "./ScrollToTop-99a883e6.mjs";
import "@inertiajs/inertia-vue3";
const __default__ = defineComponent({ layout: _sfc_main$1 });
const _sfc_main = /* @__PURE__ */ Object.assign(__default__, {
  __name: "Index",
  __ssrInlineRender: true,
  props: [
    "lang",
    "eventIdInitiateCheckout",
    "eventIdPurchase",
    "categories",
    "options",
    "pages",
    "eventIdPageView"
  ],
  setup(__props) {
    const props = __props;
    const { appContext } = getCurrentInstance();
    const { $fbq } = appContext.config.globalProperties;
    const store = useStore();
    const gtm = useGtm();
    const state = ref({
      order: {
        name: null,
        last_name: null,
        middle_name: null,
        email: null,
        comment: null,
        phone: null,
        city: null,
        postal_office: null,
        payment_method: null,
        event_id: props.eventIdPurchase
      },
      errors: [],
      contentIds: [],
      ga4ProductsArray: [],
      isLoading: false
    });
    onMounted(() => {
      {
        store.state.list.forEach((item) => {
          state.value.contentIds.push(item.id);
          state.value.ga4ProductsArray.push({
            item_name: item.name.ua ? item.name.ua : item.name.ru,
            item_id: item.id,
            price: item.discount_price ? item.discount_price : item.price,
            quantity: item.count
          });
        });
        try {
          $fbq(
            "InitiateCheckout",
            {
              "value": store.state.totalPrice,
              "currency": "UAH",
              "num_items": store.state.totalCount,
              "content_ids": state.value.contentIds,
              "content_type": "product"
            },
            props.eventIdInitiateCheckout
          );
          gtm.trackEvent({
            event: "start_checkout",
            ecommerce: {
              items: state.value.ga4ProductsArray
            }
          });
        } catch (e) {
          console.log(e);
        }
      }
      isLoading.value = false;
    });
    function removeFromCart() {
    }
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[-->`);
      _push(ssrRenderComponent(_sfc_main$2, { title: "Оформлення замовлення" }, null, _parent));
      _push(`<form><div class="grid grid-cols-1 md:grid-cols-2 relative gap-4"><div>`);
      _push(ssrRenderComponent(_sfc_main$3, {
        order: state.value.order,
        errors: state.value.errors
      }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$4, {
        order: state.value.order
      }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$5, {
        order: state.value.order
      }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$6, {
        order: state.value.order
      }, null, _parent));
      _push(`</div><div class=""><div class="cart-item__right row mb-3"><h3 class="text-2xl font-heading mb-[1rem]">Замовлення</h3><div class="grid gap-4"><!--[-->`);
      ssrRenderList(unref(store).state.list, (item) => {
        _push(ssrRenderComponent(_sfc_main$7, {
          item,
          onRemoveFromCart: removeFromCart
        }, null, _parent));
      });
      _push(`<!--]--></div>`);
      if (state.value.isLoading) {
        _push(ssrRenderComponent(Loader, null, null, _parent));
      } else {
        _push(`<!---->`);
      }
      if (!state.value.isLoading) {
        _push(ssrRenderComponent(_sfc_main$8, null, null, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div></div></form><!--]-->`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Public/Checkout/Index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
