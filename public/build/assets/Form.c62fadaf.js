import{y as V,G as v,L as f,M as a,K as o,P as x,Y as m,S as k,D as h}from"./moment.325cf309.js";const U={class:"flex flex-col"},y={class:"block mb-5"},_={class:"block mb-5"},B={class:"block mb-5"},S={class:"block mb-5"},g={class:"block mb-5"},N={__name:"Form",props:["item"],setup(e){const d=h("$publishedStatuses"),u=V([]);v(()=>{axios.get(route("api.products.list")).then(({data:n})=>u.value=n.result).catch(n=>console.log(n))});function i({h1:n}){return n.ua?n.ua:n.ru}return(n,t)=>{const s=m("label-component"),p=m("select-component"),r=m("multiselect"),c=m("input-component"),b=m("textarea-component");return k(),f("form",U,[a("div",y,[o(s,{value:"\u0421\u0442\u0430\u0442\u0443\u0441 \u043F\u0443\u0431\u043B\u0456\u043A\u0430\u0446\u0456\u0457"}),o(p,{modelValue:e.item.published,"onUpdate:modelValue":t[0]||(t[0]=l=>e.item.published=l),options:x(d)},null,8,["modelValue","options"])]),a("div",_,[o(s,{value:"\u0422\u043E\u0432\u0430\u0440"}),o(r,{options:u.value,modelValue:e.item.product,"onUpdate:modelValue":t[1]||(t[1]=l=>e.item.product=l),"custom-label":i,placeholder:"\u041E\u0431\u0435\u0440\u0456\u0442\u044C \u0442\u043E\u0432\u0430\u0440","track-by":"id","close-on-select":!0,searchable:!0},null,8,["options","modelValue"])]),a("div",B,[o(s,{value:"\u0406\u043C\u02BC\u044F"}),o(c,{modelValue:e.item.name,"onUpdate:modelValue":t[2]||(t[2]=l=>e.item.name=l),type:"text"},null,8,["modelValue"])]),a("div",S,[o(s,{value:"\u0422\u0435\u043B\u0435\u0444\u043E\u043D"}),o(c,{modelValue:e.item.phone,"onUpdate:modelValue":t[3]||(t[3]=l=>e.item.phone=l),type:"text"},null,8,["modelValue"])]),a("div",g,[o(s,{value:"\u0422\u0435\u043A\u0441\u0442 \u0432\u0456\u0434\u0433\u0443\u043A\u0430"}),o(b,{modelValue:e.item.comment,"onUpdate:modelValue":t[4]||(t[4]=l=>e.item.comment=l),rows:"4"},null,8,["modelValue"])])])}}};export{N as default};