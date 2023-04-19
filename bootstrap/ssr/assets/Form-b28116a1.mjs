import { inject, ref, mergeProps, unref, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent } from "vue/server-renderer";
import { _ as _sfc_main$3 } from "./LangTabs-3c63a9c9.mjs";
import { _ as _sfc_main$1 } from "./Label-229c476a.mjs";
import { _ as _sfc_main$4 } from "./Input-4be85f13.mjs";
import { _ as _sfc_main$2 } from "./Select-b70673dc.mjs";
import { _ as _sfc_main$5 } from "./Textarea-1805d9a6.mjs";
const _sfc_main = {
  __name: "Form",
  __ssrInlineRender: true,
  props: ["item"],
  setup(__props) {
    const publishedStatuses = inject("$publishedStatuses");
    const defaultLang = inject("$defaultLang");
    const state = ref({
      activeLang: defaultLang
    });
    function changeLang(val) {
      state.value.activeLang = val;
    }
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<form${ssrRenderAttrs(mergeProps({ class: "grid gap-4" }, _attrs))}><div class="block">`);
      _push(ssrRenderComponent(_sfc_main$1, { value: "Статус публікації" }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$2, {
        modelValue: __props.item.published,
        "onUpdate:modelValue": ($event) => __props.item.published = $event,
        options: unref(publishedStatuses)
      }, null, _parent));
      _push(`</div><div>`);
      _push(ssrRenderComponent(_sfc_main$3, { onClickLang: changeLang }, null, _parent));
      _push(`<div class="grid gap-4"><div class="block">`);
      _push(ssrRenderComponent(_sfc_main$1, { value: "Питання" }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$4, {
        modelValue: __props.item.question[state.value.activeLang],
        "onUpdate:modelValue": ($event) => __props.item.question[state.value.activeLang] = $event,
        type: "text"
      }, null, _parent));
      _push(`</div><div class="block">`);
      _push(ssrRenderComponent(_sfc_main$1, { value: "Відповідь" }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$5, {
        modelValue: __props.item.answer[state.value.activeLang],
        "onUpdate:modelValue": ($event) => __props.item.answer[state.value.activeLang] = $event,
        rows: "4"
      }, null, _parent));
      _push(`</div></div></div></form>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Admin/Options/Faqs/Form.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
