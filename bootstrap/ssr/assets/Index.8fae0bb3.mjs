import { inject, ref, computed, onMounted, resolveComponent, mergeProps, withCtx, createTextVNode, unref, openBlock, createBlock, createCommentVNode, createVNode, Fragment, renderList, useSSRContext } from "vue";
import { ssrRenderComponent, ssrRenderList } from "vue/server-renderer";
import { startOfMonth, endOfMonth } from "date-fns";
import _sfc_main$3 from "./Chart.9ecb36f7.mjs";
import _sfc_main$1 from "./StatisticLayout.23465a14.mjs";
import _sfc_main$2 from "./Datepicker.fce2e4bd.mjs";
import _sfc_main$4 from "./Table.12694024.mjs";
import "vue-chart-3";
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
const _sfc_main = {
  __name: "Index",
  __ssrInlineRender: true,
  setup(__props) {
    inject("$swal");
    const can = inject("$can");
    const state = ref({
      data: [],
      chart: null,
      isLoading: true
    });
    const params = ref({
      date: [],
      currentPage: 1
    });
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
      params.value.date[0] = startOfMonth(new Date());
      params.value.date[1] = endOfMonth(new Date());
      fetch();
    });
    function fetch() {
      state.value.isLoading = true;
      axios.get(route("api.statistics.marketing.index", getParams.value)).then(({ data }) => {
        state.value.data = data;
        state.value.isLoading = false;
      }).catch((errors) => {
        console.log(errors);
        state.value.isLoading = false;
      });
      axios.get(route("api.statistics.marketing.chart", getParams.value)).then(({ data }) => state.value.chart = data.result).catch((errors) => console.log(errors));
    }
    return (_ctx, _push, _parent, _attrs) => {
      const _component_loader_component = resolveComponent("loader-component");
      const _component_label_component = resolveComponent("label-component");
      const _component_card_component = resolveComponent("card-component");
      const _component_pagination = resolveComponent("pagination");
      _push(ssrRenderComponent(_sfc_main$1, mergeProps({ title: "\u041C\u0430\u0440\u043A\u0435\u0442\u0438\u043D\u0433\u043E\u0432\u0430 \u0441\u0442\u0430\u0442\u0438\u0441\u0442\u0438\u043A\u0430" }, _attrs), {
        header: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` \u041C\u0430\u0440\u043A\u0435\u0442\u0438\u043D\u0433\u043E\u0432\u0430 \u0441\u0442\u0430\u0442\u0438\u0441\u0442\u0438\u043A\u0430 `);
          } else {
            return [
              createTextVNode(" \u041C\u0430\u0440\u043A\u0435\u0442\u0438\u043D\u0433\u043E\u0432\u0430 \u0441\u0442\u0430\u0442\u0438\u0441\u0442\u0438\u043A\u0430 ")
            ];
          }
        }),
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            if (state.value.isLoading) {
              _push2(ssrRenderComponent(_component_loader_component, null, null, _parent2, _scopeId));
            } else {
              _push2(`<!---->`);
            }
            if (!state.value.isLoading && unref(can)("show-bookkeeping-marketing")) {
              _push2(`<div class="grid grid-cols-1 gap-4"${_scopeId}><div class="block"${_scopeId}>`);
              _push2(ssrRenderComponent(_component_label_component, { value: "\u0424\u0456\u043B\u044C\u0442\u0440 \u043F\u043E \u0434\u0430\u0442\u0456" }, null, _parent2, _scopeId));
              _push2(ssrRenderComponent(_sfc_main$2, {
                modelValue: params.value.date,
                "onUpdate:modelValue": [($event) => params.value.date = $event, fetch]
              }, null, _parent2, _scopeId));
              _push2(`</div>`);
              if (state.value.chart) {
                _push2(ssrRenderComponent(_sfc_main$3, {
                  "chart-data": state.value.chart
                }, null, _parent2, _scopeId));
              } else {
                _push2(`<!---->`);
              }
              _push2(`<div class="grid grid-cols-2 md:grid-cols-4"${_scopeId}><!--[-->`);
              ssrRenderList(state.value.data.generalStat, (item, i) => {
                _push2(ssrRenderComponent(_component_card_component, {
                  class: "text-center",
                  title: i,
                  description: _ctx.$filters.formatMoney(item)
                }, null, _parent2, _scopeId));
              });
              _push2(`<!--]--></div>`);
              _push2(ssrRenderComponent(_sfc_main$4, {
                data: state.value.data.result.data
              }, null, _parent2, _scopeId));
              _push2(`<div class="text-center"${_scopeId}>`);
              _push2(ssrRenderComponent(_component_pagination, {
                pagination: state.value.data.result,
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
              state.value.isLoading ? (openBlock(), createBlock(_component_loader_component, { key: 0 })) : createCommentVNode("", true),
              !state.value.isLoading && unref(can)("show-bookkeeping-marketing") ? (openBlock(), createBlock("div", {
                key: 1,
                class: "grid grid-cols-1 gap-4"
              }, [
                createVNode("div", { class: "block" }, [
                  createVNode(_component_label_component, { value: "\u0424\u0456\u043B\u044C\u0442\u0440 \u043F\u043E \u0434\u0430\u0442\u0456" }),
                  createVNode(_sfc_main$2, {
                    modelValue: params.value.date,
                    "onUpdate:modelValue": [($event) => params.value.date = $event, fetch]
                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
                ]),
                state.value.chart ? (openBlock(), createBlock(_sfc_main$3, {
                  key: 0,
                  "chart-data": state.value.chart
                }, null, 8, ["chart-data"])) : createCommentVNode("", true),
                createVNode("div", { class: "grid grid-cols-2 md:grid-cols-4" }, [
                  (openBlock(true), createBlock(Fragment, null, renderList(state.value.data.generalStat, (item, i) => {
                    return openBlock(), createBlock(_component_card_component, {
                      class: "text-center",
                      title: i,
                      description: _ctx.$filters.formatMoney(item)
                    }, null, 8, ["title", "description"]);
                  }), 256))
                ]),
                createVNode(_sfc_main$4, {
                  data: state.value.data.result.data
                }, null, 8, ["data"]),
                createVNode("div", { class: "text-center" }, [
                  createVNode(_component_pagination, {
                    pagination: state.value.data.result,
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Admin/Statistics/Marketing/Index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
