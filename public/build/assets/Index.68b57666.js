import N from"./Modal.a02f5306.js";import O from"./Table.bbc5d043.js";import U from"./CrmLayout.05e3260c.js";import{ag as q,p as k,f as x,q as I,m,w as v,v as A,B as p,o as c,j as b,u as f,g as C,i as g,x as h,F as T,s as z,k as w,t as G,ac as H}from"./vendor.1f6af4a6.js";import"./Form.76310f98.js";import"./__commonjsHelpers__.488ed5c2.js";import"./app.8b7021f2.js";import"./vue.m.8e70aa70.js";import"./bootstrap.36b92799.js";import"./_plugin-vue_export-helper.cdc0426e.js";import"./Logo.c7a5de92.js";const J=w(" \u0417\u0432\u043E\u0440\u043E\u0442\u043D\u0456\u0439 \u0437\u0432\u02BC\u044F\u0437\u043E\u043A "),K={key:1},Q={class:"grid grid-cols-1 md:grid-cols-5 gap-4"},R={class:"md:col-span-1"},W={class:"w-full md:col-span-4 grid gap-4 grid-cols-1"},X={class:"text-center"},ue={__name:"Index",props:["statuses"],setup(_){const M=_,l=A("$swal"),o=A("$can");q({name:null,phone:null,comment:null,status:null});const e=k({data:[],isLoading:!0,isActiveModal:!1,modalAction:"",item:{},sidebarActive:"all"}),d=k([]),s=k({status:null,currentPage:1}),B=x(()=>{const t={};return t.page=s.value.currentPage,s.value.status&&(t.status=s.value.status),t});I(()=>{i(1),d.value.push({title:"\u0412\u0441\u0456",key:"all"});for(const[t,a]of Object.entries(M.statuses))d.value.push({title:a,key:t})});const L=x(()=>e.value.isActiveModal?N:null);function P(t){e.value.sidebarActive=t,t==="all"?s.value.status=null:s.value.status=t,s.value.currentPage=1,i()}function i(t){e.value.isLoading=!0,t&&(e.value.currentPage=t),axios.get(route("api.callbacks.index",B.value)).then(a=>{Object.assign(e.value.data,a.data.result),e.value.isLoading=!1}).catch(a=>{console.log(a),e.value.isLoading=!1})}function y(t){o("destroy-callbacks")&&l({title:"\u0412\u0438\u0434\u0430\u043B\u0438\u0442\u0438?",icon:"warning",showCancelButton:!0}).then(a=>{a.isConfirmed&&axios.delete(route("api.callbacks.destroy",t)).then(()=>{i(),e.value.isActiveModal&&r(),l({icon:"success",title:"Destroyed!"})}).catch(n=>{console.log(n),l({icon:"error",title:"Error!"})})})}function r(){e.value.isActiveModal=!e.value.isActiveModal}function V(t,a){o("edit-callbacks")&&axios.get(route("api.callbacks.edit",t)).then(({data:n})=>{e.value.item=n.result,e.value.modalAction="edit",e.value.item.index=a,r()}).catch(n=>console.log(n))}function D(){o("edit-callbacks")&&axios.put(route("api.callbacks.update",e.value.item.id),e.value.item).then(()=>{r(),i(),l({title:"Success!",icon:"success"})}).catch(t=>{console.log(t),l({title:"Error!",icon:"error"})})}function E(){o("create-callbacks")&&axios.post(route("api.callbacks.create"),e.value.item).then(({data:t})=>{r(),e.value.item={},i(),l({title:"Success!",icon:"success"})}).catch(t=>{console.log(t),l({title:"Error!",icon:"error"})})}function F(){e.value.modalAction==="edit"&&o("edit-callbacks")?D():e.value.modalAction==="create"&&o("create-callbacks")&&E()}return(t,a)=>{const n=p("loader-component"),$=p("sidebar-item"),S=p("sidebar-component"),j=p("pagination");return c(),m(U,{title:"\u0417\u0432\u043E\u0440\u043E\u0442\u043D\u0456\u0439 \u0437\u0432\u02BC\u044F\u0437\u043E\u043A"},{header:v(()=>[J]),default:v(()=>[e.value.isLoading?(c(),m(n,{key:0})):b("",!0),!e.value.isLoading&&f(o)("show-callbacks")?(c(),C("div",K,[g("div",Q,[g("div",R,[h(S,null,{default:v(()=>[d.value.length?(c(!0),C(T,{key:0},z(d.value,u=>(c(),m($,{onClick:Y=>P(u.key),active:e.value.sidebarActive===u.key},{default:v(()=>[w(G(u.title),1)]),_:2},1032,["onClick","active"]))),256)):b("",!0)]),_:1})]),g("div",W,[h(O,{data:e.value.data.data,statuses:_.statuses,onOnEdit:V,onOnDestroy:y,"can-destroy":f(o)("destroy-callbacks")},null,8,["data","statuses","can-destroy"]),g("div",X,[h(j,{pagination:e.value.data,"click-handler":i,modelValue:s.value.currentPage,"onUpdate:modelValue":a[0]||(a[0]=u=>s.value.currentPage=u)},null,8,["pagination","modelValue"])])])]),(c(),m(H(f(L)),{item:e.value.item,onCloseModal:r,onSubmitForm:F,onDeclineForm:y,statuses:_.statuses,"can-destroy":f(o)("destroy-callbacks")},null,40,["item","statuses","can-destroy"]))])):b("",!0)]),_:1})}}};export{ue as default};
