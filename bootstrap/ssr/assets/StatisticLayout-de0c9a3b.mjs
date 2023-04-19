import { inject, mergeProps, withCtx, renderSlot, unref, openBlock, createBlock, Fragment, renderList, createVNode, createCommentVNode, useSSRContext } from "vue";
import { ssrRenderComponent, ssrRenderSlot, ssrRenderList } from "vue/server-renderer";
import { _ as _sfc_main$1 } from "./AuthenticatedLayout-40cabe20.mjs";
import { S as Sidebar, _ as _sfc_main$2 } from "./SidebarItem-250f76bc.mjs";
import "./ApplicationLogo-76725da6.mjs";
import "./Logo-21a2caa8.mjs";
import "@inertiajs/inertia-vue3";
import "@inertiajs/vue3";
import "./_plugin-vue_export-helper-cc2b3d55.mjs";
const _sfc_main = {
  __name: "StatisticLayout",
  __ssrInlineRender: true,
  props: ["title"],
  setup(__props) {
    const can = inject("$can");
    const items = [
      {
        title: "Головна",
        href: route("admin.statistics.index")
      },
      {
        title: "Повернення",
        href: route("admin.statistics.refunds.index")
      },
      {
        title: "Прибуток",
        href: route("admin.statistics.profits.index")
      },
      {
        title: "Заявки",
        href: route("admin.statistics.orders.index")
      },
      {
        title: "Маркетинг",
        href: route("admin.statistics.marketing.index")
      },
      {
        title: "Менеджери",
        href: route("admin.statistics.managers.index")
      },
      {
        title: "Товари",
        href: route("admin.statistics.products.index")
      }
    ];
    const costItems = [
      {
        title: "Витрати",
        href: route("admin.statistics.costs.index")
      },
      {
        title: "Категорії витрат",
        href: route("admin.statistics.costs.categories.index")
      }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(_sfc_main$1, mergeProps({ title: __props.title }, _attrs), {
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
            if (unref(can)("show-bookkeeping")) {
              _push2(`<div class="grid grid-cols-1 md:grid-cols-5 gap-4"${_scopeId}><div class="md:col-span-1"${_scopeId}>`);
              _push2(ssrRenderComponent(Sidebar, { class: "mb-5" }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<!--[-->`);
                    ssrRenderList(items, (item) => {
                      _push3(ssrRenderComponent(_sfc_main$2, {
                        item,
                        active: _ctx.route(_ctx.route().current()) === item.href
                      }, null, _parent3, _scopeId2));
                    });
                    _push3(`<!--]-->`);
                  } else {
                    return [
                      (openBlock(), createBlock(Fragment, null, renderList(items, (item) => {
                        return createVNode(_sfc_main$2, {
                          item,
                          active: _ctx.route(_ctx.route().current()) === item.href
                        }, null, 8, ["item", "active"]);
                      }), 64))
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(ssrRenderComponent(Sidebar, null, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<!--[-->`);
                    ssrRenderList(costItems, (item) => {
                      _push3(ssrRenderComponent(_sfc_main$2, {
                        item,
                        active: _ctx.route(_ctx.route().current()) === item.href
                      }, null, _parent3, _scopeId2));
                    });
                    _push3(`<!--]-->`);
                  } else {
                    return [
                      (openBlock(), createBlock(Fragment, null, renderList(costItems, (item) => {
                        return createVNode(_sfc_main$2, {
                          item,
                          active: _ctx.route(_ctx.route().current()) === item.href
                        }, null, 8, ["item", "active"]);
                      }), 64))
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(`</div><div class="w-full md:col-span-4"${_scopeId}>`);
              ssrRenderSlot(_ctx.$slots, "default", {}, null, _push2, _parent2, _scopeId);
              _push2(`</div></div>`);
            } else {
              _push2(`<!---->`);
            }
          } else {
            return [
              unref(can)("show-bookkeeping") ? (openBlock(), createBlock("div", {
                key: 0,
                class: "grid grid-cols-1 md:grid-cols-5 gap-4"
              }, [
                createVNode("div", { class: "md:col-span-1" }, [
                  createVNode(Sidebar, { class: "mb-5" }, {
                    default: withCtx(() => [
                      (openBlock(), createBlock(Fragment, null, renderList(items, (item) => {
                        return createVNode(_sfc_main$2, {
                          item,
                          active: _ctx.route(_ctx.route().current()) === item.href
                        }, null, 8, ["item", "active"]);
                      }), 64))
                    ]),
                    _: 1
                  }),
                  createVNode(Sidebar, null, {
                    default: withCtx(() => [
                      (openBlock(), createBlock(Fragment, null, renderList(costItems, (item) => {
                        return createVNode(_sfc_main$2, {
                          item,
                          active: _ctx.route(_ctx.route().current()) === item.href
                        }, null, 8, ["item", "active"]);
                      }), 64))
                    ]),
                    _: 1
                  })
                ]),
                createVNode("div", { class: "w-full md:col-span-4" }, [
                  renderSlot(_ctx.$slots, "default")
                ])
              ])) : createCommentVNode("", true)
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Admin/Statistics/StatisticLayout.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
