import{r as V,g as $,i as n,z as a,u,K as b,y as m,D as h,p as f}from"./app-0cccff29.js";import{_ as s,a as d,g as k,i as y,j as U}from"./app-351aedfb.js";import"./index.esm-87d59e5b.js";import"./vue-i18n.esm-bundler-7516fc44.js";import"./moment-fbc5633a.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./Logo-857fc5bc.js";const L={class:"grid grid-cols-3 mb-5 gap-4"},B={class:"block col-span-2"},S={class:"block"},j=n("hr",{class:"mb-5"},null,-1),C={class:"grid grid-cols-1 rounded"},N={class:"block mb-5"},w={class:"block mb-5"},z={class:"block mb-5"},D={class:"block mb-5"},E={class:"block mb-5"},I={__name:"Form",props:["item"],setup(l){const r=m("$tiny"),v=m("$defaultLang"),c=m("$publishedStatuses"),i=V(v),p=t=>{i.value=t};return(t,e)=>{const g=h("editor");return f(),$("form",{onSubmit:e[7]||(e[7]=b(o=>t.$emit("submit",l.item),["prevent"])),class:"flex flex-col"},[n("div",L,[n("div",B,[a(s,{value:t.$t("slug")},null,8,["value"]),a(d,{modelValue:l.item.slug,"onUpdate:modelValue":e[0]||(e[0]=o=>l.item.slug=o),type:"text",placeholder:t.$t("enter_slug")},null,8,["modelValue","placeholder"])]),n("div",S,[a(s,{value:t.$t("published")},null,8,["value"]),a(k,{modelValue:l.item.published,"onUpdate:modelValue":e[1]||(e[1]=o=>l.item.published=o),options:u(c)},null,8,["modelValue","options"])])]),a(U,{onClickLang:p}),j,n("div",C,[n("div",N,[a(s,{value:t.$t("pages.heading")},null,8,["value"]),a(d,{modelValue:l.item.heading[i.value],"onUpdate:modelValue":e[2]||(e[2]=o=>l.item.heading[i.value]=o),type:"text",placeholder:t.$t("pages.enter_heading")},null,8,["modelValue","placeholder"])]),n("div",w,[a(s,{value:t.$t("pages.h1")},null,8,["value"]),a(d,{modelValue:l.item.h1[i.value],"onUpdate:modelValue":e[3]||(e[3]=o=>l.item.h1[i.value]=o),type:"text",placeholder:t.$t("pages.enter_h1")},null,8,["modelValue","placeholder"])]),n("div",z,[a(s,{value:t.$t("meta.title")},null,8,["value"]),a(d,{modelValue:l.item.meta_title[i.value],"onUpdate:modelValue":e[4]||(e[4]=o=>l.item.meta_title[i.value]=o),type:"text",placeholder:t.$t("meta.enter_title")},null,8,["modelValue","placeholder"])]),n("div",D,[a(s,{value:t.$t("meta.description")},null,8,["value"]),a(y,{modelValue:l.item.meta_description[i.value],"onUpdate:modelValue":e[5]||(e[5]=o=>l.item.meta_description[i.value]=o),placeholder:t.$t("meta.enter_description")},null,8,["modelValue","placeholder"])]),n("div",E,[a(s,{value:t.$t("seo_text")},null,8,["value"]),a(g,{"api-key":u(r).api,modelValue:l.item.content[i.value],"onUpdate:modelValue":e[6]||(e[6]=o=>l.item.content[i.value]=o),init:u(r).settings},null,8,["api-key","modelValue","init"])])])],32)}}};export{I as default};
