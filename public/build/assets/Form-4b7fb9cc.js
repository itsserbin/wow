import{i as m,r as g,p as V,q as f,v as s,l as a,t as d,z as $}from"./app-f55448cf.js";import{_ as n}from"./Label-fa7af1d1.js";import{_ as u}from"./Input-4fdb1b47.js";import{_ as b}from"./Textarea-faf312b0.js";import{_ as h}from"./Select-35904355.js";import{_ as k}from"./LangTabs-9ee1a6bd.js";import{E as y}from"./Editor-113ec15f.js";const U={class:"grid grid-cols-3 mb-5 gap-4"},L={class:"block col-span-2"},B={class:"block"},E=s("hr",{class:"mb-5"},null,-1),S={class:"grid grid-cols-1 rounded"},N={class:"block mb-5"},j={class:"block mb-5"},q={class:"block mb-5"},w={class:"block mb-5"},z={class:"block mb-5"},I={__name:"Form",props:["item"],setup(l){const r=m("$tiny"),v=m("$defaultLang"),c=m("$publishedStatuses"),i=g(v),p=t=>{i.value=t};return(t,e)=>(V(),f("form",{onSubmit:e[7]||(e[7]=$(o=>t.$emit("submit",l.item),["prevent"])),class:"flex flex-col"},[s("div",U,[s("div",L,[a(n,{value:t.$t("slug")},null,8,["value"]),a(u,{modelValue:l.item.slug,"onUpdate:modelValue":e[0]||(e[0]=o=>l.item.slug=o),type:"text",placeholder:t.$t("enter_slug")},null,8,["modelValue","placeholder"])]),s("div",B,[a(n,{value:t.$t("published")},null,8,["value"]),a(h,{modelValue:l.item.published,"onUpdate:modelValue":e[1]||(e[1]=o=>l.item.published=o),options:d(c)},null,8,["modelValue","options"])])]),a(k,{onClickLang:p}),E,s("div",S,[s("div",N,[a(n,{value:t.$t("pages.heading")},null,8,["value"]),a(u,{modelValue:l.item.heading[i.value],"onUpdate:modelValue":e[2]||(e[2]=o=>l.item.heading[i.value]=o),type:"text",placeholder:t.$t("pages.enter_heading")},null,8,["modelValue","placeholder"])]),s("div",j,[a(n,{value:t.$t("pages.h1")},null,8,["value"]),a(u,{modelValue:l.item.h1[i.value],"onUpdate:modelValue":e[3]||(e[3]=o=>l.item.h1[i.value]=o),type:"text",placeholder:t.$t("pages.enter_h1")},null,8,["modelValue","placeholder"])]),s("div",q,[a(n,{value:t.$t("meta.title")},null,8,["value"]),a(u,{modelValue:l.item.meta_title[i.value],"onUpdate:modelValue":e[4]||(e[4]=o=>l.item.meta_title[i.value]=o),type:"text",placeholder:t.$t("meta.enter_title")},null,8,["modelValue","placeholder"])]),s("div",w,[a(n,{value:t.$t("meta.description")},null,8,["value"]),a(b,{modelValue:l.item.meta_description[i.value],"onUpdate:modelValue":e[5]||(e[5]=o=>l.item.meta_description[i.value]=o),placeholder:t.$t("meta.enter_description")},null,8,["modelValue","placeholder"])]),s("div",z,[a(n,{value:t.$t("seo_text")},null,8,["value"]),a(d(y),{"api-key":d(r).api,modelValue:l.item.content[i.value],"onUpdate:modelValue":e[6]||(e[6]=o=>l.item.content[i.value]=o),init:d(r).settings},null,8,["api-key","modelValue","init"])])])],32))}};export{I as default};