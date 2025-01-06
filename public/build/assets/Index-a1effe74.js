import{_ as v}from"./Paginate-01527c78.js";import{_ as h}from"./Card-d700085f.js";import{_ as k}from"./Label-20131f4c.js";import{L}from"./Loader-ccf6e4ba.js";import x from"./Chart-8529e800.js";import V from"./StatisticLayout-af991e7b.js";import $ from"./Datepicker-1dfd351e.js";import w from"./Table-3a366bb0.js";import{s as y,e as N}from"./index-7a810988.js";import{N as P,k as m,z as B,o as D,l as o,s as i,y as p,w as M,t as d,x as S,m as g,p as u,n as l,F as b,q as C}from"./index-a01126e2.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./chart-10c086bf.js";import"./AuthenticatedLayout-704e8f94.js";import"./index.esm-02fff71f.js";import"./Logo-83ffc10f.js";import"./SidebarItem-446a46b0.js";import"./isDark-c828c264.js";import"./vue-datepicker-3bdc29fb.js";import"./index-2cbe9ca3.js";import"./Table-fe1ca8dd.js";const F={key:1,class:"grid grid-cols-1 gap-4"},O={class:"block"},U={class:"grid grid-cols-2 md:grid-cols-4"},j={class:"text-center"},sa={__name:"Index",setup(q){const f=P("$can"),e=m({data:[],chart:null,isLoading:!0}),t=m({date:[],currentPage:1}),c=B(()=>{const a={};return t.value.date.length===2&&(a.date_start=t.value.date[0].toLocaleDateString(),a.date_end=t.value.date[1].toLocaleDateString()),a.page=t.value.currentPage,a});D(()=>{t.value.date[0]=y(new Date),t.value.date[1]=N(new Date),n()});function n(){e.value.isLoading=!0,axios.get(route("api.statistics.marketing.index",c.value)).then(({data:a})=>{e.value.data=a,e.value.isLoading=!1}).catch(a=>{console.log(a),e.value.isLoading=!1}),axios.get(route("api.statistics.marketing.chart",c.value)).then(({data:a})=>e.value.chart=a.result).catch(a=>console.log(a))}return(a,s)=>(o(),i(V,{title:"Маркетингова статистика"},{header:p(()=>[M(" Маркетингова статистика ")]),default:p(()=>[e.value.isLoading?(o(),i(L,{key:0})):d("",!0),!e.value.isLoading&&S(f)("show-bookkeeping-marketing")?(o(),g("div",F,[u("div",O,[l(k,{value:"Фільтр по даті"}),l($,{modelValue:t.value.date,"onUpdate:modelValue":[s[0]||(s[0]=r=>t.value.date=r),n]},null,8,["modelValue"])]),e.value.chart?(o(),i(x,{key:0,"chart-data":e.value.chart},null,8,["chart-data"])):d("",!0),u("div",U,[(o(!0),g(b,null,C(e.value.data.generalStat,(r,_)=>(o(),i(h,{class:"text-center",title:_,description:a.$filters.formatMoney(r)},null,8,["title","description"]))),256))]),l(w,{data:e.value.data.result.data},null,8,["data"]),u("div",j,[l(v,{pagination:e.value.data.result,"click-handler":n,modelValue:t.value.currentPage,"onUpdate:modelValue":s[1]||(s[1]=r=>t.value.currentPage=r)},null,8,["pagination","modelValue"])])])):d("",!0)]),_:1}))}};export{sa as default};