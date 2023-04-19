import{s as r}from"./swal-76588f7d.js";import{L as C}from"./Loader-3f12bd2d.js";import{_ as k}from"./Button-18e692de.js";import{_ as L}from"./Paginate-7604e12b.js";import M from"./Modal-aafb5909.js";import E from"./OptionsLayout-f068739f.js";import V from"./Table-5e2da8d2.js";import{i as $,G as b,r as w,o as P,j,p as l,D as u,x as m,A as v,C as d,t as s,q as B,l as g,J as F}from"./app-6d1ec759.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./Modal-1e77e375.js";import"./Form-01492d59.js";import"./Label-646a10b8.js";import"./Input-335d7e3d.js";import"./AuthenticatedLayout-53775af0.js";import"./index.esm-09a1b1ab.js";import"./Logo-7b0b10d2.js";import"./vue-i18n.esm-bundler-39f45a4f.js";import"./SidebarItem-9941fa54.js";import"./Table-d4015883.js";import"./XCircle-0fb660d3.js";const O={key:1},ie={__name:"Index",setup(N){const o=$("$can"),f=b({name:null,hex:null}),e=w({colors:[],currentPage:1,isLoading:!0,isActiveModal:!1,modalAction:"",item:{}});P(()=>{n(1)});const _=j(()=>e.value.isActiveModal?M:null);function n(t){e.value.isLoading=!0,t&&(e.value.currentPage=t),axios.get(route("api.colors.index",{page:e.value.currentPage})).then(a=>{Object.assign(e.value.colors,a.data.result),e.value.isLoading=!1}).catch(a=>{console.log(a),e.value.isLoading=!1})}function p(t){o("destroy-colors")&&r({title:"Видалити?",icon:"warning",showCancelButton:!0}).then(a=>{a.isConfirmed&&axios.delete(route("api.colors.destroy",t)).then(()=>{n(),e.value.isActiveModal&&c(),r({icon:"success",title:"Destroyed!"})}).catch(i=>{console.log(i),r({icon:"error",title:"Error!"})})})}function c(){e.value.isActiveModal=!e.value.isActiveModal}function h(t,a){o("edit-colors")&&axios.get(route("api.colors.edit",t)).then(({data:i})=>{e.value.item=i.result,e.value.modalAction="edit",e.value.item.index=a,c()}).catch(i=>console.log(i))}function y(){o("edit-colors")&&axios.put(route("api.colors.update",e.value.item.id),e.value.item).then(()=>{c(),n(),r({title:"Success!",icon:"success"})}).catch(t=>{console.log(t),r({title:"Error!",icon:"error"})})}function x(){o("create-colors")&&axios.post(route("api.colors.create"),e.value.item).then(()=>{c(),e.value.item=f,n(),r({title:"Success!",icon:"success"})}).catch(t=>{console.log(t),r({title:"Error!",icon:"error"})})}function A(){e.value.modalAction==="edit"&&o("edit-colors")?y():e.value.modalAction==="create"&&o("create-colors")&&x()}function D(){o("create-colors")&&(Object.assign(e.value.item,f),e.value.modalAction="create",c())}return(t,a)=>(l(),u(E,{title:"Кольори"},{header:m(()=>[v(" Кольори ")]),default:m(()=>[e.value.isLoading?(l(),u(C,{key:0})):d("",!0),!e.value.isLoading&&s(o)("show-colors")?(l(),B("div",O,[s(o)("create-providers")?(l(),u(k,{key:0,type:"btn",onClick:D},{default:m(()=>[v(" Додати ")]),_:1})):d("",!0),g(V,{data:e.value.colors.data,onOnEdit:h,onOnDestroy:p,canDestroy:s(o)("destroy-colors")},null,8,["data","canDestroy"]),g(L,{pagination:e.value.colors,"click-handler":n,modelValue:e.value.currentPage,"onUpdate:modelValue":a[0]||(a[0]=i=>e.value.currentPage=i)},null,8,["pagination","modelValue"]),(l(),u(F(s(_)),{item:e.value.item,onCloseModal:c,onSubmitForm:A,onDeclineForm:p,canDestroy:s(o)("destroy-colors")},null,40,["item","canDestroy"]))])):d("",!0)]),_:1}))}};export{ie as default};
