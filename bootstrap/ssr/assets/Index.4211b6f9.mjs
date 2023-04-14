import { inject, ref, computed, onMounted, mergeProps, withCtx, createTextVNode, toDisplayString, unref, openBlock, createBlock, Fragment, renderList, createCommentVNode, createVNode, resolveDynamicComponent, useSSRContext } from "vue";
import { ssrRenderComponent, ssrInterpolate, ssrRenderList, ssrRenderVNode } from "vue/server-renderer";
import _sfc_main$5 from "./Indicators.6cf36165.mjs";
import _sfc_main$1 from "./Modal.5f690232.mjs";
import _sfc_main$7 from "./Table.6812c344.mjs";
import _sfc_main$2 from "./CrmLayout.daa9a507.mjs";
import { S as Sidebar, s as _sfc_main$3, L as Loader, p as _sfc_main$6, j as _sfc_main$8 } from "../app2.mjs";
import _sfc_main$4 from "./Datepicker.fce2e4bd.mjs";
import { C as ClientsRepository } from "./ClientsRepository.1920e366.mjs";
import { useI18n } from "vue-i18n";
import "./Form.6f4b8d19.mjs";
import "./ItemsTable.e3d2647e.mjs";
import "./vue.m.487fc989.mjs";
import "axios";
import "@inertiajs/inertia-vue3";
import "@inertiajs/progress";
import "./vendor.67403750.mjs";
import "vue-sweetalert2";
import "moment";
import "numeral";
import "@tinymce/tinymce-vue";
import "./_plugin-vue_export-helper.43be4956.mjs";
import "./Logo.5e8f1180.mjs";
import "@inertiajs/vue3";
import "vuex";
import "@vuepic/vue-datepicker";
import "chart.js";
import "gsap";
import "date-fns";
const _sfc_main = {
  __name: "Index",
  __ssrInlineRender: true,
  props: ["statuses", "subStatuses", "orderStatuses"],
  setup(__props) {
    const props = __props;
    const { t } = useI18n();
    const swal = inject("$swal");
    const can = inject("$can");
    const sidebar = ref([]);
    const exportSidebar = [
      {
        title: t("clients.export"),
        key: "export"
      }
    ];
    const state = ref({
      data: [],
      indicators: {},
      isLoading: true,
      isActiveEditModal: false,
      sidebarActive: "all",
      modal: {}
    });
    const params = ref({
      status: null,
      currentPage: 1,
      orderBy: {
        key: null,
        val: null
      },
      date: []
    });
    const dateRange = computed(() => {
      if (params.value.date.length === 2) {
        return {
          date_start: params.value.date[0].toLocaleDateString(),
          date_end: params.value.date[1].toLocaleDateString()
        };
      }
    });
    const getParams = computed(() => {
      const { currentPage, status = null, orderBy: orderBy2 = null } = params.value;
      return { page: currentPage, status, orderBy: orderBy2, ...dateRange.value };
    });
    const orderBy = (key, val) => {
      params.value.orderBy = {
        key,
        val
      };
      params.value.currentPage = 1;
      fetch();
    };
    onMounted(() => {
      fetch();
      sidebar.value.push({ title: t("clients.all_clients"), key: "all" });
      for (const [key, value] of Object.entries(props.statuses)) {
        sidebar.value.push({
          title: value,
          key
        });
      }
      if (route().params.id) {
        state.value.isLoading = true;
        onEdit(route().params.id);
      }
    });
    const editModal = computed(() => state.value.isActiveEditModal ? _sfc_main$1 : null);
    const exportFunction = (key) => {
      if (key === "export") {
        window.location.href = route("admin.crm.clients.export");
      }
    };
    const search = async (query) => {
      state.value.isLoading = true;
      const data = await ClientsRepository.search(query);
      if (data.success) {
        state.value.sidebarActive = null;
        params.value.currentPage = 1;
        state.value.data = data.result;
        state.value.isLoading = false;
      }
      state.value.isLoading = false;
    };
    const sortByStatus = (status) => {
      state.value.sidebarActive = status;
      params.value.status = status === "all" ? null : status;
      params.value.date = [];
      params.value.currentPage = 1;
      fetch();
    };
    const sortByDate = async () => {
      params.value.currentPage = 1;
      await fetch();
    };
    const paginate = async (page) => {
      if (page) {
        params.value.currentPage = page;
      }
      await fetch();
    };
    const fetch = async () => {
      state.value.isLoading = true;
      const data = await ClientsRepository.fetch(getParams.value);
      if (data.success) {
        state.value.indicators = data.indicators;
        state.value.data = data.result;
        state.value.isLoading = false;
      }
    };
    const destroy = async (id) => {
      if (can("destroy-clients")) {
        const result = await swal({
          title: t("swal.sure"),
          icon: "warning",
          showCancelButton: true
        });
        if (result.isConfirmed) {
          const { success } = await ClientsRepository.destroy(id);
          if (success) {
            state.value.isLoading = false;
            await fetch();
            if (state.value.isActiveEditModal) {
              editModalFunction();
            }
            swal({
              title: t("swal.destroyed"),
              icon: "success"
            });
          }
        }
      }
    };
    const onEdit = async (id, i) => {
      state.value.isLoading = true;
      const data = await ClientsRepository.edit(id);
      if (data.success) {
        state.value.modal.index = i;
        state.value.modal = data.result;
        editModalFunction();
        state.value.isLoading = false;
      }
    };
    const onUpdate = async () => {
      const data = await ClientsRepository.update(state.value.modal);
      if (data.success) {
        editModalFunction();
        await fetch();
        swal({
          title: t("swal.updated"),
          icon: "success"
        });
      }
    };
    const editModalFunction = () => {
      state.value.isActiveEditModal = !state.value.isActiveEditModal;
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(_sfc_main$2, mergeProps({
        title: _ctx.$t("clients.page_title")
      }, _attrs), {
        header: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(_ctx.$t("clients.page_title"))}`);
          } else {
            return [
              createTextVNode(toDisplayString(_ctx.$t("clients.page_title")), 1)
            ];
          }
        }),
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            if (unref(can)("show-clients")) {
              _push2(`<div${_scopeId}><div class="grid grid-cols-1 md:grid-cols-5 gap-4"${_scopeId}><div class="md:col-span-1"${_scopeId}>`);
              _push2(ssrRenderComponent(Sidebar, { class: "mb-5" }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    if (sidebar.value.length) {
                      _push3(`<!--[-->`);
                      ssrRenderList(sidebar.value, (item) => {
                        _push3(ssrRenderComponent(_sfc_main$3, {
                          onClick: ($event) => sortByStatus(item.key),
                          active: state.value.sidebarActive === item.key
                        }, {
                          default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                            if (_push4) {
                              _push4(`${ssrInterpolate(item.title)}`);
                            } else {
                              return [
                                createTextVNode(toDisplayString(item.title), 1)
                              ];
                            }
                          }),
                          _: 2
                        }, _parent3, _scopeId2));
                      });
                      _push3(`<!--]-->`);
                    } else {
                      _push3(`<!---->`);
                    }
                  } else {
                    return [
                      sidebar.value.length ? (openBlock(true), createBlock(Fragment, { key: 0 }, renderList(sidebar.value, (item) => {
                        return openBlock(), createBlock(_sfc_main$3, {
                          onClick: ($event) => sortByStatus(item.key),
                          active: state.value.sidebarActive === item.key
                        }, {
                          default: withCtx(() => [
                            createTextVNode(toDisplayString(item.title), 1)
                          ]),
                          _: 2
                        }, 1032, ["onClick", "active"]);
                      }), 256)) : createCommentVNode("", true)
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              if (unref(can)("export-orders")) {
                _push2(ssrRenderComponent(Sidebar, null, {
                  default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      if (exportSidebar.length) {
                        _push3(`<!--[-->`);
                        ssrRenderList(exportSidebar, (item) => {
                          _push3(ssrRenderComponent(_sfc_main$3, {
                            onClick: ($event) => exportFunction(item.key)
                          }, {
                            default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                              if (_push4) {
                                _push4(`${ssrInterpolate(item.title)}`);
                              } else {
                                return [
                                  createTextVNode(toDisplayString(item.title), 1)
                                ];
                              }
                            }),
                            _: 2
                          }, _parent3, _scopeId2));
                        });
                        _push3(`<!--]-->`);
                      } else {
                        _push3(`<!---->`);
                      }
                    } else {
                      return [
                        exportSidebar.length ? (openBlock(), createBlock(Fragment, { key: 0 }, renderList(exportSidebar, (item) => {
                          return createVNode(_sfc_main$3, {
                            onClick: ($event) => exportFunction(item.key)
                          }, {
                            default: withCtx(() => [
                              createTextVNode(toDisplayString(item.title), 1)
                            ]),
                            _: 2
                          }, 1032, ["onClick"]);
                        }), 64)) : createCommentVNode("", true)
                      ];
                    }
                  }),
                  _: 1
                }, _parent2, _scopeId));
              } else {
                _push2(`<!---->`);
              }
              _push2(`</div><div class="md:col-span-4"${_scopeId}>`);
              if (state.value.isLoading) {
                _push2(ssrRenderComponent(Loader, null, null, _parent2, _scopeId));
              } else {
                _push2(`<!---->`);
              }
              if (!state.value.isLoading) {
                _push2(`<div class="w-full grid grid-cols-1 gap-4"${_scopeId}>`);
                _push2(ssrRenderComponent(_sfc_main$4, {
                  modelValue: params.value.date,
                  "onUpdate:modelValue": [($event) => params.value.date = $event, sortByDate]
                }, null, _parent2, _scopeId));
                _push2(ssrRenderComponent(_sfc_main$5, {
                  data: state.value.indicators
                }, null, _parent2, _scopeId));
                _push2(ssrRenderComponent(_sfc_main$6, {
                  onSearch: search,
                  clear: true,
                  placeholder: _ctx.$t("clients.search_placeholder")
                }, null, _parent2, _scopeId));
                _push2(ssrRenderComponent(_sfc_main$7, {
                  data: state.value.data.data,
                  onOnEdit: onEdit,
                  onOnDestroy: destroy,
                  onOrderBy: orderBy,
                  statuses: __props.statuses,
                  canDestroy: unref(can)("destroy-clients")
                }, null, _parent2, _scopeId));
                _push2(`<div class="text-center"${_scopeId}>`);
                _push2(ssrRenderComponent(_sfc_main$8, {
                  pagination: state.value.data,
                  "click-handler": paginate,
                  modelValue: params.value.currentPage,
                  "onUpdate:modelValue": ($event) => params.value.currentPage = $event
                }, null, _parent2, _scopeId));
                _push2(`</div></div>`);
              } else {
                _push2(`<!---->`);
              }
              _push2(`</div></div>`);
              ssrRenderVNode(_push2, createVNode(resolveDynamicComponent(unref(editModal)), {
                item: state.value.modal,
                statuses: __props.statuses,
                "sub-statuses": __props.subStatuses,
                "order-statuses": __props.orderStatuses,
                size: "extralarge",
                onCloseModal: editModalFunction,
                onDeclineForm: destroy,
                onSubmitForm: onUpdate,
                canDestroy: unref(can)("destroy-clients")
              }, null), _parent2, _scopeId);
              _push2(`</div>`);
            } else {
              _push2(`<!---->`);
            }
          } else {
            return [
              unref(can)("show-clients") ? (openBlock(), createBlock("div", { key: 0 }, [
                createVNode("div", { class: "grid grid-cols-1 md:grid-cols-5 gap-4" }, [
                  createVNode("div", { class: "md:col-span-1" }, [
                    createVNode(Sidebar, { class: "mb-5" }, {
                      default: withCtx(() => [
                        sidebar.value.length ? (openBlock(true), createBlock(Fragment, { key: 0 }, renderList(sidebar.value, (item) => {
                          return openBlock(), createBlock(_sfc_main$3, {
                            onClick: ($event) => sortByStatus(item.key),
                            active: state.value.sidebarActive === item.key
                          }, {
                            default: withCtx(() => [
                              createTextVNode(toDisplayString(item.title), 1)
                            ]),
                            _: 2
                          }, 1032, ["onClick", "active"]);
                        }), 256)) : createCommentVNode("", true)
                      ]),
                      _: 1
                    }),
                    unref(can)("export-orders") ? (openBlock(), createBlock(Sidebar, { key: 0 }, {
                      default: withCtx(() => [
                        exportSidebar.length ? (openBlock(), createBlock(Fragment, { key: 0 }, renderList(exportSidebar, (item) => {
                          return createVNode(_sfc_main$3, {
                            onClick: ($event) => exportFunction(item.key)
                          }, {
                            default: withCtx(() => [
                              createTextVNode(toDisplayString(item.title), 1)
                            ]),
                            _: 2
                          }, 1032, ["onClick"]);
                        }), 64)) : createCommentVNode("", true)
                      ]),
                      _: 1
                    })) : createCommentVNode("", true)
                  ]),
                  createVNode("div", { class: "md:col-span-4" }, [
                    state.value.isLoading ? (openBlock(), createBlock(Loader, { key: 0 })) : createCommentVNode("", true),
                    !state.value.isLoading ? (openBlock(), createBlock("div", {
                      key: 1,
                      class: "w-full grid grid-cols-1 gap-4"
                    }, [
                      createVNode(_sfc_main$4, {
                        modelValue: params.value.date,
                        "onUpdate:modelValue": [($event) => params.value.date = $event, sortByDate]
                      }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                      createVNode(_sfc_main$5, {
                        data: state.value.indicators
                      }, null, 8, ["data"]),
                      createVNode(_sfc_main$6, {
                        onSearch: search,
                        clear: true,
                        placeholder: _ctx.$t("clients.search_placeholder")
                      }, null, 8, ["placeholder"]),
                      createVNode(_sfc_main$7, {
                        data: state.value.data.data,
                        onOnEdit: onEdit,
                        onOnDestroy: destroy,
                        onOrderBy: orderBy,
                        statuses: __props.statuses,
                        canDestroy: unref(can)("destroy-clients")
                      }, null, 8, ["data", "statuses", "canDestroy"]),
                      createVNode("div", { class: "text-center" }, [
                        createVNode(_sfc_main$8, {
                          pagination: state.value.data,
                          "click-handler": paginate,
                          modelValue: params.value.currentPage,
                          "onUpdate:modelValue": ($event) => params.value.currentPage = $event
                        }, null, 8, ["pagination", "modelValue", "onUpdate:modelValue"])
                      ])
                    ])) : createCommentVNode("", true)
                  ])
                ]),
                (openBlock(), createBlock(resolveDynamicComponent(unref(editModal)), {
                  item: state.value.modal,
                  statuses: __props.statuses,
                  "sub-statuses": __props.subStatuses,
                  "order-statuses": __props.orderStatuses,
                  size: "extralarge",
                  onCloseModal: editModalFunction,
                  onDeclineForm: destroy,
                  onSubmitForm: onUpdate,
                  canDestroy: unref(can)("destroy-clients")
                }, null, 40, ["item", "statuses", "sub-statuses", "order-statuses", "canDestroy"]))
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Admin/Crm/Clients/Index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
