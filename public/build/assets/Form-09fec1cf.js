import{_ as t}from"./Label-646a10b8.js";import{_ as d}from"./Input-335d7e3d.js";import{M as n}from"./Multiselect-55904e29.js";import{r,o as u,p as c,q as V,v as s,l as o}from"./app-6d1ec759.js";import"./_plugin-vue_export-helper-c27b6911.js";const p={class:"grid grid-cols-1 gap-4"},v={class:"grid grid-cols-1 md:grid-cols-2 gap-4"},f={class:"block"},g={class:"block"},b={class:"block"},k={class:"grid grid-cols-1 md:grid-cols-2 gap-4"},w={class:"block"},y={class:"block"},E={__name:"Form",props:["item"],setup(e){const m=r([]);return u(async()=>{await axios.get(route("api.roles.list")).then(({data:i})=>m.value=i.result).catch(i=>console.error(i))}),(i,l)=>(c(),V("form",p,[s("div",v,[s("div",f,[o(t,{value:"Назва"}),o(d,{modelValue:e.item.name,"onUpdate:modelValue":l[0]||(l[0]=a=>e.item.name=a),type:"text"},null,8,["modelValue"])]),s("div",g,[o(t,{value:"Email"}),o(d,{modelValue:e.item.email,"onUpdate:modelValue":l[1]||(l[1]=a=>e.item.email=a),type:"email"},null,8,["modelValue"])])]),s("div",b,[o(t,{value:"Ролі"}),o(n,{options:m.value,modelValue:e.item.roles,"onUpdate:modelValue":l[2]||(l[2]=a=>e.item.roles=a),label:"name",placeholder:"Оберіть ролі","track-by":"id","close-on-select":!1,searchable:!0,multiple:""},null,8,["options","modelValue"])]),s("div",k,[s("div",w,[o(t,{value:"Новий пароль"}),o(d,{modelValue:e.item.password,"onUpdate:modelValue":l[3]||(l[3]=a=>e.item.password=a),type:"password"},null,8,["modelValue"])]),s("div",y,[o(t,{value:"Підтвердження паролю"}),o(d,{modelValue:e.item.password_confirmation,"onUpdate:modelValue":l[4]||(l[4]=a=>e.item.password_confirmation=a),type:"password"},null,8,["modelValue"])])])]))}};export{E as default};
