import{L as k,m as x,e as $}from"./app-351aedfb.js";import w from"./Table-d7202592.js";import y from"./StatisticLayout-07a4417b.js";import{s as P,e as B,_ as D}from"./Datepicker-b6a11069.js";import{r as u,f as r,o as M,s as i,v as c,y as m,p as o,k as N,j as g,u as j,g as p,z as d,i as v,F as C,x as F}from"./app-0cccff29.js";import"./index.esm-87d59e5b.js";import"./vue-i18n.esm-bundler-7516fc44.js";import"./moment-fbc5633a.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./Logo-857fc5bc.js";const O={key:1,class:"grid grid-cols-1 gap-4"},S={class:"grid grid-cols-2 md:grid-cols-4"},U={class:"text-center"},K={__name:"Index",setup(b){m("$swal");const f=m("$can"),a=u({data:[],indicators:[],chart:null,isLoading:!0}),e=u({date:[],currentPage:1}),_=r(()=>{if(e.value.date.length===2)return{date_start:e.value.date[0].toLocaleDateString(),date_end:e.value.date[1].toLocaleDateString()}}),h=r(()=>e.value.last),L=r(()=>({..._.value,last:h.value,page:e.value.currentPage}));M(()=>{e.value.date[0]=P(new Date),e.value.date[1]=B(new Date),l()});const l=async()=>{a.value.isLoading=!0,axios.get(route("api.statistics.refunds.index",L.value)).then(({data:t})=>{a.value.data=t.result,a.value.isLoading=!1}).catch(t=>{console.log(t),a.value.isLoading=!1})};return(t,n)=>(o(),i(y,{title:"Повернення"},{header:c(()=>[N(" Повернення ")]),default:c(()=>[a.value.isLoading?(o(),i(k,{key:0})):g("",!0),!a.value.isLoading&&j(f)("show-bookkeeping-refunds")?(o(),p("div",O,[d(D,{modelValue:e.value.date,"onUpdate:modelValue":[n[0]||(n[0]=s=>e.value.date=s),l]},null,8,["modelValue"]),v("div",S,[(o(!0),p(C,null,F(a.value.indicatord,(s,V)=>(o(),i(x,{class:"text-center",title:V,description:t.$filters.formatMoney(s)},null,8,["title","description"]))),256))]),d(w,{data:a.value.data.data},null,8,["data"]),v("div",U,[d($,{pagination:a.value.data,"click-handler":l,modelValue:e.value.currentPage,"onUpdate:modelValue":n[1]||(n[1]=s=>e.value.currentPage=s)},null,8,["pagination","modelValue"])])])):g("",!0)]),_:1}))}};export{K as default};
