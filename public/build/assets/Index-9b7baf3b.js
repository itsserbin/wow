import{_ as k}from"./Card-36606ffb.js";import{L as x}from"./Loader-3f12bd2d.js";import{_ as V}from"./Label-646a10b8.js";import{_ as $}from"./Paginate-7604e12b.js";import D from"./Chart-d8491e4a.js";import P from"./Table-43a1f465.js";import w from"./StatisticLayout-1a38d1fa.js";import{s as y,e as B,_ as M}from"./Datepicker-47ab19ec.js";import{i as N,r as u,j as c,o as C,p as o,D as l,x as f,A as S,C as d,t as b,q as v,v as m,l as i,F as j,K as F}from"./app-6d1ec759.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./Table-d4015883.js";import"./AuthenticatedLayout-53775af0.js";import"./index.esm-09a1b1ab.js";import"./Logo-7b0b10d2.js";import"./vue-i18n.esm-bundler-39f45a4f.js";import"./SidebarItem-9941fa54.js";import"./vue-datepicker-609e4dad.js";const O={key:1,class:"grid grid-cols-1 gap-4"},U={class:"block"},q={class:"grid grid-cols-2 md:grid-cols-4"},A={class:"text-center"},se={__name:"Index",setup(E){const _=N("$can"),e=u({profits:[],chart:null,isLoading:!0}),t=u({date:[],currentPage:1});u([]);const g=c(()=>{if(t.value.date.length===2)return{date_start:t.value.date[0].toLocaleDateString(),date_end:t.value.date[1].toLocaleDateString()}}),h=c(()=>t.value.last),p=c(()=>({...g.value,last:h.value,page:t.value.currentPage}));C(()=>{t.value.date[0]=y(new Date),t.value.date[1]=B(new Date),n()});function n(){e.value.isLoading=!0,axios.get(route("api.statistics.profits.index",p.value)).then(({data:a})=>{e.value.profits=a,e.value.isLoading=!1}).catch(a=>{console.log(a),e.value.isLoading=!1}),axios.get(route("api.statistics.profits.chart",p.value)).then(({data:a})=>e.value.chart=a.result).catch(a=>console.log(a))}return(a,r)=>(o(),l(w,{title:"Прибуток"},{header:f(()=>[S(" Прибуток ")]),default:f(()=>[e.value.isLoading?(o(),l(x,{key:0})):d("",!0),!e.value.isLoading&&b(_)("show-bookkeeping-profits")?(o(),v("div",O,[m("div",U,[i(V,{value:"Фільтр по даті"}),i(M,{modelValue:t.value.date,"onUpdate:modelValue":[r[0]||(r[0]=s=>t.value.date=s),n]},null,8,["modelValue"])]),e.value.chart?(o(),l(D,{key:0,"chart-data":e.value.chart},null,8,["chart-data"])):d("",!0),m("div",q,[(o(!0),v(j,null,F(e.value.profits.generalStat,(s,L)=>(o(),l(k,{class:"text-center",title:L,description:a.$filters.formatMoney(s)},null,8,["title","description"]))),256))]),i(P,{data:e.value.profits.result.data},null,8,["data"]),m("div",A,[i($,{pagination:e.value.profits.result,"click-handler":n,modelValue:t.value.currentPage,"onUpdate:modelValue":r[1]||(r[1]=s=>t.value.currentPage=s)},null,8,["pagination","modelValue"])])])):d("",!0)]),_:1}))}};export{se as default};
