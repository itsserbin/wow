import l from"./Header.80ddd88d.js";import c from"./Footer.d755c37c.js";import g from"./FixedBanner.2140537c.js";import{z as r,p as f,q as a,G as t,A as m,F as d,aa as p,i as u}from"./index.1726d409.js";const x={class:"w-[100%] fixed top-0 z-20 bg-[#fff] flex-[0_0_auto]"},_={class:"main flex-[1_0_auto]"},w={class:"max-w-7xl mx-auto pt-36 md:pt-40 px-3 h-full"},b={__name:"MasterLayout",props:["lang","categories","options","pages","eventIdPageView"],setup(e){const n=e,{appContext:o}=p(),{$fbq:s}=o.config.globalProperties;return window.onload=function(){s("PageView",{},{event_id:n.eventIdPageView})},(i,h)=>(r(),f(d,null,[a("header",x,[t(g,{lang:e.lang},null,8,["lang"]),t(l,{options:e.options,categories:e.categories,lang:e.lang},null,8,["options","categories","lang"])]),a("main",_,[a("div",w,[m(i.$slots,"default")])]),t(c,{options:e.options,lang:e.lang,pages:e.pages},null,8,["options","lang","pages"])],64))}},B=u(!0);export{b as _,B as i};