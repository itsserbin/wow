import { inject, ref, mergeProps, withCtx, createTextVNode, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList } from "vue/server-renderer";
import { _ as _sfc_main$2 } from "./Label-229c476a.mjs";
import { _ as _sfc_main$3 } from "./Input-4be85f13.mjs";
import { _ as _sfc_main$4 } from "./Button-6b2e52a5.mjs";
import { _ as _sfc_main$1 } from "./LangTabs-3c63a9c9.mjs";
const _sfc_main = {
  __name: "Form",
  __ssrInlineRender: true,
  props: ["item"],
  setup(__props) {
    const props = __props;
    const defaultLang = inject("$defaultLang");
    const state = ref({
      activeLang: defaultLang
    });
    function changeLang(val) {
      state.value.activeLang = val;
    }
    function addInput() {
      props.item.values.push(
        {
          title: {
            ua: null,
            ru: null
          }
        }
      );
    }
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<form${ssrRenderAttrs(mergeProps({ class: "flex flex-col" }, _attrs))}>`);
      _push(ssrRenderComponent(_sfc_main$1, { onClickLang: changeLang }, null, _parent));
      _push(`<div class="grid grid-cols-1 gap-4"><div class="block">`);
      _push(ssrRenderComponent(_sfc_main$2, { value: "Назва" }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$3, {
        modelValue: __props.item.title[state.value.activeLang],
        "onUpdate:modelValue": ($event) => __props.item.title[state.value.activeLang] = $event,
        type: "text",
        placeholder: "Вкажіть назву характеристики"
      }, null, _parent));
      _push(`</div><div class="block">`);
      if (__props.item.values.length) {
        _push(ssrRenderComponent(_sfc_main$2, { value: "Опції" }, null, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="grid gap-4"><!--[-->`);
      ssrRenderList(__props.item.values, (item, i) => {
        _push(`<div class="flex">`);
        _push(ssrRenderComponent(_sfc_main$3, {
          modelValue: item.title[state.value.activeLang],
          "onUpdate:modelValue": ($event) => item.title[state.value.activeLang] = $event,
          type: "text",
          placeholder: "Вкажіть значення характеристики"
        }, null, _parent));
        _push(`<div class="flex items-center justify-center pl-3 cursor-pointer"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-dash-square" viewBox="0 0 16 16"><path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z"></path><path d="M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8z"></path></svg></div></div>`);
      });
      _push(`<!--]--><div class="text-center">`);
      _push(ssrRenderComponent(_sfc_main$4, {
        type: "button",
        onClick: addInput
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Додати опцію`);
          } else {
            return [
              createTextVNode("Додати опцію")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div></div></div></form>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Admin/Options/Characteristics/Form.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
