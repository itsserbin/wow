import { mergeProps, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderList, ssrInterpolate } from "vue/server-renderer";
const _sfc_main = {
  __name: "Characteristics",
  __ssrInlineRender: true,
  props: ["items"],
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "characteristics-table" }, _attrs))}><table><tbody><!--[-->`);
      ssrRenderList(__props.items, (value, key) => {
        _push(`<tr><td><p><strong>${ssrInterpolate(key)}</strong></p></td><td><!--[-->`);
        ssrRenderList(value, (val, i) => {
          _push(`<span>${ssrInterpolate(val)}`);
          if (i !== value.length - 1) {
            _push(`<span>, </span>`);
          } else {
            _push(`<!---->`);
          }
          _push(`</span>`);
        });
        _push(`<!--]--></td></tr>`);
      });
      _push(`<!--]--></tbody></table></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Public/Product/Characteristics.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
