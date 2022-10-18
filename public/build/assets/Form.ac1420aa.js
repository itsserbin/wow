import b from"./UploadBannersInput.34abb674.js";import{A,G as N,L as S,M as m,K as s,P as T,V as n,_ as i,X as v,R as u,x as p}from"./moment.fb372146.js";const j={class:"grid gap-4"},E={class:"block"},F={class:"block"},G={class:"block"},K={class:"block"},P={class:"grid grid-cols-2 gap-4"},X={class:"block"},q={class:"block"},w={class:"block"},J={__name:"Form",props:["item"],emits:["onUploadImage"],setup(a,{emit:f}){const d=a,y=p("$publishedStatuses"),V=p("$defaultLang"),o=A({categories:[],activeLang:V});N(()=>{axios.get(route("api.categories.list")).then(({data:t})=>o.value.categories=t.result).catch(t=>console.log(t))});function L({title:t,id:e}){return t&&e?`${o.value.activeLang==="ua"?t.ua:o.value.activeLang==="ru"?t.ru:"-"} -${e}`:`${e}`}function I(t){o.value.activeLang=t}function U(t){g(t,"mobile","ua")}function $(t){g(t,"mobile","ru")}function D(t){g(t,"table","ua")}function x(t){g(t,"table","ru")}function O(t){g(t,"desktop","ua")}function B(t){g(t,"desktop","ru")}function g(t,e,c){f("onUploadImage",t,e,c)}function r(t,e){t==="mobile"&&(e==="ru"&&(d.item.image_mobile.ru=null),e==="ua"&&(d.item.image_mobile.ua=null)),t==="table"&&(e==="ru"&&(d.item.image_table.ru=null),e==="ua"&&(d.item.image_table.ua=null)),t==="desktop"&&(e==="ru"&&(d.item.image_desktop.ru=null),e==="ua"&&(d.item.image_desktop.ua=null))}return(t,e)=>{const c=v("label-component"),C=v("select-component"),M=v("multiselect"),R=v("lang-tabs"),k=v("input-component");return u(),S("form",null,[m("div",j,[m("div",E,[s(c,{value:"\u0421\u0442\u0430\u0442\u0443\u0441 \u043F\u0443\u0431\u043B\u0456\u043A\u0430\u0446\u0456\u0457"}),s(C,{modelValue:a.item.published,"onUpdate:modelValue":e[0]||(e[0]=l=>a.item.published=l),options:T(y)},null,8,["modelValue","options"])]),m("div",F,[s(c,{value:"\u041A\u0430\u0442\u0435\u0433\u043E\u0440\u0456\u0457"}),s(M,{options:o.value.categories,modelValue:a.item.categories,"onUpdate:modelValue":e[1]||(e[1]=l=>a.item.categories=l),"custom-label":L,placeholder:"\u041E\u0431\u0435\u0440\u0456\u0442\u044C \u043A\u0430\u0442\u0435\u0433\u043E\u0440\u0456\u0457","track-by":"id","close-on-select":!0,searchable:!0,multiple:!0},null,8,["options","modelValue"])]),s(R,{onClickLang:I}),m("div",G,[s(c,{value:"\u041D\u0430\u0437\u0432\u0430"}),o.value.activeLang==="ru"?(u(),n(k,{key:0,modelValue:a.item.title.ru,"onUpdate:modelValue":e[2]||(e[2]=l=>a.item.title.ru=l),type:"text"},null,8,["modelValue"])):i("",!0),o.value.activeLang==="ua"?(u(),n(k,{key:1,modelValue:a.item.title.ua,"onUpdate:modelValue":e[3]||(e[3]=l=>a.item.title.ua=l),type:"text"},null,8,["modelValue"])):i("",!0)]),m("div",K,[s(c,{value:"\u041F\u043E\u0441\u0438\u043B\u0430\u043D\u043D\u044F"}),o.value.activeLang==="ru"?(u(),n(k,{key:0,modelValue:a.item.link.ru,"onUpdate:modelValue":e[4]||(e[4]=l=>a.item.link.ru=l),type:"text"},null,8,["modelValue"])):i("",!0),o.value.activeLang==="ua"?(u(),n(k,{key:1,modelValue:a.item.link.ua,"onUpdate:modelValue":e[5]||(e[5]=l=>a.item.link.ua=l),type:"text"},null,8,["modelValue"])):i("",!0)]),m("div",P,[m("div",X,[o.value.activeLang==="ua"?(u(),n(b,{key:0,label:"\u0417\u043E\u0431\u0440\u0430\u0436\u0435\u043D\u043D\u044F \u0434\u043B\u044F \u043C\u043E\u0431\u0456\u043B\u044C\u043D\u0438\u0445",onUpload:U,image:a.item.image_mobile.ua?t.route("images.banners.mobile",{filename:a.item.image_mobile.ua}):null,onOnDestroyImage:e[6]||(e[6]=l=>r("mobile","ua"))},null,8,["image"])):i("",!0),o.value.activeLang==="ru"?(u(),n(b,{key:1,label:"\u0417\u043E\u0431\u0440\u0430\u0436\u0435\u043D\u043D\u044F \u0434\u043B\u044F \u043C\u043E\u0431\u0456\u043B\u044C\u043D\u0438\u0445",onUpload:$,image:a.item.image_mobile.ru,onOnDestroyImage:e[7]||(e[7]=l=>r("mobile","ru"))},null,8,["image"])):i("",!0)]),m("div",q,[o.value.activeLang==="ru"?(u(),n(b,{key:0,onUpload:x,image:a.item.image_table.ru,onOnDestroyImage:e[8]||(e[8]=l=>r("table","ru"))},null,8,["image"])):i("",!0),o.value.activeLang==="ua"?(u(),n(b,{key:1,label:"\u0417\u043E\u0431\u0440\u0430\u0436\u0435\u043D\u043D\u044F \u0434\u043B\u044F \u043F\u043B\u0430\u043D\u0448\u0435\u0442\u0456\u0432",onUpload:D,image:a.item.image_table.ua,onOnDestroyImage:e[9]||(e[9]=l=>r("table","ua"))},null,8,["image"])):i("",!0)])]),m("div",w,[o.value.activeLang==="ru"?(u(),n(b,{key:0,label:"\u0417\u043E\u0431\u0440\u0430\u0436\u0435\u043D\u043D\u044F \u0434\u043B\u044F \u043A\u043E\u043C\u043F\u02BC\u044E\u0442\u0435\u0440\u0456\u0432",onUpload:B,image:a.item.image_desktop.ru,onOnDestroyImage:e[10]||(e[10]=l=>r("desktop","ru"))},null,8,["image"])):i("",!0),o.value.activeLang==="ua"?(u(),n(b,{key:1,label:"\u0417\u043E\u0431\u0440\u0430\u0436\u0435\u043D\u043D\u044F \u0434\u043B\u044F \u043A\u043E\u043C\u043F\u02BC\u044E\u0442\u0435\u0440\u0456\u0432",onUpload:O,image:a.item.image_desktop.ua,onOnDestroyImage:e[11]||(e[11]=l=>r("desktop","ua"))},null,8,["image"])):i("",!0)])])])}}};export{J as default};
