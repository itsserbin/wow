import"./create-element-if-not-defined-cfc4b805.js";import{P as p}from"./pagination-93e47b88.js";import{A as f}from"./autoplay-1fa09654.js";import{E as _}from"./effect-coverflow-d8202d96.js";import v from"./ReviewForm-90d06986.js";import{g as r,i as s,l as a,z as i,v as n,a0 as w,j as g,D as d,p as t,F as x,x as h,s as y}from"./app-443dd386.js";import"./swal-950be8b9.js";const b={id:"reviews",class:"reviews px-5"},P={key:0},k={class:"text-[24px] text-[#000] font-bold mb-5 text-center"},B={class:"font-bold"},C=s("hr",{class:"bg-red-600 shadow-lg rounded border-0 h-[1px] my-2"},null,-1),z={__name:"Reviews",props:{reviews:Array,id:Number,textProductReviews:{type:String,default:"Відгуки"},textNoReviews:{type:String,default:"Відгуки відсутні"}},setup(e){const l=[f,p,_],c={slidesPerView:1,spaceBetween:0,autoHeight:!0,pagination:{type:"progressbar"},loop:!0,autoplay:{delay:2500,disableOnInteraction:!1},grabCursor:!0,effect:"coverflow",centeredSlides:!0,coverflowEffect:{rotate:50,stretch:0,depth:100,modifier:1,slideShadows:!1}};return(N,R)=>{const u=d("swiper-slide"),m=d("swiper");return t(),r("div",b,[e.reviews.length?(t(),r("div",P,[s("div",k,a(e.textProductReviews),1),i(m,w({class:"product-reviews-carousel",modules:l},c),{default:n(()=>[(t(!0),r(x,null,h(e.reviews,o=>(t(),y(u,{key:o.id,class:"text-center bg-red-100 rounded-xl p-5"},{default:n(()=>[s("div",B,a(o.name),1),C,s("div",null,a(o.comment),1)]),_:2},1024))),128))]),_:1},16)])):g("",!0),i(v,{id:e.id},null,8,["id"])])}}};export{z as default};
