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
      const _component_lang_tabs = resolveComponent("lang-tabs");
      const _component_input_component = resolveComponent("input-component");
      const _component_textarea_component = resolveComponent("textarea-component");
      _push(`<form${ssrRenderAttrs(mergeProps({ class: "grid gap-4" }, _attrs))}><div class="block">`);
      _push(ssrRenderComponent(_component_label_component, { value: "\u0421\u0442\u0430\u0442\u0443\u0441 \u043F\u0443\u0431\u043B\u0456\u043A\u0430\u0446\u0456\u0457" }, null, _parent));
      _push(ssrRenderComponent(_component_select_component, {
        modelValue: __props.item.published,
        "onUpdate:modelValue": ($event) => __props.item.published = $event,
        options: unref(publishedStatuses)
      }, null, _parent));
      _push(`</div><div>`);
      _push(ssrRenderComponent(_component_lang_tabs, { onClickLang: changeLang }, null, _parent));
      _push(`<div class="grid gap-4"><div class="block">`);
      _push(ssrRenderComponent(_component_label_component, { value: "\u041F\u0438\u0442\u0430\u043D\u043D\u044F" }, null, _parent));
      if (state.value.activeLang === "ru") {
        _push(ssrRenderComponent(_component_input_component, {
          modelValue: __props.item.question.ru,
          "onUpdate:modelValue": ($event) => __props.item.question.ru = $event,
          type: "text"
        }, null, _parent));
      } else {
        _push(`<!---->`);
      }
      if (state.value.activeLang === "ua") {
        _push(ssrRenderComponent(_component_input_component, {
          modelValue: __props.item.question.ua,
          "onUpdate:modelValue": ($event) => __props.item.question.ua = $event,
          type: "text"
        }, null, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`</div><div class="block">`);
      _push(ssrRenderComponent(_component_label_component, { value: "\u0412\u0456\u0434\u043F\u043E\u0432\u0456\u0434\u044C" }, null, _parent));
      if (state.value.activeLang === "ru") {
        _push(ssrRenderComponent(_component_textarea_component, {
          modelValue: __props.item.answer.ru,
          "onUpdate:modelValue": ($event) => __props.item.answer.ru = $event,
          rows: "4"
        }, null, _parent));
      } else {
        _push(`<!---->`);
      }
      if (state.value.activeLang === "ua") {
        _push(ssrRenderComponent(_component_textarea_component, {
          modelValue: __props.item.answer.ua,
          "onUpdate:modelValue": ($event) => __props.item.answer.ua = $event,
          rows: "4"
        }, null, _parent));
      } else {
        _push(`<!---->`);
      }
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
