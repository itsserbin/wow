import"./create-element-if-not-defined-cfc4b805.js";import{P as h}from"./pagination-93e47b88.js";import{A as y}from"./autoplay-1fa09654.js";import{S as B,a as S}from"./swiper-slide-139c3e9b.js";import{f as n,g,z as j,v as r,a0 as x,u as m,j as P,y as V,p as c,F as L,x as N,s as v,i as d}from"./app-e1821dfb.js";const A={key:0,class:"banners mb-5"},C=["href"],F=["src","srcset","alt"],q={__name:"Banners",props:["lang","data"],setup(i){const l=i,a=V("$defaultLang"),p=n(()=>e=>{const o=e.image_mobile[l.lang]||e.image_mobile[a],s=e.image_table[l.lang]||e.image_table[a],t=e.image_desktop[l.lang]||e.image_desktop[a];return o?"/images/banners/mobile/"+o+".jpeg":s?"/images/banners/table/"+s+".jpeg":t?"/images/banners/desktop/"+t+".jpeg":null}),u=n(()=>e=>{const o=e.image_mobile[l.lang]||e.image_mobile[a],s=e.image_table[l.lang]||e.image_table[a],t=e.image_desktop[l.lang]||e.image_desktop[a],k=o?"/images/banners/mobile/"+o+".webp 568w":"/images/banners/mobile/"+e.image_mobile[a]+".webp 568w ",w=s?"/images/banners/table/"+s+".webp 568w":"/images/banners/table/"+e.image_table[a]+".webp 991w ",f=t?"/images/banners/desktop/"+t+".webp 568w":"/images/banners/desktop/"+e.image_desktop[a]+".webp";return k+w+f}),b=[y,h],_={slidesPerView:1,spaceBetween:0,pagination:{dynamicBullets:!0,clickable:!0},loop:!0,autoplay:{delay:5e3,disableOnInteraction:!1}};return(e,o)=>i.data.length?(c(),g("section",A,[j(m(S),x({modules:b},_,{class:"main-banners-slider"}),{default:r(()=>[(c(!0),g(L,null,N(i.data,(s,t)=>(c(),v(m(B),{key:t,class:"shadow-sm"},{default:r(()=>[d("a",{href:s.link?s.link[i.lang]:"javascript:"},[d("img",{src:m(p)(s),srcset:m(u)(s),alt:s.title[i.lang],class:"w-full"},null,8,F)],8,C)]),_:2},1024))),128))]),_:1},16)])):P("",!0)}};export{q as default};
