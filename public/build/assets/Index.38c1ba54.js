import w from"./Modal.f01f298b.js";import L from"./OptionsLayout.72de8c8a.js";import E from"./Table.75c1683b.js";import{w as P,S as V,x as B,Q as u,K as d,X as _,H as m,F as l,P as p,B as r,y as F,J as g,a2 as $,L as h}from"./___vite-browser-external_commonjs-proxy.4f2b06be.js";import"./Form.ca6760b0.js";import"./app.460df568.js";const O=h(" \u041A\u043E\u043B\u044C\u043E\u0440\u0438 "),S={key:1},j=h(" \u0414\u043E\u0434\u0430\u0442\u0438 "),T={__name:"Index",setup(N){const a=_("$swal"),t=_("$can"),v={published:0,title:null},e=P({sizes:[],currentPage:1,isLoading:!0,isActiveModal:!1,modalAction:"",item:{}});V(()=>{c(1)});const z=B(()=>e.value.isActiveModal?w:null);function c(o){e.value.isLoading=!0,o&&(e.value.currentPage=o),axios.get(route("api.sizes.index",{page:e.value.currentPage})).then(i=>{Object.assign(e.value.sizes,i.data.result),e.value.isLoading=!1}).catch(i=>{console.log(i),e.value.isLoading=!1})}function f(o){t("destroy-sizes")&&a({title:"\u0412\u0438\u0434\u0430\u043B\u0438\u0442\u0438?",icon:"warning",showCancelButton:!0}).then(i=>{i.isConfirmed&&axios.delete(route("api.sizes.destroy",o)).then(()=>{c(),e.value.isActiveModal&&s(),a({icon:"success",title:"Destroyed!"})}).catch(n=>{console.log(n),a({icon:"error",title:"Error!"})})})}function s(){e.value.isActiveModal=!e.value.isActiveModal}function y(o,i){t("edit-sizes")&&axios.get(route("api.sizes.edit",o)).then(({data:n})=>{e.value.item=n.result,e.value.modalAction="edit",e.value.item.index=i,s()}).catch(n=>console.log(n))}function x(){t("edit-sizes")&&axios.put(route("api.sizes.update",e.value.item.id),e.value.item).then(()=>{s(),c(),a({title:"Success!",icon:"success"})}).catch(o=>{console.log(o),a({title:"Error!",icon:"error"})})}function A(){t("create-sizes")&&axios.post(route("api.sizes.create"),e.value.item).then(()=>{s(),e.value.item=v,c(),a({title:"Success!",icon:"success"})}).catch(o=>{console.log(o),a({title:"Error!",icon:"error"})})}function C(){e.value.modalAction==="edit"&&t("edit-sizes")?x():e.value.modalAction==="create"&&t("create-sizes")&&A()}function D(){t("create-sizes")&&(Object.assign(e.value.item,v),e.value.modalAction="create",s())}return(o,i)=>{const n=m("loader-component"),b=m("button-component"),k=m("pagination");return l(),u(L,{title:"\u041A\u043E\u043B\u044C\u043E\u0440\u0438"},{header:d(()=>[O]),default:d(()=>[e.value.isLoading?(l(),u(n,{key:0})):p("",!0),!e.value.isLoading&&r(t)("show-sizes")?(l(),F("div",S,[r(t)("create-providers")?(l(),u(b,{key:0,type:"btn",onClick:D},{default:d(()=>[j]),_:1})):p("",!0),g(E,{data:e.value.sizes.data,onOnEdit:y,onOnDestroy:f,canDestroy:r(t)("destroy-sizes")},null,8,["data","canDestroy"]),g(k,{pagination:e.value.sizes,"click-handler":c,modelValue:e.value.currentPage,"onUpdate:modelValue":i[0]||(i[0]=M=>e.value.currentPage=M)},null,8,["pagination","modelValue"]),(l(),u($(r(z)),{item:e.value.item,onCloseModal:s,onSubmitForm:C,onDeclineForm:f,canDestroy:r(t)("destroy-sizes")},null,40,["item","canDestroy"]))])):p("",!0)]),_:1})}}};export{T as default};
