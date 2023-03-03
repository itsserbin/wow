import S from"./StatisticLayout.9cc76a37.js";import{s as A,e as O,_ as U}from"./Datepicker.27cc4262.js";import j from"./Table.fc8f7636.js";import{w as p,x as h,S as E,Q as m,K as i,X as k,H as c,F as u,P as b,B as F,y as x,z as l,J as n,M as I,O as z,L as _}from"./___vite-browser-external_commonjs-proxy.4f2b06be.js";import"./app.460df568.js";const H=_(" \u0421\u0442\u0430\u0442\u0438\u0441\u0442\u0438\u043A\u0430 \u0442\u043E\u0432\u0430\u0440\u0456\u0432 "),J={key:1,class:"grid grid-cols-1 gap-4"},K={class:"grid grid-cols-1 md:grid-cols-12 gap-4 mt-5"},Q={class:"block col-span-2 text-center"},T=_(" \u041E\u0447\u0438\u0441\u0442\u0438\u0442\u0438 "),X={class:"block col-span-4"},q={class:"block col-span-4"},G={class:"block col-span-2 text-center"},R=_(" \u041F\u043E\u0448\u0443\u043A "),W={class:"grid grid-cols-2 md:grid-cols-4"},Y={class:"text-center"},se={__name:"Index",setup(Z){k("$swal");const V=k("$can"),t=p({data:[],products:[],chart:null,isLoading:!0}),v=p([]),a=p({date:[],currentPage:1}),g=h(()=>{let e=[];return t.value.products.forEach(o=>{e.push(o.id)}),e.join()}),L=h(()=>{const e={};return a.value.date.length===2&&(e.date_start=a.value.date[0].toLocaleDateString(),e.date_end=a.value.date[1].toLocaleDateString()),g.value&&(e.products=g.value),e.page=a.value.currentPage,e});E(()=>{a.value.date[0]=A(new Date),a.value.date[1]=O(new Date),r(),axios.get(route("api.products.list")).then(({data:e})=>v.value=e.result).catch(e=>console.log(e))});function P(){a.value.date=[],t.value.products=[],r()}function y({h1:e,id:o}){return e.ua?e.ua+` (${o})`:e.ru?e.ru+` (${o})`:o}function C(e){e&&(a.value.currentPage=e),r()}function $(){a.value.currentPage=1,r()}function r(){t.value.isLoading=!0,axios.get(route("api.statistics.products.index",L.value)).then(({data:e})=>{t.value.data=e,t.value.isLoading=!1}).catch(e=>{console.log(e),t.value.isLoading=!1})}return(e,o)=>{const w=c("loader-component"),d=c("label-component"),f=c("button-component"),B=c("multiselect"),D=c("card-component"),M=c("pagination");return u(),m(S,{title:"\u0421\u0442\u0430\u0442\u0438\u0441\u0442\u0438\u043A\u0430 \u0442\u043E\u0432\u0430\u0440\u0456\u0432"},{header:i(()=>[H]),default:i(()=>[t.value.isLoading?(u(),m(w,{key:0})):b("",!0),!t.value.isLoading&&F(V)("show-bookkeeping-marketing")?(u(),x("div",J,[l("div",K,[l("div",Q,[n(d,{value:"\xA0"}),n(f,{type:"button",onClick:P},{default:i(()=>[T]),_:1})]),l("div",X,[n(d,{value:"\u0424\u0456\u043B\u044C\u0442\u0440 \u043F\u043E \u0434\u0430\u0442\u0456"}),n(U,{modelValue:a.value.date,"onUpdate:modelValue":o[0]||(o[0]=s=>a.value.date=s)},null,8,["modelValue"])]),l("div",q,[n(d,{value:"\u0424\u0456\u043B\u044C\u0442\u0440 \u043F\u043E \u043C\u0435\u043D\u0435\u0434\u0436\u0435\u0440\u0430\u043C"}),n(B,{modelValue:t.value.products,"onUpdate:modelValue":o[1]||(o[1]=s=>t.value.products=s),options:v.value,"custom-label":y,placeholder:"\u041E\u0431\u0435\u0440\u0456\u0442\u044C \u0442\u043E\u0432\u0430\u0440\u0438","track-by":"id",searchable:!0,"close-on-select":!1,multiple:""},null,8,["modelValue","options"])]),l("div",G,[n(d,{value:"\xA0"}),n(f,{type:"button",onClick:$},{default:i(()=>[R]),_:1})])]),l("div",W,[(u(!0),x(I,null,z(t.value.data.generalStat,(s,N)=>(u(),m(D,{class:"text-center",title:N,description:s||"0"},null,8,["title","description"]))),256))]),n(j,{data:t.value.data.result.data},null,8,["data"]),l("div",Y,[n(M,{pagination:t.value.data.result,"click-handler":C,modelValue:a.value.currentPage,"onUpdate:modelValue":o[2]||(o[2]=s=>a.value.currentPage=s)},null,8,["pagination","modelValue"])])])):b("",!0)]),_:1})}}};export{se as default};
