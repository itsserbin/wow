import { mergeProps, withCtx, createVNode, toDisplayString, createTextVNode, openBlock, createBlock, createCommentVNode, useSSRContext } from "vue";
import { ssrRenderComponent, ssrInterpolate, ssrRenderAttr } from "vue/server-renderer";
import { _ as _sfc_main$1 } from "./Table-df76b95f.mjs";
import { _ as _sfc_main$2 } from "./XCircle-df3891c5.mjs";
const _sfc_main = {
  __name: "Table",
  __ssrInlineRender: true,
  props: ["data", "statuses", "canDestroy"],
  emits: ["onDestroy", "onEdit", "orderBy"],
  setup(__props, { emit: emits }) {
    const sort = (key, type) => {
      emits("orderBy", key, type);
    };
    const headings = [
      {
        label: "ID",
        key: "id",
        sortable: true
      },
      {
        label: "Статус",
        key: "status",
        sortable: true
      },
      {
        label: "Імʼя",
        key: "name"
      },
      {
        label: "Прізвище",
        key: "last_name"
      },
      {
        label: "Телефон",
        key: "phone"
      },
      {
        label: "ТТН",
        key: "waybill"
      },
      {
        label: "Товарів",
        key: "total_count",
        sortable: true
      },
      {
        label: "Сума",
        key: "total_price",
        sortable: true
      },
      {
        label: "Коментар",
        key: "comment"
      },
      {
        label: "Створено",
        key: "created_at",
        sortable: true
      },
      {
        label: "Оновлено",
        key: "updated_at",
        sortable: true
      },
      {
        label: "#",
        key: "actions"
      }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(_sfc_main$1, mergeProps({
        headings,
        isSlotMode: true,
        rows: __props.data,
        onSort: sort
      }, _attrs), {
        id: withCtx(({ data }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<a href="javascript:"${_scopeId}>${ssrInterpolate(data.row.id)}</a>`);
          } else {
            return [
              createVNode("a", {
                href: "javascript:",
                onClick: ($event) => _ctx.$emit("onEdit", data.row.id, data.i)
              }, toDisplayString(data.row.id), 9, ["onClick"])
            ];
          }
        }),
        name: withCtx(({ data }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(data.row.client ? data.row.client.name ? data.row.client.name : "-" : null)}`);
          } else {
            return [
              createTextVNode(toDisplayString(data.row.client ? data.row.client.name ? data.row.client.name : "-" : null), 1)
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
        last_name: withCtx(({ data }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(data.row.client ? data.row.client.last_name ? data.row.client.last_name : "-" : null)}`);
          } else {
            return [
              createTextVNode(toDisplayString(data.row.client ? data.row.client.last_name ? data.row.client.last_name : "-" : null), 1)
            ];
          }
        }),
        total_price: withCtx(({ data }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(_ctx.$filters.formatMoney(data.row.total_price))}`);
          } else {
            return [
              createTextVNode(toDisplayString(_ctx.$filters.formatMoney(data.row.total_price)), 1)
            ];
          }
        }),
        phone: withCtx(({ data }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<a${ssrRenderAttr("href", "tel:" + (data.row.client ? data.row.client.phone : null))}${_scopeId}>${ssrInterpolate(data.row.client ? data.row.client.phone : null)}</a>`);
          } else {
            return [
              createVNode("a", {
                href: "tel:" + (data.row.client ? data.row.client.phone : null)
              }, toDisplayString(data.row.client ? data.row.client.phone : null), 9, ["href"])
            ];
          }
        }),
        comment: withCtx(({ data }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="whitespace-normal w-48"${_scopeId}>${ssrInterpolate(data.row.comment ? data.row.comment.substr(0, 30) + "..." : "-")}</div>`);
          } else {
            return [
              createVNode("div", { class: "whitespace-normal w-48" }, toDisplayString(data.row.comment ? data.row.comment.substr(0, 30) + "..." : "-"), 1)
            ];
          }
        }),
        created_at: withCtx(({ data }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(_ctx.$filters.dateTimeFormat(data.row.created_at))}`);
          } else {
            return [
              createTextVNode(toDisplayString(_ctx.$filters.dateTimeFormat(data.row.created_at)), 1)
            ];
          }
        }),
        updated_at: withCtx(({ data }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(_ctx.$filters.dateTimeFormat(data.row.updated_at))}`);
          } else {
            return [
              createTextVNode(toDisplayString(_ctx.$filters.dateTimeFormat(data.row.updated_at)), 1)
            ];
          }
        }),
        actions: withCtx(({ data }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            if (__props.canDestroy) {
              _push2(`<a href="javascript:"${_scopeId}>`);
              _push2(ssrRenderComponent(_sfc_main$2, null, null, _parent2, _scopeId));
              _push2(`</a>`);
            } else {
              _push2(`<!---->`);
            }
          } else {
            return [
              __props.canDestroy ? (openBlock(), createBlock("a", {
                key: 0,
                href: "javascript:",
                onClick: ($event) => _ctx.$emit("onDestroy", data.row.id)
              }, [
                createVNode(_sfc_main$2)
              ], 8, ["onClick"])) : createCommentVNode("", true)
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Admin/Crm/Orders/Table.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
