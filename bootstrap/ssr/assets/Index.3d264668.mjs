import { getCurrentInstance, ref, onMounted, mergeProps, withCtx, unref, createVNode, withModifiers, openBlock, createBlock, Fragment, renderList, createCommentVNode, useSSRContext } from "vue";
import { ssrRenderComponent, ssrRenderList } from "vue/server-renderer";
import Loader from "./Loader.43a0c8e2.mjs";
import _sfc_main$3 from "./PersonalData.c3a22e49.mjs";
import _sfc_main$4 from "./Delivery.345895cd.mjs";
import _sfc_main$5 from "./Payment.7ee6083c.mjs";
import _sfc_main$7 from "./OrderItem.919b04b9.mjs";
import _sfc_main$6 from "./Comment.59e7eeb4.mjs";
import _sfc_main$8 from "./CheckoutTotal.a0f222ed.mjs";
import { _ as _sfc_main$1 } from "./MasterLayout.be7b21fc.mjs";
import _sfc_main$2 from "./Head.9b78d2ae.mjs";
import { useStore } from "vuex";
import { useGtm } from "@gtm-support/vue-gtm";
import hmacMD5 from "crypto-js/hmac-md5.js";
import CryptoJS from "crypto-js";
import { i as isLoading } from "./load.3474ad71.mjs";
import { s as swal } from "./swal.a7da81d8.mjs";
import "./_plugin-vue_export-helper.43be4956.mjs";
import "./Label.4ae45cc4.mjs";
import "./Input.aac4ec2d.mjs";
import "./InputError.f356d54a.mjs";
import "maska";
import "./Button.ec6da28a.mjs";
import "./Header.4109ad68.mjs";
import "./CartIcon.79888d2e.mjs";
import "./Langs.3ba4b35e.mjs";
import "./Logo.5e8f1180.mjs";
import "./HeaderCategories.0e67c59a.mjs";
import "swiper";
import "swiper/vue";
import "./Footer.5f194abc.mjs";
import "./FixedBanner.5b212d34.mjs";
import "./ScrollToTop.c4b9ced3.mjs";
import "@inertiajs/inertia-vue3";
function Wayforpay() {
}
var wfpInstUuid = null;
Wayforpay.prototype.build = 54;
Wayforpay.prototype.name = "WFPWidget";
Wayforpay.prototype.defaultTarget = "https://secure.wayforpay.com";
Wayforpay.prototype.getTargetHost = function() {
  var script = document.getElementById("widget-wfp-script");
  var url, l;
  if (this.target) {
    return this.target;
  } else if (!script) {
    return this.defaultTarget;
  } else {
    if (script.getAttribute.length !== void 0) {
      url = script.src;
    } else {
      url = script.getAttribute("src");
    }
    l = document.createElement("a");
    l.href = url;
    if ("secure.wayforpay.com" == l.hostname) {
      this.target = this.defaultTarget;
    } else {
      this.target = l.protocol + "//" + l.hostname;
    }
    return this.target;
  }
};
Wayforpay.prototype.isVerify = function() {
  return "VERIFY" == this.requestType;
};
Wayforpay.prototype.getPayUrl = function() {
  if (this.isVerify()) {
    return this.getTargetHost() + "/verify" + (this.skin ? "/" + this.skin : "");
  } else {
    return this.getTargetHost() + "/pay" + (this.skin ? "/" + this.skin : "");
  }
};
Wayforpay.prototype.run = function(options, onApproved, onDeclined, onPending, onUnknown) {
  var that = this;
  var theme = options.hasOwnProperty("theme") ? options.theme : false;
  this.uuid = wfpUuidv4();
  wfpInstUuid = this.uuid;
  this.postFields = options;
  this.straightWidget = options.hasOwnProperty("straightWidget") ? options.straightWidget : false;
  this.makeRedirect = options.hasOwnProperty("makeRedirect") ? options.makeRedirect : false;
  this.requestType = options.hasOwnProperty("requestType") ? options.requestType : false;
  this.skin = theme ? theme : this.makeRedirect ? "" : this.isVerify() ? "verify_compact" : "compact";
  this.postFields.clientStartTime = Date.now();
  this.isMobile = /Android|webOS|iPhone|iPod|BlackBerry|BB10|IEMobile|Opera Mini/i.test(navigator.userAgent);
  this.isSafari = navigator.userAgent.indexOf("Safari") > -1 && navigator.userAgent.indexOf("Chrome") < 0;
  if (this.makeRedirect) {
    this.submitData("pre");
  } else if (this.isMobile && !this.straightWidget) {
    this.submitData("page");
  } else {
    this.createContainer();
    this.createOverlay();
    this.createFrame();
    that.frame.contentWindow.focus();
    this.onApproved = onApproved;
    this.onDeclined = onDeclined;
    this.onPending = onPending;
    this.onUnknown = onUnknown;
    window.addEventListener("message", function(event2) {
      that.widgetListener(that, event2);
    });
  }
};
Wayforpay.prototype.invoice = function(url, straight) {
  var that = this;
  this.uuid = wfpUuidv4();
  wfpInstUuid = this.uuid;
  this.isMobile = /Android|webOS|iPhone|iPod|BlackBerry|BB10|IEMobile|Opera Mini/i.test(navigator.userAgent);
  this.isSafari = navigator.userAgent.indexOf("Safari") > -1 && navigator.userAgent.indexOf("Chrome") < 0;
  if (this.isMobile && !straight) {
    window.location.href = url;
  } else {
    this.createContainer();
    this.createOverlay();
    this.createFrameUrl(url);
    that.frame.contentWindow.focus();
    window.addEventListener("message", function(event2) {
      that.widgetListener(that, event2);
    });
  }
};
Wayforpay.prototype.widgetListener = function(that, event2) {
  var response;
  if (event2.origin != that.getTargetHost())
    ;
  if (wfpInstUuid !== that.uuid) {
    return;
  }
  if (event2.data == "WfpWidgetEventClose") {
    var cont = document.getElementById("wfp-container");
    if (cont) {
      cont.parentNode.removeChild(cont);
    }
    document.body.classList.remove("wfp-widget-open");
  } else if (event2.data == "WfpWidgetEventLoaded") {
    that.overlay.classList.remove("loader");
    if (that.isMobile && that.isSafari) {
      that.overlay.style.display = "none";
    }
  } else if (event2.data == "WfpWidgetEventFadeOutOverlay") {
    that.frame.classList.add("secure");
  } else if (event2.data == "WfpWidgetEventFadeInOverlay") {
    that.frame.classList.remove("secure");
    that.overlay.classList.add("loader");
  } else if (event2.data == "WfpWidgetEventComplete3d") {
    that.frame.classList.remove("secure");
    that.overlay.classList.add("loader");
    wfpRedraw(that.frame);
  } else if (event2.data == "WfpWidgetEventApproved")
    ;
  else if (event2.data == "WfpWidgetEventDeclined")
    ;
  else if (event2.data == "WfpWidgetEventPending")
    ;
  else {
    try {
      response = JSON.parse(event2.data);
      if ("reasonCode" in response) {
        if (response.clientStartTime && response.clientStartTime != this.postFields.clientStartTime) {
          return;
        }
        if (1100 == response.reasonCode) {
          if (typeof this.onApproved == "function") {
            this.onApproved(response);
          }
        } else if (1134 == response.reasonCode || 1131 == response.reasonCode) {
          if (typeof this.onPending == "function") {
            this.onPending(response);
          }
        } else if (typeof this.onDeclined == "function") {
          this.onDeclined(response);
          console.log(response.reasonCode + " " + response.reason);
        }
      } else if ("pay_way" in response && response.pay_way == "privat24") {
        this.submitForm("https://api.privatbank.ua/p24api/ishop", response);
      } else if ("paytype" in response && response.paytype == "privat24New") {
        this.submitForm("https://www.liqpay.ua/api/checkout", response);
      } else if ("paytype" in response && response.paytype == "lpTerminal") {
        this.submitForm("https://www.liqpay.ua/api/checkout", response);
      } else {
        if (typeof this.onUnknown == "function") {
          this.onUnknown(data);
        }
      }
    } catch (error) {
    }
  }
};
Wayforpay.prototype.closeit = function() {
  if (this.container && this.container.parentNode) {
    this.container.parentNode.removeChild(this.container);
    this.container = null;
    document.body.classList.remove("wfp-widget-open");
  }
};
Wayforpay.prototype.createContainer = function() {
  var cont = document.getElementById("wfp-container"), style = document.getElementById("wfp-styles");
  if (!style) {
    var cssLink = document.createElement("link");
    cssLink.href = this.getTargetHost() + "/server/pay-widget.min.css?b=" + this.build;
    cssLink.setAttribute("id", "wfp-styles");
    cssLink.type = "text/css";
    cssLink.rel = "stylesheet";
    document.getElementsByTagName("head")[0].appendChild(cssLink);
  }
  if (cont) {
    cont.parentNode.removeChild(cont);
  }
  this.container = document.createElement("div");
  this.container.setAttribute("id", "wfp-container");
  this.container.classList.add("wfp-widget-container");
  if (this.isMobile && this.isSafari) {
    this.container.classList.add("wfp-container-scroll-fix");
  }
  document.body.appendChild(this.container);
  document.body.classList.add("wfp-widget-open");
};
Wayforpay.prototype.createOverlay = function() {
  this.overlay = document.createElement("div");
  this.overlay.classList.add("wfp-widget-overlay");
  this.overlay.classList.add("loader");
  this.container.appendChild(this.overlay);
};
Wayforpay.prototype.createFrame = function() {
  this.frame = document.createElement("iframe");
  this.frame.setAttribute("name", this.name + "Frame");
  this.frame.setAttribute("src", "about:blank");
  this.frame.setAttribute("allowpaymentrequest", "true");
  this.frame.setAttribute("frameborder", "0");
  this.frame.classList.add("wfp-widget-frame");
  if (this.isMobile && this.isSafari) {
    this.frame.classList.add("wfp-frame-scroll-fix");
  }
  this.container.appendChild(this.frame);
  this.submitData("frame");
};
Wayforpay.prototype.createFrameUrl = function(url) {
  this.frame = document.createElement("iframe");
  this.frame.setAttribute("name", this.name + "Frame");
  this.frame.setAttribute("src", url + "?behavior=frame&build=" + this.build);
  this.frame.setAttribute("allowpaymentrequest", "true");
  this.frame.setAttribute("frameborder", "0");
  this.frame.classList.add("wfp-widget-frame");
  if (this.isMobile && this.isSafari) {
    this.frame.classList.add("wfp-frame-scroll-fix");
  }
  this.container.appendChild(this.frame);
};
Wayforpay.prototype.submitData = function(behavior) {
  var form = document.createElement("form");
  var i, field, a, e;
  var body = document.getElementsByTagName("body")[0];
  form.style.cssText = "display: none;";
  form.setAttribute("name", this.name + "Form");
  form.setAttribute("action", this.getPayUrl() + (behavior ? "?behavior=" + behavior + "&build=" + this.build : "?build=" + this.build));
  form.setAttribute("method", "POST");
  form.setAttribute("accept-charset", "utf-8");
  if ("frame" === behavior) {
    form.setAttribute("target", this.name + "Frame");
  }
  i = document.createElement("input");
  i.setAttribute("type", "submit");
  form.appendChild(i);
  for (field in this.postFields) {
    if (this.postFields.hasOwnProperty(field)) {
      if (this.postFields[field] instanceof Array) {
        a = this.postFields[field];
        for (e in a) {
          if (a.hasOwnProperty(e)) {
            i = document.createElement("input");
            i.setAttribute("type", "text");
            i.setAttribute("name", field + "[]");
            i.setAttribute("value", a[e]);
            form.appendChild(i);
          }
        }
      } else {
        i = document.createElement("input");
        i.setAttribute("type", "text");
        i.setAttribute("name", field);
        i.setAttribute("value", this.postFields[field]);
        form.appendChild(i);
      }
    }
  }
  if (behavior === "frame") {
    this.container.appendChild(form);
  } else {
    body.appendChild(form);
  }
  form.submit();
};
Wayforpay.prototype.submitForm = function(url, data2) {
  var form = document.createElement("form");
  var i, field;
  var body = document.getElementsByTagName("body")[0];
  form.setAttribute("name", this.name + "FreeForm");
  form.setAttribute("action", url);
  form.setAttribute("method", "POST");
  form.setAttribute("accept-charset", "UTF-8");
  i = document.createElement("input");
  i.setAttribute("type", "submit");
  form.appendChild(i);
  for (field in data2) {
    if (data2.hasOwnProperty(field)) {
      i = document.createElement("input");
      i.setAttribute("type", "text");
      i.setAttribute("name", field);
      i.setAttribute("value", data2[field]);
      form.appendChild(i);
    }
  }
  body.appendChild(form);
  form.submit();
};
function wfpRedraw(el) {
  el.style.display = "none";
  setTimeout(function() {
    el.style.display = "block";
    el.classList.add("redraw");
  }, 500);
}
function wfpUuidv4() {
  return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function(c) {
    var r = Math.random() * 16 | 0, v = c == "x" ? r : r & 3 | 8;
    return v.toString(16);
  });
}
const _sfc_main = {
  __name: "Index",
  __ssrInlineRender: true,
  props: [
    "lang",
    "eventIdInitiateCheckout",
    "eventIdPurchase",
    "categories",
    "options",
    "pages",
    "eventIdPageView"
  ],
  setup(__props) {
    const props = __props;
    const { appContext } = getCurrentInstance();
    const { $fbq } = appContext.config.globalProperties;
    const store = useStore();
    const gtm = useGtm();
    const state = ref({
      order: {
        name: null,
        last_name: null,
        middle_name: null,
        email: null,
        comment: null,
        phone: null,
        city: null,
        postal_office: null,
        payment_method: null,
        event_id: props.eventIdPurchase
      },
      errors: [],
      contentIds: [],
      ga4ProductsArray: [],
      isLoading: false
    });
    onMounted(() => {
      {
        store.state.list.forEach((item) => {
          state.value.contentIds.push(item.id);
          state.value.ga4ProductsArray.push({
            item_name: item.name.ua ? item.name.ua : item.name.ru,
            item_id: item.id,
            price: item.discount_price ? item.discount_price : item.price,
            quantity: item.count
          });
        });
        try {
          $fbq(
            "InitiateCheckout",
            {
              "value": store.state.totalPrice,
              "currency": "UAH",
              "num_items": store.state.totalCount,
              "content_ids": state.value.contentIds,
              "content_type": "product"
            },
            props.eventIdInitiateCheckout
          );
          gtm.trackEvent({
            event: "start_checkout",
            ecommerce: {
              items: state.value.ga4ProductsArray
            }
          });
        } catch (e) {
          console.log(e);
        }
      }
      isLoading.value = false;
    });
    function wfp(order) {
      const wayforpay = new Wayforpay();
      const data2 = {
        names: [],
        prices: [],
        counts: [],
        amount: null
      };
      order.items.forEach((item) => {
        data2.names.push(item.product.h1.ua ? item.product.h1.ua : item.product.h1.ru);
        data2.counts.push(item.count);
      });
      if (order.payment_method === "minimum_prepayment") {
        data2.amount = order.total_price * 0.1;
        order.items.forEach((item) => {
          data2.prices.push(item.sale_price * 0.1);
        });
      } else if (order.payment_method === "full_prepayment") {
        data2.amount = order.total_price;
        order.items.forEach((item) => {
          data2.prices.push(item.sale_price);
        });
      }
      let params = {
        merchantAccount: "dabango_store",
        merchantDomainName: "dabango.store",
        orderReference: order.id,
        orderDate: Math.floor(new Date(order.created_at).getTime() / 1e3),
        amount: data2.amount,
        currency: "UAH",
        productName: data2.names,
        productPrice: data2.prices,
        productCount: data2.counts,
        clientFirstName: order.client.name,
        clientLastName: order.client.last_name,
        clientPhone: order.client.phone,
        language: "UA",
        deliveryList: "nova",
        returnUrl: route("api.v1.orders.set-prepayment")
      };
      let string = Object.values(
        {
          merchantAccount: params.merchantAccount,
          merchantDomainName: params.merchantDomainName,
          orderReference: params.orderReference,
          orderDate: params.orderDate,
          amount: params.amount,
          currency: params.currency,
          productName: params.productName.join(";"),
          productCount: params.productCount.join(";"),
          productPrice: params.productPrice.join(";")
        }
      ).join(";");
      let signature = CryptoJS.enc.Utf8.stringify(
        CryptoJS.enc.Utf8.parse(
          hmacMD5(
            string,
            "4acdf560d56f56cde24ec0278a7f2676c5020f94"
          )
        )
      );
      wayforpay.run(
        {
          merchantAccount: params.merchantAccount,
          merchantDomainName: params.merchantDomainName,
          authorizationType: "SimpleSignature",
          merchantSignature: signature,
          orderReference: params.orderReference,
          orderDate: params.orderDate,
          amount: params.amount,
          currency: params.currency,
          productName: params.productName,
          productPrice: params.productPrice,
          productCount: params.productCount,
          clientFirstName: params.clientFirstName,
          clientLastName: params.clientLastName,
          clientPhone: params.clientPhone,
          language: params.language,
          returnUrl: params.returnUrl
        },
        function(response) {
          onSuccessPurchase(response, order);
        },
        function(response) {
        },
        function(response) {
        }
      );
    }
    function onSuccessPurchase(response, order) {
      window.addEventListener("message", function() {
        if (event.data === "WfpWidgetEventApproved") {
          axios.post(route("api.v1.orders.set-prepayment", response)).then(({ data: data2 }) => {
            window.location.href = route("thanks", order.id);
          });
        }
      }, false);
    }
    const sendOrder = async () => {
      state.value.isLoading = true;
      state.value.errors = [];
      await axios.post(route("api.v1.orders.create"), state.value.order).then(async ({ data: data2 }) => {
        {
          try {
            $fbq(
              "Purchase",
              {
                "value": store.state.totalPrice,
                "currency": "UAH",
                "content_type": "product",
                "num_items": store.state.totalCount,
                "content_ids": state.value.contentIds
              },
              props.eventIdPurchase
            );
            gtm.trackEvent({
              event: "send_order",
              ecommerce: {
                transaction_id: data2.order.id,
                value: data2.order.total_price,
                currency: "UAH",
                items: state.value.ga4ProductsArray
              }
            });
          } catch (e) {
            console.log(e);
          }
        }
        {
          await axios.post(route("sms.new.order"), {
            order_id: data2.order.id,
            phone: data2.order.client.phone
          });
        }
        if (data2.order.payment_method === "minimum_prepayment" || data2.order.payment_method === "full_prepayment") {
          wfp(data2.order);
        } else {
          if (typeof window !== "undefined") {
            window.location.href = route("thanks", data2.order.id);
          }
        }
        state.value.isLoading = false;
      }).catch(({ response }) => {
        console.log(response);
        state.value.errors = response.data;
        state.value.isLoading = false;
        swal({
          icon: "error",
          title: "\u0412\u0438\u043D\u0438\u043A\u043B\u0430 \u043F\u043E\u043C\u0438\u043B\u043A\u0430",
          text: "\u041F\u0435\u0440\u0435\u0432\u0456\u0440\u0442\u0435 \u043A\u043E\u0440\u0440\u0435\u043A\u0442\u043D\u0456\u0442\u044C \u0434\u0430\u043D\u043D\u0438\u0445"
        });
      });
    };
    function removeFromCart() {
    }
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
            _push2(ssrRenderComponent(_sfc_main$2, { title: "\u041E\u0444\u043E\u0440\u043C\u043B\u0435\u043D\u043D\u044F \u0437\u0430\u043C\u043E\u0432\u043B\u0435\u043D\u043D\u044F" }, null, _parent2, _scopeId));
            _push2(`<form${_scopeId}><div class="grid grid-cols-1 md:grid-cols-2 relative gap-4"${_scopeId}><div${_scopeId}>`);
            _push2(ssrRenderComponent(_sfc_main$3, {
              order: state.value.order,
              errors: state.value.errors
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$4, {
              order: state.value.order
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$5, {
              order: state.value.order
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$6, {
              order: state.value.order
            }, null, _parent2, _scopeId));
            _push2(`</div><div class=""${_scopeId}><div class="cart-item__right row mb-3"${_scopeId}><h3 class="text-2xl font-heading mb-[1rem]"${_scopeId}>\u0417\u0430\u043C\u043E\u0432\u043B\u0435\u043D\u043D\u044F</h3><div class="grid gap-4"${_scopeId}><!--[-->`);
            ssrRenderList(unref(store).state.list, (item) => {
              _push2(ssrRenderComponent(_sfc_main$7, {
                item,
                onRemoveFromCart: removeFromCart
              }, null, _parent2, _scopeId));
            });
            _push2(`<!--]--></div>`);
            if (state.value.isLoading) {
              _push2(ssrRenderComponent(Loader, null, null, _parent2, _scopeId));
            } else {
              _push2(`<!---->`);
            }
            if (!state.value.isLoading) {
              _push2(ssrRenderComponent(_sfc_main$8, null, null, _parent2, _scopeId));
            } else {
              _push2(`<!---->`);
            }
            _push2(`</div></div></div></form>`);
          } else {
            return [
              createVNode(_sfc_main$2, { title: "\u041E\u0444\u043E\u0440\u043C\u043B\u0435\u043D\u043D\u044F \u0437\u0430\u043C\u043E\u0432\u043B\u0435\u043D\u043D\u044F" }),
              createVNode("form", {
                onSubmit: withModifiers(sendOrder, ["prevent"])
              }, [
                createVNode("div", { class: "grid grid-cols-1 md:grid-cols-2 relative gap-4" }, [
                  createVNode("div", null, [
                    createVNode(_sfc_main$3, {
                      order: state.value.order,
                      errors: state.value.errors
                    }, null, 8, ["order", "errors"]),
                    createVNode(_sfc_main$4, {
                      order: state.value.order
                    }, null, 8, ["order"]),
                    createVNode(_sfc_main$5, {
                      order: state.value.order
                    }, null, 8, ["order"]),
                    createVNode(_sfc_main$6, {
                      order: state.value.order
                    }, null, 8, ["order"])
                  ]),
                  createVNode("div", { class: "" }, [
                    createVNode("div", { class: "cart-item__right row mb-3" }, [
                      createVNode("h3", { class: "text-2xl font-heading mb-[1rem]" }, "\u0417\u0430\u043C\u043E\u0432\u043B\u0435\u043D\u043D\u044F"),
                      createVNode("div", { class: "grid gap-4" }, [
                        (openBlock(true), createBlock(Fragment, null, renderList(unref(store).state.list, (item) => {
                          return openBlock(), createBlock(_sfc_main$7, {
                            item,
                            onRemoveFromCart: removeFromCart
                          }, null, 8, ["item"]);
                        }), 256))
                      ]),
                      state.value.isLoading ? (openBlock(), createBlock(Loader, { key: 0 })) : createCommentVNode("", true),
                      !state.value.isLoading ? (openBlock(), createBlock(_sfc_main$8, { key: 1 })) : createCommentVNode("", true)
                    ])
                  ])
                ])
              ], 40, ["onSubmit"])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Public/Checkout/Index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
