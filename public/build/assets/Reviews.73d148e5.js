import"./create-element-if-not-defined.26147364.js";import{P as p}from"./pagination.44308c03.js";import{A as f}from"./autoplay.88899761.js";import{E as _}from"./effect-coverflow.775bdd96.js";import w from"./ReviewForm.e2f882ce.js";import{g as r,i as s,t as i,x as a,w as n,a0 as v,j as g,B as d,o as t,F as x,s as h,m as y}from"./vendor.1f6af4a6.js";import"./swal.1147426a.js";import"./vue.m.8e70aa70.js";import"./__commonjsHelpers__.488ed5c2.js";const b={id:"reviews",class:"reviews px-5"},B={key:0},P={class:"text-[24px] text-[#000] font-bold mb-5 text-center"},k={class:"font-bold"},C=s("hr",{class:"bg-red-600 shadow-lg rounded border-0 h-[1px] my-2"},null,-1),L={__name:"Reviews",props:{reviews:Array,id:Number,textProductReviews:{type:String,default:"\u0412\u0456\u0434\u0433\u0443\u043A\u0438"},textNoReviews:{type:String,default:"\u0412\u0456\u0434\u0433\u0443\u043A\u0438 \u0432\u0456\u0434\u0441\u0443\u0442\u043D\u0456"}},setup(e){const l=[f,p,_],c={slidesPerView:1,spaceBetween:0,autoHeight:!0,pagination:{type:"progressbar"},loop:!0,autoplay:{delay:2500,disableOnInteraction:!1},grabCursor:!0,effect:"coverflow",centeredSlides:!0,coverflowEffect:{rotate:50,stretch:0,depth:100,modifier:1,slideShadows:!1}};return(N,R)=>{const m=d("swiper-slide"),u=d("swiper");return t(),r("div",b,[e.reviews.length?(t(),r("div",B,[s("div",P,i(e.textProductReviews),1),a(u,v({class:"product-reviews-carousel",modules:l},c),{default:n(()=>[(t(!0),r(x,null,h(e.reviews,o=>(t(),y(m,{key:o.id,class:"text-center bg-red-100 rounded-xl p-5"},{default:n(()=>[s("div",k,i(o.name),1),C,s("div",null,i(o.comment),1)]),_:2},1024))),128))]),_:1},16)])):g("",!0),a(w,{id:e.id},null,8,["id"])])}}};export{L as default};
