import { inject, reactive, ref, onMounted, computed, mergeProps, withCtx, createTextVNode, toDisplayString, unref, createVNode, resolveDynamicComponent, openBlock, createBlock, createCommentVNode, useSSRContext } from "vue";
import { ssrRenderComponent, ssrInterpolate, ssrRenderVNode } from "vue/server-renderer";
import _sfc_main$1 from "./Modal.f4f9c035.mjs";
import _sfc_main$5 from "./Table.7f3199e0.mjs";
import { L as Loader, b as _sfc_main$3, p as _sfc_main$4, j as _sfc_main$6 } from "../app2.mjs";
import _sfc_main$2 from "./ContentLayout.f201d183.mjs";
import { P as ProductsRepository } from "./ProductsRepository.36c53e36.mjs";
import { useI18n } from "vue-i18n";
import "./Form.1fbdead7.mjs";
import "./Images.6830a229.mjs";
import "swiper/vue";
import "swiper";
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
import "./CharacteristicsRepository.4b9c6af6.mjs";
const _sfc_main = {
  __name: "Index",
  __ssrInlineRender: true,
  setup(__props) {
    const swal = inject("$swal");
    const can = inject("$can");
    const { t } = useI18n();
    const product = reactive({
      status: null,
      title: {
        ru: null,
        ua: null
      },
      characteristics: {
        ru: null,
        ua: null
      },
      description: {
        ru: null,
        ua: null
      },
      h1: {
        ru: null,
        ua: null
      },
      content: {
        ru: null,
        ua: null
      },
      characteristicsNew: {},
      published: 0,
      preview: null,
      size_table: null,
      price: null,
      trade_price: null,
      discount_price: null,
      categories: [],
      vendor_code: null,
      provider_id: null,
      youtube: null,
      sizes: [],
      images: [],
      colors: []
    });
    const state = ref({
      products: [],
      currentPage: 1,
      isLoading: true,
      isActiveModal: false,
      modalAction: "",
      item: product,
      errors: []
    });
    onMounted(() => {
      let id = new URLSearchParams(new URL(window.location.href).search).get("product");
      if (id) {
        onEdit(id);
      }
      fetch(1);
    });
    const activeModal = computed(() => state.value.isActiveModal ? _sfc_main$1 : null);
    const search = async (query) => {
      state.value.isLoading = true;
      const data = await ProductsRepository.search(query);
      if (data.success) {
        state.value.currentPage = 1;
        state.value.products = data.result;
      }
      state.value.isLoading = false;
    };
    const fetch = async (page) => {
      state.value.isLoading = true;
      if (page) {
        state.value.currentPage = page;
      }
      const data = await ProductsRepository.fetch({ "page": state.value.currentPage });
      state.value.products = data.success ? data.result : [];
      state.value.isLoading = false;
    };
    const onDestroy = async (id) => {
      if (can("destroy-products")) {
        const result = await swal({
          title: t("swal.sure"),
          icon: "warning",
          showCancelButton: true
        });
        if (result.isConfirmed) {
          const { success } = await ProductsRepository.destroy(id);
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
    const onEdit = async (id) => {
      state.value.isLoading = true;
      const data = await ProductsRepository.edit(id);
      if (data.success) {
        state.value.item = data.result;
        state.value.item.characteristicsNew = {};
        if (state.value.item.characteristics_new.length) {
          state.value.item.characteristics_new.forEach((item) => {
            state.value.item.characteristicsNew[item.characteristic_id] = [];
          });
          state.value.item.characteristics_new.forEach((item) => {
            state.value.item.characteristicsNew[item.characteristic_id].push(item);
          });
        }
        state.value.modalAction = "edit";
        modalFunction();
      }
      state.value.isLoading = false;
    };
    const onUpdate = async () => {
      if (can("edit-products")) {
        const data = await ProductsRepository.update(state.value.item);
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
      if (can("create-products")) {
        const data = await ProductsRepository.create(state.value.item);
        if (data.success) {
          modalFunction();
          state.value.item = product;
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
      if (state.value.modalAction === "edit" && can("edit-products")) {
        await onUpdate();
      } else if (state.value.modalAction === "create" && can("create-products")) {
        await onCreate();
      }
    };
    const create = () => {
      if (can("create-products")) {
        state.value.item = product;
        state.value.modalAction = "create";
        modalFunction();
      }
    };
    const setProductImages = (images) => {
      state.value.item.images = state.value.item.images.concat(images);
    };
    const destroyImage = (image) => {
      let index = state.value.item.images.findIndex((item) => {
        return item.id === image;
      });
      state.value.item.images.splice(index, 1);
    };
    const onUpdateProductSort = async (product_id, sort) => {
      state.value.isLoading = true;
      const data = await ProductsRepository.updateSort(product_id, sort);
      if (data.success) {
        await swal({
          title: t("swal.updated"),
          icon: "success"
        });
      }
      state.value.isLoading = false;
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(_sfc_main$2, mergeProps({
        title: _ctx.$t("products.page_title")
      }, _attrs), {
        header: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(_ctx.$t("products.page_title"))}`);
          } else {
            return [
              createTextVNode(toDisplayString(_ctx.$t("products.page_title")), 1)
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
            if (!state.value.isLoading && unref(can)("show-products")) {
              _push2(`<div class="grid gap-4 grid-cols-1"${_scopeId}><div${_scopeId}>`);
              if (unref(can)("create-products")) {
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
              _push2(`</div><div class="grid grid-cols-1 gap-4"${_scopeId}>`);
              _push2(ssrRenderComponent(_sfc_main$4, {
                onSearch: search,
                clear: true,
                placeholder: _ctx.$t("products.search_placeholder"),
                onOnClear: fetch
              }, null, _parent2, _scopeId));
              _push2(ssrRenderComponent(_sfc_main$5, {
                data: state.value.products.data,
                onOnEdit: onEdit,
                onOnDestroy: onDestroy,
                canDestroy: unref(can)("destroy-products"),
                onOnUpdateProductSort: onUpdateProductSort
              }, null, _parent2, _scopeId));
              _push2(`</div><div class="text-center"${_scopeId}>`);
              _push2(ssrRenderComponent(_sfc_main$6, {
                pagination: state.value.products,
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
              onSetProductImages: setProductImages,
              onDestroyImage: destroyImage,
              canDestroy: unref(can)("destroy-products")
            }, null), _parent2, _scopeId);
          } else {
            return [
              state.value.isLoading ? (openBlock(), createBlock(Loader, { key: 0 })) : createCommentVNode("", true),
              !state.value.isLoading && unref(can)("show-products") ? (openBlock(), createBlock("div", {
                key: 1,
                class: "grid gap-4 grid-cols-1"
              }, [
                createVNode("div", null, [
                  unref(can)("create-products") ? (openBlock(), createBlock(_sfc_main$3, {
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
                createVNode("div", { class: "grid grid-cols-1 gap-4" }, [
                  createVNode(_sfc_main$4, {
                    onSearch: search,
                    clear: true,
                    placeholder: _ctx.$t("products.search_placeholder"),
                    onOnClear: fetch
                  }, null, 8, ["placeholder"]),
                  createVNode(_sfc_main$5, {
                    data: state.value.products.data,
                    onOnEdit: onEdit,
                    onOnDestroy: onDestroy,
                    canDestroy: unref(can)("destroy-products"),
                    onOnUpdateProductSort: onUpdateProductSort
                  }, null, 8, ["data", "canDestroy"])
                ]),
                createVNode("div", { class: "text-center" }, [
                  createVNode(_sfc_main$6, {
                    pagination: state.value.products,
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
                onSetProductImages: setProductImages,
                onDestroyImage: destroyImage,
                canDestroy: unref(can)("destroy-products")
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Admin/Content/Products/Index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
