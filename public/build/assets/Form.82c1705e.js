import{q as f,i as x,j as a,y as l,u as y,p as m,k as i,x as v,C as u,o as s}from"./vendor.2c8aab53.js";import"./__commonjsHelpers__.4516dc8a.js";const w={class:"grid gap-4"},q={class:"block"},U={class:"grid gap-4"},B={class:"block"},C={class:"block"},j={__name:"Form",props:["item"],setup(e){const V=v("$publishedStatuses"),g=v("$defaultLang"),o=f({activeLang:g});function k(c){o.value.activeLang=c}return(c,t)=>{const d=u("label-component"),b=u("select-component"),L=u("lang-tabs"),r=u("input-component"),p=u("textarea-component");return s(),x("form",w,[a("div",q,[l(d,{value:"\u0421\u0442\u0430\u0442\u0443\u0441 \u043F\u0443\u0431\u043B\u0456\u043A\u0430\u0446\u0456\u0457"}),l(b,{modelValue:e.item.published,"onUpdate:modelValue":t[0]||(t[0]=n=>e.item.published=n),options:y(V)},null,8,["modelValue","options"])]),a("div",null,[l(L,{onClickLang:k}),a("div",U,[a("div",B,[l(d,{value:"\u041F\u0438\u0442\u0430\u043D\u043D\u044F"}),o.value.activeLang==="ru"?(s(),m(r,{key:0,modelValue:e.item.question.ru,"onUpdate:modelValue":t[1]||(t[1]=n=>e.item.question.ru=n),type:"text"},null,8,["modelValue"])):i("",!0),o.value.activeLang==="ua"?(s(),m(r,{key:1,modelValue:e.item.question.ua,"onUpdate:modelValue":t[2]||(t[2]=n=>e.item.question.ua=n),type:"text"},null,8,["modelValue"])):i("",!0)]),a("div",C,[l(d,{value:"\u0412\u0456\u0434\u043F\u043E\u0432\u0456\u0434\u044C"}),o.value.activeLang==="ru"?(s(),m(p,{key:0,modelValue:e.item.answer.ru,"onUpdate:modelValue":t[3]||(t[3]=n=>e.item.answer.ru=n),rows:"4"},null,8,["modelValue"])):i("",!0),o.value.activeLang==="ua"?(s(),m(p,{key:1,modelValue:e.item.answer.ua,"onUpdate:modelValue":t[4]||(t[4]=n=>e.item.answer.ua=n),rows:"4"},null,8,["modelValue"])):i("",!0)])])])])}}};export{j as default};