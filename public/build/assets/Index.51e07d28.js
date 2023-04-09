import O from"./Modal.16a88e75.js";import j from"./Table.575bd9d1.js";import U from"./CrmLayout.455b05bf.js";import{Z as q,i as h,m as b,o as z,B as p,C as m,E as A,M as v,z as r,s as y,u as f,p as C,q as g,G as k,F as G,D as I,v as M,x as T,a7 as Z}from"./index.1726d409.js";import"./Form.d6687e45.js";import"./app.2d605236.js";import"./moment.9709ab41.js";import"./_plugin-vue_export-helper.cdc0426e.js";import"./lazyload.6866379a.js";import"./Logo.9264c4eb.js";const H=M("\u041F\u0456\u0434\u0442\u0440\u0438\u043C\u043A\u0430 \u043A\u043B\u0456\u0454\u043D\u0442\u0456\u0432"),J={key:1},K={class:"grid grid-cols-1 md:grid-cols-5 gap-4"},Q={class:"md:col-span-1"},R={class:"w-full md:col-span-4 grid gap-4 grid-cols-1"},W={class:"text-center"},ce={__name:"Index",props:["statuses"],setup(_){const w=_,n=A("$swal"),o=A("$can");q({name:null,phone:null,comment:null,status:null});const e=h({data:[],isLoading:!0,isActiveModal:!1,modalAction:"",item:{},sidebarActive:"all"}),d=h([]),s=h({status:null,currentPage:1}),B=b(()=>{const t={};return t.page=s.value.currentPage,s.value.status&&(t.status=s.value.status),t});z(()=>{l(1),d.value.push({title:"\u0412\u0441\u0456",key:"all"});for(const[t,a]of Object.entries(w.statuses))d.value.push({title:a,key:t})});const D=b(()=>e.value.isActiveModal?O:null);function E(t){e.value.sidebarActive=t,t==="all"?s.value.status=null:s.value.status=t,s.value.currentPage=1,l()}function l(t){e.value.isLoading=!0,t&&(e.value.currentPage=t),axios.get(route("api.supports.index",B.value)).then(({data:a})=>{e.value.data=a.result,e.value.isLoading=!1}).catch(a=>{console.log(a),e.value.isLoading=!1})}function x(t){o("destroy-callbacks")&&n({title:"\u0412\u0438\u0434\u0430\u043B\u0438\u0442\u0438?",icon:"warning",showCancelButton:!0}).then(a=>{a.isConfirmed&&axios.delete(route("api.supports.destroy",t)).then(()=>{l(),e.value.isActiveModal&&c(),n({icon:"success",title:"Destroyed!"})}).catch(i=>{console.log(i),n({icon:"error",title:"Error!"})})})}function c(){e.value.isActiveModal=!e.value.isActiveModal}function L(t,a){o("edit-supports")&&axios.get(route("api.supports.edit",t)).then(({data:i})=>{e.value.item=i.result,e.value.modalAction="edit",e.value.item.index=a,c()}).catch(i=>console.log(i))}function P(){o("edit-supports")&&axios.put(route("api.supports.update",e.value.item.id),e.value.item).then(()=>{c(),l(),n({title:"Success!",icon:"success"})}).catch(t=>{console.log(t),n({title:"Error!",icon:"error"})})}function V(){o("create-supports")&&axios.post(route("api.supports.create"),e.value.item).then(({data:t})=>{c(),e.value.item={},l(),n({title:"Success!",icon:"success"})}).catch(t=>{console.log(t),n({title:"Error!",icon:"error"})})}function F(){e.value.modalAction==="edit"&&o("edit-supports")?P():e.value.modalAction==="create"&&o("create-supports")&&V()}return(t,a)=>{const i=v("loader-component"),$=v("sidebar-item"),S=v("sidebar-component"),N=v("pagination");return r(),p(U,{title:"\u041F\u0456\u0434\u0442\u0440\u0438\u043C\u043A\u0430 \u043A\u043B\u0456\u0454\u043D\u0442\u0456\u0432"},{header:m(()=>[H]),default:m(()=>[e.value.isLoading?(r(),p(i,{key:0})):y("",!0),!e.value.isLoading&&f(o)("show-supports")?(r(),C("div",J,[g("div",K,[g("div",Q,[k(S,null,{default:m(()=>[d.value.length?(r(!0),C(G,{key:0},I(d.value,u=>(r(),p($,{onClick:X=>E(u.key),active:e.value.sidebarActive===u.key},{default:m(()=>[M(T(u.title),1)]),_:2},1032,["onClick","active"]))),256)):y("",!0)]),_:1})]),g("div",R,[k(j,{data:e.value.data.data,statuses:_.statuses,onOnEdit:L,onOnDestroy:x,"can-destroy":f(o)("destroy-supports")},null,8,["data","statuses","can-destroy"]),g("div",W,[k(N,{pagination:e.value.data,"click-handler":l,modelValue:s.value.currentPage,"onUpdate:modelValue":a[0]||(a[0]=u=>s.value.currentPage=u)},null,8,["pagination","modelValue"])])])]),(r(),p(Z(f(D)),{item:e.value.item,onCloseModal:c,onSubmitForm:F,onDeclineForm:x,statuses:_.statuses,"can-destroy":f(o)("destroy-supports")},null,40,["item","statuses","can-destroy"]))])):y("",!0)]),_:1})}}};export{ce as default};
