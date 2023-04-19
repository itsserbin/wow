import { inject, withCtx, unref, createVNode, toDisplayString, openBlock, createBlock, Fragment, renderList, withDirectives, vShow, useSSRContext } from "vue";
import { ssrRenderComponent, ssrRenderList, ssrInterpolate } from "vue/server-renderer";
import { _ as _sfc_main$1 } from "./AuthenticatedLayout-40cabe20.mjs";
import { Link } from "@inertiajs/inertia-vue3";
import "./ApplicationLogo-76725da6.mjs";
import "./Logo-21a2caa8.mjs";
import "@inertiajs/vue3";
const _sfc_main = {
  __name: "Index",
  __ssrInlineRender: true,
  setup(__props) {
    const can = inject("$can");
    const items = [
      {
        title: "Замовлення",
        permission: "show-orders",
        href: route("admin.crm.orders")
      },
      {
        title: "Клієнти",
        permission: "show-clients",
        href: route("admin.crm.clients")
      },
      {
        title: "Зворотній звʼязок",
        permission: "show-callbacks",
        href: route("admin.crm.callbacks")
      },
      {
        title: "Підтримка клієнтів",
        permission: "show-supports",
        href: route("admin.crm.supports")
      },
      {
        title: "Рахунки",
        permission: "show-invoices",
        href: route("admin.crm.invoices")
      }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(_sfc_main$1, _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="grid grid-cols-1"${_scopeId}><div class="grid grid-cols-2 md:grid-cols-2 gap-4"${_scopeId}><!--[-->`);
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
            _push2(`<!--]--></div></div>`);
          } else {
            return [
              createVNode("div", { class: "grid grid-cols-1" }, [
                createVNode("div", { class: "grid grid-cols-2 md:grid-cols-2 gap-4" }, [
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Admin/Crm/Index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
