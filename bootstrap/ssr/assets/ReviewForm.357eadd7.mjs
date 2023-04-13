import { ref, resolveComponent, resolveDirective, withCtx, createTextVNode, toDisplayString, mergeProps, createVNode, withDirectives, vModelText, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrGetDirectiveProps } from "vue/server-renderer";
import { s as swal } from "./swal.a7da81d8.mjs";
const _sfc_main = {
  __name: "ReviewForm",
  __ssrInlineRender: true,
  props: {
    id: Number,
    textGiveReview: {
      type: String,
      default: "\u0417\u0430\u043B\u0438\u0448\u0438\u0442\u0438 \u0432\u0456\u0434\u0433\u0443\u043A"
    },
    textEnterName: {
      type: String,
      default: "\u0412\u0430\u0448\u0435 \u0456\u043C\u02BC\u044F"
    },
    textEnterReview: {
      type: String,
      default: "\u0412\u0430\u0448 \u0432\u0456\u0434\u0433\u0443\u043A"
    },
    textName: {
      type: String,
      default: "\u0406\u043C\u02BC\u044F"
    },
    textPhone: {
      type: String,
      default: "\u0422\u0435\u043B\u0435\u0444\u043E\u043D"
    },
    textComment: {
      type: String,
      default: "\u0412\u0456\u0434\u0433\u0443\u043A"
    }
  },
  setup(__props) {
    const props = __props;
    const state = ref({
      showReviewModal: false,
      review: {
        published: 0,
        product_id: null,
        phone: null,
        name: null,
        comment: null
      },
      errors: [],
      isLoading: false
    });
    function showReviewModalFunction() {
      state.value.showReviewModal = !state.value.showReviewModal;
    }
    function sendReview() {
      state.value.isLoading = true;
      state.value.review.product_id = props.id;
      axios.post("/api/v1/reviews/create", state.value.review).then(() => {
        state.value.review = {
          phone: null,
          name: null,
          comment: null
        };
        state.value.isLoading = false;
        state.value.errors = [];
        showReviewModalFunction();
        swal({
          icon: "success",
          title: "\u0412\u0430\u0448 \u043A\u043E\u043C\u0435\u043D\u0442\u0430\u0440 \u043D\u0430\u0434\u0456\u0441\u043B\u0430\u043D\u043E!",
          text: "\u0412\u0456\u043D \u0431\u0443\u0434\u0435 \u043E\u043F\u0443\u0431\u043B\u0456\u043A\u043E\u0432\u0430\u043D\u0438\u0439 \u043F\u0456\u0441\u043B\u044F \u043F\u0435\u0440\u0435\u0432\u0456\u0440\u043A\u0438 \u043D\u0430 \u0441\u043F\u0430\u043C :)"
        });
      }).catch(({ response }) => {
        state.value.errors = response.data;
        state.value.isLoading = false;
        console.log(response);
        swal({
          icon: "error",
          title: "\u0412\u0438\u043D\u0438\u043A\u043B\u0430 \u043F\u043E\u043C\u0438\u043B\u043A\u0430",
          text: "\u041F\u0435\u0440\u0435\u0432\u0456\u0440\u0442\u0435 \u043A\u043E\u0440\u0440\u0435\u043A\u0442\u043D\u0456\u0441\u0442\u044C \u0434\u0430\u043D\u043D\u0438\u0445"
        });
      });
    }
    return (_ctx, _push, _parent, _attrs) => {
      const _component_button_component = resolveComponent("button-component");
      const _component_modal = resolveComponent("modal");
      const _component_label_component = resolveComponent("label-component");
      const _component_input_component = resolveComponent("input-component");
      const _directive_maska = resolveDirective("maska");
      _push(`<div${ssrRenderAttrs(_attrs)}><div><div class="text-center">`);
      _push(ssrRenderComponent(_component_button_component, {
        type: "button",
        onClick: showReviewModalFunction
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(__props.textGiveReview)}`);
          } else {
            return [
              createTextVNode(toDisplayString(__props.textGiveReview), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
      if (state.value.showReviewModal) {
        _push(ssrRenderComponent(_component_modal, {
          onClickCancel: showReviewModalFunction,
          onCloseModal: showReviewModalFunction,
          onSubmitForm: sendReview,
          "submit-button-text": "\u0412\u0456\u0434\u043F\u0440\u0430\u0432\u0438\u0442\u0438",
          "cancel-button-text": "\u0412\u0456\u0434\u043C\u0456\u043D\u0438\u0442\u0438",
          size: "medium"
        }, {
          heading: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`${ssrInterpolate(__props.textGiveReview)}`);
            } else {
              return [
                createTextVNode(toDisplayString(__props.textGiveReview), 1)
              ];
            }
          }),
          content: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<div class="grid gap-4"${_scopeId}><div class="block"${_scopeId}>`);
              _push2(ssrRenderComponent(_component_label_component, { required: true }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`${ssrInterpolate(__props.textName)}`);
                  } else {
                    return [
                      createTextVNode(toDisplayString(__props.textName), 1)
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(ssrRenderComponent(_component_input_component, {
                type: "text",
                modelValue: state.value.review.name,
                "onUpdate:modelValue": ($event) => state.value.review.name = $event,
                placeholder: __props.textEnterName
              }, null, _parent2, _scopeId));
              _push2(`</div><div class="block"${_scopeId}>`);
              _push2(ssrRenderComponent(_component_label_component, { required: true }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`${ssrInterpolate(__props.textPhone)}`);
                  } else {
                    return [
                      createTextVNode(toDisplayString(__props.textPhone), 1)
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(ssrRenderComponent(_component_input_component, mergeProps({
                type: "tel",
                modelValue: state.value.review.phone,
                "onUpdate:modelValue": ($event) => state.value.review.phone = $event,
                placeholder: "+38 (0",
                class: "phone"
              }, ssrGetDirectiveProps(_ctx, _directive_maska, "+38 (0##) ###-##-##")), null, _parent2, _scopeId));
              _push2(`</div><div class="block"${_scopeId}>`);
              _push2(ssrRenderComponent(_component_label_component, { required: true }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`${ssrInterpolate(__props.textComment)}`);
                  } else {
                    return [
                      createTextVNode(toDisplayString(__props.textComment), 1)
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(`<textarea placeholder="\u0412\u0432\u0435\u0434\u0456\u0442\u044C \u0432\u0430\u0448 \u043A\u043E\u043C\u0435\u043D\u0442\u0430\u0440" rows="4" class="border-[0.5px] rounded-[10px] box-border font-[350] h-[100] mt-[0.75rem] p-[1rem] resize-none w-[100%] outline-none border-red-600 focus:border-red-600 focus:ring-red-600"${_scopeId}>${ssrInterpolate(state.value.review.comment)}</textarea></div></div>`);
            } else {
              return [
                createVNode("div", { class: "grid gap-4" }, [
                  createVNode("div", { class: "block" }, [
                    createVNode(_component_label_component, { required: true }, {
                      default: withCtx(() => [
                        createTextVNode(toDisplayString(__props.textName), 1)
                      ]),
                      _: 1
                    }),
                    createVNode(_component_input_component, {
                      type: "text",
                      modelValue: state.value.review.name,
                      "onUpdate:modelValue": ($event) => state.value.review.name = $event,
                      placeholder: __props.textEnterName
                    }, null, 8, ["modelValue", "onUpdate:modelValue", "placeholder"])
                  ]),
                  createVNode("div", { class: "block" }, [
                    createVNode(_component_label_component, { required: true }, {
                      default: withCtx(() => [
                        createTextVNode(toDisplayString(__props.textPhone), 1)
                      ]),
                      _: 1
                    }),
                    withDirectives(createVNode(_component_input_component, {
                      type: "tel",
                      modelValue: state.value.review.phone,
                      "onUpdate:modelValue": ($event) => state.value.review.phone = $event,
                      placeholder: "+38 (0",
                      class: "phone"
                    }, null, 8, ["modelValue", "onUpdate:modelValue"]), [
                      [_directive_maska, "+38 (0##) ###-##-##"]
                    ])
                  ]),
                  createVNode("div", { class: "block" }, [
                    createVNode(_component_label_component, { required: true }, {
                      default: withCtx(() => [
                        createTextVNode(toDisplayString(__props.textComment), 1)
                      ]),
                      _: 1
                    }),
                    withDirectives(createVNode("textarea", {
                      placeholder: "\u0412\u0432\u0435\u0434\u0456\u0442\u044C \u0432\u0430\u0448 \u043A\u043E\u043C\u0435\u043D\u0442\u0430\u0440",
                      "onUpdate:modelValue": ($event) => state.value.review.comment = $event,
                      rows: "4",
                      class: "border-[0.5px] rounded-[10px] box-border font-[350] h-[100] mt-[0.75rem] p-[1rem] resize-none w-[100%] outline-none border-red-600 focus:border-red-600 focus:ring-red-600"
                    }, null, 8, ["onUpdate:modelValue"]), [
                      [vModelText, state.value.review.comment]
                    ])
                  ])
                ])
              ];
            }
          }),
          _: 1
        }, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Public/Product/ReviewForm.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
