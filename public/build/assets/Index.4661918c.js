import L from"./Modal.42b2278e.js";import V from"./OptionsLayout.e4c4e6db.js";import w from"./Table.42f14e06.js";import{y as E,C as P,z as B,a0 as u,X as d,B as _,V as m,S as l,_ as p,P as r,L as $,K as g,bh as F,Y as h}from"./___vite-browser-external_commonjs-proxy.4500e77d.js";import"./Form.7159ee8d.js";import"./app.6118ad44.js";const O=h(" \u041A\u043E\u043B\u044C\u043E\u0440\u0438 "),S={key:1},j=h(" \u0414\u043E\u0434\u0430\u0442\u0438 "),q={__name:"Index",setup(N){const a=_("$swal"),t=_("$can"),v={published:0,title:null},e=E({sizes:[],currentPage:1,isLoading:!0,isActiveModal:!1,modalAction:"",item:{}});P(()=>{c(1)});const z=B(()=>e.value.isActiveModal?L:null);function c(o){e.value.isLoading=!0,o&&(e.value.currentPage=o),axios.get(route("api.sizes.index",{page:e.value.currentPage})).then(i=>{Object.assign(e.value.sizes,i.data.result),e.value.isLoading=!1}).catch(i=>{console.log(i),e.value.isLoading=!1})}function f(o){t("destroy-sizes")&&a({title:"\u0412\u0438\u0434\u0430\u043B\u0438\u0442\u0438?",icon:"warning",showCancelButton:!0}).then(i=>{i.isConfirmed&&axios.delete(route("api.sizes.destroy",o)).then(()=>{c(),e.value.isActiveModal&&s(),a({icon:"success",title:"Destroyed!"})}).catch(n=>{console.log(n),a({icon:"error",title:"Error!"})})})}function s(){e.value.isActiveModal=!e.value.isActiveModal}function y(o,i){t("edit-sizes")&&axios.get(route("api.sizes.edit",o)).then(({data:n})=>{e.value.item=n.result,e.value.modalAction="edit",e.value.item.index=i,s()}).catch(n=>console.log(n))}function x(){t("edit-sizes")&&axios.put(route("api.sizes.update",e.value.item.id),e.value.item).then(()=>{s(),c(),a({title:"Success!",icon:"success"})}).catch(o=>{console.log(o),a({title:"Error!",icon:"error"})})}function A(){t("create-sizes")&&axios.post(route("api.sizes.create"),e.value.item).then(()=>{s(),e.value.item=v,c(),a({title:"Success!",icon:"success"})}).catch(o=>{console.log(o),a({title:"Error!",icon:"error"})})}function C(){e.value.modalAction==="edit"&&t("edit-sizes")?x():e.value.modalAction==="create"&&t("create-sizes")&&A()}function b(){t("create-sizes")&&(Object.assign(e.value.item,v),e.value.modalAction="create",s())}return(o,i)=>{const n=m("loader-component"),D=m("button-component"),k=m("pagination");return l(),u(V,{title:"\u041A\u043E\u043B\u044C\u043E\u0440\u0438"},{header:d(()=>[O]),default:d(()=>[e.value.isLoading?(l(),u(n,{key:0})):p("",!0),!e.value.isLoading&&r(t)("show-sizes")?(l(),$("div",S,[r(t)("create-providers")?(l(),u(D,{key:0,type:"btn",onClick:b},{default:d(()=>[j]),_:1})):p("",!0),g(w,{data:e.value.sizes.data,onOnEdit:y,onOnDestroy:f,canDestroy:r(t)("destroy-sizes")},null,8,["data","canDestroy"]),g(k,{pagination:e.value.sizes,"click-handler":c,modelValue:e.value.currentPage,"onUpdate:modelValue":i[0]||(i[0]=M=>e.value.currentPage=M)},null,8,["pagination","modelValue"]),(l(),u(F(r(z)),{item:e.value.item,onCloseModal:s,onSubmitForm:C,onDeclineForm:f,canDestroy:r(t)("destroy-sizes")},null,40,["item","canDestroy"]))])):p("",!0)]),_:1})}}};export{q as default};
