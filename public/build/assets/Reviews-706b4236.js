import{S as u,a as m}from"./swiper-slide-34ecd3e2.js";import{P as f}from"./pagination-6ae33427.js";import{A as p}from"./autoplay-2a374956.js";import{E as _}from"./effect-coverflow-687e737b.js";import v from"./ReviewForm-09b8d1bd.js";import{p as t,q as o,v as s,B as a,l as i,x as d,ad as w,t as l,C as g,F as x,K as h,D as y}from"./app-f55448cf.js";import"./swal-01ed9a07.js";const b={id:"reviews",class:"reviews px-5"},S={key:0},B={class:"text-[24px] text-[#000] font-bold mb-5 text-center"},P={class:"font-bold"},k=s("hr",{class:"bg-red-600 shadow-lg rounded border-0 h-[1px] my-2"},null,-1),H={__name:"Reviews",props:{reviews:Array,id:Number,textProductReviews:{type:String,default:"Відгуки"},textNoReviews:{type:String,default:"Відгуки відсутні"}},setup(e){const n=[p,f,_],c={slidesPerView:1,spaceBetween:0,autoHeight:!0,pagination:{type:"progressbar"},loop:!0,autoplay:{delay:2500,disableOnInteraction:!1},grabCursor:!0,effect:"coverflow",centeredSlides:!0,coverflowEffect:{rotate:50,stretch:0,depth:100,modifier:1,slideShadows:!1}};return(C,N)=>(t(),o("div",b,[e.reviews.length?(t(),o("div",S,[s("div",B,a(e.textProductReviews),1),i(l(m),w({class:"product-reviews-carousel",modules:n},c),{default:d(()=>[(t(!0),o(x,null,h(e.reviews,r=>(t(),y(l(u),{key:r.id,class:"text-center bg-red-100 rounded-xl p-5"},{default:d(()=>[s("div",P,a(r.name),1),k,s("div",null,a(r.comment),1)]),_:2},1024))),128))]),_:1},16)])):g("",!0),i(v,{id:e.id},null,8,["id"])]))}};export{H as default};