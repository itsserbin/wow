import{L as x,o as k,j as $}from"./app.2c2e52ca.js";import w from"./Table.99ca6ae9.js";import D from"./StatisticLayout.0f895e4d.js";import{s as P,e as y,_ as B}from"./Datepicker.f60d9fe1.js";import{j as u,p as r,o as M,C as d,D as c,G as m,A as o,v as g,u as N,q as p,H as i,s as v,F as j,E as C,x as E}from"./index.e4375aa7.js";import"./moment.9709ab41.js";import"./_plugin-vue_export-helper.cdc0426e.js";import"./lazyload.6866379a.js";import"./Logo.6d532cc3.js";const F=E(" \u041F\u043E\u0432\u0435\u0440\u043D\u0435\u043D\u043D\u044F "),O={key:1,class:"grid grid-cols-1 gap-4"},S={class:"grid grid-cols-2 md:grid-cols-4"},U={class:"text-center"},K={__name:"Index",setup(b){m("$swal");const f=m("$can"),a=u({data:[],indicators:[],chart:null,isLoading:!0}),e=u({date:[],currentPage:1}),_=r(()=>{if(e.value.date.length===2)return{date_start:e.value.date[0].toLocaleDateString(),date_end:e.value.date[1].toLocaleDateString()}}),h=r(()=>e.value.last),L=r(()=>({..._.value,last:h.value,page:e.value.currentPage}));M(()=>{e.value.date[0]=P(new Date),e.value.date[1]=y(new Date),l()});const l=async()=>{a.value.isLoading=!0,axios.get(route("api.statistics.refunds.index",L.value)).then(({data:t})=>{a.value.data=t.result,a.value.isLoading=!1}).catch(t=>{console.log(t),a.value.isLoading=!1})};return(t,n)=>(o(),d(D,{title:"\u041F\u043E\u0432\u0435\u0440\u043D\u0435\u043D\u043D\u044F"},{header:c(()=>[F]),default:c(()=>[a.value.isLoading?(o(),d(x,{key:0})):g("",!0),!a.value.isLoading&&N(f)("show-bookkeeping-refunds")?(o(),p("div",O,[i(B,{modelValue:e.value.date,"onUpdate:modelValue":[n[0]||(n[0]=s=>e.value.date=s),l]},null,8,["modelValue"]),v("div",S,[(o(!0),p(j,null,C(a.value.indicatord,(s,V)=>(o(),d(k,{class:"text-center",title:V,description:t.$filters.formatMoney(s)},null,8,["title","description"]))),256))]),i(w,{data:a.value.data.data},null,8,["data"]),v("div",U,[i($,{pagination:a.value.data,"click-handler":l,modelValue:e.value.currentPage,"onUpdate:modelValue":n[1]||(n[1]=s=>e.value.currentPage=s)},null,8,["pagination","modelValue"])])])):g("",!0)]),_:1}))}};export{K as default};