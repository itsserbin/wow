import { ref, onMounted, mergeProps, unref, withCtx, createVNode, openBlock, createBlock, Fragment, renderList, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr, ssrRenderList } from "vue/server-renderer";
import { Zoom, Lazy, Thumbs, FreeMode, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/vue";
const ImagesSlider_vue_vue_type_style_index_0_lang = "";
const _sfc_main = {
  __name: "ImagesSlider",
  __ssrInlineRender: true,
  props: ["images", "preview"],
  setup(__props) {
    const props = __props;
    const thumbsSwiper = ref(null);
    const setThumbsSwiper = (swiper) => {
      thumbsSwiper.value = swiper;
    };
    const modules = [Zoom, Lazy, Thumbs, FreeMode, Navigation];
    const state = ref({
      imagesLarge: [],
      images: [],
      preview: {},
      index: null,
      currentId: null
    });
    onMounted(() => {
      state.value.preview = {
        "webp_src": route("images", props.preview.webp_src),
        "webp_thumbnail": route("images.55", props.preview.webp_src),
        "src": route("images", props.preview.src),
        "thumbnail": route("images.55", props.preview.src)
      };
      const images = [...props.images].map((item) => ({
        "webp_src": route("images", item.webp_src),
        "webp_thumbnail": route("images.55", item.webp_src),
        "src": route("images", item.src),
        "thumbnail": route("images.55", item.src)
      }));
      state.value.images.push(...images);
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "block w-full" }, _attrs))}>`);
      _push(ssrRenderComponent(unref(Swiper), {
        "slides-per-view": 1,
        "space-between": 0,
        modules,
        navigation: true,
        thumbs: { swiper: thumbsSwiper.value },
        zoom: true,
        class: "swiper-product-slider",
        lazy: true,
        "auto-heigth": true,
        passiveListeners: false
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(SwiperSlide), null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="swiper-zoom-container"${_scopeId2}><picture${_scopeId2}><source${ssrRenderAttr("srcset", state.value.preview.webp_src)} type="image/webp"${_scopeId2}><img${ssrRenderAttr("src", state.value.preview.src)} class="h-full w-full"${_scopeId2}></picture></div>`);
                } else {
                  return [
                    createVNode("div", { class: "swiper-zoom-container" }, [
                      createVNode("picture", null, [
                        createVNode("source", {
                          srcset: state.value.preview.webp_src,
                          type: "image/webp"
                        }, null, 8, ["srcset"]),
                        createVNode("img", {
                          src: state.value.preview.src,
                          class: "h-full w-full"
                        }, null, 8, ["src"])
                      ])
                    ])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`<!--[-->`);
            ssrRenderList(state.value.images, (image, i) => {
              _push2(ssrRenderComponent(unref(SwiperSlide), null, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<div class="swiper-zoom-container"${_scopeId2}><img${ssrRenderAttr("data-srcset", image.webp_src)}${ssrRenderAttr("data-src", image.src)} class="w-full h-full swiper-lazy"${_scopeId2}><div class="swiper-lazy-preloader swiper-lazy-preloader"${_scopeId2}></div></div>`);
                  } else {
                    return [
                      createVNode("div", { class: "swiper-zoom-container" }, [
                        (openBlock(), createBlock("img", {
                          "data-srcset": image.webp_src,
                          "data-src": image.src,
                          class: "w-full h-full swiper-lazy",
                          key: i,
                          onClick: ($event) => state.value.index = i
                        }, null, 8, ["data-srcset", "data-src", "onClick"])),
                        createVNode("div", { class: "swiper-lazy-preloader swiper-lazy-preloader" })
                      ])
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
            });
            _push2(`<!--]-->`);
          } else {
            return [
              createVNode(unref(SwiperSlide), null, {
                default: withCtx(() => [
                  createVNode("div", { class: "swiper-zoom-container" }, [
                    createVNode("picture", null, [
                      createVNode("source", {
                        srcset: state.value.preview.webp_src,
                        type: "image/webp"
                      }, null, 8, ["srcset"]),
                      createVNode("img", {
                        src: state.value.preview.src,
                        class: "h-full w-full"
                      }, null, 8, ["src"])
                    ])
                  ])
                ]),
                _: 1
              }),
              (openBlock(true), createBlock(Fragment, null, renderList(state.value.images, (image, i) => {
                return openBlock(), createBlock(unref(SwiperSlide), null, {
                  default: withCtx(() => [
                    createVNode("div", { class: "swiper-zoom-container" }, [
                      (openBlock(), createBlock("img", {
                        "data-srcset": image.webp_src,
                        "data-src": image.src,
                        class: "w-full h-full swiper-lazy",
                        key: i,
                        onClick: ($event) => state.value.index = i
                      }, null, 8, ["data-srcset", "data-src", "onClick"])),
                      createVNode("div", { class: "swiper-lazy-preloader swiper-lazy-preloader" })
                    ])
                  ]),
                  _: 2
                }, 1024);
              }), 256))
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(unref(Swiper), {
        class: "swiper-product-thumbs",
        onSwiper: setThumbsSwiper,
        "slides-per-view": 8,
        freeMode: true,
        watchSlidesProgress: true,
        "space-between": 0,
        modules,
        lazy: true
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(SwiperSlide), null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<picture${_scopeId2}><source${ssrRenderAttr("srcset", state.value.preview.webp_src)} type="image/webp"${_scopeId2}><img${ssrRenderAttr("src", state.value.preview.src)} class="h-full w-full"${_scopeId2}></picture>`);
                } else {
                  return [
                    createVNode("picture", null, [
                      createVNode("source", {
                        srcset: state.value.preview.webp_src,
                        type: "image/webp"
                      }, null, 8, ["srcset"]),
                      createVNode("img", {
                        src: state.value.preview.src,
                        class: "h-full w-full"
                      }, null, 8, ["src"])
                    ])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`<!--[-->`);
            ssrRenderList(state.value.images, (image, i) => {
              _push2(ssrRenderComponent(unref(SwiperSlide), null, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<picture class="w-full"${_scopeId2}><source${ssrRenderAttr("srcset", image.webp_thumbnail)} type="image/webp"${_scopeId2}><img${ssrRenderAttr("data-src", image.thumbnail)} class="w-full h-full image"${_scopeId2}></picture>`);
                  } else {
                    return [
                      createVNode("picture", { class: "w-full" }, [
                        createVNode("source", {
                          srcset: image.webp_thumbnail,
                          type: "image/webp"
                        }, null, 8, ["srcset"]),
                        (openBlock(), createBlock("img", {
                          "data-src": image.thumbnail,
                          class: "w-full h-full image",
                          key: i,
                          onClick: ($event) => state.value.index = i
                        }, null, 8, ["data-src", "onClick"]))
                      ])
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
            });
            _push2(`<!--]-->`);
          } else {
            return [
              createVNode(unref(SwiperSlide), null, {
                default: withCtx(() => [
                  createVNode("picture", null, [
                    createVNode("source", {
                      srcset: state.value.preview.webp_src,
                      type: "image/webp"
                    }, null, 8, ["srcset"]),
                    createVNode("img", {
                      src: state.value.preview.src,
                      class: "h-full w-full"
                    }, null, 8, ["src"])
                  ])
                ]),
                _: 1
              }),
              (openBlock(true), createBlock(Fragment, null, renderList(state.value.images, (image, i) => {
                return openBlock(), createBlock(unref(SwiperSlide), null, {
                  default: withCtx(() => [
                    createVNode("picture", { class: "w-full" }, [
                      createVNode("source", {
                        srcset: image.webp_thumbnail,
                        type: "image/webp"
                      }, null, 8, ["srcset"]),
                      (openBlock(), createBlock("img", {
                        "data-src": image.thumbnail,
                        class: "w-full h-full image",
                        key: i,
                        onClick: ($event) => state.value.index = i
                      }, null, 8, ["data-src", "onClick"]))
                    ])
                  ]),
                  _: 2
                }, 1024);
              }), 256))
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Public/Product/ImagesSlider.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
