import { ref, onMounted, mergeProps, withCtx, createVNode, withModifiers, openBlock, createBlock, Fragment, renderList, useSSRContext } from "vue";
import { ssrRenderComponent, ssrRenderList } from "vue/server-renderer";
import _sfc_main$6 from "./AdditionalProducts.e2d1afc8.mjs";
import _sfc_main$3 from "./CartItem.44861219.mjs";
import _sfc_main$4 from "./PromoCode.8ded7b55.mjs";
import _sfc_main$5 from "./CartTotal.0c5b0030.mjs";
import { _ as _sfc_main$1 } from "./MasterLayout.be7b21fc.mjs";
import _sfc_main$2 from "./Head.9b78d2ae.mjs";
import { useStore } from "vuex";
import { i as isLoading } from "./load.3474ad71.mjs";
import "./AdditionalProductCard.15c754d4.mjs";
import "./Button.ec6da28a.mjs";
import "./Input.aac4ec2d.mjs";
import "./swal.a7da81d8.mjs";
import "./Header.4109ad68.mjs";
import "./CartIcon.79888d2e.mjs";
import "./Langs.3ba4b35e.mjs";
import "./Logo.5e8f1180.mjs";
import "./HeaderCategories.0e67c59a.mjs";
import "swiper";
import "swiper/vue";
import "./Footer.5f194abc.mjs";
import "./FixedBanner.5b212d34.mjs";
import "./ScrollToTop.c4b9ced3.mjs";
import "@inertiajs/inertia-vue3";
const _sfc_main = {
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
    const store = useStore();
    const cart = ref({});
    onMounted(async () => {
      cart.value = store.state;
      isLoading.value = false;
    });
    const goToCheckout = () => {
      window.location.href = route("checkout");
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(_sfc_main$1, mergeProps({
        categories: __props.categories,
        options: __props.options,
        lang: __props.lang,
        pages: __props.pages,
        eventIdPageView: __props.eventIdPageView
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_sfc_main$2, { title: "\u041A\u043E\u0448\u0438\u043A" }, null, _parent2, _scopeId));
            _push2(`<form${_scopeId}><div class="grid grid-cols-1 md:grid-cols-2 relative gap-4"${_scopeId}><div class=""${_scopeId}><!--[-->`);
            ssrRenderList(cart.value.list, (item) => {
              _push2(ssrRenderComponent(_sfc_main$3, { item }, null, _parent2, _scopeId));
            });
            _push2(`<!--]--></div><div class=""${_scopeId}><div class="cart-item__right row mb-3"${_scopeId}>`);
            _push2(ssrRenderComponent(_sfc_main$4, null, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$5, null, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$6, {
              products: __props.recommendProducts,
              lang: __props.lang
            }, null, _parent2, _scopeId));
            _push2(`</div></div></div></form>`);
          } else {
            return [
              createVNode(_sfc_main$2, { title: "\u041A\u043E\u0448\u0438\u043A" }),
              createVNode("form", {
                onSubmit: withModifiers(goToCheckout, ["prevent"])
              }, [
                createVNode("div", { class: "grid grid-cols-1 md:grid-cols-2 relative gap-4" }, [
                  createVNode("div", { class: "" }, [
                    (openBlock(true), createBlock(Fragment, null, renderList(cart.value.list, (item) => {
                      return openBlock(), createBlock(_sfc_main$3, { item }, null, 8, ["item"]);
                    }), 256))
                  ]),
                  createVNode("div", { class: "" }, [
                    createVNode("div", { class: "cart-item__right row mb-3" }, [
                      createVNode(_sfc_main$4),
                      createVNode(_sfc_main$5),
                      createVNode(_sfc_main$6, {
                        products: __props.recommendProducts,
                        lang: __props.lang
                      }, null, 8, ["products", "lang"])
                    ])
                  ])
                ])
              ], 40, ["onSubmit"])
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Public/Cart/Index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
