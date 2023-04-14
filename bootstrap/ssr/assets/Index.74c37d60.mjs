import { inject, reactive, ref, computed, onMounted, resolveComponent, mergeProps, withCtx, createTextVNode, unref, toDisplayString, openBlock, createBlock, Fragment, renderList, createCommentVNode, createVNode, resolveDynamicComponent, useSSRContext } from "vue";
import { ssrRenderComponent, ssrRenderList, ssrInterpolate, ssrRenderVNode } from "vue/server-renderer";
import _sfc_main$1 from "./Modal.684ff0eb.mjs";
import _sfc_main$3 from "./Table.deccef13.mjs";
import _sfc_main$2 from "./CrmLayout.daa9a507.mjs";
import "crypto-js";
import "crypto-js/hmac-md5.js";
import "./Form.60f18618.mjs";
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
  props: ["statuses"],
  setup(__props) {
    const props = __props;
    const swal = inject("$swal");
    const can = inject("$can");
    const item = reactive({
      order_id: null,
      sum: null
    });
    const state = ref({
      data: [],
      isLoading: true,
      isActiveModal: false,
      modalAction: "",
      item: {},
      sidebarActive: "all"
    });
    const sidebar = ref([]);
    const params = ref({
      status: null,
      currentPage: 1
    });
    const getParams = computed(() => {
      const data = {};
      data.page = params.value.currentPage;
      if (params.value.status) {
        data.status = params.value.status;
      }
      return data;
    });
    onMounted(() => {
      fetch(1);
      sidebar.value.push({ title: "\u0412\u0441\u0456", key: "all" });
      for (const [key, value] of Object.entries(props.statuses)) {
        sidebar.value.push({
          title: value,
          key
        });
      }
    });
    const activeModal = computed(() => state.value.isActiveModal ? _sfc_main$1 : null);
    function sortByStatus(status) {
      state.value.sidebarActive = status;
      if (status === "all") {
        params.value.status = null;
      } else {
        params.value.status = status;
      }
      params.value.currentPage = 1;
      fetch();
    }
    function fetch(page) {
      state.value.isLoading = true;
      if (page) {
        state.value.currentPage = page;
      }
      axios.get(route("api.invoices.index", getParams.value)).then(({ data }) => {
        state.value.data = data.result;
        state.value.isLoading = false;
      }).catch((errors) => {
        console.log(errors);
        state.value.isLoading = false;
      });
    }
    function onDestroy(id) {
      if (can("destroy-invoices")) {
        swal({
          title: "\u0412\u0438\u0434\u0430\u043B\u0438\u0442\u0438?",
          icon: "warning",
          showCancelButton: true
        }).then((result) => {
          if (result.isConfirmed) {
            axios.delete(route("api.invoices.destroy", id)).then(() => {
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
    }
    function modalFunction() {
      state.value.isActiveModal = !state.value.isActiveModal;
    }
    function onEdit(id, i) {
      if (can("edit-invoices")) {
        axios.get(route("api.invoices.edit", id)).then(({ data }) => {
          state.value.item = data.result;
          state.value.modalAction = "edit";
          state.value.item.index = i;
          modalFunction();
        }).catch((response) => console.log(response));
      }
    }
    function onUpdate() {
      if (can("edit-invoices")) {
        axios.put(route("api.invoices.update", state.value.item.id), state.value.item).then(() => {
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
    }
    function onCreate() {
      if (can("create-invoices")) {
        axios.post(route("api.invoices.create"), state.value.item).then(({ data }) => {
          state.value.item = data.result;
          state.value.modalAction = "edit";
          modalFunction();
          fetch();
          navigator.clipboard.writeText(data.result.data.invoice_url);
          swal({
            title: "\u0423\u0441\u043F\u0456\u0448\u043D\u043E!",
            text: "\u0420\u0430\u0445\u0443\u043D\u043E\u043A \u0431\u0443\u0432 \u0443\u0441\u043F\u0456\u0448\u043D\u043E \u0441\u0442\u0432\u043E\u0440\u0435\u043D\u0438\u0439, \u043F\u043E\u0441\u0438\u043B\u0430\u043D\u043D\u044F \u043D\u0430 \u043E\u043F\u043B\u0430\u0442\u0443 \u0441\u043A\u043E\u043F\u0456\u0439\u043E\u0432\u0430\u043D\u043E \u0432 \u0431\u0443\u0444\u0435\u0440 \u043E\u0431\u043C\u0456\u043D\u0443",
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
    }
    function submitForm() {
      if (state.value.modalAction === "edit" && can("edit-invoices")) {
        onUpdate();
      } else if (state.value.modalAction === "create" && can("create-invoices")) {
        onCreate();
      }
    }
    function create() {
      if (can("create-invoices")) {
        state.value.item = item;
        state.value.modalAction = "create";
        modalFunction();
      }
    }
    function onSendInvoiceSms() {
      swal({
        title: "\u0423\u0441\u043F\u0456\u0448\u043D\u043E",
        text: "\u041F\u043E\u0441\u0438\u043B\u0430\u043D\u043D\u044F \u043D\u0430 \u043E\u043F\u043B\u0430\u0442\u0443 \u043D\u0430\u0434\u0456\u0441\u043B\u0430\u043D\u043E \u043A\u043B\u0456\u0454\u043D\u0442\u0443",
        icon: "success"
      });
      fetch();
    }
    return (_ctx, _push, _parent, _attrs) => {
      const _component_loader_component = resolveComponent("loader-component");
      const _component_sidebar_component = resolveComponent("sidebar-component");
      const _component_sidebar_item = resolveComponent("sidebar-item");
      const _component_button_component = resolveComponent("button-component");
      const _component_pagination = resolveComponent("pagination");
      _push(ssrRenderComponent(_sfc_main$2, mergeProps({ title: "\u0420\u0430\u0445\u0443\u043D\u043A\u0438" }, _attrs), {
        header: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`\u0420\u0430\u0445\u0443\u043D\u043A\u0438`);
          } else {
            return [
              createTextVNode("\u0420\u0430\u0445\u0443\u043D\u043A\u0438")
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
            if (!state.value.isLoading && unref(can)("show-invoices")) {
              _push2(`<div${_scopeId}><div class="grid grid-cols-1 md:grid-cols-5 gap-4"${_scopeId}><div class="md:col-span-1"${_scopeId}>`);
              _push2(ssrRenderComponent(_component_sidebar_component, null, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    if (sidebar.value.length) {
                      _push3(`<!--[-->`);
                      ssrRenderList(sidebar.value, (item2) => {
                        _push3(ssrRenderComponent(_component_sidebar_item, {
                          onClick: ($event) => sortByStatus(item2.key),
                          active: state.value.sidebarActive === item2.key
                        }, {
                          default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                            if (_push4) {
                              _push4(`${ssrInterpolate(item2.title)}`);
                            } else {
                              return [
                                createTextVNode(toDisplayString(item2.title), 1)
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
                      sidebar.value.length ? (openBlock(true), createBlock(Fragment, { key: 0 }, renderList(sidebar.value, (item2) => {
                        return openBlock(), createBlock(_component_sidebar_item, {
                          onClick: ($event) => sortByStatus(item2.key),
                          active: state.value.sidebarActive === item2.key
                        }, {
                          default: withCtx(() => [
                            createTextVNode(toDisplayString(item2.title), 1)
                          ]),
                          _: 2
                        }, 1032, ["onClick", "active"]);
                      }), 256)) : createCommentVNode("", true)
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(`</div><div class="w-full md:col-span-4 grid gap-4 grid-cols-1"${_scopeId}><div${_scopeId}>`);
              if (unref(can)("create-invoices")) {
                _push2(ssrRenderComponent(_component_button_component, {
                  type: "btn",
                  onClick: create
                }, {
                  default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(` \u0414\u043E\u0434\u0430\u0442\u0438 `);
                    } else {
                      return [
                        createTextVNode(" \u0414\u043E\u0434\u0430\u0442\u0438 ")
                      ];
                    }
                  }),
                  _: 1
                }, _parent2, _scopeId));
              } else {
                _push2(`<!---->`);
              }
              _push2(`</div>`);
              _push2(ssrRenderComponent(_sfc_main$3, {
                data: state.value.data.data,
                statuses: __props.statuses,
                onOnEdit: onEdit,
                onOnDestroy: onDestroy,
                "can-destroy": unref(can)("destroy-invoices"),
                onOnSendInvoiceSms: onSendInvoiceSms
              }, null, _parent2, _scopeId));
              _push2(`<div class="text-center"${_scopeId}>`);
              _push2(ssrRenderComponent(_component_pagination, {
                pagination: state.value.data,
                "click-handler": fetch,
                modelValue: params.value.currentPage,
                "onUpdate:modelValue": ($event) => params.value.currentPage = $event
              }, null, _parent2, _scopeId));
              _push2(`</div></div></div>`);
              ssrRenderVNode(_push2, createVNode(resolveDynamicComponent(unref(activeModal)), {
                item: state.value.item,
                onCloseModal: modalFunction,
                onSubmitForm: submitForm,
                onDeclineForm: onDestroy,
                statuses: __props.statuses,
                "can-destroy": unref(can)("destroy-invoices")
              }, null), _parent2, _scopeId);
              _push2(`</div>`);
            } else {
              _push2(`<!---->`);
            }
          } else {
            return [
              state.value.isLoading ? (openBlock(), createBlock(_component_loader_component, { key: 0 })) : createCommentVNode("", true),
              !state.value.isLoading && unref(can)("show-invoices") ? (openBlock(), createBlock("div", { key: 1 }, [
                createVNode("div", { class: "grid grid-cols-1 md:grid-cols-5 gap-4" }, [
                  createVNode("div", { class: "md:col-span-1" }, [
                    createVNode(_component_sidebar_component, null, {
                      default: withCtx(() => [
                        sidebar.value.length ? (openBlock(true), createBlock(Fragment, { key: 0 }, renderList(sidebar.value, (item2) => {
                          return openBlock(), createBlock(_component_sidebar_item, {
                            onClick: ($event) => sortByStatus(item2.key),
                            active: state.value.sidebarActive === item2.key
                          }, {
                            default: withCtx(() => [
                              createTextVNode(toDisplayString(item2.title), 1)
                            ]),
                            _: 2
                          }, 1032, ["onClick", "active"]);
                        }), 256)) : createCommentVNode("", true)
                      ]),
                      _: 1
                    })
                  ]),
                  createVNode("div", { class: "w-full md:col-span-4 grid gap-4 grid-cols-1" }, [
                    createVNode("div", null, [
                      unref(can)("create-invoices") ? (openBlock(), createBlock(_component_button_component, {
                        key: 0,
                        type: "btn",
                        onClick: create
                      }, {
                        default: withCtx(() => [
                          createTextVNode(" \u0414\u043E\u0434\u0430\u0442\u0438 ")
                        ]),
                        _: 1
                      })) : createCommentVNode("", true)
                    ]),
                    createVNode(_sfc_main$3, {
                      data: state.value.data.data,
                      statuses: __props.statuses,
                      onOnEdit: onEdit,
                      onOnDestroy: onDestroy,
                      "can-destroy": unref(can)("destroy-invoices"),
                      onOnSendInvoiceSms: onSendInvoiceSms
                    }, null, 8, ["data", "statuses", "can-destroy"]),
                    createVNode("div", { class: "text-center" }, [
                      createVNode(_component_pagination, {
                        pagination: state.value.data,
                        "click-handler": fetch,
                        modelValue: params.value.currentPage,
                        "onUpdate:modelValue": ($event) => params.value.currentPage = $event
                      }, null, 8, ["pagination", "modelValue", "onUpdate:modelValue"])
                    ])
                  ])
                ]),
                (openBlock(), createBlock(resolveDynamicComponent(unref(activeModal)), {
                  item: state.value.item,
                  onCloseModal: modalFunction,
                  onSubmitForm: submitForm,
                  onDeclineForm: onDestroy,
                  statuses: __props.statuses,
                  "can-destroy": unref(can)("destroy-invoices")
                }, null, 40, ["item", "statuses", "can-destroy"]))
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Admin/Crm/Invoices/Index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};