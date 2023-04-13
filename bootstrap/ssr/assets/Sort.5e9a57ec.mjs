import { computed, mergeProps, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderAttr } from "vue/server-renderer";
const _sfc_main = {
  __name: "Sort",
  __ssrInlineRender: true,
  props: ["modelValue"],
  emits: ["toggleFilter", "sort", "update:modelValue"],
  setup(__props, { emit: emits }) {
    const props = __props;
    computed({
      get: () => props.modelValue,
      set: (value) => {
        emits("update:modelValue", value);
      }
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "block" }, _attrs))}><select class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"><option${ssrRenderAttr("value", null)}>\u041F\u043E\u043F\u0443\u043B\u044F\u0440\u043D\u0456</option><option value="created_at">\u041D\u043E\u0432\u0438\u043D\u043A\u0438</option><option value="min_price">\u0412\u0456\u0434 \u0434\u0435\u0448\u0435\u0432\u0438\u0445 \u0434\u043E \u0434\u043E\u0440\u043E\u0433\u0438\u0445</option><option value="max_price">\u0412\u0456\u0434 \u0434\u043E\u0440\u043E\u0433\u0438\u0445 \u0434\u043E \u0434\u0435\u0448\u0435\u0432\u0438\u0445</option></select></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Public/Category/Sort.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
