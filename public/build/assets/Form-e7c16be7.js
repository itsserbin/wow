import{_ as a}from"./Label-646a10b8.js";import{_ as m}from"./Input-335d7e3d.js";import{r as d,p as r,q as i,v as l,l as o}from"./app-6d1ec759.js";const u={class:"flex flex-col"},n={class:"grid grid-cols-1 gap-4"},c={class:"block"},_={class:"block"},b={__name:"Form",props:["item","statuses"],setup(e){return d({statuses:[]}),(f,s)=>(r(),i("form",u,[l("div",n,[l("div",c,[o(a,{value:"Номер замовлення"}),o(m,{modelValue:e.item.order_id,"onUpdate:modelValue":s[0]||(s[0]=t=>e.item.order_id=t),type:"number"},null,8,["modelValue"])]),l("div",_,[o(a,{value:"Сума"}),o(m,{modelValue:e.item.sum,"onUpdate:modelValue":s[1]||(s[1]=t=>e.item.sum=t),type:"number"},null,8,["modelValue"])])])]))}};export{b as default};
