import { inject, ref, onMounted, mergeProps, unref, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent } from "vue/server-renderer";
import { _ as _sfc_main$1 } from "./Label-229c476a.mjs";
import { _ as _sfc_main$2 } from "./Input-4be85f13.mjs";
import { _ as _sfc_main$4 } from "./Textarea-1805d9a6.mjs";
import { _ as _sfc_main$3 } from "./Select-b70673dc.mjs";
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
      _push(`<form${ssrRenderAttrs(mergeProps({ class: "flex flex-col" }, _attrs))}><div class="mb-5"><div class="grid grid-cols-2 gap-4 mb-5"><div class="block">`);
      _push(ssrRenderComponent(_sfc_main$1, { value: "Назва" }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$2, {
        modelValue: __props.item.name,
        "onUpdate:modelValue": ($event) => __props.item.name = $event,
        type: "text"
      }, null, _parent));
      _push(`</div><div class="block">`);
      _push(ssrRenderComponent(_sfc_main$1, { value: "Час відправлення" }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$2, {
        modelValue: __props.item.time_of_dispatch,
        "onUpdate:modelValue": ($event) => __props.item.time_of_dispatch = $event,
        type: "text"
      }, null, _parent));
      _push(`</div></div><div class="grid grid-cols-2 gap-4 mb-5"><div class="block">`);
      _push(ssrRenderComponent(_sfc_main$1, { value: "Каталог" }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$2, {
        modelValue: __props.item.catalog,
        "onUpdate:modelValue": ($event) => __props.item.catalog = $event,
        type: "text"
      }, null, _parent));
      _push(`</div><div class="block">`);
      _push(ssrRenderComponent(_sfc_main$1, { value: "Наявність" }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$2, {
        modelValue: __props.item.availability,
        "onUpdate:modelValue": ($event) => __props.item.availability = $event,
        type: "text"
      }, null, _parent));
      _push(`</div></div></div><div class="mb-5"><div class="grid grid-cols-2 gap-4 mb-5"><div class="block">`);
      _push(ssrRenderComponent(_sfc_main$1, { value: "Передоплата" }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$3, {
        modelValue: __props.item.prepayment,
        "onUpdate:modelValue": ($event) => __props.item.prepayment = $event,
        options: unref(selectYesOrNo)
      }, null, _parent));
      _push(`</div><div class="block">`);
      _push(ssrRenderComponent(_sfc_main$1, { value: "Сума передоплати" }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$2, {
        modelValue: __props.item.prepayment_sum,
        "onUpdate:modelValue": ($event) => __props.item.prepayment_sum = $event,
        type: "number"
      }, null, _parent));
      _push(`</div></div><div class="grid grid-cols-2 gap-4 mb-5"><div class="block">`);
      _push(ssrRenderComponent(_sfc_main$1, { value: "Оплата повернення" }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$3, {
        modelValue: __props.item.refunds,
        "onUpdate:modelValue": ($event) => __props.item.refunds = $event,
        options: unref(selectYesOrNo)
      }, null, _parent));
      _push(`</div><div class="block">`);
      _push(ssrRenderComponent(_sfc_main$1, { value: "Сума повернення" }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$2, {
        modelValue: __props.item.refunds_sum,
        "onUpdate:modelValue": ($event) => __props.item.refunds_sum = $event,
        type: "number"
      }, null, _parent));
      _push(`</div></div></div><div class="grid grid-cols-2 gap-4 mb-5"><div class="block">`);
      _push(ssrRenderComponent(_sfc_main$1, { value: "Контакти" }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$4, {
        modelValue: __props.item.contacts,
        "onUpdate:modelValue": ($event) => __props.item.contacts = $event,
        rows: "4"
      }, null, _parent));
      _push(`</div><div class="block">`);
      _push(ssrRenderComponent(_sfc_main$1, { value: "Коментар" }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$4, {
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
