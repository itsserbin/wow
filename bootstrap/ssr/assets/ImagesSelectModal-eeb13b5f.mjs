import { ref, onMounted, mergeProps, withCtx, createTextVNode, createVNode, withModifiers, openBlock, createBlock, Fragment, renderList, withDirectives, vModelDynamic, createCommentVNode, useSSRContext } from "vue";
import { ssrRenderComponent, ssrRenderList, ssrRenderAttr, ssrRenderDynamicModel } from "vue/server-renderer";
import { _ as _sfc_main$1 } from "./Modal-8c93b79c.mjs";
import { _ as _sfc_main$3 } from "./Paginate-33c38e45.mjs";
import { _ as _sfc_main$2 } from "./Button-6b2e52a5.mjs";
import { L as Loader } from "./Loader-f9d3bebc.mjs";
import { _ as _sfc_main$4 } from "./UploadImagesModal-44f42df1.mjs";
const _sfc_main = {
  __name: "ImagesSelectModal",
  __ssrInlineRender: true,
  props: {
    multiple: {
      type: Boolean,
      default: false
    }
  },
  emits: [
    "closeModal",
    "submitForm"
  ],
  setup(__props) {
    const state = ref({
      images: [],
      isLoading: false,
      isImagesUploadModal: false,
      selected: [],
      currentPage: 1
    });
    onMounted(() => {
      fetch();
    });
    function onUploadImages() {
      modalUploadImagesFunction();
      fetch();
    }
    function modalUploadImagesFunction() {
      state.value.isImagesUploadModal = !state.value.isImagesUploadModal;
    }
    function fetch(page) {
      state.value.isLoading = true;
      if (page) {
        state.value.currentPage = page;
      }
      axios.get(route("api.images.index", { "page": state.value.currentPage })).then(({ data }) => {
        state.value.images = data.result;
        state.value.isLoading = false;
      }).catch((response) => {
        console.log(response);
        state.value.isLoading = false;
      });
    }
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(_sfc_main$1, mergeProps({
        onCloseModal: ($event) => _ctx.$emit("closeModal"),
        "submit-button-text": "Зберегти",
        "cancel-button-text": "Відмінити",
        onSubmitForm: ($event) => _ctx.$emit("submitForm", state.value.selected),
        onClickCancel: ($event) => _ctx.$emit("closeModal"),
        size: "extralarge"
      }, _attrs), {
        title: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Вибір зображення`);
          } else {
            return [
              createTextVNode("Вибір зображення")
            ];
          }
        }),
        content: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_sfc_main$2, {
              type: "btn",
              onClick: modalUploadImagesFunction
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` Завантажити `);
                } else {
                  return [
                    createTextVNode(" Завантажити ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            if (state.value.isLoading) {
              _push2(ssrRenderComponent(Loader, null, null, _parent2, _scopeId));
            } else {
              _push2(`<div${_scopeId}><div class="grid grid-cols-2 md:grid-cols-5 mt-3"${_scopeId}><!--[-->`);
              ssrRenderList(state.value.images.data, (image) => {
                _push2(`<div class="block m-1"${_scopeId}><input${ssrRenderAttr("type", __props.multiple ? "checkbox" : "radio")} name="images"${ssrRenderDynamicModel(__props.multiple ? "checkbox" : "radio", state.value.selected, image)}${ssrRenderAttr("value", image)}${ssrRenderAttr("id", image.id)} class="hidden peer"${_scopeId}><label${ssrRenderAttr("for", image.id)} class="inline-flex justify-between items-center p-5 w-full text-gray-500 bg-white rounded-lg border-2 border-gray-200 cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 peer-checked:border-blue-600 hover:text-gray-600 dark:peer-checked:text-gray-300 peer-checked:text-gray-600 hover:bg-gray-50 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-900"${_scopeId}><picture${_scopeId}><source${ssrRenderAttr("srcset", _ctx.route("images.350", image.webp_src))} type="image/webp"${_scopeId}><img${ssrRenderAttr("src", _ctx.route("images.350", image.src))} class="rounded-lg mx-auto h-full object-cover" alt=""${_scopeId}></picture></label></div>`);
              });
              _push2(`<!--]--></div>`);
              if (state.value.images) {
                _push2(`<div class="row flex justify-center my-5"${_scopeId}>`);
                _push2(ssrRenderComponent(_sfc_main$3, {
                  "click-handler": fetch,
                  pagination: state.value.images,
                  modelValue: state.value.currentPage,
                  "onUpdate:modelValue": ($event) => state.value.currentPage = $event
                }, null, _parent2, _scopeId));
                _push2(`</div>`);
              } else {
                _push2(`<!---->`);
              }
              _push2(`</div>`);
            }
            if (state.value.isImagesUploadModal) {
              _push2(ssrRenderComponent(_sfc_main$4, {
                onCloseModal: modalUploadImagesFunction,
                onOnUpload: onUploadImages
              }, null, _parent2, _scopeId));
            } else {
              _push2(`<!---->`);
            }
          } else {
            return [
              createVNode(_sfc_main$2, {
                type: "btn",
                onClick: withModifiers(modalUploadImagesFunction, ["prevent"])
              }, {
                default: withCtx(() => [
                  createTextVNode(" Завантажити ")
                ]),
                _: 1
              }, 8, ["onClick"]),
              state.value.isLoading ? (openBlock(), createBlock(Loader, { key: 0 })) : (openBlock(), createBlock("div", { key: 1 }, [
                createVNode("div", { class: "grid grid-cols-2 md:grid-cols-5 mt-3" }, [
                  (openBlock(true), createBlock(Fragment, null, renderList(state.value.images.data, (image) => {
                    return openBlock(), createBlock("div", { class: "block m-1" }, [
                      withDirectives(createVNode("input", {
                        type: __props.multiple ? "checkbox" : "radio",
                        name: "images",
                        "onUpdate:modelValue": ($event) => state.value.selected = $event,
                        value: image,
                        id: image.id,
                        class: "hidden peer"
                      }, null, 8, ["type", "onUpdate:modelValue", "value", "id"]), [
                        [vModelDynamic, state.value.selected]
                      ]),
                      createVNode("label", {
                        for: image.id,
                        class: "inline-flex justify-between items-center p-5 w-full text-gray-500 bg-white rounded-lg border-2 border-gray-200 cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 peer-checked:border-blue-600 hover:text-gray-600 dark:peer-checked:text-gray-300 peer-checked:text-gray-600 hover:bg-gray-50 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-900"
                      }, [
                        createVNode("picture", null, [
                          createVNode("source", {
                            srcset: _ctx.route("images.350", image.webp_src),
                            type: "image/webp"
                          }, null, 8, ["srcset"]),
                          createVNode("img", {
                            src: _ctx.route("images.350", image.src),
                            class: "rounded-lg mx-auto h-full object-cover",
                            alt: ""
                          }, null, 8, ["src"])
                        ])
                      ], 8, ["for"])
                    ]);
                  }), 256))
                ]),
                state.value.images ? (openBlock(), createBlock("div", {
                  key: 0,
                  class: "row flex justify-center my-5"
                }, [
                  createVNode(_sfc_main$3, {
                    "click-handler": fetch,
                    pagination: state.value.images,
                    modelValue: state.value.currentPage,
                    "onUpdate:modelValue": ($event) => state.value.currentPage = $event
                  }, null, 8, ["pagination", "modelValue", "onUpdate:modelValue"])
                ])) : createCommentVNode("", true)
              ])),
              state.value.isImagesUploadModal ? (openBlock(), createBlock(_sfc_main$4, {
                key: 2,
                onCloseModal: modalUploadImagesFunction,
                onOnUpload: onUploadImages
              })) : createCommentVNode("", true)
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/ImagesSelectModal.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as _
};
