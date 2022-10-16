import D from"./StatisticLayout.d7758314.js";import{h as N}from"./app.592f9bfc.js";import{z as _,A as k,D as U,u as j,U as m,R as c,Q as r,Y as f,K as y,L as i,J as l,F as A,S as F,W as d,M as h,v as V,V as s}from"./_plugin-vue_export-helper.f3876adb.js";import"./Sidebar.9ff0592f.js";const E=d(" \u0421\u0442\u0430\u0442\u0438\u0441\u0442\u0438\u043A\u0430 \u0434\u043B\u044F \u043C\u0435\u043D\u0435\u0434\u0436\u0435\u0440\u0456\u0432 "),O={key:1},T={class:"grid grid-cols-1 md:grid-cols-12 gap-4 mt-5"},z={class:"block col-span-2 text-center"},I=d(" \u041E\u0447\u0438\u0441\u0442\u0438\u0442\u0438 "),J={class:"block col-span-4"},K={class:"block col-span-4"},Q={class:"block col-span-2 text-center"},R=d(" \u041F\u043E\u0448\u0443\u043A "),W={class:"grid grid-cols-2 md:grid-cols-4"},Z={__name:"Index",setup(Y){V("$swal"),V("$can");const a=_({data:[],managers:[],isLoading:!0}),g=_([]),x=k(()=>{const e={};return o.value.date.length===2&&(e.date_start=o.value.date[0],e.date_end=o.value.date[1]),v.value&&(e.managers=v.value),console.log(e),e.page=o.value.currentPage,route("api.statistics.managers.index",e)}),v=k(()=>{let e=[];return a.value.managers.forEach(n=>{e.push(n.id)}),e.join()}),o=_({date:[],managers:[],currentPage:1});U(()=>{u(),axios.get(route("api.users.list.managers")).then(({data:e})=>g.value=e.result).catch(e=>console.log(e))});const L=j([{label:"\u0414\u0430\u0442\u0430",key:"date"},{label:"\u041D\u0430\u0434\u0456\u0439\u0448\u043B\u043E \u0437\u0430\u044F\u0432\u043E\u043A",key:"count_applications"},{label:"\u0412 \u043F\u0440\u043E\u0446\u0435\u0441\u0456",key:"in_process_applications"},{label:"\u0417\u0440\u043E\u0431\u043B\u0435\u043D\u043E \u0434\u043E\u0434.\u043F\u0440\u043E\u0434\u0430\u0436",key:"count_additional_sales"},{label:"\u0421\u043A\u0430\u0441\u043E\u0432\u0430\u043D\u0438\u0445",key:"canceled_applications"},{label:"\u041F\u043E\u0432\u0435\u0440\u043D\u0435\u043D\u044C",key:"returned_applications"},{label:"\u0412\u0438\u043A\u043E\u043D\u0430\u043D\u0438\u0445",key:"done_applications"},{label:"\u0417\u0430\u0433\u0430\u043B\u044C\u043D\u0438\u0439 \u0430\u043F\u0440\u0443\u0432",key:"total_applications"},{label:"\u041A\u0456\u043B\u044C\u043A\u0456\u0441\u0442\u044C \u0434\u043E\u0434.\u043F\u0440\u043E\u0434\u0430\u0436\u0456\u0432 \u043F\u043E\u0432\u0456\u0442\u0440\u044F",key:"count_sale_of_air"},{label:"\u0421\u0443\u043C\u0430 \u0434\u043E\u0434.\u043F\u0440\u043E\u0434\u0430\u0436\u0456\u0432 \u043F\u043E\u0432\u0456\u0442\u0440\u044F",key:"price_sale_of_air"},{label:"\u041F\u0440\u0438\u0431\u0443\u0442\u043E\u043A \u0437 \u0434\u043E\u0434.\u043F\u0440\u043E\u0434\u0430\u0436\u0456\u0432 \u043F\u043E\u0432\u0456\u0442\u0440\u044F",key:"total_sale_of_air"},{label:"\u0417\u0430\u0433\u0430\u043B\u044C\u043D\u0430 \u043C\u0430\u0440\u0436\u0430 \u0434\u043E\u0434.\u043F\u0440\u043E\u0434\u0430\u0436\u0456\u0432",key:"sum_additional_sales"},{label:"\u0421\u0443\u043C\u0430 \u0437\u0430 \u0437\u0430\u044F\u0432\u043A\u0438",key:"sum_price_applications"},{label:"\u0421\u0443\u043C\u0430 \u0437\u0430 \u0434\u043E\u0434.\u043F\u0440\u043E\u0434\u0430\u0436\u0456",key:"sum_price_additional_sales"},{label:"\u041A\u0456\u043B\u044C\u043A\u0456\u0441\u0442\u044C \u043F\u0435\u0440\u0435\u0434\u043E\u043F\u043B\u0430\u0442",key:"count_prepayments"},{label:"\u0421\u0443\u043C\u0430 \u0437\u0430 \u043F\u0435\u0440\u0435\u0434\u043E\u043F\u043B\u0430\u0442\u0438",key:"prepayments_amount"},{label:"\u0417\u0430\u0433\u0430\u043B\u044C\u043D\u0430 \u0441\u0443\u043C\u0430",key:"total_price"}]);function w(){a.value.managers=[],a.value.date=[],a.value.managers=[],u()}function u(){a.value.isLoading=!0,axios.get(x.value).then(e=>{Object.assign(a.value.data,e.data),a.value.isLoading=!1}).catch(e=>{console.log(e),a.value.isLoading=!1})}return(e,n)=>{const C=s("loader-component"),p=s("label-component"),b=s("button-component"),$=s("Datepicker"),P=s("multiselect"),M=s("card-component"),S=s("table-component");return r(),m(D,{title:"\u0421\u0442\u0430\u0442\u0438\u0441\u0442\u0438\u043A\u0430 \u0434\u043B\u044F \u043C\u0435\u043D\u0435\u0434\u0436\u0435\u0440\u0456\u0432"},{header:c(()=>[E]),default:c(()=>[a.value.isLoading?(r(),m(C,{key:0})):f("",!0),a.value.isLoading?f("",!0):(r(),y("div",O,[i("div",T,[i("div",z,[l(p,{value:"\xA0"}),l(b,{type:"button",onClick:w},{default:c(()=>[I]),_:1})]),i("div",J,[l(p,{value:"\u0424\u0456\u043B\u044C\u0442\u0440 \u043F\u043E \u0434\u0430\u0442\u0456"}),l($,{modelValue:o.value.date,"onUpdate:modelValue":n[0]||(n[0]=t=>o.value.date=t),class:"w-100",locale:"ru",placeholder:"\u041E\u0431\u0435\u0440\u0456\u0442\u044C \u0434\u0430\u0442\u0443",autoApply:"",monthChangeOnScroll:!1,enableTimePicker:!1,range:"",utc:""},null,8,["modelValue"])]),i("div",K,[l(p,{value:"\u0424\u0456\u043B\u044C\u0442\u0440 \u043F\u043E \u043C\u0435\u043D\u0435\u0434\u0436\u0435\u0440\u0430\u043C"}),l(P,{modelValue:a.value.managers,"onUpdate:modelValue":n[1]||(n[1]=t=>a.value.managers=t),options:g.value,label:"name",placeholder:"\u041E\u0431\u0435\u0440\u0456\u0442\u044C \u043C\u0435\u043D\u0435\u0434\u0436\u0435\u0440\u0456\u0432","track-by":"id",searchable:!0,multiple:""},null,8,["modelValue","options"])]),i("div",Q,[l(p,{value:"\xA0"}),l(b,{type:"button",onClick:u},{default:c(()=>[R]),_:1})])]),i("div",W,[(r(!0),y(A,null,F(a.value.data.generalStat,(t,B)=>(r(),m(M,{class:"text-center",title:B,description:e.$filters.formatMoney(t)},null,8,["title","description"]))),256))]),l(S,{headings:L,rows:a.value.data.result.data,isSlotMode:!0},{date:c(({data:t})=>[d(h(e.$filters.dateFormat(t.row.date)),1)]),costs:c(({data:t})=>[d(h(e.$filters.formatMoney(t.row.costs)),1)]),_:1},8,["headings","rows"]),l(N,{pagination:a.value.data.result,"click-handler":u,modelValue:o.value.currentPage,"onUpdate:modelValue":n[2]||(n[2]=t=>o.value.currentPage=t)},null,8,["pagination","modelValue"])]))]),_:1})}}};export{Z as default};