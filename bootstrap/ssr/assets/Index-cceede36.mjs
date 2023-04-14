import { inject, ref, computed, onMounted, resolveComponent, mergeProps, withCtx, createTextVNode, unref, openBlock, createBlock, createCommentVNode, createVNode, Fragment, renderList, useSSRContext } from "vue";
import { ssrRenderComponent, ssrRenderList } from "vue/server-renderer";
import _sfc_main$1 from "./StatisticLayout-d3c4002f.mjs";
import _sfc_main$2 from "./Datepicker-df3f8ff5.mjs";
import _sfc_main$3 from "./Table-4912c959.mjs";
import { startOfMonth, endOfMonth } from "date-fns";
import "./AuthenticatedLayout-9b92d88f.mjs";
import "./ApplicationLogo-76725da6.mjs";
import "./Logo-21a2caa8.mjs";
import "@inertiajs/inertia-vue3";
import "@inertiajs/vue3";
import "./NavLink-5de78266.mjs";
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
      managers: [],
      isLoading: true
    });
    const managers = ref([]);
    const endPoint = computed(() => {
      const data = {};
      if (params.value.date.length === 2) {
        data.date_start = params.value.date[0].toLocaleDateString();
        data.date_end = params.value.date[1].toLocaleDateString();
      }
      if (managersArray.value) {
        data.managers = managersArray.value;
      }
      data.page = params.value.currentPage;
      return route("api.statistics.managers.index", data);
    });
    const managersArray = computed(() => {
      let managers2 = [];
      state.value.managers.forEach((item) => {
        managers2.push(item.id);
      });
      return managers2.join();
    });
    const params = ref({
      date: [],
      managers: [],
      currentPage: 1
    });
    onMounted(() => {
      params.value.date[0] = startOfMonth(/* @__PURE__ */ new Date());
      params.value.date[1] = endOfMonth(/* @__PURE__ */ new Date());
      fetch();
      axios.get(route("api.users.list.managers")).then(({ data }) => managers.value = data.result).catch((response) => console.log(response));
    });
    function fetchClear() {
      params.value.managers = [];
      params.value.date = [];
      params.value.managers = [];
      state.value.managers = [];
      fetch();
    }
    function fetch() {
      state.value.isLoading = true;
      axios.get(endPoint.value).then(({ data }) => {
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
      _push(ssrRenderComponent(_sfc_main$1, mergeProps({ title: "Статистика для менеджерів" }, _attrs), {
        header: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Статистика для менеджерів `);
          } else {
            return [
              createTextVNode(" Статистика для менеджерів ")
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
            if (!state.value.isLoading && unref(can)("show-bookkeeping-managers")) {
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
                modelValue: state.value.managers,
                "onUpdate:modelValue": ($event) => state.value.managers = $event,
                options: managers.value,
                label: "name",
                placeholder: "Оберіть менеджерів",
                "track-by": "id",
                searchable: true,
                "close-on-select": false,
                multiple: ""
              }, null, _parent2, _scopeId));
              _push2(`</div><div class="block col-span-2 text-center"${_scopeId}>`);
              _push2(ssrRenderComponent(_component_label_component, { value: " " }, null, _parent2, _scopeId));
              _push2(ssrRenderComponent(_component_button_component, {
                type: "button",
                onClick: fetch
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
                  description: item
                }, null, _parent2, _scopeId));
              });
              _push2(`<!--]--></div>`);
              _push2(ssrRenderComponent(_sfc_main$3, {
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
              !state.value.isLoading && unref(can)("show-bookkeeping-managers") ? (openBlock(), createBlock("div", {
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
                      modelValue: state.value.managers,
                      "onUpdate:modelValue": ($event) => state.value.managers = $event,
                      options: managers.value,
                      label: "name",
                      placeholder: "Оберіть менеджерів",
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
                      onClick: fetch
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
                      description: item
                    }, null, 8, ["title", "description"]);
                  }), 256))
                ]),
                createVNode(_sfc_main$3, {
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Admin/Statistics/Managers/Index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
