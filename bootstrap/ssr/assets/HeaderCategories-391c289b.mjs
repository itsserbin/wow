import { mergeProps, unref, withCtx, createTextVNode, toDisplayString, createVNode, openBlock, createBlock, Fragment, renderList, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrInterpolate } from "vue/server-renderer";
import { Lazy, Autoplay, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/vue";
import { Link } from "@inertiajs/inertia-vue3";
const HeaderCategories_vue_vue_type_style_index_0_lang = "";
const _sfc_main = {
  __name: "HeaderCategories",
  __ssrInlineRender: true,
  setup(__props) {
    const modules = [Lazy, Autoplay, Pagination];
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "max-w-7xl mx-auto" }, _attrs))}>`);
      _push(ssrRenderComponent(unref(Swiper), mergeProps({ class: "header-categories" }, _ctx.$page.props.settings, { modules }), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<!--[-->`);
            ssrRenderList(_ctx.$page.props.categories, (category) => {
              _push2(ssrRenderComponent(unref(SwiperSlide), null, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<li class="text-center py-2"${_scopeId2}>`);
                    _push3(ssrRenderComponent(unref(Link), {
                      href: _ctx.route("category", category.slug),
                      class: "font-bold text-sm whitespace-nowrap"
                    }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(`${ssrInterpolate(category.title[_ctx.$page.props.lang])}`);
                        } else {
                          return [
                            createTextVNode(toDisplayString(category.title[_ctx.$page.props.lang]), 1)
                          ];
                        }
                      }),
                      _: 2
                    }, _parent3, _scopeId2));
                    _push3(`</li>`);
                  } else {
                    return [
                      createVNode("li", { class: "text-center py-2" }, [
                        createVNode(unref(Link), {
                          href: _ctx.route("category", category.slug),
                          class: "font-bold text-sm whitespace-nowrap"
                        }, {
                          default: withCtx(() => [
                            createTextVNode(toDisplayString(category.title[_ctx.$page.props.lang]), 1)
                          ]),
                          _: 2
                        }, 1032, ["href"])
                      ])
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
            });
            _push2(`<!--]-->`);
          } else {
            return [
              (openBlock(true), createBlock(Fragment, null, renderList(_ctx.$page.props.categories, (category) => {
                return openBlock(), createBlock(unref(SwiperSlide), null, {
                  default: withCtx(() => [
                    createVNode("li", { class: "text-center py-2" }, [
                      createVNode(unref(Link), {
                        href: _ctx.route("category", category.slug),
                        class: "font-bold text-sm whitespace-nowrap"
                      }, {
                        default: withCtx(() => [
                          createTextVNode(toDisplayString(category.title[_ctx.$page.props.lang]), 1)
                        ]),
                        _: 2
                      }, 1032, ["href"])
                    ])
                  ]),
                  _: 2
                }, 1024);
              }), 256))
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Public/Components/Header/HeaderCategories.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
