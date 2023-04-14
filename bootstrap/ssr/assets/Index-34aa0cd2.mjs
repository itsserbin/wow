import { inject, reactive, ref, onMounted, computed, mergeProps, withCtx, createTextVNode, toDisplayString, unref, createVNode, resolveDynamicComponent, openBlock, createBlock, createCommentVNode, useSSRContext } from "vue";
import { ssrRenderComponent, ssrInterpolate, ssrRenderVNode } from "vue/server-renderer";
import { L as Loader } from "./Loader-f9d3bebc.mjs";
import { _ as _sfc_main$3 } from "./Button-6b2e52a5.mjs";
import { _ as _sfc_main$5 } from "./Paginate-33c38e45.mjs";
import _sfc_main$1 from "./Modal-c3e0bbbf.mjs";
import _sfc_main$4 from "./Table-bb46129a.mjs";
import _sfc_main$2 from "./ContentLayout-150d801d.mjs";
import { useI18n } from "vue-i18n";
import "./_plugin-vue_export-helper-cc2b3d55.mjs";
import "./Form-bfd4d2cd.mjs";
import "./Label-229c476a.mjs";
import "./Input-4be85f13.mjs";
import "./Textarea-1805d9a6.mjs";
import "./Select-b70673dc.mjs";
import "./LangTabs-3c63a9c9.mjs";
import "./Modal-8c93b79c.mjs";
import "./Table-df76b95f.mjs";
import "./XCircle-df3891c5.mjs";
import "./NavLink-5de78266.mjs";
import "@inertiajs/vue3";
const PagesRepository = {
  async fetch(params) {
    try {
      const response = await axios.get(route("api.pages.index", params));
      return response.data;
    } catch (error) {
      throw new Error(error.response.data);
    }
  },
  async destroy(id) {
    try {
      const response = await axios.delete(route("api.pages.destroy", id));
      return response.data;
    } catch (error) {
      throw new Error(error.response.data);
    }
  },
  async edit(id) {
    try {
      const response = await axios.get(route("api.pages.edit", id));
      return response.data;
    } catch (error) {
      throw new Error(error.response.data);
    }
  },
  async update(item) {
    try {
      const response = await axios.put(route("api.pages.update", item.id), item);
      return response.data;
    } catch (error) {
      return error.response.data;
    }
  },
  async create(item) {
    try {
      const response = await axios.post(route("api.pages.create"), item);
      return response.data;
    } catch (error) {
      return error.response.data;
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
    const item = reactive({
      slug: null,
      published: 0,
      heading: {
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
      meta_title: {
        ru: null,
        ua: null
      },
      meta_description: {
        ru: null,
        ua: null
      }
    });
    const state = ref({
      data: [],
      currentPage: 1,
      isLoading: true,
      isActiveModal: false,
      modalAction: "",
      errors: [],
      item: {}
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
      const data = await PagesRepository.fetch({ "page": state.value.currentPage });
      state.value.data = data.success ? data.result : [];
      state.value.isLoading = false;
    };
    const onDestroy = async (id) => {
      if (can("destroy-pages")) {
        const result = await swal({
          title: t("swal.sure"),
          icon: "warning",
          showCancelButton: true
        });
        if (result.isConfirmed) {
          const { success } = await PagesRepository.destroy(id);
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
      if (can("edit-pages")) {
        const data = await PagesRepository.edit(id);
        if (data.success) {
          state.value.item = data.result;
          state.value.modalAction = "edit";
          state.value.item.index = i;
          modalFunction();
        }
      }
    };
    const onUpdate = async () => {
      if (can("edit-pages")) {
        const data = await PagesRepository.update(state.value.item);
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
      if (can("create-pages")) {
        const data = await PagesRepository.create(state.value.item);
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
      if (state.value.modalAction === "edit" && can("edit-pages")) {
        await onUpdate();
      } else if (state.value.modalAction === "create" && can("create-pages")) {
        await onCreate();
      }
    };
    const create = () => {
      if (can("create-pages")) {
        state.value.item = item;
        state.value.modalAction = "create";
        modalFunction();
      }
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(_sfc_main$2, mergeProps({
        title: _ctx.$t("pages.page_title")
      }, _attrs), {
        header: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(_ctx.$t("pages.page_title"))}`);
          } else {
            return [
              createTextVNode(toDisplayString(_ctx.$t("pages.page_title")), 1)
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
            if (!state.value.isLoading && unref(can)("show-pages")) {
              _push2(`<div class="grid gap-4 grid-cols-1"${_scopeId}><div${_scopeId}>`);
              if (unref(can)("create-pages")) {
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
              _push2(`</div><div${_scopeId}>`);
              _push2(ssrRenderComponent(_sfc_main$4, {
                data: state.value.data.data,
                onOnEdit: onEdit,
                onOnDestroy: onDestroy,
                canDestroy: unref(can)("destroy-pages")
              }, null, _parent2, _scopeId));
              _push2(`</div><div class="text-center"${_scopeId}>`);
              _push2(ssrRenderComponent(_sfc_main$5, {
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
              canDestroy: unref(can)("destroy-pages")
            }, null), _parent2, _scopeId);
          } else {
            return [
              state.value.isLoading ? (openBlock(), createBlock(Loader, { key: 0 })) : createCommentVNode("", true),
              !state.value.isLoading && unref(can)("show-pages") ? (openBlock(), createBlock("div", {
                key: 1,
                class: "grid gap-4 grid-cols-1"
              }, [
                createVNode("div", null, [
                  unref(can)("create-pages") ? (openBlock(), createBlock(_sfc_main$3, {
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
                createVNode("div", null, [
                  createVNode(_sfc_main$4, {
                    data: state.value.data.data,
                    onOnEdit: onEdit,
                    onOnDestroy: onDestroy,
                    canDestroy: unref(can)("destroy-pages")
                  }, null, 8, ["data", "canDestroy"])
                ]),
                createVNode("div", { class: "text-center" }, [
                  createVNode(_sfc_main$5, {
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
                canDestroy: unref(can)("destroy-pages")
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Admin/Content/Pages/Index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
