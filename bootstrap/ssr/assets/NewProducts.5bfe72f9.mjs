import { mergeProps, unref, withCtx, createVNode, openBlock, createBlock, Fragment, renderList, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrInterpolate, ssrRenderComponent, ssrRenderList } from "vue/server-renderer";
import _sfc_main$1 from "./ProductCard.5c4ddc79.mjs";
import { Swiper, SwiperSlide } from "swiper/vue";
import { Navigation, Autoplay } from "swiper";
import "vuex";
import "@gtm-support/vue-gtm";
const _sfc_main = {
  __name: "NewProducts",
  __ssrInlineRender: true,
  props: {
    products: Array,
    textLatestProducts: {
      type: String,
      default: "\u041E\u0441\u0442\u0430\u043D\u043D\u0456 \u043D\u0430\u0434\u0445\u043E\u0434\u0436\u0435\u043D\u043D\u044F"
    },
    lang: String
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
        _push(`<section${ssrRenderAttrs(mergeProps({ class: "relative" }, _attrs))}><div class="font-bold text-black text-center text-2xl font-heading mb-[15px]">${ssrInterpolate(__props.textLatestProducts)}</div><div class="relative-slider">`);
        _push(ssrRenderComponent(unref(Swiper), mergeProps(settings, { modules }), {
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
        _push(`</div></section>`);
      } else {
        _push(`<!---->`);
      }
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Public/Product/NewProducts.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
