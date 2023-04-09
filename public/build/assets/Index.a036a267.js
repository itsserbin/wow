import O from"./Modal.d4de382a.js";import j from"./Table.c78b60ea.js";import U from"./CrmLayout.455b05bf.js";import{Z as q,i as k,m as x,o as z,B as m,C as v,E as A,M as p,z as c,s as b,u as f,p as C,q as g,G as h,F as G,D as I,v as M,x as T,a7 as Z}from"./index.1726d409.js";import"./Form.8618d26b.js";import"./app.2d605236.js";import"./moment.9709ab41.js";import"./_plugin-vue_export-helper.cdc0426e.js";import"./lazyload.6866379a.js";import"./Logo.9264c4eb.js";const H=M(" \u0417\u0432\u043E\u0440\u043E\u0442\u043D\u0456\u0439 \u0437\u0432\u02BC\u044F\u0437\u043E\u043A "),J={key:1},K={class:"grid grid-cols-1 md:grid-cols-5 gap-4"},Q={class:"md:col-span-1"},R={class:"w-full md:col-span-4 grid gap-4 grid-cols-1"},W={class:"text-center"},re={__name:"Index",props:["statuses"],setup(_){const w=_,l=A("$swal"),o=A("$can");q({name:null,phone:null,comment:null,status:null});const e=k({data:[],isLoading:!0,isActiveModal:!1,modalAction:"",item:{},sidebarActive:"all"}),d=k([]),s=k({status:null,currentPage:1}),B=x(()=>{const t={};return t.page=s.value.currentPage,s.value.status&&(t.status=s.value.status),t});z(()=>{i(1),d.value.push({title:"\u0412\u0441\u0456",key:"all"});for(const[t,a]of Object.entries(w.statuses))d.value.push({title:a,key:t})});const D=x(()=>e.value.isActiveModal?O:null);function E(t){e.value.sidebarActive=t,t==="all"?s.value.status=null:s.value.status=t,s.value.currentPage=1,i()}function i(t){e.value.isLoading=!0,t&&(e.value.currentPage=t),axios.get(route("api.callbacks.index",B.value)).then(a=>{Object.assign(e.value.data,a.data.result),e.value.isLoading=!1}).catch(a=>{console.log(a),e.value.isLoading=!1})}function y(t){o("destroy-callbacks")&&l({title:"\u0412\u0438\u0434\u0430\u043B\u0438\u0442\u0438?",icon:"warning",showCancelButton:!0}).then(a=>{a.isConfirmed&&axios.delete(route("api.callbacks.destroy",t)).then(()=>{i(),e.value.isActiveModal&&r(),l({icon:"success",title:"Destroyed!"})}).catch(n=>{console.log(n),l({icon:"error",title:"Error!"})})})}function r(){e.value.isActiveModal=!e.value.isActiveModal}function L(t,a){o("edit-callbacks")&&axios.get(route("api.callbacks.edit",t)).then(({data:n})=>{e.value.item=n.result,e.value.modalAction="edit",e.value.item.index=a,r()}).catch(n=>console.log(n))}function P(){o("edit-callbacks")&&axios.put(route("api.callbacks.update",e.value.item.id),e.value.item).then(()=>{r(),i(),l({title:"Success!",icon:"success"})}).catch(t=>{console.log(t),l({title:"Error!",icon:"error"})})}function V(){o("create-callbacks")&&axios.post(route("api.callbacks.create"),e.value.item).then(({data:t})=>{r(),e.value.item={},i(),l({title:"Success!",icon:"success"})}).catch(t=>{console.log(t),l({title:"Error!",icon:"error"})})}function F(){e.value.modalAction==="edit"&&o("edit-callbacks")?P():e.value.modalAction==="create"&&o("create-callbacks")&&V()}return(t,a)=>{const n=p("loader-component"),$=p("sidebar-item"),S=p("sidebar-component"),N=p("pagination");return c(),m(U,{title:"\u0417\u0432\u043E\u0440\u043E\u0442\u043D\u0456\u0439 \u0437\u0432\u02BC\u044F\u0437\u043E\u043A"},{header:v(()=>[H]),default:v(()=>[e.value.isLoading?(c(),m(n,{key:0})):b("",!0),!e.value.isLoading&&f(o)("show-callbacks")?(c(),C("div",J,[g("div",K,[g("div",Q,[h(S,null,{default:v(()=>[d.value.length?(c(!0),C(G,{key:0},I(d.value,u=>(c(),m($,{onClick:X=>E(u.key),active:e.value.sidebarActive===u.key},{default:v(()=>[M(T(u.title),1)]),_:2},1032,["onClick","active"]))),256)):b("",!0)]),_:1})]),g("div",R,[h(j,{data:e.value.data.data,statuses:_.statuses,onOnEdit:L,onOnDestroy:y,"can-destroy":f(o)("destroy-callbacks")},null,8,["data","statuses","can-destroy"]),g("div",W,[h(N,{pagination:e.value.data,"click-handler":i,modelValue:s.value.currentPage,"onUpdate:modelValue":a[0]||(a[0]=u=>s.value.currentPage=u)},null,8,["pagination","modelValue"])])])]),(c(),m(Z(f(D)),{item:e.value.item,onCloseModal:r,onSubmitForm:F,onDeclineForm:y,statuses:_.statuses,"can-destroy":f(o)("destroy-callbacks")},null,40,["item","statuses","can-destroy"]))])):b("",!0)]),_:1})}}};export{re as default};
