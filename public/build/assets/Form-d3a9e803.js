import{_ as m}from"./Label-20131f4c.js";import{_ as c}from"./Select-c098c0c0.js";import{_ as d}from"./Textarea-cb91500a.js";import{_ as r}from"./UploadImagesInput-5c733d39.js";import{N as p,k as f,o as _,l as b,m as v,p as a,n as o,x as V}from"./index-a01126e2.js";import"./Loader-ccf6e4ba.js";import"./_plugin-vue_export-helper-c27b6911.js";const h={class:"flex flex-col"},g={class:"block mb-5"},k={class:"block mb-5"},x={class:"block mb-5"},j={__name:"Form",props:["item"],setup(e){const i=p("$publishedStatuses"),n=f([]);_(()=>{axios.get(route("api.products.list")).then(({data:t})=>n.value=t.result).catch(t=>console.log(t))});function u(){}return(t,s)=>(b(),v("form",h,[a("div",g,[o(m,{value:"Статус публікації"}),o(c,{modelValue:e.item.published,"onUpdate:modelValue":s[0]||(s[0]=l=>e.item.published=l),options:V(i)},null,8,["modelValue","options"])]),a("div",k,[o(m,{value:"Текст відгука"}),o(d,{modelValue:e.item.comment,"onUpdate:modelValue":s[1]||(s[1]=l=>e.item.comment=l),rows:"4"},null,8,["modelValue"])]),a("div",x,[o(r,{multiple:!1,id:"uploadCategoryPreview",label:"Зображення",onUpload:u,images:e.item.image},null,8,["images"])])]))}};export{j as default};
