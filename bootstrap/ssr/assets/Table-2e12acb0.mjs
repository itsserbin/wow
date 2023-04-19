import { mergeProps, withCtx, createVNode, toDisplayString, createTextVNode, useSSRContext } from "vue";
import { ssrRenderComponent, ssrRenderAttr, ssrInterpolate } from "vue/server-renderer";
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
        label: "Товар",
        key: "product_id"
      },
      {
        label: "Продажів",
        key: "sales"
      },
      {
        label: "Повернень",
        key: "returns"
      },
      {
        label: "Обмінів",
        key: "exchanges"
      },
      {
        label: "Скасувань",
        key: "canceled"
      }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(_sfc_main$1, mergeProps({
        headings,
        rows: __props.data,
        isSlotMode: true
      }, _attrs), {
        product_id: withCtx(({ data }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<a target="_blank"${ssrRenderAttr("href", _ctx.route("product", data.row.product_id))}${_scopeId}>${ssrInterpolate(data.row.product_id)} -</a> ${ssrInterpolate(data.row.product.h1.ua ? data.row.product.h1.ua : data.row.product.h1.ru ? data.row.product.h1.ru : "Без назви")}`);
          } else {
            return [
              createVNode("a", {
                target: "_blank",
                href: _ctx.route("product", data.row.product_id)
              }, toDisplayString(data.row.product_id) + " -", 9, ["href"]),
              createTextVNode(" " + toDisplayString(data.row.product.h1.ua ? data.row.product.h1.ua : data.row.product.h1.ru ? data.row.product.h1.ru : "Без назви"), 1)
            ];
          }
        }),
        date: withCtx(({ data }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(_ctx.$filters.dateFormat(data.row.date))}`);
          } else {
            return [
              createTextVNode(toDisplayString(_ctx.$filters.dateFormat(data.row.date)), 1)
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Admin/Statistics/Products/Table.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
