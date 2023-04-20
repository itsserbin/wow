import { inject, ref, onMounted, computed, mergeProps, withCtx, createTextVNode, unref, createVNode, resolveDynamicComponent, openBlock, createBlock, createCommentVNode, useSSRContext } from "vue";
import { ssrRenderComponent, ssrRenderVNode } from "vue/server-renderer";
import { s as swal } from "./swal-dcd03cbb.mjs";
import _sfc_main$1 from "./Modal-76a6b308.mjs";
import _sfc_main$2 from "./OptionsLayout-6faa4c69.mjs";
import _sfc_main$4 from "./Table-3de8e83a.mjs";
import { L as Loader } from "./Loader-f9d3bebc.mjs";
import { _ as _sfc_main$3 } from "./Button-6b2e52a5.mjs";
import { _ as _sfc_main$5 } from "./Paginate-33c38e45.mjs";
import "./Modal-8c93b79c.mjs";
import "./Form-d5f865ef.mjs";
import "./Label-229c476a.mjs";
import "./Input-4be85f13.mjs";
import "./Select-b70673dc.mjs";
import "./AuthenticatedLayout-b7ba9f3b.mjs";
import "./ApplicationLogo-76725da6.mjs";
import "./Logo-21a2caa8.mjs";
import "@inertiajs/inertia-vue3";
import "@inertiajs/vue3";
import "vuex";
import "./SidebarItem-250f76bc.mjs";
import "./_plugin-vue_export-helper-cc2b3d55.mjs";
import "./Table-cc8335d6.mjs";
import "./XCircle-6a269edb.mjs";
const _sfc_main = {
  __name: "Index",
  __ssrInlineRender: true,
  setup(__props) {
    const can = inject("$can");
    const item = {
      published: 0,
      title: null
    };
    const state = ref({
      sizes: [],
      currentPage: 1,
      isLoading: true,
      isActiveModal: false,
      modalAction: "",
      item: {}
    });
    onMounted(() => {
      fetch(1);
    });
    const activeModal = computed(() => state.value.isActiveModal ? _sfc_main$1 : null);
    function fetch(page) {
      state.value.isLoading = true;
      if (page) {
        state.value.currentPage = page;
      }
      axios.get(route("api.sizes.index", { "page": state.value.currentPage })).then((response) => {
        Object.assign(state.value.sizes, response.data.result);
        state.value.isLoading = false;
      }).catch((errors) => {
        console.log(errors);
        state.value.isLoading = false;
      });
    }
    function onDestroy(id) {
      if (can("destroy-sizes")) {
        swal({
          title: "Видалити?",
          icon: "warning",
          showCancelButton: true
        }).then((result) => {
          if (result.isConfirmed) {
            axios.delete(route("api.sizes.destroy", id)).then(() => {
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
      if (can("edit-sizes")) {
        axios.get(route("api.sizes.edit", id)).then(({ data }) => {
          state.value.item = data.result;
          state.value.modalAction = "edit";
          state.value.item.index = i;
          modalFunction();
        }).catch((response) => console.log(response));
      }
    }
    function onUpdate() {
      if (can("edit-sizes")) {
        axios.put(route("api.sizes.update", state.value.item.id), state.value.item).then(() => {
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
      if (can("create-sizes")) {
        axios.post(route("api.sizes.create"), state.value.item).then(() => {
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
    }
    function submitForm() {
      if (state.value.modalAction === "edit" && can("edit-sizes")) {
        onUpdate();
      } else if (state.value.modalAction === "create" && can("create-sizes")) {
        onCreate();
      }
    }
    function create() {
      if (can("create-sizes")) {
        Object.assign(state.value.item, item);
        state.value.modalAction = "create";
        modalFunction();
      }
    }
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(_sfc_main$2, mergeProps({ title: "Кольори" }, _attrs), {
        header: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Кольори `);
          } else {
            return [
              createTextVNode(" Кольори ")
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
            if (!state.value.isLoading && unref(can)("show-sizes")) {
              _push2(`<div${_scopeId}>`);
              if (unref(can)("create-providers")) {
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
              } else {
                _push2(`<!---->`);
              }
              _push2(ssrRenderComponent(_sfc_main$4, {
                data: state.value.sizes.data,
                onOnEdit: onEdit,
                onOnDestroy: onDestroy,
                canDestroy: unref(can)("destroy-sizes")
              }, null, _parent2, _scopeId));
              _push2(ssrRenderComponent(_sfc_main$5, {
                pagination: state.value.sizes,
                "click-handler": fetch,
                modelValue: state.value.currentPage,
                "onUpdate:modelValue": ($event) => state.value.currentPage = $event
              }, null, _parent2, _scopeId));
              ssrRenderVNode(_push2, createVNode(resolveDynamicComponent(unref(activeModal)), {
                item: state.value.item,
                onCloseModal: modalFunction,
                onSubmitForm: submitForm,
                onDeclineForm: onDestroy,
                canDestroy: unref(can)("destroy-sizes")
              }, null), _parent2, _scopeId);
              _push2(`</div>`);
            } else {
              _push2(`<!---->`);
            }
          } else {
            return [
              state.value.isLoading ? (openBlock(), createBlock(Loader, { key: 0 })) : createCommentVNode("", true),
              !state.value.isLoading && unref(can)("show-sizes") ? (openBlock(), createBlock("div", { key: 1 }, [
                unref(can)("create-providers") ? (openBlock(), createBlock(_sfc_main$3, {
                  key: 0,
                  type: "btn",
                  onClick: create
                }, {
                  default: withCtx(() => [
                    createTextVNode(" Додати ")
                  ]),
                  _: 1
                })) : createCommentVNode("", true),
                createVNode(_sfc_main$4, {
                  data: state.value.sizes.data,
                  onOnEdit: onEdit,
                  onOnDestroy: onDestroy,
                  canDestroy: unref(can)("destroy-sizes")
                }, null, 8, ["data", "canDestroy"]),
                createVNode(_sfc_main$5, {
                  pagination: state.value.sizes,
                  "click-handler": fetch,
                  modelValue: state.value.currentPage,
                  "onUpdate:modelValue": ($event) => state.value.currentPage = $event
                }, null, 8, ["pagination", "modelValue", "onUpdate:modelValue"]),
                (openBlock(), createBlock(resolveDynamicComponent(unref(activeModal)), {
                  item: state.value.item,
                  onCloseModal: modalFunction,
                  onSubmitForm: submitForm,
                  onDeclineForm: onDestroy,
                  canDestroy: unref(can)("destroy-sizes")
                }, null, 40, ["item", "canDestroy"]))
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Admin/Options/Sizes/Index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
