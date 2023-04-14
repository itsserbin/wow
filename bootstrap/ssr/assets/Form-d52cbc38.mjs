import { inject, ref, onMounted, resolveComponent, mergeProps, unref, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent } from "vue/server-renderer";
const _sfc_main = {
  __name: "Form",
  __ssrInlineRender: true,
  props: ["item"],
  emits: ["submit"],
  setup(__props, { emit: emits }) {
    const props = __props;
    const selectYesOrNo = inject("$selectYesOrNo");
    const state = ref({
      publishedOptions: [
        {
          key: 0,
          value: "Not published"
        },
        {
          key: 1,
          value: "Published"
        }
      ],
      categories: [],
      categoryPreview: []
    });
    onMounted(() => {
      getCategoriesList();
      if (props.item.preview) {
        state.value.categoryPreview.push({
          alt: props.item.title.ua ? props.item.title.ua : props.item.title.ru ? props.item.title.ru : "-",
          src: props.item.preview
        });
      }
    });
    function getCategoriesList() {
      axios.get(route("api.categories.list")).then(({ data }) => {
        data.result.forEach((item) => {
          state.value.categories.push(
            {
              key: item.id,
              value: item.title.ua ? item.title.ua : item.title.ru
            }
          );
        });
      }).catch((response) => console.log(response));
    }
    return (_ctx, _push, _parent, _attrs) => {
      const _component_label_component = resolveComponent("label-component");
      const _component_input_component = resolveComponent("input-component");
      const _component_select_component = resolveComponent("select-component");
      const _component_textarea_component = resolveComponent("textarea-component");
      _push(`<form${ssrRenderAttrs(mergeProps({ class: "flex flex-col" }, _attrs))}><div class="mb-5"><div class="grid grid-cols-2 gap-4 mb-5"><div class="block">`);
      _push(ssrRenderComponent(_component_label_component, { value: "Назва" }, null, _parent));
      _push(ssrRenderComponent(_component_input_component, {
        modelValue: __props.item.name,
        "onUpdate:modelValue": ($event) => __props.item.name = $event,
        type: "text"
      }, null, _parent));
      _push(`</div><div class="block">`);
      _push(ssrRenderComponent(_component_label_component, { value: "Час відправлення" }, null, _parent));
      _push(ssrRenderComponent(_component_input_component, {
        modelValue: __props.item.time_of_dispatch,
        "onUpdate:modelValue": ($event) => __props.item.time_of_dispatch = $event,
        type: "text"
      }, null, _parent));
      _push(`</div></div><div class="grid grid-cols-2 gap-4 mb-5"><div class="block">`);
      _push(ssrRenderComponent(_component_label_component, { value: "Каталог" }, null, _parent));
      _push(ssrRenderComponent(_component_input_component, {
        modelValue: __props.item.catalog,
        "onUpdate:modelValue": ($event) => __props.item.catalog = $event,
        type: "text"
      }, null, _parent));
      _push(`</div><div class="block">`);
      _push(ssrRenderComponent(_component_label_component, { value: "Наявність" }, null, _parent));
      _push(ssrRenderComponent(_component_input_component, {
        modelValue: __props.item.availability,
        "onUpdate:modelValue": ($event) => __props.item.availability = $event,
        type: "text"
      }, null, _parent));
      _push(`</div></div></div><div class="mb-5"><div class="grid grid-cols-2 gap-4 mb-5"><div class="block">`);
      _push(ssrRenderComponent(_component_label_component, { value: "Передоплата" }, null, _parent));
      _push(ssrRenderComponent(_component_select_component, {
        modelValue: __props.item.prepayment,
        "onUpdate:modelValue": ($event) => __props.item.prepayment = $event,
        options: unref(selectYesOrNo)
      }, null, _parent));
      _push(`</div><div class="block">`);
      _push(ssrRenderComponent(_component_label_component, { value: "Сума передоплати" }, null, _parent));
      _push(ssrRenderComponent(_component_input_component, {
        modelValue: __props.item.prepayment_sum,
        "onUpdate:modelValue": ($event) => __props.item.prepayment_sum = $event,
        type: "number"
      }, null, _parent));
      _push(`</div></div><div class="grid grid-cols-2 gap-4 mb-5"><div class="block">`);
      _push(ssrRenderComponent(_component_label_component, { value: "Оплата повернення" }, null, _parent));
      _push(ssrRenderComponent(_component_select_component, {
        modelValue: __props.item.refunds,
        "onUpdate:modelValue": ($event) => __props.item.refunds = $event,
        options: unref(selectYesOrNo)
      }, null, _parent));
      _push(`</div><div class="block">`);
      _push(ssrRenderComponent(_component_label_component, { value: "Сума повернення" }, null, _parent));
      _push(ssrRenderComponent(_component_input_component, {
        modelValue: __props.item.refunds_sum,
        "onUpdate:modelValue": ($event) => __props.item.refunds_sum = $event,
        type: "number"
      }, null, _parent));
      _push(`</div></div></div><div class="grid grid-cols-2 gap-4 mb-5"><div class="block">`);
      _push(ssrRenderComponent(_component_label_component, { value: "Контакти" }, null, _parent));
      _push(ssrRenderComponent(_component_textarea_component, {
        modelValue: __props.item.contacts,
        "onUpdate:modelValue": ($event) => __props.item.contacts = $event,
        rows: "4"
      }, null, _parent));
      _push(`</div><div class="block">`);
      _push(ssrRenderComponent(_component_label_component, { value: "Коментар" }, null, _parent));
      _push(ssrRenderComponent(_component_textarea_component, {
        modelValue: __props.item.comment,
        "onUpdate:modelValue": ($event) => __props.item.comment = $event,
        rows: "4"
      }, null, _parent));
      _push(`</div></div></form>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Admin/Options/Providers/Form.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
