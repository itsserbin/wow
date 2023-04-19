import { inject, unref, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent } from "vue/server-renderer";
import { _ as _sfc_main$1 } from "./Label-229c476a.mjs";
import { _ as _sfc_main$3 } from "./Input-4be85f13.mjs";
import { _ as _sfc_main$2 } from "./Select-b70673dc.mjs";
const _sfc_main = {
  __name: "Form",
  __ssrInlineRender: true,
  props: ["item"],
  setup(__props) {
    const publishedStatuses = inject("$publishedStatuses");
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<form${ssrRenderAttrs(_attrs)}><div class="grid grid-cols-1 mb-5"><div class="block mr-2">`);
      _push(ssrRenderComponent(_sfc_main$1, { value: "Статус публікації" }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$2, {
        modelValue: __props.item.published,
        "onUpdate:modelValue": ($event) => __props.item.published = $event,
        options: unref(publishedStatuses)
      }, null, _parent));
      _push(`</div></div><div class="grid grid-cols-1 mb-5"><div class="block mr-2">`);
      _push(ssrRenderComponent(_sfc_main$1, { value: "Назва" }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$3, {
        modelValue: __props.item.title,
        "onUpdate:modelValue": ($event) => __props.item.title = $event,
        type: "text"
      }, null, _parent));
      _push(`</div></div></form>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Admin/Options/Translations/Form.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
