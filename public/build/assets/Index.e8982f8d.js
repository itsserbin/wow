import O from"./Modal.156defac.js";import j from"./Table.462421ab.js";import z from"./CrmLayout.d31f03ac.js";import{az as U,y as h,z as x,C as I,a0 as p,X as m,B as A,V as v,S as c,_ as y,P as f,L as C,M as g,K as k,F as K,Z as T,Y as M,O as X,bg as Y}from"./___vite-browser-external_commonjs-proxy.af1999bf.js";import"./Form.3ad8a0b2.js";import"./app.180de32d.js";const Z=M("\u041F\u0456\u0434\u0442\u0440\u0438\u043C\u043A\u0430 \u043A\u043B\u0456\u0454\u043D\u0442\u0456\u0432"),q={key:1},G={class:"grid grid-cols-1 md:grid-cols-5 gap-4"},H={class:"md:col-span-1"},J={class:"w-full md:col-span-4 grid gap-4 grid-cols-1"},Q={class:"text-center"},ne={__name:"Index",props:["statuses"],setup(_){const L=_,n=A("$swal"),s=A("$can");U({name:null,phone:null,comment:null,status:null});const e=h({data:[],isLoading:!0,isActiveModal:!1,modalAction:"",item:{},sidebarActive:"all"}),d=h([]),o=h({status:null,currentPage:1}),P=x(()=>{const t={};return t.page=o.value.currentPage,o.value.status&&(t.status=o.value.status),t});I(()=>{l(1),d.value.push({title:"\u0412\u0441\u0456",key:"all"});for(const[t,a]of Object.entries(L.statuses))d.value.push({title:a,key:t})});const V=x(()=>e.value.isActiveModal?O:null);function w(t){e.value.sidebarActive=t,t==="all"?o.value.status=null:o.value.status=t,o.value.currentPage=1,l()}function l(t){e.value.isLoading=!0,t&&(e.value.currentPage=t),axios.get(route("api.supports.index",P.value)).then(({data:a})=>{e.value.data=a.result,e.value.isLoading=!1}).catch(a=>{console.log(a),e.value.isLoading=!1})}function b(t){s("destroy-callbacks")&&n({title:"\u0412\u0438\u0434\u0430\u043B\u0438\u0442\u0438?",icon:"warning",showCancelButton:!0}).then(a=>{a.isConfirmed&&axios.delete(route("api.supports.destroy",t)).then(()=>{l(),e.value.isActiveModal&&r(),n({icon:"success",title:"Destroyed!"})}).catch(i=>{console.log(i),n({icon:"error",title:"Error!"})})})}function r(){e.value.isActiveModal=!e.value.isActiveModal}function B(t,a){s("edit-supports")&&axios.get(route("api.supports.edit",t)).then(({data:i})=>{e.value.item=i.result,e.value.modalAction="edit",e.value.item.index=a,r()}).catch(i=>console.log(i))}function D(){s("edit-supports")&&axios.put(route("api.supports.update",e.value.item.id),e.value.item).then(()=>{r(),l(),n({title:"Success!",icon:"success"})}).catch(t=>{console.log(t),n({title:"Error!",icon:"error"})})}function E(){s("create-supports")&&axios.post(route("api.supports.create"),e.value.item).then(({data:t})=>{r(),e.value.item={},l(),n({title:"Success!",icon:"success"})}).catch(t=>{console.log(t),n({title:"Error!",icon:"error"})})}function F(){e.value.modalAction==="edit"&&s("edit-supports")?D():e.value.modalAction==="create"&&s("create-supports")&&E()}return(t,a)=>{const i=v("loader-component"),S=v("sidebar-item"),$=v("sidebar-component"),N=v("pagination");return c(),p(z,{title:"\u041F\u0456\u0434\u0442\u0440\u0438\u043C\u043A\u0430 \u043A\u043B\u0456\u0454\u043D\u0442\u0456\u0432"},{header:m(()=>[Z]),default:m(()=>[e.value.isLoading?(c(),p(i,{key:0})):y("",!0),!e.value.isLoading&&f(s)("show-supports")?(c(),C("div",q,[g("div",G,[g("div",H,[k($,null,{default:m(()=>[d.value.length?(c(!0),C(K,{key:0},T(d.value,u=>(c(),p(S,{onClick:R=>w(u.key),active:e.value.sidebarActive===u.key},{default:m(()=>[M(X(u.title),1)]),_:2},1032,["onClick","active"]))),256)):y("",!0)]),_:1})]),g("div",J,[k(j,{data:e.value.data.data,statuses:_.statuses,onOnEdit:B,onOnDestroy:b,"can-destroy":f(s)("destroy-supports")},null,8,["data","statuses","can-destroy"]),g("div",Q,[k(N,{pagination:e.value.data,"click-handler":l,modelValue:o.value.currentPage,"onUpdate:modelValue":a[0]||(a[0]=u=>o.value.currentPage=u)},null,8,["pagination","modelValue"])])])]),(c(),p(Y(f(V)),{item:e.value.item,onCloseModal:r,onSubmitForm:F,onDeclineForm:b,statuses:_.statuses,"can-destroy":f(s)("destroy-supports")},null,40,["item","statuses","can-destroy"]))])):y("",!0)]),_:1})}}};export{ne as default};
