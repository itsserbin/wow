import { withCtx, createTextVNode, mergeProps, unref, useSSRContext } from "vue";
import { ssrRenderComponent, ssrGetDirectiveProps } from "vue/server-renderer";
import _sfc_main$1 from "./Label.4ae45cc4.mjs";
import _sfc_main$2 from "./Input.aac4ec2d.mjs";
import _sfc_main$3 from "./Button.ec6da28a.mjs";
import { maska } from "maska";
const _sfc_main = {
  __name: "Form",
  __ssrInlineRender: true,
  props: ["item"],
  emits: ["submitForm"],
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[--><div class="font-bold text-black text-center text-2xl font-heading mb-[15px]"> \u041F\u0435\u0440\u0435\u0432\u0456\u0440\u0438\u0442\u0438 \u0441\u0442\u0430\u0442\u0443\u0441 \u0437\u0430\u043C\u043E\u0432\u043B\u0435\u043D\u043D\u044F </div><form class="grid grid-cols-1 gap-4"><div class="block">`);
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
      _push(`</div><div class="text-center">`);
      _push(ssrRenderComponent(_sfc_main$3, { type: "submit" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`\u041F\u0435\u0440\u0435\u0432\u0456\u0440\u0438\u0442\u0438`);
          } else {
            return [
              createTextVNode("\u041F\u0435\u0440\u0435\u0432\u0456\u0440\u0438\u0442\u0438")
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
