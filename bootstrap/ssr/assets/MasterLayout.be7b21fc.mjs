import { ssrRenderComponent, ssrRenderSlot } from "vue/server-renderer";
import _sfc_main$2 from "./Header.4109ad68.mjs";
import _sfc_main$3 from "./Footer.5f194abc.mjs";
import _sfc_main$1 from "./FixedBanner.5b212d34.mjs";
import _sfc_main$4 from "./ScrollToTop.c4b9ced3.mjs";
import { getCurrentInstance, onMounted, useSSRContext } from "vue";
const _sfc_main = {
  __name: "MasterLayout",
  __ssrInlineRender: true,
  props: [
    "lang",
    "categories",
    "options",
    "pages",
    "eventIdPageView"
  ],
  setup(__props) {
    const props = __props;
    const { appContext } = getCurrentInstance();
    const { $fbq } = appContext.config.globalProperties;
    onMounted(() => {
      {
        try {
          $fbq("PageView", {}, props.eventIdPageView);
        } catch (e) {
          console.error(e);
        }
      }
      document.querySelector(".loader").classList.add("hidden");
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[--><header class="w-[100%] fixed top-0 z-20 bg-[#fff] flex-[0_0_auto]">`);
      _push(ssrRenderComponent(_sfc_main$1, { lang: __props.lang }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$2, {
        options: __props.options,
        categories: __props.categories,
        lang: __props.lang
      }, null, _parent));
      _push(`</header><main class="main flex-[1_0_auto]"><div class="max-w-7xl mx-auto pt-36 md:pt-40 px-3 h-full">`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</div></main>`);
      _push(ssrRenderComponent(_sfc_main$3, {
        options: __props.options,
        lang: __props.lang,
        pages: __props.pages
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
