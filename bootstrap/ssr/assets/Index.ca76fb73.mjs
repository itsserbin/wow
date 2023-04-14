import { ref, onMounted, mergeProps, withCtx, createTextVNode, toDisplayString, createVNode, openBlock, createBlock, Fragment, renderList, createCommentVNode, useSSRContext } from "vue";
import { ssrRenderComponent, ssrRenderList, ssrInterpolate } from "vue/server-renderer";
import _sfc_main$3 from "./Breadcrumbs.dc298662.mjs";
import { _ as _sfc_main$1 } from "./MasterLayout.be7b21fc.mjs";
import _sfc_main$4 from "./Card.53f4160b.mjs";
import Loader from "./Loader.43a0c8e2.mjs";
import _sfc_main$5 from "./Button.ec6da28a.mjs";
import _sfc_main$2 from "./Head.9b78d2ae.mjs";
import "./Breadcrumbs.1a27781b.mjs";
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
import "moment";
import "./_plugin-vue_export-helper.43be4956.mjs";
import "@inertiajs/inertia-vue3";
const _sfc_main = {
  __name: "Index",
  __ssrInlineRender: true,
  props: {
    lang: String,
    categories: Array,
    options: Object,
    pages: Array,
    textLoadMore: {
      type: String,
      default: "\u0417\u0430\u0432\u0430\u043D\u0442\u0430\u0436\u0438\u0442\u0438 \u0449\u0435"
    },
    eventIdPageView: String
  },
  setup(__props) {
    const state = ref({
      reviews: [],
      isLoadingMore: false,
      showLoadMore: true,
      currentPage: 0,
      endpoint: "/api/v1/reviews/paginate-list?page="
    });
    onMounted(async () => {
      await fetch();
    });
    const fetch = async () => {
      state.value.isLoadingMore = true;
      axios.get(state.value.endpoint + (state.value.currentPage + 1)).then(({ data }) => {
        state.value.isLoadingMore = false;
        state.value.currentPage = data.result.current_page;
        state.value.reviews = state.value.reviews.concat(data.result.data);
        state.value.showLoadMore = data.result.to !== data.result.total;
      });
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
            _push2(ssrRenderComponent(_sfc_main$2, { title: "\u0412\u0456\u0434\u0433\u0443\u043A\u0438" }, null, _parent2, _scopeId));
            if (state.value.reviews.length) {
              _push2(`<div${_scopeId}>`);
              _push2(ssrRenderComponent(_sfc_main$3, {
                options: __props.options,
                lang: __props.lang,
                title: "\u0412\u0456\u0434\u0433\u0443\u043A\u0438"
              }, null, _parent2, _scopeId));
              _push2(`<h1 class="font-bold text-black text-center text-[24px] mb-[15px]"${_scopeId}> \u0412\u0456\u0434\u0433\u0443\u043A\u0438 </h1><!--[-->`);
              ssrRenderList(state.value.reviews, (item) => {
                _push2(ssrRenderComponent(_sfc_main$4, { item }, null, _parent2, _scopeId));
              });
              _push2(`<!--]-->`);
              if (state.value.showLoadMore) {
                _push2(`<div class="text-center"${_scopeId}>`);
                if (state.value.isLoadingMore) {
                  _push2(ssrRenderComponent(Loader, null, null, _parent2, _scopeId));
                } else {
                  _push2(`<!---->`);
                }
                if (!state.value.isLoadingMore) {
                  _push2(ssrRenderComponent(_sfc_main$5, {
                    onClick: fetch,
                    type: "button"
                  }, {
                    default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                      if (_push3) {
                        _push3(`${ssrInterpolate(__props.textLoadMore)}`);
                      } else {
                        return [
                          createTextVNode(toDisplayString(__props.textLoadMore), 1)
                        ];
                      }
                    }),
                    _: 1
                  }, _parent2, _scopeId));
                } else {
                  _push2(`<!---->`);
                }
                _push2(`</div>`);
              } else {
                _push2(`<!---->`);
              }
              _push2(`</div>`);
            } else {
              _push2(`<!---->`);
            }
          } else {
            return [
              createVNode(_sfc_main$2, { title: "\u0412\u0456\u0434\u0433\u0443\u043A\u0438" }),
              state.value.reviews.length ? (openBlock(), createBlock("div", { key: 0 }, [
                createVNode(_sfc_main$3, {
                  options: __props.options,
                  lang: __props.lang,
                  title: "\u0412\u0456\u0434\u0433\u0443\u043A\u0438"
                }, null, 8, ["options", "lang"]),
                createVNode("h1", { class: "font-bold text-black text-center text-[24px] mb-[15px]" }, " \u0412\u0456\u0434\u0433\u0443\u043A\u0438 "),
                (openBlock(true), createBlock(Fragment, null, renderList(state.value.reviews, (item) => {
                  return openBlock(), createBlock(_sfc_main$4, { item }, null, 8, ["item"]);
                }), 256)),
                state.value.showLoadMore ? (openBlock(), createBlock("div", {
                  key: 0,
                  class: "text-center"
                }, [
                  state.value.isLoadingMore ? (openBlock(), createBlock(Loader, { key: 0 })) : createCommentVNode("", true),
                  !state.value.isLoadingMore ? (openBlock(), createBlock(_sfc_main$5, {
                    key: 1,
                    onClick: fetch,
                    type: "button"
                  }, {
                    default: withCtx(() => [
                      createTextVNode(toDisplayString(__props.textLoadMore), 1)
                    ]),
                    _: 1
                  })) : createCommentVNode("", true)
                ])) : createCommentVNode("", true)
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Public/Reviews/Index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
