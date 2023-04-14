import { mergeProps, useSSRContext } from "vue";
import { ssrRenderAttrs } from "vue/server-renderer";
const _sfc_main = {
  __name: "ScrollToTop",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<button${ssrRenderAttrs(mergeProps({
        id: "scrollBtn",
        class: "cursor-pointer items-center z-10 bg-secondary hover:bg-button rounded-[50%] h-[50px] justify-center left-[2%] bottom-[5%] fixed w-[50px] transition-all duration-500"
      }, _attrs))}><svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path fill-rule="evenodd" clip-rule="evenodd" d="M17.5303 15.0303C17.2374 15.3232 16.7626 15.3232 16.4697 15.0303L12 10.5607L7.53033 15.0303C7.23744 15.3232 6.76256 15.3232 6.46967 15.0303C6.17678 14.7374 6.17678 14.2626 6.46967 13.9697L11.4697 8.96967C11.6103 8.82902 11.8011 8.75 12 8.75C12.1989 8.75 12.3897 8.82902 12.5303 8.96967L17.5303 13.9697C17.8232 14.2626 17.8232 14.7374 17.5303 15.0303Z" fill="#363853"></path></g></svg></button>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Public/Components/ScrollToTop.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
