import{_ as r}from"./LangTabs-9cff8ebb.js";import{_ as n}from"./Label-20131f4c.js";import{_ as f}from"./Input-39294dfa.js";import{_ as v}from"./Select-c098c0c0.js";import{_ as g}from"./Textarea-cb91500a.js";import{N as m,k as _,l as p,m as V,p as o,n as e,x as L}from"./index-a01126e2.js";const b={class:"grid gap-4"},k={class:"block"},$={class:"grid gap-4"},h={class:"block"},x={class:"block"},j={__name:"Form",props:["item"],setup(a){const u=m("$publishedStatuses"),d=m("$defaultLang"),s=_({activeLang:d});function c(i){s.value.activeLang=i}return(i,t)=>(p(),V("form",b,[o("div",k,[e(n,{value:"Статус публікації"}),e(v,{modelValue:a.item.published,"onUpdate:modelValue":t[0]||(t[0]=l=>a.item.published=l),options:L(u)},null,8,["modelValue","options"])]),o("div",null,[e(r,{onClickLang:c}),o("div",$,[o("div",h,[e(n,{value:"Питання"}),e(f,{modelValue:a.item.question[s.value.activeLang],"onUpdate:modelValue":t[1]||(t[1]=l=>a.item.question[s.value.activeLang]=l),type:"text"},null,8,["modelValue"])]),o("div",x,[e(n,{value:"Відповідь"}),e(g,{modelValue:a.item.answer[s.value.activeLang],"onUpdate:modelValue":t[2]||(t[2]=l=>a.item.answer[s.value.activeLang]=l),rows:"4"},null,8,["modelValue"])])])])]))}};export{j as default};