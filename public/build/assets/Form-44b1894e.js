import{r as g,o as k,g as i,i as s,z as o,A as v,B as f,j as y,F as x,D as p,p as r}from"./app-85fc3642.js";import{a as d,_ as m}from"./app-739a5adb.js";import"./vue-i18n.esm-bundler-b26da7fc.js";import"./moment-fbc5633a.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./Logo-39ed68e3.js";const $={class:"block mb-5"},U={class:"block mb-5"},B={class:"block mb-5"},C={class:"block mb-5"},z={class:"block mb-5"},A={class:"flex items-center mb-4"},F=s("label",{for:"resale",class:"ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"},"Додаткова продажа",-1),N={key:0,class:"block mb-5"},I={__name:"Form",props:["item"],setup(l){const n=g([]);k(()=>{axios.get(route("api.products.list")).then(({data:a})=>n.value=a.result).catch(a=>console.log(a))});const c=({h1:a,id:e,vendor_code:u})=>{const t=a?a.ua?a.ua:a.ru:"",b=t&&e?" - ":"",V=u?`${u}/`:"";return`${t}${b}${V}${e}`};return(a,e)=>{const u=p("multiselect");return r(),i(x,null,[s("div",$,[o(m,{value:"Товар"}),o(u,{options:n.value,modelValue:l.item.product_id,"onUpdate:modelValue":e[0]||(e[0]=t=>l.item.product_id=t),"custom-label":c,class:"mb-5","track-by":"id","close-on-select":!0,searchable:!0},null,8,["options","modelValue"])]),s("div",U,[o(m,{value:"Розмір"}),o(d,{modelValue:l.item.size,"onUpdate:modelValue":e[1]||(e[1]=t=>l.item.size=t),type:"text"},null,8,["modelValue"])]),s("div",B,[o(m,{value:"Колір"}),o(d,{modelValue:l.item.color,"onUpdate:modelValue":e[2]||(e[2]=t=>l.item.color=t),type:"text"},null,8,["modelValue"])]),s("div",C,[o(m,{value:"Кількість"}),o(d,{modelValue:l.item.count,"onUpdate:modelValue":e[3]||(e[3]=t=>l.item.count=t),type:"number"},null,8,["modelValue"])]),s("div",z,[s("div",A,[v(s("input",{id:"resale","onUpdate:modelValue":e[4]||(e[4]=t=>l.item.resale=t),type:"checkbox",class:"w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"},null,512),[[f,l.item.resale]]),F])]),l.item.resale?(r(),i("div",N,[o(m,{value:"Сума знижки (грн.)"}),o(d,{modelValue:l.item.discount,"onUpdate:modelValue":e[5]||(e[5]=t=>l.item.discount=t),type:"number"},null,8,["modelValue"])])):y("",!0)],64)}}};export{I as default};