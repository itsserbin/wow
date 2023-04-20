import { ref, inject, computed, onMounted, mergeProps, withCtx, createTextVNode, unref, toDisplayString, openBlock, createBlock, Fragment, renderList, createCommentVNode, createVNode, resolveDynamicComponent, useSSRContext } from "vue";
import { ssrRenderComponent, ssrRenderList, ssrInterpolate, ssrRenderVNode } from "vue/server-renderer";
import { s as swal } from "./swal-dcd03cbb.mjs";
import { C as ClientsRepository } from "./ClientsRepository-6987bf3f.mjs";
import _ from "lodash";
import { _ as _sfc_main$7 } from "./Paginate-33c38e45.mjs";
import { _ as _sfc_main$5 } from "./Search-9de81559.mjs";
import { L as Loader } from "./Loader-f9d3bebc.mjs";
import { S as Sidebar, _ as _sfc_main$4 } from "./SidebarItem-250f76bc.mjs";
import _sfc_main$2 from "./Modal-5eb23835.mjs";
import _sfc_main$1 from "./Modal-1cd98d90.mjs";
import _sfc_main$6 from "./Table-40f3b97c.mjs";
import _sfc_main$3 from "./CrmLayout-930eb191.mjs";
import "./XCircle-6a269edb.mjs";
import "./_plugin-vue_export-helper-cc2b3d55.mjs";
import "@inertiajs/inertia-vue3";
import "./Modal-8c93b79c.mjs";
import "./Form-72760ae9.mjs";
import "./ItemsTable-c4def1ef.mjs";
import "./Table-cc8335d6.mjs";
import "vue-i18n";
import "./Label-229c476a.mjs";
import "./Select-b70673dc.mjs";
import "./Input-4be85f13.mjs";
import "./Textarea-1805d9a6.mjs";
import "gsap";
import "./Form-b641e5bd.mjs";
import "./Card-1b507b9c.mjs";
import "./Checkbox-c87c898e.mjs";
import "./Button-6b2e52a5.mjs";
import "./Modal-bb91b53c.mjs";
import "./Form-33ee6e4d.mjs";
import "./Multiselect-c4e07430.mjs";
import "./Table-06933bae.mjs";
import "./ClientOrders-0b9d01ab.mjs";
import "./Table-73196fb2.mjs";
import "./Modal-14cd6130.mjs";
import "./Form-1c89bf99.mjs";
import "./AuthenticatedLayout-b7ba9f3b.mjs";
import "./ApplicationLogo-76725da6.mjs";
import "./Logo-21a2caa8.mjs";
import "@inertiajs/vue3";
import "vuex";
const OrdersRepository = () => {
  return {
    fetch: async function(params) {
      try {
        const response = await axios.get(route("api.orders.index", params));
        return response.data;
      } catch (err) {
        return console.error(err);
      }
    },
    edit: async function(id) {
      try {
        const response = await axios.get(route("api.orders.edit", id));
        return response.data;
      } catch (e) {
        return console.log(e);
      }
    },
    destroy: async function(id) {
      try {
        const response = await axios.delete(route("api.orders.destroy", id));
        return response.data;
      } catch (e) {
        return console.log(e);
      }
    },
    update: async function(id, data) {
      try {
        const response = await axios.put(route("api.orders.update", id), data);
        return response.data;
      } catch (e) {
        return console.log(e);
      }
    },
    search: async function(query) {
      try {
        const response = await axios.get(route("api.orders.search", query));
        return response.data;
      } catch (e) {
        return console.log(e);
      }
    }
  };
};
const _sfc_main = {
  __name: "Index",
  __ssrInlineRender: true,
  props: [
    "statuses",
    "payment_methods",
    "invoiceStatuses",
    "clientStatuses"
  ],
  setup(__props) {
    const props = __props;
    const state = ref({
      orders: [],
      currentPage: 1,
      isLoading: true,
      isActiveEditModal: false,
      isActiveClientModal: false,
      sidebarActive: "all",
      orderModal: {},
      clientModal: {},
      clientsStatuses: null,
      clientsSubStatuses: null
    });
    const sidebar = ref([]);
    const exportSidebar = [
      {
        title: "Експортувати",
        key: "export"
      }
    ];
    const can = inject("$can");
    const params = ref({
      status: null,
      currentPage: 1,
      orderBy: {
        key: null,
        val: null
      }
    });
    const getParams = computed(() => {
      const { currentPage, status = null, orderBy: orderBy2 = null } = params.value;
      return { page: currentPage, status, orderBy: orderBy2 };
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
      sidebar.value.push({ title: "Всі замовлення", key: "all" });
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
      axios.get(route("api.clients.statuses")).then(({ data }) => {
        state.value.clientsStatuses = data.statuses;
        state.value.clientsSubStatuses = data.subStatuses;
      });
    });
    const editModal = computed(() => state.value.isActiveEditModal ? _sfc_main$1 : null);
    const clientModal = computed(() => state.value.isActiveClientModal ? _sfc_main$2 : null);
    const fetch = async () => {
      try {
        const data = await OrdersRepository().fetch(getParams.value);
        if (data.success) {
          state.value.orders = data.result;
        }
        state.value.isLoading = false;
      } catch (e) {
        console.error(e);
        state.value.isLoading = false;
      }
    };
    const onEditClient = async () => {
      const data = await ClientsRepository.edit(state.value.orderModal.client.id);
      if (data.success) {
        state.value.clientModal = data.result;
        modalClientFunction();
      }
    };
    const exportFunction = (key) => {
      if (key === "export") {
        window.location.href = route("admin.crm.orders.export");
      }
    };
    const modalClientFunction = () => {
      state.value.isActiveClientModal = !state.value.isActiveClientModal;
    };
    const onUpdateClient = () => {
      axios.put(route("api.clients.update", state.value.clientModal.id), state.value.clientModal).then(() => {
        modalClientFunction();
        axios.put(route("api.orders.update", state.value.orderModal.id), state.value.orderModal).then(() => {
          axios.get(route("api.orders.edit", state.value.orderModal.id)).then(({ data }) => {
            state.value.orderModal = data.result;
            swal({
              title: "Success!",
              icon: "success"
            });
          }).catch((errors) => console.log(errors));
        });
      }).catch((errors) => {
        console.log(errors);
        swal({
          title: "Error!",
          icon: "error"
        });
      });
    };
    const submitItemForm = async () => {
      try {
        const { success } = await OrdersRepository().update(state.value.orderModal.id, state.value.orderModal);
        if (success) {
          const { result } = await OrdersRepository().edit(state.value.orderModal.id);
          state.value.orderModal = result;
        }
      } catch (errors) {
        console.error(errors);
        swal({
          title: "Error!",
          icon: "error",
          text: errors.response.data.message || "An error occurred, please try again later"
        });
      }
    };
    const sortByStatus = _.debounce((status) => {
      if (state.value.sidebarActive !== status) {
        params.value.orderBy = {
          key: null,
          val: null
        };
        state.value.sidebarActive = status;
        params.value.status = status === "all" ? null : status;
        fetch();
      }
    }, 250);
    const paginate = (page) => {
      params.value.currentPage = page ? page : params.value.currentPage;
      fetch();
    };
    const search = async (query) => {
      try {
        const { result, success } = await OrdersRepository().search(query);
        if (success) {
          state.value.sidebarActive = null;
          params.value.currentPage = 1;
          state.value.orders = result;
          state.value.isLoading = false;
        }
      } catch (errors) {
        console.error(errors);
        swal({
          title: "Error!",
          icon: "error",
          text: errors.response.data.message || "An error occurred, please try again later"
        });
      }
    };
    const destroy = async (id) => {
      try {
        if (can("destroy-orders")) {
          const confirm = await swal({
            title: "Видалити?",
            icon: "warning",
            showCancelButton: true
          });
          if (confirm.isConfirmed) {
            await OrdersRepository().destroy(id);
            state.value.isLoading = false;
            await fetch();
            if (state.value.isActiveEditModal) {
              editModalFunction();
            }
            swal({
              title: "Success!",
              icon: "success"
            });
          }
        }
      } catch (errors) {
        console.error(errors);
        swal({
          title: "Error!",
          icon: "error",
          text: errors.response.data.message || "An error occurred, please try again later"
        });
      }
    };
    const onEdit = async (id, i) => {
      try {
        const { result, success } = await OrdersRepository().edit(id);
        if (success) {
          state.value.orderModal.index = i;
          state.value.orderModal = result;
          editModalFunction();
          state.value.isLoading = false;
        }
      } catch (error) {
        state.value.isLoading = false;
        console.error(error);
        swal({
          title: "Error!",
          icon: "error",
          text: error.response.data.message || "An error occurred, please try again later"
        });
      }
    };
    const onUpdate = async () => {
      try {
        if (can("edit-orders")) {
          const { success } = await OrdersRepository().update(state.value.orderModal.id, state.value.orderModal);
          if (success) {
            editModalFunction();
            await fetch();
            swal({
              title: "Success!",
              icon: "success"
            });
          }
        }
      } catch (error) {
        state.value.isLoading = false;
        console.error(error);
        swal({
          title: "Error!",
          icon: "error",
          text: error.response.data.message || "An error occurred, please try again later"
        });
      }
    };
    const editModalFunction = () => {
      state.value.isActiveEditModal = !state.value.isActiveEditModal;
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(_sfc_main$3, mergeProps({ title: "Замовлення" }, _attrs), {
        header: withCtx((_2, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Замовлення `);
          } else {
            return [
              createTextVNode(" Замовлення ")
            ];
          }
        }),
        default: withCtx((_2, _push2, _parent2, _scopeId) => {
          if (_push2) {
            if (state.value.isLoading) {
              _push2(ssrRenderComponent(Loader, null, null, _parent2, _scopeId));
            } else {
              _push2(`<!---->`);
            }
            if (!state.value.isLoading && unref(can)("show-orders")) {
              _push2(`<div${_scopeId}><div class="grid grid-cols-1 md:grid-cols-5 gap-4"${_scopeId}><div class="md:col-span-1 gap-4"${_scopeId}>`);
              _push2(ssrRenderComponent(Sidebar, { class: "mb-5" }, {
                default: withCtx((_3, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    if (sidebar.value.length) {
                      _push3(`<!--[-->`);
                      ssrRenderList(sidebar.value, (item) => {
                        _push3(ssrRenderComponent(_sfc_main$4, {
                          onClick: ($event) => unref(sortByStatus)(item.key),
                          active: state.value.sidebarActive === item.key
                        }, {
                          default: withCtx((_4, _push4, _parent4, _scopeId3) => {
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
                        return openBlock(), createBlock(_sfc_main$4, {
                          onClick: ($event) => unref(sortByStatus)(item.key),
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
                  default: withCtx((_3, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      if (exportSidebar.length) {
                        _push3(`<!--[-->`);
                        ssrRenderList(exportSidebar, (item) => {
                          _push3(ssrRenderComponent(_sfc_main$4, {
                            onClick: ($event) => exportFunction(item.key)
                          }, {
                            default: withCtx((_4, _push4, _parent4, _scopeId3) => {
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
                          return createVNode(_sfc_main$4, {
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
              _push2(`</div><div class="w-full md:col-span-4 grid gap-4 grid-cols-1"${_scopeId}>`);
              _push2(ssrRenderComponent(_sfc_main$5, {
                onSearch: search,
                clear: true,
                placeholder: "Імʼя, прізвище, телефон, накладка, коментар..."
              }, null, _parent2, _scopeId));
              if (state.value.orders) {
                _push2(ssrRenderComponent(_sfc_main$6, {
                  data: state.value.orders.data,
                  onOnEdit: onEdit,
                  onOnDestroy: destroy,
                  onOrderBy: orderBy,
                  statuses: __props.statuses,
                  canDestroy: unref(can)("destroy-orders")
                }, null, _parent2, _scopeId));
              } else {
                _push2(`<!---->`);
              }
              _push2(`<div class="text-center"${_scopeId}>`);
              if (state.value.orders) {
                _push2(ssrRenderComponent(_sfc_main$7, {
                  pagination: state.value.orders,
                  "click-handler": paginate,
                  modelValue: state.value.currentPage,
                  "onUpdate:modelValue": ($event) => state.value.currentPage = $event
                }, null, _parent2, _scopeId));
              } else {
                _push2(`<!---->`);
              }
              _push2(`</div></div></div>`);
              ssrRenderVNode(_push2, createVNode(resolveDynamicComponent(unref(editModal)), {
                order: state.value.orderModal,
                statuses: props.statuses,
                invoiceStatuses: props.invoiceStatuses,
                paymentMethods: props.payment_methods,
                clientStatuses: props.clientStatuses,
                size: "extralarge",
                onCloseModal: editModalFunction,
                onDeclineForm: destroy,
                onSubmitForm: onUpdate,
                onSubmitItemForm: submitItemForm,
                canDestroy: unref(can)("destroy-orders"),
                onOnEditClient: onEditClient
              }, null), _parent2, _scopeId);
              ssrRenderVNode(_push2, createVNode(resolveDynamicComponent(unref(clientModal)), {
                item: state.value.clientModal,
                statuses: state.value.clientsStatuses,
                "sub-statuses": state.value.clientsSubStatuses,
                size: "extralarge",
                onCloseModal: modalClientFunction,
                onSubmitForm: onUpdateClient
              }, null), _parent2, _scopeId);
              _push2(`</div>`);
            } else {
              _push2(`<!---->`);
            }
          } else {
            return [
              state.value.isLoading ? (openBlock(), createBlock(Loader, { key: 0 })) : createCommentVNode("", true),
              !state.value.isLoading && unref(can)("show-orders") ? (openBlock(), createBlock("div", { key: 1 }, [
                createVNode("div", { class: "grid grid-cols-1 md:grid-cols-5 gap-4" }, [
                  createVNode("div", { class: "md:col-span-1 gap-4" }, [
                    createVNode(Sidebar, { class: "mb-5" }, {
                      default: withCtx(() => [
                        sidebar.value.length ? (openBlock(true), createBlock(Fragment, { key: 0 }, renderList(sidebar.value, (item) => {
                          return openBlock(), createBlock(_sfc_main$4, {
                            onClick: ($event) => unref(sortByStatus)(item.key),
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
                          return createVNode(_sfc_main$4, {
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
                  createVNode("div", { class: "w-full md:col-span-4 grid gap-4 grid-cols-1" }, [
                    createVNode(_sfc_main$5, {
                      onSearch: search,
                      clear: true,
                      placeholder: "Імʼя, прізвище, телефон, накладка, коментар..."
                    }),
                    state.value.orders ? (openBlock(), createBlock(_sfc_main$6, {
                      key: 0,
                      data: state.value.orders.data,
                      onOnEdit: onEdit,
                      onOnDestroy: destroy,
                      onOrderBy: orderBy,
                      statuses: __props.statuses,
                      canDestroy: unref(can)("destroy-orders")
                    }, null, 8, ["data", "statuses", "canDestroy"])) : createCommentVNode("", true),
                    createVNode("div", { class: "text-center" }, [
                      state.value.orders ? (openBlock(), createBlock(_sfc_main$7, {
                        key: 0,
                        pagination: state.value.orders,
                        "click-handler": paginate,
                        modelValue: state.value.currentPage,
                        "onUpdate:modelValue": ($event) => state.value.currentPage = $event
                      }, null, 8, ["pagination", "modelValue", "onUpdate:modelValue"])) : createCommentVNode("", true)
                    ])
                  ])
                ]),
                (openBlock(), createBlock(resolveDynamicComponent(unref(editModal)), {
                  order: state.value.orderModal,
                  statuses: props.statuses,
                  invoiceStatuses: props.invoiceStatuses,
                  paymentMethods: props.payment_methods,
                  clientStatuses: props.clientStatuses,
                  size: "extralarge",
                  onCloseModal: editModalFunction,
                  onDeclineForm: destroy,
                  onSubmitForm: onUpdate,
                  onSubmitItemForm: submitItemForm,
                  canDestroy: unref(can)("destroy-orders"),
                  onOnEditClient: onEditClient
                }, null, 40, ["order", "statuses", "invoiceStatuses", "paymentMethods", "clientStatuses", "canDestroy"])),
                (openBlock(), createBlock(resolveDynamicComponent(unref(clientModal)), {
                  item: state.value.clientModal,
                  statuses: state.value.clientsStatuses,
                  "sub-statuses": state.value.clientsSubStatuses,
                  size: "extralarge",
                  onCloseModal: modalClientFunction,
                  onSubmitForm: onUpdateClient
                }, null, 40, ["item", "statuses", "sub-statuses"]))
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Admin/Crm/Orders/Index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
