import { ref, onMounted, mergeProps, withCtx, createVNode, toDisplayString, openBlock, createBlock, createCommentVNode, Fragment, renderList, useSSRContext } from "vue";
import { ssrRenderComponent, ssrInterpolate, ssrRenderList } from "vue/server-renderer";
import _sfc_main$3 from "./Timer.0ea7ee2e.mjs";
import _sfc_main$4 from "./ProductCard.2474c4a0.mjs";
import { _ as _sfc_main$1 } from "./MasterLayout.be7b21fc.mjs";
import _sfc_main$2 from "./Head.9b78d2ae.mjs";
import { s as swal } from "./swal.a7da81d8.mjs";
import "./Header.4109ad68.mjs";
import "./CartIcon.79888d2e.mjs";
import "vuex";
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
  props: {
    categories: Array,
    options: Object,
    pages: Array,
    lang: String,
    eventIdPageView: String,
    textThanksPageTitle: {
      type: String,
      default: "\u0414\u044F\u043A\u0443\u044E \u0437\u0430 \u0432\u0430\u0448\u0435 \u0437\u0430\u043C\u043E\u0432\u043B\u0435\u043D\u043D\u044F :)"
    },
    textThanksPageDescription: {
      type: String,
      default: "\u041D\u0430\u0439\u0431\u043B\u0438\u0436\u0447\u0438\u043C \u0447\u0430\u0441\u043E\u043C \u0437 \u0432\u0430\u043C\u0438 \u0437\u0432`\u044F\u0436\u0435\u0442\u044C\u0441\u044F \u043E\u043F\u0435\u0440\u0430\u0442\u043E\u0440 \u0434\u043B\u044F \u043F\u0456\u0434\u0442\u0432\u0435\u0440\u0434\u0436\u0435\u043D\u043D\u044F \u0437\u0430\u043C\u043E\u0432\u043B\u0435\u043D\u043D\u044F."
    },
    textThanksPageOrderId: {
      type: String,
      default: "\u041D\u043E\u043C\u0435\u0440 \u0432\u0430\u0448\u043E\u0433\u043E \u0437\u0430\u043C\u043E\u0432\u043B\u0435\u043D\u043D\u044F:"
    },
    textThanksPageSpecials: {
      type: String,
      default: "\u0421\u043F\u0435\u0446\u0456\u0430\u043B\u044C\u043D\u0456 \u043F\u0440\u043E\u043F\u043E\u0437\u0438\u0446\u0456\u0457. \u0412\u0441\u0442\u0438\u0433\u043D\u0438 \u0434\u043E\u0434\u0430\u0442\u0438 \u0434\u043E \u0437\u0430\u043C\u043E\u0432\u043B\u0435\u043D\u043D\u044F"
    },
    textThanksPageSpecialsEnds: {
      type: String,
      default: "\u0427\u0430\u0441 \u0434\u0456\u0457 \u043F\u0440\u043E\u043F\u043E\u0437\u0438\u0446\u0456\u0457 \u043C\u0438\u043D\u0443\u0432. \u0421\u043F\u043E\u0434\u0456\u0432\u0430\u0454\u043C\u043E\u0441\u044C, \u0412\u0430\u0441 \u0437\u0430\u0446\u0456\u043A\u0430\u0432\u043B\u044F\u0442\u044C \u043D\u0430\u0448\u0456 \u0430\u043A\u0446\u0456\u0457 \u043D\u0430\u0441\u0442\u0443\u043F\u043D\u043E\u0433\u043E \u0440\u0430\u0437\u0443. \u041F\u043E\u0447\u0438\u043D\u0430\u0454\u043C\u043E \u0433\u043E\u0442\u0443\u0432\u0430\u0442\u0438 \u043F\u043E\u0441\u0438\u043B\u043A\u0443 \u0456 \u043D\u0435\u0437\u0430\u0431\u0430\u0440\u043E\u043C \u0432\u0456\u0434\u043F\u0440\u0430\u0432\u0438\u043C\u043E \u0412\u0430\u0448\u0435 \u0437\u0430\u043C\u043E\u0432\u043B\u0435\u043D\u043D\u044F"
    }
  },
  setup(__props) {
    const timer = ref({
      hours: "",
      mins: "",
      secs: ""
    });
    const state = ref({
      orderId: null,
      isLoading: true,
      products: [],
      activeSpecialOffer: false
    });
    onMounted(async () => {
      state.value.orderId = route().params.id;
      await axios.get(route("api.v1.orders.special", state.value.orderId)).then(({ data }) => {
        if (data.result) {
          setInterval(function() {
            let t = new Date(data.result.end_time).getTime() - new Date().getTime();
            if (t >= 0) {
              timer.value.hours = ("0" + Math.floor(t % (1e3 * 60 * 60 * 24) / (1e3 * 60 * 60))).slice(-2);
              timer.value.mins = ("0" + Math.floor(t % (1e3 * 60 * 60) / (1e3 * 60))).slice(-2);
              timer.value.secs = ("0" + Math.floor(t % (1e3 * 60) / 1e3)).slice(-2);
              state.value.activeSpecialOffer = true;
              state.value.products = data.result.products;
              state.value.isLoading = false;
            } else {
              state.value.activeSpecialOffer = false;
              state.value.isLoading = false;
            }
          }, 1e3);
        } else {
          state.value.isLoading = false;
          state.value.activeSpecialOffer = false;
        }
      });
    });
    const addItemToOrder = async (id, price) => {
      await axios.post("/api/v1/order/add-item/" + state.value.orderId, {
        "id": id,
        "price": price
      }).then(async () => await swal({
        icon: "success",
        title: "\u0414\u043E\u0434\u0430\u043D\u043E!",
        text: "\u0422\u043E\u0432\u0430\u0440 \u0443\u0441\u043F\u0456\u0448\u043D\u043E \u0434\u043E\u0434\u0430\u043D\u043E \u0434\u043E \u0432\u0430\u0448\u043E\u0433\u043E \u0437\u0430\u043C\u043E\u0432\u043B\u0435\u043D\u043D\u044F"
      })).catch(async (response) => {
        console.error(response);
        await swal({
          icon: "error",
          title: "\u0412\u0438\u043D\u0438\u043A\u043B\u0430 \u043F\u043E\u043C\u0438\u043B\u043A\u0430",
          text: "\u0417\u0432\u0435\u0440\u043D\u0456\u0442\u044C\u0441\u044F \u0434\u043E \u0430\u0434\u043C\u0456\u043D\u0456\u0441\u0442\u0440\u0430\u0442\u043E\u0440\u0430"
        });
      });
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
            _push2(ssrRenderComponent(_sfc_main$2, { title: "\u0414\u044F\u043A\u0443\u0454\u043C\u043E \u0437\u0430 \u043F\u043E\u043A\u0443\u043F\u043A\u0443!" }, null, _parent2, _scopeId));
            _push2(`<section class="grid gap-4 grid-cols-1"${_scopeId}><div class="grid grid-cols-1 gap-4"${_scopeId}><h1 class="font-bold text-black text-center text-2xl font-heading"${_scopeId}>${ssrInterpolate(__props.textThanksPageTitle)}</h1><div class="text-center text-xl font-subheading"${_scopeId}><p${_scopeId}>${ssrInterpolate(__props.textThanksPageDescription)}</p></div>`);
            if (state.value.orderId) {
              _push2(`<div class="text-center text-xl font-subheading"${_scopeId}>${ssrInterpolate(__props.textThanksPageOrderId)} ${ssrInterpolate(state.value.orderId)}</div>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`</div>`);
            if (state.value.activeSpecialOffer) {
              _push2(`<div class="grid gap-4 mt-5"${_scopeId}><div class="font-bold text-black text-center text-2xl font-subheading"${_scopeId}>${ssrInterpolate(__props.textThanksPageSpecials)}</div>`);
              _push2(ssrRenderComponent(_sfc_main$3, { timer: timer.value }, null, _parent2, _scopeId));
              _push2(`<div class="grid grid-cols-2 md:grid-cols-4 gap-4"${_scopeId}><!--[-->`);
              ssrRenderList(state.value.products, (product) => {
                _push2(ssrRenderComponent(_sfc_main$4, {
                  product,
                  onAddItemToOrder: addItemToOrder,
                  lang: __props.lang
                }, null, _parent2, _scopeId));
              });
              _push2(`<!--]--></div></div>`);
            } else {
              _push2(`<div class="order-page__text my-5"${_scopeId}><p${_scopeId}>${ssrInterpolate(__props.textThanksPageSpecialsEnds)}</p></div>`);
            }
            _push2(`</section>`);
          } else {
            return [
              createVNode(_sfc_main$2, { title: "\u0414\u044F\u043A\u0443\u0454\u043C\u043E \u0437\u0430 \u043F\u043E\u043A\u0443\u043F\u043A\u0443!" }),
              createVNode("section", { class: "grid gap-4 grid-cols-1" }, [
                createVNode("div", { class: "grid grid-cols-1 gap-4" }, [
                  createVNode("h1", { class: "font-bold text-black text-center text-2xl font-heading" }, toDisplayString(__props.textThanksPageTitle), 1),
                  createVNode("div", { class: "text-center text-xl font-subheading" }, [
                    createVNode("p", null, toDisplayString(__props.textThanksPageDescription), 1)
                  ]),
                  state.value.orderId ? (openBlock(), createBlock("div", {
                    key: 0,
                    class: "text-center text-xl font-subheading"
                  }, toDisplayString(__props.textThanksPageOrderId) + " " + toDisplayString(state.value.orderId), 1)) : createCommentVNode("", true)
                ]),
                state.value.activeSpecialOffer ? (openBlock(), createBlock("div", {
                  key: 0,
                  class: "grid gap-4 mt-5"
                }, [
                  createVNode("div", { class: "font-bold text-black text-center text-2xl font-subheading" }, toDisplayString(__props.textThanksPageSpecials), 1),
                  createVNode(_sfc_main$3, { timer: timer.value }, null, 8, ["timer"]),
                  createVNode("div", { class: "grid grid-cols-2 md:grid-cols-4 gap-4" }, [
                    (openBlock(true), createBlock(Fragment, null, renderList(state.value.products, (product) => {
                      return openBlock(), createBlock(_sfc_main$4, {
                        product,
                        onAddItemToOrder: addItemToOrder,
                        lang: __props.lang
                      }, null, 8, ["product", "lang"]);
                    }), 256))
                  ])
                ])) : (openBlock(), createBlock("div", {
                  key: 1,
                  class: "order-page__text my-5"
                }, [
                  createVNode("p", null, toDisplayString(__props.textThanksPageSpecialsEnds), 1)
                ]))
              ])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Public/Thanks/Index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
