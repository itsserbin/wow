import { inject, resolveComponent, mergeProps, withCtx, renderSlot, unref, createTextVNode, createVNode, openBlock, createBlock, createCommentVNode, useSSRContext } from "vue";
import { ssrRenderComponent, ssrRenderSlot } from "vue/server-renderer";
import { n as _sfc_main$1 } from "../app2.mjs";
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
  __name: "ContentLayout",
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
            if (unref(can)("show-products")) {
              _push2(ssrRenderComponent(_sfc_main$1, {
                href: _ctx.route("admin.content.products"),
                active: _ctx.route().current("admin.content.products"),
                class: "justify-center text-center"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(` \u0422\u043E\u0432\u0430\u0440\u0438 `);
                  } else {
                    return [
                      createTextVNode(" \u0422\u043E\u0432\u0430\u0440\u0438 ")
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
            } else {
              _push2(`<!---->`);
            }
            if (unref(can)("show-categories")) {
              _push2(ssrRenderComponent(_sfc_main$1, {
                href: _ctx.route("admin.content.categories"),
                active: _ctx.route().current("admin.content.categories"),
                class: "justify-center text-center"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(` \u041A\u0430\u0442\u0435\u0433\u043E\u0440\u0456\u0457 `);
                  } else {
                    return [
                      createTextVNode(" \u041A\u0430\u0442\u0435\u0433\u043E\u0440\u0456\u0457 ")
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
            } else {
              _push2(`<!---->`);
            }
            if (unref(can)("show-pages")) {
              _push2(ssrRenderComponent(_sfc_main$1, {
                href: _ctx.route("admin.content.pages"),
                active: _ctx.route().current("admin.content.pages"),
                class: "justify-center text-center"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(` \u0421\u0442\u043E\u0440\u0456\u043D\u043A\u0438 `);
                  } else {
                    return [
                      createTextVNode(" \u0421\u0442\u043E\u0440\u0456\u043D\u043A\u0438 ")
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
            } else {
              _push2(`<!---->`);
            }
            if (unref(can)("show-images")) {
              _push2(ssrRenderComponent(_sfc_main$1, {
                href: _ctx.route("admin.content.images"),
                active: _ctx.route().current("admin.content.images"),
                class: "justify-center text-center"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(` \u0417\u043E\u0431\u0440\u0430\u0436\u0435\u043D\u043D\u044F `);
                  } else {
                    return [
                      createTextVNode(" \u0417\u043E\u0431\u0440\u0430\u0436\u0435\u043D\u043D\u044F ")
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
            } else {
              _push2(`<!---->`);
            }
            if (unref(can)("show-reviews")) {
              _push2(ssrRenderComponent(_sfc_main$1, {
                href: _ctx.route("admin.content.reviews.product"),
                active: _ctx.route().current("admin.content.reviews.*"),
                class: "justify-center text-center"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(` \u0412\u0456\u0434\u0433\u0443\u043A\u0438 `);
                  } else {
                    return [
                      createTextVNode(" \u0412\u0456\u0434\u0433\u0443\u043A\u0438 ")
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
                    unref(can)("show-products") ? (openBlock(), createBlock(_sfc_main$1, {
                      key: 0,
                      href: _ctx.route("admin.content.products"),
                      active: _ctx.route().current("admin.content.products"),
                      class: "justify-center text-center"
                    }, {
                      default: withCtx(() => [
                        createTextVNode(" \u0422\u043E\u0432\u0430\u0440\u0438 ")
                      ]),
                      _: 1
                    }, 8, ["href", "active"])) : createCommentVNode("", true),
                    unref(can)("show-categories") ? (openBlock(), createBlock(_sfc_main$1, {
                      key: 1,
                      href: _ctx.route("admin.content.categories"),
                      active: _ctx.route().current("admin.content.categories"),
                      class: "justify-center text-center"
                    }, {
                      default: withCtx(() => [
                        createTextVNode(" \u041A\u0430\u0442\u0435\u0433\u043E\u0440\u0456\u0457 ")
                      ]),
                      _: 1
                    }, 8, ["href", "active"])) : createCommentVNode("", true),
                    unref(can)("show-pages") ? (openBlock(), createBlock(_sfc_main$1, {
                      key: 2,
                      href: _ctx.route("admin.content.pages"),
                      active: _ctx.route().current("admin.content.pages"),
                      class: "justify-center text-center"
                    }, {
                      default: withCtx(() => [
                        createTextVNode(" \u0421\u0442\u043E\u0440\u0456\u043D\u043A\u0438 ")
                      ]),
                      _: 1
                    }, 8, ["href", "active"])) : createCommentVNode("", true),
                    unref(can)("show-images") ? (openBlock(), createBlock(_sfc_main$1, {
                      key: 3,
                      href: _ctx.route("admin.content.images"),
                      active: _ctx.route().current("admin.content.images"),
                      class: "justify-center text-center"
                    }, {
                      default: withCtx(() => [
                        createTextVNode(" \u0417\u043E\u0431\u0440\u0430\u0436\u0435\u043D\u043D\u044F ")
                      ]),
                      _: 1
                    }, 8, ["href", "active"])) : createCommentVNode("", true),
                    unref(can)("show-reviews") ? (openBlock(), createBlock(_sfc_main$1, {
                      key: 4,
                      href: _ctx.route("admin.content.reviews.product"),
                      active: _ctx.route().current("admin.content.reviews.*"),
                      class: "justify-center text-center"
                    }, {
                      default: withCtx(() => [
                        createTextVNode(" \u0412\u0456\u0434\u0433\u0443\u043A\u0438 ")
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Admin/Content/ContentLayout.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
