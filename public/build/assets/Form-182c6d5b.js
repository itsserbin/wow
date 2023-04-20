import{i as v,r as S,o as C,p as d,q as u,v as r,l as s,F as M,K as P,C as y,t as c,x as U,D as f,z as F,A as E,B as x}from"./app-f55448cf.js";import{_ as A}from"./ImagesSelectModal-66d24b34.js";import{_ as B}from"./ImageCard-e3dc587b.js";import{_ as N}from"./InputError-688221d0.js";import{_ as n}from"./Label-fa7af1d1.js";import{_ as p}from"./Input-4fdb1b47.js";import{_ as w}from"./Textarea-faf312b0.js";import{_ as b}from"./Select-35904355.js";import{_ as j}from"./LangTabs-9ee1a6bd.js";import{_ as z}from"./Button-3f74bcad.js";import{E as D}from"./Editor-113ec15f.js";const I={async list(){try{return(await axios.get(route("api.categories.list"))).data}catch(e){throw new Error(e.response.data)}},async fetch(e){try{return(await axios.get(route("api.categories.index",e))).data}catch(o){throw new Error(o.response.data.message)}},async update(e){try{return(await axios.put(route("api.categories.update",e.id),e)).data}catch(o){return o.response.data}},async destroy(e){try{return(await axios.delete(route("api.categories.destroy",e))).data}catch(o){return o.response.data}},async edit(e){try{return(await axios.get(route("api.categories.edit",e))).data}catch(o){return o.response.data}},async create(e){try{return(await axios.post(route("api.categories.create"),e)).data}catch(o){return o.response.data}}},O={class:"grid grid-cols-3 mb-5 gap-4"},T={class:"block col-span-2"},q={class:"block"},K={class:"grid grid-cols-2 gap-4 mb-5"},R={class:"block"},G={class:"block"},H={key:0,class:"block mb-7 w-1/4 mx-auto"},J={key:1,class:"block mb-7"},Q=r("hr",{class:"mb-5"},null,-1),W={class:"grid grid-cols-1 rounded"},X={class:"block mb-5"},Y={class:"block mb-5"},Z={class:"block mb-5"},ee={class:"block mb-5"},te={class:"block mb-5"},ae={__name:"Form",props:["item","errors"],setup(e){const o=e,g=v("$tiny"),$=v("$defaultLang"),h=v("$publishedStatuses"),i=S({categories:[],categoryPreview:[],isActiveSelectedPreviewModal:!1,activeLang:$});C(async()=>{await _()});const m=()=>{i.value.isActiveSelectedPreviewModal=!i.value.isActiveSelectedPreviewModal},V=()=>{o.item.preview_id=null,o.item.preview={}},k=t=>{i.value.activeLang=t},L=t=>{o.item.preview_id=t.id,o.item.preview.src=t.src,m()},_=async()=>{const t=await I.list();t.success&&t.result.forEach(a=>{i.value.categories.push({key:a.id,value:a.title.ua?a.title.ua:a.title.ru})})};return(t,a)=>(d(),u("form",{onSubmit:a[8]||(a[8]=F(l=>t.$emit("submit",e.item),["prevent"])),class:"flex flex-col"},[r("div",O,[r("div",T,[s(n,{value:t.$t("slug")},null,8,["value"]),s(p,{modelValue:e.item.slug,"onUpdate:modelValue":a[0]||(a[0]=l=>e.item.slug=l),type:"text",placeholder:t.$t("enter_slug")},null,8,["modelValue","placeholder"]),e.errors.slug?(d(!0),u(M,{key:0},P(e.errors.slug,l=>(d(),f(N,{message:l},null,8,["message"]))),256)):y("",!0)]),r("div",q,[s(n,{value:t.$t("published")},null,8,["value"]),s(b,{modelValue:e.item.published,"onUpdate:modelValue":a[1]||(a[1]=l=>e.item.published=l),options:c(h)},null,8,["modelValue","options"])])]),r("div",K,[r("div",R,[s(n,{value:t.$t("categories.parent")},null,8,["value"]),s(b,{modelValue:e.item.parent_id,"onUpdate:modelValue":a[2]||(a[2]=l=>e.item.parent_id=l),options:i.value.categories},null,8,["modelValue","options"])]),r("div",G,[s(n,{value:t.$t("preview")},null,8,["value"]),e.item.preview_id?(d(),u("div",H,[s(B,{destroyIcon:!0,image:e.item.preview,onDestroyImage:V,size:"55"},null,8,["image"])])):(d(),u("div",J,[s(z,{type:"button",onClick:m},{default:U(()=>[E(x(t.$t("select_image")),1)]),_:1}),i.value.isActiveSelectedPreviewModal?(d(),f(A,{key:0,onSubmitForm:L,onCloseModal:m})):y("",!0)]))])]),s(j,{onClickLang:k}),Q,r("div",W,[r("div",X,[s(n,{value:t.$t("categories.title")},null,8,["value"]),s(p,{modelValue:e.item.title[i.value.activeLang],"onUpdate:modelValue":a[3]||(a[3]=l=>e.item.title[i.value.activeLang]=l),type:"text",placeholder:t.$t("categories.enter_title")},null,8,["modelValue","placeholder"])]),r("div",Y,[s(n,{value:t.$t("meta.title")},null,8,["value"]),s(p,{modelValue:e.item.meta_title[i.value.activeLang],"onUpdate:modelValue":a[4]||(a[4]=l=>e.item.meta_title[i.value.activeLang]=l),type:"text",placeholder:t.$t("meta.enter_title")},null,8,["modelValue","placeholder"])]),r("div",Z,[s(n,{value:t.$t("meta.description")},null,8,["value"]),s(w,{modelValue:e.item.meta_description[i.value.activeLang],"onUpdate:modelValue":a[5]||(a[5]=l=>e.item.meta_description[i.value.activeLang]=l),placeholder:t.$t("meta.enter_description")},null,8,["modelValue","placeholder"])]),r("div",ee,[s(n,{value:t.$t("meta.keywords")},null,8,["value"]),s(w,{modelValue:e.item.meta_keyword[i.value.activeLang],"onUpdate:modelValue":a[6]||(a[6]=l=>e.item.meta_keyword[i.value.activeLang]=l),placeholder:t.$t("meta.enter_keywords")},null,8,["modelValue","placeholder"])]),r("div",te,[s(n,{value:t.$t("seo_text")},null,8,["value"]),s(c(D),{"api-key":c(g).api,modelValue:e.item.seo_text[i.value.activeLang],"onUpdate:modelValue":a[7]||(a[7]=l=>e.item.seo_text[i.value.activeLang]=l),init:c(g).settings},null,8,["api-key","modelValue","init"])])])],32))}},pe=Object.freeze(Object.defineProperty({__proto__:null,default:ae},Symbol.toStringTag,{value:"Module"}));export{I as C,pe as F,ae as _};