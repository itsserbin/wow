import { inject, reactive, ref, onMounted, computed, resolveComponent, mergeProps, withCtx, createTextVNode, unref, createVNode, resolveDynamicComponent, openBlock, createBlock, createCommentVNode, useSSRContext } from "vue";
import { ssrRenderComponent, ssrRenderVNode } from "vue/server-renderer";
import _sfc_main$1 from "./Modal.6cea83c3.mjs";
import _sfc_main$2 from "./OptionsLayout.94904958.mjs";
import _sfc_main$3 from "./Table.178c7adf.mjs";
import "./Form.201f45d7.mjs";
import "./UploadBannersInput.e69e8658.mjs";
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
    const item = reactive({
      title: {
        ua: null,
        ru: null
      },
      image_mobile: {
        ua: null,
        ru: null
      },
      image_table: {
        ua: null,
        ru: null
      },
      image_desktop: {
        ua: null,
        ru: null
      },
      link: {
        ua: null,
        ru: null
      },
      published: 0,
      categories: []
    });
    const state = ref({
      data: [],
      currentPage: 1,
      isLoading: true,
      isActiveModal: false,
      modalAction: "",
      item
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
      axios.get(route("api.banners.index", { "page": state.value.currentPage })).then((response) => {
        Object.assign(state.value.data, response.data.result);
        state.value.isLoading = false;
      }).catch((errors) => {
        console.log(errors);
        state.value.isLoading = false;
      });
    }
    function onDestroy(id) {
      if (can("destroy-banners")) {
        swal({
          title: "\u0412\u0438\u0434\u0430\u043B\u0438\u0442\u0438?",
          icon: "warning",
          showCancelButton: true
        }).then((result) => {
          if (result.isConfirmed) {
            axios.delete(route("api.banners.destroy", id)).then(() => {
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
      if (can("edit-banners")) {
        axios.get(route("api.banners.edit", id)).then(({ data }) => {
          state.value.item = data.result;
          state.value.modalAction = "edit";
          state.value.item.index = i;
          modalFunction();
        }).catch((response) => console.log(response));
      }
    }
    function onUpdate() {
      if (can("edit-banners")) {
        axios.put(route("api.banners.update", state.value.item.id), state.value.item).then(() => {
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
      if (can("create-banners")) {
        axios.post(route("api.banners.create"), state.value.item).then(() => {
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
      if (state.value.modalAction === "edit" && can("edit-banners")) {
        onUpdate();
      } else if (state.value.modalAction === "create" && can("create-banners")) {
        onCreate();
      }
    }
    function create() {
      if (can("create-banners")) {
        Object.assign(state.value.item, item);
        state.value.modalAction = "create";
        modalFunction();
      }
    }
    function uploadImage(image, device, lang) {
      let formData = new FormData();
      formData.append("type", device);
      formData.append("banner", image);
      axios.post(route("api.banners.upload"), formData, {
        headers: {
          "Content-Type": "multipart/form-data"
        }
      }).then(({ data }) => {
        if (device === "mobile") {
          if (lang === "ru") {
            state.value.item.image_mobile.ru = data.result;
          }
          if (lang === "ua") {
            state.value.item.image_mobile.ua = data.result;
          }
        }
        if (device === "table") {
          if (lang === "ru") {
            state.value.item.image_table.ru = data.result;
          }
          if (lang === "ua") {
            state.value.item.image_table.ua = data.result;
          }
        }
        if (device === "desktop") {
          if (lang === "ru") {
            state.value.item.image_desktop.ru = data.result;
          }
          if (lang === "ua") {
            state.value.item.image_desktop.ua = data.result;
          }
        }
      }).catch((response) => console.log(response));
    }
    return (_ctx, _push, _parent, _attrs) => {
      const _component_loader_component = resolveComponent("loader-component");
      const _component_button_component = resolveComponent("button-component");
      const _component_pagination = resolveComponent("pagination");
      _push(ssrRenderComponent(_sfc_main$2, mergeProps({ title: "\u0411\u0430\u043D\u0435\u0440\u0430" }, _attrs), {
        header: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` \u0411\u0430\u043D\u0435\u0440\u0430 `);
          } else {
            return [
              createTextVNode(" \u0411\u0430\u043D\u0435\u0440\u0430 ")
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
            if (!state.value.isLoading && unref(can)("show-banners")) {
              _push2(`<div${_scopeId}>`);
              if (unref(can)("create-banners")) {
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
                data: state.value.data.data,
                onOnEdit: onEdit,
                onOnDestroy: onDestroy,
                canDestroy: unref(can)("destroy-banners")
              }, null, _parent2, _scopeId));
              _push2(ssrRenderComponent(_component_pagination, {
                pagination: state.value.data,
                "click-handler": fetch,
                modelValue: state.value.currentPage,
                "onUpdate:modelValue": ($event) => state.value.currentPage = $event
              }, null, _parent2, _scopeId));
              ssrRenderVNode(_push2, createVNode(resolveDynamicComponent(unref(activeModal)), {
                item: state.value.item,
                onCloseModal: modalFunction,
                onSubmitForm: submitForm,
                onDeclineForm: onDestroy,
                onOnUploadImage: uploadImage,
                canDestroy: unref(can)("destroy-banners")
              }, null), _parent2, _scopeId);
              _push2(`</div>`);
            } else {
              _push2(`<!---->`);
            }
          } else {
            return [
              state.value.isLoading ? (openBlock(), createBlock(_component_loader_component, { key: 0 })) : createCommentVNode("", true),
              !state.value.isLoading && unref(can)("show-banners") ? (openBlock(), createBlock("div", { key: 1 }, [
                unref(can)("create-banners") ? (openBlock(), createBlock(_component_button_component, {
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
                  data: state.value.data.data,
                  onOnEdit: onEdit,
                  onOnDestroy: onDestroy,
                  canDestroy: unref(can)("destroy-banners")
                }, null, 8, ["data", "canDestroy"]),
                createVNode(_component_pagination, {
                  pagination: state.value.data,
                  "click-handler": fetch,
                  modelValue: state.value.currentPage,
                  "onUpdate:modelValue": ($event) => state.value.currentPage = $event
                }, null, 8, ["pagination", "modelValue", "onUpdate:modelValue"]),
                (openBlock(), createBlock(resolveDynamicComponent(unref(activeModal)), {
                  item: state.value.item,
                  onCloseModal: modalFunction,
                  onSubmitForm: submitForm,
                  onDeclineForm: onDestroy,
                  onOnUploadImage: uploadImage,
                  canDestroy: unref(can)("destroy-banners")
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Admin/Options/Banners/Index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
