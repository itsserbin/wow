import { ref, onMounted, computed, resolveComponent, mergeProps, withCtx, createTextVNode, createVNode, openBlock, createBlock, Fragment, renderList, createCommentVNode, useSSRContext } from "vue";
import { ssrRenderComponent, ssrRenderList } from "vue/server-renderer";
import _sfc_main$2 from "./Chart-6df2e7c5.mjs";
import _sfc_main$3 from "./Indicators-5ad8d75b.mjs";
import _sfc_main$4 from "./Table-a7f0c8b1.mjs";
import _sfc_main$1 from "./Datepicker-df3f8ff5.mjs";
import { startOfMonth, endOfMonth } from "date-fns";
import "vue-chart-3";
const _sfc_main = {
  __name: "Dashboard",
  __ssrInlineRender: true,
  setup(__props) {
    const params = ref({
      date: [],
      page: 1
    });
    const orders = ref({
      table: null,
      indicators2: null,
      chart: null,
      indicators: null
    });
    const state = ref({
      statistics: []
    });
    onMounted(() => {
      params.value.date[0] = startOfMonth(/* @__PURE__ */ new Date());
      params.value.date[1] = endOfMonth(/* @__PURE__ */ new Date());
      fetch();
      axios.get(route("api.dashboard")).then(({ data }) => state.value.statistics = data.countOrders).catch((response) => console.log(response));
    });
    const getParams = computed(() => {
      const data = {};
      if (params.value.date.length === 2) {
        data.date_start = params.value.date[0].toLocaleDateString();
        data.date_end = params.value.date[1].toLocaleDateString();
      }
      data.page = params.value.page;
      return data;
    });
    function fetch() {
      axios.get(route("api.statistics.orders.index", getParams.value)).then(({ data }) => orders.value.table = data.result.data).catch((response) => console.log(response));
      axios.get(route("api.statistics.orders.chart", getParams.value)).then(({ data }) => orders.value.chart = data.result).catch((response) => console.log(response));
      axios.get(route("api.statistics.orders.indicators", getParams.value)).then(({ data }) => orders.value.indicators = data.result).catch((response) => console.log(response));
      axios.get(route("api.statistics.orders.indicators2", getParams.value)).then(({ data }) => orders.value.indicators2 = data.result).catch((response) => console.log(response));
    }
    return (_ctx, _push, _parent, _attrs) => {
      const _component_auth_layout = resolveComponent("auth-layout");
      const _component_card_component = resolveComponent("card-component");
      _push(ssrRenderComponent(_component_auth_layout, mergeProps({ title: "Dashboard" }, _attrs), {
        header: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Dashboard `);
          } else {
            return [
              createTextVNode(" Dashboard ")
            ];
          }
        }),
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="grid grid-cols-1 gap-4"${_scopeId}><div class="grid grid-cols-2 md:grid-cols-4 gap-4"${_scopeId}><!--[-->`);
            ssrRenderList(state.value.statistics, (item, i) => {
              _push2(ssrRenderComponent(_component_card_component, {
                class: "text-center",
                title: i,
                description: item ? item : "0"
              }, null, _parent2, _scopeId));
            });
            _push2(`<!--]--></div>`);
            _push2(ssrRenderComponent(_sfc_main$1, {
              modelValue: params.value.date,
              "onUpdate:modelValue": [($event) => params.value.date = $event, fetch]
            }, null, _parent2, _scopeId));
            if (orders.value.chart) {
              _push2(ssrRenderComponent(_sfc_main$2, {
                chartData: orders.value.chart
              }, null, _parent2, _scopeId));
            } else {
              _push2(`<!---->`);
            }
            if (orders.value.indicators) {
              _push2(ssrRenderComponent(_sfc_main$3, {
                data: orders.value.indicators
              }, null, _parent2, _scopeId));
            } else {
              _push2(`<!---->`);
            }
            if (orders.value.table) {
              _push2(ssrRenderComponent(_sfc_main$4, {
                data: orders.value.table
              }, null, _parent2, _scopeId));
            } else {
              _push2(`<!---->`);
            }
            _push2(`</div>`);
          } else {
            return [
              createVNode("div", { class: "grid grid-cols-1 gap-4" }, [
                createVNode("div", { class: "grid grid-cols-2 md:grid-cols-4 gap-4" }, [
                  (openBlock(true), createBlock(Fragment, null, renderList(state.value.statistics, (item, i) => {
                    return openBlock(), createBlock(_component_card_component, {
                      class: "text-center",
                      title: i,
                      description: item ? item : "0"
                    }, null, 8, ["title", "description"]);
                  }), 256))
                ]),
                createVNode(_sfc_main$1, {
                  modelValue: params.value.date,
                  "onUpdate:modelValue": [($event) => params.value.date = $event, fetch]
                }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                orders.value.chart ? (openBlock(), createBlock(_sfc_main$2, {
                  key: 0,
                  chartData: orders.value.chart
                }, null, 8, ["chartData"])) : createCommentVNode("", true),
                orders.value.indicators ? (openBlock(), createBlock(_sfc_main$3, {
                  key: 1,
                  data: orders.value.indicators
                }, null, 8, ["data"])) : createCommentVNode("", true),
                orders.value.table ? (openBlock(), createBlock(_sfc_main$4, {
                  key: 2,
                  data: orders.value.table
                }, null, 8, ["data"])) : createCommentVNode("", true)
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Admin/Dashboard.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
