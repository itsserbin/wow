import { getCurrentInstance, ref, computed, mergeProps, unref, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrInterpolate, ssrRenderAttr, ssrRenderList } from "vue/server-renderer";
import { useStore } from "vuex";
import { useGtm } from "@gtm-support/vue-gtm";
const ProductCard_vue_vue_type_style_index_0_lang = "";
const _sfc_main = {
  __name: "ProductCard",
  __ssrInlineRender: true,
  props: {
    product: Object,
    lang: String,
    textGoToProductCard: {
      type: String,
      default: "Докладніше"
    },
    slider: {
      type: Boolean,
      default: false
    }
  },
  setup(__props) {
    const { appContext } = getCurrentInstance();
    appContext.config.globalProperties;
    useStore();
    useGtm();
    ref({
      count: 1,
      size: [],
      color: [],
      item_id: null,
      src: typeof window !== "undefined" ? window.location.href : null,
      event_id: ""
    });
    const discountPercentage = computed(() => (price, discount_price) => `- ${((price - discount_price) * 100 / price).toFixed()}%`);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "items-stretch flex flex-col no-underline border-[1px] border-secondary rounded-lg relative hover:scale-105 transition-all duration-300 h-full" }, _attrs))}>`);
      if (__props.product.discount_price) {
        _push(`<div class="absolute rounded-xl bg-secondary p-1 top-1 left-1 text-[0.675rem] z-10">${ssrInterpolate(unref(discountPercentage)(__props.product.price, __props.product.discount_price))}</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div><div class="w-full mx-auto"><a${ssrRenderAttr("href", _ctx.route("product", __props.product.id))}>`);
      if (__props.product.preview) {
        _push(`<picture>`);
        if (__props.product.preview.webp_src) {
          _push(`<source${ssrRenderAttr("srcset", _ctx.route("images.350", __props.product.preview.webp_src))} type="image/webp">`);
        } else {
          _push(`<!---->`);
        }
        _push(`<img${ssrRenderAttr("src", _ctx.route("images.350", __props.product.preview.src))}${ssrRenderAttr("alt", __props.product.h1[__props.lang])} class="h-full object-cover w-full rounded-t-lg h-56 md:h-72"></picture>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</a></div></div><div class="flex flex-col items-center p-2 md:p-4 pt-0 justify-between"><a${ssrRenderAttr("href", _ctx.route("product", __props.product.id))}><h5 class="text-black mb-[15px] overflow-hidden font-bold text-center h-18 md:h-12 font-subheading text-base">${ssrInterpolate(__props.product.h1[_ctx.$page.props.lang])}</h5></a><div class="text-sm text-gray-500 font-text w-full mb-3"><!--[-->`);
      ssrRenderList(__props.product.sizes, (size) => {
        _push(`<span>${ssrInterpolate(size.title)}  </span>`);
      });
      _push(`<!--]--></div><div class="card__price flex-col mr-auto font-subheading">`);
      if (!__props.product.discount_price) {
        _push(`<div class="font-bold text-lg md:text-2xl text-black">${ssrInterpolate(__props.product.price)} грн. </div>`);
      } else {
        _push(`<!---->`);
      }
      if (__props.product.discount_price) {
        _push(`<div class="flex flex-col"><div class="text-[1rem] font-medium text-xs md:text-base line-through text-[#A5A5A5]">${ssrInterpolate(__props.product.price)} грн. </div><div class="font-bold text-lg md:text-2xl text-[#ff0000]">${ssrInterpolate(__props.product.discount_price)} грн. </div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<a href="javascript:" class="w-12 h-12 md:w-14 md:h-14 rounded-full flex justify-center items-center col-span-1 absolute right-[-7px] bottom-[-7px] bg-button hover:bg-accent hover:scale-105 transition-all duration-500"><svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg"><ellipse cx="12.459" cy="22.2084" rx="1.625" ry="1.625" fill="white"></ellipse><circle cx="18.959" cy="22.2084" r="1.625" fill="white"></circle><path d="M7.32572 7.04167L9.60348 17.2435C9.75655 17.9291 10.3649 18.4167 11.0674 18.4167H20.0919C20.7944 18.4167 21.4028 17.9291 21.5559 17.2435L23.4258 8.86852C23.635 7.93136 22.9221 7.04167 21.9618 7.04167H7.32572ZM7.32572 7.04167L6.59497 4.35616C6.41728 3.70315 5.82435 3.25 5.1476 3.25H2.16699" stroke="white" stroke-width="1.5" stroke-linecap="round"></path></svg></a></div></div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Public/Components/ProductCard.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
