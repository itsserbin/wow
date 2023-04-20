import { inject, ref, computed, onMounted, mergeProps, withCtx, createTextVNode, unref, openBlock, createBlock, createCommentVNode, createVNode, Fragment, renderList, useSSRContext } from "vue";
import { ssrRenderComponent, ssrRenderList } from "vue/server-renderer";
import { startOfMonth, endOfMonth } from "date-fns";
import { _ as _sfc_main$3 } from "./Button-6b2e52a5.mjs";
import { _ as _sfc_main$7 } from "./Paginate-33c38e45.mjs";
import { _ as _sfc_main$5 } from "./Card-1b507b9c.mjs";
import { _ as _sfc_main$2 } from "./Label-229c476a.mjs";
import { L as Loader } from "./Loader-f9d3bebc.mjs";
import _sfc_main$1 from "./StatisticLayout-b1c1ad91.mjs";
import _sfc_main$4 from "./Datepicker-d51e85a4.mjs";
import _sfc_main$6 from "./Table-2e12acb0.mjs";
import { M as Multiselect } from "./Multiselect-c4e07430.mjs";
import "./_plugin-vue_export-helper-cc2b3d55.mjs";
import "./AuthenticatedLayout-b7ba9f3b.mjs";
import "./ApplicationLogo-76725da6.mjs";
import "./Logo-21a2caa8.mjs";
import "@inertiajs/inertia-vue3";
import "@inertiajs/vue3";
import "vuex";
import "./SidebarItem-250f76bc.mjs";
import "@vuepic/vue-datepicker";
import "./Table-cc8335d6.mjs";
const _sfc_main = {
  __name: "Index",
  __ssrInlineRender: true,
  setup(__props) {
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
              _push2(ssrRenderComponent(Loader, null, null, _parent2, _scopeId));
            } else {
              _push2(`<!---->`);
            }
            if (!state.value.isLoading && unref(can)("show-bookkeeping-marketing")) {
              _push2(`<div class="grid grid-cols-1 gap-4"${_scopeId}><div class="grid grid-cols-1 md:grid-cols-12 gap-4 mt-5"${_scopeId}><div class="block col-span-2 text-center"${_scopeId}>`);
              _push2(ssrRenderComponent(_sfc_main$2, { value: " " }, null, _parent2, _scopeId));
              _push2(ssrRenderComponent(_sfc_main$3, {
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
              _push2(ssrRenderComponent(_sfc_main$2, { value: "Фільтр по даті" }, null, _parent2, _scopeId));
              _push2(ssrRenderComponent(_sfc_main$4, {
                modelValue: params.value.date,
                "onUpdate:modelValue": ($event) => params.value.date = $event
              }, null, _parent2, _scopeId));
              _push2(`</div><div class="block col-span-4"${_scopeId}>`);
              _push2(ssrRenderComponent(_sfc_main$2, { value: "Фільтр по менеджерам" }, null, _parent2, _scopeId));
              _push2(ssrRenderComponent(Multiselect, {
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
              _push2(ssrRenderComponent(_sfc_main$2, { value: " " }, null, _parent2, _scopeId));
              _push2(ssrRenderComponent(_sfc_main$3, {
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
                _push2(ssrRenderComponent(_sfc_main$5, {
                  class: "text-center",
                  title: i,
                  description: item ? item : "0"
                }, null, _parent2, _scopeId));
              });
              _push2(`<!--]--></div>`);
              _push2(ssrRenderComponent(_sfc_main$6, {
                data: state.value.data.result.data
              }, null, _parent2, _scopeId));
              _push2(`<div class="text-center"${_scopeId}>`);
              _push2(ssrRenderComponent(_sfc_main$7, {
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
              state.value.isLoading ? (openBlock(), createBlock(Loader, { key: 0 })) : createCommentVNode("", true),
              !state.value.isLoading && unref(can)("show-bookkeeping-marketing") ? (openBlock(), createBlock("div", {
                key: 1,
                class: "grid grid-cols-1 gap-4"
              }, [
                createVNode("div", { class: "grid grid-cols-1 md:grid-cols-12 gap-4 mt-5" }, [
                  createVNode("div", { class: "block col-span-2 text-center" }, [
                    createVNode(_sfc_main$2, { value: " " }),
                    createVNode(_sfc_main$3, {
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
                    createVNode(_sfc_main$2, { value: "Фільтр по даті" }),
                    createVNode(_sfc_main$4, {
                      modelValue: params.value.date,
                      "onUpdate:modelValue": ($event) => params.value.date = $event
                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                  ]),
                  createVNode("div", { class: "block col-span-4" }, [
                    createVNode(_sfc_main$2, { value: "Фільтр по менеджерам" }),
                    createVNode(Multiselect, {
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
                    createVNode(_sfc_main$2, { value: " " }),
                    createVNode(_sfc_main$3, {
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
                    return openBlock(), createBlock(_sfc_main$5, {
                      class: "text-center",
                      title: i,
                      description: item ? item : "0"
                    }, null, 8, ["title", "description"]);
                  }), 256))
                ]),
                createVNode(_sfc_main$6, {
                  data: state.value.data.result.data
                }, null, 8, ["data"]),
                createVNode("div", { class: "text-center" }, [
                  createVNode(_sfc_main$7, {
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
