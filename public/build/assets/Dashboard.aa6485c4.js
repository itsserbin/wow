import f from"./Chart.fd63d2fe.js";import g from"./LastParams.6786c2ed.js";import x from"./Indicators.6bc4ebfd.js";import b from"./Table.b038a005.js";import{y as r,G as y,z as k,W as o,U as u,Y as d,S as s,M as B,L as D,V,F as L,K as N,a0 as c,Z as $}from"./moment.325cf309.js";import"./index.97106de2.js";import"./app.7df5b4e5.js";const C=$(" Dashboard "),F={class:"grid grid-cols-2 md:grid-cols-4 gap-4"},T={__name:"Dashboard",setup(M){const a=r({date:[],filter:null,last:"one-month",page:1}),e=r({table:null,chart:null,indicators:null}),n=r({statistics:[]});y(()=>{i(),axios.get(route("api.dashboard")).then(({data:t})=>n.value.statistics=t.countOrders).catch(t=>console.log(t))});const l=k(()=>{const t={};return a.value.filter&&(t.filter=a.value.filter),a.value.date.length===2&&(t.date_start=a.value.date[0],t.date_end=a.value.date[1]),a.value.last&&(t.last=a.value.last),t.page=a.value.page,t});function m(t){t?a.value.last=t:a.value={date:[],filter:null,last:null,page:1},i()}function i(){axios.get(route("api.statistics.orders.index",l.value)).then(({data:t})=>e.value.table=t.result.data).catch(t=>console.log(t)),axios.get(route("api.statistics.orders.chart",l.value)).then(({data:t})=>e.value.chart=t.result).catch(t=>console.log(t)),axios.get(route("api.statistics.orders.indicators",l.value)).then(({data:t})=>e.value.indicators=t.result).catch(t=>console.log(t))}return(t,S)=>{const p=d("card-component"),h=d("auth-layout");return s(),o(h,{title:"Dashboard"},{header:u(()=>[C]),default:u(()=>[B("div",F,[(s(!0),D(L,null,V(n.value.statistics,(_,v)=>(s(),o(p,{class:"text-center",title:v,description:_},null,8,["title","description"]))),256))]),N(g,{"active-item":a.value.last,onSortByLast:m},null,8,["active-item"]),e.value.chart?(s(),o(f,{key:0,chartData:e.value.chart},null,8,["chartData"])):c("",!0),e.value.indicators?(s(),o(x,{key:1,data:e.value.indicators},null,8,["data"])):c("",!0),e.value.table?(s(),o(b,{key:2,data:e.value.table},null,8,["data"])):c("",!0)]),_:1})}}};export{T as default};
