import { defineAsyncComponent, ref, mergeProps, unref, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent } from "vue/server-renderer";
import _sfc_main$2 from "./CartIcon-e2b4a7b1.mjs";
import _sfc_main$3 from "./Langs-57d30b91.mjs";
import _sfc_main$1 from "./Logo-21a2caa8.mjs";
import _sfc_main$4 from "./HeaderCategories-7a506650.mjs";
import "vuex";
import "@inertiajs/inertia-vue3";
import "swiper";
import "swiper/vue";
const _sfc_main = {
  __name: "Header",
  __ssrInlineRender: true,
  props: [
    "pages",
    "lang",
    "categories",
    "options"
  ],
  setup(__props) {
    const Burger = defineAsyncComponent(() => import("./Burger-bf0a6c7b.mjs"));
    ref(false);
    ref(false);
    ref({
      showBurger: false,
      langActiveClass: false
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "shadow-lg mt-2" }, _attrs))}><div class="max-w-7xl mx-auto px-3"><div class="grid grid-cols-4 items-center"><div>`);
      _push(ssrRenderComponent(_sfc_main$1, null, null, _parent));
      _push(`</div><div class="grid justify-end">`);
      _push(ssrRenderComponent(_sfc_main$2, null, null, _parent));
      _push(`</div><div class="grid justify-end">`);
      _push(ssrRenderComponent(_sfc_main$3, { lang: __props.lang }, null, _parent));
      _push(`</div><div class="grid justify-end">`);
      _push(ssrRenderComponent(unref(Burger), {
        options: __props.options,
        lang: __props.lang,
        pages: __props.pages
      }, null, _parent));
      _push(`</div></div></div><div class="bg-main text-text font-subheading">`);
      _push(ssrRenderComponent(_sfc_main$4, {
        categories: __props.categories,
        lang: __props.lang
      }, null, _parent));
      _push(`</div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Public/Components/Header/Header.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};