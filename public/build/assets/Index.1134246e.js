import E from"./Modal.d6a1284a.js";import L from"./OptionsLayout.bff94467.js";import V from"./Table.17242a92.js";import{ag as B,p as P,q as $,f as j,m as u,w as m,v as f,B as v,o as l,j as g,u as r,g as F,x as _,ac as O,k as h}from"./vendor.1f6af4a6.js";import"./Form.7397062b.js";import"./__commonjsHelpers__.488ed5c2.js";import"./app.8b7021f2.js";import"./vue.m.8e70aa70.js";import"./bootstrap.36b92799.js";import"./_plugin-vue_export-helper.cdc0426e.js";import"./Logo.c7a5de92.js";const N=h(" \u041F\u0435\u0440\u0435\u0432\u0430\u0433\u0438 "),S={key:1},U=h(" \u0414\u043E\u0434\u0430\u0442\u0438 "),Y={__name:"Index",setup(q){const n=f("$swal"),t=f("$can"),d=B({text:{ua:null,ru:null},icon:null,published:0}),e=P({data:[],currentPage:1,isLoading:!0,isActiveModal:!1,modalAction:"",item:d});$(()=>{c(1)});const y=j(()=>e.value.isActiveModal?E:null);function c(a){e.value.isLoading=!0,a&&(e.value.currentPage=a),axios.get(route("api.advantages.index",{page:e.value.currentPage})).then(o=>{Object.assign(e.value.data,o.data.result),e.value.isLoading=!1}).catch(o=>{console.log(o),e.value.isLoading=!1})}function p(a){t("destroy-advantages")&&n({title:"\u0412\u0438\u0434\u0430\u043B\u0438\u0442\u0438?",icon:"warning",showCancelButton:!0}).then(o=>{o.isConfirmed&&axios.delete(route("api.advantages.destroy",a)).then(()=>{c(),e.value.isActiveModal&&s(),n({icon:"success",title:"Destroyed!"})}).catch(i=>{console.log(i),n({icon:"error",title:"Error!"})})})}function s(){e.value.isActiveModal=!e.value.isActiveModal}function x(a,o){t("edit-advantages")&&axios.get(route("api.advantages.edit",a)).then(({data:i})=>{e.value.item=i.result,e.value.modalAction="edit",e.value.item.index=o,s()}).catch(i=>console.log(i))}function A(){t("edit-advantages")&&axios.put(route("api.advantages.update",e.value.item.id),e.value.item).then(()=>{s(),c(),n({title:"Success!",icon:"success"})}).catch(a=>{console.log(a),n({title:"Error!",icon:"error"})})}function k(){t("create-advantages")&&axios.post(route("api.advantages.create"),e.value.item).then(()=>{s(),e.value.item=d,c(),n({title:"Success!",icon:"success"})}).catch(a=>{console.log(a),n({title:"Error!",icon:"error"})})}function C(){e.value.modalAction==="edit"&&t("edit-advantages")?A():e.value.modalAction==="create"&&t("create-advantages")&&k()}function D(){t("create-advantages")&&(Object.assign(e.value.item,d),e.value.modalAction="create",s())}return(a,o)=>{const i=v("loader-component"),b=v("button-component"),M=v("pagination");return l(),u(L,{title:"\u041F\u0435\u0440\u0435\u0432\u0430\u0433\u0438"},{header:m(()=>[N]),default:m(()=>[e.value.isLoading?(l(),u(i,{key:0})):g("",!0),!e.value.isLoading&&r(t)("show-advantages")?(l(),F("div",S,[r(t)("create-advantages")?(l(),u(b,{key:0,type:"btn",onClick:D},{default:m(()=>[U]),_:1})):g("",!0),_(V,{data:e.value.data.data,onOnEdit:x,onOnDestroy:p,canDestroy:r(t)("destroy-advantages")},null,8,["data","canDestroy"]),_(M,{pagination:e.value.data,"click-handler":c,modelValue:e.value.currentPage,"onUpdate:modelValue":o[0]||(o[0]=w=>e.value.currentPage=w)},null,8,["pagination","modelValue"]),(l(),u(O(r(y)),{item:e.value.item,onCloseModal:s,onSubmitForm:C,onDeclineForm:p,canDestroy:r(t)("destroy-advantages")},null,40,["item","canDestroy"]))])):g("",!0)]),_:1})}}};export{Y as default};
