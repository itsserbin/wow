import D from"./StatisticLayout.66ba10cb.js";import{s as M,e as N,_ as S}from"./Datepicker.a6d3b560.js";import U from"./Table.773f4a5a.js";import{y as m,z as h,C as j,a0 as p,X as u,B as k,V as c,S as r,_ as b,P as E,L as V,M as l,K as o,F,Z as O,Y as _}from"./___vite-browser-external_commonjs-proxy.c41a93ce.js";import"./app.257d675f.js";const z=_(" \u0421\u0442\u0430\u0442\u0438\u0441\u0442\u0438\u043A\u0430 \u0434\u043B\u044F \u043C\u0435\u043D\u0435\u0434\u0436\u0435\u0440\u0456\u0432 "),A={key:1,class:"grid grid-cols-1 gap-4"},I={class:"grid grid-cols-1 md:grid-cols-12 gap-4 mt-5"},K={class:"block col-span-2 text-center"},T=_(" \u041E\u0447\u0438\u0441\u0442\u0438\u0442\u0438 "),X={class:"block col-span-4"},Y={class:"block col-span-4"},Z={class:"block col-span-2 text-center"},q=_(" \u041F\u043E\u0448\u0443\u043A "),G={class:"grid grid-cols-2 md:grid-cols-4"},H={class:"text-center"},te={__name:"Index",setup(J){k("$swal");const x=k("$can"),a=m({data:[],managers:[],isLoading:!0}),g=m([]),L=h(()=>{const e={};return t.value.date.length===2&&(e.date_start=t.value.date[0].toLocaleDateString(),e.date_end=t.value.date[1].toLocaleDateString()),v.value&&(e.managers=v.value),e.page=t.value.currentPage,route("api.statistics.managers.index",e)}),v=h(()=>{let e=[];return a.value.managers.forEach(n=>{e.push(n.id)}),e.join()}),t=m({date:[],managers:[],currentPage:1});j(()=>{t.value.date[0]=M(new Date),t.value.date[1]=N(new Date),d(),axios.get(route("api.users.list.managers")).then(({data:e})=>g.value=e.result).catch(e=>console.log(e))});function y(){t.value.managers=[],t.value.date=[],t.value.managers=[],a.value.managers=[],d()}function d(){a.value.isLoading=!0,axios.get(L.value).then(({data:e})=>{a.value.data=e,a.value.isLoading=!1}).catch(e=>{console.log(e),a.value.isLoading=!1})}return(e,n)=>{const C=c("loader-component"),i=c("label-component"),f=c("button-component"),P=c("multiselect"),w=c("card-component"),B=c("pagination");return r(),p(D,{title:"\u0421\u0442\u0430\u0442\u0438\u0441\u0442\u0438\u043A\u0430 \u0434\u043B\u044F \u043C\u0435\u043D\u0435\u0434\u0436\u0435\u0440\u0456\u0432"},{header:u(()=>[z]),default:u(()=>[a.value.isLoading?(r(),p(C,{key:0})):b("",!0),!a.value.isLoading&&E(x)("show-bookkeeping-managers")?(r(),V("div",A,[l("div",I,[l("div",K,[o(i,{value:"\xA0"}),o(f,{type:"button",onClick:y},{default:u(()=>[T]),_:1})]),l("div",X,[o(i,{value:"\u0424\u0456\u043B\u044C\u0442\u0440 \u043F\u043E \u0434\u0430\u0442\u0456"}),o(S,{modelValue:t.value.date,"onUpdate:modelValue":n[0]||(n[0]=s=>t.value.date=s)},null,8,["modelValue"])]),l("div",Y,[o(i,{value:"\u0424\u0456\u043B\u044C\u0442\u0440 \u043F\u043E \u043C\u0435\u043D\u0435\u0434\u0436\u0435\u0440\u0430\u043C"}),o(P,{modelValue:a.value.managers,"onUpdate:modelValue":n[1]||(n[1]=s=>a.value.managers=s),options:g.value,label:"name",placeholder:"\u041E\u0431\u0435\u0440\u0456\u0442\u044C \u043C\u0435\u043D\u0435\u0434\u0436\u0435\u0440\u0456\u0432","track-by":"id",searchable:!0,"close-on-select":!1,multiple:""},null,8,["modelValue","options"])]),l("div",Z,[o(i,{value:"\xA0"}),o(f,{type:"button",onClick:d},{default:u(()=>[q]),_:1})])]),l("div",G,[(r(!0),V(F,null,O(a.value.data.generalStat,(s,$)=>(r(),p(w,{class:"text-center",title:$,description:s},null,8,["title","description"]))),256))]),o(U,{data:a.value.data.result.data},null,8,["data"]),l("div",H,[o(B,{pagination:a.value.data.result,"click-handler":d,modelValue:t.value.currentPage,"onUpdate:modelValue":n[2]||(n[2]=s=>t.value.currentPage=s)},null,8,["pagination","modelValue"])])])):b("",!0)]),_:1})}}};export{te as default};