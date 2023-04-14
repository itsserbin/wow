import { inject, ref, computed, onMounted, resolveComponent, mergeProps, withCtx, createTextVNode, unref, openBlock, createBlock, createCommentVNode, createVNode, Fragment, renderList, useSSRContext } from "vue";
import { ssrRenderComponent, ssrRenderList } from "vue/server-renderer";
import { startOfMonth, endOfMonth } from "date-fns";
import _sfc_main$1 from "./StatisticLayout-bb4b69cb.mjs";
import _sfc_main$2 from "./Datepicker-df3f8ff5.mjs";
import _sfc_main$3 from "./Table-0fc75259.mjs";
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
    inject("$swal");
    const can = inject("$can");
    const state = ref({
      data: [],
      products: [],
      chart: null,
      isLoading: true
    });
    const products = ref([]);
    const params = ref({
      date: [],
      currentPage: 1
    });
    const productsArray = computed(() => {
      let products2 = [];
      state.value.products.forEach((item) => {
        products2.push(item.id);
      });
      return products2.join();
    });
    const getParams = computed(() => {
      const data = {};
      if (params.value.date.length === 2) {
        data.date_start = params.value.date[0].toLocaleDateString();
        data.date_end = params.value.date[1].toLocaleDateString();
      }
      if (productsArray.value) {
        data.products = productsArray.value;
      }
      data.page = params.value.currentPage;
      return data;
    });
    onMounted(() => {
      params.value.date[0] = startOfMonth(/* @__PURE__ */ new Date());
      params.value.date[1] = endOfMonth(/* @__PURE__ */ new Date());
      fetch();
      axios.get(route("api.products.list")).then(({ data }) => products.value = data.result).catch((response) => console.log(response));
    });
    function fetchClear() {
      params.value.date = [];
      state.value.products = [];
      fetch();
    }
    function h1AndCodeAndId({ h1, id }) {
      return h1.ua ? h1.ua + ` (${id})` : h1.ru ? h1.ru + ` (${id})` : id;
    }
    function paginate(page) {
      if (page) {
        params.value.currentPage = page;
      }
      fetch();
    }
    function search() {
      params.value.currentPage = 1;
      fetch();
    }
    function fetch() {
      state.value.isLoading = true;
      axios.get(route("api.statistics.products.index", getParams.value)).then(({ data }) => {
        state.value.data = data;
        state.value.isLoading = false;
      }).catch((errors) => {
        console.log(errors);
        state.value.isLoading = false;
      });
    }
    return (_ctx, _push, _parent, _attrs) => {
      const _component_loader_component = resolveComponent("loader-component");
      const _component_label_component = resolveComponent("label-component");
      const _component_button_component = resolveComponent("button-component");
      const _component_multiselect = resolveComponent("multiselect");
      const _component_card_component = resolveComponent("card-component");
      const _component_pagination = resolveComponent("pagination");
      _push(ssrRenderComponent(_sfc_main$1, mergeProps({ title: "Статистика товарів" }, _attrs), {
        header: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Статистика товарів `);
          } else {
            return [
              createTextVNode(" Статистика товарів ")
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
              _push2(`<div class="grid grid-cols-1 gap-4"${_scopeId}><div class="grid grid-cols-1 md:grid-cols-12 gap-4 mt-5"${_scopeId}><div class="block col-span-2 text-center"${_scopeId}>`);
              _push2(ssrRenderComponent(_component_label_component, { value: " " }, null, _parent2, _scopeId));
              _push2(ssrRenderComponent(_component_button_component, {
                type: "button",
                onClick: fetchClear
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(` Очистити `);
                  } else {
                    return [
                      createTextVNode(" Очистити ")
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(`</div><div class="block col-span-4"${_scopeId}>`);
              _push2(ssrRenderComponent(_component_label_component, { value: "Фільтр по даті" }, null, _parent2, _scopeId));
              _push2(ssrRenderComponent(_sfc_main$2, {
                modelValue: params.value.date,
                "onUpdate:modelValue": ($event) => params.value.date = $event
              }, null, _parent2, _scopeId));
              _push2(`</div><div class="block col-span-4"${_scopeId}>`);
              _push2(ssrRenderComponent(_component_label_component, { value: "Фільтр по менеджерам" }, null, _parent2, _scopeId));
              _push2(ssrRenderComponent(_component_multiselect, {
                modelValue: state.value.products,
                "onUpdate:modelValue": ($event) => state.value.products = $event,
                options: products.value,
                "custom-label": h1AndCodeAndId,
                placeholder: "Оберіть товари",
                "track-by": "id",
                searchable: true,
                "close-on-select": false,
                multiple: ""
              }, null, _parent2, _scopeId));
              _push2(`</div><div class="block col-span-2 text-center"${_scopeId}>`);
              _push2(ssrRenderComponent(_component_label_component, { value: " " }, null, _parent2, _scopeId));
              _push2(ssrRenderComponent(_component_button_component, {
                type: "button",
                onClick: search
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(` Пошук `);
                  } else {
                    return [
                      createTextVNode(" Пошук ")
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(`</div></div><div class="grid grid-cols-2 md:grid-cols-4"${_scopeId}><!--[-->`);
              ssrRenderList(state.value.data.generalStat, (item, i) => {
                _push2(ssrRenderComponent(_component_card_component, {
                  class: "text-center",
                  title: i,
                  description: item ? item : "0"
                }, null, _parent2, _scopeId));
              });
              _push2(`<!--]--></div>`);
              _push2(ssrRenderComponent(_sfc_main$3, {
                data: state.value.data.result.data
              }, null, _parent2, _scopeId));
              _push2(`<div class="text-center"${_scopeId}>`);
              _push2(ssrRenderComponent(_component_pagination, {
                pagination: state.value.data.result,
                "click-handler": paginate,
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
                createVNode("div", { class: "grid grid-cols-1 md:grid-cols-12 gap-4 mt-5" }, [
                  createVNode("div", { class: "block col-span-2 text-center" }, [
                    createVNode(_component_label_component, { value: " " }),
                    createVNode(_component_button_component, {
                      type: "button",
                      onClick: fetchClear
                    }, {
                      default: withCtx(() => [
                        createTextVNode(" Очистити ")
                      ]),
                      _: 1
                    })
                  ]),
                  createVNode("div", { class: "block col-span-4" }, [
                    createVNode(_component_label_component, { value: "Фільтр по даті" }),
                    createVNode(_sfc_main$2, {
                      modelValue: params.value.date,
                      "onUpdate:modelValue": ($event) => params.value.date = $event
                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                  ]),
                  createVNode("div", { class: "block col-span-4" }, [
                    createVNode(_component_label_component, { value: "Фільтр по менеджерам" }),
                    createVNode(_component_multiselect, {
                      modelValue: state.value.products,
                      "onUpdate:modelValue": ($event) => state.value.products = $event,
                      options: products.value,
                      "custom-label": h1AndCodeAndId,
                      placeholder: "Оберіть товари",
                      "track-by": "id",
                      searchable: true,
                      "close-on-select": false,
                      multiple: ""
                    }, null, 8, ["modelValue", "onUpdate:modelValue", "options"])
                  ]),
                  createVNode("div", { class: "block col-span-2 text-center" }, [
                    createVNode(_component_label_component, { value: " " }),
                    createVNode(_component_button_component, {
                      type: "button",
                      onClick: search
                    }, {
                      default: withCtx(() => [
                        createTextVNode(" Пошук ")
                      ]),
                      _: 1
                    })
                  ])
                ]),
                createVNode("div", { class: "grid grid-cols-2 md:grid-cols-4" }, [
                  (openBlock(true), createBlock(Fragment, null, renderList(state.value.data.generalStat, (item, i) => {
                    return openBlock(), createBlock(_component_card_component, {
                      class: "text-center",
                      title: i,
                      description: item ? item : "0"
                    }, null, 8, ["title", "description"]);
                  }), 256))
                ]),
                createVNode(_sfc_main$3, {
                  data: state.value.data.result.data
                }, null, 8, ["data"]),
                createVNode("div", { class: "text-center" }, [
                  createVNode(_component_pagination, {
                    pagination: state.value.data.result,
                    "click-handler": paginate,
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Admin/Statistics/Products/Index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
