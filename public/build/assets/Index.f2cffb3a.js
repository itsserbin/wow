import E from"./Modal.49bc5177.js";import L from"./ReviewsLayout.3394ae90.js";import V from"./Table.64c4d8ed.js";import{$,j as P,o as j,p as B,C as u,D as d,G as f,N as m,A as c,v,u as l,q as F,H as _,a8 as N,x as g}from"./index.e4375aa7.js";import"./Form.f9751ee0.js";import"./ContentLayout.4225a58c.js";import"./app.2c2e52ca.js";import"./moment.9709ab41.js";import"./_plugin-vue_export-helper.cdc0426e.js";import"./lazyload.6866379a.js";import"./Logo.6d532cc3.js";const O=g(" \u0412\u0456\u0434\u0433\u0443\u043A\u0438 \u043F\u0440\u043E \u0442\u043E\u0432\u0430\u0440 "),S={key:1},U=g(" \u0414\u043E\u0434\u0430\u0442\u0438 "),Y={__name:"Index",setup(q){const a=f("$swal"),o=f("$can"),w=$({image:[],published:0}),e=P({reviews:[],currentPage:1,isLoading:!0,isActiveModal:!1,modalAction:"",item:{}});j(()=>{r(1)});const h=B(()=>e.value.isActiveModal?E:null);function r(t){e.value.isLoading=!0,t&&(e.value.currentPage=t),axios.get(route("api.reviews.social.index",{page:e.value.currentPage})).then(i=>{Object.assign(e.value.reviews,i.data.result),e.value.isLoading=!1}).catch(i=>{console.log(i),e.value.isLoading=!1})}function p(t){o("destroy-reviews")&&a({title:"\u0412\u0438\u0434\u0430\u043B\u0438\u0442\u0438?",icon:"warning",showCancelButton:!0}).then(i=>{i.isConfirmed&&axios.delete(route("api.reviews.social.destroy",t)).then(()=>{r(),e.value.isActiveModal&&s(),a({icon:"success",title:"Destroyed!"})}).catch(n=>{console.log(n),a({icon:"error",title:"Error!"})})})}function s(){e.value.isActiveModal=!e.value.isActiveModal}function y(t,i){o("edit-reviews")&&axios.get(route("api.reviews.social.edit",t)).then(({data:n})=>{e.value.item=n.result,e.value.modalAction="edit",e.value.item.index=i,s()}).catch(n=>console.log(n))}function x(){o("edit-reviews")&&axios.put(route("api.reviews.social.update",e.value.item.id),e.value.item).then(()=>{s(),r(),a({title:"Success!",icon:"success"})}).catch(t=>{console.log(t),a({title:"Error!",icon:"error"})})}function A(){o("create-reviews")&&axios.post(route("api.reviews.social.create"),e.value.item).then(({data:t})=>{s(),e.value.item={},r(),a({title:"Success!",icon:"success"})}).catch(t=>{console.log(t),a({title:"Error!",icon:"error"})})}function C(){e.value.modalAction==="edit"&&o("edit-reviews")?x():e.value.modalAction==="create"&&o("create-reviews")&&A()}function D(){o("create-reviews")&&(Object.assign(e.value.item,w),e.value.modalAction="create",s())}return(t,i)=>{const n=m("loader-component"),b=m("button-component"),k=m("pagination");return c(),u(L,{title:"\u0412\u0456\u0434\u0433\u0443\u043A\u0438 \u043F\u0440\u043E \u0442\u043E\u0432\u0430\u0440"},{header:d(()=>[O]),default:d(()=>[e.value.isLoading?(c(),u(n,{key:0})):v("",!0),!e.value.isLoading&&l(o)("show-reviews")?(c(),F("div",S,[l(o)("create-reviews")?(c(),u(b,{key:0,type:"btn",onClick:D},{default:d(()=>[U]),_:1})):v("",!0),_(V,{data:e.value.reviews.data,onOnEdit:y,onOnDestroy:p,canDestroy:l(o)("destroy-reviews")},null,8,["data","canDestroy"]),_(k,{pagination:e.value.reviews,"click-handler":r,modelValue:e.value.currentPage,"onUpdate:modelValue":i[0]||(i[0]=M=>e.value.currentPage=M)},null,8,["pagination","modelValue"]),(c(),u(N(l(h)),{item:e.value.item,onCloseModal:s,onSubmitForm:C,onDeclineForm:p,canDestroy:l(o)("destroy-reviews")},null,40,["item","canDestroy"]))])):v("",!0)]),_:1})}}};export{Y as default};
