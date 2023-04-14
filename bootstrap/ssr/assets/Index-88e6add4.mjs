import { inject, ref, onMounted, computed, mergeProps, withCtx, createTextVNode, unref, createVNode, resolveDynamicComponent, openBlock, createBlock, createCommentVNode, useSSRContext } from "vue";
import { ssrRenderComponent, ssrRenderVNode } from "vue/server-renderer";
import { _ as _sfc_main$3 } from "./Button-6b2e52a5.mjs";
import { L as Loader } from "./Loader-f9d3bebc.mjs";
import { _ as _sfc_main$5 } from "./Paginate-33c38e45.mjs";
import _sfc_main$1 from "./Modal-38fcd651.mjs";
import _sfc_main$2 from "./OptionsLayout-e8479f7a.mjs";
import _sfc_main$4 from "./Table-072c924c.mjs";
import { C as CharacteristicsRepository } from "./CharacteristicsRepository-7c4205ad.mjs";
import "./_plugin-vue_export-helper-cc2b3d55.mjs";
import "./Modal-8c93b79c.mjs";
import "./Form-0b329b30.mjs";
import "./Label-229c476a.mjs";
import "./Input-4be85f13.mjs";
import "./LangTabs-3c63a9c9.mjs";
import "./AuthenticatedLayout-ff994435.mjs";
import "./ApplicationLogo-fe90ffe2.mjs";
import "./Logo-8552d818.mjs";
import "@inertiajs/vue3";
import "./NavLink-5de78266.mjs";
import "@inertiajs/inertia-vue3";
import "vuex";
import "./SidebarItem-250f76bc.mjs";
import "./Table-df76b95f.mjs";
const _sfc_main = {
  __name: "Index",
  __ssrInlineRender: true,
  setup(__props) {
    const swal = inject("$swal");
    const can = inject("$can");
    const params = ref({
      currentPage: 1
    });
    const item = {
      title: {
        ua: null,
        ru: null
      },
      values: [
        {
          title: {
            ua: null,
            ru: null
          }
        }
      ]
    };
    const state = ref({
      data: [],
      isLoading: true,
      isActiveModal: false,
      modalAction: "",
      item: {}
    });
    onMounted(() => {
      fetch();
    });
    const activeModal = computed(() => state.value.isActiveModal ? _sfc_main$1 : null);
    async function fetch() {
      try {
        const data = await CharacteristicsRepository().fetch(params.value);
        if (data.success) {
          state.value.data = data.result;
        }
        state.value.isLoading = false;
      } catch (e) {
        console.error(e);
        state.value.isLoading = false;
      }
    }
    async function onDestroy(id) {
      try {
        if (can("destroy-characteristics")) {
          const confirm = await swal({
            title: "Видалити?",
            icon: "warning",
            showCancelButton: true
          });
          if (confirm.isConfirmed) {
            await CharacteristicsRepository().destroy(id);
            state.value.isLoading = false;
            await fetch();
            if (state.value.isActiveModal) {
              modalFunction();
            }
            swal({
              title: "Success!",
              icon: "success"
            });
          }
        }
      } catch (errors) {
        console.error(errors);
        swal({
          title: "Error!",
          icon: "error",
          text: errors.response.data.message || "An error occurred, please try again later"
        });
      }
    }
    function modalFunction() {
      state.value.isActiveModal = !state.value.isActiveModal;
    }
    async function onEdit(id, i) {
      try {
        const { result, success } = await CharacteristicsRepository().edit(id);
        if (success) {
          state.value.item.index = i;
          state.value.item = result;
          state.value.modalAction = "edit";
          modalFunction();
          state.value.isLoading = false;
        }
      } catch (error) {
        state.value.isLoading = false;
        console.error(error);
        swal({
          title: "Error!",
          icon: "error",
          text: error.response.data.message || "An error occurred, please try again later"
        });
      }
    }
    async function onUpdate() {
      try {
        if (can("edit-characteristics")) {
          const { success } = await CharacteristicsRepository().update(state.value.item.id, state.value.item);
          if (success) {
            modalFunction();
            await fetch();
            swal({
              title: "Success!",
              icon: "success"
            });
          }
        }
      } catch (error) {
        state.value.isLoading = false;
        console.error(error);
        swal({
          title: "Error!",
          icon: "error",
          text: error.response.data.message || "An error occurred, please try again later"
        });
      }
    }
    async function onCreate() {
      try {
        if (can("create-characteristics")) {
          const { success } = await CharacteristicsRepository().create(state.value.item);
          if (success) {
            state.value.item = {};
            modalFunction();
            await fetch();
            swal({
              title: "Success!",
              icon: "success"
            });
          }
        }
      } catch (error) {
        state.value.isLoading = false;
        console.error(error);
        swal({
          title: "Error!",
          icon: "error",
          text: error || "An error occurred, please try again later"
        });
      }
    }
    function submitForm() {
      if (state.value.modalAction === "edit" && can("edit-characteristics")) {
        onUpdate();
      } else if (state.value.modalAction === "create" && can("create-characteristics")) {
        onCreate();
      }
    }
    function create() {
      if (can("create-characteristics")) {
        state.value.item = JSON.parse(JSON.stringify(item));
        state.value.modalAction = "create";
        modalFunction();
      }
    }
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(_sfc_main$2, mergeProps({ title: "Характеристики товарів" }, _attrs), {
        header: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Характеристики товарів `);
          } else {
            return [
              createTextVNode(" Характеристики товарів ")
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
            if (!state.value.isLoading && unref(can)("show-characteristics")) {
              _push2(`<div class="grid grid-cols-1 gap-4"${_scopeId}><div${_scopeId}>`);
              if (unref(can)("create-characteristics")) {
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
              _push2(`</div>`);
              _push2(ssrRenderComponent(_sfc_main$4, {
                data: state.value.data.data,
                onOnEdit: onEdit,
                onOnDestroy: onDestroy,
                canDestroy: unref(can)("destroy-characteristics")
              }, null, _parent2, _scopeId));
              _push2(`<div class="text-center"${_scopeId}>`);
              _push2(ssrRenderComponent(_sfc_main$5, {
                pagination: state.value.data,
                "click-handler": fetch,
                modelValue: params.value.currentPage,
                "onUpdate:modelValue": ($event) => params.value.currentPage = $event
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
              canDestroy: unref(can)("destroy-characteristics")
            }, null), _parent2, _scopeId);
          } else {
            return [
              state.value.isLoading ? (openBlock(), createBlock(Loader, { key: 0 })) : createCommentVNode("", true),
              !state.value.isLoading && unref(can)("show-characteristics") ? (openBlock(), createBlock("div", {
                key: 1,
                class: "grid grid-cols-1 gap-4"
              }, [
                createVNode("div", null, [
                  unref(can)("create-characteristics") ? (openBlock(), createBlock(_sfc_main$3, {
                    key: 0,
                    type: "btn",
                    onClick: create
                  }, {
                    default: withCtx(() => [
                      createTextVNode(" Додати ")
                    ]),
                    _: 1
                  })) : createCommentVNode("", true)
                ]),
                createVNode(_sfc_main$4, {
                  data: state.value.data.data,
                  onOnEdit: onEdit,
                  onOnDestroy: onDestroy,
                  canDestroy: unref(can)("destroy-characteristics")
                }, null, 8, ["data", "canDestroy"]),
                createVNode("div", { class: "text-center" }, [
                  createVNode(_sfc_main$5, {
                    pagination: state.value.data,
                    "click-handler": fetch,
                    modelValue: params.value.currentPage,
                    "onUpdate:modelValue": ($event) => params.value.currentPage = $event
                  }, null, 8, ["pagination", "modelValue", "onUpdate:modelValue"])
                ])
              ])) : createCommentVNode("", true),
              (openBlock(), createBlock(resolveDynamicComponent(unref(activeModal)), {
                item: state.value.item,
                onCloseModal: modalFunction,
                onSubmitForm: submitForm,
                onDeclineForm: onDestroy,
                canDestroy: unref(can)("destroy-characteristics")
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Admin/Options/Characteristics/Index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
