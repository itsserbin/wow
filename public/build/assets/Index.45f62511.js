import x from"./Chart.1f31c78d.js";import V from"./Table.afb22662.js";import L from"./Indicators.0af40fb2.js";import $ from"./StatisticLayout.1151f9a1.js";import w from"./Datepicker.56195765.js";import{p as c,f as B,q as P,ah as b,ai as D,m as d,w as p,v as _,B as u,o as s,j as m,u as N,g as y,i as v,x as o,k as C}from"./vendor.baa499d2.js";import"./index.2e276325.js";import"./__commonjsHelpers__.488ed5c2.js";import"./app.1c4fbfa0.js";import"./vue.m.8e70aa70.js";import"./bootstrap.2c4b2a4d.js";import"./_plugin-vue_export-helper.cdc0426e.js";import"./Logo.6344e541.js";const M=C(" \u0421\u0442\u0430\u0442\u0438\u0441\u0442\u0438\u043A\u0430 \u0437\u0430\u044F\u0432\u043E\u043A "),j={key:1,class:"grid grid-cols-1 gap-4"},O={class:"block"},S={class:"text-center"},W={__name:"Index",setup(U){_("$swal");const g=_("$can"),a=c({orders:[],chart:null,indicators:null,isLoading:!0}),t=c({date:[],currentPage:1});c([]);const r=B(()=>{const e={};return t.value.date.length===2&&(e.date_start=t.value.date[0].toLocaleDateString(),e.date_end=t.value.date[1].toLocaleDateString()),e.page=t.value.currentPage,e});P(()=>{t.value.date[0]=b(new Date),t.value.date[1]=D(new Date),l()});function l(){a.value.isLoading=!0,axios.get(route("api.statistics.orders.index",r.value)).then(({data:e})=>{a.value.orders=e,a.value.isLoading=!1}).catch(e=>{console.log(e),a.value.isLoading=!1}),axios.get(route("api.statistics.orders.chart",r.value)).then(({data:e})=>a.value.chart=e.result).catch(e=>console.log(e)),axios.get(route("api.statistics.orders.indicators",r.value)).then(({data:e})=>a.value.indicators=e.result).catch(e=>console.log(e))}return(e,n)=>{const f=u("loader-component"),h=u("label-component"),k=u("pagination");return s(),d($,{title:"\u0421\u0442\u0430\u0442\u0438\u0441\u0442\u0438\u043A\u0430 \u0437\u0430\u044F\u0432\u043E\u043A"},{header:p(()=>[M]),default:p(()=>[a.value.isLoading?(s(),d(f,{key:0})):m("",!0),!a.value.isLoading&&N(g)("show-bookkeeping-orders")?(s(),y("div",j,[v("div",O,[o(h,{value:"\u0424\u0456\u043B\u044C\u0442\u0440 \u043F\u043E \u0434\u0430\u0442\u0456"}),o(w,{modelValue:t.value.date,"onUpdate:modelValue":[n[0]||(n[0]=i=>t.value.date=i),l]},null,8,["modelValue"])]),a.value.chart?(s(),d(x,{key:0,"chart-data":a.value.chart},null,8,["chart-data"])):m("",!0),o(L,{data:a.value.indicators},null,8,["data"]),o(V,{data:a.value.orders.result.data},null,8,["data"]),v("div",S,[o(k,{pagination:a.value.orders.result,"click-handler":l,modelValue:t.value.currentPage,"onUpdate:modelValue":n[1]||(n[1]=i=>t.value.currentPage=i)},null,8,["pagination","modelValue"])])])):m("",!0)]),_:1})}}};export{W as default};