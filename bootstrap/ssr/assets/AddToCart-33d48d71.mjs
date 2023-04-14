import { getCurrentInstance, ref, withCtx, createTextVNode, unref, useSSRContext } from "vue";
import { ssrInterpolate, ssrRenderComponent, ssrRenderList, ssrRenderAttr, ssrIncludeBooleanAttr, ssrLooseContain, ssrRenderStyle } from "vue/server-renderer";
import { useStore } from "vuex";
import _sfc_main$2 from "./BuyIn1ClickModal-74a80bc8.mjs";
import { useGtm } from "@gtm-support/vue-gtm";
import _sfc_main$1 from "./Button-e6d9c4d7.mjs";
import { s as swal } from "./swal-dcd03cbb.mjs";
import "./maska-e9315c75.mjs";
import "./Modal-e357bd17.mjs";
import "./Loader-f0774e51.mjs";
import "./_plugin-vue_export-helper-cc2b3d55.mjs";
import "./Input-4d6b8e1d.mjs";
import "./InputError-71f0cb4c.mjs";
import "./Label-45b40ea1.mjs";
const _sfc_main = {
  __name: "AddToCart",
  __ssrInlineRender: true,
  props: [
    "product",
    "eventIdAddToCard",
    "eventIdPurchaseIn1Click"
  ],
  setup(__props) {
    const props = __props;
    const gtm = useGtm();
    const store = useStore();
    const { appContext } = getCurrentInstance();
    const { $fbq } = appContext.config.globalProperties;
    const item = ref({
      count: 1,
      size: [],
      color: [],
      item_id: props.product.id,
      // src: route(route().current(), route().params),
      src: typeof window !== "undefined" ? window.location.href : null,
      event_id: props.eventIdAddToCard
    });
    const state = ref({
      product: {
        id: null,
        discount_price: null,
        price: null,
        h1: null,
        sizes: [],
        colors: []
      },
      isActiveBuyIn1ClickModal: false,
      isAddToCart: false
    });
    function showBuyIn1ClickModal() {
      state.value.isActiveBuyIn1ClickModal = !state.value.isActiveBuyIn1ClickModal;
    }
    function addToCart() {
      if (!state.value.isAddToCart) {
        axios.post(route("api.v1.cart.add", item.value)).then(() => {
          state.value.isAddToCart = true;
          {
            try {
              $fbq(
                "AddToCart",
                {
                  "value": props.product.discount_price ? props.product.discount_price : props.product.price,
                  "currency": "UAH",
                  "content_type": "product",
                  "content_ids": [item.value.item_id],
                  "content_name": props.product.h1
                },
                item.value.event_id
              );
              gtm.trackEvent({
                event: "add_product_to_cart",
                ecommerce: {
                  items: [{
                    item_name: props.product.h1,
                    item_id: item.value.item_id,
                    price: props.product.discount_price ? props.product.discount_price : props.product.price,
                    quantity: 1
                  }]
                }
              });
            } catch (e) {
              console.log(e);
            }
          }
          store.commit("loadCart");
          swal({
            icon: "success",
            title: "Товар додано до вашого кошика!",
            text: "Ви можете оформити замовлення або продовжити покупки :)",
            showCancelButton: true,
            confirmButtonText: "Оформити замовлення",
            cancelButtonText: "Продовжити покупки"
          }).then((result) => {
            if (result.isConfirmed && typeof window !== "undefined") {
              window.location.href = route("checkout");
            }
          });
        }).catch(() => {
          swal({
            icon: "error",
            title: "Виникла помилка",
            text: "Перевірте корректність данних"
          });
        });
      }
    }
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[--><div class="pt-[5%]"><hr class="mb-4"><div class="grid grid-cols-1 md:grid-cols-2 font-subheading"><div class="mb-4 mb-md-0 flex items-center justify-evenly flex-col">`);
      if (__props.product.discount_price) {
        _push(`<div class="text-center"><div class="text-lg font-medium text-[#A5A5A5] line-through">${ssrInterpolate(__props.product.price)} грн. </div><div class="font-bold text-[#ff0000] text-4xl">${ssrInterpolate(__props.product.discount_price)} грн.</div></div>`);
      } else {
        _push(`<!---->`);
      }
      if (!__props.product.discount_price) {
        _push(`<div class="text-center"><div class="text-lg font-bold font-medium text-[#A5A5A5] text-[2.5rem]">${ssrInterpolate(__props.product.price)} грн. </div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div><div class="grid gap-4">`);
      _push(ssrRenderComponent(_sfc_main$1, {
        onClick: addToCart,
        type: "button"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` До кошика `);
          } else {
            return [
              createTextVNode(" До кошика ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_sfc_main$1, {
        onClick: showBuyIn1ClickModal,
        type: "button"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Купити в 1 клік `);
          } else {
            return [
              createTextVNode(" Купити в 1 клік ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div><hr class="mt-4"></div><div class="grid grid-cols-1 md:grid-cols-2 gap-4 mt-5 font-subheading">`);
      if (__props.product.sizes.length) {
        _push(`<div><div class="w-full mb-2">Доступні розміри</div><ul class="flex pb-[20px]"><!--[-->`);
        ssrRenderList(__props.product.sizes, (size) => {
          _push(`<li class="mx-1"><input type="checkbox"${ssrRenderAttr("value", size.title)}${ssrRenderAttr("id", size.title)} class="hidden peer"${ssrIncludeBooleanAttr(Array.isArray(item.value.size) ? ssrLooseContain(item.value.size, size.title) : item.value.size) ? " checked" : ""}><label${ssrRenderAttr("for", size.title)} class="inline-flex justify-center items-center mx-auto text-gray-500 bg-white rounded-lg border-2 border-gray-200 cursor-pointer peer-checked:border-blue-600 hover:text-gray-600 peer-checked:text-gray-600 hover:bg-gray-50 w-[40px] h-[40px]">${ssrInterpolate(size.title)}</label></li>`);
        });
        _push(`<!--]--></ul></div>`);
      } else {
        _push(`<!---->`);
      }
      if (__props.product.colors.length) {
        _push(`<div><div class="w-100 mb-2">Доступні кольори</div><div class="flex"><!--[-->`);
        ssrRenderList(__props.product.colors, (color) => {
          _push(`<div><input type="checkbox"${ssrRenderAttr("id", color.name)}${ssrRenderAttr("value", color.name)} class="hidden peer"${ssrIncludeBooleanAttr(Array.isArray(item.value.color) ? ssrLooseContain(item.value.color, color.name) : item.value.color) ? " checked" : ""}><label${ssrRenderAttr("for", color.name)} style="${ssrRenderStyle("background-color:" + color.hex)}" class="inline-flex justify-center items-center mx-auto text-black-500 rounded-lg border-2 border-gray-200 cursor-pointer peer-checked:border-blue-600 hover:text-black peer-checked:text-gray-600 hover:bg-black w-[40px] h-[40px]"></label></div>`);
        });
        _push(`<!--]--></div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
      if (state.value.isActiveBuyIn1ClickModal) {
        _push(ssrRenderComponent(_sfc_main$2, {
          onCloseModal: showBuyIn1ClickModal,
          item: item.value,
          product: __props.product,
          cart: unref(store).state.list,
          eventIdPurchaseIn1Click: props.eventIdPurchaseIn1Click,
          eventIdAddToCard: props.eventIdAddToCard,
          isAddToCart: state.value.isAddToCart
        }, null, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`<!--]-->`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Public/Product/AddToCart.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
