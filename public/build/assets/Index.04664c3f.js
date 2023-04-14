import{q as F,s as L,p as y,w as k,Z as N,H as I,a9 as T,o as f,y as h,j as m,i as W,v as O,u as S,F as D,k as w,K as U}from"./vendor.2c8aab53.js";import B from"./Loader.e4a965ae.js";import M from"./PersonalData.b084cd9a.js";import R from"./Delivery.06c6fa29.js";import q from"./Payment.d456982f.js";import V from"./OrderItem.4023bdfe.js";import H from"./Comment.79648389.js";import $ from"./CheckoutTotal.c1c03812.js";import{_ as j}from"./MasterLayout.6f1a6b83.js";import J from"./Head.3cf659a9.js";import{C as b,h as z}from"./index.ed6d0c93.js";import{i as G}from"./load.816a0d00.js";import{s as K}from"./swal.ca5633e8.js";import"./__commonjsHelpers__.4516dc8a.js";import"./_plugin-vue_export-helper.cdc0426e.js";import"./Label.9d41849b.js";import"./Input.8578e878.js";import"./InputError.5b3cb3aa.js";import"./maska.esm.2315e0de.js";import"./Button.62ea125d.js";import"./Header.cf94c1c9.js";import"./vue.m.132a23fc.js";import"./CartIcon.ff32efd7.js";import"./Langs.b2eee5d4.js";import"./Logo.6090e12d.js";import"./HeaderCategories.74a08ba3.js";import"./create-element-if-not-defined.26147364.js";import"./pagination.44308c03.js";import"./lazy.2bfe2e68.js";import"./autoplay.88899761.js";import"./swiper-slide.b99d7d5f.js";import"./Footer.2a9c34b5.js";import"./FixedBanner.1550b3ab.js";import"./ScrollToTop.c0e18f9d.js";function c(){}var v=null;c.prototype.build=54;c.prototype.name="WFPWidget";c.prototype.defaultTarget="https://secure.wayforpay.com";c.prototype.getTargetHost=function(){var t=document.getElementById("widget-wfp-script"),i,e;return this.target?this.target:t?(t.getAttribute.length!==void 0?i=t.src:i=t.getAttribute("src"),e=document.createElement("a"),e.href=i,e.hostname=="secure.wayforpay.com"?this.target=this.defaultTarget:this.target=e.protocol+"//"+e.hostname,this.target):this.defaultTarget};c.prototype.isVerify=function(){return this.requestType=="VERIFY"};c.prototype.getPayUrl=function(){return this.isVerify()?this.getTargetHost()+"/verify"+(this.skin?"/"+this.skin:""):this.getTargetHost()+"/pay"+(this.skin?"/"+this.skin:"")};c.prototype.run=function(t,i,e,a,o){var u=this,n=t.hasOwnProperty("theme")?t.theme:!1;this.uuid=_(),v=this.uuid,this.postFields=t,this.straightWidget=t.hasOwnProperty("straightWidget")?t.straightWidget:!1,this.makeRedirect=t.hasOwnProperty("makeRedirect")?t.makeRedirect:!1,this.requestType=t.hasOwnProperty("requestType")?t.requestType:!1,this.skin=n||(this.makeRedirect?"":this.isVerify()?"verify_compact":"compact"),this.postFields.clientStartTime=Date.now(),this.isMobile=/Android|webOS|iPhone|iPod|BlackBerry|BB10|IEMobile|Opera Mini/i.test(navigator.userAgent),this.isSafari=navigator.userAgent.indexOf("Safari")>-1&&navigator.userAgent.indexOf("Chrome")<0,this.makeRedirect?this.submitData("pre"):this.isMobile&&!this.straightWidget?this.submitData("page"):(this.createContainer(),this.createOverlay(),this.createFrame(),u.frame.contentWindow.focus(),this.onApproved=i,this.onDeclined=e,this.onPending=a,this.onUnknown=o,window.addEventListener("message",function(g){u.widgetListener(u,g)}))};c.prototype.invoice=function(t,i){var e=this;this.uuid=_(),v=this.uuid,this.isMobile=/Android|webOS|iPhone|iPod|BlackBerry|BB10|IEMobile|Opera Mini/i.test(navigator.userAgent),this.isSafari=navigator.userAgent.indexOf("Safari")>-1&&navigator.userAgent.indexOf("Chrome")<0,this.isMobile&&!i?window.location.href=t:(this.createContainer(),this.createOverlay(),this.createFrameUrl(t),e.frame.contentWindow.focus(),window.addEventListener("message",function(a){e.widgetListener(e,a)}))};c.prototype.widgetListener=function(t,i){var e;if(i.origin!=t.getTargetHost(),v===t.uuid){if(i.data=="WfpWidgetEventClose"){var a=document.getElementById("wfp-container");a&&a.parentNode.removeChild(a),document.body.classList.remove("wfp-widget-open")}else if(i.data=="WfpWidgetEventLoaded")t.overlay.classList.remove("loader"),t.isMobile&&t.isSafari&&(t.overlay.style.display="none");else if(i.data=="WfpWidgetEventFadeOutOverlay")t.frame.classList.add("secure");else if(i.data=="WfpWidgetEventFadeInOverlay")t.frame.classList.remove("secure"),t.overlay.classList.add("loader");else if(i.data=="WfpWidgetEventComplete3d")t.frame.classList.remove("secure"),t.overlay.classList.add("loader"),Y(t.frame);else if(i.data!="WfpWidgetEventApproved"){if(i.data!="WfpWidgetEventDeclined"){if(i.data!="WfpWidgetEventPending")try{if(e=JSON.parse(i.data),"reasonCode"in e){if(e.clientStartTime&&e.clientStartTime!=this.postFields.clientStartTime)return;e.reasonCode==1100?typeof this.onApproved=="function"&&this.onApproved(e):e.reasonCode==1134||e.reasonCode==1131?typeof this.onPending=="function"&&this.onPending(e):typeof this.onDeclined=="function"&&(this.onDeclined(e),console.log(e.reasonCode+" "+e.reason))}else"pay_way"in e&&e.pay_way=="privat24"?this.submitForm("https://api.privatbank.ua/p24api/ishop",e):"paytype"in e&&e.paytype=="privat24New"?this.submitForm("https://www.liqpay.ua/api/checkout",e):"paytype"in e&&e.paytype=="lpTerminal"?this.submitForm("https://www.liqpay.ua/api/checkout",e):typeof this.onUnknown=="function"&&this.onUnknown(data)}catch{}}}}};c.prototype.closeit=function(){this.container&&this.container.parentNode&&(this.container.parentNode.removeChild(this.container),this.container=null,document.body.classList.remove("wfp-widget-open"))};c.prototype.createContainer=function(){var t=document.getElementById("wfp-container"),i=document.getElementById("wfp-styles");if(!i){var e=document.createElement("link");e.href=this.getTargetHost()+"/server/pay-widget.min.css?b="+this.build,e.setAttribute("id","wfp-styles"),e.type="text/css",e.rel="stylesheet",document.getElementsByTagName("head")[0].appendChild(e)}t&&t.parentNode.removeChild(t),this.container=document.createElement("div"),this.container.setAttribute("id","wfp-container"),this.container.classList.add("wfp-widget-container"),this.isMobile&&this.isSafari&&this.container.classList.add("wfp-container-scroll-fix"),document.body.appendChild(this.container),document.body.classList.add("wfp-widget-open")};c.prototype.createOverlay=function(){this.overlay=document.createElement("div"),this.overlay.classList.add("wfp-widget-overlay"),this.overlay.classList.add("loader"),this.container.appendChild(this.overlay)};c.prototype.createFrame=function(){this.frame=document.createElement("iframe"),this.frame.setAttribute("name",this.name+"Frame"),this.frame.setAttribute("src","about:blank"),this.frame.setAttribute("allowpaymentrequest","true"),this.frame.setAttribute("frameborder","0"),this.frame.classList.add("wfp-widget-frame"),this.isMobile&&this.isSafari&&this.frame.classList.add("wfp-frame-scroll-fix"),this.container.appendChild(this.frame),this.submitData("frame")};c.prototype.createFrameUrl=function(t){this.frame=document.createElement("iframe"),this.frame.setAttribute("name",this.name+"Frame"),this.frame.setAttribute("src",t+"?behavior=frame&build="+this.build),this.frame.setAttribute("allowpaymentrequest","true"),this.frame.setAttribute("frameborder","0"),this.frame.classList.add("wfp-widget-frame"),this.isMobile&&this.isSafari&&this.frame.classList.add("wfp-frame-scroll-fix"),this.container.appendChild(this.frame)};c.prototype.submitData=function(t){var i=document.createElement("form"),e,a,o,u,n=document.getElementsByTagName("body")[0];i.style.cssText="display: none;",i.setAttribute("name",this.name+"Form"),i.setAttribute("action",this.getPayUrl()+(t?"?behavior="+t+"&build="+this.build:"?build="+this.build)),i.setAttribute("method","POST"),i.setAttribute("accept-charset","utf-8"),t==="frame"&&i.setAttribute("target",this.name+"Frame"),e=document.createElement("input"),e.setAttribute("type","submit"),i.appendChild(e);for(a in this.postFields)if(this.postFields.hasOwnProperty(a))if(this.postFields[a]instanceof Array){o=this.postFields[a];for(u in o)o.hasOwnProperty(u)&&(e=document.createElement("input"),e.setAttribute("type","text"),e.setAttribute("name",a+"[]"),e.setAttribute("value",o[u]),i.appendChild(e))}else e=document.createElement("input"),e.setAttribute("type","text"),e.setAttribute("name",a),e.setAttribute("value",this.postFields[a]),i.appendChild(e);t==="frame"?this.container.appendChild(i):n.appendChild(i),i.submit()};c.prototype.submitForm=function(t,i){var e=document.createElement("form"),a,o,u=document.getElementsByTagName("body")[0];e.setAttribute("name",this.name+"FreeForm"),e.setAttribute("action",t),e.setAttribute("method","POST"),e.setAttribute("accept-charset","UTF-8"),a=document.createElement("input"),a.setAttribute("type","submit"),e.appendChild(a);for(o in i)i.hasOwnProperty(o)&&(a=document.createElement("input"),a.setAttribute("type","text"),a.setAttribute("name",o),a.setAttribute("value",i[o]),e.appendChild(a));u.appendChild(e),e.submit()};function Y(t){t.style.display="none",setTimeout(function(){t.style.display="block",t.classList.add("redraw")},500)}function _(){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,function(t){var i=Math.random()*16|0,e=t=="x"?i:i&3|8;return e.toString(16)})}const Z=["onSubmit"],Q={class:"grid grid-cols-1 md:grid-cols-2 relative gap-4"},X={class:""},ee={class:"cart-item__right row mb-3"},te=m("h3",{class:"text-2xl font-heading mb-[1rem]"},"\u0417\u0430\u043C\u043E\u0432\u043B\u0435\u043D\u043D\u044F",-1),ie={class:"grid gap-4"},Ue={__name:"Index",props:["lang","eventIdInitiateCheckout","eventIdPurchase","categories","options","pages","eventIdPageView"],setup(t){const i=t,{appContext:e}=N(),{$fbq:a}=e.config.globalProperties,o=I(),u=T(),n=F({order:{name:null,last_name:null,middle_name:null,email:null,comment:null,phone:null,city:null,postal_office:null,payment_method:null,event_id:i.eventIdPurchase},errors:[],contentIds:[],ga4ProductsArray:[],isLoading:!1});L(()=>{{o.state.list.forEach(r=>{n.value.contentIds.push(r.id),n.value.ga4ProductsArray.push({item_name:r.name.ua?r.name.ua:r.name.ru,item_id:r.id,price:r.discount_price?r.discount_price:r.price,quantity:r.count})});try{a("InitiateCheckout",{value:o.state.totalPrice,currency:"UAH",num_items:o.state.totalCount,content_ids:n.value.contentIds,content_type:"product"},i.eventIdInitiateCheckout),u.trackEvent({event:"start_checkout",ecommerce:{items:n.value.ga4ProductsArray}})}catch(r){console.log(r)}}G.value=!1});function g(r){const p=new c,d={names:[],prices:[],counts:[],amount:null};r.items.forEach(l=>{d.names.push(l.product.h1.ua?l.product.h1.ua:l.product.h1.ru),d.counts.push(l.count)}),r.payment_method==="minimum_prepayment"?(d.amount=r.total_price*.1,r.items.forEach(l=>{d.prices.push(l.sale_price*.1)})):r.payment_method==="full_prepayment"&&(d.amount=r.total_price,r.items.forEach(l=>{d.prices.push(l.sale_price)}));let s={merchantAccount:"dabango_store",merchantDomainName:"dabango.store",orderReference:r.id,orderDate:Math.floor(new Date(r.created_at).getTime()/1e3),amount:d.amount,currency:"UAH",productName:d.names,productPrice:d.prices,productCount:d.counts,clientFirstName:r.client.name,clientLastName:r.client.last_name,clientPhone:r.client.phone,language:"UA",deliveryList:"nova",returnUrl:route("api.v1.orders.set-prepayment")},P=Object.values({merchantAccount:s.merchantAccount,merchantDomainName:s.merchantDomainName,orderReference:s.orderReference,orderDate:s.orderDate,amount:s.amount,currency:s.currency,productName:s.productName.join(";"),productCount:s.productCount.join(";"),productPrice:s.productPrice.join(";")}).join(";"),E=b.enc.Utf8.stringify(b.enc.Utf8.parse(z(P,"4acdf560d56f56cde24ec0278a7f2676c5020f94")));p.run({merchantAccount:s.merchantAccount,merchantDomainName:s.merchantDomainName,authorizationType:"SimpleSignature",merchantSignature:E,orderReference:s.orderReference,orderDate:s.orderDate,amount:s.amount,currency:s.currency,productName:s.productName,productPrice:s.productPrice,productCount:s.productCount,clientFirstName:s.clientFirstName,clientLastName:s.clientLastName,clientPhone:s.clientPhone,language:s.language,returnUrl:s.returnUrl},function(l){A(l,r)},function(l){},function(l){})}function A(r,p){window.addEventListener("message",function(){event.data==="WfpWidgetEventApproved"&&axios.post(route("api.v1.orders.set-prepayment",r)).then(({data:d})=>{window.location.href=route("thanks",p.id)})},!1)}const x=async()=>{n.value.isLoading=!0,n.value.errors=[],await axios.post(route("api.v1.orders.create"),n.value.order).then(async({data:r})=>{try{a("Purchase",{value:o.state.totalPrice,currency:"UAH",content_type:"product",num_items:o.state.totalCount,content_ids:n.value.contentIds},i.eventIdPurchase),u.trackEvent({event:"send_order",ecommerce:{transaction_id:r.order.id,value:r.order.total_price,currency:"UAH",items:n.value.ga4ProductsArray}})}catch(p){console.log(p)}await axios.post(route("sms.new.order"),{order_id:r.order.id,phone:r.order.client.phone}),r.order.payment_method==="minimum_prepayment"||r.order.payment_method==="full_prepayment"?g(r.order):typeof window<"u"&&(window.location.href=route("thanks",r.order.id)),n.value.isLoading=!1}).catch(({response:r})=>{console.log(r),n.value.errors=r.data,n.value.isLoading=!1,K({icon:"error",title:"\u0412\u0438\u043D\u0438\u043A\u043B\u0430 \u043F\u043E\u043C\u0438\u043B\u043A\u0430",text:"\u041F\u0435\u0440\u0435\u0432\u0456\u0440\u0442\u0435 \u043A\u043E\u0440\u0440\u0435\u043A\u0442\u043D\u0456\u0442\u044C \u0434\u0430\u043D\u043D\u0438\u0445"})})};function C(){}return(r,p)=>(f(),y(j,{categories:t.categories,options:t.options,lang:t.lang,pages:t.pages,eventIdPageView:t.eventIdPageView},{default:k(()=>[h(J,{title:"\u041E\u0444\u043E\u0440\u043C\u043B\u0435\u043D\u043D\u044F \u0437\u0430\u043C\u043E\u0432\u043B\u0435\u043D\u043D\u044F"}),m("form",{onSubmit:U(x,["prevent"])},[m("div",Q,[m("div",null,[h(M,{order:n.value.order,errors:n.value.errors},null,8,["order","errors"]),h(R,{order:n.value.order},null,8,["order"]),h(q,{order:n.value.order},null,8,["order"]),h(H,{order:n.value.order},null,8,["order"])]),m("div",X,[m("div",ee,[te,m("div",ie,[(f(!0),W(D,null,O(S(o).state.list,d=>(f(),y(V,{item:d,onRemoveFromCart:C},null,8,["item"]))),256))]),n.value.isLoading?(f(),y(B,{key:0})):w("",!0),n.value.isLoading?w("",!0):(f(),y($,{key:1}))])])])],40,Z)]),_:1},8,["categories","options","lang","pages","eventIdPageView"]))}};export{Ue as default};