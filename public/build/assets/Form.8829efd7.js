import{y as T,C as D,L as v,M as i,K as t,P as c,X as U,a0 as w,_ as f,ad as O,B as h,V as u,S as m,Y as S}from"./___vite-browser-external_commonjs-proxy.45af3daa.js";import Y from"./Images.b3c6ff91.js";import{_ as I}from"./ImagesSelectModal.200eef60.js";import{e as j}from"./app.2709748a.js";import"./swiper-slide.bea83212.js";import"./UploadImagesModal.ec27a8e7.js";const K={class:"grid grid-cols-3 gap-4 mb-5"},X={class:"block"},q={class:"block"},G={class:"block"},H={class:"grid grid-cols-3 gap-4"},J={class:"block"},Q={class:"block"},R={class:"block"},W={key:0,class:"block mb-7"},Z={key:1,class:"block mb-7"},_=S("\u041E\u0431\u0440\u0430\u0442\u0438 \u0437\u043E\u0431\u0440\u0430\u0436\u0435\u043D\u043D\u044F"),ee={class:"grid grid-cols-2 gap-4"},te={class:"block"},oe={class:"block"},le={class:"block"},ae=i("hr",{class:"mb-5"},null,-1),se={class:"grid grid-cols-1 gap-4"},ie={class:"block"},de={class:"block"},ue={class:"block"},ne={class:"block"},ce={class:"block"},re={class:"block"},me={class:"grid grid-cols-3 gap-4 mb-5"},ve={class:"block"},pe={class:"block"},ge={class:"block"},be={class:"row"},Ve={key:0,class:"block mb-7"},ke={class:"block mb-7"},ye=S("\u041E\u0431\u0440\u0430\u0442\u0438 \u0437\u043E\u0431\u0440\u0430\u0436\u0435\u043D\u043D\u044F"),Ie={__name:"Form",props:["product"],emits:["submit","setProductImages","destroyImage"],setup(o,{emit:L}){const p=o,x=h("$defaultLang"),r=h("$tiny"),A=h("$publishedStatuses"),s=T({isActiveSelectedImagesModal:!1,isActiveSelectedPreviewModal:!1,activeLang:x,statusOptions:[{key:"in stock",value:"\u0412 \u043D\u0430\u044F\u0432\u043D\u043E\u0441\u0442\u0456"},{key:"ends",value:"\u0417\u0430\u043A\u0456\u043D\u0447\u0443\u0454\u0442\u044C\u0441\u044F"},{key:"out of stock",value:"\u041D\u0435\u043C\u0430 \u0432 \u043D\u0430\u044F\u0432\u043D\u043E\u0441\u0442\u0456"}],categories:[],providers:[],colors:[],sizes:[]});D(()=>{axios.get(route("api.categories.list")).then(({data:a})=>s.value.categories=a.result).catch(a=>console.log(a)),axios.get(route("api.providers.list")).then(({data:a})=>{a.result.forEach(e=>{s.value.providers.push({key:e.id,value:e.name})})}).catch(a=>console.log(a)),axios.get(route("api.colors.list")).then(({data:a})=>s.value.colors=a.result).catch(a=>console.log(a)),axios.get(route("api.sizes.list")).then(({data:a})=>s.value.sizes=a.result).catch(a=>console.log(a))});function P(a){s.value.activeLang=a}function $({h1:a,id:e}){return a&&e?`${s.value.activeLang==="ua"?a.ua:s.value.activeLang==="ru"?a.ru:"-"} -${e}`:`${e}`}function g(){s.value.isActiveSelectedImagesModal=!s.value.isActiveSelectedImagesModal}function b(){s.value.isActiveSelectedPreviewModal=!s.value.isActiveSelectedPreviewModal}function C(){p.product.preview_id=null}function z(a){g(),L("setProductImages",a)}function B(a){p.product.preview_id=a.id,p.product.preview.src=a.src,b()}function F(a){L("destroyImage",a)}return(a,e)=>{const d=u("label-component"),V=u("select-component"),n=u("input-component"),k=u("multiselect"),M=u("button-component"),E=u("lang-tabs"),N=u("textarea-component"),y=u("editor");return m(),v("form",{onSubmit:e[17]||(e[17]=O(l=>a.$emit("submit",o.product),["prevent"])),class:"grid grid-cols-1 gap-4"},[i("div",K,[i("div",X,[t(d,{value:"\u0421\u0442\u0430\u0442\u0443\u0441 \u043F\u0443\u0431\u043B\u0456\u043A\u0430\u0446\u0456\u0457"}),t(V,{modelValue:o.product.published,"onUpdate:modelValue":e[0]||(e[0]=l=>o.product.published=l),options:c(A)},null,8,["modelValue","options"])]),i("div",q,[t(d,{value:"\u041D\u0430\u044F\u0432\u043D\u0456\u0441\u0442\u044C \u0442\u043E\u0432\u0430\u0440\u0443"}),t(V,{modelValue:o.product.status,"onUpdate:modelValue":e[1]||(e[1]=l=>o.product.status=l),options:s.value.statusOptions},null,8,["modelValue","options"])]),i("div",G,[t(d,{value:"\u0410\u0440\u0442\u0438\u043A\u0443\u043B"}),t(n,{modelValue:o.product.vendor_code,"onUpdate:modelValue":e[2]||(e[2]=l=>o.product.vendor_code=l),type:"text"},null,8,["modelValue"])])]),i("div",H,[i("div",J,[t(d,{value:"\u041A\u0430\u0442\u0435\u0433\u043E\u0440\u0456\u0457"}),t(k,{options:s.value.categories,modelValue:o.product.categories,"onUpdate:modelValue":e[3]||(e[3]=l=>o.product.categories=l),"custom-label":$,placeholder:"\u041E\u0431\u0435\u0440\u0456\u0442\u044C \u043A\u0430\u0442\u0435\u0433\u043E\u0440\u0456\u0457",class:"mb-5","track-by":"id",searchable:!0,multiple:!0},null,8,["options","modelValue"])]),i("div",Q,[t(d,{value:"\u041F\u043E\u0441\u0442\u0430\u0447\u0430\u043B\u044C\u043D\u0438\u043A\u0438"}),t(V,{modelValue:o.product.provider_id,"onUpdate:modelValue":e[4]||(e[4]=l=>o.product.provider_id=l),options:s.value.providers},null,8,["modelValue","options"])]),i("div",R,[t(d,{value:"\u0413\u043E\u043B\u043E\u0432\u043D\u0435 \u0437\u043E\u0431\u0440\u0430\u0436\u0435\u043D\u043D\u044F"}),o.product.preview_id?(m(),v("div",W,[t(j,{destroyIcon:!0,image:o.product.preview,onDestroyImage:C,size:"55"},null,8,["image"])])):(m(),v("div",Z,[t(M,{type:"button",onClick:b},{default:U(()=>[_]),_:1}),s.value.isActiveSelectedPreviewModal?(m(),w(I,{key:0,onSubmitForm:B,onCloseModal:b})):f("",!0)]))])]),i("div",ee,[i("div",te,[t(d,{value:"\u0420\u043E\u0437\u043C\u0456\u0440\u0438"}),t(k,{options:s.value.sizes,modelValue:o.product.sizes,"onUpdate:modelValue":e[5]||(e[5]=l=>o.product.sizes=l),label:"title",placeholder:"\u041E\u0431\u0435\u0440\u0456\u0442\u044C \u0440\u043E\u0437\u043C\u0456\u0440\u0438","track-by":"id","close-on-select":!1,searchable:!0,multiple:!0},null,8,["options","modelValue"])]),i("div",oe,[t(d,{value:"\u041A\u043E\u043B\u044C\u043E\u0440\u0438"}),t(k,{options:s.value.colors,modelValue:o.product.colors,"onUpdate:modelValue":e[6]||(e[6]=l=>o.product.colors=l),label:"name",placeholder:"\u041E\u0431\u0435\u0440\u0456\u0442\u044C \u043A\u043E\u043B\u044C\u043E\u0440\u0438","track-by":"id","close-on-select":!1,searchable:!0,multiple:!0},null,8,["options","modelValue"])])]),i("div",le,[t(d,{value:"Youtube"}),t(n,{modelValue:o.product.youtube,"onUpdate:modelValue":e[7]||(e[7]=l=>o.product.youtube=l),type:"text"},null,8,["modelValue"])]),t(E,{onClickLang:P}),ae,i("div",se,[i("div",ie,[t(d,{value:"\u041D\u0430\u0437\u0432\u0430 \u0442\u043E\u0432\u0430\u0440\u0443"}),t(n,{modelValue:o.product.h1[s.value.activeLang],"onUpdate:modelValue":e[8]||(e[8]=l=>o.product.h1[s.value.activeLang]=l),type:"text"},null,8,["modelValue"])]),i("div",de,[t(d,{value:"META Title"}),t(n,{modelValue:o.product.title[s.value.activeLang],"onUpdate:modelValue":e[9]||(e[9]=l=>o.product.title[s.value.activeLang]=l),type:"text"},null,8,["modelValue"])]),i("div",ue,[t(d,{value:"META Description"}),t(N,{modelValue:o.product.description[s.value.activeLang],"onUpdate:modelValue":e[10]||(e[10]=l=>o.product.description[s.value.activeLang]=l)},null,8,["modelValue"])]),i("div",ne,[t(d,{value:"\u041E\u043F\u0438\u0441 \u0442\u043E\u0432\u0430\u0440\u0443"}),t(y,{"api-key":c(r).api,modelValue:o.product.content[s.value.activeLang],"onUpdate:modelValue":e[11]||(e[11]=l=>o.product.content[s.value.activeLang]=l),init:c(r).settings},null,8,["api-key","modelValue","init"])]),i("div",ce,[t(d,{value:"\u0425\u0430\u0440\u0430\u043A\u0442\u0435\u0440\u0438\u0441\u0442\u0438\u043A\u0438"}),t(y,{"api-key":c(r).api,modelValue:o.product.characteristics[s.value.activeLang],"onUpdate:modelValue":e[12]||(e[12]=l=>o.product.characteristics[s.value.activeLang]=l),init:c(r).settings},null,8,["api-key","modelValue","init"])]),i("div",re,[t(d,{value:"\u0422\u0430\u0431\u043B\u0438\u0446\u044F \u0440\u043E\u0437\u043C\u0456\u0440\u0456\u0432"}),t(y,{"api-key":c(r).api,modelValue:o.product.size_table,"onUpdate:modelValue":e[13]||(e[13]=l=>o.product.size_table=l),init:c(r).settings},null,8,["api-key","modelValue","init"])]),i("div",me,[i("div",ve,[t(d,{value:"\u0426\u0456\u043D\u0430"}),t(n,{modelValue:o.product.price,"onUpdate:modelValue":e[14]||(e[14]=l=>o.product.price=l),type:"number"},null,8,["modelValue"])]),i("div",pe,[t(d,{value:"\u0426\u0456\u043D\u0430 \u0437\u0456 \u0437\u043D\u0438\u0436\u043A\u043E\u044E"}),t(n,{modelValue:o.product.discount_price,"onUpdate:modelValue":e[15]||(e[15]=l=>o.product.discount_price=l),type:"number"},null,8,["modelValue"])]),i("div",ge,[t(d,{value:"\u0426\u0456\u043D\u0430 \u0437\u0430\u043A\u0443\u043F\u043A\u0438"}),t(n,{modelValue:o.product.trade_price,"onUpdate:modelValue":e[16]||(e[16]=l=>o.product.trade_price=l),type:"number"},null,8,["modelValue"])])])]),i("div",be,[o.product.images?(m(),v("div",Ve,[t(d,{value:"\u0417\u043E\u0431\u0440\u0430\u0436\u0435\u043D\u043D\u044F"}),t(Y,{images:o.product.images,onDestroyImage:F},null,8,["images"])])):f("",!0),i("div",ke,[t(M,{type:"button",onClick:g},{default:U(()=>[ye]),_:1}),s.value.isActiveSelectedImagesModal?(m(),w(I,{key:0,onSubmitForm:z,onCloseModal:g,multiple:!0})):f("",!0)])])],32)}}};export{Ie as default};
