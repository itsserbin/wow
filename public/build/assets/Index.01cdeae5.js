import L from"./Modal.3c4f283f.js";import w from"./OptionsLayout.df2ef17b.js";import E from"./Table.d2472f3f.js";import{y as P,G as V,z as $,W as u,U as d,S as l,a0 as m,P as r,L as B,K as _,bg as F,Z as h,D as g,Y as v}from"./___vite-browser-external_commonjs-proxy.2503c6f8.js";import"./Form.db7967a9.js";const O=h(" \u041A\u043E\u043B\u044C\u043E\u0440\u0438 "),S={key:1},j=h(" \u0414\u043E\u0434\u0430\u0442\u0438 "),W={__name:"Index",setup(N){const a=g("$swal"),t=g("$can"),p={published:0,title:null},e=P({sizes:[],currentPage:1,isLoading:!0,isActiveModal:!1,modalAction:"",item:{}});V(()=>{c(1)});const z=$(()=>e.value.isActiveModal?L:null);function c(o){e.value.isLoading=!0,o&&(e.value.currentPage=o),axios.get(route("api.sizes.index",{page:e.value.currentPage})).then(i=>{Object.assign(e.value.sizes,i.data.result),e.value.isLoading=!1}).catch(i=>{console.log(i),e.value.isLoading=!1})}function f(o){t("destroy-sizes")&&a({title:"\u0412\u0438\u0434\u0430\u043B\u0438\u0442\u0438?",icon:"warning",showCancelButton:!0}).then(i=>{i.isConfirmed&&axios.delete(route("api.sizes.destroy",o)).then(()=>{c(),e.value.isActiveModal&&s(),a({icon:"success",title:"Destroyed!"})}).catch(n=>{console.log(n),a({icon:"error",title:"Error!"})})})}function s(){e.value.isActiveModal=!e.value.isActiveModal}function y(o,i){t("edit-sizes")&&axios.get(route("api.sizes.edit",o)).then(({data:n})=>{e.value.item=n.result,e.value.modalAction="edit",e.value.item.index=i,s()}).catch(n=>console.log(n))}function x(){t("edit-sizes")&&axios.put(route("api.sizes.update",e.value.item.id),e.value.item).then(()=>{s(),c(),a({title:"Success!",icon:"success"})}).catch(o=>{console.log(o),a({title:"Error!",icon:"error"})})}function A(){t("create-sizes")&&axios.post(route("api.sizes.create"),e.value.item).then(()=>{s(),e.value.item=p,c(),a({title:"Success!",icon:"success"})}).catch(o=>{console.log(o),a({title:"Error!",icon:"error"})})}function D(){e.value.modalAction==="edit"&&t("edit-sizes")?x():e.value.modalAction==="create"&&t("create-sizes")&&A()}function b(){t("create-sizes")&&(Object.assign(e.value.item,p),e.value.modalAction="create",s())}return(o,i)=>{const n=v("loader-component"),C=v("button-component"),k=v("pagination");return l(),u(w,{title:"\u041A\u043E\u043B\u044C\u043E\u0440\u0438"},{header:d(()=>[O]),default:d(()=>[e.value.isLoading?(l(),u(n,{key:0})):m("",!0),!e.value.isLoading&&r(t)("show-sizes")?(l(),B("div",S,[r(t)("create-providers")?(l(),u(C,{key:0,type:"btn",onClick:b},{default:d(()=>[j]),_:1})):m("",!0),_(E,{data:e.value.sizes.data,onOnEdit:y,onOnDestroy:f,canDestroy:r(t)("destroy-sizes")},null,8,["data","canDestroy"]),_(k,{pagination:e.value.sizes,"click-handler":c,modelValue:e.value.currentPage,"onUpdate:modelValue":i[0]||(i[0]=M=>e.value.currentPage=M)},null,8,["pagination","modelValue"]),(l(),u(F(r(z)),{item:e.value.item,onCloseModal:s,onSubmitForm:D,onDeclineForm:f,canDestroy:r(t)("destroy-sizes")},null,40,["item","canDestroy"]))])):m("",!0)]),_:1})}}};export{W as default};
