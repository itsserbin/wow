import { resolveComponent, mergeProps, withCtx, createVNode, toDisplayString, createTextVNode, openBlock, createBlock, Fragment, renderList, createCommentVNode, useSSRContext } from "vue";
import { ssrRenderComponent, ssrInterpolate, ssrRenderList } from "vue/server-renderer";
const _sfc_main = {
  __name: "Table",
  __ssrInlineRender: true,
  props: ["data", "canDestroy"],
  emits: ["onDestroy", "onEdit"],
  setup(__props) {
    const headings = [
      {
        label: "ID",
        key: "id"
      },
      {
        label: "\u0406\u043C\u02BC\u044F",
        key: "name"
      },
      {
        label: "Email",
        key: "email"
      },
      {
        label: "\u0420\u043E\u043B\u044C",
        key: "role"
      },
      {
        label: "\u041E\u043D\u043E\u0432\u043B\u0435\u043D\u043E<hr class='my-1'>\u0421\u0442\u0432\u043E\u0440\u0435\u043D\u043E",
        key: "timestamps"
      },
      {
        label: "#",
        key: "actions"
      }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      const _component_table_component = resolveComponent("table-component");
      const _component_xcircle_component = resolveComponent("xcircle-component");
      _push(ssrRenderComponent(_component_table_component, mergeProps({
        headings,
        isSlotMode: true,
        rows: __props.data
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
        timestamps: withCtx(({ data }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(_ctx.$filters.dateFormat(data.row.updated_at))} <hr class="my-1"${_scopeId}> ${ssrInterpolate(_ctx.$filters.dateFormat(data.row.created_at))}`);
          } else {
            return [
              createTextVNode(toDisplayString(_ctx.$filters.dateFormat(data.row.updated_at)) + " ", 1),
              createVNode("hr", { class: "my-1" }),
              createTextVNode(" " + toDisplayString(_ctx.$filters.dateFormat(data.row.created_at)), 1)
            ];
          }
        }),
        role: withCtx(({ data }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<!--[-->`);
            ssrRenderList(data.row.roles, (item) => {
              _push2(`<span${_scopeId}>${ssrInterpolate(item.name)}<br${_scopeId}></span>`);
            });
            _push2(`<!--]-->`);
          } else {
            return [
              (openBlock(true), createBlock(Fragment, null, renderList(data.row.roles, (item) => {
                return openBlock(), createBlock("span", null, [
                  createTextVNode(toDisplayString(item.name), 1),
                  createVNode("br")
                ]);
              }), 256))
            ];
          }
        }),
        actions: withCtx(({ data }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            if (__props.canDestroy) {
              _push2(`<a href="javascript:"${_scopeId}>`);
              _push2(ssrRenderComponent(_component_xcircle_component, null, null, _parent2, _scopeId));
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
                createVNode(_component_xcircle_component)
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Admin/Options/Users/Table.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
