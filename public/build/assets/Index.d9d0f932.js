import B from"./Modal.0c2c81f7.js";import E from"./OptionsLayout.bb24b2ad.js";import L from"./Table.bff4c954.js";import{w as P,S as F,x as O,Q as u,O as d,U as _,K as m,F as c,G as v,B as r,y as $,z as g,M as h,a7 as N,P as y}from"./moment.791e2419.js";import"./Form.18a4e870.js";import"./app.ccd83b47.js";const S=y(" \u0420\u043E\u043B\u0456 "),j={key:1,class:"grid grid-cols-1 gap-4"},U=y(" \u0414\u043E\u0434\u0430\u0442\u0438 "),z={class:"text-center"},J={__name:"Index",setup(G){const n=_("$swal"),t=_("$can"),p={name:null,slug:null},e=P({data:[],currentPage:1,isLoading:!0,isActiveModal:!1,modalAction:"",item:{}});F(()=>{l(1)});const x=O(()=>e.value.isActiveModal?B:null);function l(o){e.value.isLoading=!0,o&&(e.value.currentPage=o),axios.get(route("api.roles.index",{page:e.value.currentPage})).then(a=>{Object.assign(e.value.data,a.data.result),e.value.isLoading=!1}).catch(a=>{console.log(a),e.value.isLoading=!1})}function f(o){t("destroy-roles")&&n({title:"\u0412\u0438\u0434\u0430\u043B\u0438\u0442\u0438?",icon:"warning",showCancelButton:!0}).then(a=>{a.isConfirmed&&axios.delete(route("api.roles.destroy",o)).then(()=>{l(),e.value.isActiveModal&&s(),n({icon:"success",title:"Destroyed!"})}).catch(i=>{console.log(i),n({icon:"error",title:"Error!"})})})}function s(){e.value.isActiveModal=!e.value.isActiveModal}function A(o,a){t("edit-roles")&&axios.get(route("api.roles.edit",o)).then(({data:i})=>{e.value.item=i.result,e.value.modalAction="edit",e.value.item.index=a,s()}).catch(i=>console.log(i))}function C(){t("edit-roles")&&axios.put(route("api.roles.update",e.value.item.id),e.value.item).then(()=>{s(),l(),n({title:"Success!",icon:"success"})}).catch(o=>{console.log(o),n({title:"Error!",icon:"error"})})}function D(){t("create-roles")&&axios.post(route("api.roles.create"),e.value.item).then(()=>{s(),e.value.item=p,l(),n({title:"Success!",icon:"success"})}).catch(o=>{console.log(o),n({title:"Error!",icon:"error"})})}function M(){e.value.modalAction==="edit"&&t("edit-roles")?C():e.value.modalAction==="create"&&t("create-roles")&&D()}function k(){t("create-roles")&&(Object.assign(e.value.item,p),e.value.modalAction="create",s())}return(o,a)=>{const i=m("loader-component"),b=m("button-component"),w=m("pagination");return c(),u(E,{title:"\u0420\u043E\u043B\u0456"},{header:d(()=>[S]),default:d(()=>[e.value.isLoading?(c(),u(i,{key:0})):v("",!0),!e.value.isLoading&&r(t)("show-roles")?(c(),$("div",j,[g("div",null,[r(t)("create-roles")?(c(),u(b,{key:0,type:"btn",onClick:k},{default:d(()=>[U]),_:1})):v("",!0)]),h(L,{data:e.value.data.data,onOnEdit:A,onOnDestroy:f,canDestroy:r(t)("destroy-roles")},null,8,["data","canDestroy"]),g("div",z,[h(w,{pagination:e.value.data,"click-handler":l,modelValue:e.value.currentPage,"onUpdate:modelValue":a[0]||(a[0]=V=>e.value.currentPage=V)},null,8,["pagination","modelValue"])])])):v("",!0),(c(),u(N(r(x)),{item:e.value.item,onCloseModal:s,onSubmitForm:M,onDeclineForm:f,canDestroy:r(t)("destroy-roles")},null,40,["item","canDestroy"]))]),_:1})}}};export{J as default};
