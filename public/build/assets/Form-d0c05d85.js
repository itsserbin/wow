import{g as p,m as r,p as n,E as o,K as a,y as V}from"./index-bc3c132c.js";const v={class:"flex flex-col"},f={class:"grid grid-cols-1 md:grid-cols-2 gap-4"},g={class:"grid gap-4"},x={class:"block"},b={class:"block"},_={class:"block"},y={__name:"Form",props:["item","statuses"],setup(t){const c=p({statuses:Object.entries(t.statuses).map(([m,e])=>({key:m,value:e}))});return(m,e)=>{const s=a("label-component"),u=a("select-component"),d=a("input-component"),i=a("textarea-component");return V(),r("form",v,[n("div",f,[n("div",g,[n("div",x,[o(s,{value:"Статус"}),o(u,{modelValue:t.item.status,"onUpdate:modelValue":e[0]||(e[0]=l=>t.item.status=l),options:c.value.statuses},null,8,["modelValue","options"])]),n("div",b,[o(s,{value:"Імʼя"}),o(d,{modelValue:t.item.name,"onUpdate:modelValue":e[1]||(e[1]=l=>t.item.name=l),type:"text"},null,8,["modelValue"])]),n("div",_,[o(s,{value:"Телефон"}),o(d,{modelValue:t.item.phone,"onUpdate:modelValue":e[2]||(e[2]=l=>t.item.phone=l),type:"tel"},null,8,["modelValue"])])]),n("div",null,[o(s,{value:"Коментар"}),o(i,{modelValue:t.item.comment,"onUpdate:modelValue":e[3]||(e[3]=l=>t.item.comment=l),rows:"8"},null,8,["modelValue"])])])])}}};export{y as default};
