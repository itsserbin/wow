import $ from"./Chart.5242b2d1.js";import P from"./StatisticLayout.de6fce46.js";import{s as w,e as y,_ as D}from"./Datepicker.e4c62f5d.js";import M from"./Table.513f9530.js";import{y as p,z as b,G as B,a0 as l,W as _,S as o,Z as d,P as N,L as g,M as u,K as r,F as S,Y as C,X as F,D as v,$ as c}from"./___vite-browser-external_commonjs-proxy.bd54111c.js";import"./index.6f821958.js";import"./app.79417ded.js";const O=F(" \u041C\u0430\u0440\u043A\u0435\u0442\u0438\u043D\u0433\u043E\u0432\u0430 \u0441\u0442\u0430\u0442\u0438\u0441\u0442\u0438\u043A\u0430 "),U={key:1,class:"grid grid-cols-1 gap-4"},j={class:"block"},z={class:"grid grid-cols-2 md:grid-cols-4"},E={class:"text-center"},q={__name:"Index",setup(G){v("$swal");const f=v("$can"),a=p({data:[],chart:null,isLoading:!0}),t=p({date:[],currentPage:1}),m=b(()=>{const e={};return t.value.date.length===2&&(e.date_start=t.value.date[0].toLocaleDateString(),e.date_end=t.value.date[1].toLocaleDateString()),e.page=t.value.currentPage,e});B(()=>{t.value.date[0]=w(new Date),t.value.date[1]=y(new Date),i()});function i(){a.value.isLoading=!0,axios.get(route("api.statistics.marketing.index",m.value)).then(({data:e})=>{a.value.data=e,a.value.isLoading=!1}).catch(e=>{console.log(e),a.value.isLoading=!1}),axios.get(route("api.statistics.marketing.chart",m.value)).then(({data:e})=>a.value.chart=e.result).catch(e=>console.log(e))}return(e,s)=>{const h=c("loader-component"),k=c("label-component"),L=c("card-component"),V=c("pagination");return o(),l(P,{title:"\u041C\u0430\u0440\u043A\u0435\u0442\u0438\u043D\u0433\u043E\u0432\u0430 \u0441\u0442\u0430\u0442\u0438\u0441\u0442\u0438\u043A\u0430"},{header:_(()=>[O]),default:_(()=>[a.value.isLoading?(o(),l(h,{key:0})):d("",!0),!a.value.isLoading&&N(f)("show-bookkeeping-marketing")?(o(),g("div",U,[u("div",j,[r(k,{value:"\u0424\u0456\u043B\u044C\u0442\u0440 \u043F\u043E \u0434\u0430\u0442\u0456"}),r(D,{modelValue:t.value.date,"onUpdate:modelValue":[s[0]||(s[0]=n=>t.value.date=n),i]},null,8,["modelValue"])]),a.value.chart?(o(),l($,{key:0,"chart-data":a.value.chart},null,8,["chart-data"])):d("",!0),u("div",z,[(o(!0),g(S,null,C(a.value.data.generalStat,(n,x)=>(o(),l(L,{class:"text-center",title:x,description:e.$filters.formatMoney(n)},null,8,["title","description"]))),256))]),r(M,{data:a.value.data.result.data},null,8,["data"]),u("div",E,[r(V,{pagination:a.value.data.result,"click-handler":i,modelValue:t.value.currentPage,"onUpdate:modelValue":s[1]||(s[1]=n=>t.value.currentPage=n)},null,8,["pagination","modelValue"])])])):d("",!0)]),_:1})}}};export{q as default};