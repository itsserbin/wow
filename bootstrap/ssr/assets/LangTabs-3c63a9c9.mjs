import { ref, onMounted, mergeProps, useSSRContext, inject, unref } from "vue";
import { ssrRenderAttrs, ssrRenderList, ssrRenderClass, ssrInterpolate, ssrRenderComponent } from "vue/server-renderer";
const _sfc_main$1 = {
  __name: "Tabs",
  __ssrInlineRender: true,
  props: ["data", "activeItem", "classes"],
  emits: ["clickTab"],
  setup(__props, { emit: emits }) {
    const props = __props;
    const active = ref(null);
    onMounted(() => {
      if (props.activeItem) {
        active.value = props.activeItem;
      }
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<ul${ssrRenderAttrs(mergeProps({
        class: ["flex flex-wrap text-sm font-medium text-center text-gray-500 border-b border-gray-200 dark:border-gray-700 dark:text-gray-400", __props.classes]
      }, _attrs))}><!--[-->`);
      ssrRenderList(__props.data, (item) => {
        _push(`<li class="mr-2"><a href="javascript:" class="${ssrRenderClass({
          "inline-block p-4 rounded-t-lg hover:text-gray-600 hover:bg-gray-50 dark:hover:bg-gray-800 dark:hover:text-gray-300": active.value !== item.key,
          "inline-block p-4 rounded-t-lg text-blue-600 bg-gray-100 active dark:bg-gray-800 dark:text-blue-500": active.value === item.key
        })}">${ssrInterpolate(item.value)}</a></li>`);
      });
      _push(`<!--]--></ul>`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/Tabs.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = {
  __name: "LangTabs",
  __ssrInlineRender: true,
  props: ["activeItem"],
  emits: ["clickLang"],
  setup(__props, { emit: emits }) {
    const defaultLang = inject("$defaultLang");
    const tabsData = ref([
      {
        key: "ua",
        value: "UA"
      },
      {
        key: "ru",
        value: "RU"
      }
    ]);
    function clickTab(val) {
      emits("clickLang", val);
    }
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(_sfc_main$1, mergeProps({
        data: tabsData.value,
        activeItem: __props.activeItem ? __props.activeItem : unref(defaultLang),
        onClickTab: clickTab,
        classes: "justify-center"
      }, _attrs), null, _parent));
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/LangTabs.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as _
};
