import { mergeProps, useSSRContext, withCtx, createVNode, openBlock, createBlock, createCommentVNode, Fragment, renderList, toDisplayString, createTextVNode } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr, ssrRenderList, ssrInterpolate } from "vue/server-renderer";
import { _ as _sfc_main$2 } from "./Table-df76b95f.mjs";
import { _ as _sfc_main$3 } from "./XCircle-df3891c5.mjs";
const _sfc_main$1 = {
  __name: "Pencil",
  __ssrInlineRender: true,
  props: {
    width: {
      type: String,
      default: "16"
    },
    height: {
      type: String,
      default: "16"
    }
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<svg${ssrRenderAttrs(mergeProps({
        xmlns: "http://www.w3.org/2000/svg",
        width: __props.width,
        height: __props.height,
        fill: "currentColor",
        class: "bi bi-pencil",
        viewBox: "0 0 16 16"
      }, _attrs))}><path d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168l10-10zM11.207 2.5 13.5 4.793 14.793 3.5 12.5 1.207 11.207 2.5zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293l6.5-6.5zm-9.761 5.175-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325z"></path></svg>`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/Icons/Pencil.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = {
  __name: "Table",
  __ssrInlineRender: true,
  props: ["data"],
  emits: ["editOrderItem", "destroyOrderItem"],
  setup(__props) {
    const headings = [
      {
        label: "Фото",
        key: "preview"
      },
      {
        label: "Назва",
        key: "h1"
      },
      {
        label: "Кількість",
        key: "count"
      },
      {
        label: "Ціна",
        key: "sale_price"
      },
      {
        label: "Сума",
        key: "total_price"
      },
      {
        label: "Колір",
        key: "color"
      },
      {
        label: "Розмір",
        key: "size"
      },
      {
        label: "Дод.продажа",
        key: "resale"
      },
      {
        label: "Знижка",
        key: "discount"
      },
      {
        label: "Артикул",
        key: "vendor_code"
      },
      {
        label: "#",
        key: "actions"
      }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(_sfc_main$2, mergeProps({
        isSlotMode: true,
        rows: __props.data,
        headings
      }, _attrs), {
        actions: withCtx(({ data }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="grid grid-cols-2 gap-4"${_scopeId}><a href="javascript:"${_scopeId}>`);
            _push2(ssrRenderComponent(_sfc_main$1, null, null, _parent2, _scopeId));
            _push2(`</a><a href="javascript:"${_scopeId}>`);
            _push2(ssrRenderComponent(_sfc_main$3, null, null, _parent2, _scopeId));
            _push2(`</a></div>`);
          } else {
            return [
              createVNode("div", { class: "grid grid-cols-2 gap-4" }, [
                createVNode("a", {
                  href: "javascript:",
                  onClick: ($event) => _ctx.$emit("editOrderItem", data.row.id, data.i)
                }, [
                  createVNode(_sfc_main$1)
                ], 8, ["onClick"]),
                createVNode("a", {
                  href: "javascript:",
                  onClick: ($event) => _ctx.$emit("destroyOrderItem", data.row.id, data.i)
                }, [
                  createVNode(_sfc_main$3)
                ], 8, ["onClick"])
              ])
            ];
          }
        }),
        preview: withCtx(({ data }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            if (data.row.product) {
              _push2(`<picture${_scopeId}><source${ssrRenderAttr("srcset", data.row.product.preview ? _ctx.route("images.350", data.row.product.preview.webp_src) : null)} type="image/webp"${_scopeId}><img${ssrRenderAttr("data-src", data.row.product.preview ? _ctx.route("images.350", data.row.product.preview.src) : null)}${ssrRenderAttr("alt", data.row.product.h1.ua ? data.row.product.h1.ua : data.row.product.h1.ru)} class="h-full object-cover w-full"${_scopeId}></picture>`);
            } else {
              _push2(`<!---->`);
            }
          } else {
            return [
              data.row.product ? (openBlock(), createBlock("picture", { key: 0 }, [
                createVNode("source", {
                  srcset: data.row.product.preview ? _ctx.route("images.350", data.row.product.preview.webp_src) : null,
                  type: "image/webp"
                }, null, 8, ["srcset"]),
                createVNode("img", {
                  "data-src": data.row.product.preview ? _ctx.route("images.350", data.row.product.preview.src) : null,
                  alt: data.row.product.h1.ua ? data.row.product.h1.ua : data.row.product.h1.ru,
                  class: "h-full object-cover w-full"
                }, null, 8, ["data-src", "alt"])
              ])) : createCommentVNode("", true)
            ];
          }
        }),
        color: withCtx(({ data }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<!--[-->`);
            ssrRenderList(data.row.color, (color) => {
              _push2(`<span${_scopeId}>${ssrInterpolate(color)}</span>`);
            });
            _push2(`<!--]-->`);
          } else {
            return [
              (openBlock(true), createBlock(Fragment, null, renderList(data.row.color, (color) => {
                return openBlock(), createBlock("span", null, toDisplayString(color), 1);
              }), 256))
            ];
          }
        }),
        size: withCtx(({ data }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<!--[-->`);
            ssrRenderList(data.row.size, (size) => {
              _push2(`<span${_scopeId}>${ssrInterpolate(size)}</span>`);
            });
            _push2(`<!--]-->`);
          } else {
            return [
              (openBlock(true), createBlock(Fragment, null, renderList(data.row.size, (size) => {
                return openBlock(), createBlock("span", null, toDisplayString(size), 1);
              }), 256))
            ];
          }
        }),
        resale: withCtx(({ data }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(data.row.resale ? "Так" : "Ні")}`);
          } else {
            return [
              createTextVNode(toDisplayString(data.row.resale ? "Так" : "Ні"), 1)
            ];
          }
        }),
        sale_price: withCtx(({ data }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(_ctx.$filters.formatMoney(data.row.sale_price))}`);
          } else {
            return [
              createTextVNode(toDisplayString(_ctx.$filters.formatMoney(data.row.sale_price)), 1)
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
        vendor_code: withCtx(({ data }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            if (data.row.product) {
              _push2(`<div${_scopeId}>${ssrInterpolate(data.row.product.vendor_code)}</div>`);
            } else {
              _push2(`<!---->`);
            }
          } else {
            return [
              data.row.product ? (openBlock(), createBlock("div", { key: 0 }, toDisplayString(data.row.product.vendor_code), 1)) : createCommentVNode("", true)
            ];
          }
        }),
        h1: withCtx(({ data }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            if (data.row.product) {
              _push2(`<a${ssrRenderAttr("href", _ctx.route("product", data.row.product.id))} target="_blank"${_scopeId}>${ssrInterpolate(data.row.product.h1.ua ? data.row.product.h1.ua : data.row.product.h1.ru)}</a>`);
            } else {
              _push2(`<!---->`);
            }
          } else {
            return [
              data.row.product ? (openBlock(), createBlock("a", {
                key: 0,
                href: _ctx.route("product", data.row.product.id),
                target: "_blank"
              }, toDisplayString(data.row.product.h1.ua ? data.row.product.h1.ua : data.row.product.h1.ru), 9, ["href"])) : createCommentVNode("", true)
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Admin/Crm/Orders/Items/Table.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
