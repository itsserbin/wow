import { mergeProps, withCtx, createTextVNode, unref, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrGetDirectiveProps } from "vue/server-renderer";
import _sfc_main$1 from "./Label-45b40ea1.mjs";
import _sfc_main$2 from "./Input-4d6b8e1d.mjs";
import { _ as _sfc_main$3 } from "./InputError-71f0cb4c.mjs";
import _sfc_main$5 from "./Button-e6d9c4d7.mjs";
import _sfc_main$4 from "./Textarea-411bf5c9.mjs";
import { U } from "./maska-e9315c75.mjs";
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
            _push2(`Імʼя`);
          } else {
            return [
              createTextVNode("Імʼя")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_sfc_main$2, {
        type: "text",
        modelValue: __props.item.name,
        "onUpdate:modelValue": ($event) => __props.item.name = $event,
        placeholder: "Ваше імʼя"
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
            _push2(`Номер телефону`);
          } else {
            return [
              createTextVNode("Номер телефону")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_sfc_main$2, mergeProps({
        type: "tel",
        modelValue: __props.item.phone,
        "onUpdate:modelValue": ($event) => __props.item.phone = $event,
        placeholder: "+38 (0",
        "data-maska": "+38 (0##) ###-##-##"
      }, ssrGetDirectiveProps(_ctx, unref(U))), null, _parent));
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
            _push2(`ID замовлення`);
          } else {
            return [
              createTextVNode("ID замовлення")
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
            _push2(`Коментар`);
          } else {
            return [
              createTextVNode("Коментар")
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
            _push2(`Відправити`);
          } else {
            return [
              createTextVNode("Відправити")
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
