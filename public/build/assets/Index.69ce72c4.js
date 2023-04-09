import{i as A,o as I,B as m,C as L,aa as D,P as x,E,z as u,q as c,G as l,p as U,D as b,u as S,F as $,s as h,S as F}from"./index.1726d409.js";import j from"./Loader.471d868e.js";import R from"./PersonalData.5da6d15a.js";import B from"./Delivery.f5e2fc00.js";import H from"./Payment.639dcaf4.js";import M from"./OrderItem.497f9da7.js";import q from"./Comment.c6411f7c.js";import V from"./CheckoutTotal.f17e4973.js";import{_ as W}from"./MasterLayout.87038c7c.js";import{u as z}from"./app.1eb7bf4d.js";import{C as _,h as G}from"./index.cb8eed0c.js";import{i as O}from"./load.62821651.js";import"./_plugin-vue_export-helper.cdc0426e.js";import"./Label.9918c3e0.js";import"./Input.c1a6bdb4.js";import"./InputError.2731f248.js";import"./Button.8012267c.js";import"./Header.80ddd88d.js";import"./CartIcon.e7c5a976.js";import"./Langs.3beb2cbc.js";import"./Logo.9264c4eb.js";import"./HeaderCategories.bf8b75cb.js";import"./create-element-if-not-defined.26147364.js";import"./pagination.44308c03.js";import"./lazy.2bfe2e68.js";import"./autoplay.88899761.js";import"./swiper-slide.7de65c6d.js";import"./Footer.d755c37c.js";import"./FixedBanner.2140537c.js";const T=["onSubmit"],J={class:"grid grid-cols-1 md:grid-cols-2 relative gap-4"},K={class:""},Q={class:"cart-item__right row mb-3"},X=c("h3",{class:"text-2xl font-heading mb-[1rem]"},"\u0417\u0430\u043C\u043E\u0432\u043B\u0435\u043D\u043D\u044F",-1),Y={class:"grid gap-4"},De={__name:"Index",props:["lang","eventIdInitiateCheckout","eventIdPurchase","categories","options","pages"],setup(s){const d=s,{appContext:g}=D(),{$fbq:p}=g.config.globalProperties,i=x(),v=E("$swal"),f=z(),r=A({order:{name:null,last_name:null,middle_name:null,email:null,comment:null,phone:null,city:null,postal_office:null,payment_method:null,event_id:d.eventIdPurchase},errors:[],contentIds:[],ga4ProductsArray:[],isLoading:!1});I(()=>{{i.state.list.forEach(e=>{r.value.contentIds.push(e.id),r.value.ga4ProductsArray.push({item_name:e.name.ua?e.name.ua:e.name.ru,item_id:e.id,price:e.discount_price?e.discount_price:e.price,quantity:e.count})});try{p("track","InitiateCheckout",{value:i.state.totalPrice,currency:"UAH",num_items:i.state.totalCount,content_ids:r.value.contentIds,content_type:"product"},{event_id:d.eventIdInitiateCheckout}),f.trackEvent({event:"start_checkout",ecommerce:{items:r.value.ga4ProductsArray}})}catch(e){console.log(e)}}O.value=!1});function y(e){const a=new Wayforpay,o={names:[],prices:[],counts:[],amount:null};e.items.forEach(n=>{o.names.push(n.product.h1.ua?n.product.h1.ua:n.product.h1.ru),o.counts.push(n.count)}),e.payment_method==="minimum_prepayment"?(o.amount=e.total_price*.1,e.items.forEach(n=>{o.prices.push(n.sale_price*.1)})):e.payment_method==="full_prepayment"&&(o.amount=e.total_price,e.items.forEach(n=>{o.prices.push(n.sale_price)}));let t={merchantAccount:"dabango_store",merchantDomainName:"dabango.store",orderReference:e.id,orderDate:Math.floor(new Date(e.created_at).getTime()/1e3),amount:o.amount,currency:"UAH",productName:o.names,productPrice:o.prices,productCount:o.counts,clientFirstName:e.client.name,clientLastName:e.client.last_name,clientPhone:e.client.phone,language:"UA",deliveryList:"nova",returnUrl:route("api.v1.orders.set-prepayment")},w=Object.values({merchantAccount:t.merchantAccount,merchantDomainName:t.merchantDomainName,orderReference:t.orderReference,orderDate:t.orderDate,amount:t.amount,currency:t.currency,productName:t.productName.join(";"),productCount:t.productCount.join(";"),productPrice:t.productPrice.join(";")}).join(";"),k=_.enc.Utf8.stringify(_.enc.Utf8.parse(G(w,"4acdf560d56f56cde24ec0278a7f2676c5020f94")));a.run({merchantAccount:t.merchantAccount,merchantDomainName:t.merchantDomainName,authorizationType:"SimpleSignature",merchantSignature:k,orderReference:t.orderReference,orderDate:t.orderDate,amount:t.amount,currency:t.currency,productName:t.productName,productPrice:t.productPrice,productCount:t.productCount,clientFirstName:t.clientFirstName,clientLastName:t.clientLastName,clientPhone:t.clientPhone,language:t.language,returnUrl:t.returnUrl},function(n){P(n,e)},function(n){},function(n){})}function P(e,a){window.addEventListener("message",function(){event.data==="WfpWidgetEventApproved"&&axios.post(route("api.v1.orders.set-prepayment",e)).then(({data:o})=>{window.location.href=route("thanks",a.id)})},!1)}function C(){r.value.isLoading=!0,r.value.errors=[],axios.post(route("api.v1.orders.create"),r.value.order).then(({data:e})=>{try{p("track","Purchase",{value:i.state.totalPrice,currency:"UAH",content_type:"product",num_items:i.state.totalCount,content_ids:r.value.contentIds},{event_id:d.eventIdPurchase}),f.trackEvent({event:"send_order",ecommerce:{transaction_id:e.order.id,value:e.order.total_price,currency:"UAH",items:r.value.ga4ProductsArray}})}catch(a){console.log(a)}axios.post(route("sms.new.order"),{order_id:e.order.id,phone:e.order.client.phone}).then().catch(a=>console.log(a)).then(()=>{e.order.payment_method==="minimum_prepayment"||e.order.payment_method==="full_prepayment"?y(e.order):window.location.href=route("thanks",e.order.id)}),r.value.isLoading=!1}).catch(({response:e})=>{console.log(e),r.value.errors=e.data,r.value.isLoading=!1,v({icon:"error",title:"\u0412\u0438\u043D\u0438\u043A\u043B\u0430 \u043F\u043E\u043C\u0438\u043B\u043A\u0430",text:"\u041F\u0435\u0440\u0435\u0432\u0456\u0440\u0442\u0435 \u043A\u043E\u0440\u0440\u0435\u043A\u0442\u043D\u0456\u0442\u044C \u0434\u0430\u043D\u043D\u0438\u0445"})})}function N(){}return(e,a)=>(u(),m(W,{categories:s.categories,options:s.options,lang:s.lang,pages:s.pages},{default:L(()=>[c("form",{onSubmit:F(C,["prevent"])},[c("div",J,[c("div",null,[l(R,{order:r.value.order,errors:r.value.errors},null,8,["order","errors"]),l(B,{order:r.value.order},null,8,["order"]),l(H,{order:r.value.order},null,8,["order"]),l(q,{order:r.value.order},null,8,["order"])]),c("div",K,[c("div",Q,[X,c("div",Y,[(u(!0),U($,null,b(S(i).state.list,o=>(u(),m(M,{item:o,onRemoveFromCart:N},null,8,["item"]))),256))]),r.value.isLoading?(u(),m(j,{key:0})):h("",!0),r.value.isLoading?h("",!0):(u(),m(V,{key:1}))])])])],40,T)]),_:1},8,["categories","options","lang","pages"]))}};export{De as default};
