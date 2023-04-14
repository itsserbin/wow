import { resolveComponent, mergeProps, withCtx, createVNode, toDisplayString, openBlock, createBlock, Fragment, renderList, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrInterpolate, ssrRenderComponent, ssrRenderList } from "vue/server-renderer";
import { Autoplay, Pagination, EffectCoverflow } from "swiper";
import _sfc_main$1 from "./ReviewForm-dc15d57d.mjs";
import "./swal-dcd03cbb.mjs";
const Reviews_vue_vue_type_style_index_0_lang = "";
const _sfc_main = {
  __name: "Reviews",
  __ssrInlineRender: true,
  props: {
    reviews: Array,
    id: Number,
    textProductReviews: {
      type: String,
      default: "Відгуки"
    },
    textNoReviews: {
      type: String,
      default: "Відгуки відсутні"
    }
  },
  setup(__props) {
    const modules = [Autoplay, Pagination, EffectCoverflow];
    const settings = {
      slidesPerView: 1,
      spaceBetween: 0,
      autoHeight: true,
      pagination: {
        type: "progressbar"
      },
      loop: true,
      autoplay: {
        delay: 2500,
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
      const _component_swiper = resolveComponent("swiper");
      const _component_swiper_slide = resolveComponent("swiper-slide");
      _push(`<div${ssrRenderAttrs(mergeProps({
        id: "reviews",
        class: "reviews px-5"
      }, _attrs))}>`);
      if (__props.reviews.length) {
        _push(`<div><div class="text-[24px] text-[#000] font-bold mb-5 text-center">${ssrInterpolate(__props.textProductReviews)}</div>`);
        _push(ssrRenderComponent(_component_swiper, mergeProps({
          class: "product-reviews-carousel",
          modules
        }, settings), {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<!--[-->`);
              ssrRenderList(__props.reviews, (review) => {
                _push2(ssrRenderComponent(_component_swiper_slide, {
                  key: review.id,
                  class: "text-center bg-red-100 rounded-xl p-5"
                }, {
                  default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(`<div class="font-bold"${_scopeId2}>${ssrInterpolate(review.name)}</div><hr class="bg-red-600 shadow-lg rounded border-0 h-[1px] my-2"${_scopeId2}><div${_scopeId2}>${ssrInterpolate(review.comment)}</div>`);
                    } else {
                      return [
                        createVNode("div", { class: "font-bold" }, toDisplayString(review.name), 1),
                        createVNode("hr", { class: "bg-red-600 shadow-lg rounded border-0 h-[1px] my-2" }),
                        createVNode("div", null, toDisplayString(review.comment), 1)
                      ];
                    }
                  }),
                  _: 2
                }, _parent2, _scopeId));
              });
              _push2(`<!--]-->`);
            } else {
              return [
                (openBlock(true), createBlock(Fragment, null, renderList(__props.reviews, (review) => {
                  return openBlock(), createBlock(_component_swiper_slide, {
                    key: review.id,
                    class: "text-center bg-red-100 rounded-xl p-5"
                  }, {
                    default: withCtx(() => [
                      createVNode("div", { class: "font-bold" }, toDisplayString(review.name), 1),
                      createVNode("hr", { class: "bg-red-600 shadow-lg rounded border-0 h-[1px] my-2" }),
                      createVNode("div", null, toDisplayString(review.comment), 1)
                    ]),
                    _: 2
                  }, 1024);
                }), 128))
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(ssrRenderComponent(_sfc_main$1, { id: __props.id }, null, _parent));
      _push(`</div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Public/Product/Reviews.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
