import v from"./StatisticLayout.2cb79e5d.js";import k from"./Chart.44c8e5e8.js";import u from"./Chart.9d3baa63.js";import f from"./Datepicker.b31ed119.js";import{p as _,q as x,ah as y,ai as D,f as w,m as l,w as m,v as V,o as s,i as a,x as b,u as n,g as d,j as r,k as $}from"./vendor.1f6af4a6.js";import"./app.8b7021f2.js";import"./vue.m.8e70aa70.js";import"./bootstrap.36b92799.js";import"./__commonjsHelpers__.488ed5c2.js";import"./_plugin-vue_export-helper.cdc0426e.js";import"./Logo.c7a5de92.js";import"./index.95a37501.js";const B=$(" \u0421\u0442\u0430\u0442\u0438\u0441\u0442\u0438\u043A\u0430 "),N={class:"grid grid-cols-1 gap-4"},L={class:"grid grid-cols-1 md:grid-cols-2 gap-4"},M={key:0,class:"block"},j=a("div",{class:"text-lg text-gray-800 leading-tight dark:text-gray-300"},"\u0412\u0438\u0442\u0440\u0430\u0442\u0438",-1),C=a("hr",{class:"my-1"},null,-1),O={key:1,class:"div"},S=a("div",{class:"text-lg text-gray-800 leading-tight dark:text-gray-300"},"\u041F\u0440\u0438\u0431\u0443\u0442\u043E\u043A",-1),q=a("hr",{class:"my-1"},null,-1),E={class:"grid grid-cols-1 md:grid-cols-2 gap-4"},I={key:0,class:"div"},P=a("div",{class:"text-lg text-gray-800 leading-tight dark:text-gray-300"},"\u0417\u0430\u044F\u0432\u043A\u0438",-1),T=a("hr",{class:"my-1"},null,-1),U={key:1,class:"div"},z=a("div",{class:"text-lg text-gray-800 leading-tight dark:text-gray-300"},"\u041C\u0430\u0440\u043A\u0435\u0442\u0438\u043D\u0433",-1),A=a("hr",{class:"my-1"},null,-1),at={__name:"Index",setup(F){const o=_({date:[],page:1}),i=V("$can"),e=_({costs:null,profits:null,orders:null,marketing:null});x(()=>{o.value.date[0]=y(new Date),o.value.date[1]=D(new Date),g()});const c=w(()=>{const t={};return o.value.date.length===2&&(t.date_start=o.value.date[0].toLocaleDateString(),t.date_end=o.value.date[1].toLocaleDateString()),t.page=o.value.page,t});function g(){e.value.isLoading=!0,axios.get(route("api.statistics.costs.chart",c.value)).then(({data:t})=>e.value.costs=t.result).catch(t=>console.log(t)),axios.get(route("api.statistics.profits.chart",c.value)).then(({data:t})=>e.value.profits=t.result).catch(t=>console.log(t)),axios.get(route("api.statistics.orders.chart",c.value)).then(({data:t})=>e.value.orders=t.result).catch(t=>console.log(t)),axios.get(route("api.statistics.marketing.chart",c.value)).then(({data:t})=>e.value.marketing=t.result).catch(t=>console.log(t))}return(t,h)=>(s(),l(v,{title:"\u0421\u0442\u0430\u0442\u0438\u0441\u0442\u0438\u043A\u0430"},{header:m(()=>[B]),default:m(()=>[a("div",N,[b(f,{modelValue:o.value.date,"onUpdate:modelValue":[h[0]||(h[0]=p=>o.value.date=p),g]},null,8,["modelValue"]),a("div",L,[n(i)("show-bookkeeping-costs")?(s(),d("div",M,[j,C,e.value.costs?(s(),l(k,{key:0,chartData:e.value.costs},null,8,["chartData"])):r("",!0)])):r("",!0),n(i)("show-bookkeeping-profits")?(s(),d("div",O,[S,q,e.value.profits?(s(),l(u,{key:0,chartData:e.value.profits},null,8,["chartData"])):r("",!0)])):r("",!0)]),a("div",E,[n(i)("show-bookkeeping-orders")?(s(),d("div",I,[P,T,e.value.orders?(s(),l(u,{key:0,chartData:e.value.orders},null,8,["chartData"])):r("",!0)])):r("",!0),n(i)("show-bookkeeping-marketing")?(s(),d("div",U,[z,A,e.value.marketing?(s(),l(u,{key:0,chartData:e.value.marketing},null,8,["chartData"])):r("",!0)])):r("",!0)])])]),_:1}))}};export{at as default};
