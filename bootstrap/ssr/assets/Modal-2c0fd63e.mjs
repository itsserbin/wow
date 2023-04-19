import { computed, mergeProps, withCtx, unref, createTextVNode, toDisplayString, createVNode, useSSRContext } from "vue";
import { ssrRenderComponent, ssrInterpolate } from "vue/server-renderer";
import { _ as _sfc_main$1 } from "./Modal-8c93b79c.mjs";
import _sfc_main$2 from "./Form-bebbb002.mjs";
import "./Images-02fe4913.mjs";
import "./ImageCard-96741a4a.mjs";
import "./XCircle-6a269edb.mjs";
import "swiper/vue";
import "swiper";
import "./ImagesSelectModal-eeb13b5f.mjs";
import "./Paginate-33c38e45.mjs";
import "./Button-6b2e52a5.mjs";
import "./Loader-f9d3bebc.mjs";
import "./_plugin-vue_export-helper-cc2b3d55.mjs";
import "./UploadImagesModal-44f42df1.mjs";
import "./UploadImagesInput-b4c72346.mjs";
import "./Label-229c476a.mjs";
import "./Textarea-1805d9a6.mjs";
import "./Input-4be85f13.mjs";
import "./Select-b70673dc.mjs";
import "./LangTabs-3c63a9c9.mjs";
import "./CharacteristicsRepository-7c4205ad.mjs";
import "./Multiselect-c4e07430.mjs";
import "@tinymce/tinymce-vue";
const _sfc_main = {
  __name: "Modal",
  __ssrInlineRender: true,
  props: [
    "item",
    "canDestroy"
  ],
  emits: [
    "closeModal",
    "submitForm",
    "declineForm",
    "setProductImages",
    "destroyImage"
  ],
  setup(__props, { emit: emits }) {
    const props = __props;
    const formHeading = computed(() => {
      let title = null;
      if (props.item.h1.ua) {
        title = props.item.h1.ua;
      } else if (props.item.h1.ru) {
        title = props.item.h1.ru.trim();
      }
      return props.item.id && title ? `${props.item.id} / ${title}` : null;
    });
    const setProductImages = (images) => {
      emits("setProductImages", images);
    };
    const destroyImage = (image) => {
      emits("destroyImage", image);
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(_sfc_main$1, mergeProps({
        onCloseModal: ($event) => _ctx.$emit("closeModal"),
        "decline-button": __props.canDestroy,
        onDeclineForm: ($event) => _ctx.$emit("declineForm", _ctx.product.id),
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
              product: __props.item,
              onSetProductImages: setProductImages,
              onDestroyImage: destroyImage
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_sfc_main$2, {
                product: __props.item,
                onSetProductImages: setProductImages,
                onDestroyImage: destroyImage
              }, null, 8, ["product"])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Admin/Content/Products/Modal.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
