import d from"./ProductCard.679ec37d.js";import{S as u,a as p}from"./swiper-slide.3df0c6ab.js";import"./create-element-if-not-defined.26147364.js";import{N as m}from"./navigation.b481f07e.js";import{A as g}from"./autoplay.88899761.js";import{g as a,i as f,t as _,x as s,w as r,a0 as w,u as o,j as x,o as t,F as v,s as y,m as P}from"./vendor.1f6af4a6.js";import"./lazy.2bfe2e68.js";import"./swal.1147426a.js";import"./vue.m.8e70aa70.js";import"./__commonjsHelpers__.488ed5c2.js";const k={key:0,class:"relative product-list"},B={class:"font-bold text-black text-center text-2xl font-heading mb-[15px]"},I={__name:"RelativeProducts",props:{products:Array,lang:String,textRelativeProducts:{type:String,default:"\u0421\u0445\u043E\u0436\u0456 \u0442\u043E\u0432\u0430\u0440\u0438"}},setup(e){const i=[m,g],l={spaceBetween:10,navigation:!0,pagination:{clickable:!0},loop:!0,autoplay:{delay:5e3,disableOnInteraction:!1},slidesPerView:2,breakpoints:{768:{slidesPerView:3,spaceBetween:10},1024:{slidesPerView:4,spaceBetween:20},1366:{slidesPerView:5,spaceBetween:20}}};return(S,V)=>e.products.length?(t(),a("section",k,[f("div",B,_(e.textRelativeProducts),1),s(o(p),w({modules:i},l,{class:"relative-slider"}),{default:r(()=>[(t(!0),a(v,null,y(e.products,(n,c)=>(t(),P(o(u),{key:c},{default:r(()=>[s(d,{product:n,lang:e.lang},null,8,["product","lang"])]),_:2},1024))),128))]),_:1},16)])):x("",!0)}};export{I as default};
