import P from"./Modal.fa80bf85.js";import V from"./Table.4587cef2.js";import B from"./ReviewsLayout.b26010b4.js";import{az as S,y as $,G as F,z as N,W as u,U as d,S as r,a0 as v,P as l,L as O,M as f,K as _,bg as j,Z as g,D as w,Y as m}from"./___vite-browser-external_commonjs-proxy.2503c6f8.js";import"./Form.5566d495.js";const U=g(" \u0412\u0456\u0434\u0433\u0443\u043A\u0438 \u043F\u0440\u043E \u0442\u043E\u0432\u0430\u0440 "),z={key:1},R=g(" \u0414\u043E\u0434\u0430\u0442\u0438 "),G={class:"text-center"},q={__name:"Index",setup(I){const a=w("$swal"),i=w("$can"),h=S({name:null,comment:null,phone:null,product:null,published:0}),e=$({reviews:[],currentPage:1,isLoading:!0,isActiveModal:!1,modalAction:"",item:{}});F(()=>{s(1)});const y=N(()=>e.value.isActiveModal?P:null);function s(t){e.value.isLoading=!0,t&&(e.value.currentPage=t),axios.get(route("api.reviews.product.index",{page:e.value.currentPage})).then(o=>{Object.assign(e.value.reviews,o.data.result),e.value.isLoading=!1}).catch(o=>{console.log(o),e.value.isLoading=!1})}function p(t){i("destroy-reviews")&&a({title:"\u0412\u0438\u0434\u0430\u043B\u0438\u0442\u0438?",icon:"warning",showCancelButton:!0}).then(o=>{o.isConfirmed&&axios.delete(route("api.reviews.product.destroy",t)).then(()=>{s(),e.value.isActiveModal&&c(),a({icon:"success",title:"Destroyed!"})}).catch(n=>{console.log(n),a({icon:"error",title:"Error!"})})})}function c(){e.value.isActiveModal=!e.value.isActiveModal}function x(t,o){i("edit-reviews")&&axios.get(route("api.reviews.product.edit",t)).then(({data:n})=>{e.value.item=n.result,e.value.modalAction="edit",e.value.item.index=o,c()}).catch(n=>console.log(n))}function b(){i("edit-reviews")&&axios.put(route("api.reviews.product.update",e.value.item.id),e.value.item).then(()=>{c(),s(),a({title:"Success!",icon:"success"})}).catch(t=>{console.log(t),a({title:"Error!",icon:"error"})})}function A(){i("create-reviews")&&axios.post(route("api.reviews.product.create"),e.value.item).then(({data:t})=>{c(),e.value.item={},s(),a({title:"Success!",icon:"success"})}).catch(t=>{console.log(t),a({title:"Error!",icon:"error"})})}function D(){e.value.modalAction==="edit"&&i("edit-reviews")?b():e.value.modalAction==="create"&&i("create-reviews")&&A()}function C(){i("create-reviews")&&(Object.assign(e.value.item,h),e.value.modalAction="create",c())}function M(t){axios.post(route("api.reviews.product.accept",t)).then(()=>{s(),a({title:"Success!",icon:"success"})}).catch(o=>{console.log(o),a({title:"Error!",icon:"error"})})}return(t,o)=>{const n=m("loader-component"),k=m("button-component"),E=m("pagination");return r(),u(B,{title:"\u0412\u0456\u0434\u0433\u0443\u043A\u0438 \u043F\u0440\u043E \u0442\u043E\u0432\u0430\u0440"},{header:d(()=>[U]),default:d(()=>[e.value.isLoading?(r(),u(n,{key:0})):v("",!0),!e.value.isLoading&&l(i)("show-reviews")?(r(),O("div",z,[f("div",null,[l(i)("create-reviews")?(r(),u(k,{key:0,type:"btn",onClick:C,class:"mb-5"},{default:d(()=>[R]),_:1})):v("",!0)]),_(V,{data:e.value.reviews.data,class:"mb-5",onOnEdit:x,onOnDestroy:p,onPublishReview:M,canDestroy:l(i)("destroy-reviews")},null,8,["data","canDestroy"]),f("div",G,[_(E,{pagination:e.value.reviews,"click-handler":s,modelValue:e.value.currentPage,"onUpdate:modelValue":o[0]||(o[0]=L=>e.value.currentPage=L)},null,8,["pagination","modelValue"])])])):v("",!0),(r(),u(j(l(y)),{item:e.value.item,onCloseModal:c,onSubmitForm:D,onDeclineForm:p,canDestroy:l(i)("destroy-reviews")},null,40,["item","canDestroy"]))]),_:1})}}};export{q as default};
