import{y as D,C as T,L as h,M as u,K as t,P as c,_ as L,X as E,a0 as F,ac as N,B as V,V as n,S as k,Y as O}from"./___vite-browser-external_commonjs-proxy.af1999bf.js";import Y from"./Images.d42872fd.js";import j from"./ImagesSelectModal.79887f29.js";import"./app.0d85eb97.js";import"./swiper-slide.4dde4bf1.js";import"./UploadImagesModal.e5c658aa.js";const K={class:"grid grid-cols-3 gap-4 mb-5"},X={class:"block"},q={class:"block"},G={class:"block"},H={class:"grid grid-cols-3 gap-4"},J={class:"block"},Q={class:"block"},R={class:"block"},W={class:"grid grid-cols-2 gap-4"},Z={class:"block"},_={class:"block"},ee={class:"block"},te=u("hr",{class:"mb-5"},null,-1),oe={class:"grid grid-cols-1 gap-4"},le={class:"block"},ae={class:"block"},se={class:"block"},ue={class:"block"},ie={class:"block"},ne={class:"block"},de={class:"grid grid-cols-3 gap-4 mb-5"},ce={class:"block"},re={class:"block"},me={class:"block"},ve={class:"row"},pe={key:0,class:"block mb-7"},ge={class:"block mb-7"},be=O("\u041E\u0431\u0440\u0430\u0442\u0438 \u0437\u043E\u0431\u0440\u0430\u0436\u0435\u043D\u043D\u044F"),Ue={__name:"Form",props:["product"],emits:["submit","setProductImages","destroyImage"],setup(o,{emit:y}){const m=o,U=V("$defaultLang"),r=V("$tiny"),w=V("$publishedStatuses"),s=D({isActiveSelectedImagesModal:!1,activeLang:U,statusOptions:[{key:"in stock",value:"\u0412 \u043D\u0430\u044F\u0432\u043D\u043E\u0441\u0442\u0456"},{key:"ends",value:"\u041D\u0435\u043C\u0430 \u0432 \u043D\u0430\u044F\u0432\u043D\u043E\u0441\u0442\u0456"},{key:"out of stock",value:"\u0417\u0430\u043A\u0456\u043D\u0447\u0443\u0454\u0442\u044C\u0441\u044F"}],categories:[],providers:[],colors:[],sizes:[],productPreview:[]});T(()=>{axios.get(route("api.categories.list")).then(({data:a})=>s.value.categories=a.result).catch(a=>console.log(a)),axios.get(route("api.providers.list")).then(({data:a})=>{a.result.forEach(e=>{s.value.providers.push({key:e.id,value:e.name})})}).catch(a=>console.log(a)),axios.get(route("api.colors.list")).then(({data:a})=>s.value.colors=a.result).catch(a=>console.log(a)),axios.get(route("api.sizes.list")).then(({data:a})=>s.value.sizes=a.result).catch(a=>console.log(a)),m.product.preview&&f(m.product.preview)});function f(a){s.value.productPreview.push({src:route("images.55",a)})}function x(a){s.value.activeLang=a}function I({title:a,id:e}){return a&&e?`${s.value.activeLang==="ua"?a.ua:s.value.activeLang==="ru"?a.ru:"-"} -${e}`:`${e}`}function v(){s.value.isActiveSelectedImagesModal=!s.value.isActiveSelectedImagesModal}function P(a){let e=new FormData;e.append("image",a),axios.post(route("api.images.upload"),e,{headers:{"Content-Type":"multipart/form-data"}}).then(({data:i})=>{m.product.preview=i.result,f(i.result)}).catch(i=>console.log(i))}function M(){m.product.preview=null,s.value.productPreview=[]}function C(a){v(),y("setProductImages",a)}function $(a){y("destroyImage",a)}return(a,e)=>{const i=n("label-component"),p=n("select-component"),d=n("input-component"),g=n("multiselect"),A=n("upload-input-component"),S=n("lang-tabs"),z=n("textarea-component"),b=n("editor"),B=n("button-component");return k(),h("form",{onSubmit:e[17]||(e[17]=N(l=>a.$emit("submit",o.product),["prevent"])),class:"grid grid-cols-1 gap-4"},[u("div",K,[u("div",X,[t(i,{value:"\u0421\u0442\u0430\u0442\u0443\u0441 \u043F\u0443\u0431\u043B\u0456\u043A\u0430\u0446\u0456\u0457"}),t(p,{modelValue:o.product.published,"onUpdate:modelValue":e[0]||(e[0]=l=>o.product.published=l),options:c(w)},null,8,["modelValue","options"])]),u("div",q,[t(i,{value:"\u041D\u0430\u044F\u0432\u043D\u0456\u0441\u0442\u044C \u0442\u043E\u0432\u0430\u0440\u0443"}),t(p,{modelValue:o.product.status,"onUpdate:modelValue":e[1]||(e[1]=l=>o.product.status=l),options:s.value.statusOptions},null,8,["modelValue","options"])]),u("div",G,[t(i,{value:"\u0410\u0440\u0442\u0438\u043A\u0443\u043B"}),t(d,{modelValue:o.product.vendor_code,"onUpdate:modelValue":e[2]||(e[2]=l=>o.product.vendor_code=l),type:"text"},null,8,["modelValue"])])]),u("div",H,[u("div",J,[t(i,{value:"\u041A\u0430\u0442\u0435\u0433\u043E\u0440\u0456\u0457"}),t(g,{options:s.value.categories,modelValue:o.product.categories,"onUpdate:modelValue":e[3]||(e[3]=l=>o.product.categories=l),"custom-label":I,placeholder:"\u041E\u0431\u0435\u0440\u0456\u0442\u044C \u043A\u0430\u0442\u0435\u0433\u043E\u0440\u0456\u0457",class:"mb-5","track-by":"id",searchable:!0,multiple:!0},null,8,["options","modelValue"])]),u("div",Q,[t(i,{value:"\u041F\u043E\u0441\u0442\u0430\u0447\u0430\u043B\u044C\u043D\u0438\u043A\u0438"}),t(p,{modelValue:o.product.provider_id,"onUpdate:modelValue":e[4]||(e[4]=l=>o.product.provider_id=l),options:s.value.providers},null,8,["modelValue","options"])]),u("div",R,[t(A,{multiple:!1,id:"uploadCategoryPreview",label:"\u0413\u043E\u043B\u043E\u0432\u043D\u0435 \u0437\u043E\u0431\u0440\u0430\u0436\u0435\u043D\u043D\u044F",onUpload:P,images:s.value.productPreview,onOnDestroyImage:M},null,8,["images"])])]),u("div",W,[u("div",Z,[t(i,{value:"\u0420\u043E\u0437\u043C\u0456\u0440\u0438"}),t(g,{options:s.value.sizes,modelValue:o.product.sizes,"onUpdate:modelValue":e[5]||(e[5]=l=>o.product.sizes=l),label:"title",placeholder:"\u041E\u0431\u0435\u0440\u0456\u0442\u044C \u0440\u043E\u0437\u043C\u0456\u0440\u0438","track-by":"id","close-on-select":!1,searchable:!0,multiple:!0},null,8,["options","modelValue"])]),u("div",_,[t(i,{value:"\u041A\u043E\u043B\u044C\u043E\u0440\u0438"}),t(g,{options:s.value.colors,modelValue:o.product.colors,"onUpdate:modelValue":e[6]||(e[6]=l=>o.product.colors=l),label:"name",placeholder:"\u041E\u0431\u0435\u0440\u0456\u0442\u044C \u043A\u043E\u043B\u044C\u043E\u0440\u0438","track-by":"id","close-on-select":!1,searchable:!0,multiple:!0},null,8,["options","modelValue"])])]),u("div",ee,[t(i,{value:"Youtube"}),t(d,{modelValue:o.product.youtube,"onUpdate:modelValue":e[7]||(e[7]=l=>o.product.youtube=l),type:"text"},null,8,["modelValue"])]),t(S,{onClickLang:x}),te,u("div",oe,[u("div",le,[t(i,{value:"\u041D\u0430\u0437\u0432\u0430 \u0442\u043E\u0432\u0430\u0440\u0443"}),t(d,{modelValue:o.product.h1[s.value.activeLang],"onUpdate:modelValue":e[8]||(e[8]=l=>o.product.h1[s.value.activeLang]=l),type:"text"},null,8,["modelValue"])]),u("div",ae,[t(i,{value:"META Title"}),t(d,{modelValue:o.product.title[s.value.activeLang],"onUpdate:modelValue":e[9]||(e[9]=l=>o.product.title[s.value.activeLang]=l),type:"text"},null,8,["modelValue"])]),u("div",se,[t(i,{value:"META Description"}),t(z,{modelValue:o.product.description[s.value.activeLang],"onUpdate:modelValue":e[10]||(e[10]=l=>o.product.description[s.value.activeLang]=l)},null,8,["modelValue"])]),u("div",ue,[t(i,{value:"\u041E\u043F\u0438\u0441 \u0442\u043E\u0432\u0430\u0440\u0443"}),t(b,{"api-key":c(r).api,modelValue:o.product.content[s.value.activeLang],"onUpdate:modelValue":e[11]||(e[11]=l=>o.product.content[s.value.activeLang]=l),init:c(r).settings},null,8,["api-key","modelValue","init"])]),u("div",ie,[t(i,{value:"\u0425\u0430\u0440\u0430\u043A\u0442\u0435\u0440\u0438\u0441\u0442\u0438\u043A\u0438"}),t(b,{"api-key":c(r).api,modelValue:o.product.characteristics[s.value.activeLang],"onUpdate:modelValue":e[12]||(e[12]=l=>o.product.characteristics[s.value.activeLang]=l),init:c(r).settings},null,8,["api-key","modelValue","init"])]),u("div",ne,[t(i,{value:"\u0422\u0430\u0431\u043B\u0438\u0446\u044F \u0440\u043E\u0437\u043C\u0456\u0440\u0456\u0432"}),t(b,{"api-key":c(r).api,modelValue:o.product.size_table,"onUpdate:modelValue":e[13]||(e[13]=l=>o.product.size_table=l),init:c(r).settings},null,8,["api-key","modelValue","init"])]),u("div",de,[u("div",ce,[t(i,{value:"\u0426\u0456\u043D\u0430"}),t(d,{modelValue:o.product.price,"onUpdate:modelValue":e[14]||(e[14]=l=>o.product.price=l),type:"number"},null,8,["modelValue"])]),u("div",re,[t(i,{value:"\u0426\u0456\u043D\u0430 \u0437\u0456 \u0437\u043D\u0438\u0436\u043A\u043E\u044E"}),t(d,{modelValue:o.product.discount_price,"onUpdate:modelValue":e[15]||(e[15]=l=>o.product.discount_price=l),type:"number"},null,8,["modelValue"])]),u("div",me,[t(i,{value:"\u0426\u0456\u043D\u0430 \u0437\u0430\u043A\u0443\u043F\u043A\u0438"}),t(d,{modelValue:o.product.trade_price,"onUpdate:modelValue":e[16]||(e[16]=l=>o.product.trade_price=l),type:"number"},null,8,["modelValue"])])])]),u("div",ve,[o.product.images?(k(),h("div",pe,[t(i,{value:"\u0417\u043E\u0431\u0440\u0430\u0436\u0435\u043D\u043D\u044F"}),t(Y,{images:o.product.images,onDestroyImage:$},null,8,["images"])])):L("",!0),u("div",ge,[t(B,{type:"button",onClick:v},{default:E(()=>[be]),_:1}),s.value.isActiveSelectedImagesModal?(k(),F(j,{key:0,onSubmitForm:C,onCloseModal:v})):L("",!0)])])],32)}}};export{Ue as default};