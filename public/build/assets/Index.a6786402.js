import j from"./Modal.74703660.js";import z from"./Table.e596987e.js";import{az as U,y as h,z as x,C as I,a0 as v,X as p,B as A,V as d,S as i,_ as k,P as f,L as C,M as g,K as b,F as K,Z as T,Y as M,O as X,bg as Y}from"./___vite-browser-external_commonjs-proxy.af1999bf.js";import"./Form.341185f3.js";const Z=M(" \u0417\u0430\u044F\u0432\u043A\u0438 \u043D\u0430 \u0437\u0432\u043E\u0440\u043E\u0442\u043D\u0456\u0439 \u0437\u0432\u02BC\u044F\u0437\u043E\u043A "),q={key:1},G={class:"grid grid-cols-1 md:grid-cols-5 gap-4"},H={class:"md:col-span-1"},J={class:"w-full md:col-span-4 grid gap-4 grid-cols-1"},Q={class:"text-center"},se={__name:"Index",props:["statuses"],setup(_){const L=_,l=A("$swal"),s=A("$can");U({name:null,phone:null,comment:null,status:null});const e=h({data:[],isLoading:!0,isActiveModal:!1,modalAction:"",item:{},sidebarActive:"all"}),m=h([]),o=h({status:null,currentPage:1}),P=x(()=>{const t={};return t.page=o.value.currentPage,o.value.status&&(t.status=o.value.status),t});I(()=>{c(1),m.value.push({title:"\u0412\u0441\u0456",key:"all"});for(const[t,a]of Object.entries(L.statuses))m.value.push({title:a,key:t})});const V=x(()=>e.value.isActiveModal?j:null);function w(t){e.value.sidebarActive=t,t==="all"?o.value.status=null:o.value.status=t,o.value.currentPage=1,c()}function c(t){e.value.isLoading=!0,t&&(e.value.currentPage=t),axios.get(route("api.callbacks.index",P.value)).then(a=>{Object.assign(e.value.data,a.data.result),e.value.isLoading=!1}).catch(a=>{console.log(a),e.value.isLoading=!1})}function y(t){s("destroy-callbacks")&&l({title:"\u0412\u0438\u0434\u0430\u043B\u0438\u0442\u0438?",icon:"warning",showCancelButton:!0}).then(a=>{a.isConfirmed&&axios.delete(route("api.callbacks.destroy",t)).then(()=>{c(),e.value.isActiveModal&&u(),l({icon:"success",title:"Destroyed!"})}).catch(n=>{console.log(n),l({icon:"error",title:"Error!"})})})}function u(){e.value.isActiveModal=!e.value.isActiveModal}function B(t,a){s("edit-callbacks")&&axios.get(route("api.callbacks.edit",t)).then(({data:n})=>{e.value.item=n.result,e.value.modalAction="edit",e.value.item.index=a,u()}).catch(n=>console.log(n))}function D(){s("edit-callbacks")&&axios.put(route("api.callbacks.update",e.value.item.id),e.value.item).then(()=>{u(),c(),l({title:"Success!",icon:"success"})}).catch(t=>{console.log(t),l({title:"Error!",icon:"error"})})}function E(){s("create-callbacks")&&axios.post(route("api.callbacks.create"),e.value.item).then(({data:t})=>{u(),e.value.item={},c(),l({title:"Success!",icon:"success"})}).catch(t=>{console.log(t),l({title:"Error!",icon:"error"})})}function F(){e.value.modalAction==="edit"&&s("edit-callbacks")?D():e.value.modalAction==="create"&&s("create-callbacks")&&E()}return(t,a)=>{const n=d("loader-component"),S=d("sidebar-item"),O=d("sidebar-component"),$=d("pagination"),N=d("auth-layout");return i(),v(N,{title:"\u0417\u0430\u044F\u0432\u043A\u0438 \u043D\u0430 \u0437\u0432\u043E\u0440\u043E\u0442\u043D\u0456\u0439 \u0437\u0432\u02BC\u044F\u0437\u043E\u043A"},{header:p(()=>[Z]),default:p(()=>[e.value.isLoading?(i(),v(n,{key:0})):k("",!0),!e.value.isLoading&&f(s)("show-callbacks")?(i(),C("div",q,[g("div",G,[g("div",H,[b(O,null,{default:p(()=>[m.value.length?(i(!0),C(K,{key:0},T(m.value,r=>(i(),v(S,{onClick:R=>w(r.key),active:e.value.sidebarActive===r.key},{default:p(()=>[M(X(r.title),1)]),_:2},1032,["onClick","active"]))),256)):k("",!0)]),_:1})]),g("div",J,[b(z,{data:e.value.data.data,statuses:_.statuses,onOnEdit:B,onOnDestroy:y,"can-destroy":f(s)("destroy-callbacks")},null,8,["data","statuses","can-destroy"]),g("div",Q,[b($,{pagination:e.value.data,"click-handler":c,modelValue:o.value.currentPage,"onUpdate:modelValue":a[0]||(a[0]=r=>o.value.currentPage=r)},null,8,["pagination","modelValue"])])])]),(i(),v(Y(f(V)),{item:e.value.item,onCloseModal:u,onSubmitForm:F,onDeclineForm:y,statuses:_.statuses,"can-destroy":f(s)("destroy-callbacks")},null,40,["item","statuses","can-destroy"]))])):k("",!0)]),_:1})}}};export{se as default};
