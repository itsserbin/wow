import x from"./Chart.f8ce66df.js";import S from"./StatisticLayout.68e0de58.js";import{h as M}from"./app.22f6e2f6.js";import C from"./LastParams.454a7447.js";import{z as g,A as D,D as N,u as F,U as c,R as u,Q as o,W as d,K as v,L as m,J as n,F as U,S as A,Z as p,M as f,v as h,V as s}from"./_plugin-vue_export-helper.a5aa4da2.js";import"./index.81d0636a.js";import"./Sidebar.e61fd8e8.js";const R=p(" \u041C\u0430\u0440\u043A\u0435\u0442\u0438\u043D\u0433\u043E\u0432\u0430 \u0441\u0442\u0430\u0442\u0438\u0441\u0442\u0438\u043A\u0430 "),T={key:1},j={class:"grid grid-cols-1 gap-4 mt-5"},z={class:"block"},E={class:"grid grid-cols-2 md:grid-cols-4"},G={__name:"Index",setup(I){h("$swal"),h("$can");const t=g({data:[],chart:null,isLoading:!0}),a=g({date:[],filter:null,last:"one-month",currentPage:1}),_=D(()=>{const e={};return a.value.date.length===2&&(e.date_start=a.value.date[0],e.date_end=a.value.date[1]),a.value.last&&(e.last=a.value.last),e.page=a.value.currentPage,e});N(()=>r());const k=F([{label:"\u0414\u0430\u0442\u0430",key:"date"},{label:"\u0421\u0440. \u0446\u0456\u043D\u0430 \u0437\u0430\u044F\u0432\u043A\u0438",key:"average_application_price"},{label:"\u0421\u0440. \u0446\u0456\u043D\u0430 \u0430\u043F\u0440\u0443\u0432\u0430",key:"average_approve_application_price"},{label:"\u0421\u0440. \u0446\u0456\u043D\u0430 \u0432\u0438\u043A\u043E\u043D\u0430\u043D\u043E\u0457 \u0437\u0430\u044F\u0432\u043A\u0438",key:"average_done_application_price"},{label:"\u0421\u0440. \u0447\u0435\u043A",key:"average_check"},{label:"\u0421\u0440. \u043C\u0430\u0440\u0436\u0430",key:"average_marginality"},{label:"\u0421\u0440. \u043A\u0456\u043B\u044C\u043A\u0456\u0441\u0442\u044C \u0442\u043E\u0432\u0430\u0440\u0456\u0432",key:"average_items"}]);function y(e){e?a.value.last=e:a.value={date:[],filter:null,last:null,currentPage:1},r()}function b(){a.value.last="range",r()}function r(){t.value.isLoading=!0,axios.get(route("api.statistics.marketing.index",_.value)).then(({data:e})=>{t.value.data=e,t.value.isLoading=!1}).catch(e=>{console.log(e),t.value.isLoading=!1}),axios.get(route("api.statistics.marketing.chart",_.value)).then(({data:e})=>t.value.chart=e.result).catch(e=>console.log(e))}return(e,i)=>{const V=s("loader-component"),L=s("label-component"),$=s("Datepicker"),w=s("card-component"),B=s("table-component");return o(),c(S,{title:"\u041C\u0430\u0440\u043A\u0435\u0442\u0438\u043D\u0433\u043E\u0432\u0430 \u0441\u0442\u0430\u0442\u0438\u0441\u0442\u0438\u043A\u0430"},{header:u(()=>[R]),default:u(()=>[t.value.isLoading?(o(),c(V,{key:0})):d("",!0),t.value.isLoading?d("",!0):(o(),v("div",T,[m("div",j,[m("div",z,[n(L,{value:"\u0424\u0456\u043B\u044C\u0442\u0440 \u043F\u043E \u0434\u0430\u0442\u0456"}),n($,{modelValue:a.value.date,"onUpdate:modelValue":[i[0]||(i[0]=l=>a.value.date=l),b],class:"w-100",locale:"ru",placeholder:"\u041E\u0431\u0435\u0440\u0456\u0442\u044C \u0434\u0430\u0442\u0443",autoApply:"",monthChangeOnScroll:!1,enableTimePicker:!1,range:"",utc:""},null,8,["modelValue"])])]),n(C,{"active-item":a.value.last,onSortByLast:y},null,8,["active-item"]),t.value.chart?(o(),c(x,{key:0,"chart-data":t.value.chart},null,8,["chart-data"])):d("",!0),m("div",E,[(o(!0),v(U,null,A(t.value.data.generalStatistics,(l,P)=>(o(),c(w,{class:"text-center",title:P,description:e.$filters.formatMoney(l)},null,8,["title","description"]))),256))]),n(B,{headings:k,rows:t.value.data.result.data,isSlotMode:!0},{date:u(({data:l})=>[p(f(e.$filters.dateFormat(l.row.date)),1)]),costs:u(({data:l})=>[p(f(e.$filters.formatMoney(l.row.costs)),1)]),_:1},8,["headings","rows"]),n(M,{pagination:t.value.data.result,"click-handler":r,modelValue:a.value.currentPage,"onUpdate:modelValue":i[1]||(i[1]=l=>a.value.currentPage=l)},null,8,["pagination","modelValue"])]))]),_:1})}}};export{G as default};