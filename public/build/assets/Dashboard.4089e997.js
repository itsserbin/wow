import f from"./Chart.cbd3bb8b.js";import x from"./Indicators.792ccc6d.js";import D from"./Table.994380eb.js";import{s as b,e as V,_ as k}from"./Datepicker.ab04e7fb.js";import{y as n,C as y,z as B,a0 as s,X as m,V as p,S as o,M as h,L as C,Z as L,F as M,K as N,_ as c,Y as $}from"./___vite-browser-external_commonjs-proxy.4500e77d.js";import"./index.ed3d9b9f.js";import"./app.08c71ca3.js";const w=$(" Dashboard "),O={class:"grid grid-cols-1 gap-4"},S={class:"grid grid-cols-2 md:grid-cols-4 gap-4"},Y={__name:"Dashboard",setup(F){const e=n({date:[],page:1}),a=n({table:null,indicators2:null,chart:null,indicators:null}),i=n({statistics:[]});y(()=>{e.value.date[0]=b(new Date),e.value.date[1]=V(new Date),d(),axios.get(route("api.dashboard")).then(({data:t})=>i.value.statistics=t.countOrders).catch(t=>console.log(t))});const r=B(()=>{const t={};return e.value.date.length===2&&(t.date_start=e.value.date[0].toLocaleDateString(),t.date_end=e.value.date[1].toLocaleDateString()),t.page=e.value.page,t});function d(){axios.get(route("api.statistics.orders.index",r.value)).then(({data:t})=>a.value.table=t.result.data).catch(t=>console.log(t)),axios.get(route("api.statistics.orders.chart",r.value)).then(({data:t})=>a.value.chart=t.result).catch(t=>console.log(t)),axios.get(route("api.statistics.orders.indicators",r.value)).then(({data:t})=>a.value.indicators=t.result).catch(t=>console.log(t)),axios.get(route("api.statistics.orders.indicators2",r.value)).then(({data:t})=>a.value.indicators2=t.result).catch(t=>console.log(t))}return(t,u)=>{const _=p("card-component"),v=p("auth-layout");return o(),s(v,{title:"Dashboard"},{header:m(()=>[w]),default:m(()=>[h("div",O,[h("div",S,[(o(!0),C(M,null,L(i.value.statistics,(l,g)=>(o(),s(_,{class:"text-center",title:g,description:l||"0"},null,8,["title","description"]))),256))]),N(k,{modelValue:e.value.date,"onUpdate:modelValue":[u[0]||(u[0]=l=>e.value.date=l),d]},null,8,["modelValue"]),a.value.chart?(o(),s(f,{key:0,chartData:a.value.chart},null,8,["chartData"])):c("",!0),a.value.indicators?(o(),s(x,{key:1,data:a.value.indicators},null,8,["data"])):c("",!0),a.value.table?(o(),s(D,{key:2,data:a.value.table},null,8,["data"])):c("",!0)])]),_:1})}}};export{Y as default};