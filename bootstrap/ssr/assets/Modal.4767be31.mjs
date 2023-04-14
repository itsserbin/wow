import { computed, mergeProps, withCtx, unref, createTextVNode, toDisplayString, createVNode, useSSRContext } from "vue";
import { ssrRenderComponent, ssrInterpolate } from "vue/server-renderer";
import { _ as _sfc_main$2 } from "./Form.915feaac.mjs";
import { k as _sfc_main$1 } from "../app2.mjs";
import "./ImagesSelectModal.c7cfb2ce.mjs";
import "./UploadImagesModal.55fc186b.mjs";
import "./InputError.f356d54a.mjs";
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
  props: [
    "item",
    "canDestroy",
    "errors"
  ],
  emits: [
    "closeModal",
    "submitForm",
    "declineForm"
  ],
  setup(__props, { emit: emits }) {
    const props = __props;
    const formHeading = computed(() => {
      let title = null;
      if (props.item.title.ua) {
        title = props.item.title.ua;
      } else if (props.item.title.ru) {
        title = props.item.title.ru.trim();
      }
      return props.item.id && title ? `${props.item.id} / ${title}` : null;
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(_sfc_main$1, mergeProps({
        onCloseModal: ($event) => _ctx.$emit("closeModal"),
        "decline-button": __props.canDestroy,
        onDeclineForm: ($event) => _ctx.$emit("declineForm", __props.item.id),
        onSubmitForm: ($event) => _ctx.$emit("submitForm"),
        onClickCancel: ($event) => _ctx.$emit("closeModal"),
        size: "extralarge"
      }, _attrs), {
        title: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(unref(formHeading))}`);
          } else {
            return [
              createTextVNode(toDisplayString(unref(formHeading)), 1)
            ];
          }
        }),
        content: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_sfc_main$2, {
              item: __props.item,
              errors: __props.errors
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_sfc_main$2, {
                item: __props.item,
                errors: __props.errors
              }, null, 8, ["item", "errors"])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Admin/Content/Categories/Modal.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
