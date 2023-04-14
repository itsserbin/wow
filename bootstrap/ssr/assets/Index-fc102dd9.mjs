import { inject, ref, computed, onMounted, mergeProps, withCtx, createTextVNode, toDisplayString, unref, createVNode, resolveDynamicComponent, openBlock, createBlock, createCommentVNode, withModifiers, useSSRContext } from "vue";
import { ssrRenderComponent, ssrInterpolate, ssrRenderVNode } from "vue/server-renderer";
import { L as Loader } from "./Loader-f9d3bebc.mjs";
import { _ as _sfc_main$4 } from "./Button-6b2e52a5.mjs";
import { _ as _sfc_main$6 } from "./Paginate-33c38e45.mjs";
import { _ as _sfc_main$1 } from "./UploadImagesModal-a0208fb2.mjs";
import _sfc_main$5 from "./List-497e9c0c.mjs";
import _sfc_main$2 from "./Modal-440e6b5f.mjs";
import _sfc_main$3 from "./ContentLayout-150d801d.mjs";
import { useI18n } from "vue-i18n";
import "./_plugin-vue_export-helper-cc2b3d55.mjs";
import "./ImageCard-83355df7.mjs";
import "./XCircle-df3891c5.mjs";
import "./Form-254e0a8f.mjs";
import "./Card-1b507b9c.mjs";
import "./NavLink-5de78266.mjs";
import "@inertiajs/vue3";
const ImagesRepository = {
  async fetch(params) {
    try {
      const response = await axios.get(route("api.images.index", params));
      return response.data;
    } catch (error) {
      throw new Error(error.response.data);
    }
  },
  async destroy(id) {
    try {
      const response = await axios.delete(route("api.images.destroy", id));
      return response.data;
    } catch (error) {
      throw new Error(error.response.data);
    }
  },
  async update(item) {
    try {
      const response = await axios.put(route("api.images.update", item.id), item);
      return response.data;
    } catch (error) {
      throw new Error(error.response.data);
    }
  }
};
const _sfc_main = {
  __name: "Index",
  __ssrInlineRender: true,
  setup(__props) {
    const swal = inject("$swal");
    const can = inject("$can");
    const { t } = useI18n();
    const state = ref({
      imagesList: [],
      isActiveUploadModal: false,
      isActiveImageModal: false,
      imageUploadModal: [],
      imageModal: {
        id: null,
        src: null,
        alt: null
      },
      currentPage: 1,
      isLoading: true
    });
    const imagesUploadModal = computed(() => state.value.isActiveUploadModal ? _sfc_main$1 : null);
    const imageModal = computed(() => state.value.isActiveImageModal ? _sfc_main$2 : null);
    onMounted(() => fetch());
    const modalUploadImagesFunction = () => {
      state.value.isActiveUploadModal = !state.value.isActiveUploadModal;
    };
    const modalImagesFunction = () => {
      state.value.isActiveImageModal = !state.value.isActiveImageModal;
    };
    const openImageModal = (image) => {
      modalImagesFunction();
      state.value.imageModal = image;
    };
    const updateImage = async () => {
      if (can("edit-images")) {
        const { success } = await ImagesRepository.update(state.value.imageModal);
        if (success) {
          modalImagesFunction();
          await swal({
            icon: "success",
            title: t("swal.updated")
          });
        }
      }
    };
    const destroyImageFromModal = async (id) => {
      await destroyImage(id);
      modalImagesFunction();
    };
    const destroyImage = async (id) => {
      if (can("destroy-images")) {
        const result = await swal({
          title: t("swal.sure"),
          icon: "warning",
          showCancelButton: true
        });
        if (result.isConfirmed) {
          state.value.isLoading = true;
          const { success } = await ImagesRepository.destroy(id);
          if (success) {
            await fetch();
            await swal({
              icon: "success",
              title: t("swal.destroyed")
            });
          }
          state.value.isLoading = false;
        }
      }
    };
    const fetch = async (page) => {
      state.value.isLoading = true;
      if (page) {
        state.value.currentPage = page;
      }
      const data = await ImagesRepository.fetch({ "page": state.value.currentPage });
      state.value.imagesList = data.success ? data.result : [];
      state.value.isLoading = false;
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(_sfc_main$3, mergeProps({
        title: _ctx.$t("images.page_title")
      }, _attrs), {
        header: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(_ctx.$t("images.page_title"))}`);
          } else {
            return [
              createTextVNode(toDisplayString(_ctx.$t("images.page_title")), 1)
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
            if (!state.value.isLoading && unref(can)("show-images")) {
              _push2(`<div class="grid grid-cols-1 gap-4"${_scopeId}><div${_scopeId}>`);
              if (unref(can)("create-images")) {
                _push2(ssrRenderComponent(_sfc_main$4, {
                  type: "btn",
                  onClick: modalUploadImagesFunction
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
              _push2(ssrRenderComponent(_sfc_main$5, {
                images: state.value.imagesList,
                onClickImage: openImageModal,
                onFetch: fetch,
                onDestroyImage: destroyImage
              }, null, _parent2, _scopeId));
              _push2(`<div class="text-center"${_scopeId}>`);
              _push2(ssrRenderComponent(_sfc_main$6, {
                pagination: state.value.imagesList,
                "click-handler": fetch,
                modelValue: state.value.currentPage,
                "onUpdate:modelValue": ($event) => state.value.currentPage = $event
              }, null, _parent2, _scopeId));
              _push2(`</div></div>`);
            } else {
              _push2(`<!---->`);
            }
            ssrRenderVNode(_push2, createVNode(resolveDynamicComponent(unref(imageModal)), {
              onCloseModal: modalImagesFunction,
              onSubmitForm: updateImage,
              onDeclineForm: destroyImageFromModal,
              image: state.value.imageModal,
              size: "large"
            }, null), _parent2, _scopeId);
            ssrRenderVNode(_push2, createVNode(resolveDynamicComponent(unref(imagesUploadModal)), {
              onCloseModal: modalUploadImagesFunction,
              onOnUpload: fetch
            }, null), _parent2, _scopeId);
          } else {
            return [
              state.value.isLoading ? (openBlock(), createBlock(Loader, { key: 0 })) : createCommentVNode("", true),
              !state.value.isLoading && unref(can)("show-images") ? (openBlock(), createBlock("div", {
                key: 1,
                class: "grid grid-cols-1 gap-4"
              }, [
                createVNode("div", null, [
                  unref(can)("create-images") ? (openBlock(), createBlock(_sfc_main$4, {
                    key: 0,
                    type: "btn",
                    onClick: withModifiers(modalUploadImagesFunction, ["prevent"])
                  }, {
                    default: withCtx(() => [
                      createTextVNode(toDisplayString(_ctx.$t("add")), 1)
                    ]),
                    _: 1
                  }, 8, ["onClick"])) : createCommentVNode("", true)
                ]),
                createVNode(_sfc_main$5, {
                  images: state.value.imagesList,
                  onClickImage: openImageModal,
                  onFetch: fetch,
                  onDestroyImage: destroyImage
                }, null, 8, ["images"]),
                createVNode("div", { class: "text-center" }, [
                  createVNode(_sfc_main$6, {
                    pagination: state.value.imagesList,
                    "click-handler": fetch,
                    modelValue: state.value.currentPage,
                    "onUpdate:modelValue": ($event) => state.value.currentPage = $event
                  }, null, 8, ["pagination", "modelValue", "onUpdate:modelValue"])
                ])
              ])) : createCommentVNode("", true),
              (openBlock(), createBlock(resolveDynamicComponent(unref(imageModal)), {
                onCloseModal: modalImagesFunction,
                onSubmitForm: updateImage,
                onDeclineForm: destroyImageFromModal,
                image: state.value.imageModal,
                size: "large"
              }, null, 40, ["image"])),
              (openBlock(), createBlock(resolveDynamicComponent(unref(imagesUploadModal)), {
                onCloseModal: modalUploadImagesFunction,
                onOnUpload: fetch
              }, null, 32))
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Admin/Content/Images/Index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
