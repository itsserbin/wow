import { ssrRenderComponent, ssrInterpolate } from "vue/server-renderer";
import { _ as _sfc_main$1 } from "./MasterLayout-ed8b7bea.mjs";
import _sfc_main$3 from "./Breadcrumbs-17828511.mjs";
import _sfc_main$2 from "./Head-671d76dc.mjs";
import { e as eventTracking } from "./eventTracking-3e33368b.mjs";
import { defineComponent, onMounted, useSSRContext } from "vue";
import "./Header-1206aee3.mjs";
import "./CartIcon-4c8884b3.mjs";
import "vuex";
import "./Langs-57d30b91.mjs";
import "./Logo-8552d818.mjs";
import "./HeaderCategories-743d6249.mjs";
import "swiper";
import "swiper/vue";
import "./Footer-e23e0d72.mjs";
import "./FixedBanner-285b457f.mjs";
import "./ScrollToTop-99a883e6.mjs";
import "./Breadcrumbs-adc4c20b.mjs";
import "@inertiajs/inertia-vue3";
const __default__ = defineComponent({ layout: _sfc_main$1 });
const _sfc_main = /* @__PURE__ */ Object.assign(__default__, {
  __name: "Index",
  __ssrInlineRender: true,
  props: [
    "page",
    "lang",
    "categories",
    "options",
    "pages",
    "eventIdPageView"
  ],
  setup(__props) {
    onMounted(() => {
      eventTracking("PageView", {}, props.eventIdPageView);
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[-->`);
      _push(ssrRenderComponent(_sfc_main$2, {
        title: __props.page.meta_title[__props.lang]
      }, null, _parent));
      if (__props.page) {
        _push(`<div>`);
        _push(ssrRenderComponent(_sfc_main$3, {
          "current-url": _ctx.route().current,
          options: __props.options,
          lang: __props.lang,
          title: __props.page.h1[__props.lang]
        }, null, _parent));
        _push(`<h1 class="font-bold text-black text-center text-2xl font-heading mb-[15px]">${ssrInterpolate(__props.page.h1[__props.lang])}</h1><div class="content">${__props.page.content[__props.lang]}</div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<!--]-->`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props2, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Public/Page/Index.vue");
  return _sfc_setup ? _sfc_setup(props2, ctx) : void 0;
};
export {
  _sfc_main as default
};
