import { unref, withCtx, openBlock, createBlock, toDisplayString, createCommentVNode, renderSlot, useSSRContext } from "vue";
import { ssrRenderComponent, ssrInterpolate, ssrRenderAttr, ssrRenderSlot } from "vue/server-renderer";
import { Head } from "@inertiajs/inertia-vue3";
const _sfc_main = {
  __name: "Head",
  __ssrInlineRender: true,
  props: { title: String, description: String },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(Head), _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            if (__props.title) {
              _push2(`<title${_scopeId}>${ssrInterpolate(__props.title)}</title>`);
            } else {
              _push2(`<!---->`);
            }
            if (__props.description) {
              _push2(`<meta name="description"${ssrRenderAttr("content", __props.description)}${_scopeId}>`);
            } else {
              _push2(`<!---->`);
            }
            ssrRenderSlot(_ctx.$slots, "default", {}, null, _push2, _parent2, _scopeId);
          } else {
            return [
              __props.title ? (openBlock(), createBlock("title", { key: 0 }, toDisplayString(__props.title), 1)) : createCommentVNode("", true),
              __props.description ? (openBlock(), createBlock("meta", {
                key: 1,
                name: "description",
                content: __props.description
              }, null, 8, ["content"])) : createCommentVNode("", true),
              renderSlot(_ctx.$slots, "default")
            ];
          }
        }),
        _: 3
      }, _parent));
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Public/Components/Head.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
