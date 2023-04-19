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
        label: "Надійшло заявок",
        key: "count_applications"
      },
      {
        label: "В процесі",
        key: "in_process_applications"
      },
      {
        label: "Зроблено дод.продаж",
        key: "count_additional_sales"
      },
      {
        label: "Скасованих",
        key: "canceled_applications"
      },
      {
        label: "Повернень",
        key: "returned_applications"
      },
      {
        label: "Виконаних",
        key: "done_applications"
      },
      {
        label: "Загальний апрув",
        key: "total_applications"
      },
      {
        label: "Кількість дод.продажів повітря",
        key: "count_sale_of_air"
      },
      {
        label: "Сума дод.продажів повітря",
        key: "price_sale_of_air"
      },
      {
        label: "Прибуток з дод.продажів повітря",
        key: "total_sale_of_air"
      },
      {
        label: "Загальна маржа дод.продажів",
        key: "sum_additional_sales"
      },
      {
        label: "Сума за заявки",
        key: "sum_price_applications"
      },
      {
        label: "Сума за дод.продажі",
        key: "sum_price_additional_sales"
      },
      {
        label: "Кількість нагадувань про посилку",
        key: "count_parcel_reminder"
      },
      {
        label: "Кількість передоплат",
        key: "count_prepayments"
      },
      {
        label: "Сума за передоплати",
        key: "prepayments_amount"
      },
      {
        label: "Загальна сума",
        key: "total_price"
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
