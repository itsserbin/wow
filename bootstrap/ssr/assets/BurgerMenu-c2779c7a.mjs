import { defineAsyncComponent, mergeProps, unref, withCtx, createTextVNode, toDisplayString, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderList, ssrRenderAttr } from "vue/server-renderer";
const _sfc_main = {
  __name: "BurgerMenu",
  __ssrInlineRender: true,
  props: ["options", "lang"],
  setup(__props) {
    const ViberIcon = defineAsyncComponent(() => import("./ViberIcon-ce2a86fb.mjs"));
    const TelegramIcon = defineAsyncComponent(() => import("./TelegramIcon-c266dd02.mjs"));
    const InstagramIcon = defineAsyncComponent(() => import("./InstagramIcon-e5a8dbba.mjs"));
    const FacebookIcon = defineAsyncComponent(() => import("./FacebookIcon-5c79f5fc.mjs"));
    const BurgerMenuLink = defineAsyncComponent(() => import("./BurgerMenuLink-c0a1b6cc.mjs"));
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "burger-menu active fixed w-[100%] h-[100%] z-40 top-[0] left-0 overflow-scroll bg-[#161616]" }, _attrs))}><div class="max-w-7xl mx-auto"><div class="grid grid-cols-1 mt-[30px] text-base md:text-2xl"><ul class="menu__list flex flex-col justify-center items-center"><li>`);
      _push(ssrRenderComponent(unref(BurgerMenuLink), {
        href: _ctx.route("home")
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(__props.lang === "ru" ? "Главная" : "Головна")}`);
          } else {
            return [
              createTextVNode(toDisplayString(__props.lang === "ru" ? "Главная" : "Головна"), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li><li>`);
      _push(ssrRenderComponent(unref(BurgerMenuLink), {
        href: _ctx.route("status")
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Статус замовлення `);
          } else {
            return [
              createTextVNode(" Статус замовлення ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li><li>`);
      _push(ssrRenderComponent(unref(BurgerMenuLink), {
        href: _ctx.route("reviews")
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Відгуки `);
          } else {
            return [
              createTextVNode(" Відгуки ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li><!--[-->`);
      ssrRenderList(JSON.pages, (page) => {
        _push(`<li>`);
        _push(ssrRenderComponent(unref(BurgerMenuLink), {
          href: _ctx.route("pages", page.slug)
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`${ssrInterpolate(__props.lang === "ru" ? page.heading.ru : page.heading.ua)}`);
            } else {
              return [
                createTextVNode(toDisplayString(__props.lang === "ru" ? page.heading.ru : page.heading.ua), 1)
              ];
            }
          }),
          _: 2
        }, _parent));
        _push(`</li>`);
      });
      _push(`<!--]--></ul></div><div class="grid gap-4 justify-items-center mt-5 text-[#fff] text-sm md:text-base">`);
      if (__props.options.phone) {
        _push(`<a${ssrRenderAttr("href", "tel:" + __props.options.phone)}>${ssrInterpolate(__props.options.phone)}</a>`);
      } else {
        _push(`<!---->`);
      }
      if (__props.options.email) {
        _push(`<a${ssrRenderAttr("href", "mailto:" + __props.options.email)}>${ssrInterpolate(__props.options.email)}</a>`);
      } else {
        _push(`<!---->`);
      }
      if (__props.options.facebook) {
        _push(`<a${ssrRenderAttr("href", __props.options.facebook)} target="_blank">`);
        _push(ssrRenderComponent(unref(FacebookIcon), null, null, _parent));
        _push(`</a>`);
      } else {
        _push(`<!---->`);
      }
      if (__props.options.instagram) {
        _push(`<a${ssrRenderAttr("href", __props.options.instagram)} target="_blank">`);
        _push(ssrRenderComponent(unref(InstagramIcon), null, null, _parent));
        _push(`</a>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="row">`);
      if (__props.options.schedule) {
        _push(`<div class="burger-menu__schedule flex uppercase text-[#fff] text-center"><div>${__props.options.schedule}</div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="burger-menu__messengers messengers">`);
      if (__props.options.telegram) {
        _push(`<a${ssrRenderAttr("href", __props.options.telegram)} target="_blank">`);
        _push(ssrRenderComponent(unref(TelegramIcon), null, null, _parent));
        _push(`</a>`);
      } else {
        _push(`<!---->`);
      }
      if (__props.options.viber) {
        _push(`<a${ssrRenderAttr("href", __props.options.viber)} target="_blank">`);
        _push(ssrRenderComponent(unref(ViberIcon), null, null, _parent));
        _push(`</a>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div></div></div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Public/Components/Header/BurgerMenu.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
