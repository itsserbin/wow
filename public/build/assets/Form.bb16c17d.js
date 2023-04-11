import c from"./UploadBannersInput.64502efd.js";import{p as R,q as x,g as A,i as m,x as s,u as S,m as u,j as i,v as f,B as v,o as n}from"./vendor.693a237b.js";import"./__commonjsHelpers__.488ed5c2.js";const T={class:"grid gap-4"},q={class:"block"},E={class:"block"},F={class:"block"},w={class:"block"},z={class:"grid grid-cols-2 gap-4"},G={class:"block"},H={class:"block"},J={class:"block"},W={__name:"Form",props:["item"],emits:["onUploadImage"],setup(t,{emit:p}){const g=t,y=f("$publishedStatuses"),V=f("$defaultLang"),o=R({categories:[],activeLang:V});x(()=>{axios.get(route("api.categories.list")).then(({data:a})=>o.value.categories=a.result).catch(a=>console.log(a))});function L({title:a,id:e}){return a&&e?`${o.value.activeLang==="ua"?a.ua:o.value.activeLang==="ru"?a.ru:"-"} -${e}`:`${e}`}function I(a){o.value.activeLang=a}function U(a){d(a,"mobile","ua")}function $(a){d(a,"mobile","ru")}function j(a){d(a,"table","ua")}function D(a){d(a,"table","ru")}function O(a){d(a,"desktop","ua")}function B(a){d(a,"desktop","ru")}function d(a,e,b){p("onUploadImage",a,e,b)}function r(a,e){a==="mobile"&&(e==="ru"&&(g.item.image_mobile.ru=null),e==="ua"&&(g.item.image_mobile.ua=null)),a==="table"&&(e==="ru"&&(g.item.image_table.ru=null),e==="ua"&&(g.item.image_table.ua=null)),a==="desktop"&&(e==="ru"&&(g.item.image_desktop.ru=null),e==="ua"&&(g.item.image_desktop.ua=null))}return(a,e)=>{const b=v("label-component"),C=v("select-component"),M=v("multiselect"),N=v("lang-tabs"),k=v("input-component");return n(),A("form",null,[m("div",T,[m("div",q,[s(b,{value:"\u0421\u0442\u0430\u0442\u0443\u0441 \u043F\u0443\u0431\u043B\u0456\u043A\u0430\u0446\u0456\u0457"}),s(C,{modelValue:t.item.published,"onUpdate:modelValue":e[0]||(e[0]=l=>t.item.published=l),options:S(y)},null,8,["modelValue","options"])]),m("div",E,[s(b,{value:"\u041A\u0430\u0442\u0435\u0433\u043E\u0440\u0456\u0457"}),s(M,{options:o.value.categories,modelValue:t.item.categories,"onUpdate:modelValue":e[1]||(e[1]=l=>t.item.categories=l),"custom-label":L,placeholder:"\u041E\u0431\u0435\u0440\u0456\u0442\u044C \u043A\u0430\u0442\u0435\u0433\u043E\u0440\u0456\u0457","track-by":"id","close-on-select":!0,searchable:!0,multiple:!0},null,8,["options","modelValue"])]),s(N,{onClickLang:I}),m("div",F,[s(b,{value:"\u041D\u0430\u0437\u0432\u0430"}),o.value.activeLang==="ru"?(n(),u(k,{key:0,modelValue:t.item.title.ru,"onUpdate:modelValue":e[2]||(e[2]=l=>t.item.title.ru=l),type:"text"},null,8,["modelValue"])):i("",!0),o.value.activeLang==="ua"?(n(),u(k,{key:1,modelValue:t.item.title.ua,"onUpdate:modelValue":e[3]||(e[3]=l=>t.item.title.ua=l),type:"text"},null,8,["modelValue"])):i("",!0)]),m("div",w,[s(b,{value:"\u041F\u043E\u0441\u0438\u043B\u0430\u043D\u043D\u044F"}),o.value.activeLang==="ru"?(n(),u(k,{key:0,modelValue:t.item.link.ru,"onUpdate:modelValue":e[4]||(e[4]=l=>t.item.link.ru=l),type:"text"},null,8,["modelValue"])):i("",!0),o.value.activeLang==="ua"?(n(),u(k,{key:1,modelValue:t.item.link.ua,"onUpdate:modelValue":e[5]||(e[5]=l=>t.item.link.ua=l),type:"text"},null,8,["modelValue"])):i("",!0)]),m("div",z,[m("div",G,[o.value.activeLang==="ua"?(n(),u(c,{key:0,label:"\u0417\u043E\u0431\u0440\u0430\u0436\u0435\u043D\u043D\u044F \u0434\u043B\u044F \u043C\u043E\u0431\u0456\u043B\u044C\u043D\u0438\u0445",onUpload:U,image:t.item.image_mobile.ua?a.route("images.banners.mobile",{filename:t.item.image_mobile.ua+".jpeg"}):null,onOnDestroyImage:e[6]||(e[6]=l=>r("mobile","ua"))},null,8,["image"])):i("",!0),o.value.activeLang==="ru"?(n(),u(c,{key:1,label:"\u0417\u043E\u0431\u0440\u0430\u0436\u0435\u043D\u043D\u044F \u0434\u043B\u044F \u043C\u043E\u0431\u0456\u043B\u044C\u043D\u0438\u0445",onUpload:$,image:t.item.image_mobile.ru?a.route("images.banners.mobile",{filename:t.item.image_mobile.ru+".jpeg"}):null,onOnDestroyImage:e[7]||(e[7]=l=>r("mobile","ru"))},null,8,["image"])):i("",!0)]),m("div",H,[o.value.activeLang==="ru"?(n(),u(c,{key:0,onUpload:D,image:t.item.image_table.ru?a.route("images.banners.mobile",{filename:t.item.image_table.ru+".jpeg"}):null,onOnDestroyImage:e[8]||(e[8]=l=>r("table","ru"))},null,8,["image"])):i("",!0),o.value.activeLang==="ua"?(n(),u(c,{key:1,label:"\u0417\u043E\u0431\u0440\u0430\u0436\u0435\u043D\u043D\u044F \u0434\u043B\u044F \u043F\u043B\u0430\u043D\u0448\u0435\u0442\u0456\u0432",onUpload:j,image:t.item.image_table.ua?a.route("images.banners.mobile",{filename:t.item.image_table.ua+".jpeg"}):null,onOnDestroyImage:e[9]||(e[9]=l=>r("table","ua"))},null,8,["image"])):i("",!0)])]),m("div",J,[o.value.activeLang==="ru"?(n(),u(c,{key:0,label:"\u0417\u043E\u0431\u0440\u0430\u0436\u0435\u043D\u043D\u044F \u0434\u043B\u044F \u043A\u043E\u043C\u043F\u02BC\u044E\u0442\u0435\u0440\u0456\u0432",onUpload:B,image:t.item.image_desktop.ru?a.route("images.banners.mobile",{filename:t.item.image_desktop.ru+".jpeg"}):null,onOnDestroyImage:e[10]||(e[10]=l=>r("desktop","ru"))},null,8,["image"])):i("",!0),o.value.activeLang==="ua"?(n(),u(c,{key:1,label:"\u0417\u043E\u0431\u0440\u0430\u0436\u0435\u043D\u043D\u044F \u0434\u043B\u044F \u043A\u043E\u043C\u043F\u02BC\u044E\u0442\u0435\u0440\u0456\u0432",onUpload:O,image:t.item.image_desktop.ua?a.route("images.banners.mobile",{filename:t.item.image_desktop.ua+".jpeg"}):null,onOnDestroyImage:e[11]||(e[11]=l=>r("desktop","ua"))},null,8,["image"])):i("",!0)])])])}}};export{W as default};
