import { inject, ref, computed, onMounted, mergeProps, withCtx, createTextVNode, unref, openBlock, createBlock, createCommentVNode, createVNode, Fragment, renderList, useSSRContext } from "vue";
import { ssrRenderComponent, ssrRenderList } from "vue/server-renderer";
import { startOfMonth, endOfMonth } from "date-fns";
import { L as Loader } from "./Loader-f9d3bebc.mjs";
import { _ as _sfc_main$3 } from "./Card-1b507b9c.mjs";
import { _ as _sfc_main$5 } from "./Paginate-33c38e45.mjs";
import _sfc_main$4 from "./Table-e3b95194.mjs";
import _sfc_main$1 from "./StatisticLayout-de0c9a3b.mjs";
import _sfc_main$2 from "./Datepicker-d51e85a4.mjs";
import "./_plugin-vue_export-helper-cc2b3d55.mjs";
import "./Table-cc8335d6.mjs";
import "./AuthenticatedLayout-40cabe20.mjs";
import "./ApplicationLogo-76725da6.mjs";
import "./Logo-21a2caa8.mjs";
import "@inertiajs/inertia-vue3";
import "@inertiajs/vue3";
import "./SidebarItem-250f76bc.mjs";
import "@vuepic/vue-datepicker";
const _sfc_main = {
  __name: "Index",
  __ssrInlineRender: true,
  setup(__props) {
    const can = inject("$can");
    const state = ref({
      data: [],
      indicators: [],
      chart: null,
      isLoading: true
    });
    const params = ref({
      date: [],
      currentPage: 1
    });
    const dateRange = computed(() => {
      if (params.value.date.length === 2) {
        return {
          date_start: params.value.date[0].toLocaleDateString(),
          date_end: params.value.date[1].toLocaleDateString()
        };
      }
    });
    const last = computed(() => params.value.last);
    const getParams = computed(() => ({
      ...dateRange.value,
      last: last.value,
      page: params.value.currentPage
    }));
    onMounted(() => {
      params.value.date[0] = startOfMonth(/* @__PURE__ */ new Date());
      params.value.date[1] = endOfMonth(/* @__PURE__ */ new Date());
      fetch();
    });
    const fetch = async () => {
      state.value.isLoading = true;
      axios.get(route("api.statistics.refunds.index", getParams.value)).then(({ data }) => {
        state.value.data = data.result;
        state.value.isLoading = false;
      }).catch((response) => {
        console.log(response);
        state.value.isLoading = false;
      });
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(_sfc_main$1, mergeProps({ title: "Повернення" }, _attrs), {
        header: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Повернення `);
          } else {
            return [
              createTextVNode(" Повернення ")
            ];
          }
        }),
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            if (state.value.isLoading) {
              _push2(ssrRenderComponent(Loader, null, null, _parent2, _scopeId));
            } else {
              _push2(`<!---->`);
            }
            if (!state.value.isLoading && unref(can)("show-bookkeeping-refunds")) {
              _push2(`<div class="grid grid-cols-1 gap-4"${_scopeId}>`);
              _push2(ssrRenderComponent(_sfc_main$2, {
                modelValue: params.value.date,
                "onUpdate:modelValue": [($event) => params.value.date = $event, fetch]
              }, null, _parent2, _scopeId));
              _push2(`<div class="grid grid-cols-2 md:grid-cols-4"${_scopeId}><!--[-->`);
              ssrRenderList(state.value.indicatord, (item, i) => {
                _push2(ssrRenderComponent(_sfc_main$3, {
                  class: "text-center",
                  title: i,
                  description: _ctx.$filters.formatMoney(item)
                }, null, _parent2, _scopeId));
              });
              _push2(`<!--]--></div>`);
              _push2(ssrRenderComponent(_sfc_main$4, {
                data: state.value.data.data
              }, null, _parent2, _scopeId));
              _push2(`<div class="text-center"${_scopeId}>`);
              _push2(ssrRenderComponent(_sfc_main$5, {
                pagination: state.value.data,
                "click-handler": fetch,
                modelValue: params.value.currentPage,
                "onUpdate:modelValue": ($event) => params.value.currentPage = $event
              }, null, _parent2, _scopeId));
              _push2(`</div></div>`);
            } else {
              _push2(`<!---->`);
            }
          } else {
            return [
              state.value.isLoading ? (openBlock(), createBlock(Loader, { key: 0 })) : createCommentVNode("", true),
              !state.value.isLoading && unref(can)("show-bookkeeping-refunds") ? (openBlock(), createBlock("div", {
                key: 1,
                class: "grid grid-cols-1 gap-4"
              }, [
                createVNode(_sfc_main$2, {
                  modelValue: params.value.date,
                  "onUpdate:modelValue": [($event) => params.value.date = $event, fetch]
                }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                createVNode("div", { class: "grid grid-cols-2 md:grid-cols-4" }, [
                  (openBlock(true), createBlock(Fragment, null, renderList(state.value.indicatord, (item, i) => {
                    return openBlock(), createBlock(_sfc_main$3, {
                      class: "text-center",
                      title: i,
                      description: _ctx.$filters.formatMoney(item)
                    }, null, 8, ["title", "description"]);
                  }), 256))
                ]),
                createVNode(_sfc_main$4, {
                  data: state.value.data.data
                }, null, 8, ["data"]),
                createVNode("div", { class: "text-center" }, [
                  createVNode(_sfc_main$5, {
                    pagination: state.value.data,
                    "click-handler": fetch,
                    modelValue: params.value.currentPage,
                    "onUpdate:modelValue": ($event) => params.value.currentPage = $event
                  }, null, 8, ["pagination", "modelValue", "onUpdate:modelValue"])
                ])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Admin/Statistics/Refunds/Index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
