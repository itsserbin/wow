import { inject, resolveComponent, mergeProps, withCtx, renderSlot, unref, createTextVNode, createVNode, openBlock, createBlock, createCommentVNode, useSSRContext } from "vue";
import { ssrRenderComponent, ssrRenderSlot } from "vue/server-renderer";
import { _ as _sfc_main$1 } from "./NavLink-5de78266.mjs";
import "@inertiajs/vue3";
const _sfc_main = {
  __name: "CrmLayout",
  __ssrInlineRender: true,
  props: ["title"],
  setup(__props) {
    const can = inject("$can");
    return (_ctx, _push, _parent, _attrs) => {
      const _component_auth_layout = resolveComponent("auth-layout");
      _push(ssrRenderComponent(_component_auth_layout, mergeProps({ title: __props.title }, _attrs), {
        header: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            ssrRenderSlot(_ctx.$slots, "header", {}, null, _push2, _parent2, _scopeId);
          } else {
            return [
              renderSlot(_ctx.$slots, "header")
            ];
          }
        }),
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="w-full grid grid-cols-1 gap-4"${_scopeId}><nav class="bg-white border-b border-gray-100 dark:bg-gray-800 dark:border-gray-700 rounded-lg p-4 md:py-0"${_scopeId}><div class="h-full md:h-12 grid grid-cols-2 md:grid-cols-5 gap-4"${_scopeId}>`);
            if (unref(can)("show-orders")) {
              _push2(ssrRenderComponent(_sfc_main$1, {
                href: _ctx.route("admin.crm.orders"),
                active: _ctx.route().current("admin.crm.orders"),
                class: "justify-center text-center"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(` Замовлення `);
                  } else {
                    return [
                      createTextVNode(" Замовлення ")
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
            } else {
              _push2(`<!---->`);
            }
            if (unref(can)("show-clients")) {
              _push2(ssrRenderComponent(_sfc_main$1, {
                href: _ctx.route("admin.crm.clients"),
                active: _ctx.route().current("admin.crm.clients"),
                class: "justify-center text-center"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(` Клієнти `);
                  } else {
                    return [
                      createTextVNode(" Клієнти ")
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
            } else {
              _push2(`<!---->`);
            }
            if (unref(can)("show-callbacks")) {
              _push2(ssrRenderComponent(_sfc_main$1, {
                href: _ctx.route("admin.crm.callbacks"),
                active: _ctx.route().current("admin.crm.callbacks"),
                class: "justify-center text-center"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(` Зворотній звʼязок `);
                  } else {
                    return [
                      createTextVNode(" Зворотній звʼязок ")
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
            } else {
              _push2(`<!---->`);
            }
            if (unref(can)("show-supports")) {
              _push2(ssrRenderComponent(_sfc_main$1, {
                href: _ctx.route("admin.crm.supports"),
                active: _ctx.route().current("admin.crm.supports"),
                class: "justify-center text-center"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(` Підтримка `);
                  } else {
                    return [
                      createTextVNode(" Підтримка ")
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
            } else {
              _push2(`<!---->`);
            }
            if (unref(can)("show-invoices")) {
              _push2(ssrRenderComponent(_sfc_main$1, {
                href: _ctx.route("admin.crm.invoices"),
                active: _ctx.route().current("admin.crm.invoices"),
                class: "justify-center text-center"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(` Рахунки `);
                  } else {
                    return [
                      createTextVNode(" Рахунки ")
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
            } else {
              _push2(`<!---->`);
            }
            _push2(`</div></nav>`);
            ssrRenderSlot(_ctx.$slots, "default", {}, null, _push2, _parent2, _scopeId);
            _push2(`</div>`);
          } else {
            return [
              createVNode("div", { class: "w-full grid grid-cols-1 gap-4" }, [
                createVNode("nav", { class: "bg-white border-b border-gray-100 dark:bg-gray-800 dark:border-gray-700 rounded-lg p-4 md:py-0" }, [
                  createVNode("div", { class: "h-full md:h-12 grid grid-cols-2 md:grid-cols-5 gap-4" }, [
                    unref(can)("show-orders") ? (openBlock(), createBlock(_sfc_main$1, {
                      key: 0,
                      href: _ctx.route("admin.crm.orders"),
                      active: _ctx.route().current("admin.crm.orders"),
                      class: "justify-center text-center"
                    }, {
                      default: withCtx(() => [
                        createTextVNode(" Замовлення ")
                      ]),
                      _: 1
                    }, 8, ["href", "active"])) : createCommentVNode("", true),
                    unref(can)("show-clients") ? (openBlock(), createBlock(_sfc_main$1, {
                      key: 1,
                      href: _ctx.route("admin.crm.clients"),
                      active: _ctx.route().current("admin.crm.clients"),
                      class: "justify-center text-center"
                    }, {
                      default: withCtx(() => [
                        createTextVNode(" Клієнти ")
                      ]),
                      _: 1
                    }, 8, ["href", "active"])) : createCommentVNode("", true),
                    unref(can)("show-callbacks") ? (openBlock(), createBlock(_sfc_main$1, {
                      key: 2,
                      href: _ctx.route("admin.crm.callbacks"),
                      active: _ctx.route().current("admin.crm.callbacks"),
                      class: "justify-center text-center"
                    }, {
                      default: withCtx(() => [
                        createTextVNode(" Зворотній звʼязок ")
                      ]),
                      _: 1
                    }, 8, ["href", "active"])) : createCommentVNode("", true),
                    unref(can)("show-supports") ? (openBlock(), createBlock(_sfc_main$1, {
                      key: 3,
                      href: _ctx.route("admin.crm.supports"),
                      active: _ctx.route().current("admin.crm.supports"),
                      class: "justify-center text-center"
                    }, {
                      default: withCtx(() => [
                        createTextVNode(" Підтримка ")
                      ]),
                      _: 1
                    }, 8, ["href", "active"])) : createCommentVNode("", true),
                    unref(can)("show-invoices") ? (openBlock(), createBlock(_sfc_main$1, {
                      key: 4,
                      href: _ctx.route("admin.crm.invoices"),
                      active: _ctx.route().current("admin.crm.invoices"),
                      class: "justify-center text-center"
                    }, {
                      default: withCtx(() => [
                        createTextVNode(" Рахунки ")
                      ]),
                      _: 1
                    }, 8, ["href", "active"])) : createCommentVNode("", true)
                  ])
                ]),
                renderSlot(_ctx.$slots, "default")
              ])
            ];
          }
        }),
        _: 3
      }, _parent));
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Admin/Crm/CrmLayout.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
