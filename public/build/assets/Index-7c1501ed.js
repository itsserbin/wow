import{s}from"./swal-03cac797.js";import{L as C}from"./Loader-ccf6e4ba.js";import{_ as L}from"./Button-dd1aed97.js";import{_ as M}from"./Paginate-01527c78.js";import V from"./Modal-3affe7b1.js";import w from"./OptionsLayout-64f65633.js";import E from"./Table-83e144f6.js";import{N as $,k as b,o as B,z as N,l as c,s as m,y as u,w as v,t as d,x as l,m as P,p as g,n as _,a0 as F}from"./index-a01126e2.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./Modal-e072f216.js";import"./Form-0b1226b9.js";import"./Label-20131f4c.js";import"./Input-39294dfa.js";import"./AuthenticatedLayout-704e8f94.js";import"./index.esm-02fff71f.js";import"./Logo-83ffc10f.js";import"./SidebarItem-446a46b0.js";import"./Table-fe1ca8dd.js";import"./XCircle-3c75bba8.js";const O={key:1,class:"grid grid-cols-1 gap-4"},j={class:"text-center"},ae={__name:"Index",setup(S){const t=$("$can"),p={name:null,slug:null},e=b({data:[],currentPage:1,isLoading:!0,isActiveModal:!1,modalAction:"",item:{}});B(()=>{r(1)});const h=N(()=>e.value.isActiveModal?V:null);function r(o){e.value.isLoading=!0,o&&(e.value.currentPage=o),axios.get(route("api.permissions.index",{page:e.value.currentPage})).then(i=>{Object.assign(e.value.data,i.data.result),e.value.isLoading=!1}).catch(i=>{console.log(i),e.value.isLoading=!1})}function f(o){t("destroy-permissions")&&s({title:"Видалити?",icon:"warning",showCancelButton:!0}).then(i=>{i.isConfirmed&&axios.delete(route("api.permissions.destroy",o)).then(()=>{r(),e.value.isActiveModal&&n(),s({icon:"success",title:"Destroyed!"})}).catch(a=>{console.log(a),s({icon:"error",title:"Error!"})})})}function n(){e.value.isActiveModal=!e.value.isActiveModal}function y(o,i){t("edit-permissions")&&axios.get(route("api.permissions.edit",o)).then(({data:a})=>{e.value.item=a.result,e.value.modalAction="edit",e.value.item.index=i,n()}).catch(a=>console.log(a))}function x(){t("edit-permissions")&&axios.put(route("api.permissions.update",e.value.item.id),e.value.item).then(()=>{n(),r(),s({title:"Success!",icon:"success"})}).catch(o=>{console.log(o),s({title:"Error!",icon:"error"})})}function A(){t("create-permissions")&&axios.post(route("api.permissions.create"),e.value.item).then(()=>{n(),e.value.item=p,r(),s({title:"Success!",icon:"success"})}).catch(o=>{console.log(o),s({title:"Error!",icon:"error"})})}function k(){e.value.modalAction==="edit"&&t("edit-permissions")?x():e.value.modalAction==="create"&&t("create-permissions")&&A()}function D(){t("create-permissions")&&(Object.assign(e.value.item,p),e.value.modalAction="create",n())}return(o,i)=>(c(),m(w,{title:"Права"},{header:u(()=>[v(" Права ")]),default:u(()=>[e.value.isLoading?(c(),m(C,{key:0})):d("",!0),!e.value.isLoading&&l(t)("show-permissions")?(c(),P("div",O,[g("div",null,[l(t)("create-permissions")?(c(),m(L,{key:0,type:"btn",onClick:D},{default:u(()=>[v(" Додати ")]),_:1})):d("",!0)]),_(E,{data:e.value.data.data,onOnEdit:y,onOnDestroy:f,canDestroy:l(t)("destroy-permissions")},null,8,["data","canDestroy"]),g("div",j,[_(M,{pagination:e.value.data,"click-handler":r,modelValue:e.value.currentPage,"onUpdate:modelValue":i[0]||(i[0]=a=>e.value.currentPage=a)},null,8,["pagination","modelValue"])])])):d("",!0),(c(),m(F(l(h)),{item:e.value.item,onCloseModal:n,onSubmitForm:k,onDeclineForm:f,canDestroy:l(t)("destroy-permissions")},null,40,["item","canDestroy"]))]),_:1}))}};export{ae as default};
