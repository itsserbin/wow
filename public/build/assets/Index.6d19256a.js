import E from"./Modal.b6187b1c.js";import L from"./ReviewsLayout.0d9cc9e3.js";import P from"./Table.43606051.js";import{az as V,w as B,S as F,x as O,Q as u,O as d,U as f,K as m,F as r,G as v,B as l,y as $,M as _,a7 as S,P as w}from"./moment.791e2419.js";import"./Form.c1e9b13c.js";import"./ContentLayout.dd1a7f73.js";import"./app.ccd83b47.js";const j=w(" \u0412\u0456\u0434\u0433\u0443\u043A\u0438 \u043F\u0440\u043E \u0442\u043E\u0432\u0430\u0440 "),N={key:1},U=w(" \u0414\u043E\u0434\u0430\u0442\u0438 "),J={__name:"Index",setup(z){const i=f("$swal"),o=f("$can"),g=V({image:[],published:0}),e=B({reviews:[],currentPage:1,isLoading:!0,isActiveModal:!1,modalAction:"",item:{}});F(()=>{c(1)});const h=O(()=>e.value.isActiveModal?E:null);function c(t){e.value.isLoading=!0,t&&(e.value.currentPage=t),axios.get(route("api.reviews.social.index",{page:e.value.currentPage})).then(a=>{Object.assign(e.value.reviews,a.data.result),e.value.isLoading=!1}).catch(a=>{console.log(a),e.value.isLoading=!1})}function p(t){o("destroy-reviews")&&i({title:"\u0412\u0438\u0434\u0430\u043B\u0438\u0442\u0438?",icon:"warning",showCancelButton:!0}).then(a=>{a.isConfirmed&&axios.delete(route("api.reviews.social.destroy",t)).then(()=>{c(),e.value.isActiveModal&&s(),i({icon:"success",title:"Destroyed!"})}).catch(n=>{console.log(n),i({icon:"error",title:"Error!"})})})}function s(){e.value.isActiveModal=!e.value.isActiveModal}function y(t,a){o("edit-reviews")&&axios.get(route("api.reviews.social.edit",t)).then(({data:n})=>{e.value.item=n.result,e.value.modalAction="edit",e.value.item.index=a,s()}).catch(n=>console.log(n))}function x(){o("edit-reviews")&&axios.put(route("api.reviews.social.update",e.value.item.id),e.value.item).then(()=>{s(),c(),i({title:"Success!",icon:"success"})}).catch(t=>{console.log(t),i({title:"Error!",icon:"error"})})}function A(){o("create-reviews")&&axios.post(route("api.reviews.social.create"),e.value.item).then(({data:t})=>{s(),e.value.item={},c(),i({title:"Success!",icon:"success"})}).catch(t=>{console.log(t),i({title:"Error!",icon:"error"})})}function C(){e.value.modalAction==="edit"&&o("edit-reviews")?x():e.value.modalAction==="create"&&o("create-reviews")&&A()}function D(){o("create-reviews")&&(Object.assign(e.value.item,g),e.value.modalAction="create",s())}return(t,a)=>{const n=m("loader-component"),M=m("button-component"),b=m("pagination");return r(),u(L,{title:"\u0412\u0456\u0434\u0433\u0443\u043A\u0438 \u043F\u0440\u043E \u0442\u043E\u0432\u0430\u0440"},{header:d(()=>[j]),default:d(()=>[e.value.isLoading?(r(),u(n,{key:0})):v("",!0),!e.value.isLoading&&l(o)("show-reviews")?(r(),$("div",N,[l(o)("create-reviews")?(r(),u(M,{key:0,type:"btn",onClick:D},{default:d(()=>[U]),_:1})):v("",!0),_(P,{data:e.value.reviews.data,onOnEdit:y,onOnDestroy:p,canDestroy:l(o)("destroy-reviews")},null,8,["data","canDestroy"]),_(b,{pagination:e.value.reviews,"click-handler":c,modelValue:e.value.currentPage,"onUpdate:modelValue":a[0]||(a[0]=k=>e.value.currentPage=k)},null,8,["pagination","modelValue"]),(r(),u(S(l(h)),{item:e.value.item,onCloseModal:s,onSubmitForm:C,onDeclineForm:p,canDestroy:l(o)("destroy-reviews")},null,40,["item","canDestroy"]))])):v("",!0)]),_:1})}}};export{J as default};
