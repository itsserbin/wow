import { ref, mergeProps, withCtx, unref, createVNode, withDirectives, openBlock, createBlock, Fragment, renderList, createCommentVNode, useSSRContext } from "vue";
import { ssrRenderComponent, ssrGetDirectiveProps, ssrRenderList } from "vue/server-renderer";
import _sfc_main$1 from "./Modal-e357bd17.mjs";
import _sfc_main$2 from "./Input-4d6b8e1d.mjs";
import { _ as _sfc_main$3 } from "./InputError-71f0cb4c.mjs";
import { s as swal } from "./swal-dcd03cbb.mjs";
import { U } from "./maska-e9315c75.mjs";
import "./Loader-f0774e51.mjs";
import "./_plugin-vue_export-helper-cc2b3d55.mjs";
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
      if (state.value.show) {
        _push(ssrRenderComponent(_sfc_main$1, mergeProps({
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
              _push2(ssrRenderComponent(_sfc_main$2, mergeProps({
                "data-maska": "+38 (0##) ###-##-##",
                placeholder: "+380",
                modelValue: state.value.item.phone,
                "onUpdate:modelValue": ($event) => state.value.item.phone = $event,
                type: "tel"
              }, ssrGetDirectiveProps(_ctx, unref(U))), null, _parent2, _scopeId));
              if (state.value.errors.phone) {
                _push2(`<!--[-->`);
                ssrRenderList(state.value.errors.phone, (error) => {
                  _push2(ssrRenderComponent(_sfc_main$3, { message: error }, null, _parent2, _scopeId));
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
                  withDirectives(createVNode(_sfc_main$2, {
                    "data-maska": "+38 (0##) ###-##-##",
                    placeholder: "+380",
                    modelValue: state.value.item.phone,
                    "onUpdate:modelValue": ($event) => state.value.item.phone = $event,
                    type: "tel"
                  }, null, 8, ["modelValue", "onUpdate:modelValue"]), [
                    [unref(U)]
                  ]),
                  state.value.errors.phone ? (openBlock(true), createBlock(Fragment, { key: 0 }, renderList(state.value.errors.phone, (error) => {
                    return openBlock(), createBlock(_sfc_main$3, { message: error }, null, 8, ["message"]);
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
