import { inject, resolveComponent, withCtx, unref, createVNode, toDisplayString, openBlock, createBlock, Fragment, renderList, withDirectives, vShow, useSSRContext } from "vue";
import { ssrRenderComponent, ssrRenderList, ssrInterpolate } from "vue/server-renderer";
import { Link } from "@inertiajs/inertia-vue3";
const _sfc_main = {
  __name: "Index",
  __ssrInlineRender: true,
  setup(__props) {
    const can = inject("$can");
    const items = [
      {
        title: "Головна",
        permission: "show-options",
        href: route("admin.options.index")
      },
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
      const _component_auth_layout = resolveComponent("auth-layout");
      _push(ssrRenderComponent(_component_auth_layout, _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="grid grid-cols-1 gap-14"${_scopeId}><div class="grid grid-cols-2 md:grid-cols-3 gap-4"${_scopeId}><!--[-->`);
            ssrRenderList(items, (item) => {
              _push2(ssrRenderComponent(unref(Link), {
                href: item.href,
                style: unref(can)(item.permission) ? null : { display: "none" }
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<div class="p-5 bg-gray-50 rounded dark:bg-gray-800 text-gray-900 dark:text-white"${_scopeId2}>${ssrInterpolate(item.title)}</div>`);
                  } else {
                    return [
                      createVNode("div", { class: "p-5 bg-gray-50 rounded dark:bg-gray-800 text-gray-900 dark:text-white" }, toDisplayString(item.title), 1)
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
            });
            _push2(`<!--]--></div><div class="grid grid-cols-2 md:grid-cols-3 gap-4"${_scopeId}><!--[-->`);
            ssrRenderList(items2, (item) => {
              _push2(ssrRenderComponent(unref(Link), {
                href: item.href,
                style: unref(can)(item.permission) ? null : { display: "none" }
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<div class="p-5 bg-gray-50 rounded dark:bg-gray-800 text-gray-900 dark:text-white"${_scopeId2}>${ssrInterpolate(item.title)}</div>`);
                  } else {
                    return [
                      createVNode("div", { class: "p-5 bg-gray-50 rounded dark:bg-gray-800 text-gray-900 dark:text-white" }, toDisplayString(item.title), 1)
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
            });
            _push2(`<!--]--></div><div class="grid grid-cols-2 md:grid-cols-3 gap-4"${_scopeId}><!--[-->`);
            ssrRenderList(items3, (item) => {
              _push2(ssrRenderComponent(unref(Link), {
                href: item.href,
                style: unref(can)(item.permission) ? null : { display: "none" }
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<div class="p-5 bg-gray-50 rounded dark:bg-gray-800 text-gray-900 dark:text-white"${_scopeId2}>${ssrInterpolate(item.title)}</div>`);
                  } else {
                    return [
                      createVNode("div", { class: "p-5 bg-gray-50 rounded dark:bg-gray-800 text-gray-900 dark:text-white" }, toDisplayString(item.title), 1)
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
            });
            _push2(`<!--]--></div></div>`);
          } else {
            return [
              createVNode("div", { class: "grid grid-cols-1 gap-14" }, [
                createVNode("div", { class: "grid grid-cols-2 md:grid-cols-3 gap-4" }, [
                  (openBlock(), createBlock(Fragment, null, renderList(items, (item) => {
                    return withDirectives(createVNode(unref(Link), {
                      href: item.href
                    }, {
                      default: withCtx(() => [
                        createVNode("div", { class: "p-5 bg-gray-50 rounded dark:bg-gray-800 text-gray-900 dark:text-white" }, toDisplayString(item.title), 1)
                      ]),
                      _: 2
                    }, 1032, ["href"]), [
                      [vShow, unref(can)(item.permission)]
                    ]);
                  }), 64))
                ]),
                createVNode("div", { class: "grid grid-cols-2 md:grid-cols-3 gap-4" }, [
                  (openBlock(), createBlock(Fragment, null, renderList(items2, (item) => {
                    return withDirectives(createVNode(unref(Link), {
                      href: item.href
                    }, {
                      default: withCtx(() => [
                        createVNode("div", { class: "p-5 bg-gray-50 rounded dark:bg-gray-800 text-gray-900 dark:text-white" }, toDisplayString(item.title), 1)
                      ]),
                      _: 2
                    }, 1032, ["href"]), [
                      [vShow, unref(can)(item.permission)]
                    ]);
                  }), 64))
                ]),
                createVNode("div", { class: "grid grid-cols-2 md:grid-cols-3 gap-4" }, [
                  (openBlock(), createBlock(Fragment, null, renderList(items3, (item) => {
                    return withDirectives(createVNode(unref(Link), {
                      href: item.href
                    }, {
                      default: withCtx(() => [
                        createVNode("div", { class: "p-5 bg-gray-50 rounded dark:bg-gray-800 text-gray-900 dark:text-white" }, toDisplayString(item.title), 1)
                      ]),
                      _: 2
                    }, 1032, ["href"]), [
                      [vShow, unref(can)(item.permission)]
                    ]);
                  }), 64))
                ])
              ])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Admin/Options/Index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
