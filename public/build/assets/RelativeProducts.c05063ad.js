import d from"./ProductCard.310c4db8.js";import{S as u,a as p}from"./swiper-slide.7de65c6d.js";import"./create-element-if-not-defined.26147364.js";import{N as m}from"./navigation.b481f07e.js";import{A as g}from"./autoplay.88899761.js";import{p as a,q as f,x as _,G as s,C as r,a5 as x,u as o,s as v,z as t,F as w,D as y,B}from"./index.1726d409.js";import"./app.1eb7bf4d.js";import"./lazyload.6866379a.js";import"./lazy.2bfe2e68.js";const P={key:0,class:"relative product-list"},k={class:"font-bold text-black text-center text-2xl font-heading mb-[15px]"},z={__name:"RelativeProducts",props:{products:Array,lang:String,textRelativeProducts:{type:String,default:"\u0421\u0445\u043E\u0436\u0456 \u0442\u043E\u0432\u0430\u0440\u0438"}},setup(e){const i=[m,g],l={spaceBetween:10,navigation:!0,pagination:{clickable:!0},loop:!0,autoplay:{delay:5e3,disableOnInteraction:!1},slidesPerView:2,breakpoints:{768:{slidesPerView:3,spaceBetween:10},1024:{slidesPerView:4,spaceBetween:20},1366:{slidesPerView:5,spaceBetween:20}}};return(S,V)=>e.products.length?(t(),a("section",P,[f("div",k,_(e.textRelativeProducts),1),s(o(p),x({modules:i},l,{class:"relative-slider"}),{default:r(()=>[(t(!0),a(w,null,y(e.products,(n,c)=>(t(),B(o(u),{key:c},{default:r(()=>[s(d,{product:n,lang:e.lang},null,8,["product","lang"])]),_:2},1024))),128))]),_:1},16)])):v("",!0)}};export{z as default};
