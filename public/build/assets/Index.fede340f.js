import w from"./Modal.1b7ff883.js";import E from"./OptionsLayout.df2ef17b.js";import P from"./Table.ffce883b.js";import{y as V,G as $,z as B,W as u,U as m,S as r,a0 as d,P as l,L as F,K as _,bg as O,Z as h,D as g,Y as p}from"./___vite-browser-external_commonjs-proxy.2503c6f8.js";import"./Form.871913d2.js";const S=h(" \u041F\u0440\u0430\u0432\u0430 "),j={key:1},N=h(" \u0414\u043E\u0434\u0430\u0442\u0438 "),W={__name:"Index",setup(U){const i=g("$swal"),t=g("$can"),v={name:null,slug:null},e=V({data:[],currentPage:1,isLoading:!0,isActiveModal:!1,modalAction:"",item:{}});$(()=>{c(1)});const y=B(()=>e.value.isActiveModal?w:null);function c(o){e.value.isLoading=!0,o&&(e.value.currentPage=o),axios.get(route("api.permissions.index",{page:e.value.currentPage})).then(n=>{Object.assign(e.value.data,n.data.result),e.value.isLoading=!1}).catch(n=>{console.log(n),e.value.isLoading=!1})}function f(o){t("destroy-permissions")&&i({title:"\u0412\u0438\u0434\u0430\u043B\u0438\u0442\u0438?",icon:"warning",showCancelButton:!0}).then(n=>{n.isConfirmed&&axios.delete(route("api.permissions.destroy",o)).then(()=>{c(),e.value.isActiveModal&&s(),i({icon:"success",title:"Destroyed!"})}).catch(a=>{console.log(a),i({icon:"error",title:"Error!"})})})}function s(){e.value.isActiveModal=!e.value.isActiveModal}function x(o,n){t("edit-permissions")&&axios.get(route("api.permissions.edit",o)).then(({data:a})=>{e.value.item=a.result,e.value.modalAction="edit",e.value.item.index=n,s()}).catch(a=>console.log(a))}function A(){t("edit-permissions")&&axios.put(route("api.permissions.update",e.value.item.id),e.value.item).then(()=>{s(),c(),i({title:"Success!",icon:"success"})}).catch(o=>{console.log(o),i({title:"Error!",icon:"error"})})}function D(){t("create-permissions")&&axios.post(route("api.permissions.create"),e.value.item).then(()=>{s(),e.value.item=v,c(),i({title:"Success!",icon:"success"})}).catch(o=>{console.log(o),i({title:"Error!",icon:"error"})})}function C(){e.value.modalAction==="edit"&&t("edit-permissions")?A():e.value.modalAction==="create"&&t("create-permissions")&&D()}function b(){t("create-permissions")&&(Object.assign(e.value.item,v),e.value.modalAction="create",s())}return(o,n)=>{const a=p("loader-component"),k=p("button-component"),M=p("pagination");return r(),u(E,{title:"\u041F\u0440\u0430\u0432\u0430"},{header:m(()=>[S]),default:m(()=>[e.value.isLoading?(r(),u(a,{key:0})):d("",!0),!e.value.isLoading&&l(t)("show-permissions")?(r(),F("div",j,[l(t)("create-permissions")?(r(),u(k,{key:0,type:"btn",onClick:b},{default:m(()=>[N]),_:1})):d("",!0),_(P,{data:e.value.data.data,onOnEdit:x,onOnDestroy:f,canDestroy:l(t)("destroy-permissions")},null,8,["data","canDestroy"]),_(M,{pagination:e.value.data,"click-handler":c,modelValue:e.value.currentPage,"onUpdate:modelValue":n[0]||(n[0]=L=>e.value.currentPage=L)},null,8,["pagination","modelValue"]),(r(),u(O(l(y)),{item:e.value.item,onCloseModal:s,onSubmitForm:C,onDeclineForm:f,canDestroy:l(t)("destroy-permissions")},null,40,["item","canDestroy"]))])):d("",!0)]),_:1})}}};export{W as default};
