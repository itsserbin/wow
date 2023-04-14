import { mergeProps, useSSRContext, unref, withCtx, openBlock, createBlock, createCommentVNode, createVNode, toDisplayString } from "vue";
import { ssrRenderAttrs, ssrRenderSlot, ssrRenderComponent, ssrInterpolate, ssrRenderClass } from "vue/server-renderer";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-cc2b3d55.mjs";
import { Link } from "@inertiajs/inertia-vue3";
const _sfc_main$1 = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<aside${ssrRenderAttrs(mergeProps({ class: "w-full" }, _attrs))}><div class="overflow-y-auto py-4 px-3 bg-gray-50 rounded dark:bg-gray-800"><ul class="space-y-2">`);
  ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
  _push(`</ul></div></aside>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/Sidebar/Sidebar.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const Sidebar = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender]]);
const _sfc_main = {
  __name: "SidebarItem",
  __ssrInlineRender: true,
  props: ["item", "active"],
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<li${ssrRenderAttrs(_attrs)}>`);
      if (__props.item) {
        _push(ssrRenderComponent(unref(Link), {
          href: __props.item.href ? __props.item.href : "javascript:",
          class: [{ "bg-gray-100 dark:bg-gray-700": __props.active }, "flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"]
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              if (__props.item.icon) {
                _push2(`<div${_scopeId}>${__props.item.icon}</div>`);
              } else {
                _push2(`<!---->`);
              }
              _push2(`<span class="ml-3"${_scopeId}>${ssrInterpolate(__props.item.title)}</span>`);
            } else {
              return [
                __props.item.icon ? (openBlock(), createBlock("div", {
                  key: 0,
                  innerHTML: __props.item.icon
                }, null, 8, ["innerHTML"])) : createCommentVNode("", true),
                createVNode("span", { class: "ml-3" }, toDisplayString(__props.item.title), 1)
              ];
            }
          }),
          _: 1
        }, _parent));
      } else {
        _push(`<a href="javascript:" class="${ssrRenderClass([{ "bg-gray-100 dark:bg-gray-700": __props.active }, "flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"])}">`);
        ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
        _push(`</a>`);
      }
      _push(`</li>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/Sidebar/SidebarItem.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  Sidebar as S,
  _sfc_main as _
};
