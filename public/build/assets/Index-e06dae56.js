import B from"./Modal-020ece48.js";import L from"./Table-3ad0e91f.js";import P from"./ReviewsLayout-7052a734.js";import{a0 as $,g as F,o as N,l as O,A as u,B as d,D as f,K as m,y as r,s as w,q as v,u as l,m as S,p as g,E as _,a9 as j}from"./index-bc3c132c.js";import"./Form-d00a61f9.js";import"./ContentLayout-3b1e2771.js";import"./app-b232e098.js";import"./moment-fbc5633a.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./Logo-3d23fa23.js";const R={key:1},U={class:"text-center"},Y={__name:"Index",setup(q){const a=f("$swal"),i=f("$can"),h=$({name:null,comment:null,phone:null,product:null,published:0}),e=F({reviews:[],currentPage:1,isLoading:!0,isActiveModal:!1,modalAction:"",item:{}});N(()=>{s(1)});const y=O(()=>e.value.isActiveModal?B:null);function s(t){e.value.isLoading=!0,t&&(e.value.currentPage=t),axios.get(route("api.reviews.product.index",{page:e.value.currentPage})).then(o=>{Object.assign(e.value.reviews,o.data.result),e.value.isLoading=!1}).catch(o=>{console.log(o),e.value.isLoading=!1})}function p(t){i("destroy-reviews")&&a({title:"Видалити?",icon:"warning",showCancelButton:!0}).then(o=>{o.isConfirmed&&axios.delete(route("api.reviews.product.destroy",t)).then(()=>{s(),e.value.isActiveModal&&c(),a({icon:"success",title:"Destroyed!"})}).catch(n=>{console.log(n),a({icon:"error",title:"Error!"})})})}function c(){e.value.isActiveModal=!e.value.isActiveModal}function x(t,o){i("edit-reviews")&&axios.get(route("api.reviews.product.edit",t)).then(({data:n})=>{e.value.item=n.result,e.value.modalAction="edit",e.value.item.index=o,c()}).catch(n=>console.log(n))}function b(){i("edit-reviews")&&axios.put(route("api.reviews.product.update",e.value.item.id),e.value.item).then(()=>{c(),s(),a({title:"Success!",icon:"success"})}).catch(t=>{console.log(t),a({title:"Error!",icon:"error"})})}function A(){i("create-reviews")&&axios.post(route("api.reviews.product.create"),e.value.item).then(({data:t})=>{c(),e.value.item={},s(),a({title:"Success!",icon:"success"})}).catch(t=>{console.log(t),a({title:"Error!",icon:"error"})})}function D(){e.value.modalAction==="edit"&&i("edit-reviews")?b():e.value.modalAction==="create"&&i("create-reviews")&&A()}function C(){i("create-reviews")&&(Object.assign(e.value.item,h),e.value.modalAction="create",c())}function k(t){axios.post(route("api.reviews.product.accept",t)).then(()=>{s(),a({title:"Success!",icon:"success"})}).catch(o=>{console.log(o),a({title:"Error!",icon:"error"})})}return(t,o)=>{const n=m("loader-component"),E=m("button-component"),M=m("pagination");return r(),u(P,{title:"Відгуки про товар"},{header:d(()=>[w(" Відгуки про товар ")]),default:d(()=>[e.value.isLoading?(r(),u(n,{key:0})):v("",!0),!e.value.isLoading&&l(i)("show-reviews")?(r(),S("div",R,[g("div",null,[l(i)("create-reviews")?(r(),u(E,{key:0,type:"btn",onClick:C,class:"mb-5"},{default:d(()=>[w(" Додати ")]),_:1})):v("",!0)]),_(L,{data:e.value.reviews.data,class:"mb-5",onOnEdit:x,onOnDestroy:p,onPublishReview:k,canDestroy:l(i)("destroy-reviews")},null,8,["data","canDestroy"]),g("div",U,[_(M,{pagination:e.value.reviews,"click-handler":s,modelValue:e.value.currentPage,"onUpdate:modelValue":o[0]||(o[0]=V=>e.value.currentPage=V)},null,8,["pagination","modelValue"])])])):v("",!0),(r(),u(j(l(y)),{item:e.value.item,onCloseModal:c,onSubmitForm:D,onDeclineForm:p,canDestroy:l(i)("destroy-reviews")},null,40,["item","canDestroy"]))]),_:1})}}};export{Y as default};
