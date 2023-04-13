import { ssrRenderAttrs, ssrRenderClass, ssrRenderComponent, ssrRenderSlot, ssrInterpolate } from "vue/server-renderer";
import Loader from "./Loader.43a0c8e2.mjs";
import { useSSRContext } from "vue";
import "./_plugin-vue_export-helper.43be4956.mjs";
const _sfc_main = {
  __name: "Modal",
  __ssrInlineRender: true,
  props: [
    "cancelButtonText",
    "declineButtonText",
    "submitButtonText",
    "size",
    "isLoading"
  ],
  emits: ["closeModal", "submitForm", "clickCancel", "declineForm"],
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(_attrs)}><div class="fixed top-0 right-0 left-0 w-full md:inset-0 h-full justify-center items-center flex backdrop-blur-sm z-[100]"><div class="${ssrRenderClass([{
        "max-w-md": __props.size === "small",
        "max-w-lg": __props.size === "medium",
        "max-w-4xl": __props.size === "large",
        "max-w-7xl": __props.size === "extralarge"
      }, "p-4 mb-20 w-full h-full md:h-full mx-auto top-10 z-50 relative overflow-scroll modal-scroll animate__animated animate__fadeIn"])}"><div class="bg-white rounded-lg shadow">`);
      if (__props.isLoading) {
        _push(ssrRenderComponent(Loader, null, null, _parent));
      } else {
        _push(`<!---->`);
      }
      if (!__props.isLoading) {
        _push(`<div><div class="flex justify-between items-start p-4 rounded-t border-b">`);
        if (_ctx.$slots.title) {
          _push(`<h3 class="text-xl font-semibold text-gray-900">`);
          ssrRenderSlot(_ctx.$slots, "title", {}, null, _push, _parent);
          _push(`</h3>`);
        } else {
          _push(`<!---->`);
        }
        _push(`<button type="button" class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center" data-modal-toggle="defaultModal"><svg aria-hidden="true" class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg><span class="sr-only">Close modal</span></button></div>`);
        if (_ctx.$slots.content) {
          _push(`<div class="p-6 space-y-6"><div class="text-base leading-relaxed text-gray-500">`);
          ssrRenderSlot(_ctx.$slots, "content", {}, null, _push, _parent);
          _push(`</div></div>`);
        } else {
          _push(`<!---->`);
        }
        if (__props.cancelButtonText || __props.submitButtonText) {
          _push(`<div class="grid gap-4 p-6 rounded-b border-t border-gray-200">`);
          if (__props.submitButtonText) {
            _push(`<button type="button" class="mx-auto w-48 text-white bg-red-600 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">${ssrInterpolate(__props.submitButtonText)}</button>`);
          } else {
            _push(`<!---->`);
          }
          if (__props.cancelButtonText) {
            _push(`<button type="button" class="mx-auto w-48 text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10">${ssrInterpolate(__props.cancelButtonText)}</button>`);
          } else {
            _push(`<!---->`);
          }
          _push(`</div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div></div><div class="bg-gray-900 bg-opacity-50 fixed inset-0 z-30"></div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Public/Components/Modal.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
