import m from"./StatisticLayout.6047f21f.js";import p from"./LastParams.1a91c023.js";import f from"./Chart.c8de4607.js";import d from"./Chart.f0c7764d.js";import{A as g,G as k,B as x,V as r,S as _,R as s,K as y,M as o,P as n,L as u,$ as l,Y as D,x as B}from"./moment.e1708d83.js";import"./index.90dbbb6c.js";import"./app.296ce57f.js";const $=D(" \u0421\u0442\u0430\u0442\u0438\u0441\u0442\u0438\u043A\u0430 "),b={class:"grid grid-cols-1 md:grid-cols-2 gap-4"},w={key:0,class:"block"},V=o("div",{class:"text-lg text-gray-800 leading-tight dark:text-gray-300"},"\u0412\u0438\u0442\u0440\u0430\u0442\u0438",-1),L=o("hr",{class:"my-1"},null,-1),N={key:1,class:"div"},C=o("div",{class:"text-lg text-gray-800 leading-tight dark:text-gray-300"},"\u041F\u0440\u0438\u0431\u0443\u0442\u043E\u043A",-1),M=o("hr",{class:"my-1"},null,-1),P={key:2,class:"div"},S=o("div",{class:"text-lg text-gray-800 leading-tight dark:text-gray-300"},"\u0417\u0430\u044F\u0432\u043A\u0438",-1),j=o("hr",{class:"my-1"},null,-1),A={key:3,class:"div"},E=o("div",{class:"text-lg text-gray-800 leading-tight dark:text-gray-300"},"\u041C\u0430\u0440\u043A\u0435\u0442\u0438\u043D\u0433",-1),G=o("hr",{class:"my-1"},null,-1),J={__name:"Index",setup(I){const a=g({date:[],filter:null,last:"one-month",page:1}),i=B("$can"),e=g({costs:null,profits:null,orders:null,marketing:null});k(()=>h());const c=x(()=>{const t={};return a.value.filter&&(t.filter=a.value.filter),a.value.date.length===2&&(t.date_start=a.value.date[0],t.date_end=a.value.date[1]),a.value.last&&(t.last=a.value.last),t.page=a.value.page,t});function v(t){t?a.value.last=t:a.value={date:[],filter:null,last:null,page:1},h()}function h(){e.value.isLoading=!0,axios.get(route("api.statistics.costs.chart",c.value)).then(({data:t})=>e.value.costs=t.result).catch(t=>console.log(t)),axios.get(route("api.statistics.profits.chart",c.value)).then(({data:t})=>e.value.profits=t.result).catch(t=>console.log(t)),axios.get(route("api.statistics.orders.chart",c.value)).then(({data:t})=>e.value.orders=t.result).catch(t=>console.log(t)),axios.get(route("api.statistics.marketing.chart",c.value)).then(({data:t})=>e.value.marketing=t.result).catch(t=>console.log(t))}return(t,K)=>(s(),r(m,{title:"\u0421\u0442\u0430\u0442\u0438\u0441\u0442\u0438\u043A\u0430"},{header:_(()=>[$]),default:_(()=>[y(p,{"active-item":a.value.last,onSortByLast:v},null,8,["active-item"]),o("div",b,[n(i)("show-bookkeeping-costs")?(s(),u("div",w,[V,L,e.value.costs?(s(),r(f,{key:0,chartData:e.value.costs},null,8,["chartData"])):l("",!0)])):l("",!0),n(i)("show-bookkeeping-profits")?(s(),u("div",N,[C,M,e.value.profits?(s(),r(d,{key:0,chartData:e.value.profits},null,8,["chartData"])):l("",!0)])):l("",!0),n(i)("show-bookkeeping-orders")?(s(),u("div",P,[S,j,e.value.orders?(s(),r(d,{key:0,chartData:e.value.orders},null,8,["chartData"])):l("",!0)])):l("",!0),n(i)("show-bookkeeping-marketing")?(s(),u("div",A,[E,G,e.value.marketing?(s(),r(d,{key:0,chartData:e.value.marketing},null,8,["chartData"])):l("",!0)])):l("",!0)])]),_:1}))}};export{J as default};
