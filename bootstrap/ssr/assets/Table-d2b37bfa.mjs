import { mergeProps, withCtx, createTextVNode, toDisplayString, useSSRContext } from "vue";
import { ssrRenderComponent, ssrInterpolate } from "vue/server-renderer";
import { _ as _sfc_main$1 } from "./Table-cc8335d6.mjs";
const _sfc_main = {
  __name: "Table",
  __ssrInlineRender: true,
  props: ["data"],
  setup(__props) {
    const headings = [
      {
        label: "Дата",
        key: "date"
      },
      {
        label: "Всього",
        key: "applications"
      },
      {
        label: "Передані постачальнику",
        key: "transferred_to_supplier"
      },
      {
        label: "Вимагають уточнення",
        key: "requires_clarification"
      },
      {
        label: "Очікують відправлення",
        key: "awaiting_dispatch"
      },
      {
        label: "Очікують передоплати",
        key: "awaiting_prepayment"
      },
      {
        label: "В дорозі",
        key: "on_the_road"
      },
      {
        label: "В процесі",
        key: "in_process"
      },
      {
        label: "На пошті",
        key: "at_the_post_office"
      },
      {
        label: "Виконані",
        key: "completed"
      },
      {
        label: "Повернення",
        key: "refunds"
      },
      {
        label: "Скасовані",
        key: "cancel"
      },
      {
        label: "Нові",
        key: "unprocessed"
      }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(_sfc_main$1, mergeProps({
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
