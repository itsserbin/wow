import { ssrRenderComponent, ssrInterpolate } from "vue/server-renderer";
import Support from "./Support-1702dec6.mjs";
import _sfc_main$b from "./FaqComponent-8a06e7db.mjs";
import _sfc_main$7 from "./AllReviewsCarousel-94463242.mjs";
import _sfc_main$9 from "./BestSellingProducts-cb78bd5d.mjs";
import _sfc_main$8 from "./RelativeProducts-f83d4d63.mjs";
import _sfc_main$a from "./NewProducts-0fdad6c0.mjs";
import _sfc_main$4 from "./ImagesSlider-057b4379.mjs";
import _sfc_main$6 from "./Content-384ffe99.mjs";
import _sfc_main$5 from "./AddToCart-1bae9f03.mjs";
import { _ as _sfc_main$1 } from "./MasterLayout-bf4964bc.mjs";
import _sfc_main$3 from "./Breadcrumbs-c1f9c05b.mjs";
import _sfc_main$2 from "./Head-2dac87cc.mjs";
import { e as eventTracking } from "./eventTracking-3e33368b.mjs";
import { i as isLoading } from "./load-e7dd2e7a.mjs";
import { defineComponent, onMounted, useSSRContext } from "vue";
import { useGtm } from "@gtm-support/vue-gtm";
import "./_plugin-vue_export-helper-cc2b3d55.mjs";
import "./Accordion-1215fa5b.mjs";
import "./AccordionItem-d1739108.mjs";
import "gsap";
import "swiper";
import "swiper/vue";
import "./Button-e6d9c4d7.mjs";
import "./ProductCard-b6d63cb7.mjs";
import "vuex";
import "@inertiajs/inertia-vue3";
import "./Characteristics-920f1b64.mjs";
import "./BuyIn1ClickModal-da3284d6.mjs";
import "./maska-e9315c75.mjs";
import "./Modal-e357bd17.mjs";
import "./Loader-f0774e51.mjs";
import "./Input-4d6b8e1d.mjs";
import "./InputError-71f0cb4c.mjs";
import "./Label-45b40ea1.mjs";
import "./swal-dcd03cbb.mjs";
import "./Header-afe7698b.mjs";
import "./CartIcon-e2b4a7b1.mjs";
import "./Langs-57d30b91.mjs";
import "./Logo-21a2caa8.mjs";
import "./HeaderCategories-391c289b.mjs";
import "./Footer-e23e0d72.mjs";
import "./FixedBanner-285b457f.mjs";
import "./ScrollToTop-99a883e6.mjs";
import "./Breadcrumbs-adc4c20b.mjs";
import "./Head-671d76dc.mjs";
const __default__ = defineComponent({ layout: _sfc_main$1 });
const _sfc_main = /* @__PURE__ */ Object.assign(__default__, {
  __name: "Index",
  __ssrInlineRender: true,
  props: [
    "categories",
    "options",
    "pages",
    "lang",
    "reviews",
    "bestProducts",
    "newProducts",
    "recommendProducts",
    "characteristics",
    "product",
    "faqs",
    "authUser",
    "eventIdPageView",
    "eventIdContent",
    "eventIdAddToCard",
    "eventIdPurchaseIn1Click"
  ],
  setup(__props) {
    const props = __props;
    const gtm = useGtm();
    onMounted(async () => {
      isLoading.value = false;
      {
        try {
          eventTracking(
            "ViewContent",
            {
              "value": props.product.discount_price ? props.product.discount_price : props.product.price,
              "currency": "UAH",
              "content_type": "product",
              "content_ids": [props.product.id],
              "content_name": props.product.h1
            },
            props.eventIdContent
          );
          gtm.trackEvent({
            event: "view_product",
            ecommerce: {
              items: [{
                item_name: props.product.h1,
                item_id: props.product.id,
                price: props.product.discount_price ? props.product.discount_price : props.product.price,
                quantity: 1
              }]
            }
          });
        } catch (e) {
          console.error(e);
        }
      }
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[-->`);
      _push(ssrRenderComponent(_sfc_main$2, {
        lang: __props.lang,
        product: __props.product
      }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$3, {
        options: __props.options,
        "parent-url": _ctx.route("category", __props.product.categories[0].slug),
        "currentUrl-url": _ctx.route().current,
        parent: __props.product.categories[0].title[__props.lang],
        title: __props.product.h1[__props.lang]
      }, null, _parent));
      _push(`<div class="grid grid-cols-1 gap-4"><div class="grid grid-cols-1 md:grid-cols-2 gap-4"><div class="slider">`);
      _push(ssrRenderComponent(_sfc_main$4, {
        images: __props.product.images,
        preview: __props.product.preview
      }, null, _parent));
      _push(`</div><div><h2 class="text-3xl font-heading text-text font-bold">${ssrInterpolate(__props.product.h1[__props.lang])}</h2><div class="grid grid-cols-1 md:grid-cols-2 font-subheading"><div class="d-flex text-[10px]"><div>Код: ${ssrInterpolate(__props.product.id)}</div>`);
      if (__props.authUser) {
        _push(`<div>Артикул: ${ssrInterpolate(__props.product.vendor_code)}</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
      if (__props.product.status === "in stock") {
        _push(`<span class="text-[#38af44] text-[14px] font-medium text-end"> В наявності </span>`);
      } else if (__props.product.status === "ends") {
        _push(`<span class="text-[#FFC300] text-[14px] font-medium text-end"> Закінчується </span>`);
      } else {
        _push(`<span class="text-[#C70039] text-[14px] font-medium text-end"> Нема в наявності </span>`);
      }
      _push(`</div>`);
      _push(ssrRenderComponent(_sfc_main$5, {
        product: __props.product,
        eventIdAddToCard: __props.eventIdAddToCard,
        eventIdPurchaseIn1Click: __props.eventIdPurchaseIn1Click
      }, null, _parent));
      _push(`<div class="content">${__props.product.content[__props.lang]}</div></div></div>`);
      _push(ssrRenderComponent(_sfc_main$6, {
        lang: __props.lang,
        characteristics: __props.characteristics,
        sizeTable: __props.product.size_table,
        youtube: __props.product.youtube,
        options: __props.options
      }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$7, { data: __props.reviews }, null, _parent));
      _push(`<div class="grid grid-cols-1 gap-5">`);
      _push(ssrRenderComponent(_sfc_main$8, {
        lang: __props.lang,
        products: __props.recommendProducts
      }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$9, {
        lang: __props.lang,
        products: __props.bestProducts
      }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$a, {
        lang: __props.lang,
        products: __props.newProducts
      }, null, _parent));
      _push(`</div>`);
      _push(ssrRenderComponent(_sfc_main$b, {
        data: __props.faqs,
        lang: __props.lang
      }, null, _parent));
      _push(ssrRenderComponent(Support, null, null, _parent));
      _push(`</div><!--]-->`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Public/Product/Index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
