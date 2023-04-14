import { mergeProps, useSSRContext } from "vue";
import { ssrRenderComponent } from "vue/server-renderer";
import _sfc_main$1 from "./Breadcrumbs-adc4c20b.mjs";
const _sfc_main = {
  __name: "Breadcrumbs",
  __ssrInlineRender: true,
  props: [
    "options",
    "parent",
    "parentUrl",
    "title",
    "currentUrl"
  ],
  setup(__props) {
    const props = __props;
    const items = [
      { title: props.options.brand, url: "/" },
      { title: props.parent, url: props.parentUrl },
      { title: props.title, url: props.currentUrl }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(_sfc_main$1, mergeProps({ breadcrumbs: items }, _attrs), null, _parent));
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Public/Product/Breadcrumbs.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
