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
        title: "\u0417\u0430\u043C\u043E\u0432\u043B\u0435\u043D\u043D\u044F",
        permission: "show-orders",
        href: route("admin.crm.orders")
      },
      {
        title: "\u041A\u043B\u0456\u0454\u043D\u0442\u0438",
        permission: "show-clients",
        href: route("admin.crm.clients")
      },
      {
        title: "\u0417\u0432\u043E\u0440\u043E\u0442\u043D\u0456\u0439 \u0437\u0432\u02BC\u044F\u0437\u043E\u043A",
        permission: "show-callbacks",
        href: route("admin.crm.callbacks")
      },
      {
        title: "\u041F\u0456\u0434\u0442\u0440\u0438\u043C\u043A\u0430 \u043A\u043B\u0456\u0454\u043D\u0442\u0456\u0432",
        permission: "show-supports",
        href: route("admin.crm.supports")
      },
      {
        title: "\u0420\u0430\u0445\u0443\u043D\u043A\u0438",
        permission: "show-invoices",
        href: route("admin.crm.invoices")
      }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      const _component_auth_layout = resolveComponent("auth-layout");
      _push(ssrRenderComponent(_component_auth_layout, _attrs, {
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
