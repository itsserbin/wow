import"./create-element-if-not-defined.26147364.js";import{P as u}from"./pagination.44308c03.js";import{A as f}from"./autoplay.88899761.js";import{E as _}from"./effect-coverflow.775bdd96.js";import w from"./ReviewForm.8e4a64ba.js";import{i as r,j as s,t as i,y as a,w as n,a0 as v,k as g,C as d,o as t,F as h,v as x,p as y}from"./vendor.2c8aab53.js";import"./swal.ca5633e8.js";import"./vue.m.132a23fc.js";import"./__commonjsHelpers__.4516dc8a.js";const b={id:"reviews",class:"reviews px-5"},k={key:0},C={class:"text-[24px] text-[#000] font-bold mb-5 text-center"},P={class:"font-bold"},B=s("hr",{class:"bg-red-600 shadow-lg rounded border-0 h-[1px] my-2"},null,-1),L={__name:"Reviews",props:{reviews:Array,id:Number,textProductReviews:{type:String,default:"\u0412\u0456\u0434\u0433\u0443\u043A\u0438"},textNoReviews:{type:String,default:"\u0412\u0456\u0434\u0433\u0443\u043A\u0438 \u0432\u0456\u0434\u0441\u0443\u0442\u043D\u0456"}},setup(e){const l=[f,u,_],c={slidesPerView:1,spaceBetween:0,autoHeight:!0,pagination:{type:"progressbar"},loop:!0,autoplay:{delay:2500,disableOnInteraction:!1},grabCursor:!0,effect:"coverflow",centeredSlides:!0,coverflowEffect:{rotate:50,stretch:0,depth:100,modifier:1,slideShadows:!1}};return(N,R)=>{const m=d("swiper-slide"),p=d("swiper");return t(),r("div",b,[e.reviews.length?(t(),r("div",k,[s("div",C,i(e.textProductReviews),1),a(p,v({class:"product-reviews-carousel",modules:l},c),{default:n(()=>[(t(!0),r(h,null,x(e.reviews,o=>(t(),y(m,{key:o.id,class:"text-center bg-red-100 rounded-xl p-5"},{default:n(()=>[s("div",P,i(o.name),1),B,s("div",null,i(o.comment),1)]),_:2},1024))),128))]),_:1},16)])):g("",!0),a(w,{id:e.id},null,8,["id"])])}}};export{L as default};