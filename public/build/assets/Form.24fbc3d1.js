import{w as G,S as H,y as n,z as u,M as t,B as r,O as y,Q as L,G as p,H as K,I as Q,a8 as R,U as V,K as w,F as i,P as U,A as I}from"./moment.75c21a91.js";import T from"./Images.1b8b2bc2.js";import{_ as M}from"./ImagesSelectModal.1b9a2690.js";import{_ as d,e as $,a as c,f as q,b as S,g as J,h as W}from"./app.15c153c6.js";import{C as X}from"./CharacteristicsRepository.ec452529.js";import"./swiper-slide.73ba18e3.js";import"./UploadImagesModal.1c306b10.js";const Y={class:"grid grid-cols-3 gap-4 mb-5"},Z={class:"block"},_={class:"block"},x={class:"block"},ee={class:"grid grid-cols-3 gap-4"},le={class:"block"},te={class:"block"},oe={class:"block"},ae={key:0,class:"block mb-7"},se={key:1,class:"block mb-7"},ue={class:"grid grid-cols-2 gap-4"},de={class:"block"},ie={class:"block"},ce={class:"block"},ne=u("hr",{class:"mb-5"},null,-1),re={class:"grid grid-cols-1 gap-4"},ve={class:"block"},me={class:"block"},pe={class:"block"},ge={class:"block"},be={class:"block"},he={class:"grid grid-cols-3 gap-4 mb-5"},Ve={class:"block"},$e={class:"block"},ke={class:"block"},fe={class:"row"},ye={key:0,class:"block mb-7"},Le={class:"block mb-7"},we={class:"grid grid-cols-4 gap-4"},Ue={class:"block"},Fe={__name:"Form",props:["product"],emits:["submit","setProductImages","destroyImage"],setup(o,{emit:k}){const g=o,z=V("$defaultLang"),v=V("$tiny"),C=V("$publishedStatuses"),s=G({isActiveSelectedImagesModal:!1,isActiveSelectedPreviewModal:!1,activeLang:z,statusOptions:[{key:"in stock",value:"\u0412 \u043D\u0430\u044F\u0432\u043D\u043E\u0441\u0442\u0456"},{key:"ends",value:"\u0417\u0430\u043A\u0456\u043D\u0447\u0443\u0454\u0442\u044C\u0441\u044F"},{key:"out of stock",value:"\u041D\u0435\u043C\u0430 \u0432 \u043D\u0430\u044F\u0432\u043D\u043E\u0441\u0442\u0456"}],categories:[],providers:[],colors:[],sizes:[],characteristics:[]});H(()=>{P(),axios.get(route("api.categories.list")).then(({data:e})=>s.value.categories=e.result).catch(e=>console.log(e)),axios.get(route("api.providers.list")).then(({data:e})=>{e.result.forEach(l=>{s.value.providers.push({key:l.id,value:l.name})})}).catch(e=>console.log(e)),axios.get(route("api.colors.list")).then(({data:e})=>s.value.colors=e.result).catch(e=>console.log(e)),axios.get(route("api.sizes.list")).then(({data:e})=>s.value.sizes=e.result).catch(e=>console.log(e))});function A({title:e}){if(e)return e[s.value.activeLang]}async function P(){try{const{result:e,success:l}=await X().list();l&&(s.value.characteristics=e)}catch(e){console.error(e)}}function F(e){s.value.activeLang=e}function N({h1:e,id:l}){return e&&l?`${s.value.activeLang==="ua"?e.ua:s.value.activeLang==="ru"?e.ru:"-"} -${l}`:`${l}`}function b(){s.value.isActiveSelectedImagesModal=!s.value.isActiveSelectedImagesModal}function h(){s.value.isActiveSelectedPreviewModal=!s.value.isActiveSelectedPreviewModal}function B(){g.product.preview_id=null}function D(e){b(),k("setProductImages",e)}function O(e){g.product.preview_id=e.id,g.product.preview.src=e.src,h()}function E(e){k("destroyImage",e)}return(e,l)=>{const m=w("multiselect"),f=w("editor");return i(),n("form",{onSubmit:l[16]||(l[16]=R(a=>e.$emit("submit",o.product),["prevent"])),class:"grid grid-cols-1 gap-4"},[u("div",Y,[u("div",Z,[t(d,{value:e.$t("published")},null,8,["value"]),t($,{modelValue:o.product.published,"onUpdate:modelValue":l[0]||(l[0]=a=>o.product.published=a),options:r(C)},null,8,["modelValue","options"])]),u("div",_,[t(d,{value:e.$t("products.status")},null,8,["value"]),t($,{modelValue:o.product.status,"onUpdate:modelValue":l[1]||(l[1]=a=>o.product.status=a),options:s.value.statusOptions},null,8,["modelValue","options"])]),u("div",x,[t(d,{value:e.$t("products.vendor_code")},null,8,["value"]),t(c,{modelValue:o.product.vendor_code,"onUpdate:modelValue":l[2]||(l[2]=a=>o.product.vendor_code=a),type:"text",placeholder:e.$t("products.enter_vendor_code")},null,8,["modelValue","placeholder"])])]),u("div",ee,[u("div",le,[t(d,{value:e.$t("products.categories")},null,8,["value"]),t(m,{options:s.value.categories,modelValue:o.product.categories,"onUpdate:modelValue":l[3]||(l[3]=a=>o.product.categories=a),"custom-label":N,placeholder:e.$t("products.enter_categories"),class:"mb-5","track-by":"id",searchable:!0,multiple:!0},null,8,["options","modelValue","placeholder"])]),u("div",te,[t(d,{value:e.$t("products.provider")},null,8,["value"]),t($,{modelValue:o.product.provider_id,"onUpdate:modelValue":l[4]||(l[4]=a=>o.product.provider_id=a),options:s.value.providers},null,8,["modelValue","options"])]),u("div",oe,[t(d,{value:e.$t("preview")},null,8,["value"]),o.product.preview_id?(i(),n("div",ae,[t(q,{destroyIcon:!0,image:o.product.preview,onDestroyImage:B,size:"55"},null,8,["image"])])):(i(),n("div",se,[t(S,{type:"button",onClick:h},{default:y(()=>[U(I(e.$t("select_image")),1)]),_:1}),s.value.isActiveSelectedPreviewModal?(i(),L(M,{key:0,onSubmitForm:O,onCloseModal:h})):p("",!0)]))])]),u("div",ue,[u("div",de,[t(d,{value:e.$t("products.sizes")},null,8,["value"]),t(m,{options:s.value.sizes,modelValue:o.product.sizes,"onUpdate:modelValue":l[5]||(l[5]=a=>o.product.sizes=a),label:"title",placeholder:e.$t("products.enter_sizes"),"track-by":"id","close-on-select":!1,searchable:!0,multiple:!0},null,8,["options","modelValue","placeholder"])]),u("div",ie,[t(d,{value:e.$t("products.colors")},null,8,["value"]),t(m,{options:s.value.colors,modelValue:o.product.colors,"onUpdate:modelValue":l[6]||(l[6]=a=>o.product.colors=a),label:"name",placeholder:e.$t("products.enter_colors"),"track-by":"id","close-on-select":!1,searchable:!0,multiple:!0},null,8,["options","modelValue","placeholder"])])]),u("div",ce,[t(d,{value:e.$t("products.youtube")},null,8,["value"]),t(c,{modelValue:o.product.youtube,"onUpdate:modelValue":l[7]||(l[7]=a=>o.product.youtube=a),type:"text",placeholder:e.$t("products.enter_youtube")},null,8,["modelValue","placeholder"])]),t(W,{onClickLang:F}),ne,u("div",re,[u("div",ve,[t(d,{value:e.$t("products.h1")},null,8,["value"]),t(c,{modelValue:o.product.h1[s.value.activeLang],"onUpdate:modelValue":l[8]||(l[8]=a=>o.product.h1[s.value.activeLang]=a),type:"text",placeholder:e.$t("products.enter_h1")},null,8,["modelValue","placeholder"])]),u("div",me,[t(d,{value:e.$t("meta.title")},null,8,["value"]),t(c,{modelValue:o.product.title[s.value.activeLang],"onUpdate:modelValue":l[9]||(l[9]=a=>o.product.title[s.value.activeLang]=a),type:"text",placeholder:e.$t("meta.enter_title")},null,8,["modelValue","placeholder"])]),u("div",pe,[t(d,{value:e.$t("meta.description")},null,8,["value"]),t(J,{modelValue:o.product.description[s.value.activeLang],"onUpdate:modelValue":l[10]||(l[10]=a=>o.product.description[s.value.activeLang]=a),placeholder:e.$t("meta.enter_description")},null,8,["modelValue","placeholder"])]),u("div",ge,[t(d,{value:e.$t("products.content")},null,8,["value"]),t(f,{"api-key":r(v).api,modelValue:o.product.content[s.value.activeLang],"onUpdate:modelValue":l[11]||(l[11]=a=>o.product.content[s.value.activeLang]=a),init:r(v).settings},null,8,["api-key","modelValue","init"])]),u("div",be,[t(d,{value:e.$t("products.size_table")},null,8,["value"]),t(f,{"api-key":r(v).api,modelValue:o.product.size_table,"onUpdate:modelValue":l[12]||(l[12]=a=>o.product.size_table=a),init:r(v).settings},null,8,["api-key","modelValue","init"])]),u("div",he,[u("div",Ve,[t(d,{value:e.$t("products.price")},null,8,["value"]),t(c,{modelValue:o.product.price,"onUpdate:modelValue":l[13]||(l[13]=a=>o.product.price=a),type:"number",placeholder:e.$t("products.enter_price")},null,8,["modelValue","placeholder"])]),u("div",$e,[t(d,{value:e.$t("products.discount_price")},null,8,["value"]),t(c,{modelValue:o.product.discount_price,"onUpdate:modelValue":l[14]||(l[14]=a=>o.product.discount_price=a),type:"number",placeholder:e.$t("products.enter_discount_price")},null,8,["modelValue","placeholder"])]),u("div",ke,[t(d,{value:e.$t("products.trade_price")},null,8,["value"]),t(c,{modelValue:o.product.trade_price,"onUpdate:modelValue":l[15]||(l[15]=a=>o.product.trade_price=a),type:"number",placeholder:e.$t("products.enter_trade_price")},null,8,["modelValue","placeholder"])])])]),u("div",fe,[o.product.images?(i(),n("div",ye,[t(d,{value:e.$t("images.page_title")},null,8,["value"]),t(T,{images:o.product.images,onDestroyImage:E},null,8,["images"])])):p("",!0),u("div",Le,[t(S,{type:"button",onClick:b},{default:y(()=>[U(I(e.$t("select_image")),1)]),_:1}),s.value.isActiveSelectedImagesModal?(i(),L(M,{key:0,onSubmitForm:D,onCloseModal:b,multiple:!0})):p("",!0)])]),u("div",we,[s.value.characteristics.length?(i(!0),n(K,{key:0},Q(s.value.characteristics,a=>(i(),n("div",Ue,[t(d,{value:a.title[s.value.activeLang]},null,8,["value"]),t(m,{options:a.values,modelValue:o.product.characteristicsNew[a.id],"onUpdate:modelValue":j=>o.product.characteristicsNew[a.id]=j,"custom-label":A,placeholder:e.$t("products.select_characteristic_value"),class:"mb-5","track-by":"id",value:"id",searchable:!0,multiple:!0,"close-on-select":!1},null,8,["options","modelValue","onUpdate:modelValue","placeholder"])]))),256)):p("",!0)])],32)}}};export{Fe as default};
