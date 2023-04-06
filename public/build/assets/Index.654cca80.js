import B from"./Modal.98a98479.js";import E from"./OptionsLayout.50dcb2e2.js";import L from"./Table.110e9064.js";import{w as P,U as F,x as O,Q as u,O as d,V as _,K as m,F as r,G as p,B as l,y as $,z as g,M as h,a7 as N,P as y}from"./moment.aeac0934.js";import"./Form.6d7d7c04.js";import"./app.714c321a.js";const j=y(" \u041F\u0440\u0430\u0432\u0430 "),S={key:1,class:"grid grid-cols-1 gap-4"},U=y(" \u0414\u043E\u0434\u0430\u0442\u0438 "),z={class:"text-center"},J={__name:"Index",setup(G){const n=_("$swal"),t=_("$can"),v={name:null,slug:null},e=P({data:[],currentPage:1,isLoading:!0,isActiveModal:!1,modalAction:"",item:{}});F(()=>{c(1)});const x=O(()=>e.value.isActiveModal?B:null);function c(o){e.value.isLoading=!0,o&&(e.value.currentPage=o),axios.get(route("api.permissions.index",{page:e.value.currentPage})).then(i=>{Object.assign(e.value.data,i.data.result),e.value.isLoading=!1}).catch(i=>{console.log(i),e.value.isLoading=!1})}function f(o){t("destroy-permissions")&&n({title:"\u0412\u0438\u0434\u0430\u043B\u0438\u0442\u0438?",icon:"warning",showCancelButton:!0}).then(i=>{i.isConfirmed&&axios.delete(route("api.permissions.destroy",o)).then(()=>{c(),e.value.isActiveModal&&s(),n({icon:"success",title:"Destroyed!"})}).catch(a=>{console.log(a),n({icon:"error",title:"Error!"})})})}function s(){e.value.isActiveModal=!e.value.isActiveModal}function A(o,i){t("edit-permissions")&&axios.get(route("api.permissions.edit",o)).then(({data:a})=>{e.value.item=a.result,e.value.modalAction="edit",e.value.item.index=i,s()}).catch(a=>console.log(a))}function C(){t("edit-permissions")&&axios.put(route("api.permissions.update",e.value.item.id),e.value.item).then(()=>{s(),c(),n({title:"Success!",icon:"success"})}).catch(o=>{console.log(o),n({title:"Error!",icon:"error"})})}function D(){t("create-permissions")&&axios.post(route("api.permissions.create"),e.value.item).then(()=>{s(),e.value.item=v,c(),n({title:"Success!",icon:"success"})}).catch(o=>{console.log(o),n({title:"Error!",icon:"error"})})}function M(){e.value.modalAction==="edit"&&t("edit-permissions")?C():e.value.modalAction==="create"&&t("create-permissions")&&D()}function k(){t("create-permissions")&&(Object.assign(e.value.item,v),e.value.modalAction="create",s())}return(o,i)=>{const a=m("loader-component"),V=m("button-component"),b=m("pagination");return r(),u(E,{title:"\u041F\u0440\u0430\u0432\u0430"},{header:d(()=>[j]),default:d(()=>[e.value.isLoading?(r(),u(a,{key:0})):p("",!0),!e.value.isLoading&&l(t)("show-permissions")?(r(),$("div",S,[g("div",null,[l(t)("create-permissions")?(r(),u(V,{key:0,type:"btn",onClick:k},{default:d(()=>[U]),_:1})):p("",!0)]),h(L,{data:e.value.data.data,onOnEdit:A,onOnDestroy:f,canDestroy:l(t)("destroy-permissions")},null,8,["data","canDestroy"]),g("div",z,[h(b,{pagination:e.value.data,"click-handler":c,modelValue:e.value.currentPage,"onUpdate:modelValue":i[0]||(i[0]=w=>e.value.currentPage=w)},null,8,["pagination","modelValue"])])])):p("",!0),(r(),u(N(l(x)),{item:e.value.item,onCloseModal:s,onSubmitForm:M,onDeclineForm:f,canDestroy:l(t)("destroy-permissions")},null,40,["item","canDestroy"]))]),_:1})}}};export{J as default};