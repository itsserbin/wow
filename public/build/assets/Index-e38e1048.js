import{s as r}from"./swal-03cac797.js";import D from"./Modal-b3227340.js";import C from"./OptionsLayout-64f65633.js";import L from"./Table-17d17f57.js";import{L as M}from"./Loader-ccf6e4ba.js";import{_ as b}from"./Button-dd1aed97.js";import{_ as w}from"./Paginate-01527c78.js";import{N as E,g as V,k as $,o as P,z as B,l as s,s as u,y as m,w as v,t as p,x as l,m as F,n as _,a0 as N}from"./index-a01126e2.js";import"./Modal-e072f216.js";import"./Form-df118d51.js";import"./Select-c098c0c0.js";import"./Label-20131f4c.js";import"./Input-39294dfa.js";import"./vue-datepicker-3bdc29fb.js";import"./index-2cbe9ca3.js";import"./AuthenticatedLayout-704e8f94.js";import"./index.esm-02fff71f.js";import"./Logo-83ffc10f.js";import"./SidebarItem-446a46b0.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./Table-fe1ca8dd.js";import"./XCircle-3c75bba8.js";const O={key:1},ne={__name:"Index",setup(j){const o=E("$can"),d=V({code:null,percent_discount:null,discount_in_hryvnia:null,end_date:null,published:0}),e=$({data:[],currentPage:1,isLoading:!0,isActiveModal:!1,modalAction:"",item:d});P(()=>{c(1)});const g=B(()=>e.value.isActiveModal?D:null);function c(t){e.value.isLoading=!0,t&&(e.value.currentPage=t),axios.get(route("api.promo-codes.index",{page:e.value.currentPage})).then(a=>{Object.assign(e.value.data,a.data.result),e.value.isLoading=!1}).catch(a=>{console.log(a),e.value.isLoading=!1})}function f(t){o("destroy-promo-codes")&&r({title:"Видалити?",icon:"warning",showCancelButton:!0}).then(a=>{a.isConfirmed&&axios.delete(route("api.promo-codes.destroy",t)).then(()=>{c(),e.value.isActiveModal&&n(),r({icon:"success",title:"Destroyed!"})}).catch(i=>{console.log(i),r({icon:"error",title:"Error!"})})})}function n(){e.value.isActiveModal=!e.value.isActiveModal}function h(t,a){o("edit-promo-codes")&&axios.get(route("api.promo-codes.edit",t)).then(({data:i})=>{e.value.item=i.result,e.value.modalAction="edit",e.value.item.index=a,n()}).catch(i=>console.log(i))}function y(){o("edit-promo-codes")&&axios.put(route("api.promo-codes.update",e.value.item.id),e.value.item).then(()=>{n(),c(),r({title:"Success!",icon:"success"})}).catch(t=>{console.log(t),r({title:"Error!",icon:"error"})})}function x(){o("create-promo-codes")&&axios.post(route("api.promo-codes.create"),e.value.item).then(()=>{n(),e.value.item=d,c(),r({title:"Success!",icon:"success"})}).catch(t=>{console.log(t),r({title:"Error!",icon:"error"})})}function A(){e.value.modalAction==="edit"&&o("edit-promo-codes")?y():e.value.modalAction==="create"&&o("create-promo-codes")&&x()}function k(){o("create-promo-codes")&&(Object.assign(e.value.item,d),e.value.modalAction="create",n())}return(t,a)=>(s(),u(C,{title:"Промо-коди"},{header:m(()=>[v(" Промо-коди ")]),default:m(()=>[e.value.isLoading?(s(),u(M,{key:0})):p("",!0),!e.value.isLoading&&l(o)("show-promo-codes")?(s(),F("div",O,[l(o)("create-promo-codes")?(s(),u(b,{key:0,type:"btn",onClick:k},{default:m(()=>[v(" Додати ")]),_:1})):p("",!0),_(L,{data:e.value.data.data,onOnEdit:h,onOnDestroy:f,canDestroy:l(o)("destroy-promo-codes")},null,8,["data","canDestroy"]),_(w,{pagination:e.value.data,"click-handler":c,modelValue:e.value.currentPage,"onUpdate:modelValue":a[0]||(a[0]=i=>e.value.currentPage=i)},null,8,["pagination","modelValue"]),(s(),u(N(l(g)),{item:e.value.item,onCloseModal:n,onSubmitForm:A,onDeclineForm:f,canDestroy:l(o)("destroy-promo-codes")},null,40,["item","canDestroy"]))])):p("",!0)]),_:1}))}};export{ne as default};
