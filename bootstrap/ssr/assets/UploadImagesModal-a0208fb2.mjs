import { ref, resolveComponent, useSSRContext, mergeProps, withCtx, createTextVNode, createVNode } from "vue";
import { ssrRenderComponent, ssrInterpolate } from "vue/server-renderer";
const _sfc_main$1 = {
  __name: "UploadImagesInput",
  __ssrInlineRender: true,
  props: ["label"],
  emits: ["onUpload", "onDestroyImage"],
  setup(__props, { emit: emits }) {
    const isLoading = ref(false);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_loader_component = resolveComponent("loader-component");
      _push(`<!--[-->`);
      if (isLoading.value) {
        _push(ssrRenderComponent(_component_loader_component, null, null, _parent));
      } else {
        _push(`<!---->`);
      }
      if (!isLoading.value) {
        _push(`<div class="w-full">`);
        if (__props.label) {
          _push(`<label class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">${ssrInterpolate(__props.label)}</label>`);
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
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/Form/UploadImagesInput.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = {
  __name: "UploadImagesModal",
  __ssrInlineRender: true,
  emits: ["closeModal", "onUpload", "loadMoreImages"],
  setup(__props, { emit: emits }) {
    function onUploadFunction(data) {
      emits("onUpload", data);
    }
    return (_ctx, _push, _parent, _attrs) => {
      const _component_modal_component = resolveComponent("modal-component");
      _push(ssrRenderComponent(_component_modal_component, mergeProps({
        onCloseModal: ($event) => _ctx.$emit("closeModal"),
        "submit-button-text": "Зберегти",
        "cancel-button-text": "Скасувати",
        onSubmitForm: ($event) => _ctx.$emit("closeModal"),
        onClickCancel: ($event) => _ctx.$emit("closeModal"),
        size: "large",
        declineButton: false
      }, _attrs), {
        title: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Завантаження зображень `);
          } else {
            return [
              createTextVNode(" Завантаження зображень ")
            ];
          }
        }),
        content: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_sfc_main$1, { onOnUpload: onUploadFunction }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_sfc_main$1, { onOnUpload: onUploadFunction })
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/UploadImagesModal.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as _
};
