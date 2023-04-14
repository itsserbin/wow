import { computed, mergeProps, withCtx, unref, createTextVNode, toDisplayString, createVNode, useSSRContext } from "vue";
import { ssrRenderComponent, ssrInterpolate } from "vue/server-renderer";
import { _ as _sfc_main$1 } from "./Modal-8c93b79c.mjs";
import _sfc_main$2 from "./Form-3d9a0f2b.mjs";
import "./Images-189fe58b.mjs";
import "./ImageCard-83355df7.mjs";
import "./XCircle-df3891c5.mjs";
import "swiper/vue";
import "swiper";
import "./ImagesSelectModal-438b3602.mjs";
import "./UploadImagesModal-a0208fb2.mjs";
import "./Button-6b2e52a5.mjs";
import "./Label-229c476a.mjs";
import "./Textarea-1805d9a6.mjs";
import "./Input-4be85f13.mjs";
import "./Select-b70673dc.mjs";
import "./LangTabs-3c63a9c9.mjs";
import "./CharacteristicsRepository-7c4205ad.mjs";
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
