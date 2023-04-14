import { inject, ref, resolveComponent, mergeProps, unref, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent } from "vue/server-renderer";
import { _ as _sfc_main$1, a as _sfc_main$2, e as _sfc_main$3, g as _sfc_main$4, h as _sfc_main$5 } from "../app2.mjs";
import "./vue.m.487fc989.mjs";
import "axios";
import "@inertiajs/inertia-vue3";
import "@inertiajs/progress";
import "./vendor.67403750.mjs";
import "vue-sweetalert2";
import "moment";
import "numeral";
import "@tinymce/tinymce-vue";
import "vue-i18n";
import "./_plugin-vue_export-helper.43be4956.mjs";
import "./Logo.5e8f1180.mjs";
import "@inertiajs/vue3";
import "vuex";
import "@vuepic/vue-datepicker";
import "chart.js";
const _sfc_main = {
  __name: "Form",
  __ssrInlineRender: true,
  props: ["item"],
  setup(__props) {
    const tiny = inject("$tiny");
    const defaultLang = inject("$defaultLang");
    const publishedStatuses = inject("$publishedStatuses");
    const activeLang = ref(defaultLang);
    const changeLang = (val) => {
      activeLang.value = val;
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_editor = resolveComponent("editor");
      _push(`<form${ssrRenderAttrs(mergeProps({ class: "flex flex-col" }, _attrs))}><div class="grid grid-cols-3 mb-5 gap-4"><div class="block col-span-2">`);
      _push(ssrRenderComponent(_sfc_main$1, {
        value: _ctx.$t("slug")
      }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$2, {
        modelValue: __props.item.slug,
        "onUpdate:modelValue": ($event) => __props.item.slug = $event,
        type: "text",
        placeholder: _ctx.$t("enter_slug")
      }, null, _parent));
      _push(`</div><div class="block">`);
      _push(ssrRenderComponent(_sfc_main$1, {
        value: _ctx.$t("published")
      }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$3, {
        modelValue: __props.item.published,
        "onUpdate:modelValue": ($event) => __props.item.published = $event,
        options: unref(publishedStatuses)
      }, null, _parent));
      _push(`</div></div>`);
      _push(ssrRenderComponent(_sfc_main$4, { onClickLang: changeLang }, null, _parent));
      _push(`<hr class="mb-5"><div class="grid grid-cols-1 rounded"><div class="block mb-5">`);
      _push(ssrRenderComponent(_sfc_main$1, {
        value: _ctx.$t("pages.heading")
      }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$2, {
        modelValue: __props.item.heading[activeLang.value],
        "onUpdate:modelValue": ($event) => __props.item.heading[activeLang.value] = $event,
        type: "text",
        placeholder: _ctx.$t("pages.enter_heading")
      }, null, _parent));
      _push(`</div><div class="block mb-5">`);
      _push(ssrRenderComponent(_sfc_main$1, {
        value: _ctx.$t("pages.h1")
      }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$2, {
        modelValue: __props.item.h1[activeLang.value],
        "onUpdate:modelValue": ($event) => __props.item.h1[activeLang.value] = $event,
        type: "text",
        placeholder: _ctx.$t("pages.enter_h1")
      }, null, _parent));
      _push(`</div><div class="block mb-5">`);
      _push(ssrRenderComponent(_sfc_main$1, {
        value: _ctx.$t("meta.title")
      }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$2, {
        modelValue: __props.item.meta_title[activeLang.value],
        "onUpdate:modelValue": ($event) => __props.item.meta_title[activeLang.value] = $event,
        type: "text",
        placeholder: _ctx.$t("meta.enter_title")
      }, null, _parent));
      _push(`</div><div class="block mb-5">`);
      _push(ssrRenderComponent(_sfc_main$1, {
        value: _ctx.$t("meta.description")
      }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$5, {
        modelValue: __props.item.meta_description[activeLang.value],
        "onUpdate:modelValue": ($event) => __props.item.meta_description[activeLang.value] = $event,
        placeholder: _ctx.$t("meta.enter_description")
      }, null, _parent));
      _push(`</div><div class="block mb-5">`);
      _push(ssrRenderComponent(_sfc_main$1, {
        value: _ctx.$t("seo_text")
      }, null, _parent));
      _push(ssrRenderComponent(_component_editor, {
        "api-key": unref(tiny).api,
        modelValue: __props.item.content[activeLang.value],
        "onUpdate:modelValue": ($event) => __props.item.content[activeLang.value] = $event,
        init: unref(tiny).settings
      }, null, _parent));
      _push(`</div></div></form>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Admin/Content/Pages/Form.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
