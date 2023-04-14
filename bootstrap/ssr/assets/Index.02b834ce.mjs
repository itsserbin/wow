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
        title: "\u0413\u043E\u043B\u043E\u0432\u043D\u0430",
        permission: "show-options",
        href: route("admin.options.index")
      },
      {
        title: "\u041E\u0441\u043D\u043E\u0432\u043D\u0456",
        permission: "show-main-options",
        href: route("admin.options.main")
      },
      {
        title: "\u0421\u043A\u0440\u0438\u043F\u0442\u0438",
        permission: "show-scripts-options",
        href: route("admin.options.scripts")
      },
      {
        title: "\u0411\u0430\u043D\u0435\u0440\u0438",
        permission: "show-banners",
        href: route("admin.options.banners.index")
      },
      {
        title: "\u041F\u0435\u0440\u0435\u0432\u0430\u0433\u0438",
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
        title: "\u041A\u043E\u0440\u0438\u0441\u0442\u0443\u0432\u0430\u0447\u0456",
        permission: "show-users",
        href: route("admin.users.index")
      },
      {
        title: "\u0420\u043E\u043B\u0456",
        permission: "show-roles",
        href: route("admin.roles.index")
      },
      {
        title: "\u041F\u0440\u0430\u0432\u0430",
        permission: "show-permissions",
        href: route("admin.permissions.index")
      }
    ];
    const items3 = [
      {
        title: "\u041A\u043E\u043B\u044C\u043E\u0440\u0438",
        permission: "show-colors",
        href: route("admin.options.colors.index")
      },
      {
        title: "\u0420\u043E\u0437\u043C\u0456\u0440\u0438",
        permission: "show-sizes",
        href: route("admin.options.sizes.index")
      },
      {
        title: "\u0425\u0430\u0440\u0430\u043A\u0442\u0435\u0440\u0438\u0441\u0442\u0438\u043A\u0438",
        permission: "show-characteristics",
        href: route("admin.options.characteristics.index")
      },
      {
        title: "\u041F\u043E\u0441\u0442\u0430\u0447\u0430\u043B\u044C\u043D\u0438\u043A\u0438",
        permission: "show-providers",
        href: route("admin.options.providers.index")
      },
      {
        title: "\u041F\u0440\u043E\u043C\u043E-\u043A\u043E\u0434\u0438",
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
