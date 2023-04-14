import { ref, onBeforeMount, onBeforeUpdate, computed, mergeProps, unref, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderClass, ssrRenderAttr, ssrRenderList, ssrRenderSlot, ssrInterpolate } from "vue/server-renderer";
const _sfc_main = {
  __name: "Paginate",
  __ssrInlineRender: true,
  props: {
    pagination: {
      type: Object
    },
    modelValue: {
      type: Number
    },
    pageRange: {
      type: Number,
      default: 10
    },
    initialPage: {
      type: Number,
      default: 1
    },
    forcePage: {
      type: Number
    },
    clickHandler: {
      type: Function,
      default: () => {
      }
    },
    marginPages: {
      type: Number,
      default: 1
    },
    prevText: {
      type: String,
      default: "<"
    },
    nextText: {
      type: String,
      default: ">"
    },
    breakViewText: {
      type: String,
      default: "…"
    },
    containerClass: {
      type: String,
      default: "inline-flex -space-x-px rounded-lg  dark:bg-gray-800"
    },
    pageClass: {
      type: String,
      default: "cursor-pointer py-2 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
    },
    pageLinkClass: {
      type: String,
      default: "px-3"
    },
    prevClass: {
      type: String,
      default: "cursor-pointer py-2 px-3 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
    },
    prevLinkClass: {
      type: String,
      default: ""
    },
    nextClass: {
      type: String,
      default: "cursor-pointer py-2 px-3 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
    },
    nextLinkClass: {
      type: String,
      default: ""
    },
    breakViewClass: {
      type: String
    },
    breakViewLinkClass: {
      type: String
    },
    activeClass: {
      type: String,
      default: "bg-gray-100 text-gray-700 dark:bg-gray-700 dark:text-white"
    },
    disabledClass: {
      type: String,
      default: "disabled"
    },
    noLiSurround: {
      type: Boolean,
      default: false
    },
    firstLastButton: {
      type: Boolean,
      default: true
    },
    firstButtonText: {
      type: String,
      default: "<<"
    },
    lastButtonText: {
      type: String,
      default: ">>"
    },
    hidePrevNext: {
      type: Boolean,
      default: false
    }
  },
  emits: ["update:modelValue"],
  setup(__props, { emit: emits }) {
    const props = __props;
    const state = ref({
      innerValue: 1,
      pageCount: null
    });
    onBeforeMount(() => {
      state.value.innerValue = props.initialPage;
    });
    onBeforeUpdate(() => {
      if (props.forcePage === void 0)
        return;
      if (props.forcePage !== selected.value) {
        selected.value = props.forcePage;
      }
    });
    const selected = computed({
      get() {
        return props.modelValue || state.value.innerValue;
      },
      set(newValue) {
        state.value.innerValue = newValue;
      }
    });
    const pages = computed(() => {
      let items = {};
      state.value.pageCount = props.pagination.last_page;
      if (state.value.pageCount <= props.pageRange) {
        for (let index = 0; index < state.value.pageCount; index++) {
          items[index] = {
            index,
            content: index + 1,
            selected: index === selected.value - 1
          };
        }
      } else {
        const halfPageRange = Math.floor(props.pageRange / 2);
        let setPageItem = (index) => {
          items[index] = {
            index,
            content: index + 1,
            selected: index === selected.value - 1
          };
        };
        let setBreakView = (index) => {
          items[index] = {
            disabled: true,
            breakView: true
          };
        };
        for (let i = 0; i < props.marginPages; i++) {
          setPageItem(i);
        }
        let selectedRangeLow = 0;
        if (selected.value - halfPageRange > 0) {
          selectedRangeLow = selected.value - 1 - halfPageRange;
        }
        let selectedRangeHigh = selectedRangeLow + props.pageRange - 1;
        if (selectedRangeHigh >= state.value.pageCount) {
          selectedRangeHigh = state.value.pageCount - 1;
          selectedRangeLow = selectedRangeHigh - props.pageRange + 1;
        }
        for (let i = selectedRangeLow; i <= selectedRangeHigh && i <= state.value.pageCount - 1; i++) {
          setPageItem(i);
        }
        if (selectedRangeLow > props.marginPages) {
          setBreakView(selectedRangeLow - 1);
        }
        if (selectedRangeHigh + 1 < state.value.pageCount - props.marginPages) {
          setBreakView(selectedRangeHigh + 1);
        }
        for (let i = state.value.pageCount - 1; i >= state.value.pageCount - props.marginPages; i--) {
          setPageItem(i);
        }
      }
      return items;
    });
    function firstPageSelected() {
      return selected.value === 1;
    }
    function lastPageSelected() {
      return selected.value === state.value.pageCount || state.value.pageCount === 0;
    }
    return (_ctx, _push, _parent, _attrs) => {
      if (!__props.noLiSurround) {
        _push(`<ul${ssrRenderAttrs(mergeProps({ class: __props.containerClass }, _attrs))}>`);
        if (__props.firstLastButton) {
          _push(`<li class="${ssrRenderClass([__props.pageClass, firstPageSelected() ? __props.disabledClass : ""])}"><a class="${ssrRenderClass(__props.pageLinkClass)}"${ssrRenderAttr("tabindex", firstPageSelected() ? -1 : 0)}>${__props.firstButtonText}</a></li>`);
        } else {
          _push(`<!---->`);
        }
        if (!(firstPageSelected() && __props.hidePrevNext)) {
          _push(`<li class="${ssrRenderClass([__props.prevClass, firstPageSelected() ? __props.disabledClass : ""])}"><a class="${ssrRenderClass(__props.prevLinkClass)}"${ssrRenderAttr("tabindex", firstPageSelected() ? -1 : 0)}>${__props.prevText}</a></li>`);
        } else {
          _push(`<!---->`);
        }
        _push(`<!--[-->`);
        ssrRenderList(unref(pages), (page) => {
          _push(`<li class="${ssrRenderClass([__props.pageClass, page.selected ? __props.activeClass : "", page.disabled ? __props.disabledClass : "", page.breakView ? __props.breakViewClass : ""])}">`);
          if (page.breakView) {
            _push(`<a class="${ssrRenderClass([__props.pageLinkClass, __props.breakViewLinkClass])}" tabindex="0">`);
            ssrRenderSlot(_ctx.$slots, "breakViewContent", {}, () => {
              _push(`${ssrInterpolate(__props.breakViewText)}`);
            }, _push, _parent);
            _push(`</a>`);
          } else if (page.disabled) {
            _push(`<a class="${ssrRenderClass(__props.pageLinkClass)}" tabindex="0">${ssrInterpolate(page.content)}</a>`);
          } else {
            _push(`<a class="${ssrRenderClass(__props.pageLinkClass)}" tabindex="0">${ssrInterpolate(page.content)}</a>`);
          }
          _push(`</li>`);
        });
        _push(`<!--]-->`);
        if (!(lastPageSelected() && __props.hidePrevNext)) {
          _push(`<li class="${ssrRenderClass([__props.nextClass, lastPageSelected() ? __props.disabledClass : ""])}"><a class="${ssrRenderClass(__props.nextLinkClass)}"${ssrRenderAttr("tabindex", lastPageSelected() ? -1 : 0)}>${__props.nextText}</a></li>`);
        } else {
          _push(`<!---->`);
        }
        if (__props.firstLastButton) {
          _push(`<li class="${ssrRenderClass([__props.pageClass, lastPageSelected() ? __props.disabledClass : ""])}"><a class="${ssrRenderClass(__props.pageLinkClass)}"${ssrRenderAttr("tabindex", lastPageSelected() ? -1 : 0)}>${__props.lastButtonText}</a></li>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</ul>`);
      } else {
        _push(`<div${ssrRenderAttrs(mergeProps({ class: __props.containerClass }, _attrs))}>`);
        if (__props.firstLastButton) {
          _push(`<a class="${ssrRenderClass([__props.pageLinkClass, firstPageSelected() ? __props.disabledClass : ""])}" tabindex="0">${__props.firstButtonText}</a>`);
        } else {
          _push(`<!---->`);
        }
        if (!(firstPageSelected() && __props.hidePrevNext)) {
          _push(`<a class="${ssrRenderClass([__props.prevLinkClass, firstPageSelected() ? __props.disabledClass : ""])}" tabindex="0">${__props.prevText}</a>`);
        } else {
          _push(`<!---->`);
        }
        _push(`<!--[-->`);
        ssrRenderList(unref(pages), (page) => {
          _push(`<!--[-->`);
          if (page.breakView) {
            _push(`<a class="${ssrRenderClass([__props.pageLinkClass, __props.breakViewLinkClass, page.disabled ? __props.disabledClass : ""])}" tabindex="0">`);
            ssrRenderSlot(_ctx.$slots, "breakViewContent", {}, () => {
              _push(`${ssrInterpolate(__props.breakViewText)}`);
            }, _push, _parent);
            _push(`</a>`);
          } else if (page.disabled) {
            _push(`<a class="${ssrRenderClass([__props.pageLinkClass, page.selected ? __props.activeClass : "", __props.disabledClass])}" tabindex="0">${ssrInterpolate(page.content)}</a>`);
          } else {
            _push(`<a class="${ssrRenderClass([__props.pageLinkClass, page.selected ? __props.activeClass : ""])}" tabindex="0">${ssrInterpolate(page.content)}</a>`);
          }
          _push(`<!--]-->`);
        });
        _push(`<!--]-->`);
        if (!(lastPageSelected() && __props.hidePrevNext)) {
          _push(`<a class="${ssrRenderClass([__props.nextLinkClass, lastPageSelected() ? __props.disabledClass : ""])}" tabindex="0">${__props.nextText}</a>`);
        } else {
          _push(`<!---->`);
        }
        if (__props.firstLastButton) {
          _push(`<a class="${ssrRenderClass([__props.pageLinkClass, lastPageSelected() ? __props.disabledClass : ""])}" tabindex="0">${__props.lastButtonText}</a>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div>`);
      }
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/Paginate.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as _
};
