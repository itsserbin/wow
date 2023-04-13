import { mergeProps, withCtx, createTextVNode, unref, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrGetDirectiveProps } from "vue/server-renderer";
import _sfc_main$1 from "./Label.4ae45cc4.mjs";
import _sfc_main$2 from "./Input.aac4ec2d.mjs";
import { _ as _sfc_main$3 } from "./InputError.f356d54a.mjs";
import { maska } from "maska";
const _sfc_main = {
  __name: "PersonalData",
  __ssrInlineRender: true,
  props: ["order", "errors"],
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "bg-[#fff] border-[0.5px] rounded-[15px] shadow-lg box-border mb-[1.5rem] pt-[1.5rem] pr-[1rem] pb-[1.25rem] pl-[1rem]" }, _attrs))}><div class="text-2xl font-heading font-[400]"><h3>\u041F\u0435\u0440\u0441\u043E\u043D\u0430\u043B\u044C\u043D\u0456 \u0434\u0430\u043D\u0456</h3></div><div class="grid gap-4"><div class="block">`);
      _push(ssrRenderComponent(_sfc_main$1, { required: true }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`\u0406\u043C\`\u044F`);
          } else {
            return [
              createTextVNode("\u0406\u043C`\u044F")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_sfc_main$2, {
        placeholder: "\u0412\u0432\u0435\u0434\u0456\u0442\u044C \u0432\u0430\u0448\u0435 \u0456\u043C'\u044F",
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
            _push2(`\u041F\u0440\u0456\u0437\u0432\u0438\u0449\u0435`);
          } else {
            return [
              createTextVNode("\u041F\u0440\u0456\u0437\u0432\u0438\u0449\u0435")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_sfc_main$2, {
        placeholder: "\u0412\u0432\u0435\u0434\u0456\u0442\u044C \u043F\u0440\u0456\u0437\u0432\u0438\u0449\u0435",
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
            _push2(`\u041F\u043E \u0431\u0430\u0442\u044C\u043A\u043E\u0432\u0456`);
          } else {
            return [
              createTextVNode("\u041F\u043E \u0431\u0430\u0442\u044C\u043A\u043E\u0432\u0456")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_sfc_main$2, {
        placeholder: "\u0412\u0432\u0435\u0434\u0456\u0442\u044C \u043F\u043E \u0431\u0430\u0442\u044C\u043A\u043E\u0432\u0456",
        type: "text",
        modelValue: __props.order.middle_name,
        "onUpdate:modelValue": ($event) => __props.order.middle_name = $event
      }, null, _parent));
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
        placeholder: "+38 (0",
        type: "tel",
        modelValue: __props.order.phone,
        "onUpdate:modelValue": ($event) => __props.order.phone = $event,
        ref: "phone"
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
