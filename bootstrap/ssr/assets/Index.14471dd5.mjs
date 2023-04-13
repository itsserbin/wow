import { mergeProps, withCtx, createVNode, openBlock, createBlock, toDisplayString, createCommentVNode, useSSRContext } from "vue";
import { ssrRenderComponent, ssrInterpolate } from "vue/server-renderer";
import { _ as _sfc_main$1 } from "./MasterLayout.be7b21fc.mjs";
import _sfc_main$3 from "./Breadcrumbs.8ef45580.mjs";
import _sfc_main$2 from "./Head.9b78d2ae.mjs";
import "./Header.4109ad68.mjs";
import "./CartIcon.79888d2e.mjs";
import "vuex";
import "./Langs.3ba4b35e.mjs";
import "./Logo.5e8f1180.mjs";
import "./HeaderCategories.0e67c59a.mjs";
import "swiper";
import "swiper/vue";
import "./Footer.5f194abc.mjs";
import "./FixedBanner.5b212d34.mjs";
import "./ScrollToTop.c4b9ced3.mjs";
import "./Breadcrumbs.1a27781b.mjs";
import "@inertiajs/inertia-vue3";
const _sfc_main = {
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
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(_sfc_main$1, mergeProps({
        categories: __props.categories,
        options: __props.options,
        lang: __props.lang,
        pages: __props.pages,
        eventIdPageView: __props.eventIdPageView
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_sfc_main$2, {
              title: __props.page.meta_title[__props.lang]
            }, null, _parent2, _scopeId));
            if (__props.page) {
              _push2(`<div${_scopeId}>`);
              _push2(ssrRenderComponent(_sfc_main$3, {
                options: __props.options,
                lang: __props.lang,
                title: __props.page.h1[__props.lang]
              }, null, _parent2, _scopeId));
              _push2(`<h1 class="font-bold text-black text-center text-2xl font-heading mb-[15px]"${_scopeId}>${ssrInterpolate(__props.page.h1[__props.lang])}</h1><div class="content"${_scopeId}>${__props.page.content[__props.lang]}</div></div>`);
            } else {
              _push2(`<!---->`);
            }
          } else {
            return [
              createVNode(_sfc_main$2, {
                title: __props.page.meta_title[__props.lang]
              }, null, 8, ["title"]),
              __props.page ? (openBlock(), createBlock("div", { key: 0 }, [
                createVNode(_sfc_main$3, {
                  options: __props.options,
                  lang: __props.lang,
                  title: __props.page.h1[__props.lang]
                }, null, 8, ["options", "lang", "title"]),
                createVNode("h1", { class: "font-bold text-black text-center text-2xl font-heading mb-[15px]" }, toDisplayString(__props.page.h1[__props.lang]), 1),
                createVNode("div", {
                  class: "content",
                  innerHTML: __props.page.content[__props.lang]
                }, null, 8, ["innerHTML"])
              ])) : createCommentVNode("", true)
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Public/Page/Index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
