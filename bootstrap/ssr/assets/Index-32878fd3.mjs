import { inject, reactive, ref, computed, onMounted, resolveComponent, mergeProps, withCtx, createTextVNode, unref, createVNode, resolveDynamicComponent, openBlock, createBlock, createCommentVNode, Fragment, renderList, useSSRContext } from "vue";
import { ssrRenderComponent, ssrRenderList, ssrRenderVNode } from "vue/server-renderer";
import _sfc_main$1 from "./Modal-1e69ee26.mjs";
import _sfc_main$4 from "./Chart-c22bddfe.mjs";
import _sfc_main$5 from "./Table-da488173.mjs";
import _sfc_main$2 from "./StatisticLayout-bb4b69cb.mjs";
import _sfc_main$3 from "./Datepicker-df3f8ff5.mjs";
import { startOfMonth, endOfMonth } from "date-fns";
import "./Form-a35395ba.mjs";
import "vue-chart-3";
import "./Table-df76b95f.mjs";
import "./XCircle-df3891c5.mjs";
import "./AuthenticatedLayout-ff994435.mjs";
import "./ApplicationLogo-fe90ffe2.mjs";
import "./Logo-8552d818.mjs";
import "@inertiajs/vue3";
import "./NavLink-5de78266.mjs";
import "@inertiajs/inertia-vue3";
import "vuex";
import "./SidebarItem-250f76bc.mjs";
import "./_plugin-vue_export-helper-cc2b3d55.mjs";
const _sfc_main = {
  __name: "Index",
  __ssrInlineRender: true,
  setup(__props) {
    const swal = inject("$swal");
    const can = inject("$can");
    const item = reactive({
      name: null,
      date: null,
      sum: null,
      quantity: 1,
      comment: null,
      total: null,
      cost_category_id: null,
      cost_type: "single"
    });
    const state = ref({
      data: [],
      chart: [],
      isLoading: true,
      isActiveModal: false,
      modalAction: "",
      item: {}
    });
    const params = ref({
      date: [],
      page: 1
    });
    const costCategoriesOptions = ref([]);
    const getParams = computed(() => {
      const data = {};
      if (params.value.filter) {
        data.filter = params.value.filter;
      }
      if (params.value.date.length === 2) {
        data.date_start = params.value.date[0].toLocaleDateString();
        data.date_end = params.value.date[1].toLocaleDateString();
      }
      data.page = params.value.page;
      return data;
    });
    onMounted(() => {
      params.value.date[0] = startOfMonth(/* @__PURE__ */ new Date());
      params.value.date[1] = endOfMonth(/* @__PURE__ */ new Date());
      fetch();
      axios.get(route("api.statistics.costs.categories.list")).then(({ data }) => {
        data.result.forEach((item2) => {
          costCategoriesOptions.value.push({
            value: item2.title,
            key: item2.id
          });
        });
      }).catch((errors) => console.log(errors));
    });
    const activeModal = computed(() => state.value.isActiveModal ? _sfc_main$1 : null);
    function fetch() {
      state.value.isLoading = true;
      axios.get(route("api.statistics.costs.index", getParams.value)).then(({ data }) => {
        state.value.data = data;
        state.value.isLoading = false;
      }).catch((errors) => {
        console.log(errors);
        state.value.isLoading = false;
      });
      axios.get(route("api.statistics.costs.chart", getParams.value)).then(({ data }) => state.value.chart = data.result).catch((errors) => console.log(errors));
    }
    function onDestroy(id) {
      swal({
        title: "Видалити?",
        icon: "warning",
        showCancelButton: true
      }).then((result) => {
        if (result.isConfirmed) {
          axios.delete(route("api.statistics.costs.destroy", id)).then(() => {
            fetch();
            if (state.value.isActiveModal) {
              modalFunction();
            }
            swal({
              icon: "success",
              title: "Destroyed!"
            });
          }).catch((errors) => {
            console.log(errors);
            swal({
              icon: "error",
              title: "Error!"
            });
          });
        }
      });
    }
    function modalFunction() {
      state.value.isActiveModal = !state.value.isActiveModal;
    }
    function onEdit(id, i) {
      axios.get(route("api.statistics.costs.edit", id)).then(({ data }) => {
        state.value.item = data.result;
        state.value.modalAction = "edit";
        state.value.item.index = i;
        modalFunction();
      }).catch((response) => console.log(response));
    }
    function onUpdate() {
      axios.put(route("api.statistics.costs.update", state.value.item.id), state.value.item).then(() => {
        modalFunction();
        fetch();
        swal({
          title: "Success!",
          icon: "success"
        });
      }).catch((response) => {
        console.log(response);
        swal({
          title: "Error!",
          icon: "error"
        });
      });
    }
    function onCreate() {
      axios.post(route("api.statistics.costs.create"), state.value.item).then(() => {
        modalFunction();
        state.value.item = item;
        fetch();
        swal({
          title: "Success!",
          icon: "success"
        });
      }).catch((response) => {
        console.log(response);
        swal({
          title: "Error!",
          icon: "error"
        });
      });
    }
    function submitForm() {
      if (state.value.modalAction === "edit") {
        onUpdate();
      } else if (state.value.modalAction === "create") {
        onCreate();
      }
    }
    function create() {
      Object.assign(state.value.item, item);
      state.value.modalAction = "create";
      modalFunction();
    }
    return (_ctx, _push, _parent, _attrs) => {
      const _component_loader_component = resolveComponent("loader-component");
      const _component_button_component = resolveComponent("button-component");
      const _component_label_component = resolveComponent("label-component");
      const _component_select_component = resolveComponent("select-component");
      const _component_card_component = resolveComponent("card-component");
      const _component_pagination = resolveComponent("pagination");
      _push(ssrRenderComponent(_sfc_main$2, mergeProps({ title: "Витрати" }, _attrs), {
        header: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Витрати `);
          } else {
            return [
              createTextVNode(" Витрати ")
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
            if (!state.value.isLoading && unref(can)("show-bookkeeping-costs")) {
              _push2(`<div class="grid grid-cols-1 gap-4"${_scopeId}><div${_scopeId}>`);
              _push2(ssrRenderComponent(_component_button_component, {
                type: "btn",
                onClick: create
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(` Додати `);
                  } else {
                    return [
                      createTextVNode(" Додати ")
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(`</div><div class="grid grid-cols-1 md:grid-cols-2 gap-4 mt-5"${_scopeId}><div class="block"${_scopeId}>`);
              _push2(ssrRenderComponent(_component_label_component, { value: "Фільтр по категорії" }, null, _parent2, _scopeId));
              _push2(ssrRenderComponent(_component_select_component, {
                modelValue: params.value.filter,
                "onUpdate:modelValue": ($event) => params.value.filter = $event,
                options: costCategoriesOptions.value,
                onChange: fetch
              }, null, _parent2, _scopeId));
              _push2(`</div><div class="block"${_scopeId}>`);
              _push2(ssrRenderComponent(_component_label_component, { value: "Фільтр по даті" }, null, _parent2, _scopeId));
              _push2(ssrRenderComponent(_sfc_main$3, {
                modelValue: params.value.date,
                "onUpdate:modelValue": [($event) => params.value.date = $event, fetch]
              }, null, _parent2, _scopeId));
              _push2(`</div></div>`);
              if (state.value.chart) {
                _push2(ssrRenderComponent(_sfc_main$4, {
                  "chart-data": state.value.chart
                }, null, _parent2, _scopeId));
              } else {
                _push2(`<!---->`);
              }
              _push2(`<div class="grid grid-cols-2 md:grid-cols-6"${_scopeId}><!--[-->`);
              ssrRenderList(state.value.data.generalStat, (item2, i) => {
                _push2(ssrRenderComponent(_component_card_component, {
                  class: "text-center",
                  title: i,
                  description: _ctx.$filters.formatMoney(item2)
                }, null, _parent2, _scopeId));
              });
              _push2(`<!--]--></div>`);
              _push2(ssrRenderComponent(_sfc_main$5, {
                data: state.value.data.result.data,
                onOnDestroy: onDestroy,
                onOnEdit: onEdit
              }, null, _parent2, _scopeId));
              _push2(`<div class="text-center"${_scopeId}>`);
              _push2(ssrRenderComponent(_component_pagination, {
                pagination: state.value.data.result,
                "click-handler": fetch,
                modelValue: params.value.page,
                "onUpdate:modelValue": ($event) => params.value.page = $event
              }, null, _parent2, _scopeId));
              _push2(`</div>`);
              ssrRenderVNode(_push2, createVNode(resolveDynamicComponent(unref(activeModal)), {
                item: state.value.item,
                modalAction: state.value.modalAction,
                onCloseModal: modalFunction,
                onSubmitForm: submitForm,
                onDeclineForm: onDestroy
              }, null), _parent2, _scopeId);
              _push2(`</div>`);
            } else {
              _push2(`<!---->`);
            }
          } else {
            return [
              state.value.isLoading ? (openBlock(), createBlock(_component_loader_component, { key: 0 })) : createCommentVNode("", true),
              !state.value.isLoading && unref(can)("show-bookkeeping-costs") ? (openBlock(), createBlock("div", {
                key: 1,
                class: "grid grid-cols-1 gap-4"
              }, [
                createVNode("div", null, [
                  createVNode(_component_button_component, {
                    type: "btn",
                    onClick: create
                  }, {
                    default: withCtx(() => [
                      createTextVNode(" Додати ")
                    ]),
                    _: 1
                  })
                ]),
                createVNode("div", { class: "grid grid-cols-1 md:grid-cols-2 gap-4 mt-5" }, [
                  createVNode("div", { class: "block" }, [
                    createVNode(_component_label_component, { value: "Фільтр по категорії" }),
                    createVNode(_component_select_component, {
                      modelValue: params.value.filter,
                      "onUpdate:modelValue": ($event) => params.value.filter = $event,
                      options: costCategoriesOptions.value,
                      onChange: fetch
                    }, null, 8, ["modelValue", "onUpdate:modelValue", "options"])
                  ]),
                  createVNode("div", { class: "block" }, [
                    createVNode(_component_label_component, { value: "Фільтр по даті" }),
                    createVNode(_sfc_main$3, {
                      modelValue: params.value.date,
                      "onUpdate:modelValue": [($event) => params.value.date = $event, fetch]
                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                  ])
                ]),
                state.value.chart ? (openBlock(), createBlock(_sfc_main$4, {
                  key: 0,
                  "chart-data": state.value.chart
                }, null, 8, ["chart-data"])) : createCommentVNode("", true),
                createVNode("div", { class: "grid grid-cols-2 md:grid-cols-6" }, [
                  (openBlock(true), createBlock(Fragment, null, renderList(state.value.data.generalStat, (item2, i) => {
                    return openBlock(), createBlock(_component_card_component, {
                      class: "text-center",
                      title: i,
                      description: _ctx.$filters.formatMoney(item2)
                    }, null, 8, ["title", "description"]);
                  }), 256))
                ]),
                createVNode(_sfc_main$5, {
                  data: state.value.data.result.data,
                  onOnDestroy: onDestroy,
                  onOnEdit: onEdit
                }, null, 8, ["data"]),
                createVNode("div", { class: "text-center" }, [
                  createVNode(_component_pagination, {
                    pagination: state.value.data.result,
                    "click-handler": fetch,
                    modelValue: params.value.page,
                    "onUpdate:modelValue": ($event) => params.value.page = $event
                  }, null, 8, ["pagination", "modelValue", "onUpdate:modelValue"])
                ]),
                (openBlock(), createBlock(resolveDynamicComponent(unref(activeModal)), {
                  item: state.value.item,
                  modalAction: state.value.modalAction,
                  onCloseModal: modalFunction,
                  onSubmitForm: submitForm,
                  onDeclineForm: onDestroy
                }, null, 40, ["item", "modalAction"]))
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Admin/Statistics/Costs/Index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};