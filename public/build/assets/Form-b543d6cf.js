import{_ as i}from"./Label-fa7af1d1.js";import{_ as m}from"./Input-4fdb1b47.js";import{_ as d}from"./Select-35904355.js";import{i as n,p as r,q as u,v as s,l as o,t as c}from"./app-f55448cf.js";const p={class:"grid grid-cols-1 mb-5"},_={class:"block mr-2"},f={class:"grid grid-cols-1 mb-5"},b={class:"block mr-2"},$={__name:"Form",props:["item"],setup(e){const a=n("$publishedStatuses");return(V,t)=>(r(),u("form",null,[s("div",p,[s("div",_,[o(i,{value:"Статус публікації"}),o(d,{modelValue:e.item.published,"onUpdate:modelValue":t[0]||(t[0]=l=>e.item.published=l),options:c(a)},null,8,["modelValue","options"])])]),s("div",f,[s("div",b,[o(i,{value:"Назва"}),o(m,{modelValue:e.item.title,"onUpdate:modelValue":t[1]||(t[1]=l=>e.item.title=l),type:"text"},null,8,["modelValue"])])])]))}};export{$ as default};