import{_ as s}from"./Label-646a10b8.js";import{_ as i}from"./Input-335d7e3d.js";import{r as m,o as n,p as c,q as r,v as a,l}from"./app-6d1ec759.js";const V={class:"grid grid-cols-1 gap-4"},f={class:"block"},v={class:"block"},g={class:"block"},y={__name:"Form",props:["item"],setup(t){const u=m([]);return n(async()=>{await axios.get(route("api.statistics.costs.categories.list")).then(({data:d})=>{d.result.forEach(e=>{u.value.push({key:e.id,value:e.title})})})}),(d,e)=>(c(),r("form",null,[a("div",V,[a("div",f,[l(s,{value:"Назва"}),l(i,{modelValue:t.item.title,"onUpdate:modelValue":e[0]||(e[0]=o=>t.item.title=o),type:"text"},null,8,["modelValue"])]),a("div",v,[l(s,{value:"Код транзації в банку"}),l(i,{modelValue:t.item.code,"onUpdate:modelValue":e[1]||(e[1]=o=>t.item.code=o),type:"text"},null,8,["modelValue"])]),a("div",g,[l(s,{value:"Slug"}),l(i,{modelValue:t.item.slug,"onUpdate:modelValue":e[2]||(e[2]=o=>t.item.slug=o),type:"text"},null,8,["modelValue"])])])]))}};export{y as default};
