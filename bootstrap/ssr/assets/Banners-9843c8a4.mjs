import { inject, computed, mergeProps, unref, withCtx, createVNode, openBlock, createBlock, Fragment, renderList, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrRenderAttr } from "vue/server-renderer";
import { Autoplay, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/vue";
const _sfc_main = {
  __name: "Banners",
  __ssrInlineRender: true,
  props: ["lang", "data"],
  setup(__props) {
    const props = __props;
    const defaultLang = inject("$defaultLang");
    const src = computed(() => (banner) => {
      const mobile = banner.image_mobile[props.lang] || banner.image_mobile[defaultLang];
      const table = banner.image_table[props.lang] || banner.image_table[defaultLang];
      const desktop = banner.image_desktop[props.lang] || banner.image_desktop[defaultLang];
      return mobile ? "/images/banners/mobile/" + mobile + ".jpeg" : table ? "/images/banners/table/" + table + ".jpeg" : desktop ? "/images/banners/desktop/" + desktop + ".jpeg" : null;
    });
    const srcset = computed(() => (banner) => {
      const mobile = banner.image_mobile[props.lang] || banner.image_mobile[defaultLang];
      const table = banner.image_table[props.lang] || banner.image_table[defaultLang];
      const desktop = banner.image_desktop[props.lang] || banner.image_desktop[defaultLang];
      const mobileSrc = mobile ? "/images/banners/mobile/" + mobile + ".webp 568w" : "/images/banners/mobile/" + banner.image_mobile[defaultLang] + ".webp 568w ";
      const tableSrc = table ? "/images/banners/table/" + table + ".webp 568w" : "/images/banners/table/" + banner.image_table[defaultLang] + ".webp 991w ";
      const desktopSrc = desktop ? "/images/banners/desktop/" + desktop + ".webp 568w" : "/images/banners/desktop/" + banner.image_desktop[defaultLang] + ".webp";
      return mobileSrc + tableSrc + desktopSrc;
    });
    const modules = [Autoplay, Pagination];
    const settings = {
      slidesPerView: 1,
      spaceBetween: 0,
      pagination: {
        dynamicBullets: true,
        clickable: true
      },
      loop: true,
      autoplay: {
        delay: 5e3,
        disableOnInteraction: false
      }
    };
    return (_ctx, _push, _parent, _attrs) => {
      if (__props.data.length) {
        _push(`<section${ssrRenderAttrs(mergeProps({ class: "banners mb-5" }, _attrs))}>`);
        _push(ssrRenderComponent(unref(Swiper), mergeProps({ modules }, settings, { class: "main-banners-slider" }), {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<!--[-->`);
              ssrRenderList(__props.data, (banner, i) => {
                _push2(ssrRenderComponent(unref(SwiperSlide), {
                  key: i,
                  class: "shadow-sm"
                }, {
                  default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(`<a${ssrRenderAttr("href", banner.link ? banner.link[__props.lang] : "javascript:")}${_scopeId2}><img${ssrRenderAttr("src", unref(src)(banner))}${ssrRenderAttr("srcset", unref(srcset)(banner))}${ssrRenderAttr("alt", banner.title[__props.lang])} class="w-full"${_scopeId2}></a>`);
                    } else {
                      return [
                        createVNode("a", {
                          href: banner.link ? banner.link[__props.lang] : "javascript:"
                        }, [
                          createVNode("img", {
                            src: unref(src)(banner),
                            srcset: unref(srcset)(banner),
                            alt: banner.title[__props.lang],
                            class: "w-full"
                          }, null, 8, ["src", "srcset", "alt"])
                        ], 8, ["href"])
                      ];
                    }
                  }),
                  _: 2
                }, _parent2, _scopeId));
              });
              _push2(`<!--]-->`);
            } else {
              return [
                (openBlock(true), createBlock(Fragment, null, renderList(__props.data, (banner, i) => {
                  return openBlock(), createBlock(unref(SwiperSlide), {
                    key: i,
                    class: "shadow-sm"
                  }, {
                    default: withCtx(() => [
                      createVNode("a", {
                        href: banner.link ? banner.link[__props.lang] : "javascript:"
                      }, [
                        createVNode("img", {
                          src: unref(src)(banner),
                          srcset: unref(srcset)(banner),
                          alt: banner.title[__props.lang],
                          class: "w-full"
                        }, null, 8, ["src", "srcset", "alt"])
                      ], 8, ["href"])
                    ]),
                    _: 2
                  }, 1024);
                }), 128))
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</section>`);
      } else {
        _push(`<!---->`);
      }
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Public/Components/Banners.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
