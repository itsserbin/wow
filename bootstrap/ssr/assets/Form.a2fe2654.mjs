import { inject, ref, mergeProps, withCtx, createTextVNode, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList } from "vue/server-renderer";
import { g as _sfc_main$1, _ as _sfc_main$2, a as _sfc_main$3, b as _sfc_main$4 } from "../app2.mjs";
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
      _push(ssrRenderComponent(_sfc_main$2, { value: "\u041D\u0430\u0437\u0432\u0430" }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$3, {
        modelValue: __props.item.title[state.value.activeLang],
        "onUpdate:modelValue": ($event) => __props.item.title[state.value.activeLang] = $event,
        type: "text",
        placeholder: "\u0412\u043A\u0430\u0436\u0456\u0442\u044C \u043D\u0430\u0437\u0432\u0443 \u0445\u0430\u0440\u0430\u043A\u0442\u0435\u0440\u0438\u0441\u0442\u0438\u043A\u0438"
      }, null, _parent));
      _push(`</div><div class="block">`);
      if (__props.item.values.length) {
        _push(ssrRenderComponent(_sfc_main$2, { value: "\u041E\u043F\u0446\u0456\u0457" }, null, _parent));
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
          placeholder: "\u0412\u043A\u0430\u0436\u0456\u0442\u044C \u0437\u043D\u0430\u0447\u0435\u043D\u043D\u044F \u0445\u0430\u0440\u0430\u043A\u0442\u0435\u0440\u0438\u0441\u0442\u0438\u043A\u0438"
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
            _push2(`\u0414\u043E\u0434\u0430\u0442\u0438 \u043E\u043F\u0446\u0456\u044E`);
          } else {
            return [
              createTextVNode("\u0414\u043E\u0434\u0430\u0442\u0438 \u043E\u043F\u0446\u0456\u044E")
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
