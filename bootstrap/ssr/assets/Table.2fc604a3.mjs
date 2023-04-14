import { reactive, resolveComponent, mergeProps, withCtx, createTextVNode, toDisplayString, useSSRContext } from "vue";
import { ssrRenderComponent, ssrInterpolate } from "vue/server-renderer";
const _sfc_main = {
  __name: "Table",
  __ssrInlineRender: true,
  props: ["data"],
  setup(__props) {
    const headings = reactive([
      {
        label: "\u0414\u0430\u0442\u0430",
        key: "date"
      },
      {
        label: "\u0412\u0441\u044C\u043E\u0433\u043E",
        key: "applications"
      },
      {
        label: "\u041F\u0435\u0440\u0435\u0434\u0430\u043D\u0456 \u043F\u043E\u0441\u0442\u0430\u0447\u0430\u043B\u044C\u043D\u0438\u043A\u0443",
        key: "transferred_to_supplier"
      },
      {
        label: "\u0412\u0438\u043C\u0430\u0433\u0430\u044E\u0442\u044C \u0443\u0442\u043E\u0447\u043D\u0435\u043D\u043D\u044F",
        key: "requires_clarification"
      },
      {
        label: "\u041E\u0447\u0456\u043A\u0443\u044E\u0442\u044C \u0432\u0456\u0434\u043F\u0440\u0430\u0432\u043B\u0435\u043D\u043D\u044F",
        key: "awaiting_dispatch"
      },
      {
        label: "\u041E\u0447\u0456\u043A\u0443\u044E\u0442\u044C \u043F\u0435\u0440\u0435\u0434\u043E\u043F\u043B\u0430\u0442\u0438",
        key: "awaiting_prepayment"
      },
      {
        label: "\u0412 \u0434\u043E\u0440\u043E\u0437\u0456",
        key: "on_the_road"
      },
      {
        label: "\u0412 \u043F\u0440\u043E\u0446\u0435\u0441\u0456",
        key: "in_process"
      },
      {
        label: "\u041D\u0430 \u043F\u043E\u0448\u0442\u0456",
        key: "at_the_post_office"
      },
      {
        label: "\u0412\u0438\u043A\u043E\u043D\u0430\u043D\u0456",
        key: "completed"
      },
      {
        label: "\u041F\u043E\u0432\u0435\u0440\u043D\u0435\u043D\u043D\u044F",
        key: "refunds"
      },
      {
        label: "\u0421\u043A\u0430\u0441\u043E\u0432\u0430\u043D\u0456",
        key: "cancel"
      },
      {
        label: "\u041D\u043E\u0432\u0456",
        key: "unprocessed"
      }
    ]);
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
        completed: withCtx(({ data }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(data.row.completed ? `${data.row.completed} (${data.row.received_parcel_ratio}%)` : data.row.completed)}`);
          } else {
            return [
              createTextVNode(toDisplayString(data.row.completed ? `${data.row.completed} (${data.row.received_parcel_ratio}%)` : data.row.completed), 1)
            ];
          }
        }),
        refunds: withCtx(({ data }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(data.row.refunds ? `${data.row.refunds} (${data.row.returned_orders_ratio}%)` : data.row.refunds)}`);
          } else {
            return [
              createTextVNode(toDisplayString(data.row.refunds ? `${data.row.refunds} (${data.row.returned_orders_ratio}%)` : data.row.refunds), 1)
            ];
          }
        }),
        cancel: withCtx(({ data }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(data.row.cancel ? `${data.row.cancel} (${data.row.canceled_orders_rate}%)` : data.row.cancel)}`);
          } else {
            return [
              createTextVNode(toDisplayString(data.row.cancel ? `${data.row.cancel} (${data.row.canceled_orders_rate}%)` : data.row.cancel), 1)
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Admin/Statistics/Orders/Table.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
