import _ from"./StatisticLayout.576eeac2.js";import g from"./LastParams.3e0eded4.js";import v from"./Chart.182691fa.js";import c from"./Chart.77951c3d.js";import{z as u,D as m,A as f,U as l,R as d,Q as o,J as p,L as e,X as i,a1 as x}from"./_plugin-vue_export-helper.4dd23699.js";import"./Sidebar.259fb7c7.js";import"./app.bf5b84e8.js";import"./index.877d412f.js";const y=x(" \u0421\u0442\u0430\u0442\u0438\u0441\u0442\u0438\u043A\u0430 "),k={class:"grid grid-cols-1 md:grid-cols-2 gap-4"},D={class:"block"},B=e("div",{class:"text-lg text-gray-800 leading-tight dark:text-gray-300"},"\u0412\u0438\u0442\u0440\u0430\u0442\u0438",-1),L=e("hr",{class:"my-1"},null,-1),N={class:"div"},V=e("div",{class:"text-lg text-gray-800 leading-tight dark:text-gray-300"},"\u041F\u0440\u0438\u0431\u0443\u0442\u043E\u043A",-1),$=e("hr",{class:"my-1"},null,-1),C={class:"div"},b=e("div",{class:"text-lg text-gray-800 leading-tight dark:text-gray-300"},"\u0417\u0430\u044F\u0432\u043A\u0438",-1),w=e("hr",{class:"my-1"},null,-1),z={class:"div"},A=e("div",{class:"text-lg text-gray-800 leading-tight dark:text-gray-300"},"\u041C\u0430\u0440\u043A\u0435\u0442\u0438\u043D\u0433",-1),I=e("hr",{class:"my-1"},null,-1),q={__name:"Index",setup(J){const s=u({date:[],filter:null,last:"one-month",page:1}),a=u({costs:null,profits:null,orders:null,marketing:null});m(()=>n());const r=f(()=>{const t={};return s.value.filter&&(t.filter=s.value.filter),s.value.date.length===2&&(t.date_start=s.value.date[0],t.date_end=s.value.date[1]),s.value.last&&(t.last=s.value.last),t.page=s.value.page,t});function h(t){t?s.value.last=t:s.value={date:[],filter:null,last:null,page:1},n()}function n(){a.value.isLoading=!0,axios.get(route("api.statistics.costs.chart",r.value)).then(({data:t})=>a.value.costs=t.result).catch(t=>console.log(t)),axios.get(route("api.statistics.profits.chart",r.value)).then(({data:t})=>a.value.profits=t.result).catch(t=>console.log(t)),axios.get(route("api.statistics.orders.chart",r.value)).then(({data:t})=>a.value.orders=t.result).catch(t=>console.log(t)),axios.get(route("api.statistics.marketing.chart",r.value)).then(({data:t})=>a.value.marketing=t.result).catch(t=>console.log(t))}return(t,M)=>(o(),l(_,{title:"\u0421\u0442\u0430\u0442\u0438\u0441\u0442\u0438\u043A\u0430"},{header:d(()=>[y]),default:d(()=>[p(g,{"active-item":s.value.last,onSortByLast:h},null,8,["active-item"]),e("div",k,[e("div",D,[B,L,a.value.costs?(o(),l(v,{key:0,chartData:a.value.costs},null,8,["chartData"])):i("",!0)]),e("div",N,[V,$,a.value.profits?(o(),l(c,{key:0,chartData:a.value.profits},null,8,["chartData"])):i("",!0)]),e("div",C,[b,w,a.value.orders?(o(),l(c,{key:0,chartData:a.value.orders},null,8,["chartData"])):i("",!0)]),e("div",z,[A,I,a.value.marketing?(o(),l(c,{key:0,chartData:a.value.marketing},null,8,["chartData"])):i("",!0)])])]),_:1}))}};export{q as default};
