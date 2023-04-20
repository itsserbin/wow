import { computed, mergeProps, withCtx, unref, createTextVNode, toDisplayString, createVNode, useSSRContext } from "vue";
import { ssrRenderComponent, ssrInterpolate } from "vue/server-renderer";
import { _ as _sfc_main$2 } from "./Form-09ffca9a.mjs";
import { _ as _sfc_main$1 } from "./Modal-8c93b79c.mjs";
import "./ImagesSelectModal-eeb13b5f.mjs";
import "./Paginate-33c38e45.mjs";
import "./Button-6b2e52a5.mjs";
import "./Loader-f9d3bebc.mjs";
import "./_plugin-vue_export-helper-cc2b3d55.mjs";
import "./UploadImagesModal-44f42df1.mjs";
import "./UploadImagesInput-b4c72346.mjs";
import "./Label-229c476a.mjs";
import "./ImageCard-96741a4a.mjs";
import "./XCircle-6a269edb.mjs";
import "./InputError-71f0cb4c.mjs";
import "./Input-4be85f13.mjs";
import "./Textarea-1805d9a6.mjs";
import "./Select-b70673dc.mjs";
import "./LangTabs-3c63a9c9.mjs";
import "@tinymce/tinymce-vue";
const _sfc_main = {
  __name: "Modal",
  __ssrInlineRender: true,
  props: [
    "item",
    "canDestroy",
    "errors"
  ],
  emits: [
    "closeModal",
    "submitForm",
    "declineForm"
  ],
  setup(__props, { emit: emits }) {
    const props = __props;
    const formHeading = computed(() => {
      let title = null;
      if (props.item.title.ua) {
        title = props.item.title.ua;
      } else if (props.item.title.ru) {
        title = props.item.title.ru.trim();
      }
      return props.item.id && title ? `${props.item.id} / ${title}` : null;
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(_sfc_main$1, mergeProps({
        onCloseModal: ($event) => _ctx.$emit("closeModal"),
        "decline-button": __props.canDestroy,
        onDeclineForm: ($event) => _ctx.$emit("declineForm", __props.item.id),
        onSubmitForm: ($event) => _ctx.$emit("submitForm"),
        onClickCancel: ($event) => _ctx.$emit("closeModal"),
        size: "extralarge"
      }, _attrs), {
        title: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(unref(formHeading))}`);
          } else {
            return [
              createTextVNode(toDisplayString(unref(formHeading)), 1)
            ];
          }
        }),
        content: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_sfc_main$2, {
              item: __props.item,
              errors: __props.errors
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_sfc_main$2, {
                item: __props.item,
                errors: __props.errors
              }, null, 8, ["item", "errors"])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Admin/Content/Categories/Modal.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};