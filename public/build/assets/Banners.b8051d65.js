import"./create-element-if-not-defined.26147364.js";import{P as h}from"./pagination.44308c03.js";import{A as B}from"./autoplay.88899761.js";import{S,a as y}from"./swiper-slide.7de65c6d.js";import{m as c,p as n,G as j,C as g,a5 as P,u as m,s as V,E as x,z as r,F as C,D as L,B as N,q as u}from"./index.1726d409.js";const A={key:0,class:"banners mb-5"},E=["href"],F=["src","srcset","alt"],I={__name:"Banners",props:["lang","data"],setup(i){const o=i,s=x("$defaultLang"),d=c(()=>e=>{const l=e.image_mobile[o.lang]||e.image_mobile[s],t=e.image_table[o.lang]||e.image_table[s],a=e.image_desktop[o.lang]||e.image_desktop[s];return l?route("images.banners.mobile",l+".jpeg"):t?route("images.banners.table",t+".jpeg"):a?route("images.banners.desktop",a+".jpeg"):null}),p=c(()=>e=>{const l=e.image_mobile[o.lang]||e.image_mobile[s],t=e.image_table[o.lang]||e.image_table[s],a=e.image_desktop[o.lang]||e.image_desktop[s],k=l?route("images.banners.mobile",l+".webp")+" 568w,":route("images.banners.mobile",e.image_mobile[s]+".webp")+" 568w,",w=t?route("images.banners.table",t+".webp")+" 991w,":route("images.banners.table",e.image_table[s]+".webp")+" 991w,",f=a?route("images.banners.desktop",a+".webp"):route("images.banners.desktop",e.image_desktop[s]+".webp");return k+w+f}),b=[B,h],_={slidesPerView:1,spaceBetween:0,pagination:{dynamicBullets:!0,clickable:!0},loop:!0,autoplay:{delay:5e3,disableOnInteraction:!1}};return(e,l)=>i.data.length?(r(),n("section",A,[j(m(y),P({modules:b},_,{class:"main-banners-slider"}),{default:g(()=>[(r(!0),n(C,null,L(i.data,(t,a)=>(r(),N(m(S),{key:a,class:"shadow-sm"},{default:g(()=>[u("a",{href:t.link?t.link[i.lang]:"javascript:"},[u("img",{src:m(d)(t),srcset:m(p)(t),alt:t.title[i.lang],class:"w-full"},null,8,F)],8,E)]),_:2},1024))),128))]),_:1},16)])):V("",!0)}};export{I as default};
