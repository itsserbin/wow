import { mergeProps, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderAttr, ssrInterpolate } from "vue/server-renderer";
import { useStore } from "vuex";
const _sfc_main = {
  __name: "AdditionalProductCard",
  __ssrInlineRender: true,
  props: ["item", "lang"],
  setup(__props) {
    useStore();
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "grid grid-cols-8 border-[1px] border-gray-300 rounded-[10px] relative" }, _attrs))}><div class="col-span-2"><picture class="w-full"><source${ssrRenderAttr("srcset", _ctx.route("images.350", __props.item.preview.webp_src))} type="image/webp"><img${ssrRenderAttr("src", _ctx.route("images.350", __props.item.preview.src))} class="w-full h-full object-cover"${ssrRenderAttr("alt", __props.item.h1[__props.lang])}></picture></div><div class="col-span-6 p-[20px] flex flex-col"><div class="flex space-x-[50px]"><div class="text-text font-subheading text-lg">${ssrInterpolate(__props.item.h1[__props.lang])}</div></div><div class="flex h-full items-end"><div class="text-[#231f20] flex flex-col text-base font-[700] whitespace-nowrap font-subheading">`);
      if (__props.item.discount_price) {
        _push(`<div class="flex flex-col justify-center"><del class="text-[#777] text-[1rem] mb-3"><span class="text-gray-600 text-[1rem]">${ssrInterpolate(__props.item.price)} <span class="text-xs">\u0433\u0440\u043D.</span></span></del><ins class="text-[#ff4c3b] text-[1.5rem] font-[700] no-underline mt-[-14px]"><span class="text-red-600">${ssrInterpolate(__props.item.discount_price)} <span class="text-xs"> \u0433\u0440\u043D.</span></span></ins></div>`);
      } else {
        _push(`<div class="flex flex-col justify-center"><ins class="text-[1.5rem] font-[700] no-underline mt-[-14px]">${ssrInterpolate(__props.item.discount_price)} <span class="text-xs"> \u0433\u0440\u043D.</span></ins></div>`);
      }
      _push(`</div></div><div class="block pl-[1.25rem] absolute right-5 top-16"><div class="plus-btn"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-plus-circle" viewBox="0 0 16 16"><path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"></path><path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"></path></svg></div></div></div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Public/Cart/AdditionalProductCard.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
