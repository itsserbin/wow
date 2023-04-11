import B from"./Modal.506e3038.js";import E from"./OptionsLayout.bff94467.js";import L from"./Table.52a0d394.js";import{p as P,q as $,f as j,m as u,w as d,v as _,B as m,o as c,j as p,u as l,g as F,i as g,x as h,ac as N,k as y}from"./vendor.1f6af4a6.js";import"./Form.b0c1a672.js";import"./__commonjsHelpers__.488ed5c2.js";import"./app.8b7021f2.js";import"./vue.m.8e70aa70.js";import"./bootstrap.36b92799.js";import"./_plugin-vue_export-helper.cdc0426e.js";import"./Logo.c7a5de92.js";const O=y(" \u0420\u043E\u043B\u0456 "),S={key:1,class:"grid grid-cols-1 gap-4"},U=y(" \u0414\u043E\u0434\u0430\u0442\u0438 "),q={class:"text-center"},Z={__name:"Index",setup(I){const n=_("$swal"),t=_("$can"),v={name:null,email:null,roles:[],password:null,password_confirmation:null},e=P({data:[],currentPage:1,isLoading:!0,isActiveModal:!1,modalAction:"",item:{}});$(()=>{r(1)});const x=j(()=>e.value.isActiveModal?B:null);function r(o){e.value.isLoading=!0,o&&(e.value.currentPage=o),axios.get(route("api.users.index",{page:e.value.currentPage})).then(a=>{Object.assign(e.value.data,a.data.result),e.value.isLoading=!1}).catch(a=>{console.log(a),e.value.isLoading=!1})}function f(o){t("destroy-users")&&n({title:"\u0412\u0438\u0434\u0430\u043B\u0438\u0442\u0438?",icon:"warning",showCancelButton:!0}).then(a=>{a.isConfirmed&&axios.delete(route("api.users.destroy",o)).then(()=>{r(),e.value.isActiveModal&&i(),n({icon:"success",title:"Destroyed!"})}).catch(s=>{console.log(s),n({icon:"error",title:"Error!"})})})}function i(){e.value.isActiveModal=!e.value.isActiveModal}function A(o,a){t("edit-users")&&axios.get(route("api.users.edit",o)).then(({data:s})=>{e.value.item=s.result,e.value.modalAction="edit",e.value.item.index=a,i()}).catch(s=>console.log(s))}function k(){t("edit-users")&&axios.put(route("api.users.update",e.value.item.id),e.value.item).then(()=>{i(),r(),n({title:"Success!",icon:"success"})}).catch(o=>{console.log(o),n({title:"Error!",icon:"error"})})}function w(){t("create-users")&&axios.post(route("api.users.create"),e.value.item).then(()=>{i(),e.value.item=v,r(),n({title:"Success!",icon:"success"})}).catch(o=>{console.log(o),n({title:"Error!",icon:"error"})})}function C(){e.value.modalAction==="edit"&&t("edit-users")?k():e.value.modalAction==="create"&&t("create-users")&&w()}function D(){t("create-users")&&(Object.assign(e.value.item,v),e.value.modalAction="create",i())}return(o,a)=>{const s=m("loader-component"),M=m("button-component"),b=m("pagination");return c(),u(E,{title:"\u0420\u043E\u043B\u0456"},{header:d(()=>[O]),default:d(()=>[e.value.isLoading?(c(),u(s,{key:0})):p("",!0),!e.value.isLoading&&l(t)("show-users")?(c(),F("div",S,[g("div",null,[l(t)("create-users")?(c(),u(M,{key:0,type:"btn",onClick:D},{default:d(()=>[U]),_:1})):p("",!0)]),h(L,{data:e.value.data.data,onOnEdit:A,onOnDestroy:f,canDestroy:l(t)("destroy-users")},null,8,["data","canDestroy"]),g("div",q,[h(b,{pagination:e.value.data,"click-handler":r,modelValue:e.value.currentPage,"onUpdate:modelValue":a[0]||(a[0]=V=>e.value.currentPage=V)},null,8,["pagination","modelValue"])])])):p("",!0),(c(),u(N(l(x)),{item:e.value.item,onCloseModal:i,onSubmitForm:C,onDeclineForm:f,canDestroy:l(t)("destroy-users")},null,40,["item","canDestroy"]))]),_:1})}}};export{Z as default};
