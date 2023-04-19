import { defineAsyncComponent, ref, unref, useSSRContext } from "vue";
import { ssrRenderClass, ssrRenderComponent } from "vue/server-renderer";
const _sfc_main = {
  __name: "Burger",
  __ssrInlineRender: true,
  props: [
    "lang",
    "pages",
    "options"
  ],
  setup(__props) {
    const BurgerMenu = defineAsyncComponent(() => import("./BurgerMenu-ed0959cd.mjs"));
    const show = ref(false);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[--><div class="${ssrRenderClass([{ "active": show.value }, "burger__sticks justify-end relative !w-[25px] h-[18px] z-50 p-0 ease-out before:bg-[#c4c4c4] before:content-[''] before:h-[2px] before:absolute before:w-[100%] before:mt-[15px] before:ease-out after:bg-[#c4c4c4] after:content-[''] after:h-[2px] after:absolute after:w-[100%] after:ease-out cursor-pointer"])}"><span class="bg-[#c4c4c4] block h-[2px] relative left-0 top-[8px] w-[100%]"></span></div>`);
      if (show.value) {
        _push(ssrRenderComponent(unref(BurgerMenu), {
          options: __props.options,
          pages: __props.pages
        }, null, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`<!--]-->`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Public/Components/Header/Burger.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
