import { ref, resolveComponent, resolveDirective, mergeProps, withCtx, createVNode, withDirectives, openBlock, createBlock, Fragment, renderList, createCommentVNode, useSSRContext } from "vue";
import { ssrRenderComponent, ssrGetDirectiveProps, ssrRenderList } from "vue/server-renderer";
import { s as swal } from "./swal-dcd03cbb.mjs";
const _sfc_main = {
  __name: "Consultation",
  __ssrInlineRender: true,
  setup(__props) {
    const state = ref({
      show: false,
      isShow: true,
      isLoading: false,
      item: {
        name: null,
        phone: null,
        comment: null
      },
      errors: []
    });
    setTimeout(() => {
      if (state.value.isShow) {
        showModal();
      }
    }, 6e4);
    function showModal() {
      state.value.show = !state.value.show;
    }
    async function sendForm() {
      state.value.isLoading = true;
      await axios.post(route("api.v1.callback.create"), state.value.item).then(() => {
        swal({
          icon: "success",
          title: "Ваш запит надіслано!",
          text: "Наш оператор зателефонує Вам протягом 5 хвилин"
        });
        state.value.item = {
          phone: null
        };
        state.value.isLoading = false;
        showModal();
      }).catch(({ response }) => {
        swal({
          icon: "error",
          title: "Виникла помилка",
          text: "Перевірте корректність данних"
        });
        state.value.errors = response.data;
        state.value.isLoading = false;
      });
    }
    return (_ctx, _push, _parent, _attrs) => {
      const _component_modal = resolveComponent("modal");
      const _component_input_component = resolveComponent("input-component");
      const _component_input_error = resolveComponent("input-error");
      const _directive_maska = resolveDirective("maska");
      if (state.value.show) {
        _push(ssrRenderComponent(_component_modal, mergeProps({
          onCloseModal: showModal,
          size: "medium",
          "submit-button-text": "Відправити",
          onSubmitForm: sendForm,
          onClickCancel: showModal,
          "is-loading": state.value.isLoading
        }, _attrs), {
          content: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<div class="text-[24px] text-[#000] font-bold mb-5 text-center"${_scopeId}>Потрібна консультація?</div><div class="text-[20px] text-[#000] mb-5 text-center"${_scopeId}> Залиште свій номер телефону, і наш консультант вам зателефонує </div><div class="block"${_scopeId}>`);
              _push2(ssrRenderComponent(_component_input_component, mergeProps({
                placeholder: "+380",
                modelValue: state.value.item.phone,
                "onUpdate:modelValue": ($event) => state.value.item.phone = $event,
                type: "tel"
              }, ssrGetDirectiveProps(_ctx, _directive_maska, "+38 (0##) ###-##-##")), null, _parent2, _scopeId));
              if (state.value.errors.phone) {
                _push2(`<!--[-->`);
                ssrRenderList(state.value.errors.phone, (error) => {
                  _push2(ssrRenderComponent(_component_input_error, { message: error }, null, _parent2, _scopeId));
                });
                _push2(`<!--]-->`);
              } else {
                _push2(`<!---->`);
              }
              _push2(`</div>`);
            } else {
              return [
                createVNode("div", { class: "text-[24px] text-[#000] font-bold mb-5 text-center" }, "Потрібна консультація?"),
                createVNode("div", { class: "text-[20px] text-[#000] mb-5 text-center" }, " Залиште свій номер телефону, і наш консультант вам зателефонує "),
                createVNode("div", { class: "block" }, [
                  withDirectives(createVNode(_component_input_component, {
                    placeholder: "+380",
                    modelValue: state.value.item.phone,
                    "onUpdate:modelValue": ($event) => state.value.item.phone = $event,
                    type: "tel"
                  }, null, 8, ["modelValue", "onUpdate:modelValue"]), [
                    [_directive_maska, "+38 (0##) ###-##-##"]
                  ]),
                  state.value.errors.phone ? (openBlock(true), createBlock(Fragment, { key: 0 }, renderList(state.value.errors.phone, (error) => {
                    return openBlock(), createBlock(_component_input_error, { message: error }, null, 8, ["message"]);
                  }), 256)) : createCommentVNode("", true)
                ])
              ];
            }
          }),
          _: 1
        }, _parent));
      } else {
        _push(`<!---->`);
      }
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Public/Components/Consultation.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
