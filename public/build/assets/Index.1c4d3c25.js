import{p as A,q as L,m as l,w as k,Z as x,E as D,v as E,a9 as U,o as u,i as c,x as d,g as b,s as V,u as $,F as S,j as f,I as j}from"./vendor.1f6af4a6.js";import F from"./Loader.39470ae5.js";import R from"./PersonalData.80484558.js";import B from"./Delivery.9d4de335.js";import H from"./Payment.0967141c.js";import M from"./OrderItem.a503aa34.js";import q from"./Comment.74f1244b.js";import W from"./CheckoutTotal.b8677602.js";import O from"./MasterLayout.419bef61.js";import{C as g,h as T}from"./index.31b8dac3.js";import{i as z}from"./load.cf6241e1.js";import"./__commonjsHelpers__.488ed5c2.js";import"./_plugin-vue_export-helper.cdc0426e.js";import"./Label.81064beb.js";import"./Input.0cfa13d3.js";import"./InputError.37578239.js";import"./maska.esm.2315e0de.js";import"./Button.678af94f.js";import"./Header.6ebc2146.js";import"./vue.m.8e70aa70.js";import"./CartIcon.fe083e6a.js";import"./Langs.d546e1f4.js";import"./Logo.c7a5de92.js";import"./HeaderCategories.3cfee59b.js";import"./create-element-if-not-defined.26147364.js";import"./pagination.44308c03.js";import"./lazy.2bfe2e68.js";import"./autoplay.88899761.js";import"./swiper-slide.3df0c6ab.js";import"./Footer.cbd5536b.js";import"./FixedBanner.b61bbed6.js";const G=["onSubmit"],J={class:"grid grid-cols-1 md:grid-cols-2 relative gap-4"},Z={class:""},K={class:"cart-item__right row mb-3"},Q=c("h3",{class:"text-2xl font-heading mb-[1rem]"},"\u0417\u0430\u043C\u043E\u0432\u043B\u0435\u043D\u043D\u044F",-1),X={class:"grid gap-4"},Ee={__name:"Index",props:["lang","eventIdInitiateCheckout","eventIdPurchase","categories","options","pages","eventIdPageView"],setup(i){const m=i,{appContext:_}=x(),{$fbq:p}=_.config.globalProperties,s=D(),v=E("$swal"),h=U(),r=A({order:{name:null,last_name:null,middle_name:null,email:null,comment:null,phone:null,city:null,postal_office:null,payment_method:null,event_id:m.eventIdPurchase},errors:[],contentIds:[],ga4ProductsArray:[],isLoading:!1});L(()=>{{s.state.list.forEach(e=>{r.value.contentIds.push(e.id),r.value.ga4ProductsArray.push({item_name:e.name.ua?e.name.ua:e.name.ru,item_id:e.id,price:e.discount_price?e.discount_price:e.price,quantity:e.count})});try{p("PageView",{},m.eventIdPageView),p("InitiateCheckout",{value:s.state.totalPrice,currency:"UAH",num_items:s.state.totalCount,content_ids:r.value.contentIds,content_type:"product"},m.eventIdInitiateCheckout),h.trackEvent({event:"start_checkout",ecommerce:{items:r.value.ga4ProductsArray}})}catch(e){console.log(e)}}z.value=!1});function y(e){const a=new Wayforpay,o={names:[],prices:[],counts:[],amount:null};e.items.forEach(n=>{o.names.push(n.product.h1.ua?n.product.h1.ua:n.product.h1.ru),o.counts.push(n.count)}),e.payment_method==="minimum_prepayment"?(o.amount=e.total_price*.1,e.items.forEach(n=>{o.prices.push(n.sale_price*.1)})):e.payment_method==="full_prepayment"&&(o.amount=e.total_price,e.items.forEach(n=>{o.prices.push(n.sale_price)}));let t={merchantAccount:"dabango_store",merchantDomainName:"dabango.store",orderReference:e.id,orderDate:Math.floor(new Date(e.created_at).getTime()/1e3),amount:o.amount,currency:"UAH",productName:o.names,productPrice:o.prices,productCount:o.counts,clientFirstName:e.client.name,clientLastName:e.client.last_name,clientPhone:e.client.phone,language:"UA",deliveryList:"nova",returnUrl:route("api.v1.orders.set-prepayment")},N=Object.values({merchantAccount:t.merchantAccount,merchantDomainName:t.merchantDomainName,orderReference:t.orderReference,orderDate:t.orderDate,amount:t.amount,currency:t.currency,productName:t.productName.join(";"),productCount:t.productCount.join(";"),productPrice:t.productPrice.join(";")}).join(";"),C=g.enc.Utf8.stringify(g.enc.Utf8.parse(T(N,"4acdf560d56f56cde24ec0278a7f2676c5020f94")));a.run({merchantAccount:t.merchantAccount,merchantDomainName:t.merchantDomainName,authorizationType:"SimpleSignature",merchantSignature:C,orderReference:t.orderReference,orderDate:t.orderDate,amount:t.amount,currency:t.currency,productName:t.productName,productPrice:t.productPrice,productCount:t.productCount,clientFirstName:t.clientFirstName,clientLastName:t.clientLastName,clientPhone:t.clientPhone,language:t.language,returnUrl:t.returnUrl},function(n){P(n,e)},function(n){},function(n){})}function P(e,a){window.addEventListener("message",function(){event.data==="WfpWidgetEventApproved"&&axios.post(route("api.v1.orders.set-prepayment",e)).then(({data:o})=>{window.location.href=route("thanks",a.id)})},!1)}function w(){r.value.isLoading=!0,r.value.errors=[],axios.post(route("api.v1.orders.create"),r.value.order).then(({data:e})=>{try{p("Purchase",{value:s.state.totalPrice,currency:"UAH",content_type:"product",num_items:s.state.totalCount,content_ids:r.value.contentIds},m.eventIdPurchase),h.trackEvent({event:"send_order",ecommerce:{transaction_id:e.order.id,value:e.order.total_price,currency:"UAH",items:r.value.ga4ProductsArray}})}catch(a){console.log(a)}axios.post(route("sms.new.order"),{order_id:e.order.id,phone:e.order.client.phone}).then().catch(a=>console.log(a)).then(()=>{e.order.payment_method==="minimum_prepayment"||e.order.payment_method==="full_prepayment"?y(e.order):window.location.href=route("thanks",e.order.id)}),r.value.isLoading=!1}).catch(({response:e})=>{console.log(e),r.value.errors=e.data,r.value.isLoading=!1,v({icon:"error",title:"\u0412\u0438\u043D\u0438\u043A\u043B\u0430 \u043F\u043E\u043C\u0438\u043B\u043A\u0430",text:"\u041F\u0435\u0440\u0435\u0432\u0456\u0440\u0442\u0435 \u043A\u043E\u0440\u0440\u0435\u043A\u0442\u043D\u0456\u0442\u044C \u0434\u0430\u043D\u043D\u0438\u0445"})})}function I(){}return(e,a)=>(u(),l(O,{categories:i.categories,options:i.options,lang:i.lang,pages:i.pages,eventIdPageView:i.eventIdPageView},{default:k(()=>[c("form",{onSubmit:j(w,["prevent"])},[c("div",J,[c("div",null,[d(R,{order:r.value.order,errors:r.value.errors},null,8,["order","errors"]),d(B,{order:r.value.order},null,8,["order"]),d(H,{order:r.value.order},null,8,["order"]),d(q,{order:r.value.order},null,8,["order"])]),c("div",Z,[c("div",K,[Q,c("div",X,[(u(!0),b(S,null,V($(s).state.list,o=>(u(),l(M,{item:o,onRemoveFromCart:I},null,8,["item"]))),256))]),r.value.isLoading?(u(),l(F,{key:0})):f("",!0),r.value.isLoading?f("",!0):(u(),l(W,{key:1}))])])])],40,G)]),_:1},8,["categories","options","lang","pages","eventIdPageView"]))}};export{Ee as default};
