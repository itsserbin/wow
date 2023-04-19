import { mergeProps, withCtx, createVNode, toDisplayString, createTextVNode, openBlock, createBlock, createCommentVNode, useSSRContext } from "vue";
import { ssrRenderComponent, ssrInterpolate, ssrRenderAttr } from "vue/server-renderer";
import { _ as _sfc_main$1 } from "./Table-cc8335d6.mjs";
import { _ as _sfc_main$2 } from "./XCircle-6a269edb.mjs";
import { useI18n } from "vue-i18n";
const _sfc_main = {
  __name: "Table",
  __ssrInlineRender: true,
  props: ["data", "onEdit", "statuses", "canDestroy"],
  emits: ["onDestroy", "onEdit", "orderBy"],
  setup(__props, { emit: emits }) {
    const { t } = useI18n();
    const sort = (key, type) => {
      emits("orderBy", key, type);
    };
    const headings = [
      {
        label: t("id"),
        key: "id",
        sortable: true
      },
      {
        label: t("clients.status"),
        key: "status",
        sortable: true
      },
      {
        label: t("clients.name"),
        key: "name"
      },
      {
        label: t("clients.last_name"),
        key: "last_name"
      },
      {
        label: t("clients.phone"),
        key: "phone"
      },
      {
        label: t("clients.number_of_purchases"),
        key: "number_of_purchases",
        sortable: true
      },
      {
        label: t("clients.purchased_goods"),
        key: "purchased_goods",
        sortable: true
      },
      {
        label: t("clients.average_check"),
        key: "average_check",
        sortable: true
      },
      {
        label: t("clients.whole_check"),
        key: "whole_check",
        sortable: true
      },
      {
        label: t("created_at"),
        key: "created_at",
        sortable: true
      },
      {
        label: t("updated_at"),
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
            _push2(`${ssrInterpolate(data.row.name)}`);
          } else {
            return [
              createTextVNode(toDisplayString(data.row.name), 1)
            ];
          }
        }),
        last_name: withCtx(({ data }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(data.row.last_name)}`);
          } else {
            return [
              createTextVNode(toDisplayString(data.row.last_name), 1)
            ];
          }
        }),
        phone: withCtx(({ data }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<a${ssrRenderAttr("href", "tel:" + data.row.phone)}${_scopeId}>${ssrInterpolate(data.row.phone)}</a>`);
          } else {
            return [
              createVNode("a", {
                href: "tel:" + data.row.phone
              }, toDisplayString(data.row.phone), 9, ["href"])
            ];
          }
        }),
        average_check: withCtx(({ data }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(_ctx.$filters.formatMoney(data.row.average_check))}`);
          } else {
            return [
              createTextVNode(toDisplayString(_ctx.$filters.formatMoney(data.row.average_check)), 1)
            ];
          }
        }),
        whole_check: withCtx(({ data }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(_ctx.$filters.formatMoney(data.row.whole_check))}`);
          } else {
            return [
              createTextVNode(toDisplayString(_ctx.$filters.formatMoney(data.row.whole_check)), 1)
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Admin/Crm/Clients/Table.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
