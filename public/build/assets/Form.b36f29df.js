import{q as d,s as o,H as n,u,G as p,N as l,A as r}from"./index.e4375aa7.js";const _={class:"grid grid-cols-1 mb-5"},b={class:"block mr-2"},V={class:"grid grid-cols-1 mb-5"},v={class:"block mr-2"},g={__name:"Form",props:["item"],setup(e){const a=p("$publishedStatuses");return(f,t)=>{const m=l("label-component"),c=l("select-component"),i=l("input-component");return r(),d("form",null,[o("div",_,[o("div",b,[n(m,{value:"\u0421\u0442\u0430\u0442\u0443\u0441 \u043F\u0443\u0431\u043B\u0456\u043A\u0430\u0446\u0456\u0457"}),n(c,{modelValue:e.item.published,"onUpdate:modelValue":t[0]||(t[0]=s=>e.item.published=s),options:u(a)},null,8,["modelValue","options"])])]),o("div",V,[o("div",v,[n(m,{value:"\u041D\u0430\u0437\u0432\u0430"}),n(i,{modelValue:e.item.title,"onUpdate:modelValue":t[1]||(t[1]=s=>e.item.title=s),type:"text"},null,8,["modelValue"])])])])}}};export{g as default};