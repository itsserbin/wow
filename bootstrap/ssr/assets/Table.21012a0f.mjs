import { resolveComponent, mergeProps, withCtx, createVNode, toDisplayString, createTextVNode, useSSRContext } from "vue";
import { ssrRenderComponent, ssrRenderAttr, ssrInterpolate } from "vue/server-renderer";
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
        label: "\u0422\u043E\u0432\u0430\u0440",
        key: "product_id"
      },
      {
        label: "\u041F\u0440\u043E\u0434\u0430\u0436\u0456\u0432",
        key: "sales"
      },
      {
        label: "\u041F\u043E\u0432\u0435\u0440\u043D\u0435\u043D\u044C",
        key: "returns"
      },
      {
        label: "\u041E\u0431\u043C\u0456\u043D\u0456\u0432",
        key: "exchanges"
      },
      {
        label: "\u0421\u043A\u0430\u0441\u0443\u0432\u0430\u043D\u044C",
        key: "canceled"
      }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      const _component_table_component = resolveComponent("table-component");
      _push(ssrRenderComponent(_component_table_component, mergeProps({
        headings,
        rows: __props.data,
        isSlotMode: true
      }, _attrs), {
        product_id: withCtx(({ data }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<a target="_blank"${ssrRenderAttr("href", _ctx.route("product", data.row.product_id))}${_scopeId}>${ssrInterpolate(data.row.product_id)} -</a> ${ssrInterpolate(data.row.product.h1.ua ? data.row.product.h1.ua : data.row.product.h1.ru ? data.row.product.h1.ru : "\u0411\u0435\u0437 \u043D\u0430\u0437\u0432\u0438")}`);
          } else {
            return [
              createVNode("a", {
                target: "_blank",
                href: _ctx.route("product", data.row.product_id)
              }, toDisplayString(data.row.product_id) + " -", 9, ["href"]),
              createTextVNode(" " + toDisplayString(data.row.product.h1.ua ? data.row.product.h1.ua : data.row.product.h1.ru ? data.row.product.h1.ru : "\u0411\u0435\u0437 \u043D\u0430\u0437\u0432\u0438"), 1)
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
