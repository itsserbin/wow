import _ from"./Chart-8529e800.js";import v from"./Indicators-46c0f27c.js";import g from"./Table-d154ed85.js";import f from"./Datepicker-1dfd351e.js";import{_ as x}from"./AuthenticatedLayout-704e8f94.js";import{_ as w}from"./Card-d700085f.js";import{s as D,e as b}from"./index-7a810988.js";import{k as l,o as k,z as V,l as s,s as o,y as m,w as y,p,m as $,q as B,F as N,n as L,t as c}from"./index-a01126e2.js";import"./chart-10c086bf.js";import"./Table-fe1ca8dd.js";import"./isDark-c828c264.js";import"./vue-datepicker-3bdc29fb.js";import"./index-2cbe9ca3.js";import"./index.esm-02fff71f.js";import"./Logo-83ffc10f.js";const M={class:"grid grid-cols-1 gap-4"},O={class:"grid grid-cols-2 md:grid-cols-4 gap-4"},Q={__name:"Dashboard",setup(C){const e=l({date:[],page:1}),t=l({table:null,indicators2:null,chart:null,indicators:null}),n=l({statistics:[]});k(async()=>{e.value.date[0]=D(new Date),e.value.date[1]=b(new Date),await d(),await axios.get(route("api.dashboard")).then(({data:a})=>n.value.statistics=a.countOrders).catch(a=>console.log(a))});const r=V(()=>{const a={};return e.value.date.length===2&&(a.date_start=e.value.date[0].toLocaleDateString(),a.date_end=e.value.date[1].toLocaleDateString()),a.page=e.value.page,a}),d=async()=>{await axios.get(route("api.statistics.orders.index",r.value)).then(({data:a})=>t.value.table=a.result.data).catch(a=>console.log(a)),await axios.get(route("api.statistics.orders.chart",r.value)).then(({data:a})=>t.value.chart=a.result).catch(a=>console.log(a)),await axios.get(route("api.statistics.orders.indicators",r.value)).then(({data:a})=>t.value.indicators=a.result).catch(a=>console.log(a)),await axios.get(route("api.statistics.orders.indicators2",r.value)).then(({data:a})=>t.value.indicators2=a.result).catch(a=>console.log(a))};return(a,u)=>(s(),o(x,{title:"Dashboard"},{header:m(()=>[y(" Dashboard ")]),default:m(()=>[p("div",M,[p("div",O,[(s(!0),$(N,null,B(n.value.statistics,(i,h)=>(s(),o(w,{class:"text-center",title:h,description:i||"0"},null,8,["title","description"]))),256))]),L(f,{modelValue:e.value.date,"onUpdate:modelValue":[u[0]||(u[0]=i=>e.value.date=i),d]},null,8,["modelValue"]),t.value.chart?(s(),o(_,{key:0,chartData:t.value.chart},null,8,["chartData"])):c("",!0),t.value.indicators?(s(),o(v,{key:1,data:t.value.indicators},null,8,["data"])):c("",!0),t.value.table?(s(),o(g,{key:2,data:t.value.table},null,8,["data"])):c("",!0)])]),_:1}))}};export{Q as default};