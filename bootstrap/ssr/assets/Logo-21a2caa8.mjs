import { unref, mergeProps, withCtx, createVNode, useSSRContext } from "vue";
import { ssrRenderComponent, ssrRenderAttr } from "vue/server-renderer";
import { Link } from "@inertiajs/inertia-vue3";
const _sfc_main = {
  __name: "Logo",
  __ssrInlineRender: true,
  setup(__props) {
    const appName = "Laravel";
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(Link), mergeProps({
        href: _ctx.route("home")
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<picture${_scopeId}><source srcset="/storage/logo.webp" type="image/webp"${_scopeId}><img src="/storage/logo.jpeg"${ssrRenderAttr("alt", unref(appName))} width="55" height="55"${_scopeId}></picture>`);
          } else {
            return [
              createVNode("picture", null, [
                createVNode("source", {
                  srcset: "/storage/logo.webp",
                  type: "image/webp"
                }),
                createVNode("img", {
                  src: "/storage/logo.jpeg",
                  alt: unref(appName),
                  width: "55",
                  height: "55"
                }, null, 8, ["alt"])
              ])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Public/Components/Header/Logo.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
