import { resolveComponent, mergeProps, withCtx, createTextVNode, toDisplayString, useSSRContext } from "vue";
import { ssrRenderComponent, ssrInterpolate } from "vue/server-renderer";
const _sfc_main = {
  __name: "Table",
  __ssrInlineRender: true,
  props: ["data"],
  setup(__props) {
    const headings = [
      {
        label: "\u0414\u0430\u0442\u0430",
        key: "date"
      },
      {
        label: "\u0421\u0440. \u0446\u0456\u043D\u0430 \u0437\u0430\u044F\u0432\u043A\u0438",
        key: "average_application_price"
      },
      {
        label: "\u0421\u0440. \u0446\u0456\u043D\u0430 \u0430\u043F\u0440\u0443\u0432\u0430",
        key: "average_approve_application_price"
      },
      {
        label: "\u0421\u0440. \u0446\u0456\u043D\u0430 \u0432\u0438\u043A\u043E\u043D\u0430\u043D\u043E\u0457 \u0437\u0430\u044F\u0432\u043A\u0438",
        key: "average_done_application_price"
      },
      {
        label: "\u0421\u0440. \u0447\u0435\u043A",
        key: "average_check"
      },
      {
        label: "\u0421\u0440. \u043C\u0430\u0440\u0436\u0430",
        key: "average_marginality"
      },
      {
        label: "\u0421\u0440. \u043A\u0456\u043B\u044C\u043A\u0456\u0441\u0442\u044C \u0442\u043E\u0432\u0430\u0440\u0456\u0432",
        key: "average_items"
      }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      const _component_table_component = resolveComponent("table-component");
      _push(ssrRenderComponent(_component_table_component, mergeProps({
        headings,
        rows: __props.data,
        isSlotMode: true
      }, _attrs), {
        date: withCtx(({ data }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(_ctx.$filters.dateFormat(data.row.date))}`);
          } else {
            return [
              createTextVNode(toDisplayString(_ctx.$filters.dateFormat(data.row.date)), 1)
            ];
          }
        }),
        costs: withCtx(({ data }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(_ctx.$filters.formatMoney(data.row.costs))}`);
          } else {
            return [
              createTextVNode(toDisplayString(_ctx.$filters.formatMoney(data.row.costs)), 1)
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Admin/Statistics/Marketing/Table.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
