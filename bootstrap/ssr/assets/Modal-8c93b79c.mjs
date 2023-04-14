import { ssrRenderClass, ssrRenderSlot, ssrInterpolate } from "vue/server-renderer";
import { useSSRContext } from "vue";
const Modal_vue_vue_type_style_index_0_lang = "";
const _sfc_main = {
  __name: "Modal",
  __ssrInlineRender: true,
  props: {
    cancelButton: {
      type: Boolean,
      default: true
    },
    declineButton: {
      type: Boolean,
      default: true
    },
    submitButton: {
      type: Boolean,
      default: true
    },
    cancelButtonText: {
      type: String,
      default: "Скасувати"
    },
    declineButtonText: {
      type: String,
      default: "Видалити"
    },
    submitButtonText: {
      type: String,
      default: "Зберегти"
    },
    size: {
      type: String,
      default: "medium"
    }
  },
  emits: ["closeModal", "submitForm", "clickCancel", "declineForm"],
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[--><div><div class="fixed top-0 right-0 left-0 z-50 w-full md:inset-0 h-full justify-center items-center flex overflow-scroll"><div class="${ssrRenderClass([{
        "max-w-md": __props.size === "small",
        "max-w-lg": __props.size === "medium",
        "max-w-4xl": __props.size === "large",
        "max-w-7xl": __props.size === "extralarge"
      }, "py-4 mb-20 w-full h-full md:h-full mx-auto top-10 z-50 relative overflow-scroll modal-scroll"])}"><div class="bg-white rounded-lg shadow dark:bg-gray-700"><div class="flex justify-between items-start p-4 rounded-t border-b dark:border-gray-600">`);
      if (_ctx.$slots.title) {
        _push(`<h3 class="text-xl font-semibold text-gray-900 dark:text-white">`);
        ssrRenderSlot(_ctx.$slots, "title", {}, null, _push, _parent);
        _push(`</h3>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<button type="button" class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-toggle="defaultModal"><svg aria-hidden="true" class="w-5 h-5 test_x" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg><span class="sr-only">Close modal</span></button></div>`);
      if (_ctx.$slots.content) {
        _push(`<div class="p-6 space-y-6"><div class="text-base leading-relaxed text-gray-500 dark:text-gray-400">`);
        ssrRenderSlot(_ctx.$slots, "content", {}, null, _push, _parent);
        _push(`</div></div>`);
      } else {
        _push(`<!---->`);
      }
      if (__props.cancelButton || __props.submitButton) {
        _push(`<div class="grid grid-cols-1 md:grid-cols-2 p-6 rounded-b border-t border-gray-200 dark:border-gray-600"><div class="grid grid-cols-2 gap-4 mb-10 md:mb-0">`);
        if (__props.submitButton) {
          _push(`<button type="button" class="col-span-2 md:col-span-1 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">${ssrInterpolate(__props.submitButtonText)}</button>`);
        } else {
          _push(`<!---->`);
        }
        if (__props.cancelButton) {
          _push(`<button type="button" class="col-span-2 md:col-span-1 text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600">${ssrInterpolate(__props.cancelButtonText)}</button>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div><div class="grid grid-cols-1 md:grid-cols-2 text-center"><div></div>`);
        if (__props.declineButton) {
          _push(`<button type="button" class="text-white bg-red-600 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center">${ssrInterpolate(__props.declineButtonText)}</button>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div></div></div><div class="bg-gray-900 bg-opacity-50 dark:bg-opacity-80 fixed inset-0 z-30"></div><!--]-->`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/Modal.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as _
};
