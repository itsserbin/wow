import{p as M,q as _,g as u,i as r,x as s,F as P,s as U,j as y,u as m,w as F,m as b,I as x,v,B,o as d,k as j,t as A}from"./vendor.1f6af4a6.js";import{_ as E}from"./ImagesSelectModal.001668aa.js";import{_ as n,a as g,e as w,f as N,b as I,g as f,h as z}from"./app.8b7021f2.js";import{_ as D}from"./InputError.37578239.js";const O={async list(){try{return(await axios.get(route("api.categories.list"))).data}catch(e){throw new Error(e.response.data)}},async fetch(e){try{return(await axios.get(route("api.categories.index",e))).data}catch(l){throw new Error(l.response.data.message)}},async update(e){try{return(await axios.put(route("api.categories.update",e.id),e)).data}catch(l){return l.response.data}},async destroy(e){try{return(await axios.delete(route("api.categories.destroy",e))).data}catch(l){return l.response.data}},async edit(e){try{return(await axios.get(route("api.categories.edit",e))).data}catch(l){return l.response.data}},async create(e){try{return(await axios.post(route("api.categories.create"),e)).data}catch(l){return l.response.data}}},T={class:"grid grid-cols-3 mb-5 gap-4"},q={class:"block col-span-2"},R={class:"block"},G={class:"grid grid-cols-2 gap-4 mb-5"},H={class:"block"},J={class:"block"},K={key:0,class:"block mb-7 w-1/4 mx-auto"},Q={key:1,class:"block mb-7"},W=r("hr",{class:"mb-5"},null,-1),X={class:"grid grid-cols-1 rounded"},Y={class:"block mb-5"},Z={class:"block mb-5"},ee={class:"block mb-5"},te={class:"block mb-5"},ae={class:"block mb-5"},se={__name:"Form",props:["item","errors"],setup(e){const l=e,p=v("$tiny"),h=v("$defaultLang"),$=v("$publishedStatuses"),i=M({categories:[],categoryPreview:[],isActiveSelectedPreviewModal:!1,activeLang:h});_(()=>{S()});const c=()=>{i.value.isActiveSelectedPreviewModal=!i.value.isActiveSelectedPreviewModal},k=()=>{l.item.preview_id=null,l.item.preview={}},V=t=>{i.value.activeLang=t},L=t=>{l.item.preview_id=t.id,l.item.preview.src=t.src,c()},S=async()=>{const t=await O.list();t.success&&t.result.forEach(a=>{i.value.categories.push({key:a.id,value:a.title.ua?a.title.ua:a.title.ru})})};return(t,a)=>{const C=B("editor");return d(),u("form",{onSubmit:a[8]||(a[8]=x(o=>t.$emit("submit",e.item),["prevent"])),class:"flex flex-col"},[r("div",T,[r("div",q,[s(n,{value:t.$t("slug")},null,8,["value"]),s(g,{modelValue:e.item.slug,"onUpdate:modelValue":a[0]||(a[0]=o=>e.item.slug=o),type:"text",placeholder:t.$t("enter_slug")},null,8,["modelValue","placeholder"]),e.errors.slug?(d(!0),u(P,{key:0},U(e.errors.slug,o=>(d(),b(D,{message:o},null,8,["message"]))),256)):y("",!0)]),r("div",R,[s(n,{value:t.$t("published")},null,8,["value"]),s(w,{modelValue:e.item.published,"onUpdate:modelValue":a[1]||(a[1]=o=>e.item.published=o),options:m($)},null,8,["modelValue","options"])])]),r("div",G,[r("div",H,[s(n,{value:t.$t("categories.parent")},null,8,["value"]),s(w,{modelValue:e.item.parent_id,"onUpdate:modelValue":a[2]||(a[2]=o=>e.item.parent_id=o),options:i.value.categories},null,8,["modelValue","options"])]),r("div",J,[s(n,{value:t.$t("preview")},null,8,["value"]),e.item.preview_id?(d(),u("div",K,[s(N,{destroyIcon:!0,image:e.item.preview,onDestroyImage:k,size:"55"},null,8,["image"])])):(d(),u("div",Q,[s(I,{type:"button",onClick:c},{default:F(()=>[j(A(t.$t("select_image")),1)]),_:1}),i.value.isActiveSelectedPreviewModal?(d(),b(E,{key:0,onSubmitForm:L,onCloseModal:c})):y("",!0)]))])]),s(z,{onClickLang:V}),W,r("div",X,[r("div",Y,[s(n,{value:t.$t("categories.title")},null,8,["value"]),s(g,{modelValue:e.item.title[i.value.activeLang],"onUpdate:modelValue":a[3]||(a[3]=o=>e.item.title[i.value.activeLang]=o),type:"text",placeholder:t.$t("categories.enter_title")},null,8,["modelValue","placeholder"])]),r("div",Z,[s(n,{value:t.$t("meta.title")},null,8,["value"]),s(g,{modelValue:e.item.meta_title[i.value.activeLang],"onUpdate:modelValue":a[4]||(a[4]=o=>e.item.meta_title[i.value.activeLang]=o),type:"text",placeholder:t.$t("meta.enter_title")},null,8,["modelValue","placeholder"])]),r("div",ee,[s(n,{value:t.$t("meta.description")},null,8,["value"]),s(f,{modelValue:e.item.meta_description[i.value.activeLang],"onUpdate:modelValue":a[5]||(a[5]=o=>e.item.meta_description[i.value.activeLang]=o),placeholder:t.$t("meta.enter_description")},null,8,["modelValue","placeholder"])]),r("div",te,[s(n,{value:t.$t("meta.keywords")},null,8,["value"]),s(f,{modelValue:e.item.meta_keyword[i.value.activeLang],"onUpdate:modelValue":a[6]||(a[6]=o=>e.item.meta_keyword[i.value.activeLang]=o),placeholder:t.$t("meta.enter_keywords")},null,8,["modelValue","placeholder"])]),r("div",ae,[s(n,{value:t.$t("seo_text")},null,8,["value"]),s(C,{"api-key":m(p).api,modelValue:e.item.seo_text[i.value.activeLang],"onUpdate:modelValue":a[7]||(a[7]=o=>e.item.seo_text[i.value.activeLang]=o),init:m(p).settings},null,8,["api-key","modelValue","init"])])])],32)}}},ne=Object.freeze(Object.defineProperty({__proto__:null,default:se},Symbol.toStringTag,{value:"Module"}));export{O as C,ne as F,se as _};