import $ from"./StatisticLayout.0f895e4d.js";import{s as B,e as j,_ as E}from"./Datepicker.f60d9fe1.js";import M from"./Table.d2c24628.js";import{j as m,p as h,o as S,C as p,D as u,G as k,N as c,A as r,v as b,u as U,q as x,s as l,H as o,F as A,E as F,x as _}from"./index.e4375aa7.js";import"./app.2c2e52ca.js";import"./moment.9709ab41.js";import"./_plugin-vue_export-helper.cdc0426e.js";import"./lazyload.6866379a.js";import"./Logo.6d532cc3.js";const O=_(" \u0421\u0442\u0430\u0442\u0438\u0441\u0442\u0438\u043A\u0430 \u0434\u043B\u044F \u043C\u0435\u043D\u0435\u0434\u0436\u0435\u0440\u0456\u0432 "),q={key:1,class:"grid grid-cols-1 gap-4"},G={class:"grid grid-cols-1 md:grid-cols-12 gap-4 mt-5"},H={class:"block col-span-2 text-center"},I=_(" \u041E\u0447\u0438\u0441\u0442\u0438\u0442\u0438 "),T={class:"block col-span-4"},z={class:"block col-span-4"},J={class:"block col-span-2 text-center"},K=_(" \u041F\u043E\u0448\u0443\u043A "),Q={class:"grid grid-cols-2 md:grid-cols-4"},R={class:"text-center"},le={__name:"Index",setup(W){k("$swal");const V=k("$can"),a=m({data:[],managers:[],isLoading:!0}),g=m([]),L=h(()=>{const e={};return t.value.date.length===2&&(e.date_start=t.value.date[0].toLocaleDateString(),e.date_end=t.value.date[1].toLocaleDateString()),v.value&&(e.managers=v.value),e.page=t.value.currentPage,route("api.statistics.managers.index",e)}),v=h(()=>{let e=[];return a.value.managers.forEach(n=>{e.push(n.id)}),e.join()}),t=m({date:[],managers:[],currentPage:1});S(()=>{t.value.date[0]=B(new Date),t.value.date[1]=j(new Date),i(),axios.get(route("api.users.list.managers")).then(({data:e})=>g.value=e.result).catch(e=>console.log(e))});function C(){t.value.managers=[],t.value.date=[],t.value.managers=[],a.value.managers=[],i()}function i(){a.value.isLoading=!0,axios.get(L.value).then(({data:e})=>{a.value.data=e,a.value.isLoading=!1}).catch(e=>{console.log(e),a.value.isLoading=!1})}return(e,n)=>{const y=c("loader-component"),d=c("label-component"),f=c("button-component"),w=c("multiselect"),D=c("card-component"),N=c("pagination");return r(),p($,{title:"\u0421\u0442\u0430\u0442\u0438\u0441\u0442\u0438\u043A\u0430 \u0434\u043B\u044F \u043C\u0435\u043D\u0435\u0434\u0436\u0435\u0440\u0456\u0432"},{header:u(()=>[O]),default:u(()=>[a.value.isLoading?(r(),p(y,{key:0})):b("",!0),!a.value.isLoading&&U(V)("show-bookkeeping-managers")?(r(),x("div",q,[l("div",G,[l("div",H,[o(d,{value:"\xA0"}),o(f,{type:"button",onClick:C},{default:u(()=>[I]),_:1})]),l("div",T,[o(d,{value:"\u0424\u0456\u043B\u044C\u0442\u0440 \u043F\u043E \u0434\u0430\u0442\u0456"}),o(E,{modelValue:t.value.date,"onUpdate:modelValue":n[0]||(n[0]=s=>t.value.date=s)},null,8,["modelValue"])]),l("div",z,[o(d,{value:"\u0424\u0456\u043B\u044C\u0442\u0440 \u043F\u043E \u043C\u0435\u043D\u0435\u0434\u0436\u0435\u0440\u0430\u043C"}),o(w,{modelValue:a.value.managers,"onUpdate:modelValue":n[1]||(n[1]=s=>a.value.managers=s),options:g.value,label:"name",placeholder:"\u041E\u0431\u0435\u0440\u0456\u0442\u044C \u043C\u0435\u043D\u0435\u0434\u0436\u0435\u0440\u0456\u0432","track-by":"id",searchable:!0,"close-on-select":!1,multiple:""},null,8,["modelValue","options"])]),l("div",J,[o(d,{value:"\xA0"}),o(f,{type:"button",onClick:i},{default:u(()=>[K]),_:1})])]),l("div",Q,[(r(!0),x(A,null,F(a.value.data.generalStat,(s,P)=>(r(),p(D,{class:"text-center",title:P,description:s},null,8,["title","description"]))),256))]),o(M,{data:a.value.data.result.data},null,8,["data"]),l("div",R,[o(N,{pagination:a.value.data.result,"click-handler":i,modelValue:t.value.currentPage,"onUpdate:modelValue":n[2]||(n[2]=s=>t.value.currentPage=s)},null,8,["pagination","modelValue"])])])):b("",!0)]),_:1})}}};export{le as default};
