import { inject, ref, resolveComponent, mergeProps, unref, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent } from "vue/server-renderer";
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
      const _component_label_component = resolveComponent("label-component");
      const _component_select_component = resolveComponent("select-component");
      const _component_textarea_component = resolveComponent("textarea-component");
      const _component_lang_tabs = resolveComponent("lang-tabs");
      const _component_input_component = resolveComponent("input-component");
      _push(`<form${ssrRenderAttrs(mergeProps({ class: "grid gap-4" }, _attrs))}><div class="grid grid-cols-1 md:grid-cols-2 gap-4"><div class="block">`);
      _push(ssrRenderComponent(_component_label_component, { value: "\u0421\u0442\u0430\u0442\u0443\u0441 \u043F\u0443\u0431\u043B\u0456\u043A\u0430\u0446\u0456\u0457" }, null, _parent));
      _push(ssrRenderComponent(_component_select_component, {
        modelValue: __props.item.published,
        "onUpdate:modelValue": ($event) => __props.item.published = $event,
        options: unref(publishedStatuses)
      }, null, _parent));
      _push(`</div><div class="block">`);
      _push(ssrRenderComponent(_component_label_component, { value: "\u0417\u043E\u0431\u0440\u0430\u0436\u0435\u043D\u043D\u044F (SVG)" }, null, _parent));
      _push(ssrRenderComponent(_component_textarea_component, {
        modelValue: __props.item.icon,
        "onUpdate:modelValue": ($event) => __props.item.icon = $event
      }, null, _parent));
      _push(`</div></div><div>`);
      _push(ssrRenderComponent(_component_lang_tabs, { onClickLang: changeLang }, null, _parent));
      _push(`<div class="block">`);
      _push(ssrRenderComponent(_component_label_component, { value: "\u0422\u0435\u043A\u0441\u0442" }, null, _parent));
      if (state.value.activeLang === "ru") {
        _push(ssrRenderComponent(_component_input_component, {
          modelValue: __props.item.text.ru,
          "onUpdate:modelValue": ($event) => __props.item.text.ru = $event,
          type: "text"
        }, null, _parent));
      } else {
        _push(`<!---->`);
      }
      if (state.value.activeLang === "ua") {
        _push(ssrRenderComponent(_component_input_component, {
          modelValue: __props.item.text.ua,
          "onUpdate:modelValue": ($event) => __props.item.text.ua = $event,
          type: "text"
        }, null, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div></form>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Admin/Options/Advantages/Form.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
