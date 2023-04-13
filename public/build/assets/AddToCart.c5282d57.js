import{p as _,g as r,i as e,t as a,j as n,x as v,w as f,F as m,s as x,m as T,u as w,E as B,o as c,y as g,z as k,G as V,k as C,a9 as M}from"./vendor.1f6af4a6.js";import z from"./BuyIn1ClickModal.1531a1e9.js";import b from"./Button.678af94f.js";import{s as y}from"./swal.1147426a.js";import"./__commonjsHelpers__.488ed5c2.js";import"./maska.esm.2315e0de.js";import"./Modal.2a74feaf.js";import"./Loader.39470ae5.js";import"./_plugin-vue_export-helper.cdc0426e.js";import"./Input.0cfa13d3.js";import"./InputError.37578239.js";import"./Label.81064beb.js";import"./vue.m.8e70aa70.js";const U={class:"pt-[5%]"},j=e("hr",{class:"mb-4"},null,-1),N={class:"grid grid-cols-1 md:grid-cols-2 font-subheading"},P={class:"mb-4 mb-md-0 flex items-center justify-evenly flex-col"},E={key:0,class:"text-center"},S={class:"text-lg font-medium text-[#A5A5A5] line-through"},q={class:"font-bold text-[#ff0000] text-4xl"},D={key:1,class:"text-center"},F={class:"text-lg font-bold font-medium text-[#A5A5A5] text-[2.5rem]"},G={class:"grid gap-4"},$=C(" \u0414\u043E \u043A\u043E\u0448\u0438\u043A\u0430 "),H=C(" \u041A\u0443\u043F\u0438\u0442\u0438 \u0432 1 \u043A\u043B\u0456\u043A "),L=e("hr",{class:"mt-4"},null,-1),J={class:"grid grid-cols-1 md:grid-cols-2 gap-4 mt-5 font-subheading"},K={key:0},O=e("div",{class:"w-full mb-2"},"\u0414\u043E\u0441\u0442\u0443\u043F\u043D\u0456 \u0440\u043E\u0437\u043C\u0456\u0440\u0438",-1),Q={class:"flex pb-[20px]"},R={class:"mx-1"},W=["value","id","onUpdate:modelValue"],X=["for"],Y={key:1},Z=e("div",{class:"w-100 mb-2"},"\u0414\u043E\u0441\u0442\u0443\u043F\u043D\u0456 \u043A\u043E\u043B\u044C\u043E\u0440\u0438",-1),ee={class:"flex"},te=["id","value","onUpdate:modelValue"],oe=["for"],fe={__name:"AddToCart",props:["product","eventIdAddToCard","eventIdPurchaseIn1Click"],setup(o){const t=o,A=M(),p=B(),d=_({count:1,size:[],color:[],item_id:t.product.id,src:route(route().current(),route().params),event_id:t.eventIdAddToCard}),s=_({product:{id:null,discount_price:null,price:null,h1:null,sizes:[],colors:[]},isActiveBuyIn1ClickModal:!1,isAddToCart:!1});function h(){s.value.isActiveBuyIn1ClickModal=!s.value.isActiveBuyIn1ClickModal}function I(){s.value.isAddToCart||axios.post(route("api.v1.cart.add",d.value)).then(()=>{s.value.isAddToCart=!0;try{fbq("track","AddToCart",{value:t.product.discount_price?t.product.discount_price:t.product.price,currency:"UAH",content_type:"product",content_ids:[d.value.item_id],content_name:t.product.h1},d.value.event_id),A.trackEvent({event:"add_product_to_cart",ecommerce:{items:[{item_name:t.product.h1,item_id:d.value.item_id,price:t.product.discount_price?t.product.discount_price:t.product.price,quantity:1}]}})}catch(l){console.log(l)}p.commit("loadCart"),y({icon:"success",title:"\u0422\u043E\u0432\u0430\u0440 \u0434\u043E\u0434\u0430\u043D\u043E \u0434\u043E \u0432\u0430\u0448\u043E\u0433\u043E \u043A\u043E\u0448\u0438\u043A\u0430!",text:"\u0412\u0438 \u043C\u043E\u0436\u0435\u0442\u0435 \u043E\u0444\u043E\u0440\u043C\u0438\u0442\u0438 \u0437\u0430\u043C\u043E\u0432\u043B\u0435\u043D\u043D\u044F \u0430\u0431\u043E \u043F\u0440\u043E\u0434\u043E\u0432\u0436\u0438\u0442\u0438 \u043F\u043E\u043A\u0443\u043F\u043A\u0438 :)",showCancelButton:!0,confirmButtonText:"\u041E\u0444\u043E\u0440\u043C\u0438\u0442\u0438 \u0437\u0430\u043C\u043E\u0432\u043B\u0435\u043D\u043D\u044F",cancelButtonText:"\u041F\u0440\u043E\u0434\u043E\u0432\u0436\u0438\u0442\u0438 \u043F\u043E\u043A\u0443\u043F\u043A\u0438"}).then(l=>{l.isConfirmed&&(window.location.href=route("checkout"))})}).catch(()=>{y({icon:"error",title:"\u0412\u0438\u043D\u0438\u043A\u043B\u0430 \u043F\u043E\u043C\u0438\u043B\u043A\u0430",text:"\u041F\u0435\u0440\u0435\u0432\u0456\u0440\u0442\u0435 \u043A\u043E\u0440\u0440\u0435\u043A\u0442\u043D\u0456\u0441\u0442\u044C \u0434\u0430\u043D\u043D\u0438\u0445"})})}return(l,ce)=>(c(),r(m,null,[e("div",U,[j,e("div",N,[e("div",P,[o.product.discount_price?(c(),r("div",E,[e("div",S,a(o.product.price)+" \u0433\u0440\u043D. ",1),e("div",q,a(o.product.discount_price)+" \u0433\u0440\u043D.",1)])):n("",!0),o.product.discount_price?n("",!0):(c(),r("div",D,[e("div",F,a(o.product.price)+" \u0433\u0440\u043D. ",1)]))]),e("div",G,[v(b,{onClick:I,type:"button"},{default:f(()=>[$]),_:1}),v(b,{onClick:h,type:"button"},{default:f(()=>[H]),_:1})])]),L]),e("div",J,[o.product.sizes.length?(c(),r("div",K,[O,e("ul",Q,[(c(!0),r(m,null,x(o.product.sizes,i=>(c(),r("li",R,[g(e("input",{type:"checkbox",value:i.title,id:i.title,class:"hidden peer","onUpdate:modelValue":u=>d.value.size=u},null,8,W),[[k,d.value.size]]),e("label",{for:i.title,class:"inline-flex justify-center items-center mx-auto text-gray-500 bg-white rounded-lg border-2 border-gray-200 cursor-pointer peer-checked:border-blue-600 hover:text-gray-600 peer-checked:text-gray-600 hover:bg-gray-50 w-[40px] h-[40px]"},a(i.title),9,X)]))),256))])])):n("",!0),o.product.colors.length?(c(),r("div",Y,[Z,e("div",ee,[(c(!0),r(m,null,x(o.product.colors,i=>(c(),r("div",null,[g(e("input",{type:"checkbox",id:i.name,value:i.name,class:"hidden peer","onUpdate:modelValue":u=>d.value.color=u},null,8,te),[[k,d.value.color]]),e("label",{for:i.name,style:V("background-color:"+i.hex),class:"inline-flex justify-center items-center mx-auto text-black-500 rounded-lg border-2 border-gray-200 cursor-pointer peer-checked:border-blue-600 hover:text-black peer-checked:text-gray-600 hover:bg-black w-[40px] h-[40px]"},null,12,oe)]))),256))])])):n("",!0)]),s.value.isActiveBuyIn1ClickModal?(c(),T(z,{key:0,onCloseModal:h,item:d.value,product:o.product,cart:w(p).state.list,eventIdPurchaseIn1Click:t.eventIdPurchaseIn1Click,eventIdAddToCard:t.eventIdAddToCard,isAddToCart:s.value.isAddToCart},null,8,["item","product","cart","eventIdPurchaseIn1Click","eventIdAddToCard","isAddToCart"])):n("",!0)],64))}};export{fe as default};