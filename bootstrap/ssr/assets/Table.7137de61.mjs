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
        label: "\u041D\u0430\u0434\u0456\u0439\u0448\u043B\u043E \u0437\u0430\u044F\u0432\u043E\u043A",
        key: "count_applications"
      },
      {
        label: "\u0412 \u043F\u0440\u043E\u0446\u0435\u0441\u0456",
        key: "in_process_applications"
      },
      {
        label: "\u0417\u0440\u043E\u0431\u043B\u0435\u043D\u043E \u0434\u043E\u0434.\u043F\u0440\u043E\u0434\u0430\u0436",
        key: "count_additional_sales"
      },
      {
        label: "\u0421\u043A\u0430\u0441\u043E\u0432\u0430\u043D\u0438\u0445",
        key: "canceled_applications"
      },
      {
        label: "\u041F\u043E\u0432\u0435\u0440\u043D\u0435\u043D\u044C",
        key: "returned_applications"
      },
      {
        label: "\u0412\u0438\u043A\u043E\u043D\u0430\u043D\u0438\u0445",
        key: "done_applications"
      },
      {
        label: "\u0417\u0430\u0433\u0430\u043B\u044C\u043D\u0438\u0439 \u0430\u043F\u0440\u0443\u0432",
        key: "total_applications"
      },
      {
        label: "\u041A\u0456\u043B\u044C\u043A\u0456\u0441\u0442\u044C \u0434\u043E\u0434.\u043F\u0440\u043E\u0434\u0430\u0436\u0456\u0432 \u043F\u043E\u0432\u0456\u0442\u0440\u044F",
        key: "count_sale_of_air"
      },
      {
        label: "\u0421\u0443\u043C\u0430 \u0434\u043E\u0434.\u043F\u0440\u043E\u0434\u0430\u0436\u0456\u0432 \u043F\u043E\u0432\u0456\u0442\u0440\u044F",
        key: "price_sale_of_air"
      },
      {
        label: "\u041F\u0440\u0438\u0431\u0443\u0442\u043E\u043A \u0437 \u0434\u043E\u0434.\u043F\u0440\u043E\u0434\u0430\u0436\u0456\u0432 \u043F\u043E\u0432\u0456\u0442\u0440\u044F",
        key: "total_sale_of_air"
      },
      {
        label: "\u0417\u0430\u0433\u0430\u043B\u044C\u043D\u0430 \u043C\u0430\u0440\u0436\u0430 \u0434\u043E\u0434.\u043F\u0440\u043E\u0434\u0430\u0436\u0456\u0432",
        key: "sum_additional_sales"
      },
      {
        label: "\u0421\u0443\u043C\u0430 \u0437\u0430 \u0437\u0430\u044F\u0432\u043A\u0438",
        key: "sum_price_applications"
      },
      {
        label: "\u0421\u0443\u043C\u0430 \u0437\u0430 \u0434\u043E\u0434.\u043F\u0440\u043E\u0434\u0430\u0436\u0456",
        key: "sum_price_additional_sales"
      },
      {
        label: "\u041A\u0456\u043B\u044C\u043A\u0456\u0441\u0442\u044C \u043D\u0430\u0433\u0430\u0434\u0443\u0432\u0430\u043D\u044C \u043F\u0440\u043E \u043F\u043E\u0441\u0438\u043B\u043A\u0443",
        key: "count_parcel_reminder"
      },
      {
        label: "\u041A\u0456\u043B\u044C\u043A\u0456\u0441\u0442\u044C \u043F\u0435\u0440\u0435\u0434\u043E\u043F\u043B\u0430\u0442",
        key: "count_prepayments"
      },
      {
        label: "\u0421\u0443\u043C\u0430 \u0437\u0430 \u043F\u0435\u0440\u0435\u0434\u043E\u043F\u043B\u0430\u0442\u0438",
        key: "prepayments_amount"
      },
      {
        label: "\u0417\u0430\u0433\u0430\u043B\u044C\u043D\u0430 \u0441\u0443\u043C\u0430",
        key: "total_price"
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Admin/Statistics/Managers/Table.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};