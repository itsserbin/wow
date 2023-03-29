import N from"./Modal.d428b108.js";import j from"./Table.189d5cdc.js";import U from"./CrmLayout.d387f7f9.js";import{az as z,w as k,x,S as I,Q as m,O as v,U as A,K as p,F as i,G as b,B as f,y as C,z as g,M as h,H as G,I as H,P as M,A as K,a7 as Q}from"./moment.791e2419.js";import"./Form.1f518bc3.js";import"./app.ccd83b47.js";const T=M(" \u0417\u0432\u043E\u0440\u043E\u0442\u043D\u0456\u0439 \u0437\u0432\u02BC\u044F\u0437\u043E\u043A "),q={key:1},J={class:"grid grid-cols-1 md:grid-cols-5 gap-4"},R={class:"md:col-span-1"},W={class:"w-full md:col-span-4 grid gap-4 grid-cols-1"},X={class:"text-center"},le={__name:"Index",props:["statuses"],setup(_){const w=_,l=A("$swal"),s=A("$can");z({name:null,phone:null,comment:null,status:null});const e=k({data:[],isLoading:!0,isActiveModal:!1,modalAction:"",item:{},sidebarActive:"all"}),d=k([]),o=k({status:null,currentPage:1}),P=x(()=>{const t={};return t.page=o.value.currentPage,o.value.status&&(t.status=o.value.status),t});I(()=>{c(1),d.value.push({title:"\u0412\u0441\u0456",key:"all"});for(const[t,a]of Object.entries(w.statuses))d.value.push({title:a,key:t})});const B=x(()=>e.value.isActiveModal?N:null);function L(t){e.value.sidebarActive=t,t==="all"?o.value.status=null:o.value.status=t,o.value.currentPage=1,c()}function c(t){e.value.isLoading=!0,t&&(e.value.currentPage=t),axios.get(route("api.callbacks.index",P.value)).then(a=>{Object.assign(e.value.data,a.data.result),e.value.isLoading=!1}).catch(a=>{console.log(a),e.value.isLoading=!1})}function y(t){s("destroy-callbacks")&&l({title:"\u0412\u0438\u0434\u0430\u043B\u0438\u0442\u0438?",icon:"warning",showCancelButton:!0}).then(a=>{a.isConfirmed&&axios.delete(route("api.callbacks.destroy",t)).then(()=>{c(),e.value.isActiveModal&&r(),l({icon:"success",title:"Destroyed!"})}).catch(n=>{console.log(n),l({icon:"error",title:"Error!"})})})}function r(){e.value.isActiveModal=!e.value.isActiveModal}function V(t,a){s("edit-callbacks")&&axios.get(route("api.callbacks.edit",t)).then(({data:n})=>{e.value.item=n.result,e.value.modalAction="edit",e.value.item.index=a,r()}).catch(n=>console.log(n))}function D(){s("edit-callbacks")&&axios.put(route("api.callbacks.update",e.value.item.id),e.value.item).then(()=>{r(),c(),l({title:"Success!",icon:"success"})}).catch(t=>{console.log(t),l({title:"Error!",icon:"error"})})}function E(){s("create-callbacks")&&axios.post(route("api.callbacks.create"),e.value.item).then(({data:t})=>{r(),e.value.item={},c(),l({title:"Success!",icon:"success"})}).catch(t=>{console.log(t),l({title:"Error!",icon:"error"})})}function F(){e.value.modalAction==="edit"&&s("edit-callbacks")?D():e.value.modalAction==="create"&&s("create-callbacks")&&E()}return(t,a)=>{const n=p("loader-component"),S=p("sidebar-item"),$=p("sidebar-component"),O=p("pagination");return i(),m(U,{title:"\u0417\u0432\u043E\u0440\u043E\u0442\u043D\u0456\u0439 \u0437\u0432\u02BC\u044F\u0437\u043E\u043A"},{header:v(()=>[T]),default:v(()=>[e.value.isLoading?(i(),m(n,{key:0})):b("",!0),!e.value.isLoading&&f(s)("show-callbacks")?(i(),C("div",q,[g("div",J,[g("div",R,[h($,null,{default:v(()=>[d.value.length?(i(!0),C(G,{key:0},H(d.value,u=>(i(),m(S,{onClick:Y=>L(u.key),active:e.value.sidebarActive===u.key},{default:v(()=>[M(K(u.title),1)]),_:2},1032,["onClick","active"]))),256)):b("",!0)]),_:1})]),g("div",W,[h(j,{data:e.value.data.data,statuses:_.statuses,onOnEdit:V,onOnDestroy:y,"can-destroy":f(s)("destroy-callbacks")},null,8,["data","statuses","can-destroy"]),g("div",X,[h(O,{pagination:e.value.data,"click-handler":c,modelValue:o.value.currentPage,"onUpdate:modelValue":a[0]||(a[0]=u=>o.value.currentPage=u)},null,8,["pagination","modelValue"])])])]),(i(),m(Q(f(B)),{item:e.value.item,onCloseModal:r,onSubmitForm:F,onDeclineForm:y,statuses:_.statuses,"can-destroy":f(s)("destroy-callbacks")},null,40,["item","statuses","can-destroy"]))])):b("",!0)]),_:1})}}};export{le as default};
