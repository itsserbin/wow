import { ref, mergeProps, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrInterpolate, ssrRenderStyle, ssrRenderAttr } from "vue/server-renderer";
const _sfc_main = {
  __name: "Langs",
  __ssrInlineRender: true,
  props: ["lang"],
  setup(__props) {
    const show = ref(false);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "relative whitespace-nowrap left-[0.4rem]" }, _attrs))}><button class="text-red-500 mr-[-25px] bg-white hover:bg-white focus:outline-none font-medium rounded-lg text-sm py-2.5 text-center inline-flex items-center dark:bg-white" type="button">${ssrInterpolate(__props.lang === "ua" ? "UA" : __props.lang === "ru" ? "RU" : null)} <svg class="ml-2 w-4 h-4" aria-hidden="true" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg></button>`);
      if (show.value) {
        _push(`<div class="z-10 w-[50px] bg-white rounded divide-y divide-gray-100 shadow" style="${ssrRenderStyle({ "position": "absolute", "inset": "0px auto auto 0px", "margin-left": "1px", "margin-top": "25px", "transform": "translate(0px, 10px)" })}"><ul class="py-1 text-sm text-red-600 dark:text-gray-200"><li>`);
        if (__props.lang === "ua") {
          _push(`<a${ssrRenderAttr("href", _ctx.route("setlocale", "ru"))} class="block py-2 text-red-600 px-4 dark:hover:text-red-600">RU</a>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</li><li>`);
        if (__props.lang === "ru") {
          _push(`<a${ssrRenderAttr("href", _ctx.route("setlocale", "ua"))} class="block py-2 text-red-600 px-4 dark:hover:text-red-600">UA</a>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</li></ul></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Public/Components/Header/Langs.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
