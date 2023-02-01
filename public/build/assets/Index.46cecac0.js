import w from"./Modal.f9cf75fb.js";import B from"./OptionsLayout.e4c4e6db.js";import E from"./Table.c75481f8.js";import{y as P,C as $,z as F,a0 as u,X as d,B as _,V as m,S as c,_ as v,P as r,L as N,M as g,K as h,bh as O,Y as y}from"./___vite-browser-external_commonjs-proxy.4500e77d.js";import"./Form.e6ae7177.js";import"./app.6118ad44.js";const S=y(" \u0420\u043E\u043B\u0456 "),j={key:1,class:"grid grid-cols-1 gap-4"},U=y(" \u0414\u043E\u0434\u0430\u0442\u0438 "),z={class:"text-center"},H={__name:"Index",setup(I){const n=_("$swal"),t=_("$can"),p={name:null,slug:null},e=P({data:[],currentPage:1,isLoading:!0,isActiveModal:!1,modalAction:"",item:{}});$(()=>{l(1)});const x=F(()=>e.value.isActiveModal?w:null);function l(o){e.value.isLoading=!0,o&&(e.value.currentPage=o),axios.get(route("api.roles.index",{page:e.value.currentPage})).then(a=>{Object.assign(e.value.data,a.data.result),e.value.isLoading=!1}).catch(a=>{console.log(a),e.value.isLoading=!1})}function f(o){t("destroy-roles")&&n({title:"\u0412\u0438\u0434\u0430\u043B\u0438\u0442\u0438?",icon:"warning",showCancelButton:!0}).then(a=>{a.isConfirmed&&axios.delete(route("api.roles.destroy",o)).then(()=>{l(),e.value.isActiveModal&&s(),n({icon:"success",title:"Destroyed!"})}).catch(i=>{console.log(i),n({icon:"error",title:"Error!"})})})}function s(){e.value.isActiveModal=!e.value.isActiveModal}function A(o,a){t("edit-roles")&&axios.get(route("api.roles.edit",o)).then(({data:i})=>{e.value.item=i.result,e.value.modalAction="edit",e.value.item.index=a,s()}).catch(i=>console.log(i))}function C(){t("edit-roles")&&axios.put(route("api.roles.update",e.value.item.id),e.value.item).then(()=>{s(),l(),n({title:"Success!",icon:"success"})}).catch(o=>{console.log(o),n({title:"Error!",icon:"error"})})}function D(){t("create-roles")&&axios.post(route("api.roles.create"),e.value.item).then(()=>{s(),e.value.item=p,l(),n({title:"Success!",icon:"success"})}).catch(o=>{console.log(o),n({title:"Error!",icon:"error"})})}function M(){e.value.modalAction==="edit"&&t("edit-roles")?C():e.value.modalAction==="create"&&t("create-roles")&&D()}function b(){t("create-roles")&&(Object.assign(e.value.item,p),e.value.modalAction="create",s())}return(o,a)=>{const i=m("loader-component"),k=m("button-component"),V=m("pagination");return c(),u(B,{title:"\u0420\u043E\u043B\u0456"},{header:d(()=>[S]),default:d(()=>[e.value.isLoading?(c(),u(i,{key:0})):v("",!0),!e.value.isLoading&&r(t)("show-roles")?(c(),N("div",j,[g("div",null,[r(t)("create-roles")?(c(),u(k,{key:0,type:"btn",onClick:b},{default:d(()=>[U]),_:1})):v("",!0)]),h(E,{data:e.value.data.data,onOnEdit:A,onOnDestroy:f,canDestroy:r(t)("destroy-roles")},null,8,["data","canDestroy"]),g("div",z,[h(V,{pagination:e.value.data,"click-handler":l,modelValue:e.value.currentPage,"onUpdate:modelValue":a[0]||(a[0]=L=>e.value.currentPage=L)},null,8,["pagination","modelValue"])])])):v("",!0),(c(),u(O(r(x)),{item:e.value.item,onCloseModal:s,onSubmitForm:M,onDeclineForm:f,canDestroy:r(t)("destroy-roles")},null,40,["item","canDestroy"]))]),_:1})}}};export{H as default};
