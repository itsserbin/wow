import V from"./Modal.0ba6f9b3.js";import w from"./Table.f3c3c650.js";import{az as D,y as E,G as P,z as B,a0 as r,W as f,$ as d,S as i,Z as p,P as u,L as $,M as g,K as h,bg as F,X as N,D as _}from"./___vite-browser-external_commonjs-proxy.bd54111c.js";import"./Form.8f0dfe8f.js";const S=N(" \u0417\u0430\u044F\u0432\u043A\u0438 \u043D\u0430 \u0437\u0432\u043E\u0440\u043E\u0442\u043D\u0456\u0439 \u0437\u0432\u02BC\u044F\u0437\u043E\u043A "),O={key:1},j={class:"grid grid-cols-1 gap-4"},z={class:"text-center"},T={__name:"Index",props:["statuses"],setup(m){const s=_("$swal"),o=_("$can");D({name:null,phone:null,comment:null,status:null});const e=E({data:[],currentPage:1,isLoading:!0,isActiveModal:!1,modalAction:"",item:{}});P(()=>{c(1)});const k=B(()=>e.value.isActiveModal?V:null);function c(a){e.value.isLoading=!0,a&&(e.value.currentPage=a),axios.get(route("api.callbacks.index",{page:e.value.currentPage})).then(t=>{Object.assign(e.value.data,t.data.result),e.value.isLoading=!1}).catch(t=>{console.log(t),e.value.isLoading=!1})}function v(a){o("destroy-callbacks")&&s({title:"\u0412\u0438\u0434\u0430\u043B\u0438\u0442\u0438?",icon:"warning",showCancelButton:!0}).then(t=>{t.isConfirmed&&axios.delete(route("api.callbacks.destroy",a)).then(()=>{c(),e.value.isActiveModal&&l(),s({icon:"success",title:"Destroyed!"})}).catch(n=>{console.log(n),s({icon:"error",title:"Error!"})})})}function l(){e.value.isActiveModal=!e.value.isActiveModal}function b(a,t){o("edit-callbacks")&&axios.get(route("api.callbacks.edit",a)).then(({data:n})=>{e.value.item=n.result,e.value.modalAction="edit",e.value.item.index=t,l()}).catch(n=>console.log(n))}function y(){o("edit-callbacks")&&axios.put(route("api.callbacks.update",e.value.item.id),e.value.item).then(()=>{l(),c(),s({title:"Success!",icon:"success"})}).catch(a=>{console.log(a),s({title:"Error!",icon:"error"})})}function x(){o("create-callbacks")&&axios.post(route("api.callbacks.create"),e.value.item).then(({data:a})=>{l(),e.value.item={},c(),s({title:"Success!",icon:"success"})}).catch(a=>{console.log(a),s({title:"Error!",icon:"error"})})}function A(){e.value.modalAction==="edit"&&o("edit-callbacks")?y():e.value.modalAction==="create"&&o("create-callbacks")&&x()}return(a,t)=>{const n=d("loader-component"),M=d("pagination"),C=d("auth-layout");return i(),r(C,{title:"\u0417\u0430\u044F\u0432\u043A\u0438 \u043D\u0430 \u0437\u0432\u043E\u0440\u043E\u0442\u043D\u0456\u0439 \u0437\u0432\u02BC\u044F\u0437\u043E\u043A"},{header:f(()=>[S]),default:f(()=>[e.value.isLoading?(i(),r(n,{key:0})):p("",!0),!e.value.isLoading&&u(o)("show-callbacks")?(i(),$("div",O,[g("div",j,[h(w,{data:e.value.data.data,statuses:m.statuses,onOnEdit:b,onOnDestroy:v,"can-destroy":u(o)("destroy-callbacks")},null,8,["data","statuses","can-destroy"]),g("div",z,[h(M,{pagination:e.value.data,"click-handler":c,modelValue:e.value.currentPage,"onUpdate:modelValue":t[0]||(t[0]=L=>e.value.currentPage=L)},null,8,["pagination","modelValue"])])]),(i(),r(F(u(k)),{item:e.value.item,onCloseModal:l,onSubmitForm:A,onDeclineForm:v,statuses:m.statuses,"can-destroy":u(o)("destroy-callbacks")},null,40,["item","statuses","can-destroy"]))])):p("",!0)]),_:1})}}};export{T as default};