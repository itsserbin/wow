import S from"./Chart.273db115.js";import C from"./StatisticLayout.b5ba8b5f.js";import N from"./LastParams.1a91c023.js";import{A as p,B as D,G as F,v as U,V as c,S as o,R as n,$ as _,L as v,M as f,K as u,F as A,U as O,Y as l,O as s,x as y,X as i}from"./moment.e1708d83.js";import"./index.89f84162.js";import"./app.663608d0.js";const R=l(" \u041F\u0440\u0438\u0431\u0443\u0442\u043E\u043A "),T={key:1},j={class:"grid grid-cols-1 gap-4 mt-5"},E={class:"block"},G={class:"grid grid-cols-2 md:grid-cols-4"},J={__name:"Index",setup(I){y("$swal"),y("$can");const r=p({profits:[],chart:null,isLoading:!0}),t=p({date:[],last:"one-month",currentPage:1});p([]);const g=D(()=>{const e={};return t.value.date.length===2&&(e.date_start=t.value.date[0],e.date_end=t.value.date[1]),t.value.last&&(e.last=t.value.last),e.page=t.value.currentPage,e});F(()=>m());const h=U([{label:"\u0414\u0430\u0442\u0430",key:"date"},{label:"\u0412\u0438\u0442\u0440\u0430\u0442\u0438",key:"cost"},{label:"\u041E\u0431\u0435\u0440\u0442",key:"turnover"},{label:"\u041C\u0430\u0440\u0436\u0430",key:"marginality"},{label:"\u0427\u0438\u0441\u0442\u0438\u0439 \u043F\u0440\u0438\u0431\u0443\u0442\u043E\u043A",key:"clear_profit"},{label:"\u0412\u0438\u043D\u0435\u043D \u043F\u043E\u0441\u0442\u0430\u0447\u0430\u043B\u044C\u043D\u0438\u043A",key:"debt_supplier"},{label:"\u041F\u0440\u043E\u0434\u0430\u0436\u0456 \u043F\u043E\u0432\u0456\u0442\u0440\u044F",key:"sale_of_air_sum"},{label:"\u0421\u0435\u0440\u0435\u0434\u043D\u044F \u043C\u0430\u0440\u0436\u0430",key:"average_marginality"},{label:"\u0421\u0443\u043C\u0430 \u043F\u0435\u0440\u0435\u043E\u0434\u043E\u043F\u043B\u0430\u0442",key:"prepayment_sum"},{label:"\u0421\u0443\u043C\u0430 \u0437\u0430 \u043F\u043E\u0432\u0435\u0440\u043D\u0435\u043D\u043D\u044F \u0442\u043E\u0432\u0430\u0440\u0443",key:"refunds_sum"},{label:"\u041C\u0430\u0440\u0436\u0430 \u0437 \u0434\u043E\u0434.\u043F\u0440\u043E\u0434\u0430\u0436",key:"additional_sales_marginality_sum"},{label:"\u041E\u0431\u0435\u0440\u0442 \u0434\u043E\u0434.\u043F\u0440\u043E\u0434\u0430\u0436",key:"additional_sales_sum"}]);function k(e){e?t.value.last=e:t.value={date:[],last:null,currentPage:1},m()}function b(e){t.value.last="range",m()}function m(){r.value.isLoading=!0,axios.get(route("api.statistics.profits.index",g.value)).then(({data:e})=>{r.value.profits=e,r.value.isLoading=!1}).catch(e=>{console.log(e),r.value.isLoading=!1}),axios.get(route("api.statistics.profits.chart",g.value)).then(({data:e})=>r.value.chart=e.result).catch(e=>console.log(e))}return(e,d)=>{const $=i("loader-component"),w=i("label-component"),M=i("Datepicker"),V=i("card-component"),L=i("table-component"),B=i("pagination");return n(),c(C,{title:"\u041F\u0440\u0438\u0431\u0443\u0442\u043E\u043A"},{header:o(()=>[R]),default:o(()=>[r.value.isLoading?(n(),c($,{key:0})):_("",!0),r.value.isLoading?_("",!0):(n(),v("div",T,[f("div",j,[f("div",E,[u(w,{value:"\u0424\u0456\u043B\u044C\u0442\u0440 \u043F\u043E \u0434\u0430\u0442\u0456"}),u(M,{modelValue:t.value.date,"onUpdate:modelValue":[d[0]||(d[0]=a=>t.value.date=a),b],class:"w-100",placeholder:"\u041E\u0431\u0435\u0440\u0456\u0442\u044C \u0434\u0430\u0442\u0443",autoApply:"",monthChangeOnScroll:!1,enableTimePicker:!1,range:"",locale:"ru"},null,8,["modelValue"])])]),u(N,{"active-item":t.value.last,onSortByLast:k},null,8,["active-item"]),r.value.chart?(n(),c(S,{key:0,"chart-data":r.value.chart},null,8,["chart-data"])):_("",!0),f("div",G,[(n(!0),v(A,null,O(r.value.profits.generalStat,(a,P)=>(n(),c(V,{class:"text-center",title:P,description:e.$filters.formatMoney(a)},null,8,["title","description"]))),256))]),u(L,{headings:h,rows:r.value.profits.result.data,isSlotMode:!0},{date:o(({data:a})=>[l(s(e.$filters.dateFormat(a.row.date)),1)]),costs:o(({data:a})=>[l(s(e.$filters.formatMoney(a.row.costs)),1)]),turnover:o(({data:a})=>[l(s(e.$filters.formatMoney(a.row.turnover)),1)]),marginality:o(({data:a})=>[l(s(e.$filters.formatMoney(a.row.marginality)),1)]),clear_profit:o(({data:a})=>[l(s(e.$filters.formatMoney(a.row.clear_profit)),1)]),average_marginality:o(({data:a})=>[l(s(e.$filters.formatMoney(a.row.average_marginality)),1)]),sale_of_air_sum:o(({data:a})=>[l(s(e.$filters.formatMoney(a.row.sale_of_air_sum)),1)]),debt_supplier:o(({data:a})=>[l(s(e.$filters.formatMoney(a.row.debt_supplier)),1)]),prepayment_sum:o(({data:a})=>[l(s(e.$filters.formatMoney(a.row.prepayment_sum)),1)]),refunds_sum:o(({data:a})=>[l(s(e.$filters.formatMoney(a.row.refunds_sum)),1)]),additional_sales_marginality_sum:o(({data:a})=>[l(s(e.$filters.formatMoney(a.row.additional_sales_marginality_sum)),1)]),additional_sales_sum:o(({data:a})=>[l(s(e.$filters.formatMoney(a.row.additional_sales_sum)),1)]),_:1},8,["headings","rows"]),u(B,{pagination:r.value.profits.result,"click-handler":m,modelValue:t.value.currentPage,"onUpdate:modelValue":d[1]||(d[1]=a=>t.value.currentPage=a)},null,8,["pagination","modelValue"])]))]),_:1})}}};export{J as default};
