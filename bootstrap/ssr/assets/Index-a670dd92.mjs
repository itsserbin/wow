import { inject, ref, computed, onMounted, mergeProps, withCtx, createTextVNode, unref, openBlock, createBlock, createCommentVNode, createVNode, useSSRContext } from "vue";
import { ssrRenderComponent } from "vue/server-renderer";
import { startOfMonth, endOfMonth } from "date-fns";
import { L as Loader } from "./Loader-f9d3bebc.mjs";
import { _ as _sfc_main$2 } from "./Label-229c476a.mjs";
import { _ as _sfc_main$7 } from "./Paginate-33c38e45.mjs";
import _sfc_main$4 from "./Chart-0e68e821.mjs";
import _sfc_main$6 from "./Table-d2b37bfa.mjs";
import _sfc_main$5 from "./Indicators-9187dc01.mjs";
import _sfc_main$1 from "./StatisticLayout-b1c1ad91.mjs";
import _sfc_main$3 from "./Datepicker-d51e85a4.mjs";
import "./_plugin-vue_export-helper-cc2b3d55.mjs";
import "chart.js";
import "vue-chart-3";
import "./Table-cc8335d6.mjs";
import "./Card-1b507b9c.mjs";
import "./AuthenticatedLayout-b7ba9f3b.mjs";
import "./ApplicationLogo-76725da6.mjs";
import "./Logo-21a2caa8.mjs";
import "@inertiajs/inertia-vue3";
import "@inertiajs/vue3";
import "vuex";
import "./SidebarItem-250f76bc.mjs";
import "@vuepic/vue-datepicker";
const _sfc_main = {
  __name: "Index",
  __ssrInlineRender: true,
  setup(__props) {
    const can = inject("$can");
    const state = ref({
      orders: [],
      chart: null,
      indicators: null,
      isLoading: true
    });
    const params = ref({
      date: [],
      currentPage: 1
    });
    ref([]);
    const getParams = computed(() => {
      const data = {};
      if (params.value.date.length === 2) {
        data.date_start = params.value.date[0].toLocaleDateString();
        data.date_end = params.value.date[1].toLocaleDateString();
      }
      data.page = params.value.currentPage;
      return data;
    });
    onMounted(() => {
      params.value.date[0] = startOfMonth(/* @__PURE__ */ new Date());
      params.value.date[1] = endOfMonth(/* @__PURE__ */ new Date());
      fetch();
    });
    function fetch() {
      state.value.isLoading = true;
      axios.get(route("api.statistics.orders.index", getParams.value)).then(({ data }) => {
        state.value.orders = data;
        state.value.isLoading = false;
      }).catch((errors) => {
        console.log(errors);
        state.value.isLoading = false;
      });
      axios.get(route("api.statistics.orders.chart", getParams.value)).then(({ data }) => state.value.chart = data.result).catch((response) => console.log(response));
      axios.get(route("api.statistics.orders.indicators", getParams.value)).then(({ data }) => state.value.indicators = data.result).catch((response) => console.log(response));
    }
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(_sfc_main$1, mergeProps({ title: "Статистика заявок" }, _attrs), {
        header: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Статистика заявок `);
          } else {
            return [
              createTextVNode(" Статистика заявок ")
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
            if (!state.value.isLoading && unref(can)("show-bookkeeping-orders")) {
              _push2(`<div class="grid grid-cols-1 gap-4"${_scopeId}><div class="block"${_scopeId}>`);
              _push2(ssrRenderComponent(_sfc_main$2, { value: "Фільтр по даті" }, null, _parent2, _scopeId));
              _push2(ssrRenderComponent(_sfc_main$3, {
                modelValue: params.value.date,
                "onUpdate:modelValue": [($event) => params.value.date = $event, fetch]
              }, null, _parent2, _scopeId));
              _push2(`</div>`);
              if (state.value.chart) {
                _push2(ssrRenderComponent(_sfc_main$4, {
                  "chart-data": state.value.chart
                }, null, _parent2, _scopeId));
              } else {
                _push2(`<!---->`);
              }
              _push2(ssrRenderComponent(_sfc_main$5, {
                data: state.value.indicators
              }, null, _parent2, _scopeId));
              _push2(ssrRenderComponent(_sfc_main$6, {
                data: state.value.orders.result.data
              }, null, _parent2, _scopeId));
              _push2(`<div class="text-center"${_scopeId}>`);
              _push2(ssrRenderComponent(_sfc_main$7, {
                pagination: state.value.orders.result,
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
              !state.value.isLoading && unref(can)("show-bookkeeping-orders") ? (openBlock(), createBlock("div", {
                key: 1,
                class: "grid grid-cols-1 gap-4"
              }, [
                createVNode("div", { class: "block" }, [
                  createVNode(_sfc_main$2, { value: "Фільтр по даті" }),
                  createVNode(_sfc_main$3, {
                    modelValue: params.value.date,
                    "onUpdate:modelValue": [($event) => params.value.date = $event, fetch]
                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
                ]),
                state.value.chart ? (openBlock(), createBlock(_sfc_main$4, {
                  key: 0,
                  "chart-data": state.value.chart
                }, null, 8, ["chart-data"])) : createCommentVNode("", true),
                createVNode(_sfc_main$5, {
                  data: state.value.indicators
                }, null, 8, ["data"]),
                createVNode(_sfc_main$6, {
                  data: state.value.orders.result.data
                }, null, 8, ["data"]),
                createVNode("div", { class: "text-center" }, [
                  createVNode(_sfc_main$7, {
                    pagination: state.value.orders.result,
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Admin/Statistics/Orders/Index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
