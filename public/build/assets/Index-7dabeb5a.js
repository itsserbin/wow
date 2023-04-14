import E from"./Modal-0357a1ec.js";import L from"./OptionsLayout-e0b9352c.js";import B from"./Table-81ede646.js";import{r as P,o as $,f as j,s as u,v as m,y as g,D as d,p as c,k as _,j as p,u as l,g as F,i as h,z as y,a2 as N}from"./app-da11968c.js";import"./Form-09b34243.js";import"./app-23639435.js";import"./vue-i18n.esm-bundler-7f92347f.js";import"./moment-fbc5633a.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./Logo-9fe22fca.js";const O={key:1,class:"grid grid-cols-1 gap-4"},S={class:"text-center"},W={__name:"Index",setup(U){const a=g("$swal"),t=g("$can"),v={name:null,slug:null},e=P({data:[],currentPage:1,isLoading:!0,isActiveModal:!1,modalAction:"",item:{}});$(()=>{r(1)});const x=j(()=>e.value.isActiveModal?E:null);function r(o){e.value.isLoading=!0,o&&(e.value.currentPage=o),axios.get(route("api.permissions.index",{page:e.value.currentPage})).then(i=>{Object.assign(e.value.data,i.data.result),e.value.isLoading=!1}).catch(i=>{console.log(i),e.value.isLoading=!1})}function f(o){t("destroy-permissions")&&a({title:"Видалити?",icon:"warning",showCancelButton:!0}).then(i=>{i.isConfirmed&&axios.delete(route("api.permissions.destroy",o)).then(()=>{r(),e.value.isActiveModal&&s(),a({icon:"success",title:"Destroyed!"})}).catch(n=>{console.log(n),a({icon:"error",title:"Error!"})})})}function s(){e.value.isActiveModal=!e.value.isActiveModal}function A(o,i){t("edit-permissions")&&axios.get(route("api.permissions.edit",o)).then(({data:n})=>{e.value.item=n.result,e.value.modalAction="edit",e.value.item.index=i,s()}).catch(n=>console.log(n))}function D(){t("edit-permissions")&&axios.put(route("api.permissions.update",e.value.item.id),e.value.item).then(()=>{s(),r(),a({title:"Success!",icon:"success"})}).catch(o=>{console.log(o),a({title:"Error!",icon:"error"})})}function k(){t("create-permissions")&&axios.post(route("api.permissions.create"),e.value.item).then(()=>{s(),e.value.item=v,r(),a({title:"Success!",icon:"success"})}).catch(o=>{console.log(o),a({title:"Error!",icon:"error"})})}function C(){e.value.modalAction==="edit"&&t("edit-permissions")?D():e.value.modalAction==="create"&&t("create-permissions")&&k()}function M(){t("create-permissions")&&(Object.assign(e.value.item,v),e.value.modalAction="create",s())}return(o,i)=>{const n=d("loader-component"),b=d("button-component"),V=d("pagination");return c(),u(L,{title:"Права"},{header:m(()=>[_(" Права ")]),default:m(()=>[e.value.isLoading?(c(),u(n,{key:0})):p("",!0),!e.value.isLoading&&l(t)("show-permissions")?(c(),F("div",O,[h("div",null,[l(t)("create-permissions")?(c(),u(b,{key:0,type:"btn",onClick:M},{default:m(()=>[_(" Додати ")]),_:1})):p("",!0)]),y(B,{data:e.value.data.data,onOnEdit:A,onOnDestroy:f,canDestroy:l(t)("destroy-permissions")},null,8,["data","canDestroy"]),h("div",S,[y(V,{pagination:e.value.data,"click-handler":r,modelValue:e.value.currentPage,"onUpdate:modelValue":i[0]||(i[0]=w=>e.value.currentPage=w)},null,8,["pagination","modelValue"])])])):p("",!0),(c(),u(N(l(x)),{item:e.value.item,onCloseModal:s,onSubmitForm:C,onDeclineForm:f,canDestroy:l(t)("destroy-permissions")},null,40,["item","canDestroy"]))]),_:1})}}};export{W as default};
