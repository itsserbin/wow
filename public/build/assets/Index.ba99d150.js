import O from"./Modal.8791a30a.js";import U from"./Table.755e09ec.js";import j from"./CrmLayout.d387f7f9.js";import{az as z,w as h,x as A,S as I,Q as p,O as m,U as b,K as v,F as c,G as y,B as f,y as C,z as g,M as k,H as G,I as H,P as M,A as K,a7 as Q}from"./moment.791e2419.js";import"./Form.efbca896.js";import"./app.ccd83b47.js";const T=M("\u041F\u0456\u0434\u0442\u0440\u0438\u043C\u043A\u0430 \u043A\u043B\u0456\u0454\u043D\u0442\u0456\u0432"),q={key:1},J={class:"grid grid-cols-1 md:grid-cols-5 gap-4"},R={class:"md:col-span-1"},W={class:"w-full md:col-span-4 grid gap-4 grid-cols-1"},X={class:"text-center"},ne={__name:"Index",props:["statuses"],setup(_){const w=_,n=b("$swal"),s=b("$can");z({name:null,phone:null,comment:null,status:null});const e=h({data:[],isLoading:!0,isActiveModal:!1,modalAction:"",item:{},sidebarActive:"all"}),d=h([]),o=h({status:null,currentPage:1}),P=A(()=>{const t={};return t.page=o.value.currentPage,o.value.status&&(t.status=o.value.status),t});I(()=>{l(1),d.value.push({title:"\u0412\u0441\u0456",key:"all"});for(const[t,a]of Object.entries(w.statuses))d.value.push({title:a,key:t})});const B=A(()=>e.value.isActiveModal?O:null);function L(t){e.value.sidebarActive=t,t==="all"?o.value.status=null:o.value.status=t,o.value.currentPage=1,l()}function l(t){e.value.isLoading=!0,t&&(e.value.currentPage=t),axios.get(route("api.supports.index",P.value)).then(({data:a})=>{e.value.data=a.result,e.value.isLoading=!1}).catch(a=>{console.log(a),e.value.isLoading=!1})}function x(t){s("destroy-callbacks")&&n({title:"\u0412\u0438\u0434\u0430\u043B\u0438\u0442\u0438?",icon:"warning",showCancelButton:!0}).then(a=>{a.isConfirmed&&axios.delete(route("api.supports.destroy",t)).then(()=>{l(),e.value.isActiveModal&&r(),n({icon:"success",title:"Destroyed!"})}).catch(i=>{console.log(i),n({icon:"error",title:"Error!"})})})}function r(){e.value.isActiveModal=!e.value.isActiveModal}function V(t,a){s("edit-supports")&&axios.get(route("api.supports.edit",t)).then(({data:i})=>{e.value.item=i.result,e.value.modalAction="edit",e.value.item.index=a,r()}).catch(i=>console.log(i))}function D(){s("edit-supports")&&axios.put(route("api.supports.update",e.value.item.id),e.value.item).then(()=>{r(),l(),n({title:"Success!",icon:"success"})}).catch(t=>{console.log(t),n({title:"Error!",icon:"error"})})}function E(){s("create-supports")&&axios.post(route("api.supports.create"),e.value.item).then(({data:t})=>{r(),e.value.item={},l(),n({title:"Success!",icon:"success"})}).catch(t=>{console.log(t),n({title:"Error!",icon:"error"})})}function F(){e.value.modalAction==="edit"&&s("edit-supports")?D():e.value.modalAction==="create"&&s("create-supports")&&E()}return(t,a)=>{const i=v("loader-component"),S=v("sidebar-item"),$=v("sidebar-component"),N=v("pagination");return c(),p(j,{title:"\u041F\u0456\u0434\u0442\u0440\u0438\u043C\u043A\u0430 \u043A\u043B\u0456\u0454\u043D\u0442\u0456\u0432"},{header:m(()=>[T]),default:m(()=>[e.value.isLoading?(c(),p(i,{key:0})):y("",!0),!e.value.isLoading&&f(s)("show-supports")?(c(),C("div",q,[g("div",J,[g("div",R,[k($,null,{default:m(()=>[d.value.length?(c(!0),C(G,{key:0},H(d.value,u=>(c(),p(S,{onClick:Y=>L(u.key),active:e.value.sidebarActive===u.key},{default:m(()=>[M(K(u.title),1)]),_:2},1032,["onClick","active"]))),256)):y("",!0)]),_:1})]),g("div",W,[k(U,{data:e.value.data.data,statuses:_.statuses,onOnEdit:V,onOnDestroy:x,"can-destroy":f(s)("destroy-supports")},null,8,["data","statuses","can-destroy"]),g("div",X,[k(N,{pagination:e.value.data,"click-handler":l,modelValue:o.value.currentPage,"onUpdate:modelValue":a[0]||(a[0]=u=>o.value.currentPage=u)},null,8,["pagination","modelValue"])])])]),(c(),p(Q(f(B)),{item:e.value.item,onCloseModal:r,onSubmitForm:F,onDeclineForm:x,statuses:_.statuses,"can-destroy":f(s)("destroy-supports")},null,40,["item","statuses","can-destroy"]))])):y("",!0)]),_:1})}}};export{ne as default};
