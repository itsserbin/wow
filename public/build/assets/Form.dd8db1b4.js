import{y as k,L,M as a,K as n,P as _,a0 as d,Z as p,$ as l,S as c,D as r}from"./___vite-browser-external_commonjs-proxy.bd54111c.js";const y={class:"grid gap-4"},B={class:"grid grid-cols-1 md:grid-cols-2 gap-4"},S={class:"block"},U={class:"block"},h={class:"block"},N={__name:"Form",props:["item"],setup(e){const g=r("$publishedStatuses"),v=r("$defaultLang"),s=k({activeLang:v});function V(m){s.value.activeLang=m}return(m,t)=>{const u=l("label-component"),b=l("select-component"),x=l("textarea-component"),f=l("lang-tabs"),i=l("input-component");return c(),L("form",y,[a("div",B,[a("div",S,[n(u,{value:"\u0421\u0442\u0430\u0442\u0443\u0441 \u043F\u0443\u0431\u043B\u0456\u043A\u0430\u0446\u0456\u0457"}),n(b,{modelValue:e.item.published,"onUpdate:modelValue":t[0]||(t[0]=o=>e.item.published=o),options:_(g)},null,8,["modelValue","options"])]),a("div",U,[n(u,{value:"\u0417\u043E\u0431\u0440\u0430\u0436\u0435\u043D\u043D\u044F (SVG)"}),n(x,{modelValue:e.item.icon,"onUpdate:modelValue":t[1]||(t[1]=o=>e.item.icon=o)},null,8,["modelValue"])])]),a("div",null,[n(f,{onClickLang:V}),a("div",h,[n(u,{value:"\u0422\u0435\u043A\u0441\u0442"}),s.value.activeLang==="ru"?(c(),d(i,{key:0,modelValue:e.item.text.ru,"onUpdate:modelValue":t[2]||(t[2]=o=>e.item.text.ru=o),type:"text"},null,8,["modelValue"])):p("",!0),s.value.activeLang==="ua"?(c(),d(i,{key:1,modelValue:e.item.text.ua,"onUpdate:modelValue":t[3]||(t[3]=o=>e.item.text.ua=o),type:"text"},null,8,["modelValue"])):p("",!0)])])])}}};export{N as default};