import{j as d,q as c,s as l,H as t,N as m,A as u}from"./index.e4375aa7.js";const i={class:"flex flex-col"},r={class:"grid grid-cols-1 gap-4"},p={class:"block"},_={class:"block"},b={__name:"Form",props:["item","statuses"],setup(e){return d({statuses:[]}),(V,o)=>{const n=m("label-component"),a=m("input-component");return u(),c("form",i,[l("div",r,[l("div",p,[t(n,{value:"\u041D\u043E\u043C\u0435\u0440 \u0437\u0430\u043C\u043E\u0432\u043B\u0435\u043D\u043D\u044F"}),t(a,{modelValue:e.item.order_id,"onUpdate:modelValue":o[0]||(o[0]=s=>e.item.order_id=s),type:"number"},null,8,["modelValue"])]),l("div",_,[t(n,{value:"\u0421\u0443\u043C\u0430"}),t(a,{modelValue:e.item.sum,"onUpdate:modelValue":o[1]||(o[1]=s=>e.item.sum=s),type:"number"},null,8,["modelValue"])])])])}}};export{b as default};