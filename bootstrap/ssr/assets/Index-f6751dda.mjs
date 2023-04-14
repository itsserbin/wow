import { defineComponent, defineAsyncComponent, ref, onMounted, unref, useSSRContext } from "vue";
import { ssrRenderComponent } from "vue/server-renderer";
import _sfc_main$5 from "./ProductsList-5cbae032.mjs";
import { _ as _sfc_main$1 } from "./MasterLayout-ed8b7bea.mjs";
import _sfc_main$3 from "./Banners-9843c8a4.mjs";
import _sfc_main$4 from "./Categories-c513e054.mjs";
import _sfc_main$2 from "./Head-671d76dc.mjs";
import { i as isLoading } from "./load-e7dd2e7a.mjs";
import { e as eventTracking } from "./eventTracking-3e33368b.mjs";
import "./Heading-7025d0e4.mjs";
import "./Button-e6d9c4d7.mjs";
import "./Loader-f0774e51.mjs";
import "./_plugin-vue_export-helper-cc2b3d55.mjs";
import "./ProductCard-fa239778.mjs";
import "vuex";
import "@gtm-support/vue-gtm";
import "./Header-1206aee3.mjs";
import "./CartIcon-4c8884b3.mjs";
import "./Langs-57d30b91.mjs";
import "./Logo-8552d818.mjs";
import "./HeaderCategories-743d6249.mjs";
import "swiper";
import "swiper/vue";
import "./Footer-e23e0d72.mjs";
import "./FixedBanner-285b457f.mjs";
import "./ScrollToTop-99a883e6.mjs";
import "@inertiajs/vue3";
import "@inertiajs/inertia-vue3";
const __default__ = defineComponent({ layout: _sfc_main$1 });
const _sfc_main = /* @__PURE__ */ Object.assign(__default__, {
  __name: "Index",
  __ssrInlineRender: true,
  props: [
    "lang",
    "categories",
    "options",
    "banners",
    "bestSellingProducts",
    "newProducts",
    "allProducts",
    "pages",
    "reviews",
    "text",
    "faqs",
    "advantages",
    "eventIdPageView"
  ],
  setup(__props) {
    const props = __props;
    const Content = defineAsyncComponent(() => import("./Content-68ff5788.mjs"));
    const Advantages = defineAsyncComponent(() => import("./Advantages-874447b2.mjs"));
    const AllReviewsCarousel = defineAsyncComponent(() => import("./AllReviewsCarousel-94463242.mjs"));
    const FaqComponent = defineAsyncComponent(() => import("./FaqComponent-8a06e7db.mjs"));
    const Support = defineAsyncComponent(() => import("./Support-1702dec6.mjs"));
    const meta = {
      title: props.lang === "ua" ? props.options.meta_title_ua : props.options.meta_title_ru,
      description: props.lang === "ua" ? props.options.meta_description_ua : props.options.meta_description_ru
    };
    const stateNewProducts = ref({
      data: [],
      isLoadMore: false,
      isShowLoadMore: false,
      currentPage: 1,
      endpoint: "/api/v1/product/new-products?page="
    });
    const stateAllProducts = ref({
      data: [],
      isLoadMore: false,
      isShowLoadMore: false,
      currentPage: 1,
      endpoint: "/api/v1/product?page="
    });
    const stateBestSellingProducts = ref({
      data: [],
      isLoadMore: false,
      isShowLoadMore: false,
      currentPage: 1,
      endpoint: "/api/v1/product/best-selling?page="
    });
    onMounted(() => {
      eventTracking("PageView", {}, props.eventIdPageView);
      stateBestSellingProducts.value.data = props.bestSellingProducts.data;
      stateNewProducts.value.data = props.newProducts.data;
      stateAllProducts.value.data = props.allProducts.data;
      if (props.bestSellingProducts.current_page !== props.bestSellingProducts.per_page) {
        setShowLoadMore(stateBestSellingProducts.value);
      }
      if (props.newProducts.current_page !== props.newProducts.per_page) {
        setShowLoadMore(stateNewProducts.value);
      }
      if (props.allProducts.current_page !== props.allProducts.per_page) {
        setShowLoadMore(stateAllProducts.value);
      }
      console.log(props.bestSellingProducts);
    });
    const setShowLoadMore = (product) => {
      product.isShowLoadMore = true;
    };
    const fetchAllProducts = async () => {
      stateAllProducts.value.isLoadMore = true;
      await axios.get(stateAllProducts.value.endpoint + (stateAllProducts.value.currentPage + 1)).then(({ data }) => onSuccessFetch(stateAllProducts.value, data)).catch((response) => console.error(response));
    };
    const fetchBestSellingProducts = async () => {
      stateBestSellingProducts.value.isLoadMore = true;
      await axios.get(stateBestSellingProducts.value.endpoint + (stateBestSellingProducts.value.currentPage + 1)).then(({ data }) => onSuccessFetch(stateBestSellingProducts.value, data)).catch((response) => console.error(response));
    };
    const fetchNewProducts = async () => {
      await axios.get(stateNewProducts.value.endpoint + (stateNewProducts.value.currentPage + 1)).then(({ data }) => onSuccessFetch(stateNewProducts.value, data)).catch((response) => console.error(response));
    };
    const onSuccessFetch = (variable, data) => {
      variable.data = variable.data.concat(data.result.data);
      variable.total = data.result.total;
      variable.currentPage = data.result.current_page;
      variable.isShowLoadMore = data.result.to !== data.result.total;
      variable.isLoadMore = false;
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[-->`);
      _push(ssrRenderComponent(_sfc_main$2, {
        title: meta.title,
        description: meta.description
      }, null, _parent));
      _push(`<div class="grid grid-cols-1 gap-4">`);
      if (__props.banners.length) {
        _push(ssrRenderComponent(_sfc_main$3, {
          data: __props.banners,
          lang: __props.lang
        }, null, _parent));
      } else {
        _push(`<!---->`);
      }
      if (__props.categories.length) {
        _push(ssrRenderComponent(_sfc_main$4, {
          data: __props.categories,
          lang: __props.lang
        }, null, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(ssrRenderComponent(_sfc_main$5, {
        slider: true,
        lang: __props.lang,
        data: stateBestSellingProducts.value.data,
        isLoadMore: stateBestSellingProducts.value.isLoadMore,
        isShowLoadMore: stateBestSellingProducts.value.isShowLoadMore,
        onFetch: fetchBestSellingProducts,
        heading: "Найпопулярніші"
      }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$5, {
        slider: true,
        lang: __props.lang,
        data: stateNewProducts.value.data,
        isLoadMore: stateNewProducts.value.isLoadMore,
        isShowLoadMore: stateNewProducts.value.isShowLoadMore,
        onFetch: fetchNewProducts,
        heading: "Останні надходження"
      }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$5, {
        slider: true,
        lang: __props.lang,
        data: stateAllProducts.value.data,
        isLoadMore: stateAllProducts.value.isLoadMore,
        isShowLoadMore: stateAllProducts.value.isShowLoadMore,
        onFetch: fetchAllProducts,
        heading: "Усі товари"
      }, null, _parent));
      if (__props.advantages.length) {
        _push(ssrRenderComponent(unref(Advantages), {
          lang: __props.lang,
          data: __props.advantages
        }, null, _parent));
      } else {
        _push(`<!---->`);
      }
      if (__props.reviews.length) {
        _push(ssrRenderComponent(unref(AllReviewsCarousel), { data: __props.reviews }, null, _parent));
      } else {
        _push(`<!---->`);
      }
      if (__props.options.text_home_page_ua || __props.options.text_home_page_ru) {
        _push(ssrRenderComponent(unref(Content), {
          data: __props.lang === "ua" ? __props.options.text_home_page_ua : __props.options.text_home_page_ru
        }, null, _parent));
      } else {
        _push(`<!---->`);
      }
      if (__props.faqs.length) {
        _push(ssrRenderComponent(unref(FaqComponent), {
          lang: __props.lang,
          data: __props.faqs
        }, null, _parent));
      } else {
        _push(`<!---->`);
      }
      if (!unref(isLoading)) {
        _push(ssrRenderComponent(unref(Support), null, null, _parent));
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Public/Home/Index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
