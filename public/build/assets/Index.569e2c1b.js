import L from"./Chart.b382f3f6.js";import B from"./Table.7ada1123.js";import y from"./Indicators.555ea122.js";import P from"./StatisticLayout.743033c9.js";import $ from"./LastParams.37ac77dc.js";import{A as u,B as b,G as C,V as d,S as p,R as s,_ as m,L as N,M as v,K as o,Y as w,x as _,X as r}from"./moment.fb372146.js";import"./index.94031d8b.js";import"./app.ec138a24.js";const S=w(" \u0421\u0442\u0430\u0442\u0438\u0441\u0442\u0438\u043A\u0430 \u0437\u0430\u044F\u0432\u043E\u043A "),A={key:1},D={class:"grid grid-cols-1 gap-4 mt-5"},M={class:"block"},X={__name:"Index",setup(R){_("$swal"),_("$can");const t=u({orders:[],chart:null,indicators:null,isLoading:!0}),a=u({date:[],filter:null,last:"one-month",currentPage:1});u([]);const i=b(()=>{const e={};return a.value.date.length===2&&(e.date_start=a.value.date[0],e.date_end=a.value.date[1]),a.value.last&&(e.last=a.value.last),e.page=a.value.currentPage,e});C(()=>l());function g(e){e?a.value.last=e:a.value={date:[],filter:null,last:null,currentPage:1},l()}function f(){a.value.last="range",l()}function l(){t.value.isLoading=!0,axios.get(route("api.statistics.orders.index",i.value)).then(({data:e})=>{t.value.orders=e,t.value.isLoading=!1}).catch(e=>{console.log(e),t.value.isLoading=!1}),axios.get(route("api.statistics.orders.chart",i.value)).then(({data:e})=>t.value.chart=e.result).catch(e=>console.log(e)),axios.get(route("api.statistics.orders.indicators",i.value)).then(({data:e})=>t.value.indicators=e.result).catch(e=>console.log(e))}return(e,n)=>{const h=r("loader-component"),k=r("label-component"),V=r("Datepicker"),x=r("pagination");return s(),d(P,{title:"\u0421\u0442\u0430\u0442\u0438\u0441\u0442\u0438\u043A\u0430 \u0437\u0430\u044F\u0432\u043E\u043A"},{header:p(()=>[S]),default:p(()=>[t.value.isLoading?(s(),d(h,{key:0})):m("",!0),t.value.isLoading?m("",!0):(s(),N("div",A,[v("div",D,[v("div",M,[o(k,{value:"\u0424\u0456\u043B\u044C\u0442\u0440 \u043F\u043E \u0434\u0430\u0442\u0456"}),o(V,{modelValue:a.value.date,"onUpdate:modelValue":[n[0]||(n[0]=c=>a.value.date=c),f],class:"w-100",locale:"ru",placeholder:"\u041E\u0431\u0435\u0440\u0456\u0442\u044C \u0434\u0430\u0442\u0443",autoApply:"",monthChangeOnScroll:!1,enableTimePicker:!1,range:"",utc:""},null,8,["modelValue"])])]),o($,{"active-item":a.value.last,onSortByLast:g},null,8,["active-item"]),t.value.chart?(s(),d(L,{key:0,"chart-data":t.value.chart},null,8,["chart-data"])):m("",!0),o(y,{data:t.value.indicators},null,8,["data"]),o(B,{data:t.value.orders.result.data},null,8,["data"]),o(x,{pagination:t.value.orders.result,"click-handler":l,modelValue:a.value.currentPage,"onUpdate:modelValue":n[1]||(n[1]=c=>a.value.currentPage=c)},null,8,["pagination","modelValue"])]))]),_:1})}}};export{X as default};
