import { mergeProps, withCtx, createTextVNode, unref, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrGetDirectiveProps } from "vue/server-renderer";
import _sfc_main$1 from "./Label-45b40ea1.mjs";
import _sfc_main$2 from "./Input-4d6b8e1d.mjs";
import { _ as _sfc_main$3 } from "./InputError-71f0cb4c.mjs";
import { U } from "./maska-e9315c75.mjs";
const _sfc_main = {
  __name: "PersonalData",
  __ssrInlineRender: true,
  props: ["order", "errors"],
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "bg-[#fff] border-[0.5px] rounded-[15px] shadow-lg box-border mb-[1.5rem] pt-[1.5rem] pr-[1rem] pb-[1.25rem] pl-[1rem]" }, _attrs))}><div class="text-2xl font-heading font-[400]"><h3>Персональні дані</h3></div><div class="grid gap-4"><div class="block">`);
      _push(ssrRenderComponent(_sfc_main$1, { required: true }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Ім\`я`);
          } else {
            return [
              createTextVNode("Ім`я")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_sfc_main$2, {
        placeholder: "Введіть ваше ім'я",
        type: "text",
        modelValue: __props.order.name,
        "onUpdate:modelValue": ($event) => __props.order.name = $event
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
            _push2(`Прізвище`);
          } else {
            return [
              createTextVNode("Прізвище")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_sfc_main$2, {
        placeholder: "Введіть прізвище",
        type: "text",
        modelValue: __props.order.last_name,
        "onUpdate:modelValue": ($event) => __props.order.last_name = $event
      }, null, _parent));
      if (__props.errors.last_name) {
        _push(`<!--[-->`);
        ssrRenderList(__props.errors.last_name, (error) => {
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
            _push2(`По батькові`);
          } else {
            return [
              createTextVNode("По батькові")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_sfc_main$2, {
        placeholder: "Введіть по батькові",
        type: "text",
        modelValue: __props.order.middle_name,
        "onUpdate:modelValue": ($event) => __props.order.middle_name = $event
      }, null, _parent));
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
        placeholder: "+38 (0",
        type: "tel",
        modelValue: __props.order.phone,
        "onUpdate:modelValue": ($event) => __props.order.phone = $event,
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
      _push(`</div></div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Public/Checkout/PersonalData.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
