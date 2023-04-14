import { ssrRenderComponent, ssrInterpolate } from "vue/server-renderer";
import { _ as _sfc_main$1 } from "./MasterLayout-bf4964bc.mjs";
import _sfc_main$3 from "./Breadcrumbs-17828511.mjs";
import _sfc_main$2 from "./Head-671d76dc.mjs";
import { defineComponent, useSSRContext } from "vue";
import "./Header-afe7698b.mjs";
import "./CartIcon-e2b4a7b1.mjs";
import "vuex";
import "@inertiajs/inertia-vue3";
import "./Langs-57d30b91.mjs";
import "./Logo-21a2caa8.mjs";
import "./HeaderCategories-391c289b.mjs";
import "swiper";
import "swiper/vue";
import "./Footer-e23e0d72.mjs";
import "./FixedBanner-285b457f.mjs";
import "./ScrollToTop-99a883e6.mjs";
import "./eventTracking-3e33368b.mjs";
import "./Breadcrumbs-adc4c20b.mjs";
const __default__ = defineComponent({ layout: _sfc_main$1 });
const _sfc_main = /* @__PURE__ */ Object.assign(__default__, {
  __name: "Index",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[-->`);
      _push(ssrRenderComponent(_sfc_main$2, {
        title: _ctx.$page.props.page.meta_title[_ctx.$page.props.lang]
      }, null, _parent));
      if (_ctx.$page.props.page) {
        _push(`<div>`);
        _push(ssrRenderComponent(_sfc_main$3, {
          "current-url": _ctx.route().current,
          options: _ctx.$page.props.options,
          lang: _ctx.$page.props.lang,
          title: _ctx.$page.props.page.h1[_ctx.$page.props.lang]
        }, null, _parent));
        _push(`<h1 class="font-bold text-black text-center text-2xl font-heading mb-[15px]">${ssrInterpolate(_ctx.$page.props.page.h1[_ctx.$page.props.lang])}</h1><div class="content">${_ctx.$page.props.page.content[_ctx.$page.props.lang]}</div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<!--]-->`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Public/Page/Index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
