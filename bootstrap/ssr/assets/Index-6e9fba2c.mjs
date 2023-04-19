import { inject, ref, onMounted, computed, reactive, mergeProps, withCtx, createTextVNode, unref, createVNode, toDisplayString, resolveDynamicComponent, openBlock, createBlock, createCommentVNode, useSSRContext } from "vue";
import { ssrRenderComponent, ssrInterpolate, ssrRenderVNode } from "vue/server-renderer";
import { s as swal } from "./swal-dcd03cbb.mjs";
import { _ as _sfc_main$6 } from "./Paginate-33c38e45.mjs";
import { L as Loader } from "./Loader-f9d3bebc.mjs";
import { _ as _sfc_main$3 } from "./Button-6b2e52a5.mjs";
import { _ as _sfc_main$4 } from "./Table-cc8335d6.mjs";
import { _ as _sfc_main$5 } from "./XCircle-6a269edb.mjs";
import _sfc_main$1 from "./Modal-61e62792.mjs";
import _sfc_main$2 from "./StatisticLayout-de0c9a3b.mjs";
import "./_plugin-vue_export-helper-cc2b3d55.mjs";
import "./Modal-8c93b79c.mjs";
import "./Form-e53ce70a.mjs";
import "./Label-229c476a.mjs";
import "./Input-4be85f13.mjs";
import "./AuthenticatedLayout-40cabe20.mjs";
import "./ApplicationLogo-76725da6.mjs";
import "./Logo-21a2caa8.mjs";
import "@inertiajs/inertia-vue3";
import "@inertiajs/vue3";
import "./SidebarItem-250f76bc.mjs";
const _sfc_main = {
  __name: "Index",
  __ssrInlineRender: true,
  setup(__props) {
    const can = inject("$can");
    const item = {
      title: null,
      slug: null,
      code: null
    };
    const state = ref({
      categories: [],
      isLoading: true,
      isActiveModal: false,
      modalAction: "",
      item: {},
      currentPage: 1
    });
    onMounted(async () => await fetch());
    const activeModal = computed(() => state.value.isActiveModal ? _sfc_main$1 : null);
    const headings = reactive([
      {
        label: "ID",
        key: "id"
      },
      {
        label: "Код ",
        key: "code"
      },
      {
        label: "Назва",
        key: "title"
      },
      {
        label: "Slug",
        key: "slug"
      },
      {
        label: "Оновлено<hr class='my-1'>Створено",
        key: "timestamps"
      },
      {
        label: "#",
        key: "actions"
      }
    ]);
    const fetch = async (page) => {
      state.value.isLoading = true;
      if (page) {
        state.value.currentPage = page;
      }
      await axios.get(route("api.statistics.costs.categories.index", {
        page: state.value.currentPage
      })).then(({ data }) => {
        state.value.categories = data.result;
        state.value.isLoading = false;
      }).catch((response) => {
        console.log(response);
        state.value.isLoading = false;
      });
    };
    function onDestroy(id) {
      if (can("show-bookkeeping-costs")) {
        swal({
          title: "Видалити?",
          icon: "warning",
          showCancelButton: true
        }).then((result) => {
          if (result.isConfirmed) {
            axios.delete(route("api.statistics.costs.categories.destroy", id)).then(() => {
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
      axios.get(route("api.statistics.costs.categories.edit", id)).then(({ data }) => {
        state.value.item = data.result;
        state.value.modalAction = "edit";
        state.value.item.index = i;
        modalFunction();
      }).catch((response) => console.log(response));
    }
    function onUpdate() {
      axios.put(route("api.statistics.costs.categories.update", state.value.item.id), state.value.item).then(() => {
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
      axios.post(route("api.statistics.costs.categories.create"), state.value.item).then(() => {
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
      _push(ssrRenderComponent(_sfc_main$2, mergeProps({ title: "Категорії витрат" }, _attrs), {
        header: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Категорії витрат `);
          } else {
            return [
              createTextVNode(" Категорії витрат ")
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
            if (!state.value.isLoading && unref(can)("show-bookkeeping-costs")) {
              _push2(`<div${_scopeId}>`);
              _push2(ssrRenderComponent(_sfc_main$3, {
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
              _push2(ssrRenderComponent(_sfc_main$4, {
                headings,
                rows: state.value.categories.data,
                isSlotMode: true
              }, {
                id: withCtx(({ data }, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<a href="javascript:"${_scopeId2}>${ssrInterpolate(data.row.id)}</a>`);
                  } else {
                    return [
                      createVNode("a", {
                        href: "javascript:",
                        onClick: ($event) => onEdit(data.row.id, data.i)
                      }, toDisplayString(data.row.id), 9, ["onClick"])
                    ];
                  }
                }),
                timestamps: withCtx(({ data }, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`${ssrInterpolate(_ctx.$filters.dateFormat(data.row.updated_at))} <hr class="my-1"${_scopeId2}> ${ssrInterpolate(_ctx.$filters.dateFormat(data.row.created_at))}`);
                  } else {
                    return [
                      createTextVNode(toDisplayString(_ctx.$filters.dateFormat(data.row.updated_at)) + " ", 1),
                      createVNode("hr", { class: "my-1" }),
                      createTextVNode(" " + toDisplayString(_ctx.$filters.dateFormat(data.row.created_at)), 1)
                    ];
                  }
                }),
                actions: withCtx(({ data }, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<a href="javascript:"${_scopeId2}>`);
                    _push3(ssrRenderComponent(_sfc_main$5, null, null, _parent3, _scopeId2));
                    _push3(`</a>`);
                  } else {
                    return [
                      createVNode("a", {
                        href: "javascript:",
                        onClick: ($event) => onDestroy(data.row.id)
                      }, [
                        createVNode(_sfc_main$5)
                      ], 8, ["onClick"])
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(ssrRenderComponent(_sfc_main$6, {
                pagination: state.value.categories,
                "click-handler": fetch,
                modelValue: state.value.currentPage,
                "onUpdate:modelValue": ($event) => state.value.currentPage = $event
              }, null, _parent2, _scopeId));
              ssrRenderVNode(_push2, createVNode(resolveDynamicComponent(unref(activeModal)), {
                item: state.value.item,
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
              state.value.isLoading ? (openBlock(), createBlock(Loader, { key: 0 })) : createCommentVNode("", true),
              !state.value.isLoading && unref(can)("show-bookkeeping-costs") ? (openBlock(), createBlock("div", { key: 1 }, [
                createVNode(_sfc_main$3, {
                  type: "btn",
                  onClick: create
                }, {
                  default: withCtx(() => [
                    createTextVNode(" Додати ")
                  ]),
                  _: 1
                }),
                createVNode(_sfc_main$4, {
                  headings,
                  rows: state.value.categories.data,
                  isSlotMode: true
                }, {
                  id: withCtx(({ data }) => [
                    createVNode("a", {
                      href: "javascript:",
                      onClick: ($event) => onEdit(data.row.id, data.i)
                    }, toDisplayString(data.row.id), 9, ["onClick"])
                  ]),
                  timestamps: withCtx(({ data }) => [
                    createTextVNode(toDisplayString(_ctx.$filters.dateFormat(data.row.updated_at)) + " ", 1),
                    createVNode("hr", { class: "my-1" }),
                    createTextVNode(" " + toDisplayString(_ctx.$filters.dateFormat(data.row.created_at)), 1)
                  ]),
                  actions: withCtx(({ data }) => [
                    createVNode("a", {
                      href: "javascript:",
                      onClick: ($event) => onDestroy(data.row.id)
                    }, [
                      createVNode(_sfc_main$5)
                    ], 8, ["onClick"])
                  ]),
                  _: 1
                }, 8, ["headings", "rows"]),
                createVNode(_sfc_main$6, {
                  pagination: state.value.categories,
                  "click-handler": fetch,
                  modelValue: state.value.currentPage,
                  "onUpdate:modelValue": ($event) => state.value.currentPage = $event
                }, null, 8, ["pagination", "modelValue", "onUpdate:modelValue"]),
                (openBlock(), createBlock(resolveDynamicComponent(unref(activeModal)), {
                  item: state.value.item,
                  onCloseModal: modalFunction,
                  onSubmitForm: submitForm,
                  onDeclineForm: onDestroy
                }, null, 40, ["item"]))
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Admin/Statistics/CostCategories/Index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
