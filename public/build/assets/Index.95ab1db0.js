import V from"./Chart.c1c1f12c.js";import k from"./Table.afddf5d9.js";import L from"./Indicators.e3019dae.js";import $ from"./StatisticLayout.7f00aefd.js";import{s as w,e as P,_ as B}from"./Datepicker.ccdcba4e.js";import{w as i,x as b,U as y,Q as d,O as p,V as _,K as u,F as s,G as m,B as D,y as M,z as v,M as o,P as N}from"./moment.aeac0934.js";import"./index.2e7847e7.js";import"./app.714c321a.js";const C=N(" \u0421\u0442\u0430\u0442\u0438\u0441\u0442\u0438\u043A\u0430 \u0437\u0430\u044F\u0432\u043E\u043A "),O={key:1,class:"grid grid-cols-1 gap-4"},U={class:"block"},S={class:"text-center"},q={__name:"Index",setup(j){_("$swal");const g=_("$can"),a=i({orders:[],chart:null,indicators:null,isLoading:!0}),t=i({date:[],currentPage:1});i([]);const r=b(()=>{const e={};return t.value.date.length===2&&(e.date_start=t.value.date[0].toLocaleDateString(),e.date_end=t.value.date[1].toLocaleDateString()),e.page=t.value.currentPage,e});y(()=>{t.value.date[0]=w(new Date),t.value.date[1]=P(new Date),l()});function l(){a.value.isLoading=!0,axios.get(route("api.statistics.orders.index",r.value)).then(({data:e})=>{a.value.orders=e,a.value.isLoading=!1}).catch(e=>{console.log(e),a.value.isLoading=!1}),axios.get(route("api.statistics.orders.chart",r.value)).then(({data:e})=>a.value.chart=e.result).catch(e=>console.log(e)),axios.get(route("api.statistics.orders.indicators",r.value)).then(({data:e})=>a.value.indicators=e.result).catch(e=>console.log(e))}return(e,n)=>{const f=u("loader-component"),h=u("label-component"),x=u("pagination");return s(),d($,{title:"\u0421\u0442\u0430\u0442\u0438\u0441\u0442\u0438\u043A\u0430 \u0437\u0430\u044F\u0432\u043E\u043A"},{header:p(()=>[C]),default:p(()=>[a.value.isLoading?(s(),d(f,{key:0})):m("",!0),!a.value.isLoading&&D(g)("show-bookkeeping-orders")?(s(),M("div",O,[v("div",U,[o(h,{value:"\u0424\u0456\u043B\u044C\u0442\u0440 \u043F\u043E \u0434\u0430\u0442\u0456"}),o(B,{modelValue:t.value.date,"onUpdate:modelValue":[n[0]||(n[0]=c=>t.value.date=c),l]},null,8,["modelValue"])]),a.value.chart?(s(),d(V,{key:0,"chart-data":a.value.chart},null,8,["chart-data"])):m("",!0),o(L,{data:a.value.indicators},null,8,["data"]),o(k,{data:a.value.orders.result.data},null,8,["data"]),v("div",S,[o(x,{pagination:a.value.orders.result,"click-handler":l,modelValue:t.value.currentPage,"onUpdate:modelValue":n[1]||(n[1]=c=>t.value.currentPage=c)},null,8,["pagination","modelValue"])])])):m("",!0)]),_:1})}}};export{q as default};