import w from"./Modal.7716d14b.js";import E from"./OptionsLayout.4e8ab9ac.js";import P from"./Table.b04938da.js";import{y as V,G as $,z as B,a0 as u,W as d,S as c,Z as m,P as r,L as F,K as _,bg as O,X as h,D as g,$ as v}from"./___vite-browser-external_commonjs-proxy.bd54111c.js";import"./Form.50002ae4.js";const S=h(" \u0420\u043E\u043B\u0456 "),j={key:1},N=h(" \u0414\u043E\u0434\u0430\u0442\u0438 "),W={__name:"Index",setup(U){const n=g("$swal"),t=g("$can"),f={name:null,slug:null},e=V({data:[],currentPage:1,isLoading:!0,isActiveModal:!1,modalAction:"",item:{}});$(()=>{s(1)});const y=B(()=>e.value.isActiveModal?w:null);function s(o){e.value.isLoading=!0,o&&(e.value.currentPage=o),axios.get(route("api.roles.index",{page:e.value.currentPage})).then(a=>{Object.assign(e.value.data,a.data.result),e.value.isLoading=!1}).catch(a=>{console.log(a),e.value.isLoading=!1})}function p(o){t("destroy-roles")&&n({title:"\u0412\u0438\u0434\u0430\u043B\u0438\u0442\u0438?",icon:"warning",showCancelButton:!0}).then(a=>{a.isConfirmed&&axios.delete(route("api.roles.destroy",o)).then(()=>{s(),e.value.isActiveModal&&l(),n({icon:"success",title:"Destroyed!"})}).catch(i=>{console.log(i),n({icon:"error",title:"Error!"})})})}function l(){e.value.isActiveModal=!e.value.isActiveModal}function x(o,a){t("edit-roles")&&axios.get(route("api.roles.edit",o)).then(({data:i})=>{e.value.item=i.result,e.value.modalAction="edit",e.value.item.index=a,l()}).catch(i=>console.log(i))}function A(){t("edit-roles")&&axios.put(route("api.roles.update",e.value.item.id),e.value.item).then(()=>{l(),s(),n({title:"Success!",icon:"success"})}).catch(o=>{console.log(o),n({title:"Error!",icon:"error"})})}function D(){t("create-roles")&&axios.post(route("api.roles.create"),e.value.item).then(()=>{l(),e.value.item=f,s(),n({title:"Success!",icon:"success"})}).catch(o=>{console.log(o),n({title:"Error!",icon:"error"})})}function C(){e.value.modalAction==="edit"&&t("edit-roles")?A():e.value.modalAction==="create"&&t("create-roles")&&D()}function b(){t("create-roles")&&(Object.assign(e.value.item,f),e.value.modalAction="create",l())}return(o,a)=>{const i=v("loader-component"),k=v("button-component"),M=v("pagination");return c(),u(E,{title:"\u0420\u043E\u043B\u0456"},{header:d(()=>[S]),default:d(()=>[e.value.isLoading?(c(),u(i,{key:0})):m("",!0),!e.value.isLoading&&r(t)("show-roles")?(c(),F("div",j,[r(t)("create-roles")?(c(),u(k,{key:0,type:"btn",onClick:b},{default:d(()=>[N]),_:1})):m("",!0),_(P,{data:e.value.data.data,onOnEdit:x,onOnDestroy:p,canDestroy:r(t)("destroy-roles")},null,8,["data","canDestroy"]),_(M,{pagination:e.value.data,"click-handler":s,modelValue:e.value.currentPage,"onUpdate:modelValue":a[0]||(a[0]=L=>e.value.currentPage=L)},null,8,["pagination","modelValue"]),(c(),u(O(r(y)),{item:e.value.item,onCloseModal:l,onSubmitForm:C,onDeclineForm:p,canDestroy:r(t)("destroy-roles")},null,40,["item","canDestroy"]))])):m("",!0)]),_:1})}}};export{W as default};