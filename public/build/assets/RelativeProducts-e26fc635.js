import d from"./ProductCard-e0b7cd73.js";import{S as u,a as p}from"./swiper-slide-9942daa4.js";import{N as m}from"./navigation-ba233cbe.js";import{A as g}from"./autoplay-5b9d7d48.js";import{l as t,m as a,p as f,v as _,n as s,y as r,O as v,x as o,t as x,F as w,q as y,s as P}from"./index-a01126e2.js";import"./eventTracking-f0a600c6.js";import"./swal-03cac797.js";const k={key:0,class:"relative product-list"},B={class:"font-bold text-black text-center text-2xl font-heading mb-[15px]"},O={__name:"RelativeProducts",props:{products:Array,lang:String,textRelativeProducts:{type:String,default:"Схожі товари"}},setup(e){const i=[m,g],l={spaceBetween:10,navigation:!0,pagination:{clickable:!0},loop:!0,autoplay:{delay:5e3,disableOnInteraction:!1},slidesPerView:2,breakpoints:{768:{slidesPerView:3,spaceBetween:10},1024:{slidesPerView:4,spaceBetween:20},1366:{slidesPerView:5,spaceBetween:20}}};return(S,V)=>e.products.length?(t(),a("section",k,[f("div",B,_(e.textRelativeProducts),1),s(o(p),v({modules:i},l,{class:"relative-slider"}),{default:r(()=>[(t(!0),a(w,null,y(e.products,(n,c)=>(t(),P(o(u),{key:c},{default:r(()=>[s(d,{product:n,lang:e.lang},null,8,["product","lang"])]),_:2},1024))),128))]),_:1},16)])):x("",!0)}};export{O as default};
