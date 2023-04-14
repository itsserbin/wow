import { ref, inject, onMounted, computed, mergeProps, withCtx, createTextVNode, unref, createVNode, openBlock, createBlock, createCommentVNode, useSSRContext } from "vue";
import { ssrRenderComponent } from "vue/server-renderer";
import _sfc_main$1 from "./StatisticLayout.23465a14.mjs";
import _sfc_main$3 from "./Chart.582bab23.mjs";
import _sfc_main$4 from "./Chart.ca294c9d.mjs";
import _sfc_main$2 from "./Datepicker.fce2e4bd.mjs";
import { startOfMonth, endOfMonth } from "date-fns";
import "../app2.mjs";
import "./vue.m.487fc989.mjs";
import "axios";
import "@inertiajs/inertia-vue3";
import "@inertiajs/progress";
import "./vendor.67403750.mjs";
import "vue-sweetalert2";
import "moment";
import "numeral";
import "@tinymce/tinymce-vue";
import "vue-i18n";
import "./_plugin-vue_export-helper.43be4956.mjs";
import "./Logo.5e8f1180.mjs";
import "@inertiajs/vue3";
import "vuex";
import "@vuepic/vue-datepicker";
import "chart.js";
import "vue-chart-3";
const _sfc_main = {
  __name: "Index",
  __ssrInlineRender: true,
  setup(__props) {
    const params = ref({
      date: [],
      page: 1
    });
    const can = inject("$can");
    const state = ref({
      costs: null,
      profits: null,
      orders: null,
      marketing: null
    });
    onMounted(() => {
      params.value.date[0] = startOfMonth(new Date());
      params.value.date[1] = endOfMonth(new Date());
      fetch();
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
      state.value.isLoading = true;
      axios.get(route("api.statistics.costs.chart", getParams.value)).then(({ data }) => state.value.costs = data.result).catch((errors) => console.log(errors));
      axios.get(route("api.statistics.profits.chart", getParams.value)).then(({ data }) => state.value.profits = data.result).catch((response) => console.log(response));
      axios.get(route("api.statistics.orders.chart", getParams.value)).then(({ data }) => state.value.orders = data.result).catch((response) => console.log(response));
      axios.get(route("api.statistics.marketing.chart", getParams.value)).then(({ data }) => state.value.marketing = data.result).catch((response) => console.log(response));
    }
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(_sfc_main$1, mergeProps({ title: "\u0421\u0442\u0430\u0442\u0438\u0441\u0442\u0438\u043A\u0430" }, _attrs), {
        header: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` \u0421\u0442\u0430\u0442\u0438\u0441\u0442\u0438\u043A\u0430 `);
          } else {
            return [
              createTextVNode(" \u0421\u0442\u0430\u0442\u0438\u0441\u0442\u0438\u043A\u0430 ")
            ];
          }
        }),
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="grid grid-cols-1 gap-4"${_scopeId}>`);
            _push2(ssrRenderComponent(_sfc_main$2, {
              modelValue: params.value.date,
              "onUpdate:modelValue": [($event) => params.value.date = $event, fetch]
            }, null, _parent2, _scopeId));
            _push2(`<div class="grid grid-cols-1 md:grid-cols-2 gap-4"${_scopeId}>`);
            if (unref(can)("show-bookkeeping-costs")) {
              _push2(`<div class="block"${_scopeId}><div class="text-lg text-gray-800 leading-tight dark:text-gray-300"${_scopeId}>\u0412\u0438\u0442\u0440\u0430\u0442\u0438</div><hr class="my-1"${_scopeId}>`);
              if (state.value.costs) {
                _push2(ssrRenderComponent(_sfc_main$3, {
                  chartData: state.value.costs
                }, null, _parent2, _scopeId));
              } else {
                _push2(`<!---->`);
              }
              _push2(`</div>`);
            } else {
              _push2(`<!---->`);
            }
            if (unref(can)("show-bookkeeping-profits")) {
              _push2(`<div class="div"${_scopeId}><div class="text-lg text-gray-800 leading-tight dark:text-gray-300"${_scopeId}>\u041F\u0440\u0438\u0431\u0443\u0442\u043E\u043A</div><hr class="my-1"${_scopeId}>`);
              if (state.value.profits) {
                _push2(ssrRenderComponent(_sfc_main$4, {
                  chartData: state.value.profits
                }, null, _parent2, _scopeId));
              } else {
                _push2(`<!---->`);
              }
              _push2(`</div>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`</div><div class="grid grid-cols-1 md:grid-cols-2 gap-4"${_scopeId}>`);
            if (unref(can)("show-bookkeeping-orders")) {
              _push2(`<div class="div"${_scopeId}><div class="text-lg text-gray-800 leading-tight dark:text-gray-300"${_scopeId}>\u0417\u0430\u044F\u0432\u043A\u0438</div><hr class="my-1"${_scopeId}>`);
              if (state.value.orders) {
                _push2(ssrRenderComponent(_sfc_main$4, {
                  chartData: state.value.orders
                }, null, _parent2, _scopeId));
              } else {
                _push2(`<!---->`);
              }
              _push2(`</div>`);
            } else {
              _push2(`<!---->`);
            }
            if (unref(can)("show-bookkeeping-marketing")) {
              _push2(`<div class="div"${_scopeId}><div class="text-lg text-gray-800 leading-tight dark:text-gray-300"${_scopeId}>\u041C\u0430\u0440\u043A\u0435\u0442\u0438\u043D\u0433</div><hr class="my-1"${_scopeId}>`);
              if (state.value.marketing) {
                _push2(ssrRenderComponent(_sfc_main$4, {
                  chartData: state.value.marketing
                }, null, _parent2, _scopeId));
              } else {
                _push2(`<!---->`);
              }
              _push2(`</div>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`</div></div>`);
          } else {
            return [
              createVNode("div", { class: "grid grid-cols-1 gap-4" }, [
                createVNode(_sfc_main$2, {
                  modelValue: params.value.date,
                  "onUpdate:modelValue": [($event) => params.value.date = $event, fetch]
                }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                createVNode("div", { class: "grid grid-cols-1 md:grid-cols-2 gap-4" }, [
                  unref(can)("show-bookkeeping-costs") ? (openBlock(), createBlock("div", {
                    key: 0,
                    class: "block"
                  }, [
                    createVNode("div", { class: "text-lg text-gray-800 leading-tight dark:text-gray-300" }, "\u0412\u0438\u0442\u0440\u0430\u0442\u0438"),
                    createVNode("hr", { class: "my-1" }),
                    state.value.costs ? (openBlock(), createBlock(_sfc_main$3, {
                      key: 0,
                      chartData: state.value.costs
                    }, null, 8, ["chartData"])) : createCommentVNode("", true)
                  ])) : createCommentVNode("", true),
                  unref(can)("show-bookkeeping-profits") ? (openBlock(), createBlock("div", {
                    key: 1,
                    class: "div"
                  }, [
                    createVNode("div", { class: "text-lg text-gray-800 leading-tight dark:text-gray-300" }, "\u041F\u0440\u0438\u0431\u0443\u0442\u043E\u043A"),
                    createVNode("hr", { class: "my-1" }),
                    state.value.profits ? (openBlock(), createBlock(_sfc_main$4, {
                      key: 0,
                      chartData: state.value.profits
                    }, null, 8, ["chartData"])) : createCommentVNode("", true)
                  ])) : createCommentVNode("", true)
                ]),
                createVNode("div", { class: "grid grid-cols-1 md:grid-cols-2 gap-4" }, [
                  unref(can)("show-bookkeeping-orders") ? (openBlock(), createBlock("div", {
                    key: 0,
                    class: "div"
                  }, [
                    createVNode("div", { class: "text-lg text-gray-800 leading-tight dark:text-gray-300" }, "\u0417\u0430\u044F\u0432\u043A\u0438"),
                    createVNode("hr", { class: "my-1" }),
                    state.value.orders ? (openBlock(), createBlock(_sfc_main$4, {
                      key: 0,
                      chartData: state.value.orders
                    }, null, 8, ["chartData"])) : createCommentVNode("", true)
                  ])) : createCommentVNode("", true),
                  unref(can)("show-bookkeeping-marketing") ? (openBlock(), createBlock("div", {
                    key: 1,
                    class: "div"
                  }, [
                    createVNode("div", { class: "text-lg text-gray-800 leading-tight dark:text-gray-300" }, "\u041C\u0430\u0440\u043A\u0435\u0442\u0438\u043D\u0433"),
                    createVNode("hr", { class: "my-1" }),
                    state.value.marketing ? (openBlock(), createBlock(_sfc_main$4, {
                      key: 0,
                      chartData: state.value.marketing
                    }, null, 8, ["chartData"])) : createCommentVNode("", true)
                  ])) : createCommentVNode("", true)
                ])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Admin/Statistics/Index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
