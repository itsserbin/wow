import"./create-element-if-not-defined.26147364.js";import{P as d}from"./pagination.44308c03.js";import{L as m}from"./lazy.2bfe2e68.js";import{A as g}from"./autoplay.88899761.js";import{S as _,a as f}from"./swiper-slide.d590aaff.js";import{f as w,g as i,x as h,w as l,a1 as x,u as s,o as t,F as y,s as P,m as V,i as n,t as B}from"./vendor.693a237b.js";import"./__commonjsHelpers__.488ed5c2.js";const S={class:"max-w-7xl mx-auto"},b={class:"text-center py-2"},k=["href"],D={__name:"HeaderCategories",props:["categories","lang"],setup(a){const r=a,c=[m,g,d],p=w(()=>e=>r.lang==="ua"?e.ua:r.lang==="ru"?e.ru:null),u={spaceBetween:10,pagination:{type:"progressbar"},freeMode:!0,autoplay:{delay:5e3,disableOnInteraction:!1},slidesPerView:2,breakpoints:{568:{slidesPerView:2},768:{slidesPerView:4},991:{slidesPerView:6},1366:{slidesPerView:8}}};return(e,C)=>(t(),i("div",S,[h(s(f),x({class:"header-categories"},u,{modules:c}),{default:l(()=>[(t(!0),i(y,null,P(a.categories,o=>(t(),V(s(_),null,{default:l(()=>[n("li",b,[n("a",{href:e.route("category",o.slug),class:"font-bold text-sm whitespace-nowrap"},B(s(p)(o.title)),9,k)])]),_:2},1024))),256))]),_:1},16)]))}};export{D as default};
