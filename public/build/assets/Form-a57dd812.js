import{g as f,m as y,p as o,E as l,u as w,A as m,q as i,D as v,K as u,y as s}from"./index-bc3c132c.js";const x={class:"grid gap-4"},q={class:"block"},U={class:"grid gap-4"},B={class:"block"},C={class:"block"},_={__name:"Form",props:["item"],setup(e){const g=v("$publishedStatuses"),V=v("$defaultLang"),a=f({activeLang:V});function b(c){a.value.activeLang=c}return(c,t)=>{const d=u("label-component"),k=u("select-component"),L=u("lang-tabs"),r=u("input-component"),p=u("textarea-component");return s(),y("form",x,[o("div",q,[l(d,{value:"Статус публікації"}),l(k,{modelValue:e.item.published,"onUpdate:modelValue":t[0]||(t[0]=n=>e.item.published=n),options:w(g)},null,8,["modelValue","options"])]),o("div",null,[l(L,{onClickLang:b}),o("div",U,[o("div",B,[l(d,{value:"Питання"}),a.value.activeLang==="ru"?(s(),m(r,{key:0,modelValue:e.item.question.ru,"onUpdate:modelValue":t[1]||(t[1]=n=>e.item.question.ru=n),type:"text"},null,8,["modelValue"])):i("",!0),a.value.activeLang==="ua"?(s(),m(r,{key:1,modelValue:e.item.question.ua,"onUpdate:modelValue":t[2]||(t[2]=n=>e.item.question.ua=n),type:"text"},null,8,["modelValue"])):i("",!0)]),o("div",C,[l(d,{value:"Відповідь"}),a.value.activeLang==="ru"?(s(),m(p,{key:0,modelValue:e.item.answer.ru,"onUpdate:modelValue":t[3]||(t[3]=n=>e.item.answer.ru=n),rows:"4"},null,8,["modelValue"])):i("",!0),a.value.activeLang==="ua"?(s(),m(p,{key:1,modelValue:e.item.answer.ua,"onUpdate:modelValue":t[4]||(t[4]=n=>e.item.answer.ua=n),rows:"4"},null,8,["modelValue"])):i("",!0)])])])])}}};export{_ as default};
