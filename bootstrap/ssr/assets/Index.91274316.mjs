import { getCurrentInstance, onMounted, mergeProps, withCtx, createVNode, toDisplayString, openBlock, createBlock, createCommentVNode, useSSRContext } from "vue";
import { ssrRenderComponent, ssrInterpolate } from "vue/server-renderer";
import Support from "./Support.92203d05.mjs";
import _sfc_main$b from "./FaqComponent.81c94f08.mjs";
import _sfc_main$7 from "./AllReviewsCarousel.b2fd9c6b.mjs";
import _sfc_main$9 from "./BestSellingProducts.0960a403.mjs";
import _sfc_main$8 from "./RelativeProducts.41aa5ed4.mjs";
import _sfc_main$a from "./NewProducts.5bfe72f9.mjs";
import _sfc_main$4 from "./ImagesSlider.b7de3a1c.mjs";
import _sfc_main$6 from "./Content.d1a7bb39.mjs";
import _sfc_main$5 from "./AddToCart.e8438e84.mjs";
import { _ as _sfc_main$1 } from "./MasterLayout.be7b21fc.mjs";
import _sfc_main$3 from "./Breadcrumbs.e9915497.mjs";
import _sfc_main$2 from "./Head.05862107.mjs";
import { i as isLoading } from "./load.3474ad71.mjs";
import { useGtm } from "@gtm-support/vue-gtm";
import "./_plugin-vue_export-helper.43be4956.mjs";
import "./Accordion.635accb3.mjs";
import "./AccordionItem.ae8efcce.mjs";
import "gsap";
import "swiper";
import "swiper/vue";
import "./Button.ec6da28a.mjs";
import "./ProductCard.5c4ddc79.mjs";
import "vuex";
import "./Characteristics.5cdcd447.mjs";
import "./BuyIn1ClickModal.2ff3be25.mjs";
import "maska";
import "./Modal.9c3ed2ed.mjs";
import "./Loader.43a0c8e2.mjs";
import "./Input.aac4ec2d.mjs";
import "./InputError.f356d54a.mjs";
import "./Label.4ae45cc4.mjs";
import "./swal.a7da81d8.mjs";
import "./Header.4109ad68.mjs";
import "./CartIcon.79888d2e.mjs";
import "./Langs.3ba4b35e.mjs";
import "./Logo.5e8f1180.mjs";
import "./HeaderCategories.0e67c59a.mjs";
import "./Footer.5f194abc.mjs";
import "./FixedBanner.5b212d34.mjs";
import "./ScrollToTop.c4b9ced3.mjs";
import "./Breadcrumbs.1a27781b.mjs";
import "./Head.9b78d2ae.mjs";
import "@inertiajs/inertia-vue3";
const _sfc_main = {
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
    const { appContext } = getCurrentInstance();
    const { $fbq } = appContext.config.globalProperties;
    const gtm = useGtm();
    onMounted(async () => {
      isLoading.value = false;
      {
        try {
          $fbq(
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
      _push(ssrRenderComponent(_sfc_main$1, mergeProps({
        categories: __props.categories,
        options: __props.options,
        lang: __props.lang,
        pages: __props.pages,
        eventIdPageView: __props.eventIdPageView
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_sfc_main$2, {
              lang: __props.lang,
              product: __props.product
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$3, {
              options: __props.options,
              "parent-url": _ctx.route("category", __props.product.categories[0].slug),
              parent: __props.product.categories[0].title[__props.lang],
              title: __props.product.h1[__props.lang]
            }, null, _parent2, _scopeId));
            _push2(`<div class="grid grid-cols-1 gap-4"${_scopeId}><div class="grid grid-cols-1 md:grid-cols-2 gap-4"${_scopeId}><div class="slider"${_scopeId}>`);
            _push2(ssrRenderComponent(_sfc_main$4, {
              images: __props.product.images,
              preview: __props.product.preview
            }, null, _parent2, _scopeId));
            _push2(`</div><div${_scopeId}><h2 class="text-3xl font-heading text-text font-bold"${_scopeId}>${ssrInterpolate(__props.product.h1[__props.lang])}</h2><div class="grid grid-cols-1 md:grid-cols-2 font-subheading"${_scopeId}><div class="d-flex text-[10px]"${_scopeId}><div${_scopeId}>\u041A\u043E\u0434: ${ssrInterpolate(__props.product.id)}</div>`);
            if (__props.authUser) {
              _push2(`<div${_scopeId}>\u0410\u0440\u0442\u0438\u043A\u0443\u043B: ${ssrInterpolate(__props.product.vendor_code)}</div>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`</div>`);
            if (__props.product.status === "in stock") {
              _push2(`<span class="text-[#38af44] text-[14px] font-medium text-end"${_scopeId}> \u0412 \u043D\u0430\u044F\u0432\u043D\u043E\u0441\u0442\u0456 </span>`);
            } else if (__props.product.status === "ends") {
              _push2(`<span class="text-[#FFC300] text-[14px] font-medium text-end"${_scopeId}> \u0417\u0430\u043A\u0456\u043D\u0447\u0443\u0454\u0442\u044C\u0441\u044F </span>`);
            } else {
              _push2(`<span class="text-[#C70039] text-[14px] font-medium text-end"${_scopeId}> \u041D\u0435\u043C\u0430 \u0432 \u043D\u0430\u044F\u0432\u043D\u043E\u0441\u0442\u0456 </span>`);
            }
            _push2(`</div>`);
            _push2(ssrRenderComponent(_sfc_main$5, {
              product: __props.product,
              eventIdAddToCard: __props.eventIdAddToCard,
              eventIdPurchaseIn1Click: __props.eventIdPurchaseIn1Click
            }, null, _parent2, _scopeId));
            _push2(`<div class="content"${_scopeId}>${__props.product.content[__props.lang]}</div></div></div>`);
            _push2(ssrRenderComponent(_sfc_main$6, {
              lang: __props.lang,
              characteristics: __props.characteristics,
              sizeTable: __props.product.size_table,
              youtube: __props.product.youtube,
              options: __props.options
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$7, { data: __props.reviews }, null, _parent2, _scopeId));
            _push2(`<div class="grid grid-cols-1 gap-5"${_scopeId}>`);
            _push2(ssrRenderComponent(_sfc_main$8, {
              lang: __props.lang,
              products: __props.recommendProducts
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$9, {
              lang: __props.lang,
              products: __props.bestProducts
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$a, {
              lang: __props.lang,
              products: __props.newProducts
            }, null, _parent2, _scopeId));
            _push2(`</div>`);
            _push2(ssrRenderComponent(_sfc_main$b, {
              data: __props.faqs,
              lang: __props.lang
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(Support, null, null, _parent2, _scopeId));
            _push2(`</div>`);
          } else {
            return [
              createVNode(_sfc_main$2, {
                lang: __props.lang,
                product: __props.product
              }, null, 8, ["lang", "product"]),
              createVNode(_sfc_main$3, {
                options: __props.options,
                "parent-url": _ctx.route("category", __props.product.categories[0].slug),
                parent: __props.product.categories[0].title[__props.lang],
                title: __props.product.h1[__props.lang]
              }, null, 8, ["options", "parent-url", "parent", "title"]),
              createVNode("div", { class: "grid grid-cols-1 gap-4" }, [
                createVNode("div", { class: "grid grid-cols-1 md:grid-cols-2 gap-4" }, [
                  createVNode("div", { class: "slider" }, [
                    createVNode(_sfc_main$4, {
                      images: __props.product.images,
                      preview: __props.product.preview
                    }, null, 8, ["images", "preview"])
                  ]),
                  createVNode("div", null, [
                    createVNode("h2", { class: "text-3xl font-heading text-text font-bold" }, toDisplayString(__props.product.h1[__props.lang]), 1),
                    createVNode("div", { class: "grid grid-cols-1 md:grid-cols-2 font-subheading" }, [
                      createVNode("div", { class: "d-flex text-[10px]" }, [
                        createVNode("div", null, "\u041A\u043E\u0434: " + toDisplayString(__props.product.id), 1),
                        __props.authUser ? (openBlock(), createBlock("div", { key: 0 }, "\u0410\u0440\u0442\u0438\u043A\u0443\u043B: " + toDisplayString(__props.product.vendor_code), 1)) : createCommentVNode("", true)
                      ]),
                      __props.product.status === "in stock" ? (openBlock(), createBlock("span", {
                        key: 0,
                        class: "text-[#38af44] text-[14px] font-medium text-end"
                      }, " \u0412 \u043D\u0430\u044F\u0432\u043D\u043E\u0441\u0442\u0456 ")) : __props.product.status === "ends" ? (openBlock(), createBlock("span", {
                        key: 1,
                        class: "text-[#FFC300] text-[14px] font-medium text-end"
                      }, " \u0417\u0430\u043A\u0456\u043D\u0447\u0443\u0454\u0442\u044C\u0441\u044F ")) : (openBlock(), createBlock("span", {
                        key: 2,
                        class: "text-[#C70039] text-[14px] font-medium text-end"
                      }, " \u041D\u0435\u043C\u0430 \u0432 \u043D\u0430\u044F\u0432\u043D\u043E\u0441\u0442\u0456 "))
                    ]),
                    createVNode(_sfc_main$5, {
                      product: __props.product,
                      eventIdAddToCard: __props.eventIdAddToCard,
                      eventIdPurchaseIn1Click: __props.eventIdPurchaseIn1Click
                    }, null, 8, ["product", "eventIdAddToCard", "eventIdPurchaseIn1Click"]),
                    createVNode("div", {
                      class: "content",
                      innerHTML: __props.product.content[__props.lang]
                    }, null, 8, ["innerHTML"])
                  ])
                ]),
                createVNode(_sfc_main$6, {
                  lang: __props.lang,
                  characteristics: __props.characteristics,
                  sizeTable: __props.product.size_table,
                  youtube: __props.product.youtube,
                  options: __props.options
                }, null, 8, ["lang", "characteristics", "sizeTable", "youtube", "options"]),
                createVNode(_sfc_main$7, { data: __props.reviews }, null, 8, ["data"]),
                createVNode("div", { class: "grid grid-cols-1 gap-5" }, [
                  createVNode(_sfc_main$8, {
                    lang: __props.lang,
                    products: __props.recommendProducts
                  }, null, 8, ["lang", "products"]),
                  createVNode(_sfc_main$9, {
                    lang: __props.lang,
                    products: __props.bestProducts
                  }, null, 8, ["lang", "products"]),
                  createVNode(_sfc_main$a, {
                    lang: __props.lang,
                    products: __props.newProducts
                  }, null, 8, ["lang", "products"])
                ]),
                createVNode(_sfc_main$b, {
                  data: __props.faqs,
                  lang: __props.lang
                }, null, 8, ["data", "lang"]),
                createVNode(Support)
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Public/Product/Index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
