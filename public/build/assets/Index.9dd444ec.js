import N from"./Chart.9b9d8de6.js";import P from"./Table.1c88ed40.js";import b from"./StatisticLayout.829fe199.js";import{s as y,e as B,_ as C}from"./Datepicker.064e8333.js";import{r as u,p as d,o as M,C as l,D as v,G as g,N as r,A as o,v as p,u as S,q as f,s as m,H as i,F as E,E as F,x as O}from"./index.a7093408.js";import"./index.44493187.js";import"./app.2e971e05.js";import"./moment.9709ab41.js";import"./_plugin-vue_export-helper.cdc0426e.js";import"./lazyload.6866379a.js";import"./Logo.1a198c8c.js";const U=O(" \u041F\u0440\u0438\u0431\u0443\u0442\u043E\u043A "),j={key:1,class:"grid grid-cols-1 gap-4"},q={class:"block"},A={class:"grid grid-cols-2 md:grid-cols-4"},G={class:"text-center"},ee={__name:"Index",setup(H){g("$swal");const h=g("$can"),e=u({profits:[],chart:null,isLoading:!0}),t=u({date:[],currentPage:1});u([]);const k=d(()=>{if(t.value.date.length===2)return{date_start:t.value.date[0].toLocaleDateString(),date_end:t.value.date[1].toLocaleDateString()}}),x=d(()=>t.value.last),_=d(()=>({...k.value,last:x.value,page:t.value.currentPage}));M(()=>{t.value.date[0]=y(new Date),t.value.date[1]=B(new Date),c()});function c(){e.value.isLoading=!0,axios.get(route("api.statistics.profits.index",_.value)).then(({data:a})=>{e.value.profits=a,e.value.isLoading=!1}).catch(a=>{console.log(a),e.value.isLoading=!1}),axios.get(route("api.statistics.profits.chart",_.value)).then(({data:a})=>e.value.chart=a.result).catch(a=>console.log(a))}return(a,s)=>{const V=r("loader-component"),L=r("label-component"),$=r("card-component"),w=r("pagination");return o(),l(b,{title:"\u041F\u0440\u0438\u0431\u0443\u0442\u043E\u043A"},{header:v(()=>[U]),default:v(()=>[e.value.isLoading?(o(),l(V,{key:0})):p("",!0),!e.value.isLoading&&S(h)("show-bookkeeping-profits")?(o(),f("div",j,[m("div",q,[i(L,{value:"\u0424\u0456\u043B\u044C\u0442\u0440 \u043F\u043E \u0434\u0430\u0442\u0456"}),i(C,{modelValue:t.value.date,"onUpdate:modelValue":[s[0]||(s[0]=n=>t.value.date=n),c]},null,8,["modelValue"])]),e.value.chart?(o(),l(N,{key:0,"chart-data":e.value.chart},null,8,["chart-data"])):p("",!0),m("div",A,[(o(!0),f(E,null,F(e.value.profits.generalStat,(n,D)=>(o(),l($,{class:"text-center",title:D,description:a.$filters.formatMoney(n)},null,8,["title","description"]))),256))]),i(P,{data:e.value.profits.result.data},null,8,["data"]),m("div",G,[i(w,{pagination:e.value.profits.result,"click-handler":c,modelValue:t.value.currentPage,"onUpdate:modelValue":s[1]||(s[1]=n=>t.value.currentPage=n)},null,8,["pagination","modelValue"])])])):p("",!0)]),_:1})}}};export{ee as default};
