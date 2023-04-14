import { inject, reactive, ref, onMounted, computed, mergeProps, withCtx, createTextVNode, toDisplayString, unref, createVNode, resolveDynamicComponent, openBlock, createBlock, createCommentVNode, useSSRContext } from "vue";
import { ssrRenderComponent, ssrInterpolate, ssrRenderVNode } from "vue/server-renderer";
import _sfc_main$1 from "./Modal.4767be31.mjs";
import _sfc_main$4 from "./Table.0d081a8f.mjs";
import _sfc_main$2 from "./ContentLayout.f201d183.mjs";
import { L as Loader, b as _sfc_main$3, j as _sfc_main$5 } from "../app2.mjs";
import { C as CategoriesRepository } from "./Form.915feaac.mjs";
import { useI18n } from "vue-i18n";
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
import "./ImagesSelectModal.c7cfb2ce.mjs";
import "./UploadImagesModal.55fc186b.mjs";
import "./InputError.f356d54a.mjs";
const _sfc_main = {
  __name: "Index",
  __ssrInlineRender: true,
  setup(__props) {
    const swal = inject("$swal");
    const can = inject("$can");
    const { t } = useI18n();
    const item = reactive({
      published: 0,
      slug: null,
      parent_id: null,
      preview_id: null,
      preview: null,
      title: {
        ru: null,
        ua: null
      },
      meta_title: {
        ru: null,
        ua: null
      },
      meta_description: {
        ru: null,
        ua: null
      },
      meta_keyword: {
        ru: null,
        ua: null
      },
      seo_text: {
        ru: null,
        ua: null
      }
    });
    const state = ref({
      categories: [],
      currentPage: 1,
      isLoading: true,
      isActiveModal: false,
      modalAction: "",
      item: {},
      errors: []
    });
    onMounted(() => {
      fetch(1);
    });
    const activeModal = computed(() => state.value.isActiveModal ? _sfc_main$1 : null);
    const fetch = async (page) => {
      state.value.isLoading = true;
      if (page) {
        state.value.currentPage = page;
      }
      const data = await CategoriesRepository.fetch({ "page": state.value.currentPage });
      state.value.categories = data.success ? data.result : [];
      state.value.isLoading = false;
    };
    const onDestroy = async (id) => {
      if (can("destroy-categories")) {
        const result = await swal({
          title: t("swal.sure"),
          icon: "warning",
          showCancelButton: true
        });
        if (result.isConfirmed) {
          const { success } = await CategoriesRepository.destroy(id);
          if (success) {
            await fetch();
            if (state.value.isActiveModal) {
              modalFunction();
            }
            await swal({
              icon: "success",
              title: t("swal.destroyed")
            });
          }
        }
      }
    };
    const modalFunction = () => {
      state.value.isActiveModal = !state.value.isActiveModal;
    };
    const onEdit = async (id, i) => {
      if (can("edit-categories")) {
        const data = await CategoriesRepository.edit(id);
        if (data.success) {
          state.value.item = data.result;
          state.value.modalAction = "edit";
          state.value.item.index = i;
          modalFunction();
        }
      }
    };
    const onUpdate = async () => {
      if (can("edit-categories")) {
        const data = await CategoriesRepository.update(state.value.item);
        state.value.errors = [];
        if (data.success) {
          modalFunction();
          await fetch();
          await swal({
            title: t("swal.updated"),
            icon: "success"
          });
        } else {
          state.value.errors = data;
          console.log(data);
          await swal({
            title: t("swal.error"),
            icon: "error",
            text: t("swal.check_data")
          });
        }
      }
    };
    const onCreate = async () => {
      if (can("create-categories")) {
        const data = await CategoriesRepository.create(state.value.item);
        state.value.errors = [];
        if (data.success) {
          modalFunction();
          state.value.item = {};
          await fetch();
          await swal({
            title: t("swal.created"),
            icon: "success"
          });
        } else {
          state.value.errors = data;
          console.log(data);
          await swal({
            title: t("swal.error"),
            text: t("swal.check_data"),
            icon: "error"
          });
        }
      }
    };
    const submitForm = async () => {
      if (state.value.modalAction === "edit" && can("edit-categories")) {
        await onUpdate();
      } else if (state.value.modalAction === "create" && can("create-categories")) {
        await onCreate();
      }
    };
    const create = () => {
      if (can("create-categories")) {
        Object.assign(state.value.item, item);
        state.value.modalAction = "create";
        state.value.errors = [];
        modalFunction();
      }
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(_sfc_main$2, mergeProps({
        title: _ctx.$t("categories.page_title")
      }, _attrs), {
        header: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(_ctx.$t("categories.page_title"))}`);
          } else {
            return [
              createTextVNode(toDisplayString(_ctx.$t("categories.page_title")), 1)
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
            if (!state.value.isLoading && unref(can)("show-categories")) {
              _push2(`<div class="grid gap-4 grid-cols-1"${_scopeId}><div${_scopeId}>`);
              if (unref(can)("create-categories")) {
                _push2(ssrRenderComponent(_sfc_main$3, {
                  type: "btn",
                  onClick: create
                }, {
                  default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(`${ssrInterpolate(_ctx.$t("add"))}`);
                    } else {
                      return [
                        createTextVNode(toDisplayString(_ctx.$t("add")), 1)
                      ];
                    }
                  }),
                  _: 1
                }, _parent2, _scopeId));
              } else {
                _push2(`<!---->`);
              }
              _push2(`</div>`);
              _push2(ssrRenderComponent(_sfc_main$4, {
                data: state.value.categories.data,
                onOnEdit: onEdit,
                onOnDestroy: onDestroy,
                canDestroy: unref(can)("destroy-categories")
              }, null, _parent2, _scopeId));
              _push2(`<div class="text-center"${_scopeId}>`);
              _push2(ssrRenderComponent(_sfc_main$5, {
                pagination: state.value.categories,
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
              errors: state.value.errors,
              onCloseModal: modalFunction,
              onSubmitForm: submitForm,
              onDeclineForm: onDestroy,
              canDestroy: unref(can)("destroy-categories")
            }, null), _parent2, _scopeId);
          } else {
            return [
              state.value.isLoading ? (openBlock(), createBlock(Loader, { key: 0 })) : createCommentVNode("", true),
              !state.value.isLoading && unref(can)("show-categories") ? (openBlock(), createBlock("div", {
                key: 1,
                class: "grid gap-4 grid-cols-1"
              }, [
                createVNode("div", null, [
                  unref(can)("create-categories") ? (openBlock(), createBlock(_sfc_main$3, {
                    key: 0,
                    type: "btn",
                    onClick: create
                  }, {
                    default: withCtx(() => [
                      createTextVNode(toDisplayString(_ctx.$t("add")), 1)
                    ]),
                    _: 1
                  })) : createCommentVNode("", true)
                ]),
                createVNode(_sfc_main$4, {
                  data: state.value.categories.data,
                  onOnEdit: onEdit,
                  onOnDestroy: onDestroy,
                  canDestroy: unref(can)("destroy-categories")
                }, null, 8, ["data", "canDestroy"]),
                createVNode("div", { class: "text-center" }, [
                  createVNode(_sfc_main$5, {
                    pagination: state.value.categories,
                    "click-handler": fetch,
                    modelValue: state.value.currentPage,
                    "onUpdate:modelValue": ($event) => state.value.currentPage = $event
                  }, null, 8, ["pagination", "modelValue", "onUpdate:modelValue"])
                ])
              ])) : createCommentVNode("", true),
              (openBlock(), createBlock(resolveDynamicComponent(unref(activeModal)), {
                item: state.value.item,
                errors: state.value.errors,
                onCloseModal: modalFunction,
                onSubmitForm: submitForm,
                onDeclineForm: onDestroy,
                canDestroy: unref(can)("destroy-categories")
              }, null, 40, ["item", "errors", "canDestroy"]))
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Admin/Content/Categories/Index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
