import { resolveComponent, mergeProps, withCtx, createVNode, toDisplayString, createTextVNode, openBlock, createBlock, createCommentVNode, useSSRContext } from "vue";
import { ssrRenderComponent, ssrInterpolate } from "vue/server-renderer";
const _sfc_main = {
  __name: "Table",
  __ssrInlineRender: true,
  props: ["data", "canDestroy"],
  emits: ["onDestroy", "publishReview", "onEdit"],
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
        label: "\u0422\u0435\u043B\u0435\u0444\u043E\u043D",
        key: "phone"
      },
      {
        label: "\u041A\u043E\u043C\u0435\u043D\u0442\u0430\u0440",
        key: "comment"
      },
      {
        label: "\u0422\u043E\u0432\u0430\u0440",
        key: "product_id"
      },
      {
        label: "\u0421\u0442\u0430\u0442\u0443\u0441 \u043F\u0443\u0431\u043B\u0456\u043A\u0430\u0446\u0456\u0457",
        key: "published"
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
        product_id: withCtx(({ data }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(data.row.product.h1.ua ? data.row.product.h1.ua : data.row.product.h1.ru)}`);
          } else {
            return [
              createTextVNode(toDisplayString(data.row.product.h1.ua ? data.row.product.h1.ua : data.row.product.h1.ru), 1)
            ];
          }
        }),
        comment: withCtx(({ data }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="whitespace-normal"${_scopeId}>${ssrInterpolate(data.row.comment)}</div>`);
          } else {
            return [
              createVNode("div", { class: "whitespace-normal" }, toDisplayString(data.row.comment), 1)
            ];
          }
        }),
        published: withCtx(({ data }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(_ctx.$filters.publishedStatus(data.row.published))} `);
            if (!data.row.published) {
              _push2(`<div${_scopeId}><hr class="my-1"${_scopeId}><a href="javascript:" class="text-blue-600"${_scopeId}> \u041E\u043F\u0443\u0431\u043B\u0456\u043A\u0443\u0432\u0430\u0442\u0438 </a></div>`);
            } else {
              _push2(`<!---->`);
            }
          } else {
            return [
              createTextVNode(toDisplayString(_ctx.$filters.publishedStatus(data.row.published)) + " ", 1),
              !data.row.published ? (openBlock(), createBlock("div", { key: 0 }, [
                createVNode("hr", { class: "my-1" }),
                createVNode("a", {
                  onClick: ($event) => _ctx.$emit("publishReview", data.row.id),
                  href: "javascript:",
                  class: "text-blue-600"
                }, " \u041E\u043F\u0443\u0431\u043B\u0456\u043A\u0443\u0432\u0430\u0442\u0438 ", 8, ["onClick"])
              ])) : createCommentVNode("", true)
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Admin/Content/Reviews/Products/Table.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
