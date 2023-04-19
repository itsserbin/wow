import { ref, onMounted, mergeProps, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent } from "vue/server-renderer";
import { _ as _sfc_main$1 } from "./Label-229c476a.mjs";
import { _ as _sfc_main$2 } from "./Input-4be85f13.mjs";
import { M as Multiselect } from "./Multiselect-c4e07430.mjs";
import "./_plugin-vue_export-helper-cc2b3d55.mjs";
const _sfc_main = {
  __name: "Form",
  __ssrInlineRender: true,
  props: ["item"],
  setup(__props) {
    const roles = ref([]);
    onMounted(async () => {
      await axios.get(route("api.roles.list")).then(({ data }) => roles.value = data.result).catch((response) => console.error(response));
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<form${ssrRenderAttrs(mergeProps({ class: "grid grid-cols-1 gap-4" }, _attrs))}><div class="grid grid-cols-1 md:grid-cols-2 gap-4"><div class="block">`);
      _push(ssrRenderComponent(_sfc_main$1, { value: "Назва" }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$2, {
        modelValue: __props.item.name,
        "onUpdate:modelValue": ($event) => __props.item.name = $event,
        type: "text"
      }, null, _parent));
      _push(`</div><div class="block">`);
      _push(ssrRenderComponent(_sfc_main$1, { value: "Email" }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$2, {
        modelValue: __props.item.email,
        "onUpdate:modelValue": ($event) => __props.item.email = $event,
        type: "email"
      }, null, _parent));
      _push(`</div></div><div class="block">`);
      _push(ssrRenderComponent(_sfc_main$1, { value: "Ролі" }, null, _parent));
      _push(ssrRenderComponent(Multiselect, {
        options: roles.value,
        modelValue: __props.item.roles,
        "onUpdate:modelValue": ($event) => __props.item.roles = $event,
        label: "name",
        placeholder: "Оберіть ролі",
        "track-by": "id",
        "close-on-select": false,
        searchable: true,
        multiple: ""
      }, null, _parent));
      _push(`</div><div class="grid grid-cols-1 md:grid-cols-2 gap-4"><div class="block">`);
      _push(ssrRenderComponent(_sfc_main$1, { value: "Новий пароль" }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$2, {
        modelValue: __props.item.password,
        "onUpdate:modelValue": ($event) => __props.item.password = $event,
        type: "password"
      }, null, _parent));
      _push(`</div><div class="block">`);
      _push(ssrRenderComponent(_sfc_main$1, { value: "Підтвердження паролю" }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$2, {
        modelValue: __props.item.password_confirmation,
        "onUpdate:modelValue": ($event) => __props.item.password_confirmation = $event,
        type: "password"
      }, null, _parent));
      _push(`</div></div></form>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Admin/Options/Users/Form.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
