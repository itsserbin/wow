import { inject, reactive, resolveComponent, withCtx, unref, createVNode, toDisplayString, openBlock, createBlock, Fragment, renderList, withDirectives, vShow, useSSRContext } from "vue";
import { ssrRenderComponent, ssrRenderList, ssrInterpolate } from "vue/server-renderer";
import { Link } from "@inertiajs/inertia-vue3";
const _sfc_main = {
  __name: "Index",
  __ssrInlineRender: true,
  setup(__props) {
    const can = inject("$can");
    const items = reactive([
      {
        title: "Товари",
        permission: "show-products",
        href: route("admin.content.products")
      },
      {
        title: "Категорії",
        permission: "show-categories",
        href: route("admin.content.categories")
      },
      {
        title: "Сторінки",
        permission: "show-pages",
        href: route("admin.content.pages")
      },
      {
        title: "Зображення",
        permission: "show-images",
        href: route("admin.content.images")
      },
      {
        title: "Відгуки",
        permission: "show-reviews",
        href: route("admin.content.reviews.product")
      }
    ]);
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
                  (openBlock(true), createBlock(Fragment, null, renderList(items, (item) => {
                    return withDirectives((openBlock(), createBlock(unref(Link), {
                      href: item.href
                    }, {
                      default: withCtx(() => [
                        createVNode("div", { class: "p-5 bg-gray-50 rounded dark:bg-gray-800 text-gray-900 dark:text-white" }, toDisplayString(item.title), 1)
                      ]),
                      _: 2
                    }, 1032, ["href"])), [
                      [vShow, unref(can)(item.permission)]
                    ]);
                  }), 256))
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Admin/Content/Index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
