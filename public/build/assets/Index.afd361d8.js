import E from"./Modal.eb6dde29.js";import L from"./Table.d255c5d1.js";import P from"./ReviewsLayout.1a8201f5.js";import{aB as S,y as $,C as F,z as N,a0 as u,X as d,B as f,V as v,S as r,_ as m,P as l,L as O,M as _,K as w,ab as j,Y as g}from"./___vite-browser-external_commonjs-proxy.86165f86.js";import"./Form.c8566892.js";import"./ContentLayout.05f0718b.js";import"./app.ab310418.js";const R=g(" \u0412\u0456\u0434\u0433\u0443\u043A\u0438 \u043F\u0440\u043E \u0442\u043E\u0432\u0430\u0440 "),U={key:1},z=g(" \u0414\u043E\u0434\u0430\u0442\u0438 "),I={class:"text-center"},Q={__name:"Index",setup(K){const a=f("$swal"),i=f("$can"),h=S({name:null,comment:null,phone:null,product:null,published:0}),e=$({reviews:[],currentPage:1,isLoading:!0,isActiveModal:!1,modalAction:"",item:{}});F(()=>{s(1)});const y=N(()=>e.value.isActiveModal?E:null);function s(t){e.value.isLoading=!0,t&&(e.value.currentPage=t),axios.get(route("api.reviews.product.index",{page:e.value.currentPage})).then(o=>{Object.assign(e.value.reviews,o.data.result),e.value.isLoading=!1}).catch(o=>{console.log(o),e.value.isLoading=!1})}function p(t){i("destroy-reviews")&&a({title:"\u0412\u0438\u0434\u0430\u043B\u0438\u0442\u0438?",icon:"warning",showCancelButton:!0}).then(o=>{o.isConfirmed&&axios.delete(route("api.reviews.product.destroy",t)).then(()=>{s(),e.value.isActiveModal&&c(),a({icon:"success",title:"Destroyed!"})}).catch(n=>{console.log(n),a({icon:"error",title:"Error!"})})})}function c(){e.value.isActiveModal=!e.value.isActiveModal}function x(t,o){i("edit-reviews")&&axios.get(route("api.reviews.product.edit",t)).then(({data:n})=>{e.value.item=n.result,e.value.modalAction="edit",e.value.item.index=o,c()}).catch(n=>console.log(n))}function b(){i("edit-reviews")&&axios.put(route("api.reviews.product.update",e.value.item.id),e.value.item).then(()=>{c(),s(),a({title:"Success!",icon:"success"})}).catch(t=>{console.log(t),a({title:"Error!",icon:"error"})})}function A(){i("create-reviews")&&axios.post(route("api.reviews.product.create"),e.value.item).then(({data:t})=>{c(),e.value.item={},s(),a({title:"Success!",icon:"success"})}).catch(t=>{console.log(t),a({title:"Error!",icon:"error"})})}function C(){e.value.modalAction==="edit"&&i("edit-reviews")?b():e.value.modalAction==="create"&&i("create-reviews")&&A()}function D(){i("create-reviews")&&(Object.assign(e.value.item,h),e.value.modalAction="create",c())}function M(t){axios.post(route("api.reviews.product.accept",t)).then(()=>{s(),a({title:"Success!",icon:"success"})}).catch(o=>{console.log(o),a({title:"Error!",icon:"error"})})}return(t,o)=>{const n=v("loader-component"),k=v("button-component"),V=v("pagination");return r(),u(P,{title:"\u0412\u0456\u0434\u0433\u0443\u043A\u0438 \u043F\u0440\u043E \u0442\u043E\u0432\u0430\u0440"},{header:d(()=>[R]),default:d(()=>[e.value.isLoading?(r(),u(n,{key:0})):m("",!0),!e.value.isLoading&&l(i)("show-reviews")?(r(),O("div",U,[_("div",null,[l(i)("create-reviews")?(r(),u(k,{key:0,type:"btn",onClick:D,class:"mb-5"},{default:d(()=>[z]),_:1})):m("",!0)]),w(L,{data:e.value.reviews.data,class:"mb-5",onOnEdit:x,onOnDestroy:p,onPublishReview:M,canDestroy:l(i)("destroy-reviews")},null,8,["data","canDestroy"]),_("div",I,[w(V,{pagination:e.value.reviews,"click-handler":s,modelValue:e.value.currentPage,"onUpdate:modelValue":o[0]||(o[0]=B=>e.value.currentPage=B)},null,8,["pagination","modelValue"])])])):m("",!0),(r(),u(j(l(y)),{item:e.value.item,onCloseModal:c,onSubmitForm:C,onDeclineForm:p,canDestroy:l(i)("destroy-reviews")},null,40,["item","canDestroy"]))]),_:1})}}};export{Q as default};