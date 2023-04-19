import { computed, mergeProps, unref, useSSRContext, inject, withCtx, createTextVNode, toDisplayString } from "vue";
import { ssrRenderAttrs, ssrRenderAttr, ssrIncludeBooleanAttr, ssrInterpolate, ssrRenderComponent } from "vue/server-renderer";
import { _ as _sfc_main$3 } from "./Label-229c476a.mjs";
import { _ as _sfc_main$4 } from "./Input-4be85f13.mjs";
import { _ as _sfc_main$5 } from "./Textarea-1805d9a6.mjs";
import { _ as _sfc_main$6 } from "./Button-6b2e52a5.mjs";
import _sfc_main$2 from "./Logo-fe5a81e0.mjs";
import Editor from "@tinymce/tinymce-vue";
import "vue-i18n";
import "./swal-dcd03cbb.mjs";
const _sfc_main$1 = {
  __name: "RadioBordered",
  __ssrInlineRender: true,
  props: ["label", "value", "name", "modelValue"],
  emits: ["update:modelValue"],
  setup(__props, { emit: emits }) {
    const props = __props;
    const isChecked = computed(() => props.modelValue === props.value);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex items-center pl-4 rounded border border-gray-200 dark:border-gray-700" }, _attrs))}><input${ssrRenderAttr("name", __props.name)}${ssrIncludeBooleanAttr(unref(isChecked)) ? " checked" : ""}${ssrRenderAttr("value", __props.value)} type="radio" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"><label class="py-4 ml-2 w-full text-sm font-medium text-gray-900 dark:text-gray-300">${ssrInterpolate(__props.label)}</label></div>`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/Form/RadioBordered.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = {
  __name: "Form",
  __ssrInlineRender: true,
  props: ["options"],
  emits: ["submitForm"],
  setup(__props) {
    const tiny = inject("$tiny");
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[-->`);
      _push(ssrRenderComponent(_sfc_main$2, null, null, _parent));
      _push(`<form><div class="block mb-5">`);
      _push(ssrRenderComponent(_sfc_main$3, {
        value: _ctx.$t("options.brand")
      }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$4, {
        modelValue: __props.options.brand,
        "onUpdate:modelValue": ($event) => __props.options.brand = $event,
        type: "text",
        placeholder: _ctx.$t("options.enter_brand")
      }, null, _parent));
      _push(`</div><div class="block mb-5">`);
      _push(ssrRenderComponent(_sfc_main$3, {
        value: _ctx.$t("options.callback_status")
      }, null, _parent));
      _push(`<div class="grid grid-cols-2 gap-4">`);
      _push(ssrRenderComponent(_sfc_main$1, {
        name: "callback_status",
        value: "on",
        label: _ctx.$t("options.callback_status_on"),
        modelValue: __props.options.callback_status,
        "onUpdate:modelValue": ($event) => __props.options.callback_status = $event
      }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$1, {
        name: "callback_status",
        value: "off",
        label: _ctx.$t("options.callback_status_off"),
        modelValue: __props.options.callback_status,
        "onUpdate:modelValue": ($event) => __props.options.callback_status = $event
      }, null, _parent));
      _push(`</div></div><div class="block mb-5">`);
      _push(ssrRenderComponent(_sfc_main$3, {
        value: _ctx.$t("options.consultation_status")
      }, null, _parent));
      _push(`<div class="grid grid-cols-2 gap-4">`);
      _push(ssrRenderComponent(_sfc_main$1, {
        name: "consultation_status",
        value: "on",
        label: _ctx.$t("options.consultation_status_on"),
        modelValue: __props.options.consultation_status,
        "onUpdate:modelValue": ($event) => __props.options.consultation_status = $event
      }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$1, {
        name: "consultation_status",
        value: "off",
        label: _ctx.$t("options.consultation_status_off"),
        modelValue: __props.options.consultation_status,
        "onUpdate:modelValue": ($event) => __props.options.consultation_status = $event
      }, null, _parent));
      _push(`</div></div><div class="grid grid-cols-2 gap-4 mb-5"><div class="block">`);
      _push(ssrRenderComponent(_sfc_main$3, {
        value: _ctx.$t("options.heading_ua")
      }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$4, {
        modelValue: __props.options.text_heading_home_page_ua,
        "onUpdate:modelValue": ($event) => __props.options.text_heading_home_page_ua = $event,
        type: "text",
        placeholder: _ctx.$t("options.enter_heading_ua")
      }, null, _parent));
      _push(`</div><div class="block">`);
      _push(ssrRenderComponent(_sfc_main$3, {
        value: _ctx.$t("options.heading_ru")
      }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$4, {
        modelValue: __props.options.text_heading_home_page_ru,
        "onUpdate:modelValue": ($event) => __props.options.text_heading_home_page_ru = $event,
        type: "text",
        placeholder: _ctx.$t("options.enter_heading_ru")
      }, null, _parent));
      _push(`</div></div><div class="grid grid-cols-2 gap-4 mb-5"><div class="block">`);
      _push(ssrRenderComponent(_sfc_main$3, {
        value: _ctx.$t("options.meta_title_ua")
      }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$4, {
        modelValue: __props.options.meta_title_ua,
        "onUpdate:modelValue": ($event) => __props.options.meta_title_ua = $event,
        type: "text",
        placeholder: _ctx.$t("options.enter_meta_title_ua")
      }, null, _parent));
      _push(`</div><div class="block">`);
      _push(ssrRenderComponent(_sfc_main$3, {
        value: _ctx.$t("options.meta_title_ru")
      }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$4, {
        modelValue: __props.options.meta_title_ru,
        "onUpdate:modelValue": ($event) => __props.options.meta_title_ru = $event,
        type: "text",
        placeholder: _ctx.$t("options.enter_meta_title_ru")
      }, null, _parent));
      _push(`</div></div><div class="grid grid-cols-2 gap-4 mb-5"><div class="block">`);
      _push(ssrRenderComponent(_sfc_main$3, {
        value: _ctx.$t("options.meta_description_ua")
      }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$5, {
        modelValue: __props.options.meta_description_ua,
        "onUpdate:modelValue": ($event) => __props.options.meta_description_ua = $event,
        placeholder: _ctx.$t("options.enter_meta_description_ua")
      }, null, _parent));
      _push(`</div><div class="block">`);
      _push(ssrRenderComponent(_sfc_main$3, {
        value: _ctx.$t("options.meta_description_ru")
      }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$5, {
        modelValue: __props.options.meta_description_ru,
        "onUpdate:modelValue": ($event) => __props.options.meta_description_ru = $event,
        placeholder: _ctx.$t("options.enter_meta_description_ru")
      }, null, _parent));
      _push(`</div></div><div class="block mb-5">`);
      _push(ssrRenderComponent(_sfc_main$3, {
        value: _ctx.$t("options.schedule")
      }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$5, {
        modelValue: __props.options.schedule,
        "onUpdate:modelValue": ($event) => __props.options.schedule = $event,
        rows: "4",
        placeholder: _ctx.$t("options.enter_schedule")
      }, null, _parent));
      _push(`</div><div class="block mb-5">`);
      _push(ssrRenderComponent(_sfc_main$3, {
        value: _ctx.$t("options.phone")
      }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$4, {
        modelValue: __props.options.phone,
        "onUpdate:modelValue": ($event) => __props.options.phone = $event,
        type: "text",
        placeholder: _ctx.$t("options.enter_phone")
      }, null, _parent));
      _push(`</div><div class="block mb-5">`);
      _push(ssrRenderComponent(_sfc_main$3, {
        value: _ctx.$t("options.email")
      }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$4, {
        modelValue: __props.options.email,
        "onUpdate:modelValue": ($event) => __props.options.email = $event,
        type: "text",
        placeholder: _ctx.$t("options.enter_email")
      }, null, _parent));
      _push(`</div><div class="block mb-5">`);
      _push(ssrRenderComponent(_sfc_main$3, {
        value: _ctx.$t("options.facebook")
      }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$4, {
        modelValue: __props.options.facebook,
        "onUpdate:modelValue": ($event) => __props.options.facebook = $event,
        type: "text",
        placeholder: _ctx.$t("options.enter_facebook")
      }, null, _parent));
      _push(`</div><div class="block mb-5">`);
      _push(ssrRenderComponent(_sfc_main$3, {
        value: _ctx.$t("options.instagram")
      }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$4, {
        modelValue: __props.options.instagram,
        "onUpdate:modelValue": ($event) => __props.options.instagram = $event,
        type: "text",
        placeholder: _ctx.$t("options.enter_instagram")
      }, null, _parent));
      _push(`</div><div class="block mb-5">`);
      _push(ssrRenderComponent(_sfc_main$3, {
        value: _ctx.$t("options.telegram")
      }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$4, {
        modelValue: __props.options.telegram,
        "onUpdate:modelValue": ($event) => __props.options.telegram = $event,
        type: "text",
        placeholder: _ctx.$t("options.enter_telegram")
      }, null, _parent));
      _push(`</div><div class="block mb-5">`);
      _push(ssrRenderComponent(_sfc_main$3, {
        value: _ctx.$t("options.viber")
      }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$4, {
        modelValue: __props.options.viber,
        "onUpdate:modelValue": ($event) => __props.options.viber = $event,
        type: "text",
        placeholder: _ctx.$t("options.enter_viber")
      }, null, _parent));
      _push(`</div><div class="block mb-5">`);
      _push(ssrRenderComponent(_sfc_main$3, {
        value: _ctx.$t("options.whatsapp")
      }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$4, {
        modelValue: __props.options.whatsapp,
        "onUpdate:modelValue": ($event) => __props.options.whatsapp = $event,
        type: "text",
        placeholder: _ctx.$t("options.enter_whatsapp")
      }, null, _parent));
      _push(`</div><div class="block mb-5">`);
      _push(ssrRenderComponent(_sfc_main$3, {
        value: _ctx.$t("options.fb_messenger")
      }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$4, {
        modelValue: __props.options.fb_messenger,
        "onUpdate:modelValue": ($event) => __props.options.fb_messenger = $event,
        type: "text",
        placeholder: _ctx.$t("options.enter_fb_messenger")
      }, null, _parent));
      _push(`</div><div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-5"><div class="block">`);
      _push(ssrRenderComponent(_sfc_main$3, {
        value: _ctx.$t("options.text_delivery_and_payment_ua")
      }, null, _parent));
      _push(ssrRenderComponent(unref(Editor), {
        "api-key": unref(tiny).api,
        modelValue: __props.options.text_delivery_and_payment_ua,
        "onUpdate:modelValue": ($event) => __props.options.text_delivery_and_payment_ua = $event,
        init: unref(tiny).settings
      }, null, _parent));
      _push(`</div><div class="block">`);
      _push(ssrRenderComponent(_sfc_main$3, {
        value: _ctx.$t("options.text_delivery_and_payment_ru")
      }, null, _parent));
      _push(ssrRenderComponent(unref(Editor), {
        "api-key": unref(tiny).api,
        modelValue: __props.options.text_delivery_and_payment_ru,
        "onUpdate:modelValue": ($event) => __props.options.text_delivery_and_payment_ru = $event,
        init: unref(tiny).settings
      }, null, _parent));
      _push(`</div></div><div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-5"><div class="block">`);
      _push(ssrRenderComponent(_sfc_main$3, {
        value: _ctx.$t("options.text_return_and_exchange_ua")
      }, null, _parent));
      _push(ssrRenderComponent(unref(Editor), {
        "api-key": unref(tiny).api,
        modelValue: __props.options.text_return_and_exchange_ua,
        "onUpdate:modelValue": ($event) => __props.options.text_return_and_exchange_ua = $event,
        init: unref(tiny).settings
      }, null, _parent));
      _push(`</div><div class="block">`);
      _push(ssrRenderComponent(_sfc_main$3, {
        value: _ctx.$t("options.text_return_and_exchange_ru")
      }, null, _parent));
      _push(ssrRenderComponent(unref(Editor), {
        "api-key": unref(tiny).api,
        modelValue: __props.options.text_return_and_exchange_ru,
        "onUpdate:modelValue": ($event) => __props.options.text_return_and_exchange_ru = $event,
        init: unref(tiny).settings
      }, null, _parent));
      _push(`</div></div><div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-5"><div class="block">`);
      _push(ssrRenderComponent(_sfc_main$3, {
        value: _ctx.$t("options.text_home_page_ua")
      }, null, _parent));
      _push(ssrRenderComponent(unref(Editor), {
        "api-key": unref(tiny).api,
        modelValue: __props.options.text_home_page_ua,
        "onUpdate:modelValue": ($event) => __props.options.text_home_page_ua = $event,
        init: unref(tiny).settings
      }, null, _parent));
      _push(`</div><div class="block">`);
      _push(ssrRenderComponent(_sfc_main$3, {
        value: _ctx.$t("options.text_home_page_ru")
      }, null, _parent));
      _push(ssrRenderComponent(unref(Editor), {
        "api-key": unref(tiny).api,
        modelValue: __props.options.text_home_page_ru,
        "onUpdate:modelValue": ($event) => __props.options.text_home_page_ru = $event,
        init: unref(tiny).settings
      }, null, _parent));
      _push(`</div></div>`);
      _push(ssrRenderComponent(_sfc_main$6, { type: "submit" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(_ctx.$t("save"))}`);
          } else {
            return [
              createTextVNode(toDisplayString(_ctx.$t("save")), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</form><!--]-->`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Admin/Options/Main/Form.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
