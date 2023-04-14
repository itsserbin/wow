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
        label: "\u0412\u0438\u0442\u0440\u0430\u0442\u0438",
        key: "cost"
      },
      {
        label: "\u041E\u0431\u0435\u0440\u0442",
        key: "turnover"
      },
      {
        label: "\u041C\u0430\u0440\u0436\u0430",
        key: "marginality"
      },
      {
        label: "\u0427\u0438\u0441\u0442\u0438\u0439 \u043F\u0440\u0438\u0431\u0443\u0442\u043E\u043A",
        key: "clear_profit"
      },
      {
        label: "\u0412\u0438\u043D\u0435\u043D \u043F\u043E\u0441\u0442\u0430\u0447\u0430\u043B\u044C\u043D\u0438\u043A",
        key: "debt_supplier"
      },
      {
        label: "\u041F\u0440\u043E\u0434\u0430\u0436\u0456 \u043F\u043E\u0432\u0456\u0442\u0440\u044F",
        key: "sale_of_air_sum"
      },
      {
        label: "\u0421\u0435\u0440\u0435\u0434\u043D\u044F \u043C\u0430\u0440\u0436\u0430",
        key: "average_marginality"
      },
      {
        label: "\u0421\u0443\u043C\u0430 \u043F\u0435\u0440\u0435\u043E\u0434\u043E\u043F\u043B\u0430\u0442",
        key: "prepayment_sum"
      },
      {
        label: "\u0421\u0443\u043C\u0430 \u043F\u0435\u0440\u0435\u043E\u0434\u043E\u043F\u043B\u0430\u0442 WFP",
        key: "prepayment_wfp_sum"
      },
      {
        label: "\u0421\u0443\u043C\u0430 \u043F\u0435\u0440\u0435\u043E\u0434\u043E\u043F\u043B\u0430\u0442 \u043D\u0430 \u043A\u0430\u0440\u0442\u0443",
        key: "prepayment_card_sum"
      },
      {
        label: "\u0421\u0443\u043C\u0430 \u0437\u0430 \u043F\u043E\u0432\u0435\u0440\u043D\u0435\u043D\u043D\u044F \u0442\u043E\u0432\u0430\u0440\u0443",
        key: "refunds_sum"
      },
      {
        label: "\u041C\u0430\u0440\u0436\u0430 \u0437 \u0434\u043E\u0434.\u043F\u0440\u043E\u0434\u0430\u0436",
        key: "additional_sales_marginality_sum"
      },
      {
        label: "\u041E\u0431\u0435\u0440\u0442 \u0434\u043E\u0434.\u043F\u0440\u043E\u0434\u0430\u0436",
        key: "additional_sales_sum"
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
        turnover: withCtx(({ data }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(_ctx.$filters.formatMoney(data.row.turnover))}`);
          } else {
            return [
              createTextVNode(toDisplayString(_ctx.$filters.formatMoney(data.row.turnover)), 1)
            ];
          }
        }),
        marginality: withCtx(({ data }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(_ctx.$filters.formatMoney(data.row.marginality))}`);
          } else {
            return [
              createTextVNode(toDisplayString(_ctx.$filters.formatMoney(data.row.marginality)), 1)
            ];
          }
        }),
        clear_profit: withCtx(({ data }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(_ctx.$filters.formatMoney(data.row.clear_profit))}`);
          } else {
            return [
              createTextVNode(toDisplayString(_ctx.$filters.formatMoney(data.row.clear_profit)), 1)
            ];
          }
        }),
        average_marginality: withCtx(({ data }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(_ctx.$filters.formatMoney(data.row.average_marginality))}`);
          } else {
            return [
              createTextVNode(toDisplayString(_ctx.$filters.formatMoney(data.row.average_marginality)), 1)
            ];
          }
        }),
        sale_of_air_sum: withCtx(({ data }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(_ctx.$filters.formatMoney(data.row.sale_of_air_sum))}`);
          } else {
            return [
              createTextVNode(toDisplayString(_ctx.$filters.formatMoney(data.row.sale_of_air_sum)), 1)
            ];
          }
        }),
        debt_supplier: withCtx(({ data }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(_ctx.$filters.formatMoney(data.row.debt_supplier))}`);
          } else {
            return [
              createTextVNode(toDisplayString(_ctx.$filters.formatMoney(data.row.debt_supplier)), 1)
            ];
          }
        }),
        prepayment_sum: withCtx(({ data }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(_ctx.$filters.formatMoney(data.row.prepayment_sum))}`);
          } else {
            return [
              createTextVNode(toDisplayString(_ctx.$filters.formatMoney(data.row.prepayment_sum)), 1)
            ];
          }
        }),
        refunds_sum: withCtx(({ data }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(_ctx.$filters.formatMoney(data.row.refunds_sum))}`);
          } else {
            return [
              createTextVNode(toDisplayString(_ctx.$filters.formatMoney(data.row.refunds_sum)), 1)
            ];
          }
        }),
        additional_sales_marginality_sum: withCtx(({ data }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(_ctx.$filters.formatMoney(data.row.additional_sales_marginality_sum))}`);
          } else {
            return [
              createTextVNode(toDisplayString(_ctx.$filters.formatMoney(data.row.additional_sales_marginality_sum)), 1)
            ];
          }
        }),
        additional_sales_sum: withCtx(({ data }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(_ctx.$filters.formatMoney(data.row.additional_sales_sum))}`);
          } else {
            return [
              createTextVNode(toDisplayString(_ctx.$filters.formatMoney(data.row.additional_sales_sum)), 1)
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Admin/Statistics/Profits/Table.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
