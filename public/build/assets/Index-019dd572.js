import{_ as f}from"./Button-3f74bcad.js";import{_ as y}from"./Paginate-b71b7269.js";import{_ as D}from"./Card-ec829b36.js";import{_ as i}from"./Label-fa7af1d1.js";import{L as M}from"./Loader-8bf33617.js";import w from"./StatisticLayout-99ba8621.js";import{s as A,e as B,_ as N}from"./Datepicker-5f10a97a.js";import j from"./Table-e480ba93.js";import{M as S}from"./Multiselect-325a47ec.js";import{i as U,r as d,j as g,o as E,p as n,D as p,x as c,A as m,C as h,t as F,q as k,v as r,l as s,F as I,K as O}from"./app-f55448cf.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./AuthenticatedLayout-ecf8db9d.js";import"./index.esm-f21e1dfa.js";import"./Logo-edac3a30.js";import"./vue-i18n.esm-bundler-d070be13.js";import"./SidebarItem-eda03439.js";import"./vue-datepicker-3843f364.js";import"./Table-6800669f.js";const q={key:1,class:"grid grid-cols-1 gap-4"},K={class:"grid grid-cols-1 md:grid-cols-12 gap-4 mt-5"},T={class:"block col-span-2 text-center"},z={class:"block col-span-4"},G={class:"block col-span-4"},H={class:"block col-span-2 text-center"},J={class:"grid grid-cols-2 md:grid-cols-4"},Q={class:"text-center"},ve={__name:"Index",setup(R){const x=U("$can"),t=d({data:[],products:[],chart:null,isLoading:!0}),v=d([]),a=d({date:[],currentPage:1}),_=g(()=>{let e=[];return t.value.products.forEach(o=>{e.push(o.id)}),e.join()}),V=g(()=>{const e={};return a.value.date.length===2&&(e.date_start=a.value.date[0].toLocaleDateString(),e.date_end=a.value.date[1].toLocaleDateString()),_.value&&(e.products=_.value),e.page=a.value.currentPage,e});E(()=>{a.value.date[0]=A(new Date),a.value.date[1]=B(new Date),u(),axios.get(route("api.products.list")).then(({data:e})=>v.value=e.result).catch(e=>console.log(e))});function L(){a.value.date=[],t.value.products=[],u()}function b({h1:e,id:o}){return e.ua?e.ua+` (${o})`:e.ru?e.ru+` (${o})`:o}function $(e){e&&(a.value.currentPage=e),u()}function C(){a.value.currentPage=1,u()}function u(){t.value.isLoading=!0,axios.get(route("api.statistics.products.index",V.value)).then(({data:e})=>{t.value.data=e,t.value.isLoading=!1}).catch(e=>{console.log(e),t.value.isLoading=!1})}return(e,o)=>(n(),p(w,{title:"Статистика товарів"},{header:c(()=>[m(" Статистика товарів ")]),default:c(()=>[t.value.isLoading?(n(),p(M,{key:0})):h("",!0),!t.value.isLoading&&F(x)("show-bookkeeping-marketing")?(n(),k("div",q,[r("div",K,[r("div",T,[s(i,{value:" "}),s(f,{type:"button",onClick:L},{default:c(()=>[m(" Очистити ")]),_:1})]),r("div",z,[s(i,{value:"Фільтр по даті"}),s(N,{modelValue:a.value.date,"onUpdate:modelValue":o[0]||(o[0]=l=>a.value.date=l)},null,8,["modelValue"])]),r("div",G,[s(i,{value:"Фільтр по менеджерам"}),s(S,{modelValue:t.value.products,"onUpdate:modelValue":o[1]||(o[1]=l=>t.value.products=l),options:v.value,"custom-label":b,placeholder:"Оберіть товари","track-by":"id",searchable:!0,"close-on-select":!1,multiple:""},null,8,["modelValue","options"])]),r("div",H,[s(i,{value:" "}),s(f,{type:"button",onClick:C},{default:c(()=>[m(" Пошук ")]),_:1})])]),r("div",J,[(n(!0),k(I,null,O(t.value.data.generalStat,(l,P)=>(n(),p(D,{class:"text-center",title:P,description:l||"0"},null,8,["title","description"]))),256))]),s(j,{data:t.value.data.result.data},null,8,["data"]),r("div",Q,[s(y,{pagination:t.value.data.result,"click-handler":$,modelValue:a.value.currentPage,"onUpdate:modelValue":o[2]||(o[2]=l=>a.value.currentPage=l)},null,8,["pagination","modelValue"])])])):h("",!0)]),_:1}))}};export{ve as default};