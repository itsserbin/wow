import { inject, ref, onMounted, computed, resolveComponent, mergeProps, withCtx, createTextVNode, unref, createVNode, resolveDynamicComponent, openBlock, createBlock, createCommentVNode, useSSRContext } from "vue";
import { ssrRenderComponent, ssrRenderVNode } from "vue/server-renderer";
import _sfc_main$1 from "./Modal.defe2f8e.mjs";
import _sfc_main$2 from "./OptionsLayout.94904958.mjs";
import _sfc_main$3 from "./Table.aadacd82.mjs";
import "./Form.55b51b2e.mjs";
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
  setup(__props) {
    const swal = inject("$swal");
    const can = inject("$can");
    const item = {
      name: null,
      slug: null
    };
    const state = ref({
      data: [],
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
      axios.get(route("api.permissions.index", { "page": state.value.currentPage })).then((response) => {
        Object.assign(state.value.data, response.data.result);
        state.value.isLoading = false;
      }).catch((errors) => {
        console.log(errors);
        state.value.isLoading = false;
      });
    }
    function onDestroy(id) {
      if (can("destroy-permissions")) {
        swal({
          title: "\u0412\u0438\u0434\u0430\u043B\u0438\u0442\u0438?",
          icon: "warning",
          showCancelButton: true
        }).then((result) => {
          if (result.isConfirmed) {
            axios.delete(route("api.permissions.destroy", id)).then(() => {
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
      if (can("edit-permissions")) {
        axios.get(route("api.permissions.edit", id)).then(({ data }) => {
          state.value.item = data.result;
          state.value.modalAction = "edit";
          state.value.item.index = i;
          modalFunction();
        }).catch((response) => console.log(response));
      }
    }
    function onUpdate() {
      if (can("edit-permissions")) {
        axios.put(route("api.permissions.update", state.value.item.id), state.value.item).then(() => {
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
      if (can("create-permissions")) {
        axios.post(route("api.permissions.create"), state.value.item).then(() => {
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
      if (state.value.modalAction === "edit" && can("edit-permissions")) {
        onUpdate();
      } else if (state.value.modalAction === "create" && can("create-permissions")) {
        onCreate();
      }
    }
    function create() {
      if (can("create-permissions")) {
        Object.assign(state.value.item, item);
        state.value.modalAction = "create";
        modalFunction();
      }
    }
    return (_ctx, _push, _parent, _attrs) => {
      const _component_loader_component = resolveComponent("loader-component");
      const _component_button_component = resolveComponent("button-component");
      const _component_pagination = resolveComponent("pagination");
      _push(ssrRenderComponent(_sfc_main$2, mergeProps({ title: "\u041F\u0440\u0430\u0432\u0430" }, _attrs), {
        header: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` \u041F\u0440\u0430\u0432\u0430 `);
          } else {
            return [
              createTextVNode(" \u041F\u0440\u0430\u0432\u0430 ")
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
            if (!state.value.isLoading && unref(can)("show-permissions")) {
              _push2(`<div class="grid grid-cols-1 gap-4"${_scopeId}><div${_scopeId}>`);
              if (unref(can)("create-permissions")) {
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
                onOnEdit: onEdit,
                onOnDestroy: onDestroy,
                canDestroy: unref(can)("destroy-permissions")
              }, null, _parent2, _scopeId));
              _push2(`<div class="text-center"${_scopeId}>`);
              _push2(ssrRenderComponent(_component_pagination, {
                pagination: state.value.data,
                "click-handler": fetch,
                modelValue: state.value.currentPage,
                "onUpdate:modelValue": ($event) => state.value.currentPage = $event
              }, null, _parent2, _scopeId));
              _push2(`</div></div>`);
            } else {
              _push2(`<!---->`);
            }
            ssrRenderVNode(_push2, createVNode(resolveDynamicComponent(unref(activeModal)), {
              item: state.value.item,
              onCloseModal: modalFunction,
              onSubmitForm: submitForm,
              onDeclineForm: onDestroy,
              canDestroy: unref(can)("destroy-permissions")
            }, null), _parent2, _scopeId);
          } else {
            return [
              state.value.isLoading ? (openBlock(), createBlock(_component_loader_component, { key: 0 })) : createCommentVNode("", true),
              !state.value.isLoading && unref(can)("show-permissions") ? (openBlock(), createBlock("div", {
                key: 1,
                class: "grid grid-cols-1 gap-4"
              }, [
                createVNode("div", null, [
                  unref(can)("create-permissions") ? (openBlock(), createBlock(_component_button_component, {
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
                  onOnEdit: onEdit,
                  onOnDestroy: onDestroy,
                  canDestroy: unref(can)("destroy-permissions")
                }, null, 8, ["data", "canDestroy"]),
                createVNode("div", { class: "text-center" }, [
                  createVNode(_component_pagination, {
                    pagination: state.value.data,
                    "click-handler": fetch,
                    modelValue: state.value.currentPage,
                    "onUpdate:modelValue": ($event) => state.value.currentPage = $event
                  }, null, 8, ["pagination", "modelValue", "onUpdate:modelValue"])
                ])
              ])) : createCommentVNode("", true),
              (openBlock(), createBlock(resolveDynamicComponent(unref(activeModal)), {
                item: state.value.item,
                onCloseModal: modalFunction,
                onSubmitForm: submitForm,
                onDeclineForm: onDestroy,
                canDestroy: unref(can)("destroy-permissions")
              }, null, 40, ["item", "canDestroy"]))
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Admin/Options/Permissions/Index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
