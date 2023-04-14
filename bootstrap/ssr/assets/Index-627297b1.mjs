import { defineComponent, ref, onMounted, withCtx, createTextVNode, toDisplayString, useSSRContext } from "vue";
import { ssrRenderComponent, ssrRenderList, ssrInterpolate } from "vue/server-renderer";
import _sfc_main$3 from "./Breadcrumbs-ab126d7f.mjs";
import _sfc_main$4 from "./Card-53485125.mjs";
import Loader from "./Loader-f0774e51.mjs";
import _sfc_main$5 from "./Button-e6d9c4d7.mjs";
import _sfc_main$2 from "./Head-671d76dc.mjs";
import { _ as _sfc_main$1 } from "./MasterLayout-bf4964bc.mjs";
import "./Breadcrumbs-adc4c20b.mjs";
import "moment";
import "./_plugin-vue_export-helper-cc2b3d55.mjs";
import "@inertiajs/inertia-vue3";
import "./Header-afe7698b.mjs";
import "./CartIcon-e2b4a7b1.mjs";
import "vuex";
import "./Langs-57d30b91.mjs";
import "./Logo-21a2caa8.mjs";
import "./HeaderCategories-391c289b.mjs";
import "swiper";
import "swiper/vue";
import "./Footer-e23e0d72.mjs";
import "./FixedBanner-285b457f.mjs";
import "./ScrollToTop-99a883e6.mjs";
import "./eventTracking-3e33368b.mjs";
const __default__ = defineComponent({ layout: _sfc_main$1 });
const _sfc_main = /* @__PURE__ */ Object.assign(__default__, {
  __name: "Index",
  __ssrInlineRender: true,
  props: {
    lang: String,
    categories: Array,
    options: Object,
    pages: Array,
    textLoadMore: {
      type: String,
      default: "Завантажити ще"
    }
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
      _push(`<!--[-->`);
      _push(ssrRenderComponent(_sfc_main$2, { title: "Відгуки" }, null, _parent));
      if (state.value.reviews.length) {
        _push(`<div>`);
        _push(ssrRenderComponent(_sfc_main$3, {
          "current-url": _ctx.route().current,
          options: __props.options,
          lang: __props.lang,
          title: "Відгуки"
        }, null, _parent));
        _push(`<h1 class="font-bold text-black text-center text-[24px] mb-[15px]"> Відгуки </h1><!--[-->`);
        ssrRenderList(state.value.reviews, (item) => {
          _push(ssrRenderComponent(_sfc_main$4, { item }, null, _parent));
        });
        _push(`<!--]-->`);
        if (state.value.showLoadMore) {
          _push(`<div class="text-center">`);
          if (state.value.isLoadingMore) {
            _push(ssrRenderComponent(Loader, null, null, _parent));
          } else {
            _push(`<!---->`);
          }
          if (!state.value.isLoadingMore) {
            _push(ssrRenderComponent(_sfc_main$5, {
              onClick: fetch,
              type: "button"
            }, {
              default: withCtx((_, _push2, _parent2, _scopeId) => {
                if (_push2) {
                  _push2(`${ssrInterpolate(__props.textLoadMore)}`);
                } else {
                  return [
                    createTextVNode(toDisplayString(__props.textLoadMore), 1)
                  ];
                }
              }),
              _: 1
            }, _parent));
          } else {
            _push(`<!---->`);
          }
          _push(`</div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div>`);
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Public/Reviews/Index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
