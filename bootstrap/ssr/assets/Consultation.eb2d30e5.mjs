import { ref, resolveComponent, resolveDirective, mergeProps, withCtx, createVNode, withDirectives, openBlock, createBlock, Fragment, renderList, createCommentVNode, useSSRContext } from "vue";
import { ssrRenderComponent, ssrGetDirectiveProps, ssrRenderList } from "vue/server-renderer";
import { s as swal } from "./swal.a7da81d8.mjs";
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
          title: "\u0412\u0430\u0448 \u0437\u0430\u043F\u0438\u0442 \u043D\u0430\u0434\u0456\u0441\u043B\u0430\u043D\u043E!",
          text: "\u041D\u0430\u0448 \u043E\u043F\u0435\u0440\u0430\u0442\u043E\u0440 \u0437\u0430\u0442\u0435\u043B\u0435\u0444\u043E\u043D\u0443\u0454 \u0412\u0430\u043C \u043F\u0440\u043E\u0442\u044F\u0433\u043E\u043C 5 \u0445\u0432\u0438\u043B\u0438\u043D"
        });
        state.value.item = {
          phone: null
        };
        state.value.isLoading = false;
        showModal();
      }).catch(({ response }) => {
        swal({
          icon: "error",
          title: "\u0412\u0438\u043D\u0438\u043A\u043B\u0430 \u043F\u043E\u043C\u0438\u043B\u043A\u0430",
          text: "\u041F\u0435\u0440\u0435\u0432\u0456\u0440\u0442\u0435 \u043A\u043E\u0440\u0440\u0435\u043A\u0442\u043D\u0456\u0441\u0442\u044C \u0434\u0430\u043D\u043D\u0438\u0445"
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
          "submit-button-text": "\u0412\u0456\u0434\u043F\u0440\u0430\u0432\u0438\u0442\u0438",
          onSubmitForm: sendForm,
          onClickCancel: showModal,
          "is-loading": state.value.isLoading
        }, _attrs), {
          content: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<div class="text-[24px] text-[#000] font-bold mb-5 text-center"${_scopeId}>\u041F\u043E\u0442\u0440\u0456\u0431\u043D\u0430 \u043A\u043E\u043D\u0441\u0443\u043B\u044C\u0442\u0430\u0446\u0456\u044F?</div><div class="text-[20px] text-[#000] mb-5 text-center"${_scopeId}> \u0417\u0430\u043B\u0438\u0448\u0442\u0435 \u0441\u0432\u0456\u0439 \u043D\u043E\u043C\u0435\u0440 \u0442\u0435\u043B\u0435\u0444\u043E\u043D\u0443, \u0456 \u043D\u0430\u0448 \u043A\u043E\u043D\u0441\u0443\u043B\u044C\u0442\u0430\u043D\u0442 \u0432\u0430\u043C \u0437\u0430\u0442\u0435\u043B\u0435\u0444\u043E\u043D\u0443\u0454 </div><div class="block"${_scopeId}>`);
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
                createVNode("div", { class: "text-[24px] text-[#000] font-bold mb-5 text-center" }, "\u041F\u043E\u0442\u0440\u0456\u0431\u043D\u0430 \u043A\u043E\u043D\u0441\u0443\u043B\u044C\u0442\u0430\u0446\u0456\u044F?"),
                createVNode("div", { class: "text-[20px] text-[#000] mb-5 text-center" }, " \u0417\u0430\u043B\u0438\u0448\u0442\u0435 \u0441\u0432\u0456\u0439 \u043D\u043E\u043C\u0435\u0440 \u0442\u0435\u043B\u0435\u0444\u043E\u043D\u0443, \u0456 \u043D\u0430\u0448 \u043A\u043E\u043D\u0441\u0443\u043B\u044C\u0442\u0430\u043D\u0442 \u0432\u0430\u043C \u0437\u0430\u0442\u0435\u043B\u0435\u0444\u043E\u043D\u0443\u0454 "),
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
