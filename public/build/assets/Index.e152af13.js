import $ from"./Chart.ed62762a.js";import w from"./StatisticLayout.9cc76a37.js";import{s as P,e as y,_ as B}from"./Datepicker.27cc4262.js";import M from"./Table.8e50b745.js";import{w as p,x as b,S as D,Q as l,K as _,X as g,H as r,F as o,P as d,B as N,y as v,z as u,J as c,M as S,O as C,L as O}from"./___vite-browser-external_commonjs-proxy.4f2b06be.js";import"./index.5319b6af.js";import"./app.460df568.js";const F=O(" \u041C\u0430\u0440\u043A\u0435\u0442\u0438\u043D\u0433\u043E\u0432\u0430 \u0441\u0442\u0430\u0442\u0438\u0441\u0442\u0438\u043A\u0430 "),U={key:1,class:"grid grid-cols-1 gap-4"},j={class:"block"},z={class:"grid grid-cols-2 md:grid-cols-4"},E={class:"text-center"},A={__name:"Index",setup(H){g("$swal");const f=g("$can"),a=p({data:[],chart:null,isLoading:!0}),t=p({date:[],currentPage:1}),m=b(()=>{const e={};return t.value.date.length===2&&(e.date_start=t.value.date[0].toLocaleDateString(),e.date_end=t.value.date[1].toLocaleDateString()),e.page=t.value.currentPage,e});D(()=>{t.value.date[0]=P(new Date),t.value.date[1]=y(new Date),i()});function i(){a.value.isLoading=!0,axios.get(route("api.statistics.marketing.index",m.value)).then(({data:e})=>{a.value.data=e,a.value.isLoading=!1}).catch(e=>{console.log(e),a.value.isLoading=!1}),axios.get(route("api.statistics.marketing.chart",m.value)).then(({data:e})=>a.value.chart=e.result).catch(e=>console.log(e))}return(e,s)=>{const h=r("loader-component"),k=r("label-component"),x=r("card-component"),L=r("pagination");return o(),l(w,{title:"\u041C\u0430\u0440\u043A\u0435\u0442\u0438\u043D\u0433\u043E\u0432\u0430 \u0441\u0442\u0430\u0442\u0438\u0441\u0442\u0438\u043A\u0430"},{header:_(()=>[F]),default:_(()=>[a.value.isLoading?(o(),l(h,{key:0})):d("",!0),!a.value.isLoading&&N(f)("show-bookkeeping-marketing")?(o(),v("div",U,[u("div",j,[c(k,{value:"\u0424\u0456\u043B\u044C\u0442\u0440 \u043F\u043E \u0434\u0430\u0442\u0456"}),c(B,{modelValue:t.value.date,"onUpdate:modelValue":[s[0]||(s[0]=n=>t.value.date=n),i]},null,8,["modelValue"])]),a.value.chart?(o(),l($,{key:0,"chart-data":a.value.chart},null,8,["chart-data"])):d("",!0),u("div",z,[(o(!0),v(S,null,C(a.value.data.generalStat,(n,V)=>(o(),l(x,{class:"text-center",title:V,description:e.$filters.formatMoney(n)},null,8,["title","description"]))),256))]),c(M,{data:a.value.data.result.data},null,8,["data"]),u("div",E,[c(L,{pagination:a.value.data.result,"click-handler":i,modelValue:t.value.currentPage,"onUpdate:modelValue":s[1]||(s[1]=n=>t.value.currentPage=n)},null,8,["pagination","modelValue"])])])):d("",!0)]),_:1})}}};export{A as default};
