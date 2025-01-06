import{s as r}from"./swal-03cac797.js";import{L as D}from"./Loader-ccf6e4ba.js";import{_ as C}from"./Button-dd1aed97.js";import{_ as L}from"./Paginate-01527c78.js";import M from"./Modal-26bb49c7.js";import w from"./OptionsLayout-64f65633.js";import E from"./Table-7e17ec83.js";import{N as V,g as $,k as b,o as P,z as B,l as s,s as u,y as m,w as v,t as d,x as l,m as F,n as g,a0 as N}from"./index-a01126e2.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./Modal-e072f216.js";import"./Form-ad493477.js";import"./Label-20131f4c.js";import"./Input-39294dfa.js";import"./AuthenticatedLayout-704e8f94.js";import"./index.esm-02fff71f.js";import"./Logo-83ffc10f.js";import"./SidebarItem-446a46b0.js";import"./Table-fe1ca8dd.js";import"./XCircle-3c75bba8.js";const O={key:1},ae={__name:"Index",setup(j){const o=V("$can"),f=$({name:null,hex:null}),e=b({colors:[],currentPage:1,isLoading:!0,isActiveModal:!1,modalAction:"",item:{}});P(()=>{n(1)});const _=B(()=>e.value.isActiveModal?M:null);function n(t){e.value.isLoading=!0,t&&(e.value.currentPage=t),axios.get(route("api.colors.index",{page:e.value.currentPage})).then(a=>{Object.assign(e.value.colors,a.data.result),e.value.isLoading=!1}).catch(a=>{console.log(a),e.value.isLoading=!1})}function p(t){o("destroy-colors")&&r({title:"Видалити?",icon:"warning",showCancelButton:!0}).then(a=>{a.isConfirmed&&axios.delete(route("api.colors.destroy",t)).then(()=>{n(),e.value.isActiveModal&&c(),r({icon:"success",title:"Destroyed!"})}).catch(i=>{console.log(i),r({icon:"error",title:"Error!"})})})}function c(){e.value.isActiveModal=!e.value.isActiveModal}function h(t,a){o("edit-colors")&&axios.get(route("api.colors.edit",t)).then(({data:i})=>{e.value.item=i.result,e.value.modalAction="edit",e.value.item.index=a,c()}).catch(i=>console.log(i))}function y(){o("edit-colors")&&axios.put(route("api.colors.update",e.value.item.id),e.value.item).then(()=>{c(),n(),r({title:"Success!",icon:"success"})}).catch(t=>{console.log(t),r({title:"Error!",icon:"error"})})}function x(){o("create-colors")&&axios.post(route("api.colors.create"),e.value.item).then(()=>{c(),e.value.item=f,n(),r({title:"Success!",icon:"success"})}).catch(t=>{console.log(t),r({title:"Error!",icon:"error"})})}function A(){e.value.modalAction==="edit"&&o("edit-colors")?y():e.value.modalAction==="create"&&o("create-colors")&&x()}function k(){o("create-colors")&&(Object.assign(e.value.item,f),e.value.modalAction="create",c())}return(t,a)=>(s(),u(w,{title:"Кольори"},{header:m(()=>[v(" Кольори ")]),default:m(()=>[e.value.isLoading?(s(),u(D,{key:0})):d("",!0),!e.value.isLoading&&l(o)("show-colors")?(s(),F("div",O,[l(o)("create-providers")?(s(),u(C,{key:0,type:"btn",onClick:k},{default:m(()=>[v(" Додати ")]),_:1})):d("",!0),g(E,{data:e.value.colors.data,onOnEdit:h,onOnDestroy:p,canDestroy:l(o)("destroy-colors")},null,8,["data","canDestroy"]),g(L,{pagination:e.value.colors,"click-handler":n,modelValue:e.value.currentPage,"onUpdate:modelValue":a[0]||(a[0]=i=>e.value.currentPage=i)},null,8,["pagination","modelValue"]),(s(),u(N(l(_)),{item:e.value.item,onCloseModal:c,onSubmitForm:A,onDeclineForm:p,canDestroy:l(o)("destroy-colors")},null,40,["item","canDestroy"]))])):d("",!0)]),_:1}))}};export{ae as default};