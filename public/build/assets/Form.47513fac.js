import{q as p,i as r,j as n,y as o,C as a,o as V}from"./vendor.2c8aab53.js";import"./__commonjsHelpers__.4516dc8a.js";const v={class:"flex flex-col"},f={class:"grid grid-cols-1 md:grid-cols-2 gap-4"},x={class:"grid gap-4"},b={class:"block"},g={class:"block"},_={class:"block"},B={__name:"Form",props:["item","statuses"],setup(t){const c=p({statuses:Object.entries(t.statuses).map(([m,e])=>({key:m,value:e}))});return(m,e)=>{const s=a("label-component"),i=a("select-component"),d=a("input-component"),u=a("textarea-component");return V(),r("form",v,[n("div",f,[n("div",x,[n("div",b,[o(s,{value:"\u0421\u0442\u0430\u0442\u0443\u0441"}),o(i,{modelValue:t.item.status,"onUpdate:modelValue":e[0]||(e[0]=l=>t.item.status=l),options:c.value.statuses},null,8,["modelValue","options"])]),n("div",g,[o(s,{value:"\u0406\u043C\u02BC\u044F"}),o(d,{modelValue:t.item.name,"onUpdate:modelValue":e[1]||(e[1]=l=>t.item.name=l),type:"text"},null,8,["modelValue"])]),n("div",_,[o(s,{value:"\u0422\u0435\u043B\u0435\u0444\u043E\u043D"}),o(d,{modelValue:t.item.phone,"onUpdate:modelValue":e[2]||(e[2]=l=>t.item.phone=l),type:"tel"},null,8,["modelValue"])])]),n("div",null,[o(s,{value:"\u041A\u043E\u043C\u0435\u043D\u0442\u0430\u0440"}),o(u,{modelValue:t.item.comment,"onUpdate:modelValue":e[3]||(e[3]=l=>t.item.comment=l),rows:"8"},null,8,["modelValue"])])])])}}};export{B as default};
