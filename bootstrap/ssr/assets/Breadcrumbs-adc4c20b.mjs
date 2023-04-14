import { ssrRenderAttrs, ssrRenderList, ssrRenderClass, ssrRenderAttr, ssrInterpolate } from "vue/server-renderer";
import { useSSRContext } from "vue";
const _sfc_main = {
  __name: "Breadcrumbs",
  __ssrInlineRender: true,
  props: ["breadcrumbs"],
  setup(__props) {
    const props = __props;
    const isLastBreadcrumb = (index) => index === props.breadcrumbs.length - 1;
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(_attrs)}><ol class="inline-flex items-center overflow-x-scroll whitespace-nowrap w-full breadcrumbs font-subheading text-sm"><!--[-->`);
      ssrRenderList(__props.breadcrumbs, (breadcrumb, index) => {
        _push(`<li class="${ssrRenderClass({ "!ml-0": index === 0 })}">`);
        if (breadcrumb.url && !isLastBreadcrumb(index)) {
          _push(`<a${ssrRenderAttr("href", breadcrumb.url)} class="inline-flex items-center text-gray-700 hover:text-gray-900">${ssrInterpolate(breadcrumb.title)} <svg class="w-6 h-6 text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"></path></svg></a>`);
        } else {
          _push(`<div class="flex items-center"><span class="text-gray-500">${ssrInterpolate(breadcrumb.title)}</span></div>`);
        }
        _push(`</li>`);
      });
      _push(`<!--]--></ol><hr class="mb-5"></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Public/Components/Breadcrumbs.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
