import j from"./Modal.7a4ef672.js";import O from"./Table.1bf80926.js";import U from"./CrmLayout.18697a83.js";import{$ as q,j as k,p as x,o as G,C as m,D as v,G as A,N as p,A as i,v as b,u as f,q as C,s as g,H as h,F as H,E as I,x as M,y as T,a8 as z}from"./index.e4375aa7.js";import"./Form.8cf22ae6.js";import"./app.2c2e52ca.js";import"./moment.9709ab41.js";import"./_plugin-vue_export-helper.cdc0426e.js";import"./lazyload.6866379a.js";import"./Logo.6d532cc3.js";const J=M(" \u0417\u0432\u043E\u0440\u043E\u0442\u043D\u0456\u0439 \u0437\u0432\u02BC\u044F\u0437\u043E\u043A "),K={key:1},Q={class:"grid grid-cols-1 md:grid-cols-5 gap-4"},R={class:"md:col-span-1"},W={class:"w-full md:col-span-4 grid gap-4 grid-cols-1"},X={class:"text-center"},re={__name:"Index",props:["statuses"],setup(_){const w=_,l=A("$swal"),o=A("$can");q({name:null,phone:null,comment:null,status:null});const e=k({data:[],isLoading:!0,isActiveModal:!1,modalAction:"",item:{},sidebarActive:"all"}),d=k([]),s=k({status:null,currentPage:1}),D=x(()=>{const t={};return t.page=s.value.currentPage,s.value.status&&(t.status=s.value.status),t});G(()=>{c(1),d.value.push({title:"\u0412\u0441\u0456",key:"all"});for(const[t,a]of Object.entries(w.statuses))d.value.push({title:a,key:t})});const E=x(()=>e.value.isActiveModal?j:null);function L(t){e.value.sidebarActive=t,t==="all"?s.value.status=null:s.value.status=t,s.value.currentPage=1,c()}function c(t){e.value.isLoading=!0,t&&(e.value.currentPage=t),axios.get(route("api.callbacks.index",D.value)).then(a=>{Object.assign(e.value.data,a.data.result),e.value.isLoading=!1}).catch(a=>{console.log(a),e.value.isLoading=!1})}function y(t){o("destroy-callbacks")&&l({title:"\u0412\u0438\u0434\u0430\u043B\u0438\u0442\u0438?",icon:"warning",showCancelButton:!0}).then(a=>{a.isConfirmed&&axios.delete(route("api.callbacks.destroy",t)).then(()=>{c(),e.value.isActiveModal&&r(),l({icon:"success",title:"Destroyed!"})}).catch(n=>{console.log(n),l({icon:"error",title:"Error!"})})})}function r(){e.value.isActiveModal=!e.value.isActiveModal}function P(t,a){o("edit-callbacks")&&axios.get(route("api.callbacks.edit",t)).then(({data:n})=>{e.value.item=n.result,e.value.modalAction="edit",e.value.item.index=a,r()}).catch(n=>console.log(n))}function V(){o("edit-callbacks")&&axios.put(route("api.callbacks.update",e.value.item.id),e.value.item).then(()=>{r(),c(),l({title:"Success!",icon:"success"})}).catch(t=>{console.log(t),l({title:"Error!",icon:"error"})})}function $(){o("create-callbacks")&&axios.post(route("api.callbacks.create"),e.value.item).then(({data:t})=>{r(),e.value.item={},c(),l({title:"Success!",icon:"success"})}).catch(t=>{console.log(t),l({title:"Error!",icon:"error"})})}function B(){e.value.modalAction==="edit"&&o("edit-callbacks")?V():e.value.modalAction==="create"&&o("create-callbacks")&&$()}return(t,a)=>{const n=p("loader-component"),F=p("sidebar-item"),N=p("sidebar-component"),S=p("pagination");return i(),m(U,{title:"\u0417\u0432\u043E\u0440\u043E\u0442\u043D\u0456\u0439 \u0437\u0432\u02BC\u044F\u0437\u043E\u043A"},{header:v(()=>[J]),default:v(()=>[e.value.isLoading?(i(),m(n,{key:0})):b("",!0),!e.value.isLoading&&f(o)("show-callbacks")?(i(),C("div",K,[g("div",Q,[g("div",R,[h(N,null,{default:v(()=>[d.value.length?(i(!0),C(H,{key:0},I(d.value,u=>(i(),m(F,{onClick:Y=>L(u.key),active:e.value.sidebarActive===u.key},{default:v(()=>[M(T(u.title),1)]),_:2},1032,["onClick","active"]))),256)):b("",!0)]),_:1})]),g("div",W,[h(O,{data:e.value.data.data,statuses:_.statuses,onOnEdit:P,onOnDestroy:y,"can-destroy":f(o)("destroy-callbacks")},null,8,["data","statuses","can-destroy"]),g("div",X,[h(S,{pagination:e.value.data,"click-handler":c,modelValue:s.value.currentPage,"onUpdate:modelValue":a[0]||(a[0]=u=>s.value.currentPage=u)},null,8,["pagination","modelValue"])])])]),(i(),m(z(f(E)),{item:e.value.item,onCloseModal:r,onSubmitForm:B,onDeclineForm:y,statuses:_.statuses,"can-destroy":f(o)("destroy-callbacks")},null,40,["item","statuses","can-destroy"]))])):b("",!0)]),_:1})}}};export{re as default};
