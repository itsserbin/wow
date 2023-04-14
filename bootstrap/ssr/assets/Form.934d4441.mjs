import { inject, ref, onMounted, resolveComponent, mergeProps, unref, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent } from "vue/server-renderer";
const _sfc_main = {
  __name: "Form",
  __ssrInlineRender: true,
  props: ["item"],
  setup(__props) {
    const publishedStatuses = inject("$publishedStatuses");
    const products = ref([]);
    onMounted(() => {
      axios.get(route("api.products.list")).then(({ data }) => products.value = data.result).catch((response) => console.log(response));
    });
    function uploadSocialPreview() {
    }
    return (_ctx, _push, _parent, _attrs) => {
      const _component_label_component = resolveComponent("label-component");
      const _component_select_component = resolveComponent("select-component");
      const _component_textarea_component = resolveComponent("textarea-component");
      const _component_upload_input_component = resolveComponent("upload-input-component");
      _push(`<form${ssrRenderAttrs(mergeProps({ class: "flex flex-col" }, _attrs))}><div class="block mb-5">`);
      _push(ssrRenderComponent(_component_label_component, { value: "\u0421\u0442\u0430\u0442\u0443\u0441 \u043F\u0443\u0431\u043B\u0456\u043A\u0430\u0446\u0456\u0457" }, null, _parent));
      _push(ssrRenderComponent(_component_select_component, {
        modelValue: __props.item.published,
        "onUpdate:modelValue": ($event) => __props.item.published = $event,
        options: unref(publishedStatuses)
      }, null, _parent));
      _push(`</div><div class="block mb-5">`);
      _push(ssrRenderComponent(_component_label_component, { value: "\u0422\u0435\u043A\u0441\u0442 \u0432\u0456\u0434\u0433\u0443\u043A\u0430" }, null, _parent));
      _push(ssrRenderComponent(_component_textarea_component, {
        modelValue: __props.item.comment,
        "onUpdate:modelValue": ($event) => __props.item.comment = $event,
        rows: "4"
      }, null, _parent));
      _push(`</div><div class="block mb-5">`);
      _push(ssrRenderComponent(_component_upload_input_component, {
        multiple: false,
        id: "uploadCategoryPreview",
        label: "\u0417\u043E\u0431\u0440\u0430\u0436\u0435\u043D\u043D\u044F",
        onUpload: uploadSocialPreview,
        images: __props.item.image
      }, null, _parent));
      _push(`</div></form>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Admin/Content/Reviews/Socials/Form.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
