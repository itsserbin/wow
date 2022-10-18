import{A as x,L as f,M as i,K as u,P as U,V as o,$ as m,ab as p,X as v,R as n,x as r}from"./moment.e1708d83.js";const $={class:"grid grid-cols-3 mb-5 gap-4"},B={class:"block col-span-2"},M={class:"block"},A={class:"grid grid-cols-1 dark:bg-gray-800 rounded"},C={class:"block mb-5"},E={class:"block mb-5"},N={class:"block mb-5"},S={class:"block mb-5"},T={class:"block mb-5"},w={__name:"Form",props:["item"],setup(t){const g=r("$defaultLang"),b=r("$publishedStatuses"),a=x({activeLang:g});function k(c){a.value.activeLang=c}return(c,e)=>{const d=v("label-component"),s=v("input-component"),y=v("select-component"),L=v("lang-tabs"),V=v("textarea-component");return n(),f("form",{onSubmit:e[12]||(e[12]=p(l=>c.$emit("submit",t.item),["prevent"])),class:"flex flex-col"},[i("div",$,[i("div",B,[u(d,{value:"\u0427\u041F\u0423"}),u(s,{modelValue:t.item.slug,"onUpdate:modelValue":e[0]||(e[0]=l=>t.item.slug=l),type:"text"},null,8,["modelValue"])]),i("div",M,[u(d,{value:"\u0421\u0442\u0430\u0442\u0443\u0441 \u043F\u0443\u0431\u043B\u0456\u043A\u0430\u0446\u0456\u0457"}),u(y,{modelValue:t.item.published,"onUpdate:modelValue":e[1]||(e[1]=l=>t.item.published=l),options:U(b)},null,8,["modelValue","options"])])]),u(L,{onClickLang:k,class:"mb-5"}),i("div",A,[i("div",C,[u(d,{value:"\u041D\u0430\u0437\u0432\u0430 \u0432 \u043C\u0435\u043D\u044E"}),a.value.activeLang==="ru"?(n(),o(s,{key:0,modelValue:t.item.heading.ru,"onUpdate:modelValue":e[2]||(e[2]=l=>t.item.heading.ru=l),type:"text"},null,8,["modelValue"])):m("",!0),a.value.activeLang==="ua"?(n(),o(s,{key:1,modelValue:t.item.heading.ua,"onUpdate:modelValue":e[3]||(e[3]=l=>t.item.heading.ua=l),type:"text"},null,8,["modelValue"])):m("",!0)]),i("div",E,[u(d,{value:"\u0417\u0430\u0433\u043E\u043B\u043E\u0432\u043E\u043A \u043D\u0430 \u0441\u0442\u043E\u0440\u0456\u043D\u0446\u0456"}),a.value.activeLang==="ru"?(n(),o(s,{key:0,modelValue:t.item.h1.ru,"onUpdate:modelValue":e[4]||(e[4]=l=>t.item.h1.ru=l),type:"text"},null,8,["modelValue"])):m("",!0),a.value.activeLang==="ua"?(n(),o(s,{key:1,modelValue:t.item.h1.ua,"onUpdate:modelValue":e[5]||(e[5]=l=>t.item.h1.ua=l),type:"text"},null,8,["modelValue"])):m("",!0)]),i("div",N,[u(d,{value:"META Title"}),a.value.activeLang==="ru"?(n(),o(s,{key:0,modelValue:t.item.meta_title.ru,"onUpdate:modelValue":e[6]||(e[6]=l=>t.item.meta_title.ru=l),type:"text"},null,8,["modelValue"])):m("",!0),a.value.activeLang==="ua"?(n(),o(s,{key:1,modelValue:t.item.meta_title.ua,"onUpdate:modelValue":e[7]||(e[7]=l=>t.item.meta_title.ua=l),type:"text"},null,8,["modelValue"])):m("",!0)]),i("div",S,[u(d,{value:"META Description"}),a.value.activeLang==="ru"?(n(),o(V,{key:0,modelValue:t.item.meta_description.ru,"onUpdate:modelValue":e[8]||(e[8]=l=>t.item.meta_description.ru=l)},null,8,["modelValue"])):m("",!0),a.value.activeLang==="ua"?(n(),o(V,{key:1,modelValue:t.item.meta_description.ua,"onUpdate:modelValue":e[9]||(e[9]=l=>t.item.meta_description.ua=l)},null,8,["modelValue"])):m("",!0)]),i("div",T,[u(d,{value:"\u0422\u0435\u043A\u0441\u0442"}),a.value.activeLang==="ru"?(n(),o(V,{key:0,modelValue:t.item.content.ru,"onUpdate:modelValue":e[10]||(e[10]=l=>t.item.content.ru=l)},null,8,["modelValue"])):m("",!0),a.value.activeLang==="ua"?(n(),o(V,{key:1,modelValue:t.item.content.ua,"onUpdate:modelValue":e[11]||(e[11]=l=>t.item.content.ua=l)},null,8,["modelValue"])):m("",!0)])])],32)}}};export{w as default};
