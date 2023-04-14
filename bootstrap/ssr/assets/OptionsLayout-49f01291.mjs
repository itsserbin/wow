import { inject, mergeProps, withCtx, renderSlot, unref, openBlock, createBlock, Fragment, renderList, withDirectives, createVNode, vShow, useSSRContext } from "vue";
import { ssrRenderComponent, ssrRenderSlot, ssrRenderList } from "vue/server-renderer";
import { _ as _sfc_main$1 } from "./AuthenticatedLayout-9b92d88f.mjs";
import { S as Sidebar, _ as _sfc_main$2 } from "./SidebarItem-250f76bc.mjs";
import "./ApplicationLogo-76725da6.mjs";
import "./Logo-21a2caa8.mjs";
import "@inertiajs/inertia-vue3";
import "@inertiajs/vue3";
import "./NavLink-5de78266.mjs";
import "vuex";
import "./_plugin-vue_export-helper-cc2b3d55.mjs";
const _sfc_main = {
  __name: "OptionsLayout",
  __ssrInlineRender: true,
  props: ["title"],
  setup(__props) {
    const can = inject("$can");
    const items = [
      {
        title: "Основні",
        permission: "show-main-options",
        href: route("admin.options.main")
      },
      {
        title: "Скрипти",
        permission: "show-scripts-options",
        href: route("admin.options.scripts")
      },
      {
        title: "Банери",
        permission: "show-banners",
        href: route("admin.options.banners.index")
      },
      {
        title: "Переваги",
        permission: "show-advantages",
        href: route("admin.options.advantages.index")
      },
      {
        title: "FAQ",
        permission: "show-faq",
        href: route("admin.options.faqs.index")
      }
    ];
    const items2 = [
      {
        title: "Користувачі",
        permission: "show-users",
        href: route("admin.users.index")
      },
      {
        title: "Ролі",
        permission: "show-roles",
        href: route("admin.roles.index")
      },
      {
        title: "Права",
        permission: "show-permissions",
        href: route("admin.permissions.index")
      }
    ];
    const items3 = [
      {
        title: "Кольори",
        permission: "show-colors",
        href: route("admin.options.colors.index")
      },
      {
        title: "Розміри",
        permission: "show-sizes",
        href: route("admin.options.sizes.index")
      },
      {
        title: "Характеристики",
        permission: "show-characteristics",
        href: route("admin.options.characteristics.index")
      },
      {
        title: "Постачальники",
        permission: "show-providers",
        href: route("admin.options.providers.index")
      },
      {
        title: "Промо-коди",
        permission: "show-promo-codes",
        href: route("admin.options.promo-codes.index")
      },
      {
        title: "XML",
        permission: "show-xmls",
        href: route("admin.options.xmls.index")
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
            _push2(`<div class="grid grid-cols-1 md:grid-cols-5 gap-4"${_scopeId}><div class="md:col-span-1"${_scopeId}>`);
            _push2(ssrRenderComponent(Sidebar, { class: "mb-5" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<!--[-->`);
                  ssrRenderList(items, (item) => {
                    _push3(ssrRenderComponent(_sfc_main$2, {
                      style: unref(can)(item.permission) ? null : { display: "none" },
                      item,
                      active: _ctx.route(_ctx.route().current()) === item.href
                    }, null, _parent3, _scopeId2));
                  });
                  _push3(`<!--]-->`);
                } else {
                  return [
                    (openBlock(), createBlock(Fragment, null, renderList(items, (item) => {
                      return withDirectives(createVNode(_sfc_main$2, {
                        item,
                        active: _ctx.route(_ctx.route().current()) === item.href
                      }, null, 8, ["item", "active"]), [
                        [vShow, unref(can)(item.permission)]
                      ]);
                    }), 64))
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(Sidebar, { class: "mb-5" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<!--[-->`);
                  ssrRenderList(items3, (item) => {
                    _push3(ssrRenderComponent(_sfc_main$2, {
                      style: unref(can)(item.permission) ? null : { display: "none" },
                      item,
                      active: _ctx.route(_ctx.route().current()) === item.href
                    }, null, _parent3, _scopeId2));
                  });
                  _push3(`<!--]-->`);
                } else {
                  return [
                    (openBlock(), createBlock(Fragment, null, renderList(items3, (item) => {
                      return withDirectives(createVNode(_sfc_main$2, {
                        item,
                        active: _ctx.route(_ctx.route().current()) === item.href
                      }, null, 8, ["item", "active"]), [
                        [vShow, unref(can)(item.permission)]
                      ]);
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
                  ssrRenderList(items2, (item) => {
                    _push3(ssrRenderComponent(_sfc_main$2, {
                      style: unref(can)(item.permission) ? null : { display: "none" },
                      item,
                      active: _ctx.route(_ctx.route().current()) === item.href
                    }, null, _parent3, _scopeId2));
                  });
                  _push3(`<!--]-->`);
                } else {
                  return [
                    (openBlock(), createBlock(Fragment, null, renderList(items2, (item) => {
                      return withDirectives(createVNode(_sfc_main$2, {
                        item,
                        active: _ctx.route(_ctx.route().current()) === item.href
                      }, null, 8, ["item", "active"]), [
                        [vShow, unref(can)(item.permission)]
                      ]);
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
            return [
              createVNode("div", { class: "grid grid-cols-1 md:grid-cols-5 gap-4" }, [
                createVNode("div", { class: "md:col-span-1" }, [
                  createVNode(Sidebar, { class: "mb-5" }, {
                    default: withCtx(() => [
                      (openBlock(), createBlock(Fragment, null, renderList(items, (item) => {
                        return withDirectives(createVNode(_sfc_main$2, {
                          item,
                          active: _ctx.route(_ctx.route().current()) === item.href
                        }, null, 8, ["item", "active"]), [
                          [vShow, unref(can)(item.permission)]
                        ]);
                      }), 64))
                    ]),
                    _: 1
                  }),
                  createVNode(Sidebar, { class: "mb-5" }, {
                    default: withCtx(() => [
                      (openBlock(), createBlock(Fragment, null, renderList(items3, (item) => {
                        return withDirectives(createVNode(_sfc_main$2, {
                          item,
                          active: _ctx.route(_ctx.route().current()) === item.href
                        }, null, 8, ["item", "active"]), [
                          [vShow, unref(can)(item.permission)]
                        ]);
                      }), 64))
                    ]),
                    _: 1
                  }),
                  createVNode(Sidebar, null, {
                    default: withCtx(() => [
                      (openBlock(), createBlock(Fragment, null, renderList(items2, (item) => {
                        return withDirectives(createVNode(_sfc_main$2, {
                          item,
                          active: _ctx.route(_ctx.route().current()) === item.href
                        }, null, 8, ["item", "active"]), [
                          [vShow, unref(can)(item.permission)]
                        ]);
                      }), 64))
                    ]),
                    _: 1
                  })
                ]),
                createVNode("div", { class: "w-full md:col-span-4" }, [
                  renderSlot(_ctx.$slots, "default")
                ])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Admin/Options/OptionsLayout.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
