import A from"./StatisticLayout-07a4417b.js";import{s as M,e as S,_ as U}from"./Datepicker-b6a11069.js";import E from"./Table-edeb3807.js";import{r as p,f as h,o as F,s as m,v as i,y as k,D as c,p as r,k as _,j as b,u as I,g as x,i as s,z as n,F as O,x as z}from"./app-0cccff29.js";import"./app-351aedfb.js";import"./index.esm-87d59e5b.js";import"./vue-i18n.esm-bundler-7516fc44.js";import"./moment-fbc5633a.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./Logo-857fc5bc.js";const T={key:1,class:"grid grid-cols-1 gap-4"},q={class:"grid grid-cols-1 md:grid-cols-12 gap-4 mt-5"},G={class:"block col-span-2 text-center"},H={class:"block col-span-4"},J={class:"block col-span-4"},K={class:"block col-span-2 text-center"},Q={class:"grid grid-cols-2 md:grid-cols-4"},R={class:"text-center"},ce={__name:"Index",setup(W){k("$swal");const V=k("$can"),t=p({data:[],products:[],chart:null,isLoading:!0}),v=p([]),a=p({date:[],currentPage:1}),g=h(()=>{let e=[];return t.value.products.forEach(o=>{e.push(o.id)}),e.join()}),L=h(()=>{const e={};return a.value.date.length===2&&(e.date_start=a.value.date[0].toLocaleDateString(),e.date_end=a.value.date[1].toLocaleDateString()),g.value&&(e.products=g.value),e.page=a.value.currentPage,e});F(()=>{a.value.date[0]=M(new Date),a.value.date[1]=S(new Date),u(),axios.get(route("api.products.list")).then(({data:e})=>v.value=e.result).catch(e=>console.log(e))});function y(){a.value.date=[],t.value.products=[],u()}function C({h1:e,id:o}){return e.ua?e.ua+` (${o})`:e.ru?e.ru+` (${o})`:o}function P(e){e&&(a.value.currentPage=e),u()}function $(){a.value.currentPage=1,u()}function u(){t.value.isLoading=!0,axios.get(route("api.statistics.products.index",L.value)).then(({data:e})=>{t.value.data=e,t.value.isLoading=!1}).catch(e=>{console.log(e),t.value.isLoading=!1})}return(e,o)=>{const w=c("loader-component"),d=c("label-component"),f=c("button-component"),D=c("multiselect"),B=c("card-component"),N=c("pagination");return r(),m(A,{title:"Статистика товарів"},{header:i(()=>[_(" Статистика товарів ")]),default:i(()=>[t.value.isLoading?(r(),m(w,{key:0})):b("",!0),!t.value.isLoading&&I(V)("show-bookkeeping-marketing")?(r(),x("div",T,[s("div",q,[s("div",G,[n(d,{value:" "}),n(f,{type:"button",onClick:y},{default:i(()=>[_(" Очистити ")]),_:1})]),s("div",H,[n(d,{value:"Фільтр по даті"}),n(U,{modelValue:a.value.date,"onUpdate:modelValue":o[0]||(o[0]=l=>a.value.date=l)},null,8,["modelValue"])]),s("div",J,[n(d,{value:"Фільтр по менеджерам"}),n(D,{modelValue:t.value.products,"onUpdate:modelValue":o[1]||(o[1]=l=>t.value.products=l),options:v.value,"custom-label":C,placeholder:"Оберіть товари","track-by":"id",searchable:!0,"close-on-select":!1,multiple:""},null,8,["modelValue","options"])]),s("div",K,[n(d,{value:" "}),n(f,{type:"button",onClick:$},{default:i(()=>[_(" Пошук ")]),_:1})])]),s("div",Q,[(r(!0),x(O,null,z(t.value.data.generalStat,(l,j)=>(r(),m(B,{class:"text-center",title:j,description:l||"0"},null,8,["title","description"]))),256))]),n(E,{data:t.value.data.result.data},null,8,["data"]),s("div",R,[n(N,{pagination:t.value.data.result,"click-handler":P,modelValue:a.value.currentPage,"onUpdate:modelValue":o[2]||(o[2]=l=>a.value.currentPage=l)},null,8,["pagination","modelValue"])])])):b("",!0)]),_:1})}}};export{ce as default};
