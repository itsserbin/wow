import{_ as a}from"./Label-646a10b8.js";import{_ as m}from"./Input-335d7e3d.js";import{_ as u}from"./Select-ffba6ec3.js";import{_ as r}from"./Textarea-8cacefaf.js";import{r as c,o as f,p as v,q as V,v as s,l}from"./app-6d1ec759.js";const k={class:"flex flex-col"},p={class:"grid grid-cols-1 md:grid-cols-2 gap-4"},g={class:"grid gap-4"},b={class:"block"},x={class:"block"},y={class:"block"},U={class:"block"},j={__name:"Form",props:["item","statuses"],setup(t){const n=t,d=c({statuses:[]});return f(()=>{for(const[i,e]of Object.entries(n.statuses))d.value.statuses.push({key:i,value:e})}),(i,e)=>(v(),V("form",k,[s("div",p,[s("div",g,[s("div",b,[l(a,{value:"Статус"}),l(u,{modelValue:t.item.status,"onUpdate:modelValue":e[0]||(e[0]=o=>t.item.status=o),options:d.value.statuses},null,8,["modelValue","options"])]),s("div",x,[l(a,{value:"Імʼя"}),l(m,{modelValue:t.item.name,"onUpdate:modelValue":e[1]||(e[1]=o=>t.item.name=o),type:"text"},null,8,["modelValue"])]),s("div",y,[l(a,{value:"Телефон"}),l(m,{modelValue:t.item.phone,"onUpdate:modelValue":e[2]||(e[2]=o=>t.item.phone=o),type:"tel"},null,8,["modelValue"])]),s("div",U,[l(a,{value:"Номер замовлення"}),l(m,{modelValue:t.item.order_id,"onUpdate:modelValue":e[3]||(e[3]=o=>t.item.order_id=o),type:"tel"},null,8,["modelValue"])])]),s("div",null,[l(a,{value:"Коментар"}),l(r,{modelValue:t.item.comment,"onUpdate:modelValue":e[4]||(e[4]=o=>t.item.comment=o),rows:"14"},null,8,["modelValue"])])])]))}};export{j as default};
