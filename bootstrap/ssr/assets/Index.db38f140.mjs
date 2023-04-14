import { inject, ref, computed, onMounted, mergeProps, withCtx, createTextVNode, unref, openBlock, createBlock, createCommentVNode, createVNode, Fragment, renderList, useSSRContext } from "vue";
import { ssrRenderComponent, ssrRenderList } from "vue/server-renderer";
import { startOfMonth, endOfMonth } from "date-fns";
import { L as Loader, o as _sfc_main$3, j as _sfc_main$5 } from "../app2.mjs";
import _sfc_main$4 from "./Table.281f2d04.mjs";
import _sfc_main$1 from "./StatisticLayout.23465a14.mjs";
import _sfc_main$2 from "./Datepicker.fce2e4bd.mjs";
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
      params.value.date[0] = startOfMonth(new Date());
      params.value.date[1] = endOfMonth(new Date());
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
      _push(ssrRenderComponent(_sfc_main$1, mergeProps({ title: "\u041F\u043E\u0432\u0435\u0440\u043D\u0435\u043D\u043D\u044F" }, _attrs), {
        header: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` \u041F\u043E\u0432\u0435\u0440\u043D\u0435\u043D\u043D\u044F `);
          } else {
            return [
              createTextVNode(" \u041F\u043E\u0432\u0435\u0440\u043D\u0435\u043D\u043D\u044F ")
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
