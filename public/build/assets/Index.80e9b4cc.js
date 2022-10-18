import S from"./Chart.7904c578.js";import M from"./StatisticLayout.b5ba8b5f.js";import C from"./LastParams.1a91c023.js";import{A as g,B as N,G as D,v as F,V as c,S as d,R as l,$ as u,L as v,M as m,K as s,F as U,U as A,Y as p,O as f,x as h,X as n}from"./moment.e1708d83.js";import"./index.89f84162.js";import"./app.663608d0.js";const O=p(" \u041C\u0430\u0440\u043A\u0435\u0442\u0438\u043D\u0433\u043E\u0432\u0430 \u0441\u0442\u0430\u0442\u0438\u0441\u0442\u0438\u043A\u0430 "),R={key:1},T={class:"grid grid-cols-1 gap-4 mt-5"},j={class:"block"},E={class:"grid grid-cols-2 md:grid-cols-4"},H={__name:"Index",setup(G){h("$swal"),h("$can");const t=g({data:[],chart:null,isLoading:!0}),a=g({date:[],filter:null,last:"one-month",currentPage:1}),_=N(()=>{const e={};return a.value.date.length===2&&(e.date_start=a.value.date[0],e.date_end=a.value.date[1]),a.value.last&&(e.last=a.value.last),e.page=a.value.currentPage,e});D(()=>r());const k=F([{label:"\u0414\u0430\u0442\u0430",key:"date"},{label:"\u0421\u0440. \u0446\u0456\u043D\u0430 \u0437\u0430\u044F\u0432\u043A\u0438",key:"average_application_price"},{label:"\u0421\u0440. \u0446\u0456\u043D\u0430 \u0430\u043F\u0440\u0443\u0432\u0430",key:"average_approve_application_price"},{label:"\u0421\u0440. \u0446\u0456\u043D\u0430 \u0432\u0438\u043A\u043E\u043D\u0430\u043D\u043E\u0457 \u0437\u0430\u044F\u0432\u043A\u0438",key:"average_done_application_price"},{label:"\u0421\u0440. \u0447\u0435\u043A",key:"average_check"},{label:"\u0421\u0440. \u043C\u0430\u0440\u0436\u0430",key:"average_marginality"},{label:"\u0421\u0440. \u043A\u0456\u043B\u044C\u043A\u0456\u0441\u0442\u044C \u0442\u043E\u0432\u0430\u0440\u0456\u0432",key:"average_items"}]);function y(e){e?a.value.last=e:a.value={date:[],filter:null,last:null,currentPage:1},r()}function b(){a.value.last="range",r()}function r(){t.value.isLoading=!0,axios.get(route("api.statistics.marketing.index",_.value)).then(({data:e})=>{t.value.data=e,t.value.isLoading=!1}).catch(e=>{console.log(e),t.value.isLoading=!1}),axios.get(route("api.statistics.marketing.chart",_.value)).then(({data:e})=>t.value.chart=e.result).catch(e=>console.log(e))}return(e,i)=>{const V=n("loader-component"),L=n("label-component"),$=n("Datepicker"),B=n("card-component"),w=n("table-component"),x=n("pagination");return l(),c(M,{title:"\u041C\u0430\u0440\u043A\u0435\u0442\u0438\u043D\u0433\u043E\u0432\u0430 \u0441\u0442\u0430\u0442\u0438\u0441\u0442\u0438\u043A\u0430"},{header:d(()=>[O]),default:d(()=>[t.value.isLoading?(l(),c(V,{key:0})):u("",!0),t.value.isLoading?u("",!0):(l(),v("div",R,[m("div",T,[m("div",j,[s(L,{value:"\u0424\u0456\u043B\u044C\u0442\u0440 \u043F\u043E \u0434\u0430\u0442\u0456"}),s($,{modelValue:a.value.date,"onUpdate:modelValue":[i[0]||(i[0]=o=>a.value.date=o),b],class:"w-100",locale:"ru",placeholder:"\u041E\u0431\u0435\u0440\u0456\u0442\u044C \u0434\u0430\u0442\u0443",autoApply:"",monthChangeOnScroll:!1,enableTimePicker:!1,range:"",utc:""},null,8,["modelValue"])])]),s(C,{"active-item":a.value.last,onSortByLast:y},null,8,["active-item"]),t.value.chart?(l(),c(S,{key:0,"chart-data":t.value.chart},null,8,["chart-data"])):u("",!0),m("div",E,[(l(!0),v(U,null,A(t.value.data.generalStatistics,(o,P)=>(l(),c(B,{class:"text-center",title:P,description:e.$filters.formatMoney(o)},null,8,["title","description"]))),256))]),s(w,{headings:k,rows:t.value.data.result.data,isSlotMode:!0},{date:d(({data:o})=>[p(f(e.$filters.dateFormat(o.row.date)),1)]),costs:d(({data:o})=>[p(f(e.$filters.formatMoney(o.row.costs)),1)]),_:1},8,["headings","rows"]),s(x,{pagination:t.value.data.result,"click-handler":r,modelValue:a.value.currentPage,"onUpdate:modelValue":i[1]||(i[1]=o=>a.value.currentPage=o)},null,8,["pagination","modelValue"])]))]),_:1})}}};export{H as default};
