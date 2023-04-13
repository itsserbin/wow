import { mergeProps, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderAttr, ssrInterpolate, ssrRenderList } from "vue/server-renderer";
const _sfc_main = {
  __name: "ProductCard",
  __ssrInlineRender: true,
  props: {
    product: Object,
    lang: String,
    textGoToProductCard: {
      type: String,
      default: "\u0414\u043E\u043A\u043B\u0430\u0434\u043D\u0456\u0448\u0435"
    }
  },
  emits: ["addItemToOrder"],
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "items-stretch no-underline grid border-[1px] border-[#e9e9e9] rounded-b-[5px] relative hover:scale-105 transition-all duration-300 h-full" }, _attrs))}><div class="w-full mx-auto h-56 md:h-72"><a${ssrRenderAttr("href", _ctx.route("product", __props.product.id))}><picture class="w-full"><source${ssrRenderAttr("srcset", _ctx.route("images.350", __props.product.preview.webp_src))} type="image/webp"><img${ssrRenderAttr("data-src", _ctx.route("images.350", __props.product.preview.src))} class="w-full h-full object-cover"${ssrRenderAttr("alt", __props.product.h1[__props.lang])}></picture></a></div><div class="flex flex-col items-center p-2 md:p-4 pt-0 justify-between"><a${ssrRenderAttr("href", _ctx.route("product", __props.product.id))}><h5 class="text-black mb-[15px] overflow-hidden font-bold text-center text-base h-18 md:h-12 font-subheading">${ssrInterpolate(__props.product.h1[__props.lang])}</h5></a><div class="text-sm text-gray-500 w-full mb-3"><!--[-->`);
      ssrRenderList(__props.product.sizes, (size) => {
        _push(`<span>${ssrInterpolate(size.title)}\xA0 </span>`);
      });
      _push(`<!--]--></div><div class="card__price flex-col mr-auto">`);
      if (!__props.product.discount_price) {
        _push(`<div class="font-bold text-lg md:text-2xl text-black">${ssrInterpolate(__props.product.price)} \u0433\u0440\u043D. </div>`);
      } else {
        _push(`<!---->`);
      }
      if (__props.product.discount_price) {
        _push(`<div class="flex flex-col"><div class="text-[1rem] font-medium text-xs md:text-base line-through text-[#A5A5A5]">${ssrInterpolate(__props.product.price)} \u0433\u0440\u043D. </div><div class="font-bold text-lg md:text-2xl text-[#ff0000]">${ssrInterpolate(__props.product.discount_price)} \u0433\u0440\u043D. </div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<a href="javascript:" class="w-12 h-12 md:w-14 md:h-14 bg-button rounded-full flex justify-center items-center col-span-1 ml-auto absolute right-3 bottom-2 hover:bg-accent hover:scale-105 transition-all"><svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" class="text-white" viewBox="0 0 16 16"><path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"></path><path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"></path></svg></a></div></div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Public/Thanks/ProductCard.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
