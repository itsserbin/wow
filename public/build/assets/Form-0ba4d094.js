import{g as k,m as _,p as a,E as n,u as L,A as d,q as p,D as r,K as l,y as m}from"./index-bc3c132c.js";const y={class:"grid gap-4"},B={class:"grid grid-cols-1 md:grid-cols-2 gap-4"},U={class:"block"},h={class:"block"},C={class:"block"},S={__name:"Form",props:["item"],setup(e){const g=r("$publishedStatuses"),v=r("$defaultLang"),s=k({activeLang:v});function V(c){s.value.activeLang=c}return(c,t)=>{const u=l("label-component"),b=l("select-component"),x=l("textarea-component"),f=l("lang-tabs"),i=l("input-component");return m(),_("form",y,[a("div",B,[a("div",U,[n(u,{value:"Статус публікації"}),n(b,{modelValue:e.item.published,"onUpdate:modelValue":t[0]||(t[0]=o=>e.item.published=o),options:L(g)},null,8,["modelValue","options"])]),a("div",h,[n(u,{value:"Зображення (SVG)"}),n(x,{modelValue:e.item.icon,"onUpdate:modelValue":t[1]||(t[1]=o=>e.item.icon=o)},null,8,["modelValue"])])]),a("div",null,[n(f,{onClickLang:V}),a("div",C,[n(u,{value:"Текст"}),s.value.activeLang==="ru"?(m(),d(i,{key:0,modelValue:e.item.text.ru,"onUpdate:modelValue":t[2]||(t[2]=o=>e.item.text.ru=o),type:"text"},null,8,["modelValue"])):p("",!0),s.value.activeLang==="ua"?(m(),d(i,{key:1,modelValue:e.item.text.ua,"onUpdate:modelValue":t[3]||(t[3]=o=>e.item.text.ua=o),type:"text"},null,8,["modelValue"])):p("",!0)])])])}}};export{S as default};
