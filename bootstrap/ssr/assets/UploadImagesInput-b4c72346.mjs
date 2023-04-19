import { ref, withCtx, createTextVNode, toDisplayString, useSSRContext } from "vue";
import { ssrRenderComponent, ssrInterpolate } from "vue/server-renderer";
import { L as Loader } from "./Loader-f9d3bebc.mjs";
import { _ as _sfc_main$1 } from "./Label-229c476a.mjs";
const _sfc_main = {
  __name: "UploadImagesInput",
  __ssrInlineRender: true,
  props: ["label"],
  emits: [
    "onUpload",
    "onDestroyImage"
  ],
  setup(__props, { emit: emits }) {
    const isLoading = ref(false);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[-->`);
      if (isLoading.value) {
        _push(ssrRenderComponent(Loader, null, null, _parent));
      } else {
        _push(`<!---->`);
      }
      if (!isLoading.value) {
        _push(`<div class="w-full">`);
        if (__props.label) {
          _push(ssrRenderComponent(_sfc_main$1, null, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`${ssrInterpolate(__props.label)}`);
              } else {
                return [
                  createTextVNode(toDisplayString(__props.label), 1)
                ];
              }
            }),
            _: 1
          }, _parent));
        } else {
          _push(`<!---->`);
        }
        _push(`<input class="block w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 cursor-pointer dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400" type="file" multiple></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<!--]-->`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/Form/UploadImagesInput.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as _
};
