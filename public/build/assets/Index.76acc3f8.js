import j from"./Modal.d1b1c6c2.js";import z from"./Chart.6f67bcb4.js";import I from"./Table.c73873f6.js";import P from"./StatisticLayout.62449672.js";import{s as q,e as G,_ as H}from"./Datepicker.49312eac.js";import{az as K,w as v,x as k,S as Q,Q as m,O as _,U as V,K as r,F as i,G as g,B as A,y as M,z as u,M as c,H as T,I as J,a7 as R,P as b}from"./moment.791e2419.js";import"./Form.2ddccd5d.js";import"./index.2e43bf1e.js";import"./app.ccd83b47.js";const W=b(" \u0412\u0438\u0442\u0440\u0430\u0442\u0438 "),X={key:1,class:"grid grid-cols-1 gap-4"},Y=b(" \u0414\u043E\u0434\u0430\u0442\u0438 "),Z={class:"grid grid-cols-1 md:grid-cols-2 gap-4 mt-5"},ee={class:"block"},te={class:"block"},oe={class:"grid grid-cols-2 md:grid-cols-6"},ae={class:"text-center"},ve={__name:"Index",setup(ne){const n=V("$swal"),C=V("$can"),f=K({name:null,date:null,sum:null,quantity:1,comment:null,total:null,cost_category_id:null,cost_type:"single"}),e=v({data:[],chart:[],isLoading:!0,isActiveModal:!1,modalAction:"",item:{}}),o=v({date:[],page:1}),h=v([]),x=k(()=>{const t={};return o.value.filter&&(t.filter=o.value.filter),o.value.date.length===2&&(t.date_start=o.value.date[0].toLocaleDateString(),t.date_end=o.value.date[1].toLocaleDateString()),t.page=o.value.page,t});Q(()=>{o.value.date[0]=q(new Date),o.value.date[1]=G(new Date),s(),axios.get(route("api.statistics.costs.categories.list")).then(({data:t})=>{t.result.forEach(a=>{h.value.push({value:a.title,key:a.id})})}).catch(t=>console.log(t))});const w=k(()=>e.value.isActiveModal?j:null);function s(){e.value.isLoading=!0,axios.get(route("api.statistics.costs.index",x.value)).then(({data:t})=>{e.value.data=t,e.value.isLoading=!1}).catch(t=>{console.log(t),e.value.isLoading=!1}),axios.get(route("api.statistics.costs.chart",x.value)).then(({data:t})=>e.value.chart=t.result).catch(t=>console.log(t))}function L(t){n({title:"\u0412\u0438\u0434\u0430\u043B\u0438\u0442\u0438?",icon:"warning",showCancelButton:!0}).then(a=>{a.isConfirmed&&axios.delete(route("api.statistics.costs.destroy",t)).then(()=>{s(),e.value.isActiveModal&&d(),n({icon:"success",title:"Destroyed!"})}).catch(p=>{console.log(p),n({icon:"error",title:"Error!"})})})}function d(){e.value.isActiveModal=!e.value.isActiveModal}function D(){axios.put(route("api.statistics.costs.update",e.value.item.id),e.value.item).then(()=>{d(),s(),n({title:"Success!",icon:"success"})}).catch(t=>{console.log(t),n({title:"Error!",icon:"error"})})}function $(){axios.post(route("api.statistics.costs.create"),e.value.item).then(()=>{d(),e.value.item=f,s(),n({title:"Success!",icon:"success"})}).catch(t=>{console.log(t),n({title:"Error!",icon:"error"})})}function S(){e.value.modalAction==="edit"?D():e.value.modalAction==="create"&&$()}function B(){Object.assign(e.value.item,f),e.value.modalAction="create",d()}return(t,a)=>{const p=r("loader-component"),F=r("button-component"),y=r("label-component"),E=r("select-component"),O=r("card-component"),U=r("pagination");return i(),m(P,{title:"\u0412\u0438\u0442\u0440\u0430\u0442\u0438"},{header:_(()=>[W]),default:_(()=>[e.value.isLoading?(i(),m(p,{key:0})):g("",!0),!e.value.isLoading&&A(C)("show-bookkeeping-costs")?(i(),M("div",X,[u("div",null,[c(F,{type:"btn",onClick:B},{default:_(()=>[Y]),_:1})]),u("div",Z,[u("div",ee,[c(y,{value:"\u0424\u0456\u043B\u044C\u0442\u0440 \u043F\u043E \u043A\u0430\u0442\u0435\u0433\u043E\u0440\u0456\u0457"}),c(E,{modelValue:o.value.filter,"onUpdate:modelValue":a[0]||(a[0]=l=>o.value.filter=l),options:h.value,onChange:s},null,8,["modelValue","options"])]),u("div",te,[c(y,{value:"\u0424\u0456\u043B\u044C\u0442\u0440 \u043F\u043E \u0434\u0430\u0442\u0456"}),c(H,{modelValue:o.value.date,"onUpdate:modelValue":[a[1]||(a[1]=l=>o.value.date=l),s]},null,8,["modelValue"])])]),e.value.chart?(i(),m(z,{key:0,"chart-data":e.value.chart},null,8,["chart-data"])):g("",!0),u("div",oe,[(i(!0),M(T,null,J(e.value.data.generalStat,(l,N)=>(i(),m(O,{class:"text-center",title:N,description:t.$filters.formatMoney(l)},null,8,["title","description"]))),256))]),c(I,{data:e.value.data.result.data},null,8,["data"]),u("div",ae,[c(U,{pagination:e.value.data.result,"click-handler":s,modelValue:o.value.page,"onUpdate:modelValue":a[2]||(a[2]=l=>o.value.page=l)},null,8,["pagination","modelValue"])]),(i(),m(R(A(w)),{item:e.value.item,modalAction:e.value.modalAction,onCloseModal:d,onSubmitForm:S,onDeclineForm:L},null,40,["item","modalAction"]))])):g("",!0)]),_:1})}}};export{ve as default};
