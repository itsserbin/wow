import { ssrRenderComponent, ssrRenderList } from "vue/server-renderer";
import _sfc_main$6 from "./AdditionalProducts-d50cbce0.mjs";
import _sfc_main$3 from "./CartItem-93649321.mjs";
import _sfc_main$4 from "./PromoCode-c9ed4022.mjs";
import _sfc_main$5 from "./CartTotal-3bd2b491.mjs";
import { _ as _sfc_main$1 } from "./MasterLayout-7ef3f399.mjs";
import _sfc_main$2 from "./Head-671d76dc.mjs";
import { e as eventTracking } from "./eventTracking-3e33368b.mjs";
import { useStore } from "vuex";
import { defineComponent, ref, onMounted, useSSRContext } from "vue";
import { i as isLoading } from "./load-e7dd2e7a.mjs";
import "./AdditionalProductCard-e60c3cdf.mjs";
import "./Button-e6d9c4d7.mjs";
import "./Input-4d6b8e1d.mjs";
import "./swal-dcd03cbb.mjs";
import "./Header-5b5eea90.mjs";
import "./CartIcon-4c8884b3.mjs";
import "./Langs-57d30b91.mjs";
import "./Logo-21a2caa8.mjs";
import "@inertiajs/inertia-vue3";
import "./HeaderCategories-391c289b.mjs";
import "swiper";
import "swiper/vue";
import "./Footer-e23e0d72.mjs";
import "./FixedBanner-285b457f.mjs";
import "./ScrollToTop-99a883e6.mjs";
const __default__ = defineComponent({ layout: _sfc_main$1 });
const _sfc_main = /* @__PURE__ */ Object.assign(__default__, {
  __name: "Index",
  __ssrInlineRender: true,
  props: [
    "recommendProducts",
    "lang",
    "categories",
    "options",
    "pages",
    "eventIdPageView"
  ],
  setup(__props) {
    const props = __props;
    const store = useStore();
    const cart = ref({});
    onMounted(async () => {
      cart.value = store.state;
      eventTracking("PageView", {}, props.eventIdPageView);
      isLoading.value = false;
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[-->`);
      _push(ssrRenderComponent(_sfc_main$2, { title: "Кошик" }, null, _parent));
      _push(`<form><div class="grid grid-cols-1 md:grid-cols-2 relative gap-4"><div class=""><!--[-->`);
      ssrRenderList(cart.value.list, (item) => {
        _push(ssrRenderComponent(_sfc_main$3, { item }, null, _parent));
      });
      _push(`<!--]--></div><div class=""><div class="cart-item__right row mb-3">`);
      _push(ssrRenderComponent(_sfc_main$4, null, null, _parent));
      _push(ssrRenderComponent(_sfc_main$5, null, null, _parent));
      _push(ssrRenderComponent(_sfc_main$6, {
        products: __props.recommendProducts,
        lang: __props.lang
      }, null, _parent));
      _push(`</div></div></div></form><!--]-->`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Public/Cart/Index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
