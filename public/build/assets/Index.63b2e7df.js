import V from"./Modal.b1bb4d5d.js";import C from"./Table.b3e21743.js";import"./app.834fdcb5.js";import{z as F,D as O,A as P,bO as a,U as u,R as v,W as c,Q as l,Z as f,O as g,K as w,J as _,bc as D,X as S,v as h}from"./moment.ad2399f6.js";import"./Form.bddf8083.js";import"./ItemsModal.842b3d17.js";import"./ItemsForm.060459ce.js";import"./ItemsTable.2dad54dc.js";const $=S(" \u0417\u0430\u043C\u043E\u0432\u043B\u0435\u043D\u043D\u044F "),B={key:1},R={__name:"Index",props:["statuses","payment_methods"],setup(M){const m=M,e=F({orders:[],currentPage:1,isLoading:!0,isActiveEditModal:!1,orderModal:{}}),n=h("$swal"),r=h("$can");O(()=>d());const y=P(()=>e.value.isActiveEditModal?V:null);function E(t){r("edit-orders")&&(a.put(route("api.orders.update",e.value.orderModal.id),e.value.orderModal),a.get(route("api.orders.edit",t.order_id)).then(({data:o})=>{e.value.orderModal=o.result}).catch(o=>console.log(o)))}function d(t){e.value.isLoading=!0,t&&(e.value.currentPage=t),a.get(route("api.orders.index",{page:e.value.currentPage})).then(o=>{Object.assign(e.value.orders,o.data.result),e.value.isLoading=!1}).catch(o=>{console.log(o),e.value.isLoading=!1})}function p(t){r("destroy-orders")&&(e.value.isLoading=!0,a.delete(route("api.orders.destroy",t)).then(()=>{e.value.isLoading=!1,d(),e.value.isActiveEditModal&&i(),n({title:"Success!",icon:"success"})}).catch(o=>{console.log(o),n({title:"Error!",icon:"error"})}))}function x(t,o){r("edit-orders")&&a.get(route("api.orders.edit",t)).then(({data:s})=>{e.value.orderModal.index=o,e.value.orderModal=s.result,i()}).catch(s=>console.log(s))}function L(){r("edit-orders")&&a.put(route("api.orders.update",e.value.orderModal.id),e.value.orderModal).then(()=>{i(),d(),n({title:"Success!",icon:"success"})}).catch(t=>{console.log(t),n({title:"Error!",icon:"error"})})}function i(){e.value.isActiveEditModal=!e.value.isActiveEditModal}return(t,o)=>{const s=c("loader-component"),b=c("paginate"),k=c("auth-layout");return l(),u(k,{title:"\u0417\u0430\u043C\u043E\u0432\u043B\u0435\u043D\u043D\u044F"},{header:v(()=>[$]),default:v(()=>[e.value.isLoading?(l(),u(s,{key:0})):f("",!0),!e.value.isLoading&&g(r)("show-orders")?(l(),w("div",B,[_(C,{data:e.value.orders.data,onOnEdit:x,onOnDestroy:p},null,8,["data"]),_(b,{pagination:e.value.orders,"click-handler":d,modelValue:e.value.currentPage,"onUpdate:modelValue":o[0]||(o[0]=A=>e.value.currentPage=A)},null,8,["pagination","modelValue"]),(l(),u(D(g(y)),{order:e.value.orderModal,statuses:m.statuses,paymentMethods:m.payment_methods,size:"extralarge",onCloseModal:i,onDeclineForm:p,onSubmitForm:L,onSubmitItemForm:E},null,40,["order","statuses","paymentMethods"]))])):f("",!0)]),_:1})}}};export{R as default};
