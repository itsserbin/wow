import { ssrRenderComponent, ssrRenderSlot } from "vue/server-renderer";
import _sfc_main$2 from "./Header-97774ba7.mjs";
import _sfc_main$3 from "./Footer-e23e0d72.mjs";
import _sfc_main$1 from "./FixedBanner-285b457f.mjs";
import _sfc_main$4 from "./ScrollToTop-99a883e6.mjs";
import { onMounted, useSSRContext } from "vue";
const _sfc_main = {
  __name: "MasterLayout",
  __ssrInlineRender: true,
  setup(__props) {
    onMounted(() => {
      const loader = document.querySelector(".loader");
      if (loader) {
        loader.classList.add("hidden");
      }
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[--><header class="w-[100%] fixed top-0 z-20 bg-[#fff] flex-[0_0_auto]">`);
      _push(ssrRenderComponent(_sfc_main$1, {
        lang: _ctx.$page.props.lang
      }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$2, {
        options: _ctx.$page.props.options,
        categories: _ctx.$page.props.categories,
        lang: _ctx.$page.props.lang
      }, null, _parent));
      _push(`</header><main class="main flex-[1_0_auto]"><div class="max-w-7xl mx-auto pt-36 md:pt-40 px-3 h-full">`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</div></main>`);
      _push(ssrRenderComponent(_sfc_main$3, {
        options: _ctx.$page.props.options,
        lang: _ctx.$page.props.lang,
        pages: _ctx.$page.props.pages
      }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$4, null, null, _parent));
      _push(`<!--]-->`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Layouts/MasterLayout.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as _
};
