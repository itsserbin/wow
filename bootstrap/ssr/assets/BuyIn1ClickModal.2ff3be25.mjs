import { getCurrentInstance, ref, mergeProps, withCtx, createTextVNode, unref, createVNode, withDirectives, openBlock, createBlock, Fragment, renderList, createCommentVNode, useSSRContext } from "vue";
import { ssrRenderComponent, ssrGetDirectiveProps, ssrRenderList } from "vue/server-renderer";
import { useGtm } from "@gtm-support/vue-gtm";
import { useStore } from "vuex";
import { maska } from "maska";
import _sfc_main$1 from "./Modal.9c3ed2ed.mjs";
import _sfc_main$3 from "./Input.aac4ec2d.mjs";
import { _ as _sfc_main$4 } from "./InputError.f356d54a.mjs";
import _sfc_main$2 from "./Label.4ae45cc4.mjs";
import "./Loader.43a0c8e2.mjs";
import "./_plugin-vue_export-helper.43be4956.mjs";
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
        "submit-button-text": "\u0417\u0430\u043C\u043E\u0432\u0438\u0442\u0438",
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
                  _push3(`\u0406\u043C\`\u044F`);
                } else {
                  return [
                    createTextVNode("\u0406\u043C`\u044F")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$3, {
              type: "text",
              modelValue: order.value.name,
              "onUpdate:modelValue": ($event) => order.value.name = $event,
              placeholder: "\u0412\u0432\u0435\u0434\u0456\u0442\u044C \u0432\u0430\u0448\u0435 \u0456\u043C'\u044F"
            }, null, _parent2, _scopeId));
            _push2(`</div><div class="block"${_scopeId}>`);
            _push2(ssrRenderComponent(_sfc_main$2, { required: true }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`\u0412\u0430\u0448 \u0442\u0435\u043B\u0435\u0444\u043E\u043D`);
                } else {
                  return [
                    createTextVNode("\u0412\u0430\u0448 \u0442\u0435\u043B\u0435\u0444\u043E\u043D")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$3, mergeProps({
              type: "tel",
              modelValue: order.value.phone,
              "onUpdate:modelValue": ($event) => order.value.phone = $event,
              placeholder: "+38 (0",
              class: "phone"
            }, ssrGetDirectiveProps(_ctx, unref(maska), "+38 (0##) ###-##-##")), null, _parent2, _scopeId));
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
                      createTextVNode("\u0406\u043C`\u044F")
                    ]),
                    _: 1
                  }),
                  createVNode(_sfc_main$3, {
                    type: "text",
                    modelValue: order.value.name,
                    "onUpdate:modelValue": ($event) => order.value.name = $event,
                    placeholder: "\u0412\u0432\u0435\u0434\u0456\u0442\u044C \u0432\u0430\u0448\u0435 \u0456\u043C'\u044F"
                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
                ]),
                createVNode("div", { class: "block" }, [
                  createVNode(_sfc_main$2, { required: true }, {
                    default: withCtx(() => [
                      createTextVNode("\u0412\u0430\u0448 \u0442\u0435\u043B\u0435\u0444\u043E\u043D")
                    ]),
                    _: 1
                  }),
                  withDirectives(createVNode(_sfc_main$3, {
                    type: "tel",
                    modelValue: order.value.phone,
                    "onUpdate:modelValue": ($event) => order.value.phone = $event,
                    placeholder: "+38 (0",
                    class: "phone"
                  }, null, 8, ["modelValue", "onUpdate:modelValue"]), [
                    [unref(maska), "+38 (0##) ###-##-##"]
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
