import { mergeProps, withCtx, createTextVNode, unref, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrGetDirectiveProps } from "vue/server-renderer";
import _sfc_main$1 from "./Label.4ae45cc4.mjs";
import _sfc_main$2 from "./Input.aac4ec2d.mjs";
import { _ as _sfc_main$3 } from "./InputError.f356d54a.mjs";
import _sfc_main$5 from "./Button.ec6da28a.mjs";
import _sfc_main$4 from "./Textarea.74554057.mjs";
import { maska } from "maska";
const _sfc_main = {
  __name: "Form",
  __ssrInlineRender: true,
  props: ["item", "errors"],
  emits: ["submitForm"],
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<form${ssrRenderAttrs(mergeProps({ class: "grid grid-cols-1 gap-4" }, _attrs))}><div class="block">`);
      _push(ssrRenderComponent(_sfc_main$1, { required: true }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`\u0406\u043C\u02BC\u044F`);
          } else {
            return [
              createTextVNode("\u0406\u043C\u02BC\u044F")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_sfc_main$2, {
        type: "text",
        modelValue: __props.item.name,
        "onUpdate:modelValue": ($event) => __props.item.name = $event,
        placeholder: "\u0412\u0430\u0448\u0435 \u0456\u043C\u02BC\u044F"
      }, null, _parent));
      if (__props.errors.name) {
        _push(`<!--[-->`);
        ssrRenderList(__props.errors.name, (error) => {
          _push(ssrRenderComponent(_sfc_main$3, { message: error }, null, _parent));
        });
        _push(`<!--]-->`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div><div class="block">`);
      _push(ssrRenderComponent(_sfc_main$1, { required: true }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`\u041D\u043E\u043C\u0435\u0440 \u0442\u0435\u043B\u0435\u0444\u043E\u043D\u0443`);
          } else {
            return [
              createTextVNode("\u041D\u043E\u043C\u0435\u0440 \u0442\u0435\u043B\u0435\u0444\u043E\u043D\u0443")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_sfc_main$2, mergeProps({
        type: "tel",
        modelValue: __props.item.phone,
        "onUpdate:modelValue": ($event) => __props.item.phone = $event,
        placeholder: "+38 (0"
      }, ssrGetDirectiveProps(_ctx, unref(maska), "+38 (0##) ###-##-##")), null, _parent));
      if (__props.errors.phone) {
        _push(`<!--[-->`);
        ssrRenderList(__props.errors.phone, (error) => {
          _push(ssrRenderComponent(_sfc_main$3, { message: error }, null, _parent));
        });
        _push(`<!--]-->`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div><div class="block">`);
      _push(ssrRenderComponent(_sfc_main$1, { required: true }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`ID \u0437\u0430\u043C\u043E\u0432\u043B\u0435\u043D\u043D\u044F`);
          } else {
            return [
              createTextVNode("ID \u0437\u0430\u043C\u043E\u0432\u043B\u0435\u043D\u043D\u044F")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_sfc_main$2, {
        type: "text",
        modelValue: __props.item.order_id,
        "onUpdate:modelValue": ($event) => __props.item.order_id = $event
      }, null, _parent));
      if (__props.errors.order_id) {
        _push(`<!--[-->`);
        ssrRenderList(__props.errors.order_id, (error) => {
          _push(ssrRenderComponent(_sfc_main$3, { message: error }, null, _parent));
        });
        _push(`<!--]-->`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div><div class="block">`);
      _push(ssrRenderComponent(_sfc_main$1, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`\u041A\u043E\u043C\u0435\u043D\u0442\u0430\u0440`);
          } else {
            return [
              createTextVNode("\u041A\u043E\u043C\u0435\u043D\u0442\u0430\u0440")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_sfc_main$4, {
        rows: "4",
        modelValue: __props.item.comment,
        "onUpdate:modelValue": ($event) => __props.item.comment = $event
      }, null, _parent));
      _push(`</div><div class="text-center">`);
      _push(ssrRenderComponent(_sfc_main$5, { type: "submit" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`\u0412\u0456\u0434\u043F\u0440\u0430\u0432\u0438\u0442\u0438`);
          } else {
            return [
              createTextVNode("\u0412\u0456\u0434\u043F\u0440\u0430\u0432\u0438\u0442\u0438")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></form>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Public/Support/Form.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
