import { ssrRenderAttrs, ssrRenderAttr } from "vue/server-renderer";
import { useSSRContext } from "vue";
const _sfc_main = {
  __name: "FixedBanner",
  __ssrInlineRender: true,
  props: ["lang"],
  setup(__props) {
    const props = __props;
    const mobileBanner = props.lang === "ua" ? "support_ukraine_ua_768" : "support_ukraine_ru_768";
    const tableBanner = props.lang === "ua" ? "support_ukraine_ua_1000" : "support_ukraine_ru_1000";
    const desktopBanner = props.lang === "ua" ? "support_ukraine_ua_1900" : "support_ukraine_ru_1900";
    const mobileBannerWebp = `/storage/banners/${mobileBanner}.webp`;
    const mobileBannerJpeg = `/storage/banners/${mobileBanner}.jpeg`;
    const tableBannerWebp = `/storage/banners/${tableBanner}.webp`;
    const tableBannerJpeg = `/storage/banners/${tableBanner}.jpeg`;
    const desktopBannerWebp = `/storage/banners/${desktopBanner}.webp`;
    const desktopBannerJpeg = `/storage/banners/${desktopBanner}.jpeg`;
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<picture${ssrRenderAttrs(_attrs)}><source media="(max-width: 768px)"${ssrRenderAttr("srcset", mobileBannerWebp)} type="image/webp"><source media="(max-width: 768px)"${ssrRenderAttr("srcset", mobileBannerJpeg)} type="image/jpeg"><source media="(max-width: 1000px)"${ssrRenderAttr("srcset", tableBannerWebp)} type="image/webp"><source media="(max-width: 1000px)"${ssrRenderAttr("srcset", tableBannerJpeg)} type="image/jpeg"><source${ssrRenderAttr("srcset", desktopBannerWebp)}><img${ssrRenderAttr("src", desktopBannerJpeg)} alt="Слава Україні!" class="w-[100%]"></picture>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Public/Components/FixedBanner.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
