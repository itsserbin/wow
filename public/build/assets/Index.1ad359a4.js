import A from"./Modal.64bc7202.js";import C from"./Table.4d05ead4.js";import"./app.592f9bfc.js";import{z as P,D as b,A as w,bN as i,U as r,R as v,V as u,Q as c,Y as g,O as f,K as D,J as _,bb as N,W as $,v as h}from"./_plugin-vue_export-helper.f3876adb.js";import"./Form.3b98f42a.js";import"./ItemsModal.58b6b144.js";import"./ItemsForm.7df5e354.js";import"./ItemsTable.393c297d.js";const B=$(" \u041A\u043B\u0456\u0454\u043D\u0442\u0438 "),F={key:1},Q={__name:"Index",props:["statuses","payment_methods"],setup(y){const d=y,e=P({data:[],currentPage:1,isLoading:!0,isActiveEditModal:!1,modal:{}}),n=h("$swal"),m=h("$can");b(()=>s());const M=w(()=>e.value.isActiveEditModal?A:null);function s(a){e.value.isLoading=!0,a&&(e.value.currentPage=a),i.get(route("api.clients.index",{page:e.value.currentPage})).then(({data:t})=>{e.value.data=t.result,e.value.isLoading=!1}).catch(t=>{console.log(t),e.value.isLoading=!1})}function p(a){m("destroy-clients")&&(e.value.isLoading=!0,i.delete(route("api.clients.destroy",a)).then(()=>{e.value.isLoading=!1,s(),e.value.isActiveEditModal&&l(),n({title:"Success!",icon:"success"})}).catch(t=>{console.log(t),n({title:"Error!",icon:"error"})}))}function E(a,t){i.get(route("api.clients.edit",a)).then(({data:o})=>{e.value.modal.index=t,e.value.modal=o.result,l()}).catch(o=>console.log(o))}function x(){i.put(route("api.clients.update",e.value.modal.id),e.value.modal).then(()=>{l(),s(),n({title:"Success!",icon:"success"})}).catch(a=>{console.log(a),n({title:"Error!",icon:"error"})})}function l(){e.value.isActiveEditModal=!e.value.isActiveEditModal}return(a,t)=>{const o=u("loader-component"),L=u("paginate"),V=u("auth-layout");return c(),r(V,{title:"\u041A\u043B\u0456\u0454\u043D\u0442\u0438"},{header:v(()=>[B]),default:v(()=>[e.value.isLoading?(c(),r(o,{key:0})):g("",!0),!e.value.isLoading&&f(m)("show-clients")?(c(),D("div",F,[_(C,{data:e.value.data.data,onOnEdit:E,onOnDestroy:p},null,8,["data"]),_(L,{pagination:e.value.data,"click-handler":s,modelValue:e.value.currentPage,"onUpdate:modelValue":t[0]||(t[0]=k=>e.value.currentPage=k)},null,8,["pagination","modelValue"]),(c(),r(N(f(M)),{order:e.value.modal,statuses:d.statuses,paymentMethods:d.payment_methods,size:"extralarge",onCloseModal:l,onDeclineForm:p,onSubmitForm:x},null,40,["order","statuses","paymentMethods"]))])):g("",!0)]),_:1})}}};export{Q as default};
