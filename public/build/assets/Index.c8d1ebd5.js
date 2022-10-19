import V from"./Modal.e09ac729.js";import E from"./OptionsLayout.de073cbf.js";import P from"./Table.8146a3c8.js";import{A as $,G as B,B as D,V as r,S as u,R as l,$ as d,P as m,L as F,K as _,bc as O,Y as h,x as g,X as f}from"./moment.e1708d83.js";import"./Form.0b93bbf2.js";const S=h(" \u0420\u043E\u043B\u0456 "),j={key:1},N=h(" \u0414\u043E\u0434\u0430\u0442\u0438 "),X={__name:"Index",setup(U){const n=g("$swal"),a=g("$can"),p={name:null,email:null,roles:[],password:null,password_confirmation:null},e=$({data:[],currentPage:1,isLoading:!0,isActiveModal:!1,modalAction:"",item:{}});B(()=>{c(1)});const x=D(()=>e.value.isActiveModal?V:null);function c(t){e.value.isLoading=!0,t&&(e.value.currentPage=t),axios.get(route("api.users.index",{page:e.value.currentPage})).then(o=>{Object.assign(e.value.data,o.data.result),e.value.isLoading=!1}).catch(o=>{console.log(o),e.value.isLoading=!1})}function v(t){a("destroy-users")&&n({title:"\u0412\u0438\u0434\u0430\u043B\u0438\u0442\u0438?",icon:"warning",showCancelButton:!0}).then(o=>{o.isConfirmed&&axios.delete(route("api.users.destroy",t)).then(()=>{c(),e.value.isActiveModal&&s(),n({icon:"success",title:"Destroyed!"})}).catch(i=>{console.log(i),n({icon:"error",title:"Error!"})})})}function s(){e.value.isActiveModal=!e.value.isActiveModal}function A(t,o){a("edit-users")&&axios.get(route("api.users.edit",t)).then(({data:i})=>{e.value.item=i.result,e.value.modalAction="edit",e.value.item.index=o,s()}).catch(i=>console.log(i))}function y(){a("edit-users")&&axios.put(route("api.users.update",e.value.item.id),e.value.item).then(()=>{s(),c(),n({title:"Success!",icon:"success"})}).catch(t=>{console.log(t),n({title:"Error!",icon:"error"})})}function C(){a("create-users")&&axios.post(route("api.users.create"),e.value.item).then(()=>{s(),e.value.item=p,c(),n({title:"Success!",icon:"success"})}).catch(t=>{console.log(t),n({title:"Error!",icon:"error"})})}function b(){e.value.modalAction==="edit"&&a("edit-users")?y():e.value.modalAction==="create"&&a("create-users")&&C()}function k(){a("create-users")&&(Object.assign(e.value.item,p),e.value.modalAction="create",s())}return(t,o)=>{const i=f("loader-component"),w=f("button-component"),M=f("pagination");return l(),r(E,{title:"\u0420\u043E\u043B\u0456"},{header:u(()=>[S]),default:u(()=>[e.value.isLoading?(l(),r(i,{key:0})):d("",!0),!e.value.isLoading&&m(a)("show-users")?(l(),F("div",j,[m(a)("create-users")?(l(),r(w,{key:0,type:"btn",onClick:k},{default:u(()=>[N]),_:1})):d("",!0),_(P,{data:e.value.data.data,onOnEdit:A,onOnDestroy:v},null,8,["data"]),_(M,{pagination:e.value.data,"click-handler":c,modelValue:e.value.currentPage,"onUpdate:modelValue":o[0]||(o[0]=L=>e.value.currentPage=L)},null,8,["pagination","modelValue"]),(l(),r(O(m(x)),{item:e.value.item,onCloseModal:s,onSubmitForm:b,onDeclineForm:v},null,40,["item"]))])):d("",!0)]),_:1})}}};export{X as default};
