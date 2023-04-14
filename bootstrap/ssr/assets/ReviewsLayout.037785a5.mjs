import { inject, resolveComponent, mergeProps, withCtx, renderSlot, unref, openBlock, createBlock, Fragment, renderList, withDirectives, createVNode, vShow, useSSRContext } from "vue";
import { ssrRenderComponent, ssrRenderSlot, ssrRenderList } from "vue/server-renderer";
import _sfc_main$1 from "./ContentLayout.f201d183.mjs";
import "../app2.mjs";
import "./vue.m.487fc989.mjs";
import "axios";
import "@inertiajs/inertia-vue3";
import "@inertiajs/progress";
import "./vendor.67403750.mjs";
import "vue-sweetalert2";
import "moment";
import "numeral";
import "@tinymce/tinymce-vue";
import "vue-i18n";
import "./_plugin-vue_export-helper.43be4956.mjs";
import "./Logo.5e8f1180.mjs";
import "@inertiajs/vue3";
import "vuex";
import "@vuepic/vue-datepicker";
import "chart.js";
const _sfc_main = {
  __name: "ReviewsLayout",
  __ssrInlineRender: true,
  props: ["title"],
  setup(__props) {
    const can = inject("$can");
    const items = [
      {
        title: "\u0412\u0456\u0434\u0433\u0443\u043A\u0438 \u043F\u0440\u043E \u0442\u043E\u0432\u0430\u0440\u0438",
        permission: "show-product-reviews",
        href: route("admin.content.reviews.product")
      },
      {
        title: "\u0412\u0456\u0434\u0433\u0443\u043A\u0438 \u0456\u0437 \u0441\u043E\u0446.\u043C\u0435\u0440\u0435\u0436",
        permission: "show-social-reviews",
        href: route("admin.content.reviews.social")
      }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      const _component_sidebar_component = resolveComponent("sidebar-component");
      const _component_sidebar_item = resolveComponent("sidebar-item");
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
            _push2(`<div class="grid grid-cols-1 md:grid-cols-12 gap-4"${_scopeId}><div class="md:col-span-2"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_sidebar_component, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<!--[-->`);
                  ssrRenderList(items, (item) => {
                    _push3(ssrRenderComponent(_component_sidebar_item, {
                      style: unref(can)(item.permission) ? null : { display: "none" },
                      item,
                      active: _ctx.route(_ctx.route().current()) === item.href
                    }, null, _parent3, _scopeId2));
                  });
                  _push3(`<!--]-->`);
                } else {
                  return [
                    (openBlock(), createBlock(Fragment, null, renderList(items, (item) => {
                      return withDirectives(createVNode(_component_sidebar_item, {
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
            _push2(`</div><div class="w-full md:col-span-10"${_scopeId}>`);
            ssrRenderSlot(_ctx.$slots, "default", {}, null, _push2, _parent2, _scopeId);
            _push2(`</div></div>`);
          } else {
            return [
              createVNode("div", { class: "grid grid-cols-1 md:grid-cols-12 gap-4" }, [
                createVNode("div", { class: "md:col-span-2" }, [
                  createVNode(_component_sidebar_component, null, {
                    default: withCtx(() => [
                      (openBlock(), createBlock(Fragment, null, renderList(items, (item) => {
                        return withDirectives(createVNode(_component_sidebar_item, {
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
                createVNode("div", { class: "w-full md:col-span-10" }, [
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Admin/Content/Reviews/ReviewsLayout.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
