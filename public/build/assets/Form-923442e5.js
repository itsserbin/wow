import{_ as d}from"./Select-c098c0c0.js";import{_ as a}from"./Label-20131f4c.js";import{_ as i}from"./Input-39294dfa.js";import{_ as u}from"./Textarea-cb91500a.js";import{k as r,l as c,m as f,p as o,n as s}from"./index-a01126e2.js";const V={class:"flex flex-col"},p={class:"grid grid-cols-1 md:grid-cols-2 gap-4"},v={class:"grid gap-4"},g={class:"block"},k={class:"block"},_={class:"block"},N={__name:"Form",props:["item","statuses"],setup(t){const n=r({statuses:Object.entries(t.statuses).map(([m,e])=>({key:m,value:e}))});return(m,e)=>(c(),f("form",V,[o("div",p,[o("div",v,[o("div",g,[s(a,{value:"Статус"}),s(d,{modelValue:t.item.status,"onUpdate:modelValue":e[0]||(e[0]=l=>t.item.status=l),options:n.value.statuses},null,8,["modelValue","options"])]),o("div",k,[s(a,{value:"Імʼя"}),s(i,{modelValue:t.item.name,"onUpdate:modelValue":e[1]||(e[1]=l=>t.item.name=l),type:"text"},null,8,["modelValue"])]),o("div",_,[s(a,{value:"Телефон"}),s(i,{modelValue:t.item.phone,"onUpdate:modelValue":e[2]||(e[2]=l=>t.item.phone=l),type:"tel"},null,8,["modelValue"])])]),o("div",null,[s(a,{value:"Коментар"}),s(u,{modelValue:t.item.comment,"onUpdate:modelValue":e[3]||(e[3]=l=>t.item.comment=l),rows:"8"},null,8,["modelValue"])])])]))}};export{N as default};