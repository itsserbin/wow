import { resolveComponent, mergeProps, withCtx, createTextVNode, toDisplayString, createVNode, useSSRContext } from "vue";
import { ssrRenderComponent, ssrInterpolate } from "vue/server-renderer";
const _sfc_main = {
  __name: "InvoicesTable",
  __ssrInlineRender: true,
  props: ["data", "statuses"],
  emits: ["editOrderItem", "destroyOrderItem"],
  setup(__props) {
    const headings = [
      {
        label: "ID",
        key: "id"
      },
      {
        label: "\u0421\u0443\u043C\u0430",
        key: "sum"
      },
      {
        label: "\u0421\u0442\u0430\u0442\u0443\u0441",
        key: "status"
      },
      {
        label: "\u041F\u043E\u0441\u0438\u043B\u0430\u043D\u043D\u044F \u0434\u043B\u044F \u043E\u043F\u043B\u0430\u0442\u0438",
        key: "status"
      },
      {
        label: "\u0414\u0430\u0442\u0430 \u0441\u0442\u0432\u043E\u0440\u0435\u043D\u043D\u044F<br/>\u0414\u0430\u0442\u0430 \u043D\u043E\u0432\u043B\u0435\u043D\u043D\u044F",
        key: "timestamp"
      }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      const _component_table_component = resolveComponent("table-component");
      _push(ssrRenderComponent(_component_table_component, mergeProps({
        isSlotMode: true,
        rows: __props.data,
        headings
      }, _attrs), {
        id: withCtx(({ data }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(data.row.id)}`);
          } else {
            return [
              createTextVNode(toDisplayString(data.row.id), 1)
            ];
          }
        }),
        sum: withCtx(({ data }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(_ctx.$filters.formatMoney(data.row.sum))}`);
          } else {
            return [
              createTextVNode(toDisplayString(_ctx.$filters.formatMoney(data.row.sum)), 1)
            ];
          }
        }),
        status: withCtx(({ data }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(__props.statuses[data.row.status])}`);
          } else {
            return [
              createTextVNode(toDisplayString(__props.statuses[data.row.status]), 1)
            ];
          }
        }),
        timestamp: withCtx(({ data }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(_ctx.$filters.dateFormat(data.row.created_at))} <br${_scopeId}> ${ssrInterpolate(_ctx.$filters.dateFormat(data.row.updated_at))}`);
          } else {
            return [
              createTextVNode(toDisplayString(_ctx.$filters.dateFormat(data.row.created_at)) + " ", 1),
              createVNode("br"),
              createTextVNode(" " + toDisplayString(_ctx.$filters.dateFormat(data.row.updated_at)), 1)
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Admin/Crm/Orders/InvoicesTable.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
