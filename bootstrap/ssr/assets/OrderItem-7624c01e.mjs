import { mergeProps, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderAttr, ssrInterpolate } from "vue/server-renderer";
const _sfc_main = {
  __name: "OrderItem",
  __ssrInlineRender: true,
  props: ["item"],
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "mb-3" }, _attrs))}><div class="grid grid-cols-8 border-[1px] border-gray-300 rounded-[10px]"><div class="col-span-2"><div class="border-r-[1px] content-[&#39;&#39;] h-[100px] absolute z-40 ml-[150px] mt-[29px]"></div><img${ssrRenderAttr("src", _ctx.route("images.350", __props.item.product.preview.src))}${ssrRenderAttr("alt", __props.item.product.h1.ua ? __props.item.product.h1.ua : __props.item.product.h1.ru)} class="p-[25px] pr-[1.25rem]"></div><div class="col-span-6 p-[20px]"><a${ssrRenderAttr("href", _ctx.route("product", __props.item.product.id))} class="mb-[0.25rem] text-red-600 col-span-7 text-[1rem]"><div>${ssrInterpolate(__props.item.product.h1.ua ? __props.item.product.h1.ua : __props.item.product.h1.ru)}</div></a><div class="items-center flex col-span-8 justify-between mt-0 pl-[0.75rem] pt-0"><div class="text-[#231f20] flex flex-col text-[1.5rem] font-[700] whitespace-nowrap mr-[40px]">`);
      if (__props.item.product.discount_price) {
        _push(`<div class="flex flex-col justify-center"><del class="text-[#777] text-[1rem] mb-3"><span class="text-gray-600 text-[1rem]">${ssrInterpolate(__props.item.product.price)} <span class="text-xs">грн.</span></span></del><ins class="text-[#ff4c3b] text-[1.5rem] font-[700] no-underline mt-[-14px]"><span class="text-red-600">${ssrInterpolate(__props.item.product.discount_price)} <span class="text-xs"> грн.</span></span></ins></div>`);
      } else {
        _push(`<div class="flex flex-col justify-center"><ins class="text-[1.5rem] font-[700] no-underline mt-[-14px]">${ssrInterpolate(__props.item.product.discount_price)} <span class="text-xs"> грн.</span></ins></div>`);
      }
      _push(`</div><div class="items-center flex max-w-[6.25rem]"><input type="text"${ssrRenderAttr("value", __props.item.count)} class="text-[#e3342f] border-none text-sm w-10 outline-none text-center mx-auto" disabled></div></div></div></div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Public/Status/OrderItem.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
