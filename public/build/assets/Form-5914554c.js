import{_ as m}from"./Label-646a10b8.js";import{_ as n}from"./Input-335d7e3d.js";import{M as r}from"./Multiselect-55904e29.js";import{r as u,o as d,p as c,q as p,v as a,l as o}from"./app-6d1ec759.js";import"./_plugin-vue_export-helper-c27b6911.js";const f={class:"grid grid-cols-1 gap-4"},V={class:"block"},g={class:"block"},v={class:"block"},B={__name:"Form",props:["item"],setup(e){const i=u([]);return d(async()=>{await axios.get(route("api.permissions.list")).then(({data:s})=>i.value=s.result).catch(s=>console.log(s))}),(s,l)=>(c(),p("form",f,[a("div",V,[o(m,{value:"Назва"}),o(n,{modelValue:e.item.name,"onUpdate:modelValue":l[0]||(l[0]=t=>e.item.name=t),type:"text"},null,8,["modelValue"])]),a("div",g,[o(m,{value:"Slug"}),o(n,{modelValue:e.item.slug,"onUpdate:modelValue":l[1]||(l[1]=t=>e.item.slug=t),type:"text"},null,8,["modelValue"])]),a("div",v,[o(r,{options:i.value,modelValue:e.item.permissions,"onUpdate:modelValue":l[2]||(l[2]=t=>e.item.permissions=t),label:"name","track-by":"id",searchable:!0,multiple:!0,"close-on-select":!1,"clear-on-select":!1},null,8,["options","modelValue"])])]))}};export{B as default};
