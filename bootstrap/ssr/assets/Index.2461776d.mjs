import { inject, ref, onMounted, computed, resolveComponent, mergeProps, withCtx, createTextVNode, unref, createVNode, resolveDynamicComponent, openBlock, createBlock, createCommentVNode, useSSRContext } from "vue";
import { ssrRenderComponent, ssrRenderVNode } from "vue/server-renderer";
import _sfc_main$1 from "./Modal.ececa2c1.mjs";
import _sfc_main$2 from "./OptionsLayout.94904958.mjs";
import _sfc_main$3 from "./Table.cb80a85e.mjs";
import "./Form.3358223c.mjs";
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
          title: "\u0412\u0438\u0434\u0430\u043B\u0438\u0442\u0438?",
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
      const _component_loader_component = resolveComponent("loader-component");
      const _component_button_component = resolveComponent("button-component");
      const _component_pagination = resolveComponent("pagination");
      _push(ssrRenderComponent(_sfc_main$2, mergeProps({ title: "\u041A\u043E\u043B\u044C\u043E\u0440\u0438" }, _attrs), {
        header: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` \u041A\u043E\u043B\u044C\u043E\u0440\u0438 `);
          } else {
            return [
              createTextVNode(" \u041A\u043E\u043B\u044C\u043E\u0440\u0438 ")
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
            if (!state.value.isLoading && unref(can)("show-sizes")) {
              _push2(`<div${_scopeId}>`);
              if (unref(can)("create-providers")) {
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
              _push2(ssrRenderComponent(_sfc_main$3, {
                data: state.value.sizes.data,
                onOnEdit: onEdit,
                onOnDestroy: onDestroy,
                canDestroy: unref(can)("destroy-sizes")
              }, null, _parent2, _scopeId));
              _push2(ssrRenderComponent(_component_pagination, {
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
              state.value.isLoading ? (openBlock(), createBlock(_component_loader_component, { key: 0 })) : createCommentVNode("", true),
              !state.value.isLoading && unref(can)("show-sizes") ? (openBlock(), createBlock("div", { key: 1 }, [
                unref(can)("create-providers") ? (openBlock(), createBlock(_component_button_component, {
                  key: 0,
                  type: "btn",
                  onClick: create
                }, {
                  default: withCtx(() => [
                    createTextVNode(" \u0414\u043E\u0434\u0430\u0442\u0438 ")
                  ]),
                  _: 1
                })) : createCommentVNode("", true),
                createVNode(_sfc_main$3, {
                  data: state.value.sizes.data,
                  onOnEdit: onEdit,
                  onOnDestroy: onDestroy,
                  canDestroy: unref(can)("destroy-sizes")
                }, null, 8, ["data", "canDestroy"]),
                createVNode(_component_pagination, {
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Admin/Options/Translations/Index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
