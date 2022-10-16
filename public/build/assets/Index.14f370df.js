import J from"./Modal.228db268.js";import K from"./Chart.01425c52.js";import Q from"./StatisticLayout.3023ab07.js";import{h as W}from"./app.29455998.js";import X from"./LastParams.601af168.js";import{z as k,A as V,D as Z,u as G,U as f,R as s,Q as c,Z as h,K as $,O as A,L as _,J as r,F as H,S as Y,M as g,X as p,bb as ee,v as L,W as u}from"./_plugin-vue_export-helper.19045d4a.js";import"./Form.ce260021.js";import"./index.1ff5b4ab.js";import"./Sidebar.6e99e931.js";const te=p(" \u0412\u0438\u0442\u0440\u0430\u0442\u0438 "),oe={key:1},ae=p(" \u0414\u043E\u0434\u0430\u0442\u0438 "),le={class:"grid grid-cols-1 md:grid-cols-2 gap-4 mt-5"},se={class:"block"},ne={class:"block"},ie={class:"grid grid-cols-2 md:grid-cols-6"},ce=["onClick"],re=["onClick"],ke={__name:"Index",setup(ue){const d=L("$swal"),n=L("$can"),b={name:null,date:null,sum:null,quantity:1,comment:null,total:null,cost_category_id:null},t=k({data:[],chart:[],isLoading:!0,isActiveModal:!1,modalAction:"",item:{}}),a=k({date:[],filter:null,last:"one-month",page:1}),w=k([]),C=V(()=>{const e={};return a.value.filter&&(e.filter=a.value.filter),a.value.date.length===2&&(e.date_start=a.value.date[0],e.date_end=a.value.date[1]),a.value.last&&(e.last=a.value.last),e.page=a.value.page,e});function D(e){e?a.value.last=e:a.value={date:[],filter:null,last:null,page:1},i()}Z(()=>{i(),axios.get(route("api.statistics.costs.categories.list")).then(({data:e})=>{e.result.forEach(l=>{w.value.push({value:l.title,key:l.id})})}).catch(e=>console.log(e))});const S=V(()=>t.value.isActiveModal?J:null),B=G([{label:"ID",key:"id"},{label:"\u0414\u0430\u0442\u0430",key:"date"},{label:"\u041A\u0430\u0442\u0435\u0433\u043E\u0440\u0456\u044F",key:"category"},{label:"\u041A\u0456\u043B\u044C\u043A\u0456\u0441\u0442\u044C",key:"quantity"},{label:"\u0421\u0443\u043C\u0430",key:"sum"},{label:"\u0417\u0430\u0433\u0430\u043B\u043E\u043C",key:"total"},{label:"\u0412\u0456\u0434\u043F\u043E\u0432\u0456\u0434\u0430\u043B\u044C\u043D\u0438\u0439",key:"user"},{label:"\u041A\u043E\u043C\u0435\u043D\u0442\u0430\u0440",key:"comment"},{label:"\u041E\u043D\u043E\u0432\u043B\u0435\u043D\u043E<hr class='my-1'>\u0421\u0442\u0432\u043E\u0440\u0435\u043D\u043E",key:"timestamps"},{label:"#",key:"actions"}]);function F(){a.value.last="range",i()}function i(){t.value.isLoading=!0,axios.get(route("api.statistics.costs.index",C.value)).then(({data:e})=>{t.value.data=e,t.value.isLoading=!1}).catch(e=>{console.log(e),t.value.isLoading=!1}),axios.get(route("api.statistics.costs.chart",C.value)).then(({data:e})=>t.value.chart=e.result).catch(e=>console.log(e))}function x(e){n("destroy-colors")&&d({title:"\u0412\u0438\u0434\u0430\u043B\u0438\u0442\u0438?",icon:"warning",showCancelButton:!0}).then(l=>{l.isConfirmed&&axios.delete(route("api.statistics.costs.destroy",e)).then(()=>{i(),t.value.isActiveModal&&v(),d({icon:"success",title:"Destroyed!"})}).catch(m=>{console.log(m),d({icon:"error",title:"Error!"})})})}function v(){t.value.isActiveModal=!t.value.isActiveModal}function E(e,l){n("edit-costs")&&axios.get(route("api.statistics.costs.edit",e)).then(({data:m})=>{t.value.item=m.result,t.value.modalAction="edit",t.value.item.index=l,v()}).catch(m=>console.log(m))}function U(){n("edit-costs")&&axios.put(route("api.statistics.costs.update",t.value.item.id),t.value.item).then(()=>{v(),i(),d({title:"Success!",icon:"success"})}).catch(e=>{console.log(e),d({title:"Error!",icon:"error"})})}function j(){n("create-costs")&&axios.post(route("api.statistics.costs.create"),t.value.item).then(()=>{v(),t.value.item=b,i(),d({title:"Success!",icon:"success"})}).catch(e=>{console.log(e),d({title:"Error!",icon:"error"})})}function N(){t.value.modalAction==="edit"&&n("edit-costs")?U():t.value.modalAction==="create"&&n("create-costs")&&j()}function O(){n("create-costs")&&(Object.assign(t.value.item,b),t.value.modalAction="create",v())}return(e,l)=>{const m=u("loader-component"),q=u("button-component"),M=u("label-component"),I=u("select-component"),P=u("Datepicker"),R=u("card-component"),T=u("xcircle-component"),z=u("table-component");return c(),f(Q,{title:"\u0412\u0438\u0442\u0440\u0430\u0442\u0438"},{header:s(()=>[te]),default:s(()=>[t.value.isLoading?(c(),f(m,{key:0})):h("",!0),t.value.isLoading?h("",!0):(c(),$("div",oe,[A(n)("create-costs")?(c(),f(q,{key:0,type:"btn",onClick:O},{default:s(()=>[ae]),_:1})):h("",!0),_("div",le,[_("div",se,[r(M,{value:"\u0424\u0456\u043B\u044C\u0442\u0440 \u043F\u043E \u043A\u0430\u0442\u0435\u0433\u043E\u0440\u0456\u0457"}),r(I,{modelValue:a.value.filter,"onUpdate:modelValue":l[0]||(l[0]=o=>a.value.filter=o),options:w.value,onChange:i},null,8,["modelValue","options"])]),_("div",ne,[r(M,{value:"\u0424\u0456\u043B\u044C\u0442\u0440 \u043F\u043E \u0434\u0430\u0442\u0456"}),r(P,{modelValue:a.value.date,"onUpdate:modelValue":[l[1]||(l[1]=o=>a.value.date=o),F],class:"w-100",locale:"ru",placeholder:"\u041E\u0431\u0435\u0440\u0456\u0442\u044C \u0434\u0430\u0442\u0443",autoApply:"",monthChangeOnScroll:!1,enableTimePicker:!1,range:""},null,8,["modelValue"])])]),r(X,{"active-item":a.value.last,onSortByLast:D},null,8,["active-item"]),t.value.chart?(c(),f(K,{key:1,"chart-data":t.value.chart},null,8,["chart-data"])):h("",!0),_("div",ie,[(c(!0),$(H,null,Y(t.value.data.generalStat,(o,y)=>(c(),f(R,{class:"text-center",title:y,description:e.$filters.formatMoney(o)},null,8,["title","description"]))),256))]),r(z,{headings:B,rows:t.value.data.result.data,isSlotMode:!0},{id:s(({data:o})=>[_("a",{href:"javascript:",onClick:y=>E(o.row.id,o.i)},g(o.row.id),9,ce)]),date:s(({data:o})=>[p(g(e.$filters.dateFormat(o.row.date)),1)]),category:s(({data:o})=>[p(g(o.row.category.title),1)]),sum:s(({data:o})=>[p(g(e.$filters.formatMoney(o.row.sum)),1)]),total:s(({data:o})=>[p(g(e.$filters.formatMoney(o.row.total)),1)]),user:s(({data:o})=>[p(g(o.row.user?o.row.user.name:"-"),1)]),actions:s(({data:o})=>[_("a",{href:"javascript:",onClick:y=>x(o.row.id)},[r(T)],8,re)]),_:1},8,["headings","rows"]),r(W,{pagination:t.value.data.result,"click-handler":i,modelValue:a.value.page,"onUpdate:modelValue":l[2]||(l[2]=o=>a.value.page=o)},null,8,["pagination","modelValue"]),(c(),f(ee(A(S)),{item:t.value.item,onCloseModal:v,onSubmitForm:N,onDeclineForm:x},null,40,["item"]))]))]),_:1})}}};export{ke as default};
