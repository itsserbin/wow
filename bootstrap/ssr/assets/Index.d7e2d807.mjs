import { inject, ref, onMounted, withCtx, unref, openBlock, createBlock, createCommentVNode, useSSRContext } from "vue";
import { ssrRenderComponent } from "vue/server-renderer";
import _sfc_main$1 from "./OptionsLayout.94904958.mjs";
import _sfc_main$2 from "./Form.fa00fce9.mjs";
import { L as Loader } from "../app2.mjs";
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
import "./Logo.c2124519.mjs";
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
};
const _sfc_main = {
  __name: "Index",
  __ssrInlineRender: true,
  setup(__props) {
    const can = inject("$can");
    const swal = inject("$swal");
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
        swal({
          title: t("swal.updated"),
          icon: "success"
        });
      } else {
        console.log(data);
        swal({
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
