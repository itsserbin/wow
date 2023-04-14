import { mergeProps, unref, withCtx, createVNode, toDisplayString, openBlock, createBlock, Fragment, renderList, createTextVNode, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrInterpolate, ssrRenderComponent, ssrRenderList, ssrRenderAttr } from "vue/server-renderer";
import { Pagination, Autoplay, EffectCoverflow } from "swiper";
import { Swiper, SwiperSlide } from "swiper/vue";
import _sfc_main$1 from "./Button-e6d9c4d7.mjs";
const AllReviewsCarousel_vue_vue_type_style_index_0_lang = "";
const _sfc_main = {
  __name: "AllReviewsCarousel",
  __ssrInlineRender: true,
  props: {
    data: {
      type: Array
    },
    textReviews: {
      type: String,
      default: "Відгуки"
    },
    textNoReviews: {
      type: String,
      default: "Відгуки відсутні"
    },
    textSeeMore: {
      type: String,
      default: "Дивитись більше"
    }
  },
  setup(__props) {
    const modules = [Pagination, Autoplay, EffectCoverflow];
    const settings = {
      autoHeight: true,
      slidesPerView: 1,
      spaceBetween: 0,
      pagination: {
        type: "progressbar"
      },
      breakpoints: {
        "768": {
          slidesPerView: 2,
          spaceBetween: 10
        },
        "1024": {
          slidesPerView: 3,
          spaceBetween: 20
        }
      },
      autoplay: {
        delay: 3500,
        disableOnInteraction: false
      },
      grabCursor: true,
      effect: "coverflow",
      centeredSlides: true,
      coverflowEffect: {
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: false
      }
    };
    return (_ctx, _push, _parent, _attrs) => {
      if (__props.data.length) {
        _push(`<section${ssrRenderAttrs(mergeProps({ class: "my-5" }, _attrs))}><div class="reviews__block-title font-bold text-2xl font-heading text-center text-black">${ssrInterpolate(__props.textReviews)}</div>`);
        _push(ssrRenderComponent(unref(Swiper), mergeProps({
          modules,
          class: "reviews-carousel"
        }, settings), {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<!--[-->`);
              ssrRenderList(__props.data, (review) => {
                _push2(ssrRenderComponent(unref(SwiperSlide), { class: "text-center bg-red-100 rounded-xl p-5" }, {
                  default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(`<div class="font-bold font-subheading"${_scopeId2}>${ssrInterpolate(review.name)}</div><hr class="bg-main shadow-lg rounded border-0 h-[1px] my-2"${_scopeId2}><div class="text-base font-text"${_scopeId2}>${ssrInterpolate(review.comment)}</div>`);
                    } else {
                      return [
                        createVNode("div", { class: "font-bold font-subheading" }, toDisplayString(review.name), 1),
                        createVNode("hr", { class: "bg-main shadow-lg rounded border-0 h-[1px] my-2" }),
                        createVNode("div", { class: "text-base font-text" }, toDisplayString(review.comment), 1)
                      ];
                    }
                  }),
                  _: 2
                }, _parent2, _scopeId));
              });
              _push2(`<!--]-->`);
            } else {
              return [
                (openBlock(true), createBlock(Fragment, null, renderList(__props.data, (review) => {
                  return openBlock(), createBlock(unref(SwiperSlide), { class: "text-center bg-red-100 rounded-xl p-5" }, {
                    default: withCtx(() => [
                      createVNode("div", { class: "font-bold font-subheading" }, toDisplayString(review.name), 1),
                      createVNode("hr", { class: "bg-main shadow-lg rounded border-0 h-[1px] my-2" }),
                      createVNode("div", { class: "text-base font-text" }, toDisplayString(review.comment), 1)
                    ]),
                    _: 2
                  }, 1024);
                }), 256))
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`<div class="flex-row text-center"><a${ssrRenderAttr("href", _ctx.route("reviews"))} target="_blank">`);
        _push(ssrRenderComponent(_sfc_main$1, { type: "button" }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`${ssrInterpolate(__props.textSeeMore)}`);
            } else {
              return [
                createTextVNode(toDisplayString(__props.textSeeMore), 1)
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</a></div></section>`);
      } else {
        _push(`<!---->`);
      }
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Public/Components/AllReviewsCarousel.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
