import { defineComponent, ref, computed, onMounted, withCtx, createTextVNode, unref, useSSRContext } from "vue";
import { ssrRenderComponent, ssrRenderClass } from "vue/server-renderer";
import { i as isLoading } from "./load-e7dd2e7a.mjs";
import Support from "./Support-1702dec6.mjs";
import _sfc_main$a from "./Consultation-060c786d.mjs";
import _sfc_main$9 from "./Content-68ff5788.mjs";
import _sfc_main$4 from "./Banners-3195e1e8.mjs";
import _sfc_main$8 from "./Products-568eccc2.mjs";
import _sfc_main$6 from "./Sort-ac8c3e3b.mjs";
import _sfc_main$7 from "./Filter-9e5de628.mjs";
import { P as ProductsRepository } from "./ProductsRepository-26c42134.mjs";
import _sfc_main$5 from "./Button-e6d9c4d7.mjs";
import { _ as _sfc_main$1 } from "./MasterLayout-d0c49156.mjs";
import _sfc_main$3 from "./Breadcrumbs-cdffc20d.mjs";
import _sfc_main$2 from "./Head-741d8025.mjs";
import "./_plugin-vue_export-helper-cc2b3d55.mjs";
import "./swal-dcd03cbb.mjs";
import "swiper";
import "swiper/vue";
import "./Loader-f0774e51.mjs";
import "./ProductCards-d6a93abf.mjs";
import "./ProductCard-68eacbd3.mjs";
import "vuex";
import "@gtm-support/vue-gtm";
import "./Input-4d6b8e1d.mjs";
import "./Accordion-1215fa5b.mjs";
import "./AccordionItem-d1739108.mjs";
import "gsap";
import "./Header-1206aee3.mjs";
import "./CartIcon-4c8884b3.mjs";
import "./Langs-57d30b91.mjs";
import "./Logo-8552d818.mjs";
import "./HeaderCategories-743d6249.mjs";
import "./Footer-e23e0d72.mjs";
import "./FixedBanner-285b457f.mjs";
import "./ScrollToTop-99a883e6.mjs";
import "./Breadcrumbs-adc4c20b.mjs";
import "./Head-671d76dc.mjs";
import "@inertiajs/inertia-vue3";
const __default__ = defineComponent({ layout: _sfc_main$1 });
const _sfc_main = /* @__PURE__ */ Object.assign(__default__, {
  __name: "Index",
  __ssrInlineRender: true,
  props: [
    "banners",
    "lang",
    "title",
    "characteristics",
    "text",
    "consultation",
    "products",
    "categories",
    "category",
    "options",
    "pages",
    "eventIdPageView"
  ],
  setup(__props) {
    const props = __props;
    const state = ref({
      products: [],
      isLoadingMore: false,
      isShowLoadMore: true,
      isShowFilter: false
    });
    const params = ref({
      currentPage: 1,
      sort: null,
      filter: null
    });
    const getParams = computed(() => {
      const { currentPage, sort, filter: filter2 } = params.value;
      return {
        page: currentPage,
        sort,
        filter: filter2,
        slug: route().params.slug
      };
    });
    onMounted(async () => {
      state.value.products = props.products.data;
      isLoading.value = false;
    });
    const onSort = async () => {
      params.value.currentPage = 0;
      state.value.products = [];
      await fetch();
    };
    const filter = async (val) => {
      params.value.filter = val;
      params.value.currentPage = 0;
      state.value.products = [];
      if (state.value.isShowFilter) {
        toggleFilter();
      }
      await fetch();
    };
    const fetch = async () => {
      params.value.currentPage += 1;
      try {
        const data = await ProductsRepository.v1().category(getParams.value);
        if (data.success) {
          params.value.currentPage = data.result.current_page;
          state.value.products = state.value.products.concat(data.result.data);
          state.value.isShowLoadMore = data.result.to !== data.result.total;
        }
      } catch (e) {
        console.error(e);
        state.value.isLoading = false;
      }
    };
    const toggleFilter = () => {
      state.value.isShowFilter = !state.value.isShowFilter;
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[-->`);
      _push(ssrRenderComponent(_sfc_main$2, {
        category: __props.category,
        lang: __props.lang
      }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$3, {
        currentUrl: _ctx.route().current,
        options: __props.options,
        lang: __props.lang,
        title: __props.category.title[__props.lang]
      }, null, _parent));
      _push(`<div class="grid grid-cols-1 gap-4">`);
      if (__props.banners.length) {
        _push(ssrRenderComponent(_sfc_main$4, {
          lang: __props.lang,
          data: __props.banners
        }, null, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="flex justify-between md:justify-end items-center"><div class="block md:hidden mr-2">`);
      _push(ssrRenderComponent(_sfc_main$5, {
        type: "button",
        onClick: toggleFilter
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Фільтрувати`);
          } else {
            return [
              createTextVNode("Фільтрувати")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
      _push(ssrRenderComponent(_sfc_main$6, {
        modelValue: params.value.sort,
        "onUpdate:modelValue": ($event) => params.value.sort = $event,
        onSort
      }, null, _parent));
      _push(`</div><div class="grid grid-cols-12 gap-4"><div class="${ssrRenderClass([{ "!block fixed h-full w-full z-50 overflow-y-scroll top-0 right-0": state.value.isShowFilter }, "filter hidden md:col-span-3 md:block"])}">`);
      if (Object.keys(__props.characteristics).length) {
        _push(ssrRenderComponent(_sfc_main$7, {
          characteristics: __props.characteristics,
          lang: __props.lang,
          onFetch: filter,
          onClose: toggleFilter,
          isShow: state.value.isShowFilter
        }, null, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`</div><div class="products col-span-12 md:col-span-9">`);
      if (state.value.products.length) {
        _push(ssrRenderComponent(_sfc_main$8, {
          lang: __props.lang,
          title: __props.title,
          data: state.value.products,
          isLoadingMore: state.value.isLoadingMore,
          isShowLoadMore: state.value.isShowLoadMore,
          onFetch: fetch
        }, null, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div>`);
      if (__props.text) {
        _push(ssrRenderComponent(_sfc_main$9, { data: __props.text }, null, _parent));
      } else {
        _push(`<!---->`);
      }
      if (__props.consultation) {
        _push(ssrRenderComponent(_sfc_main$a, null, null, _parent));
      } else {
        _push(`<!---->`);
      }
      if (!unref(isLoading)) {
        _push(ssrRenderComponent(Support, null, null, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`</div><!--]-->`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Public/Category/Index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
