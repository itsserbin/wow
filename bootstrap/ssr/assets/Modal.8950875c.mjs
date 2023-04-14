import { mergeProps, withCtx, createVNode, useSSRContext } from "vue";
import { ssrRenderComponent } from "vue/server-renderer";
import { k as _sfc_main$1 } from "../app2.mjs";
import _sfc_main$2 from "./Form.5bb465ab.mjs";
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
  __name: "Modal",
  __ssrInlineRender: true,
  props: ["item"],
  emits: ["closeModal", "submitItemForm"],
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(_sfc_main$1, mergeProps({
        onCloseModal: ($event) => _ctx.$emit("closeModal"),
        "submit-button-text": "\u0417\u0431\u0435\u0440\u0435\u0433\u0442\u0438",
        "cancel-button-text": "\u0412\u0456\u0434\u043C\u0456\u043D\u0438\u0442\u0438",
        onSubmitForm: ($event) => _ctx.$emit("submitItemForm"),
        onClickCancel: ($event) => _ctx.$emit("closeModal")
      }, _attrs), {
        content: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_sfc_main$2, { item: __props.item }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_sfc_main$2, { item: __props.item }, null, 8, ["item"])
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Admin/Crm/Orders/Items/Modal.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
