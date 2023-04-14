import { inject, ref, onMounted, withCtx, unref, openBlock, createBlock, createCommentVNode, useSSRContext } from "vue";
import { ssrRenderComponent } from "vue/server-renderer";
import _sfc_main$1 from "./OptionsLayout-49f01291.mjs";
import _sfc_main$2 from "./Form-225be07e.mjs";
import "./AuthenticatedLayout-9b92d88f.mjs";
import "./ApplicationLogo-76725da6.mjs";
import "./Logo-21a2caa8.mjs";
import "@inertiajs/inertia-vue3";
import "@inertiajs/vue3";
import "./NavLink-5de78266.mjs";
import "vuex";
import "./SidebarItem-250f76bc.mjs";
import "./_plugin-vue_export-helper-cc2b3d55.mjs";
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
