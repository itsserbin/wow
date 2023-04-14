import { ref, computed, onMounted, mergeProps, withCtx, createTextVNode, unref, createVNode, openBlock, createBlock, createCommentVNode, useSSRContext } from "vue";
import { ssrRenderComponent, ssrRenderClass } from "vue/server-renderer";
import { i as isLoading } from "./load.3474ad71.mjs";
import Support from "./Support.92203d05.mjs";
import _sfc_main$a from "./Consultation.eb2d30e5.mjs";
import _sfc_main$9 from "./Content.9c005b77.mjs";
import _sfc_main$4 from "./Banners.284dbcd2.mjs";
import _sfc_main$8 from "./Products.5c862567.mjs";
import _sfc_main$6 from "./Sort.5e9a57ec.mjs";
import _sfc_main$7 from "./Filter.a4e5f806.mjs";
import { P as ProductsRepository } from "./ProductsRepository.36c53e36.mjs";
import _sfc_main$5 from "./Button.ec6da28a.mjs";
import { _ as _sfc_main$1 } from "./MasterLayout.be7b21fc.mjs";
import _sfc_main$3 from "./Breadcrumbs.d5f41fae.mjs";
import _sfc_main$2 from "./Head.bebd99ae.mjs";
import "./_plugin-vue_export-helper.43be4956.mjs";
import "./swal.a7da81d8.mjs";
import "swiper";
import "swiper/vue";
import "./Loader.43a0c8e2.mjs";
import "./ProductCards.0f12ca5a.mjs";
import "./ProductCard.5c4ddc79.mjs";
import "vuex";
import "@gtm-support/vue-gtm";
import "./Input.aac4ec2d.mjs";
import "./Accordion.635accb3.mjs";
import "./AccordionItem.ae8efcce.mjs";
import "gsap";
import "@vueform/slider";
import "./Header.4109ad68.mjs";
import "./CartIcon.79888d2e.mjs";
import "./Langs.3ba4b35e.mjs";
import "./Logo.5e8f1180.mjs";
import "./HeaderCategories.0e67c59a.mjs";
import "./Footer.5f194abc.mjs";
import "./FixedBanner.5b212d34.mjs";
import "./ScrollToTop.c4b9ced3.mjs";
import "./Breadcrumbs.1a27781b.mjs";
import "./Head.9b78d2ae.mjs";
import "@inertiajs/inertia-vue3";
const _sfc_main = {
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
              category: __props.category,
              lang: __props.lang
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$3, {
              options: __props.options,
              lang: __props.lang,
              title: __props.category.title[__props.lang]
            }, null, _parent2, _scopeId));
            _push2(`<div class="grid grid-cols-1 gap-4"${_scopeId}>`);
            if (__props.banners.length) {
              _push2(ssrRenderComponent(_sfc_main$4, {
                lang: __props.lang,
                data: __props.banners
              }, null, _parent2, _scopeId));
            } else {
              _push2(`<!---->`);
            }
            _push2(`<div class="flex justify-between md:justify-end items-center"${_scopeId}><div class="block md:hidden mr-2"${_scopeId}>`);
            _push2(ssrRenderComponent(_sfc_main$5, {
              type: "button",
              onClick: toggleFilter
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`\u0424\u0456\u043B\u044C\u0442\u0440\u0443\u0432\u0430\u0442\u0438`);
                } else {
                  return [
                    createTextVNode("\u0424\u0456\u043B\u044C\u0442\u0440\u0443\u0432\u0430\u0442\u0438")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div>`);
            _push2(ssrRenderComponent(_sfc_main$6, {
              modelValue: params.value.sort,
              "onUpdate:modelValue": ($event) => params.value.sort = $event,
              onSort
            }, null, _parent2, _scopeId));
            _push2(`</div><div class="grid grid-cols-12 gap-4"${_scopeId}><div class="${ssrRenderClass([{ "!block fixed h-full w-full z-50 overflow-y-scroll top-0 right-0": state.value.isShowFilter }, "filter hidden md:col-span-3 md:block"])}"${_scopeId}>`);
            if (Object.keys(__props.characteristics).length) {
              _push2(ssrRenderComponent(_sfc_main$7, {
                characteristics: __props.characteristics,
                lang: __props.lang,
                onFetch: filter,
                onClose: toggleFilter,
                isShow: state.value.isShowFilter
              }, null, _parent2, _scopeId));
            } else {
              _push2(`<!---->`);
            }
            _push2(`</div><div class="products col-span-12 md:col-span-9"${_scopeId}>`);
            if (state.value.products.length) {
              _push2(ssrRenderComponent(_sfc_main$8, {
                lang: __props.lang,
                title: __props.title,
                data: state.value.products,
                isLoadingMore: state.value.isLoadingMore,
                isShowLoadMore: state.value.isShowLoadMore,
                onFetch: fetch
              }, null, _parent2, _scopeId));
            } else {
              _push2(`<!---->`);
            }
            _push2(`</div></div>`);
            if (__props.text) {
              _push2(ssrRenderComponent(_sfc_main$9, { data: __props.text }, null, _parent2, _scopeId));
            } else {
              _push2(`<!---->`);
            }
            if (__props.consultation) {
              _push2(ssrRenderComponent(_sfc_main$a, null, null, _parent2, _scopeId));
            } else {
              _push2(`<!---->`);
            }
            if (!unref(isLoading)) {
              _push2(ssrRenderComponent(Support, null, null, _parent2, _scopeId));
            } else {
              _push2(`<!---->`);
            }
            _push2(`</div>`);
          } else {
            return [
              createVNode(_sfc_main$2, {
                category: __props.category,
                lang: __props.lang
              }, null, 8, ["category", "lang"]),
              createVNode(_sfc_main$3, {
                options: __props.options,
                lang: __props.lang,
                title: __props.category.title[__props.lang]
              }, null, 8, ["options", "lang", "title"]),
              createVNode("div", { class: "grid grid-cols-1 gap-4" }, [
                __props.banners.length ? (openBlock(), createBlock(_sfc_main$4, {
                  key: 0,
                  lang: __props.lang,
                  data: __props.banners
                }, null, 8, ["lang", "data"])) : createCommentVNode("", true),
                createVNode("div", { class: "flex justify-between md:justify-end items-center" }, [
                  createVNode("div", { class: "block md:hidden mr-2" }, [
                    createVNode(_sfc_main$5, {
                      type: "button",
                      onClick: toggleFilter
                    }, {
                      default: withCtx(() => [
                        createTextVNode("\u0424\u0456\u043B\u044C\u0442\u0440\u0443\u0432\u0430\u0442\u0438")
                      ]),
                      _: 1
                    })
                  ]),
                  createVNode(_sfc_main$6, {
                    modelValue: params.value.sort,
                    "onUpdate:modelValue": ($event) => params.value.sort = $event,
                    onSort
                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
                ]),
                createVNode("div", { class: "grid grid-cols-12 gap-4" }, [
                  createVNode("div", {
                    class: [{ "!block fixed h-full w-full z-50 overflow-y-scroll top-0 right-0": state.value.isShowFilter }, "filter hidden md:col-span-3 md:block"]
                  }, [
                    Object.keys(__props.characteristics).length ? (openBlock(), createBlock(_sfc_main$7, {
                      key: 0,
                      characteristics: __props.characteristics,
                      lang: __props.lang,
                      onFetch: filter,
                      onClose: toggleFilter,
                      isShow: state.value.isShowFilter
                    }, null, 8, ["characteristics", "lang", "isShow"])) : createCommentVNode("", true)
                  ], 2),
                  createVNode("div", { class: "products col-span-12 md:col-span-9" }, [
                    state.value.products.length ? (openBlock(), createBlock(_sfc_main$8, {
                      key: 0,
                      lang: __props.lang,
                      title: __props.title,
                      data: state.value.products,
                      isLoadingMore: state.value.isLoadingMore,
                      isShowLoadMore: state.value.isShowLoadMore,
                      onFetch: fetch
                    }, null, 8, ["lang", "title", "data", "isLoadingMore", "isShowLoadMore"])) : createCommentVNode("", true)
                  ])
                ]),
                __props.text ? (openBlock(), createBlock(_sfc_main$9, {
                  key: 1,
                  data: __props.text
                }, null, 8, ["data"])) : createCommentVNode("", true),
                __props.consultation ? (openBlock(), createBlock(_sfc_main$a, { key: 2 })) : createCommentVNode("", true),
                !unref(isLoading) ? (openBlock(), createBlock(Support, { key: 3 })) : createCommentVNode("", true)
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Public/Category/Index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
