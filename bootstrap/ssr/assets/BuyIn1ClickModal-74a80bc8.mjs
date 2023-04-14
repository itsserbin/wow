import { getCurrentInstance, ref, mergeProps, withCtx, createTextVNode, unref, createVNode, withDirectives, openBlock, createBlock, Fragment, renderList, createCommentVNode, useSSRContext } from "vue";
import { ssrRenderComponent, ssrGetDirectiveProps, ssrRenderList } from "vue/server-renderer";
import { useGtm } from "@gtm-support/vue-gtm";
import { useStore } from "vuex";
import { U } from "./maska-e9315c75.mjs";
import _sfc_main$1 from "./Modal-e357bd17.mjs";
import _sfc_main$3 from "./Input-4d6b8e1d.mjs";
import { _ as _sfc_main$4 } from "./InputError-71f0cb4c.mjs";
import _sfc_main$2 from "./Label-45b40ea1.mjs";
import "./Loader-f0774e51.mjs";
import "./_plugin-vue_export-helper-cc2b3d55.mjs";
const _sfc_main = {
  __name: "BuyIn1ClickModal",
  __ssrInlineRender: true,
  props: [
    "item",
    "product",
    "eventIdPurchaseIn1Click",
    "eventIdAddToCard",
    "isAddToCart"
  ],
  emits: ["closeModal", "addToCard"],
  setup(__props, { emit: emits }) {
    const props = __props;
    const gtm = useGtm();
    const { appContext } = getCurrentInstance();
    const { $fbq } = appContext.config.globalProperties;
    const order = ref({
      name: "",
      last_name: "",
      middle_name: "",
      email: null,
      comment: null,
      phone: null,
      city: null,
      postal_office: null,
      payment_method: null,
      event_id: props.eventIdPurchaseIn1Click
    });
    const state = ref({
      isLoading: false,
      errors: [],
      contentIds: [],
      ga4ProductsArray: []
    });
    const store = useStore();
    async function sendForm() {
      state.value.errors = [];
      state.value.isLoading = true;
      if (!props.isAddToCart) {
        await axios.post(route("api.v1.cart.add"), props.item).then(() => {
          props.isAddToCart = true;
          {
            try {
              $fbq(
                "AddToCart",
                {
                  "value": props.product.discount_price ? props.product.discount_price : props.product.price,
                  "currency": "UAH",
                  "content_type": "product",
                  "content_ids": [props.item.item_id],
                  "content_name": props.product.h1
                },
                props.eventIdAddToCard
              );
            } catch (e) {
              console.error(e);
            }
          }
          store.commit("loadCart");
          createOrder();
        });
      } else {
        await createOrder();
      }
    }
    async function createOrder() {
      await axios.post(route("api.v1.orders.create.1click"), order.value).then(({ data }) => {
        {
          try {
            store.state.list.forEach((item) => {
              state.value.contentIds.push(item.id);
              state.value.ga4ProductsArray.push({
                item_name: item.name.ua ? item.name.ua : item.name.ru,
                item_id: item.id,
                price: item.discount_price ? item.discount_price : item.price,
                quantity: item.count
              });
            });
            $fbq(
              "Purchase",
              {
                "value": store.state.totalPrice,
                "currency": "UAH",
                "content_type": "product",
                "num_items": store.state.totalCount,
                "content_ids": state.value.contentIds
              },
              props.eventIdPurchaseIn1Click
            );
            gtm.trackEvent({
              event: "send_order",
              ecommerce: {
                transaction_id: data.order.id,
                value: data.order.total_price,
                currency: "UAH",
                items: state.value.ga4ProductsArray
              }
            });
          } catch (e) {
            console.log(e);
          }
        }
        axios.post(route("sms.new.order"), {
          order_id: data.order.id,
          phone: data.order.client.phone
        });
        state.value.isLoading = false;
        window.location.href = route("thanks", data.order.id);
      }).catch(({ response }) => {
        state.value.errors = response.data;
        state.value.isLoading = false;
      });
    }
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(_sfc_main$1, mergeProps({
        size: "small",
        "submit-button-text": "Замовити",
        onSubmitForm: sendForm,
        onCloseModal: ($event) => _ctx.$emit("closeModal"),
        "is-loading": state.value.isLoading
      }, _attrs), {
        content: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="grid gap-4"${_scopeId}><div class="block"${_scopeId}>`);
            _push2(ssrRenderComponent(_sfc_main$2, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`Ім\`я`);
                } else {
                  return [
                    createTextVNode("Ім`я")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$3, {
              type: "text",
              modelValue: order.value.name,
              "onUpdate:modelValue": ($event) => order.value.name = $event,
              placeholder: "Введіть ваше ім'я"
            }, null, _parent2, _scopeId));
            _push2(`</div><div class="block"${_scopeId}>`);
            _push2(ssrRenderComponent(_sfc_main$2, { required: true }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`Ваш телефон`);
                } else {
                  return [
                    createTextVNode("Ваш телефон")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$3, mergeProps({
              type: "tel",
              "data-maska": "+38 (0##) ###-##-##",
              modelValue: order.value.phone,
              "onUpdate:modelValue": ($event) => order.value.phone = $event,
              placeholder: "+38 (0",
              class: "phone"
            }, ssrGetDirectiveProps(_ctx, unref(U))), null, _parent2, _scopeId));
            if (state.value.errors.phone) {
              _push2(`<!--[-->`);
              ssrRenderList(state.value.errors.phone, (error) => {
                _push2(ssrRenderComponent(_sfc_main$4, { message: error }, null, _parent2, _scopeId));
              });
              _push2(`<!--]-->`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`</div></div>`);
          } else {
            return [
              createVNode("div", { class: "grid gap-4" }, [
                createVNode("div", { class: "block" }, [
                  createVNode(_sfc_main$2, null, {
                    default: withCtx(() => [
                      createTextVNode("Ім`я")
                    ]),
                    _: 1
                  }),
                  createVNode(_sfc_main$3, {
                    type: "text",
                    modelValue: order.value.name,
                    "onUpdate:modelValue": ($event) => order.value.name = $event,
                    placeholder: "Введіть ваше ім'я"
                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
                ]),
                createVNode("div", { class: "block" }, [
                  createVNode(_sfc_main$2, { required: true }, {
                    default: withCtx(() => [
                      createTextVNode("Ваш телефон")
                    ]),
                    _: 1
                  }),
                  withDirectives(createVNode(_sfc_main$3, {
                    type: "tel",
                    "data-maska": "+38 (0##) ###-##-##",
                    modelValue: order.value.phone,
                    "onUpdate:modelValue": ($event) => order.value.phone = $event,
                    placeholder: "+38 (0",
                    class: "phone"
                  }, null, 8, ["modelValue", "onUpdate:modelValue"]), [
                    [unref(U)]
                  ]),
                  state.value.errors.phone ? (openBlock(true), createBlock(Fragment, { key: 0 }, renderList(state.value.errors.phone, (error) => {
                    return openBlock(), createBlock(_sfc_main$4, { message: error }, null, 8, ["message"]);
                  }), 256)) : createCommentVNode("", true)
                ])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Public/Product/BuyIn1ClickModal.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
