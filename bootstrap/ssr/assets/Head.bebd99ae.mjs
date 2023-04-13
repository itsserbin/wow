import { mergeProps, withCtx, openBlock, createBlock, createCommentVNode, useSSRContext } from "vue";
import { ssrRenderComponent, ssrRenderAttr } from "vue/server-renderer";
import _sfc_main$1 from "./Head.9b78d2ae.mjs";
import "@inertiajs/inertia-vue3";
const _sfc_main = {
  __name: "Head",
  __ssrInlineRender: true,
  props: ["category", "lang"],
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(_sfc_main$1, mergeProps({
        title: __props.category.meta_title[__props.lang],
        description: __props.category.meta_description[__props.lang]
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            if (__props.category.preview) {
              _push2(`<meta property="og:image"${ssrRenderAttr("content", _ctx.route("images", __props.category.preview.webp_src))}${_scopeId}>`);
            } else {
              _push2(`<!---->`);
            }
            if (__props.category.preview) {
              _push2(`<meta property="og:image:secure_url"${ssrRenderAttr("content", _ctx.route("images", __props.category.preview.webp_src))}${_scopeId}>`);
            } else {
              _push2(`<!---->`);
            }
            if (__props.category.preview) {
              _push2(`<meta property="og:image:type" content="image/webp"${_scopeId}>`);
            } else {
              _push2(`<!---->`);
            }
            if (__props.category.preview) {
              _push2(`<meta property="og:image:alt"${ssrRenderAttr("content", __props.category.title[__props.lang])}${_scopeId}>`);
            } else {
              _push2(`<!---->`);
            }
          } else {
            return [
              __props.category.preview ? (openBlock(), createBlock("meta", {
                key: 0,
                property: "og:image",
                content: _ctx.route("images", __props.category.preview.webp_src)
              }, null, 8, ["content"])) : createCommentVNode("", true),
              __props.category.preview ? (openBlock(), createBlock("meta", {
                key: 1,
                property: "og:image:secure_url",
                content: _ctx.route("images", __props.category.preview.webp_src)
              }, null, 8, ["content"])) : createCommentVNode("", true),
              __props.category.preview ? (openBlock(), createBlock("meta", {
                key: 2,
                property: "og:image:type",
                content: "image/webp"
              })) : createCommentVNode("", true),
              __props.category.preview ? (openBlock(), createBlock("meta", {
                key: 3,
                property: "og:image:alt",
                content: __props.category.title[__props.lang]
              }, null, 8, ["content"])) : createCommentVNode("", true)
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Public/Category/Head.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
