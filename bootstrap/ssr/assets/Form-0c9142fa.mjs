import { withCtx, createTextVNode, mergeProps, unref, useSSRContext } from "vue";
import { ssrRenderComponent, ssrGetDirectiveProps } from "vue/server-renderer";
import _sfc_main$1 from "./Label-45b40ea1.mjs";
import _sfc_main$2 from "./Input-4d6b8e1d.mjs";
import _sfc_main$3 from "./Button-e6d9c4d7.mjs";
import { U } from "./maska-e9315c75.mjs";
const _sfc_main = {
  __name: "Form",
  __ssrInlineRender: true,
  props: ["item"],
  emits: ["submitForm"],
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[--><div class="font-bold text-black text-center text-2xl font-heading mb-[15px]"> Перевірити статус замовлення </div><form class="grid grid-cols-1 gap-4"><div class="block">`);
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
      _push(`</div><div class="text-center">`);
      _push(ssrRenderComponent(_sfc_main$3, { type: "submit" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Перевірити`);
          } else {
            return [
              createTextVNode("Перевірити")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></form><!--]-->`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Public/Status/Form.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
