import{y as p,C as b,L as a,M as u,K as o,_ as r,V as m,S as d}from"./___vite-browser-external_commonjs-proxy.f18235ae.js";const k={class:"flex flex-col"},f={class:"grid grid-cols-1 gap-4"},y={class:"block"},x={class:"block"},_={key:0,class:"block"},U={key:1,class:"block"},B={__name:"Form",props:["item","statuses"],setup(e){const v=e,i=p({statuses:[]});return b(()=>{for(const[c,t]of Object.entries(v.statuses))i.value.statuses.push({key:c,value:t})}),(c,t)=>{const s=m("label-component"),n=m("input-component"),V=m("select-component");return d(),a("form",k,[u("div",f,[u("div",y,[o(s,{value:"\u041D\u043E\u043C\u0435\u0440 \u0437\u0430\u043C\u043E\u0432\u043B\u0435\u043D\u043D\u044F"}),o(n,{modelValue:e.item.order_id,"onUpdate:modelValue":t[0]||(t[0]=l=>e.item.order_id=l),type:"number"},null,8,["modelValue"])]),u("div",x,[o(s,{value:"\u0421\u0443\u043C\u0430"}),o(n,{modelValue:e.item.sum,"onUpdate:modelValue":t[1]||(t[1]=l=>e.item.sum=l),type:"number"},null,8,["modelValue"])]),e.item.status==="paid"?(d(),a("div",_,[o(s,{value:"\u0421\u0442\u0430\u0442\u0443\u0441"}),o(V,{modelValue:e.item.status,"onUpdate:modelValue":t[2]||(t[2]=l=>e.item.status=l),options:i.value.statuses,disabled:""},null,8,["modelValue","options"])])):r("",!0),e.item.invoice_url?(d(),a("div",U,[o(s,{value:"\u041F\u043E\u0441\u0438\u043B\u0430\u043D\u043D\u044F \u043D\u0430 \u043E\u043F\u043B\u0430\u0442\u0443"}),o(n,{modelValue:e.item.invoice_url,"onUpdate:modelValue":t[3]||(t[3]=l=>e.item.invoice_url=l),type:"text",disabled:""},null,8,["modelValue"])])):r("",!0)])])}}};export{B as default};