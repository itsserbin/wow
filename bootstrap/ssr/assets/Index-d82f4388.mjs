import { inject, ref, onMounted, withCtx, unref, openBlock, createBlock, createCommentVNode, useSSRContext } from "vue";
import { ssrRenderComponent } from "vue/server-renderer";
import _sfc_main$1 from "./OptionsLayout-6faa4c69.mjs";
import _sfc_main$2 from "./Form-e57e5993.mjs";
import { L as Loader } from "./Loader-f9d3bebc.mjs";
import { useI18n } from "vue-i18n";
import { s as swal } from "./swal-dcd03cbb.mjs";
import "./AuthenticatedLayout-b7ba9f3b.mjs";
import "./ApplicationLogo-76725da6.mjs";
import "./Logo-21a2caa8.mjs";
import "@inertiajs/inertia-vue3";
import "@inertiajs/vue3";
import "vuex";
import "./SidebarItem-250f76bc.mjs";
import "./_plugin-vue_export-helper-cc2b3d55.mjs";
import "./Label-229c476a.mjs";
import "./Input-4be85f13.mjs";
import "./Textarea-1805d9a6.mjs";
import "./Button-6b2e52a5.mjs";
import "./Logo-fe5a81e0.mjs";
import "@tinymce/tinymce-vue";
const OptionsRepository = {
  main() {
    return {
      async index() {
        try {
          const response = await axios.get(route("api.options.main.index"));
          return response.data;
        } catch (error) {
          throw new Error(error.response.data);
        }
      },
      async update(params) {
        try {
          const response = await axios.put(route("api.options.main.update"), params);
          return response.data;
        } catch (error) {
          throw new Error(error.response.data);
        }
      }
    };
  }
  // async fetch(params) {
  //     try {
  //         const response = await axios.get(route('api.categories.index', params));
  //         return response.data;
  //     } catch (error) {
  //         throw new Error(error.response.data.message);
  //     }
  // },
  // async update(item) {
  //     try {
  //         const response = await axios.put(route('api.categories.update', item.id), item);
  //         return response.data;
  //     } catch (error) {
  //         return error.response.data;
  //     }
  // },
  // async edit(id) {
  //     try {
  //         const response = await axios.get(route('api.categories.edit', id));
  //         return response.data;
  //     } catch (error) {
  //         return error.response.data;
  //     }
  // },
};
const _sfc_main = {
  __name: "Index",
  __ssrInlineRender: true,
  setup(__props) {
    const can = inject("$can");
    const { t } = useI18n();
    const state = ref({
      isLoading: false,
      options: {}
    });
    onMounted(() => fetch());
    const fetch = async () => {
      state.value.isLoading = true;
      const data = await OptionsRepository.main().index();
      if (data.success) {
        state.value.options = data.result;
      }
      state.value.isLoading = false;
    };
    const onUpdate = async () => {
      state.value.isLoading = true;
      const data = await OptionsRepository.main().update(state.value.options);
      if (data.success) {
        await swal({
          title: t("swal.updated"),
          icon: "success"
        });
      } else {
        console.log(data);
        await swal({
          title: t("swal.error"),
          icon: "error"
        });
      }
      state.value.isLoading = false;
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(_sfc_main$1, _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            if (state.value.isLoading) {
              _push2(ssrRenderComponent(Loader, null, null, _parent2, _scopeId));
            } else {
              _push2(`<!---->`);
            }
            if (unref(can)("show-main-options") && !state.value.isLoading) {
              _push2(ssrRenderComponent(_sfc_main$2, {
                options: state.value.options,
                onSubmitForm: onUpdate
              }, null, _parent2, _scopeId));
            } else {
              _push2(`<!---->`);
            }
          } else {
            return [
              state.value.isLoading ? (openBlock(), createBlock(Loader, { key: 0 })) : createCommentVNode("", true),
              unref(can)("show-main-options") && !state.value.isLoading ? (openBlock(), createBlock(_sfc_main$2, {
                key: 1,
                options: state.value.options,
                onSubmitForm: onUpdate
              }, null, 8, ["options"])) : createCommentVNode("", true)
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Admin/Options/Main/Index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
