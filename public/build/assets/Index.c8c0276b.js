import L from"./Modal.71502963.js";import B from"./Table.65fc5587.js";import P from"./ReviewsLayout.d82dca61.js";import{v as $,A as D,G as E,B as F,V as r,S as u,R as c,$ as d,L as N,M as v,P as p,K as f,bc as S,Y as g,x as _,X as m}from"./moment.e1708d83.js";import"./Form.c5db06ec.js";const j=g(" \u0412\u0456\u0434\u0433\u0443\u043A\u0438 \u043F\u0440\u043E \u0442\u043E\u0432\u0430\u0440 "),O={key:1},U=g(" \u0414\u043E\u0434\u0430\u0442\u0438 "),G={class:"text-center"},q={__name:"Index",setup(I){const a=_("$swal"),n=_("$can"),w=$({name:null,comment:null,phone:null,product:null,published:0}),e=D({reviews:[],currentPage:1,isLoading:!0,isActiveModal:!1,modalAction:"",item:{}});E(()=>{i(1)});const h=F(()=>e.value.isActiveModal?L:null);function i(t){e.value.isLoading=!0,t&&(e.value.currentPage=t),axios.get(route("api.reviews.product.index",{page:e.value.currentPage})).then(o=>{Object.assign(e.value.reviews,o.data.result),e.value.isLoading=!1}).catch(o=>{console.log(o),e.value.isLoading=!1})}function x(t){n("destroy-reviews")&&a({title:"\u0412\u0438\u0434\u0430\u043B\u0438\u0442\u0438?",icon:"warning",showCancelButton:!0}).then(o=>{o.isConfirmed&&axios.delete(route("api.reviews.product.destroy",t)).then(()=>{i(),e.value.isActiveModal&&s(),a({icon:"success",title:"Destroyed!"})}).catch(l=>{console.log(l),a({icon:"error",title:"Error!"})})})}function s(){e.value.isActiveModal=!e.value.isActiveModal}function b(){n("edit-reviews")&&axios.put(route("api.reviews.product.update",e.value.item.id),e.value.item).then(()=>{s(),i(),a({title:"Success!",icon:"success"})}).catch(t=>{console.log(t),a({title:"Error!",icon:"error"})})}function A(){n("create-reviews")&&axios.post(route("api.reviews.product.create"),e.value.item).then(({data:t})=>{s(),e.value.item={},i(),a({title:"Success!",icon:"success"})}).catch(t=>{console.log(t),a({title:"Error!",icon:"error"})})}function y(){e.value.modalAction==="edit"&&n("edit-reviews")?b():e.value.modalAction==="create"&&n("create-reviews")&&A()}function C(){n("create-reviews")&&(Object.assign(e.value.item,w),e.value.modalAction="create",s())}return(t,o)=>{const l=m("loader-component"),M=m("button-component"),k=m("pagination");return c(),r(P,{title:"\u0412\u0456\u0434\u0433\u0443\u043A\u0438 \u043F\u0440\u043E \u0442\u043E\u0432\u0430\u0440"},{header:u(()=>[j]),default:u(()=>[e.value.isLoading?(c(),r(l,{key:0})):d("",!0),e.value.isLoading?d("",!0):(c(),N("div",O,[v("div",null,[p(n)("create-reviews")?(c(),r(M,{key:0,type:"btn",onClick:C,class:"mb-5"},{default:u(()=>[U]),_:1})):d("",!0)]),f(B,{data:e.value.reviews.data,class:"mb-5"},null,8,["data"]),v("div",G,[f(k,{pagination:e.value.reviews,"click-handler":i,modelValue:e.value.currentPage,"onUpdate:modelValue":o[0]||(o[0]=V=>e.value.currentPage=V)},null,8,["pagination","modelValue"])])])),(c(),r(S(p(h)),{item:e.value.item,onCloseModal:s,onSubmitForm:y,onDeclineForm:x},null,40,["item"]))]),_:1})}}};export{q as default};