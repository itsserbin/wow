import{s as r}from"./swal-76588f7d.js";import{L as V}from"./Loader-3f12bd2d.js";import{_ as $,S as w}from"./SidebarItem-9941fa54.js";import{_ as E}from"./Paginate-7604e12b.js";import F from"./Modal-76ac5288.js";import N from"./Table-b41d64d0.js";import j from"./CrmLayout-43194635.js";import{i as O,G as U,r as g,j as k,o as q,p as n,D as d,x as p,A as x,C as h,t as m,q as A,v,l as _,F as G,K as I,B as J,J as K}from"./app-6d1ec759.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./Modal-1e77e375.js";import"./Form-ef60df62.js";import"./Label-646a10b8.js";import"./Input-335d7e3d.js";import"./Select-ffba6ec3.js";import"./Textarea-8cacefaf.js";import"./Table-d4015883.js";import"./XCircle-0fb660d3.js";import"./AuthenticatedLayout-53775af0.js";import"./index.esm-09a1b1ab.js";import"./Logo-7b0b10d2.js";import"./vue-i18n.esm-bundler-39f45a4f.js";const T={key:1},z={class:"grid grid-cols-1 md:grid-cols-5 gap-4"},H={class:"md:col-span-1"},Q={class:"w-full md:col-span-4 grid gap-4 grid-cols-1"},R={class:"text-center"},_e={__name:"Index",props:["statuses"],setup(f){const C=f,o=O("$can");U({name:null,phone:null,comment:null,status:null});const e=g({data:[],isLoading:!0,isActiveModal:!1,modalAction:"",item:{},sidebarActive:"all"}),c=g([]),i=g({status:null,currentPage:1}),b=k(()=>{const t={};return t.page=i.value.currentPage,i.value.status&&(t.status=i.value.status),t});q(()=>{l(1),c.value.push({title:"Всі",key:"all"});for(const[t,a]of Object.entries(C.statuses))c.value.push({title:a,key:t})});const L=k(()=>e.value.isActiveModal?F:null);function M(t){e.value.sidebarActive=t,t==="all"?i.value.status=null:i.value.status=t,i.value.currentPage=1,l()}function l(t){e.value.isLoading=!0,t&&(e.value.currentPage=t),axios.get(route("api.supports.index",b.value)).then(({data:a})=>{e.value.data=a.result,e.value.isLoading=!1}).catch(a=>{console.log(a),e.value.isLoading=!1})}function y(t){o("destroy-callbacks")&&r({title:"Видалити?",icon:"warning",showCancelButton:!0}).then(a=>{a.isConfirmed&&axios.delete(route("api.supports.destroy",t)).then(()=>{l(),e.value.isActiveModal&&u(),r({icon:"success",title:"Destroyed!"})}).catch(s=>{console.log(s),r({icon:"error",title:"Error!"})})})}function u(){e.value.isActiveModal=!e.value.isActiveModal}function B(t,a){o("edit-supports")&&axios.get(route("api.supports.edit",t)).then(({data:s})=>{e.value.item=s.result,e.value.modalAction="edit",e.value.item.index=a,u()}).catch(s=>console.log(s))}function D(){o("edit-supports")&&axios.put(route("api.supports.update",e.value.item.id),e.value.item).then(()=>{u(),l(),r({title:"Success!",icon:"success"})}).catch(t=>{console.log(t),r({title:"Error!",icon:"error"})})}function P(){o("create-supports")&&axios.post(route("api.supports.create"),e.value.item).then(({data:t})=>{u(),e.value.item={},l(),r({title:"Success!",icon:"success"})}).catch(t=>{console.log(t),r({title:"Error!",icon:"error"})})}function S(){e.value.modalAction==="edit"&&o("edit-supports")?D():e.value.modalAction==="create"&&o("create-supports")&&P()}return(t,a)=>(n(),d(j,{title:"Підтримка клієнтів"},{header:p(()=>[x("Підтримка клієнтів")]),default:p(()=>[e.value.isLoading?(n(),d(V,{key:0})):h("",!0),!e.value.isLoading&&m(o)("show-supports")?(n(),A("div",T,[v("div",z,[v("div",H,[_(w,null,{default:p(()=>[c.value.length?(n(!0),A(G,{key:0},I(c.value,s=>(n(),d($,{onClick:W=>M(s.key),active:e.value.sidebarActive===s.key},{default:p(()=>[x(J(s.title),1)]),_:2},1032,["onClick","active"]))),256)):h("",!0)]),_:1})]),v("div",Q,[_(N,{data:e.value.data.data,statuses:f.statuses,onOnEdit:B,onOnDestroy:y,"can-destroy":m(o)("destroy-supports")},null,8,["data","statuses","can-destroy"]),v("div",R,[_(E,{pagination:e.value.data,"click-handler":l,modelValue:i.value.currentPage,"onUpdate:modelValue":a[0]||(a[0]=s=>i.value.currentPage=s)},null,8,["pagination","modelValue"])])])]),(n(),d(K(m(L)),{item:e.value.item,onCloseModal:u,onSubmitForm:S,onDeclineForm:y,statuses:f.statuses,"can-destroy":m(o)("destroy-supports")},null,40,["item","statuses","can-destroy"]))])):h("",!0)]),_:1}))}};export{_e as default};
