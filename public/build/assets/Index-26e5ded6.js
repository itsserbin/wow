import j from"./Modal-194d649b.js";import O from"./Table-48ba4ff7.js";import U from"./CrmLayout-7f065217.js";import{V as z,r as h,f as b,o as I,s as p,v as m,y as A,D as v,p as r,k as C,j as y,u as f,g as M,i as g,z as k,F as T,x as q,l as G,a2 as H}from"./app-da11968c.js";import"./Form-dd0fd8b3.js";import"./app-23639435.js";import"./vue-i18n.esm-bundler-7f92347f.js";import"./moment-fbc5633a.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./Logo-9fe22fca.js";const J={key:1},K={class:"grid grid-cols-1 md:grid-cols-5 gap-4"},Q={class:"md:col-span-1"},R={class:"w-full md:col-span-4 grid gap-4 grid-cols-1"},W={class:"text-center"},re={__name:"Index",props:["statuses"],setup(_){const V=_,n=A("$swal"),o=A("$can");z({name:null,phone:null,comment:null,status:null});const e=h({data:[],isLoading:!0,isActiveModal:!1,modalAction:"",item:{},sidebarActive:"all"}),d=h([]),s=h({status:null,currentPage:1}),w=b(()=>{const t={};return t.page=s.value.currentPage,s.value.status&&(t.status=s.value.status),t});I(()=>{l(1),d.value.push({title:"Всі",key:"all"});for(const[t,a]of Object.entries(V.statuses))d.value.push({title:a,key:t})});const D=b(()=>e.value.isActiveModal?j:null);function L(t){e.value.sidebarActive=t,t==="all"?s.value.status=null:s.value.status=t,s.value.currentPage=1,l()}function l(t){e.value.isLoading=!0,t&&(e.value.currentPage=t),axios.get(route("api.supports.index",w.value)).then(({data:a})=>{e.value.data=a.result,e.value.isLoading=!1}).catch(a=>{console.log(a),e.value.isLoading=!1})}function x(t){o("destroy-callbacks")&&n({title:"Видалити?",icon:"warning",showCancelButton:!0}).then(a=>{a.isConfirmed&&axios.delete(route("api.supports.destroy",t)).then(()=>{l(),e.value.isActiveModal&&c(),n({icon:"success",title:"Destroyed!"})}).catch(i=>{console.log(i),n({icon:"error",title:"Error!"})})})}function c(){e.value.isActiveModal=!e.value.isActiveModal}function P(t,a){o("edit-supports")&&axios.get(route("api.supports.edit",t)).then(({data:i})=>{e.value.item=i.result,e.value.modalAction="edit",e.value.item.index=a,c()}).catch(i=>console.log(i))}function B(){o("edit-supports")&&axios.put(route("api.supports.update",e.value.item.id),e.value.item).then(()=>{c(),l(),n({title:"Success!",icon:"success"})}).catch(t=>{console.log(t),n({title:"Error!",icon:"error"})})}function E(){o("create-supports")&&axios.post(route("api.supports.create"),e.value.item).then(({data:t})=>{c(),e.value.item={},l(),n({title:"Success!",icon:"success"})}).catch(t=>{console.log(t),n({title:"Error!",icon:"error"})})}function F(){e.value.modalAction==="edit"&&o("edit-supports")?B():e.value.modalAction==="create"&&o("create-supports")&&E()}return(t,a)=>{const i=v("loader-component"),$=v("sidebar-item"),S=v("sidebar-component"),N=v("pagination");return r(),p(U,{title:"Підтримка клієнтів"},{header:m(()=>[C("Підтримка клієнтів")]),default:m(()=>[e.value.isLoading?(r(),p(i,{key:0})):y("",!0),!e.value.isLoading&&f(o)("show-supports")?(r(),M("div",J,[g("div",K,[g("div",Q,[k(S,null,{default:m(()=>[d.value.length?(r(!0),M(T,{key:0},q(d.value,u=>(r(),p($,{onClick:X=>L(u.key),active:e.value.sidebarActive===u.key},{default:m(()=>[C(G(u.title),1)]),_:2},1032,["onClick","active"]))),256)):y("",!0)]),_:1})]),g("div",R,[k(O,{data:e.value.data.data,statuses:_.statuses,onOnEdit:P,onOnDestroy:x,"can-destroy":f(o)("destroy-supports")},null,8,["data","statuses","can-destroy"]),g("div",W,[k(N,{pagination:e.value.data,"click-handler":l,modelValue:s.value.currentPage,"onUpdate:modelValue":a[0]||(a[0]=u=>s.value.currentPage=u)},null,8,["pagination","modelValue"])])])]),(r(),p(H(f(D)),{item:e.value.item,onCloseModal:c,onSubmitForm:F,onDeclineForm:x,statuses:_.statuses,"can-destroy":f(o)("destroy-supports")},null,40,["item","statuses","can-destroy"]))])):y("",!0)]),_:1})}}};export{re as default};
