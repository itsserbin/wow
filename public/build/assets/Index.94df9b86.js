import V from"./Modal.5e8676ef.js";import E from"./ReviewsLayout.d82dca61.js";import P from"./Table.9db636b7.js";import{v as $,A as B,G as D,B as F,V as l,S as u,R as r,$ as d,P as v,L as O,K as p,bc as S,Y as g,x as _,X as m}from"./moment.e1708d83.js";import"./Form.a3c3247b.js";const j=g(" \u0412\u0456\u0434\u0433\u0443\u043A\u0438 \u043F\u0440\u043E \u0442\u043E\u0432\u0430\u0440 "),N={key:1},U=g(" \u0414\u043E\u0434\u0430\u0442\u0438 "),Y={__name:"Index",setup(G){const a=_("$swal"),i=_("$can"),w=$({image:[],published:0}),e=B({reviews:[],currentPage:1,isLoading:!0,isActiveModal:!1,modalAction:"",item:{}});D(()=>{c(1)});const h=F(()=>e.value.isActiveModal?V:null);function c(t){e.value.isLoading=!0,t&&(e.value.currentPage=t),axios.get(route("api.reviews.social.index",{page:e.value.currentPage})).then(o=>{Object.assign(e.value.reviews,o.data.result),e.value.isLoading=!1}).catch(o=>{console.log(o),e.value.isLoading=!1})}function f(t){i("destroy-reviews")&&a({title:"\u0412\u0438\u0434\u0430\u043B\u0438\u0442\u0438?",icon:"warning",showCancelButton:!0}).then(o=>{o.isConfirmed&&axios.delete(route("api.reviews.social.destroy",t)).then(()=>{c(),e.value.isActiveModal&&s(),a({icon:"success",title:"Destroyed!"})}).catch(n=>{console.log(n),a({icon:"error",title:"Error!"})})})}function s(){e.value.isActiveModal=!e.value.isActiveModal}function x(t,o){i("edit-reviews")&&axios.get(route("api.reviews.social.edit",t)).then(({data:n})=>{e.value.item=n.result,e.value.modalAction="edit",e.value.item.index=o,s()}).catch(n=>console.log(n))}function A(){i("edit-reviews")&&axios.put(route("api.reviews.social.update",e.value.item.id),e.value.item).then(()=>{s(),c(),a({title:"Success!",icon:"success"})}).catch(t=>{console.log(t),a({title:"Error!",icon:"error"})})}function y(){i("create-reviews")&&axios.post(route("api.reviews.social.create"),e.value.item).then(({data:t})=>{s(),e.value.item={},c(),a({title:"Success!",icon:"success"})}).catch(t=>{console.log(t),a({title:"Error!",icon:"error"})})}function b(){e.value.modalAction==="edit"&&i("edit-reviews")?A():e.value.modalAction==="create"&&i("create-reviews")&&y()}function C(){i("create-reviews")&&(Object.assign(e.value.item,w),e.value.modalAction="create",s())}return(t,o)=>{const n=m("loader-component"),k=m("button-component"),M=m("pagination");return r(),l(E,{title:"\u0412\u0456\u0434\u0433\u0443\u043A\u0438 \u043F\u0440\u043E \u0442\u043E\u0432\u0430\u0440"},{header:u(()=>[j]),default:u(()=>[e.value.isLoading?(r(),l(n,{key:0})):d("",!0),!e.value.isLoading&&v(i)("show-reviews")?(r(),O("div",N,[v(i)("create-reviews")?(r(),l(k,{key:0,type:"btn",onClick:C},{default:u(()=>[U]),_:1})):d("",!0),p(P,{data:e.value.reviews.data,onOnEdit:x,onOnDestroy:f},null,8,["data"]),p(M,{pagination:e.value.reviews,"click-handler":c,modelValue:e.value.currentPage,"onUpdate:modelValue":o[0]||(o[0]=L=>e.value.currentPage=L)},null,8,["pagination","modelValue"]),(r(),l(S(v(h)),{item:e.value.item,onCloseModal:s,onSubmitForm:b,onDeclineForm:f},null,40,["item"]))])):d("",!0)]),_:1})}}};export{Y as default};
