import { unref, mergeProps, withCtx, createVNode, openBlock, createBlock, Fragment, renderList, useSSRContext } from "vue";
import { ssrRenderComponent, ssrRenderList } from "vue/server-renderer";
import { _ as _sfc_main$1 } from "./ImageCard-96741a4a.mjs";
import { Swiper, SwiperSlide } from "swiper/vue";
import { Navigation } from "swiper";
import "./XCircle-6a269edb.mjs";
const _sfc_main = {
  __name: "Images",
  __ssrInlineRender: true,
  props: ["images"],
  emits: ["destroyImage"],
  setup(__props, { emit: emits }) {
    const modules = [Navigation];
    const destroyImage = (image) => {
      emits("destroyImage", image);
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(Swiper), mergeProps({
        "slides-per-view": 8,
        "space-between": 20,
        modules,
        navigation: ""
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<!--[-->`);
            ssrRenderList(__props.images, (image) => {
              _push2(ssrRenderComponent(unref(SwiperSlide), null, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(_sfc_main$1, {
                      image,
                      id: image.id,
                      size: "350",
                      destroyIcon: true,
                      onDestroyImage: destroyImage
                    }, null, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(_sfc_main$1, {
                        image,
                        id: image.id,
                        size: "350",
                        destroyIcon: true,
                        onDestroyImage: destroyImage
                      }, null, 8, ["image", "id"])
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
            });
            _push2(`<!--]-->`);
          } else {
            return [
              (openBlock(true), createBlock(Fragment, null, renderList(__props.images, (image) => {
                return openBlock(), createBlock(unref(SwiperSlide), null, {
                  default: withCtx(() => [
                    createVNode(_sfc_main$1, {
                      image,
                      id: image.id,
                      size: "350",
                      destroyIcon: true,
                      onDestroyImage: destroyImage
                    }, null, 8, ["image", "id"])
                  ]),
                  _: 2
                }, 1024);
              }), 256))
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Admin/Content/Products/Images.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
