import { mergeProps, unref, withCtx, createVNode, openBlock, createBlock, Fragment, renderList, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrInterpolate, ssrRenderComponent, ssrRenderList } from "vue/server-renderer";
import _sfc_main$1 from "./ProductCard-68eacbd3.mjs";
import { Swiper, SwiperSlide } from "swiper/vue";
import { Navigation, Autoplay } from "swiper";
import "vuex";
import "@gtm-support/vue-gtm";
const RelativeProducts_vue_vue_type_style_index_0_lang = "";
const _sfc_main = {
  __name: "RelativeProducts",
  __ssrInlineRender: true,
  props: {
    products: Array,
    lang: String,
    textRelativeProducts: {
      type: String,
      default: "Схожі товари"
    }
  },
  setup(__props) {
    const modules = [Navigation, Autoplay];
    const settings = {
      spaceBetween: 10,
      navigation: true,
      pagination: {
        clickable: true
      },
      loop: true,
      autoplay: {
        delay: 5e3,
        disableOnInteraction: false
      },
      slidesPerView: 2,
      breakpoints: {
        768: {
          slidesPerView: 3,
          spaceBetween: 10
        },
        1024: {
          slidesPerView: 4,
          spaceBetween: 20
        },
        1366: {
          slidesPerView: 5,
          spaceBetween: 20
        }
      }
    };
    return (_ctx, _push, _parent, _attrs) => {
      if (__props.products.length) {
        _push(`<section${ssrRenderAttrs(mergeProps({ class: "relative product-list" }, _attrs))}><div class="font-bold text-black text-center text-2xl font-heading mb-[15px]">${ssrInterpolate(__props.textRelativeProducts)}</div>`);
        _push(ssrRenderComponent(unref(Swiper), mergeProps({ modules }, settings, { class: "relative-slider" }), {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<!--[-->`);
              ssrRenderList(__props.products, (product, i) => {
                _push2(ssrRenderComponent(unref(SwiperSlide), { key: i }, {
                  default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(ssrRenderComponent(_sfc_main$1, {
                        product,
                        lang: __props.lang
                      }, null, _parent3, _scopeId2));
                    } else {
                      return [
                        createVNode(_sfc_main$1, {
                          product,
                          lang: __props.lang
                        }, null, 8, ["product", "lang"])
                      ];
                    }
                  }),
                  _: 2
                }, _parent2, _scopeId));
              });
              _push2(`<!--]-->`);
            } else {
              return [
                (openBlock(true), createBlock(Fragment, null, renderList(__props.products, (product, i) => {
                  return openBlock(), createBlock(unref(SwiperSlide), { key: i }, {
                    default: withCtx(() => [
                      createVNode(_sfc_main$1, {
                        product,
                        lang: __props.lang
                      }, null, 8, ["product", "lang"])
                    ]),
                    _: 2
                  }, 1024);
                }), 128))
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</section>`);
      } else {
        _push(`<!---->`);
      }
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Public/Product/RelativeProducts.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
