import { ref, inject, computed, onMounted, mergeProps, withCtx, createTextVNode, unref, toDisplayString, openBlock, createBlock, Fragment, renderList, createCommentVNode, createVNode, resolveDynamicComponent, useSSRContext } from "vue";
import { ssrRenderComponent, ssrRenderList, ssrInterpolate, ssrRenderVNode } from "vue/server-renderer";
import { L as Loader, S as Sidebar, s as _sfc_main$4, p as _sfc_main$5, j as _sfc_main$7 } from "../app2.mjs";
import _sfc_main$2 from "./Modal.5f690232.mjs";
import _sfc_main$1 from "./Modal.8f43d676.mjs";
import _sfc_main$6 from "./Table.d02b9496.mjs";
import _sfc_main$3 from "./CrmLayout.daa9a507.mjs";
import { C as ClientsRepository } from "./ClientsRepository.1920e366.mjs";
import _ from "lodash";
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
import "./Form.6f4b8d19.mjs";
import "./ItemsTable.e3d2647e.mjs";
import "gsap";
import "./Form.f6636f5b.mjs";
import "./Modal.8950875c.mjs";
import "./Form.5bb465ab.mjs";
import "./Table.f76c0f0e.mjs";
import "./ClientOrders.1a5b2550.mjs";
import "./Table.deccef13.mjs";
import "./Modal.684ff0eb.mjs";
import "./Form.60f18618.mjs";
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
        title: "\u0415\u043A\u0441\u043F\u043E\u0440\u0442\u0443\u0432\u0430\u0442\u0438",
        key: "export"
      }
    ];
    const swal = inject("$swal");
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
      sidebar.value.push({ title: "\u0412\u0441\u0456 \u0437\u0430\u043C\u043E\u0432\u043B\u0435\u043D\u043D\u044F", key: "all" });
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
            title: "\u0412\u0438\u0434\u0430\u043B\u0438\u0442\u0438?",
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
      _push(ssrRenderComponent(_sfc_main$3, mergeProps({ title: "\u0417\u0430\u043C\u043E\u0432\u043B\u0435\u043D\u043D\u044F" }, _attrs), {
        header: withCtx((_2, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` \u0417\u0430\u043C\u043E\u0432\u043B\u0435\u043D\u043D\u044F `);
          } else {
            return [
              createTextVNode(" \u0417\u0430\u043C\u043E\u0432\u043B\u0435\u043D\u043D\u044F ")
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
                placeholder: "\u0406\u043C\u02BC\u044F, \u043F\u0440\u0456\u0437\u0432\u0438\u0449\u0435, \u0442\u0435\u043B\u0435\u0444\u043E\u043D, \u043D\u0430\u043A\u043B\u0430\u0434\u043A\u0430, \u043A\u043E\u043C\u0435\u043D\u0442\u0430\u0440..."
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
                      placeholder: "\u0406\u043C\u02BC\u044F, \u043F\u0440\u0456\u0437\u0432\u0438\u0449\u0435, \u0442\u0435\u043B\u0435\u0444\u043E\u043D, \u043D\u0430\u043A\u043B\u0430\u0434\u043A\u0430, \u043A\u043E\u043C\u0435\u043D\u0442\u0430\u0440..."
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
