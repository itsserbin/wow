import { ref, onMounted, resolveComponent, mergeProps, withCtx, createTextVNode, createVNode, withModifiers, openBlock, createBlock, Fragment, renderList, withDirectives, vModelDynamic, createCommentVNode, useSSRContext } from "vue";
import { ssrRenderComponent, ssrRenderList, ssrRenderAttr, ssrRenderDynamicModel } from "vue/server-renderer";
import { _ as _sfc_main$1 } from "./UploadImagesModal.55fc186b.mjs";
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
      const _component_modal_component = resolveComponent("modal-component");
      const _component_button_component = resolveComponent("button-component");
      const _component_loader_component = resolveComponent("loader-component");
      const _component_pagination = resolveComponent("pagination");
      _push(ssrRenderComponent(_component_modal_component, mergeProps({
        onCloseModal: ($event) => _ctx.$emit("closeModal"),
        "submit-button-text": "\u0417\u0431\u0435\u0440\u0435\u0433\u0442\u0438",
        "cancel-button-text": "\u0412\u0456\u0434\u043C\u0456\u043D\u0438\u0442\u0438",
        onSubmitForm: ($event) => _ctx.$emit("submitForm", state.value.selected),
        onClickCancel: ($event) => _ctx.$emit("closeModal"),
        size: "extralarge"
      }, _attrs), {
        title: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`\u0412\u0438\u0431\u0456\u0440 \u0437\u043E\u0431\u0440\u0430\u0436\u0435\u043D\u043D\u044F`);
          } else {
            return [
              createTextVNode("\u0412\u0438\u0431\u0456\u0440 \u0437\u043E\u0431\u0440\u0430\u0436\u0435\u043D\u043D\u044F")
            ];
          }
        }),
        content: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_button_component, {
              type: "btn",
              onClick: modalUploadImagesFunction
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` \u0417\u0430\u0432\u0430\u043D\u0442\u0430\u0436\u0438\u0442\u0438 `);
                } else {
                  return [
                    createTextVNode(" \u0417\u0430\u0432\u0430\u043D\u0442\u0430\u0436\u0438\u0442\u0438 ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            if (state.value.isLoading) {
              _push2(ssrRenderComponent(_component_loader_component, null, null, _parent2, _scopeId));
            } else {
              _push2(`<div${_scopeId}><div class="grid grid-cols-2 md:grid-cols-5 mt-3"${_scopeId}><!--[-->`);
              ssrRenderList(state.value.images.data, (image) => {
                _push2(`<div class="block m-1"${_scopeId}><input${ssrRenderAttr("type", __props.multiple ? "checkbox" : "radio")} name="images"${ssrRenderDynamicModel(__props.multiple ? "checkbox" : "radio", state.value.selected, image)}${ssrRenderAttr("value", image)}${ssrRenderAttr("id", image.id)} class="hidden peer"${_scopeId}><label${ssrRenderAttr("for", image.id)} class="inline-flex justify-between items-center p-5 w-full text-gray-500 bg-white rounded-lg border-2 border-gray-200 cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 peer-checked:border-blue-600 hover:text-gray-600 dark:peer-checked:text-gray-300 peer-checked:text-gray-600 hover:bg-gray-50 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-900"${_scopeId}><picture${_scopeId}><source${ssrRenderAttr("srcset", _ctx.route("images.350", image.webp_src))} type="image/webp"${_scopeId}><img${ssrRenderAttr("src", _ctx.route("images.350", image.src))} class="rounded-lg mx-auto h-full object-cover"${_scopeId}></picture></label></div>`);
              });
              _push2(`<!--]--></div>`);
              if (state.value.images) {
                _push2(`<div class="row flex justify-center my-5"${_scopeId}>`);
                _push2(ssrRenderComponent(_component_pagination, {
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
              _push2(ssrRenderComponent(_sfc_main$1, {
                onCloseModal: modalUploadImagesFunction,
                onOnUpload: onUploadImages
              }, null, _parent2, _scopeId));
            } else {
              _push2(`<!---->`);
            }
          } else {
            return [
              createVNode(_component_button_component, {
                type: "btn",
                onClick: withModifiers(modalUploadImagesFunction, ["prevent"])
              }, {
                default: withCtx(() => [
                  createTextVNode(" \u0417\u0430\u0432\u0430\u043D\u0442\u0430\u0436\u0438\u0442\u0438 ")
                ]),
                _: 1
              }, 8, ["onClick"]),
              state.value.isLoading ? (openBlock(), createBlock(_component_loader_component, { key: 0 })) : (openBlock(), createBlock("div", { key: 1 }, [
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
                            class: "rounded-lg mx-auto h-full object-cover"
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
                  createVNode(_component_pagination, {
                    "click-handler": fetch,
                    pagination: state.value.images,
                    modelValue: state.value.currentPage,
                    "onUpdate:modelValue": ($event) => state.value.currentPage = $event
                  }, null, 8, ["pagination", "modelValue", "onUpdate:modelValue"])
                ])) : createCommentVNode("", true)
              ])),
              state.value.isImagesUploadModal ? (openBlock(), createBlock(_sfc_main$1, {
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
