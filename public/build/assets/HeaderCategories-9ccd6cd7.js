import"./create-element-if-not-defined-cfc4b805.js";import{P as d}from"./pagination-93e47b88.js";import{L as m}from"./lazy-e32f6dbe.js";import{A as _}from"./autoplay-1fa09654.js";import{S as g,a as f}from"./swiper-slide-df8ae9a2.js";import{l as w,m as i,E as y,B as l,a7 as h,u as s,y as t,F as x,C as P,A as V,p as n,v as B}from"./index-bc3c132c.js";const S={class:"max-w-7xl mx-auto"},b={class:"text-center py-2"},k=["href"],N={__name:"HeaderCategories",props:["categories","lang"],setup(a){const r=a,c=[m,_,d],p=w(()=>e=>r.lang==="ua"?e.ua:r.lang==="ru"?e.ru:null),u={spaceBetween:10,pagination:{type:"progressbar"},freeMode:!0,autoplay:{delay:5e3,disableOnInteraction:!1},slidesPerView:2,breakpoints:{568:{slidesPerView:2},768:{slidesPerView:4},991:{slidesPerView:6},1366:{slidesPerView:8}}};return(e,C)=>(t(),i("div",S,[y(s(f),h({class:"header-categories"},u,{modules:c}),{default:l(()=>[(t(!0),i(x,null,P(a.categories,o=>(t(),V(s(g),null,{default:l(()=>[n("li",b,[n("a",{href:e.route("category",o.slug),class:"font-bold text-sm whitespace-nowrap"},B(s(p)(o.title)),9,k)])]),_:2},1024))),256))]),_:1},16)]))}};export{N as default};
