import { useSSRContext, mergeProps } from "vue";
import { ssrRenderAttrs, ssrRenderClass, ssrRenderList, ssrRenderComponent, ssrRenderSlot, ssrInterpolate } from "vue/server-renderer";
const _sfc_main$2 = {
  __name: "ArrowUp",
  __ssrInlineRender: true,
  props: ["width", "height"],
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<svg${ssrRenderAttrs(mergeProps({
        xmlns: "http://www.w3.org/2000/svg",
        width: __props.width ? __props.width : "16",
        height: __props.height ? __props.height : "16",
        fill: "currentColor",
        class: "bi bi-chevron-up",
        viewBox: "0 0 16 16"
      }, _attrs))}><path fill-rule="evenodd" d="M7.646 4.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 5.707l-5.646 5.647a.5.5 0 0 1-.708-.708l6-6z"></path></svg>`);
    };
  }
};
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/Icons/ArrowUp.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const _sfc_main$1 = {
  __name: "ArrowDown",
  __ssrInlineRender: true,
  props: ["width", "height"],
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<svg${ssrRenderAttrs(mergeProps({
        xmlns: "http://www.w3.org/2000/svg",
        width: __props.width ? __props.width : "16",
        height: __props.height ? __props.height : "16",
        fill: "currentColor",
        class: "bi bi-chevron-down",
        viewBox: "0 0 16 16"
      }, _attrs))}><path fill-rule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"></path></svg>`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/Icons/ArrowDown.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = {
  __name: "Table",
  __ssrInlineRender: true,
  props: {
    headings: Array,
    rows: Array,
    isSlotMode: {
      type: Boolean,
      default: false
    },
    nowrap: {
      type: Boolean,
      default: true
    },
    responsive: {
      type: Boolean,
      default: true
    }
  },
  emits: ["fetch", "sort"],
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "not-prose relative bg-slate-50 rounded-xl overflow-hidden dark:bg-slate-800/25" }, _attrs))}><div class="absolute inset-0 bg-grid-slate-100 [mask-image:linear-gradient(0deg,#fff,rgba(255,255,255,0.6))] dark:bg-grid-slate-700/25 dark:[mask-image:linear-gradient(0deg,rgba(255,255,255,0.1),rgba(255,255,255,0.5))]"></div><div class="relative rounded-xl"><div class="${ssrRenderClass([{ "whitespace-nowrap": __props.nowrap, "overflow-x-scroll": __props.responsive }, "shadow-sm my-8"])}"><table class="border-collapse table-auto w-full text-sm text-center"><thead><tr><!--[-->`);
      ssrRenderList(__props.headings, (heading) => {
        _push(`<th class="border-b dark:border-slate-600 font-medium p-4 pl-8 pt-0 pb-3 text-slate-400 dark:text-slate-200"><div class="flex items-center justify-center"><span>${heading.label}</span>`);
        if (heading.sortable) {
          _push(`<div class="hover:cursor-pointer ml-2">`);
          _push(ssrRenderComponent(_sfc_main$2, {
            onClick: ($event) => _ctx.$emit("sort", heading.key, "asc")
          }, null, _parent));
          _push(ssrRenderComponent(_sfc_main$1, {
            onClick: ($event) => _ctx.$emit("sort", heading.key, "desc")
          }, null, _parent));
          _push(`</div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div></th>`);
      });
      _push(`<!--]--></tr></thead><tbody class="bg-white dark:bg-slate-800"><!--[-->`);
      ssrRenderList(__props.rows, (row, i) => {
        _push(`<tr class="hover:bg-gray-200 dark:hover:bg-gray-700 transition-all"><!--[-->`);
        ssrRenderList(__props.headings, (heading) => {
          _push(`<td class="border-b border-slate-100 dark:border-slate-700 p-4 pl-8 text-slate-500 dark:text-slate-400">`);
          if (__props.isSlotMode && _ctx.$slots[heading.key]) {
            _push(`<div>`);
            ssrRenderSlot(_ctx.$slots, heading.key, {
              data: { row, i }
            }, null, _push, _parent);
            _push(`</div>`);
          } else {
            _push(`<!--[-->`);
            ssrRenderList(row, (value, key) => {
              _push(`<div>${ssrInterpolate(key === heading.key ? value : null)}</div>`);
            });
            _push(`<!--]-->`);
          }
          _push(`</td>`);
        });
        _push(`<!--]--></tr>`);
      });
      _push(`<!--]--></tbody></table></div></div><div class="absolute inset-0 pointer-events-none border border-black/5 rounded-xl dark:border-white/5"></div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/Table.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as _,
  _sfc_main$2 as a,
  _sfc_main$1 as b
};
