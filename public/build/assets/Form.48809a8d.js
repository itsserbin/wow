import{w as f,y as w,z as o,M as l,B as y,Q as m,G as i,U as p,K as u,F as s}from"./moment.791e2419.js";const x={class:"grid gap-4"},U={class:"block"},B={class:"grid gap-4"},q={class:"block"},C={class:"block"},_={__name:"Form",props:["item"],setup(e){const V=p("$publishedStatuses"),g=p("$defaultLang"),a=f({activeLang:g});function b(c){a.value.activeLang=c}return(c,t)=>{const d=u("label-component"),k=u("select-component"),L=u("lang-tabs"),r=u("input-component"),v=u("textarea-component");return s(),w("form",x,[o("div",U,[l(d,{value:"\u0421\u0442\u0430\u0442\u0443\u0441 \u043F\u0443\u0431\u043B\u0456\u043A\u0430\u0446\u0456\u0457"}),l(k,{modelValue:e.item.published,"onUpdate:modelValue":t[0]||(t[0]=n=>e.item.published=n),options:y(V)},null,8,["modelValue","options"])]),o("div",null,[l(L,{onClickLang:b}),o("div",B,[o("div",q,[l(d,{value:"\u041F\u0438\u0442\u0430\u043D\u043D\u044F"}),a.value.activeLang==="ru"?(s(),m(r,{key:0,modelValue:e.item.question.ru,"onUpdate:modelValue":t[1]||(t[1]=n=>e.item.question.ru=n),type:"text"},null,8,["modelValue"])):i("",!0),a.value.activeLang==="ua"?(s(),m(r,{key:1,modelValue:e.item.question.ua,"onUpdate:modelValue":t[2]||(t[2]=n=>e.item.question.ua=n),type:"text"},null,8,["modelValue"])):i("",!0)]),o("div",C,[l(d,{value:"\u0412\u0456\u0434\u043F\u043E\u0432\u0456\u0434\u044C"}),a.value.activeLang==="ru"?(s(),m(v,{key:0,modelValue:e.item.answer.ru,"onUpdate:modelValue":t[3]||(t[3]=n=>e.item.answer.ru=n),rows:"4"},null,8,["modelValue"])):i("",!0),a.value.activeLang==="ua"?(s(),m(v,{key:1,modelValue:e.item.answer.ua,"onUpdate:modelValue":t[4]||(t[4]=n=>e.item.answer.ua=n),rows:"4"},null,8,["modelValue"])):i("",!0)])])])])}}};export{_ as default};
