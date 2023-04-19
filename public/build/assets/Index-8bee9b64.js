import{s as r}from"./swal-76588f7d.js";import k from"./Modal-9a1b9808.js";import L from"./OptionsLayout-f068739f.js";import M from"./Table-0de54f29.js";import{L as V}from"./Loader-3f12bd2d.js";import{_ as E}from"./Button-18e692de.js";import{_ as $}from"./Paginate-7604e12b.js";import{i as b,r as w,o as B,j as P,p as l,D as u,x as d,A as v,C as m,t as c,q as j,v as g,l as _,J as F}from"./app-6d1ec759.js";import"./Modal-1e77e375.js";import"./Form-5914554c.js";import"./Label-646a10b8.js";import"./Input-335d7e3d.js";import"./Multiselect-55904e29.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./AuthenticatedLayout-53775af0.js";import"./index.esm-09a1b1ab.js";import"./Logo-7b0b10d2.js";import"./vue-i18n.esm-bundler-39f45a4f.js";import"./SidebarItem-9941fa54.js";import"./Table-d4015883.js";import"./XCircle-0fb660d3.js";const N={key:1,class:"grid grid-cols-1 gap-4"},O={class:"text-center"},se={__name:"Index",setup(S){const t=b("$can"),p={name:null,slug:null},e=w({data:[],currentPage:1,isLoading:!0,isActiveModal:!1,modalAction:"",item:{}});B(()=>{n(1)});const h=P(()=>e.value.isActiveModal?k:null);function n(o){e.value.isLoading=!0,o&&(e.value.currentPage=o),axios.get(route("api.roles.index",{page:e.value.currentPage})).then(a=>{Object.assign(e.value.data,a.data.result),e.value.isLoading=!1}).catch(a=>{console.log(a),e.value.isLoading=!1})}function f(o){t("destroy-roles")&&r({title:"Видалити?",icon:"warning",showCancelButton:!0}).then(a=>{a.isConfirmed&&axios.delete(route("api.roles.destroy",o)).then(()=>{n(),e.value.isActiveModal&&s(),r({icon:"success",title:"Destroyed!"})}).catch(i=>{console.log(i),r({icon:"error",title:"Error!"})})})}function s(){e.value.isActiveModal=!e.value.isActiveModal}function y(o,a){t("edit-roles")&&axios.get(route("api.roles.edit",o)).then(({data:i})=>{e.value.item=i.result,e.value.modalAction="edit",e.value.item.index=a,s()}).catch(i=>console.log(i))}function x(){t("edit-roles")&&axios.put(route("api.roles.update",e.value.item.id),e.value.item).then(()=>{s(),n(),r({title:"Success!",icon:"success"})}).catch(o=>{console.log(o),r({title:"Error!",icon:"error"})})}function A(){t("create-roles")&&axios.post(route("api.roles.create"),e.value.item).then(()=>{s(),e.value.item=p,n(),r({title:"Success!",icon:"success"})}).catch(o=>{console.log(o),r({title:"Error!",icon:"error"})})}function D(){e.value.modalAction==="edit"&&t("edit-roles")?x():e.value.modalAction==="create"&&t("create-roles")&&A()}function C(){t("create-roles")&&(Object.assign(e.value.item,p),e.value.modalAction="create",s())}return(o,a)=>(l(),u(L,{title:"Ролі"},{header:d(()=>[v(" Ролі ")]),default:d(()=>[e.value.isLoading?(l(),u(V,{key:0})):m("",!0),!e.value.isLoading&&c(t)("show-roles")?(l(),j("div",N,[g("div",null,[c(t)("create-roles")?(l(),u(E,{key:0,type:"btn",onClick:C},{default:d(()=>[v(" Додати ")]),_:1})):m("",!0)]),_(M,{data:e.value.data.data,onOnEdit:y,onOnDestroy:f,canDestroy:c(t)("destroy-roles")},null,8,["data","canDestroy"]),g("div",O,[_($,{pagination:e.value.data,"click-handler":n,modelValue:e.value.currentPage,"onUpdate:modelValue":a[0]||(a[0]=i=>e.value.currentPage=i)},null,8,["pagination","modelValue"])])])):m("",!0),(l(),u(F(c(h)),{item:e.value.item,onCloseModal:s,onSubmitForm:D,onDeclineForm:f,canDestroy:c(t)("destroy-roles")},null,40,["item","canDestroy"]))]),_:1}))}};export{se as default};
