import { inject, ref, onMounted, withCtx, unref, openBlock, createBlock, createCommentVNode, useSSRContext } from "vue";
import { ssrRenderComponent } from "vue/server-renderer";
import _sfc_main$1 from "./OptionsLayout.94904958.mjs";
import _sfc_main$2 from "./Form.642e2cf4.mjs";
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
    const can = inject("$can");
    const swal = inject("$swal");
    const state = ref({
      options: {
        head_scripts: null,
        after_body_scripts: null,
        footer_scripts: null
      }
    });
    onMounted(() => {
      axios.get(route("api.options.scripts.index")).then(({ data }) => state.value.options = data.result).catch((response) => console.log(response));
    });
    function onUpdate() {
      axios.put(route("api.options.scripts.update"), state.value.options).then(({ data }) => {
        swal({
          title: "Updated!",
          icon: "success"
        });
      }).catch((response) => {
        swal({
          title: "Error",
          icon: "error"
        });
        console.log(response);
      });
    }
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(_sfc_main$1, _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            if (unref(can)("show-scripts-options")) {
              _push2(ssrRenderComponent(_sfc_main$2, {
                options: state.value.options,
                onSubmitForm: onUpdate
              }, null, _parent2, _scopeId));
            } else {
              _push2(`<!---->`);
            }
          } else {
            return [
              unref(can)("show-scripts-options") ? (openBlock(), createBlock(_sfc_main$2, {
                key: 0,
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Admin/Options/Scripts/Index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
