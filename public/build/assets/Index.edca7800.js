import p from"./StatisticLayout.de6fce46.js";import k from"./Chart.3b3db722.js";import u from"./Chart.eb2d9935.js";import{s as f,e as x,_ as y}from"./Datepicker.e4c62f5d.js";import{y as _,G as D,z as w,a0 as l,W as m,S as s,M as a,K as V,P as n,L as d,Z as r,X as b,D as $}from"./___vite-browser-external_commonjs-proxy.bd54111c.js";import"./index.6f821958.js";import"./app.79417ded.js";const B=b(" \u0421\u0442\u0430\u0442\u0438\u0441\u0442\u0438\u043A\u0430 "),L={class:"grid grid-cols-1 gap-4"},M={class:"grid grid-cols-1 md:grid-cols-2 gap-4"},N={key:0,class:"block"},S=a("div",{class:"text-lg text-gray-800 leading-tight dark:text-gray-300"},"\u0412\u0438\u0442\u0440\u0430\u0442\u0438",-1),C=a("hr",{class:"my-1"},null,-1),O={key:1,class:"div"},P=a("div",{class:"text-lg text-gray-800 leading-tight dark:text-gray-300"},"\u041F\u0440\u0438\u0431\u0443\u0442\u043E\u043A",-1),j=a("hr",{class:"my-1"},null,-1),z={class:"grid grid-cols-1 md:grid-cols-2 gap-4"},E={key:0,class:"div"},G=a("div",{class:"text-lg text-gray-800 leading-tight dark:text-gray-300"},"\u0417\u0430\u044F\u0432\u043A\u0438",-1),I=a("hr",{class:"my-1"},null,-1),K={key:1,class:"div"},T=a("div",{class:"text-lg text-gray-800 leading-tight dark:text-gray-300"},"\u041C\u0430\u0440\u043A\u0435\u0442\u0438\u043D\u0433",-1),U=a("hr",{class:"my-1"},null,-1),Q={__name:"Index",setup(W){const o=_({date:[],page:1}),i=$("$can"),e=_({costs:null,profits:null,orders:null,marketing:null});D(()=>{o.value.date[0]=f(new Date),o.value.date[1]=x(new Date),g()});const c=w(()=>{const t={};return o.value.date.length===2&&(t.date_start=o.value.date[0].toLocaleDateString(),t.date_end=o.value.date[1].toLocaleDateString()),t.page=o.value.page,t});function g(){e.value.isLoading=!0,axios.get(route("api.statistics.costs.chart",c.value)).then(({data:t})=>e.value.costs=t.result).catch(t=>console.log(t)),axios.get(route("api.statistics.profits.chart",c.value)).then(({data:t})=>e.value.profits=t.result).catch(t=>console.log(t)),axios.get(route("api.statistics.orders.chart",c.value)).then(({data:t})=>e.value.orders=t.result).catch(t=>console.log(t)),axios.get(route("api.statistics.marketing.chart",c.value)).then(({data:t})=>e.value.marketing=t.result).catch(t=>console.log(t))}return(t,h)=>(s(),l(p,{title:"\u0421\u0442\u0430\u0442\u0438\u0441\u0442\u0438\u043A\u0430"},{header:m(()=>[B]),default:m(()=>[a("div",L,[V(y,{modelValue:o.value.date,"onUpdate:modelValue":[h[0]||(h[0]=v=>o.value.date=v),g]},null,8,["modelValue"]),a("div",M,[n(i)("show-bookkeeping-costs")?(s(),d("div",N,[S,C,e.value.costs?(s(),l(k,{key:0,chartData:e.value.costs},null,8,["chartData"])):r("",!0)])):r("",!0),n(i)("show-bookkeeping-profits")?(s(),d("div",O,[P,j,e.value.profits?(s(),l(u,{key:0,chartData:e.value.profits},null,8,["chartData"])):r("",!0)])):r("",!0)]),a("div",z,[n(i)("show-bookkeeping-orders")?(s(),d("div",E,[G,I,e.value.orders?(s(),l(u,{key:0,chartData:e.value.orders},null,8,["chartData"])):r("",!0)])):r("",!0),n(i)("show-bookkeeping-marketing")?(s(),d("div",K,[T,U,e.value.marketing?(s(),l(u,{key:0,chartData:e.value.marketing},null,8,["chartData"])):r("",!0)])):r("",!0)])])]),_:1}))}};export{Q as default};