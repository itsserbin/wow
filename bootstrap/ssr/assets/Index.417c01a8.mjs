import { defineAsyncComponent, ref, onMounted, mergeProps, withCtx, unref, createVNode, openBlock, createBlock, createCommentVNode, useSSRContext } from "vue";
import { ssrRenderComponent } from "vue/server-renderer";
import { _ as _sfc_main$1 } from "./MasterLayout.be7b21fc.mjs";
import _sfc_main$3 from "./Banners.284dbcd2.mjs";
import _sfc_main$5 from "./ProductsList.d8756dca.mjs";
import _sfc_main$4 from "./Categories.96c5c5cc.mjs";
import _sfc_main$2 from "./Head.9b78d2ae.mjs";
import { i as isLoading } from "./load.3474ad71.mjs";
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
import "./Heading.bffd39ec.mjs";
import "./Button.ec6da28a.mjs";
import "./Loader.43a0c8e2.mjs";
import "./_plugin-vue_export-helper.43be4956.mjs";
import "./ProductCards.0f12ca5a.mjs";
import "./ProductCard.5c4ddc79.mjs";
import "@gtm-support/vue-gtm";
import "@inertiajs/inertia-vue3";
const _sfc_main = {
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
    const Content = defineAsyncComponent(() => import("./Content.9c005b77.mjs"));
    const Advantages = defineAsyncComponent(() => import("./Advantages.a72c550a.mjs"));
    const AllReviewsCarousel = defineAsyncComponent(() => import("./AllReviewsCarousel.b2fd9c6b.mjs"));
    const FaqComponent = defineAsyncComponent(() => import("./FaqComponent.81c94f08.mjs"));
    const Support = defineAsyncComponent(() => import("./Support.92203d05.mjs"));
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
      if (props.bestSellingProducts) {
        stateBestSellingProducts.value.data = props.bestSellingProducts.data;
        if (props.bestSellingProducts.current_page !== props.bestSellingProducts.per_page) {
          stateBestSellingProducts.value.isShowLoadMore = true;
        }
      }
      if (props.newProducts) {
        stateNewProducts.value.data = props.newProducts.data;
        if (props.newProducts.current_page !== props.newProducts.per_page) {
          stateBestSellingProducts.value.isShowLoadMore = true;
        }
      }
      if (props.allProducts) {
        stateAllProducts.value.data = props.allProducts.data;
        if (props.allProducts.current_page !== props.allProducts.per_page) {
          stateAllProducts.value.isShowLoadMore = true;
        }
      }
      isLoading.value = false;
    });
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
              title: meta.title,
              description: meta.description
            }, null, _parent2, _scopeId));
            _push2(`<div class="grid grid-cols-1 gap-4"${_scopeId}>`);
            if (__props.banners.length) {
              _push2(ssrRenderComponent(_sfc_main$3, {
                data: __props.banners,
                lang: __props.lang
              }, null, _parent2, _scopeId));
            } else {
              _push2(`<!---->`);
            }
            if (__props.categories.length) {
              _push2(ssrRenderComponent(_sfc_main$4, {
                data: __props.categories,
                lang: __props.lang
              }, null, _parent2, _scopeId));
            } else {
              _push2(`<!---->`);
            }
            if (stateBestSellingProducts.value.data.length) {
              _push2(ssrRenderComponent(_sfc_main$5, {
                slider: true,
                lang: __props.lang,
                data: stateBestSellingProducts.value.data,
                isLoadMore: stateBestSellingProducts.value.isLoadMore,
                isShowLoadMore: stateBestSellingProducts.value.isShowLoadMore,
                onFetch: fetchBestSellingProducts,
                heading: "\u041D\u0430\u0439\u043F\u043E\u043F\u0443\u043B\u044F\u0440\u043D\u0456\u0448\u0456"
              }, null, _parent2, _scopeId));
            } else {
              _push2(`<!---->`);
            }
            if (stateNewProducts.value.data.length) {
              _push2(ssrRenderComponent(_sfc_main$5, {
                slider: true,
                lang: __props.lang,
                data: stateNewProducts.value.data,
                isLoadMore: stateNewProducts.value.isLoadMore,
                isShowLoadMore: stateNewProducts.value.isShowLoadMore,
                onFetch: fetchNewProducts,
                heading: "\u041E\u0441\u0442\u0430\u043D\u043D\u0456 \u043D\u0430\u0434\u0445\u043E\u0434\u0436\u0435\u043D\u043D\u044F"
              }, null, _parent2, _scopeId));
            } else {
              _push2(`<!---->`);
            }
            if (stateAllProducts.value.data.length) {
              _push2(ssrRenderComponent(_sfc_main$5, {
                slider: true,
                lang: __props.lang,
                data: stateAllProducts.value.data,
                isLoadMore: stateAllProducts.value.isLoadMore,
                isShowLoadMore: stateAllProducts.value.isShowLoadMore,
                onFetch: fetchAllProducts,
                heading: "\u0423\u0441\u0456 \u0442\u043E\u0432\u0430\u0440\u0438"
              }, null, _parent2, _scopeId));
            } else {
              _push2(`<!---->`);
            }
            if (__props.advantages.length) {
              _push2(ssrRenderComponent(unref(Advantages), {
                lang: __props.lang,
                data: __props.advantages
              }, null, _parent2, _scopeId));
            } else {
              _push2(`<!---->`);
            }
            if (__props.reviews.length) {
              _push2(ssrRenderComponent(unref(AllReviewsCarousel), { data: __props.reviews }, null, _parent2, _scopeId));
            } else {
              _push2(`<!---->`);
            }
            if (__props.options.text_home_page_ua || __props.options.text_home_page_ru) {
              _push2(ssrRenderComponent(unref(Content), {
                data: __props.lang === "ua" ? __props.options.text_home_page_ua : __props.options.text_home_page_ru
              }, null, _parent2, _scopeId));
            } else {
              _push2(`<!---->`);
            }
            if (__props.faqs.length) {
              _push2(ssrRenderComponent(unref(FaqComponent), {
                lang: __props.lang,
                data: __props.faqs
              }, null, _parent2, _scopeId));
            } else {
              _push2(`<!---->`);
            }
            if (!unref(isLoading)) {
              _push2(ssrRenderComponent(unref(Support), null, null, _parent2, _scopeId));
            } else {
              _push2(`<!---->`);
            }
            _push2(`</div>`);
          } else {
            return [
              createVNode(_sfc_main$2, {
                title: meta.title,
                description: meta.description
              }, null, 8, ["title", "description"]),
              createVNode("div", { class: "grid grid-cols-1 gap-4" }, [
                __props.banners.length ? (openBlock(), createBlock(_sfc_main$3, {
                  key: 0,
                  data: __props.banners,
                  lang: __props.lang
                }, null, 8, ["data", "lang"])) : createCommentVNode("", true),
                __props.categories.length ? (openBlock(), createBlock(_sfc_main$4, {
                  key: 1,
                  data: __props.categories,
                  lang: __props.lang
                }, null, 8, ["data", "lang"])) : createCommentVNode("", true),
                stateBestSellingProducts.value.data.length ? (openBlock(), createBlock(_sfc_main$5, {
                  key: 2,
                  slider: true,
                  lang: __props.lang,
                  data: stateBestSellingProducts.value.data,
                  isLoadMore: stateBestSellingProducts.value.isLoadMore,
                  isShowLoadMore: stateBestSellingProducts.value.isShowLoadMore,
                  onFetch: fetchBestSellingProducts,
                  heading: "\u041D\u0430\u0439\u043F\u043E\u043F\u0443\u043B\u044F\u0440\u043D\u0456\u0448\u0456"
                }, null, 8, ["lang", "data", "isLoadMore", "isShowLoadMore"])) : createCommentVNode("", true),
                stateNewProducts.value.data.length ? (openBlock(), createBlock(_sfc_main$5, {
                  key: 3,
                  slider: true,
                  lang: __props.lang,
                  data: stateNewProducts.value.data,
                  isLoadMore: stateNewProducts.value.isLoadMore,
                  isShowLoadMore: stateNewProducts.value.isShowLoadMore,
                  onFetch: fetchNewProducts,
                  heading: "\u041E\u0441\u0442\u0430\u043D\u043D\u0456 \u043D\u0430\u0434\u0445\u043E\u0434\u0436\u0435\u043D\u043D\u044F"
                }, null, 8, ["lang", "data", "isLoadMore", "isShowLoadMore"])) : createCommentVNode("", true),
                stateAllProducts.value.data.length ? (openBlock(), createBlock(_sfc_main$5, {
                  key: 4,
                  slider: true,
                  lang: __props.lang,
                  data: stateAllProducts.value.data,
                  isLoadMore: stateAllProducts.value.isLoadMore,
                  isShowLoadMore: stateAllProducts.value.isShowLoadMore,
                  onFetch: fetchAllProducts,
                  heading: "\u0423\u0441\u0456 \u0442\u043E\u0432\u0430\u0440\u0438"
                }, null, 8, ["lang", "data", "isLoadMore", "isShowLoadMore"])) : createCommentVNode("", true),
                __props.advantages.length ? (openBlock(), createBlock(unref(Advantages), {
                  key: 5,
                  lang: __props.lang,
                  data: __props.advantages
                }, null, 8, ["lang", "data"])) : createCommentVNode("", true),
                __props.reviews.length ? (openBlock(), createBlock(unref(AllReviewsCarousel), {
                  key: 6,
                  data: __props.reviews
                }, null, 8, ["data"])) : createCommentVNode("", true),
                __props.options.text_home_page_ua || __props.options.text_home_page_ru ? (openBlock(), createBlock(unref(Content), {
                  key: 7,
                  data: __props.lang === "ua" ? __props.options.text_home_page_ua : __props.options.text_home_page_ru
                }, null, 8, ["data"])) : createCommentVNode("", true),
                __props.faqs.length ? (openBlock(), createBlock(unref(FaqComponent), {
                  key: 8,
                  lang: __props.lang,
                  data: __props.faqs
                }, null, 8, ["lang", "data"])) : createCommentVNode("", true),
                !unref(isLoading) ? (openBlock(), createBlock(unref(Support), { key: 9 })) : createCommentVNode("", true)
              ])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Public/Home/Index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
