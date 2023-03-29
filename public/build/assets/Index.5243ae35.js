import p from"./StatisticLayout.62449672.js";import k from"./Chart.6f67bcb4.js";import u from"./Chart.24f048ce.js";import{s as f,e as x,_ as y}from"./Datepicker.49312eac.js";import{w as _,S as D,x as w,Q as l,O as m,U as V,F as s,z as a,M as b,B as n,y as d,G as r,P as B}from"./moment.791e2419.js";import"./index.2e43bf1e.js";import"./app.ccd83b47.js";const $=B(" \u0421\u0442\u0430\u0442\u0438\u0441\u0442\u0438\u043A\u0430 "),M={class:"grid grid-cols-1 gap-4"},N={class:"grid grid-cols-1 md:grid-cols-2 gap-4"},L={key:0,class:"block"},O=a("div",{class:"text-lg text-gray-800 leading-tight dark:text-gray-300"},"\u0412\u0438\u0442\u0440\u0430\u0442\u0438",-1),S=a("hr",{class:"my-1"},null,-1),C={key:1,class:"div"},P=a("div",{class:"text-lg text-gray-800 leading-tight dark:text-gray-300"},"\u041F\u0440\u0438\u0431\u0443\u0442\u043E\u043A",-1),U=a("hr",{class:"my-1"},null,-1),j={class:"grid grid-cols-1 md:grid-cols-2 gap-4"},z={key:0,class:"div"},E=a("div",{class:"text-lg text-gray-800 leading-tight dark:text-gray-300"},"\u0417\u0430\u044F\u0432\u043A\u0438",-1),F=a("hr",{class:"my-1"},null,-1),G={key:1,class:"div"},I=a("div",{class:"text-lg text-gray-800 leading-tight dark:text-gray-300"},"\u041C\u0430\u0440\u043A\u0435\u0442\u0438\u043D\u0433",-1),Q=a("hr",{class:"my-1"},null,-1),X={__name:"Index",setup(T){const o=_({date:[],page:1}),i=V("$can"),e=_({costs:null,profits:null,orders:null,marketing:null});D(()=>{o.value.date[0]=f(new Date),o.value.date[1]=x(new Date),g()});const c=w(()=>{const t={};return o.value.date.length===2&&(t.date_start=o.value.date[0].toLocaleDateString(),t.date_end=o.value.date[1].toLocaleDateString()),t.page=o.value.page,t});function g(){e.value.isLoading=!0,axios.get(route("api.statistics.costs.chart",c.value)).then(({data:t})=>e.value.costs=t.result).catch(t=>console.log(t)),axios.get(route("api.statistics.profits.chart",c.value)).then(({data:t})=>e.value.profits=t.result).catch(t=>console.log(t)),axios.get(route("api.statistics.orders.chart",c.value)).then(({data:t})=>e.value.orders=t.result).catch(t=>console.log(t)),axios.get(route("api.statistics.marketing.chart",c.value)).then(({data:t})=>e.value.marketing=t.result).catch(t=>console.log(t))}return(t,h)=>(s(),l(p,{title:"\u0421\u0442\u0430\u0442\u0438\u0441\u0442\u0438\u043A\u0430"},{header:m(()=>[$]),default:m(()=>[a("div",M,[b(y,{modelValue:o.value.date,"onUpdate:modelValue":[h[0]||(h[0]=v=>o.value.date=v),g]},null,8,["modelValue"]),a("div",N,[n(i)("show-bookkeeping-costs")?(s(),d("div",L,[O,S,e.value.costs?(s(),l(k,{key:0,chartData:e.value.costs},null,8,["chartData"])):r("",!0)])):r("",!0),n(i)("show-bookkeeping-profits")?(s(),d("div",C,[P,U,e.value.profits?(s(),l(u,{key:0,chartData:e.value.profits},null,8,["chartData"])):r("",!0)])):r("",!0)]),a("div",j,[n(i)("show-bookkeeping-orders")?(s(),d("div",z,[E,F,e.value.orders?(s(),l(u,{key:0,chartData:e.value.orders},null,8,["chartData"])):r("",!0)])):r("",!0),n(i)("show-bookkeeping-marketing")?(s(),d("div",G,[I,Q,e.value.marketing?(s(),l(u,{key:0,chartData:e.value.marketing},null,8,["chartData"])):r("",!0)])):r("",!0)])])]),_:1}))}};export{X as default};
