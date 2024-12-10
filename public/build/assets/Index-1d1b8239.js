import{s as l}from"./swal-03cac797.js";import{_ as F}from"./Paginate-01527c78.js";import{_ as O}from"./Card-d700085f.js";import{L as S}from"./Loader-ccf6e4ba.js";import{_ as B}from"./Button-dd1aed97.js";import{_ as x}from"./Label-20131f4c.js";import{_ as N}from"./Select-c098c0c0.js";import U from"./Modal-6179df9a.js";import j from"./Chart-8529e800.js";import q from"./Table-6b0f269a.js";import z from"./StatisticLayout-af991e7b.js";import I from"./Datepicker-1dfd351e.js";import{s as P,e as T}from"./index-7a810988.js";import{N as G,g as H,k as m,z as k,o as J,l as n,s as d,y as p,w as y,t as v,x as A,m as V,p as u,n as r,F as K,q as Q,a0 as R}from"./index-a01126e2.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./Modal-e072f216.js";import"./Form-a0699878.js";import"./Input-39294dfa.js";import"./Textarea-cb91500a.js";import"./isDark-c828c264.js";import"./vue-datepicker-3bdc29fb.js";import"./index-2cbe9ca3.js";import"./chart-10c086bf.js";import"./Table-fe1ca8dd.js";import"./XCircle-3c75bba8.js";import"./AuthenticatedLayout-704e8f94.js";import"./index.esm-02fff71f.js";import"./Logo-83ffc10f.js";import"./SidebarItem-446a46b0.js";const W={key:1,class:"grid grid-cols-1 gap-4"},X={class:"grid grid-cols-1 md:grid-cols-2 gap-4 mt-5"},Y={class:"block"},Z={class:"block"},tt={class:"grid grid-cols-2 md:grid-cols-6"},et={class:"text-center"},Ft={__name:"Index",setup(at){const $=G("$can"),f=H({name:null,date:null,sum:null,comment:null,cost_category_id:null,cost_type:"single"}),t=m({data:[],chart:[],isLoading:!0,isActiveModal:!1,modalAction:"",item:{}}),a=m({date:[],page:1}),g=m([]),_=k(()=>{const e={};return a.value.filter&&(e.filter=a.value.filter),a.value.date.length===2&&(e.date_start=a.value.date[0].toLocaleDateString(),e.date_end=a.value.date[1].toLocaleDateString()),e.page=a.value.page,e});J(()=>{a.value.date[0]=P(new Date),a.value.date[1]=T(new Date),s(),axios.get(route("api.statistics.costs.categories.list")).then(({data:e})=>{e.result.forEach(o=>{g.value.push({value:o.title,key:o.id})})}).catch(e=>console.log(e))});const L=k(()=>t.value.isActiveModal?U:null);function s(){t.value.isLoading=!0,axios.get(route("api.statistics.costs.index",_.value)).then(({data:e})=>{t.value.data=e,t.value.isLoading=!1}).catch(e=>{console.log(e),t.value.isLoading=!1}),axios.get(route("api.statistics.costs.chart",_.value)).then(({data:e})=>t.value.chart=e.result).catch(e=>console.log(e))}function h(e){l({title:"Видалити?",icon:"warning",showCancelButton:!0}).then(o=>{o.isConfirmed&&axios.delete(route("api.statistics.costs.destroy",e)).then(()=>{s(),t.value.isActiveModal&&c(),l({icon:"success",title:"Destroyed!"})}).catch(i=>{console.log(i),l({icon:"error",title:"Error!"})})})}function c(){t.value.isActiveModal=!t.value.isActiveModal}function M(e,o){axios.get(route("api.statistics.costs.edit",e)).then(({data:i})=>{t.value.item=i.result,t.value.modalAction="edit",t.value.item.index=o,c()}).catch(i=>console.log(i))}function C(){axios.put(route("api.statistics.costs.update",t.value.item.id),t.value.item).then(()=>{c(),s(),l({title:"Success!",icon:"success"})}).catch(e=>{console.log(e),l({title:"Error!",icon:"error"})})}function D(){axios.post(route("api.statistics.costs.create"),t.value.item).then(()=>{c(),t.value.item=f,s(),l({title:"Success!",icon:"success"})}).catch(e=>{console.log(e),l({title:"Error!",icon:"error"})})}function w(){t.value.modalAction==="edit"?C():t.value.modalAction==="create"&&D()}function b(){Object.assign(t.value.item,f),t.value.modalAction="create",c()}return(e,o)=>(n(),d(z,{title:"Витрати"},{header:p(()=>[y(" Витрати ")]),default:p(()=>[t.value.isLoading?(n(),d(S,{key:0})):v("",!0),!t.value.isLoading&&A($)("show-bookkeeping-costs")?(n(),V("div",W,[u("div",null,[r(B,{type:"btn",onClick:b},{default:p(()=>[y(" Додати ")]),_:1})]),u("div",X,[u("div",Y,[r(x,{value:"Фільтр по категорії"}),r(N,{modelValue:a.value.filter,"onUpdate:modelValue":o[0]||(o[0]=i=>a.value.filter=i),options:g.value,onChange:s},null,8,["modelValue","options"])]),u("div",Z,[r(x,{value:"Фільтр по даті"}),r(I,{modelValue:a.value.date,"onUpdate:modelValue":[o[1]||(o[1]=i=>a.value.date=i),s]},null,8,["modelValue"])])]),t.value.chart?(n(),d(j,{key:0,"chart-data":t.value.chart},null,8,["chart-data"])):v("",!0),u("div",tt,[(n(!0),V(K,null,Q(t.value.data.generalStat,(i,E)=>(n(),d(O,{class:"text-center",title:E,description:e.$filters.formatMoney(i)},null,8,["title","description"]))),256))]),r(q,{data:t.value.data.result.data,onOnDestroy:h,onOnEdit:M},null,8,["data"]),u("div",et,[r(F,{pagination:t.value.data.result,"click-handler":s,modelValue:a.value.page,"onUpdate:modelValue":o[2]||(o[2]=i=>a.value.page=i)},null,8,["pagination","modelValue"])]),(n(),d(R(A(L)),{item:t.value.item,modalAction:t.value.modalAction,onCloseModal:c,onSubmitForm:w,onDeclineForm:h},null,40,["item","modalAction"]))])):v("",!0)]),_:1}))}};export{Ft as default};
