import w from"./Modal.05c31dad.js";import E from"./OptionsLayout.09ae1593.js";import P from"./Table.0c1e7fce.js";import{ax as V,y as $,G as B,z as F,W as d,U as m,S as r,a0 as p,P as l,L as O,K as _,be as S,Z as h,D as g,Y as v}from"./moment.325cf309.js";import"./Form.362715ab.js";const j=h(" \u041F\u0440\u043E\u043C\u043E-\u043A\u043E\u0434\u0438 "),N={key:1},U=h(" \u0414\u043E\u0434\u0430\u0442\u0438 "),Y={__name:"Index",setup(z){const n=g("$swal"),o=g("$can"),u=V({code:null,percent_discount:null,discount_in_hryvnia:null,end_date:null,published:0}),e=$({data:[],currentPage:1,isLoading:!0,isActiveModal:!1,modalAction:"",item:u});B(()=>{s(1)});const y=F(()=>e.value.isActiveModal?w:null);function s(t){e.value.isLoading=!0,t&&(e.value.currentPage=t),axios.get(route("api.promo-codes.index",{page:e.value.currentPage})).then(a=>{Object.assign(e.value.data,a.data.result),e.value.isLoading=!1}).catch(a=>{console.log(a),e.value.isLoading=!1})}function f(t){o("destroy-promo-codes")&&n({title:"\u0412\u0438\u0434\u0430\u043B\u0438\u0442\u0438?",icon:"warning",showCancelButton:!0}).then(a=>{a.isConfirmed&&axios.delete(route("api.promo-codes.destroy",t)).then(()=>{s(),e.value.isActiveModal&&c(),n({icon:"success",title:"Destroyed!"})}).catch(i=>{console.log(i),n({icon:"error",title:"Error!"})})})}function c(){e.value.isActiveModal=!e.value.isActiveModal}function x(t,a){o("edit-promo-codes")&&axios.get(route("api.promo-codes.edit",t)).then(({data:i})=>{e.value.item=i.result,e.value.modalAction="edit",e.value.item.index=a,c()}).catch(i=>console.log(i))}function A(){o("edit-promo-codes")&&axios.put(route("api.promo-codes.update",e.value.item.id),e.value.item).then(()=>{c(),s(),n({title:"Success!",icon:"success"})}).catch(t=>{console.log(t),n({title:"Error!",icon:"error"})})}function D(){o("create-promo-codes")&&axios.post(route("api.promo-codes.create"),e.value.item).then(()=>{c(),e.value.item=u,s(),n({title:"Success!",icon:"success"})}).catch(t=>{console.log(t),n({title:"Error!",icon:"error"})})}function b(){e.value.modalAction==="edit"&&o("edit-promo-codes")?A():e.value.modalAction==="create"&&o("create-promo-codes")&&D()}function C(){o("create-promo-codes")&&(Object.assign(e.value.item,u),e.value.modalAction="create",c())}return(t,a)=>{const i=v("loader-component"),k=v("button-component"),M=v("pagination");return r(),d(E,{title:"\u041F\u0440\u043E\u043C\u043E-\u043A\u043E\u0434\u0438"},{header:m(()=>[j]),default:m(()=>[e.value.isLoading?(r(),d(i,{key:0})):p("",!0),!e.value.isLoading&&l(o)("show-promo-codes")?(r(),O("div",N,[l(o)("create-promo-codes")?(r(),d(k,{key:0,type:"btn",onClick:C},{default:m(()=>[U]),_:1})):p("",!0),_(P,{data:e.value.data.data,onOnEdit:x,onOnDestroy:f,canDestroy:l(o)("destroy-promo-codes")},null,8,["data","canDestroy"]),_(M,{pagination:e.value.data,"click-handler":s,modelValue:e.value.currentPage,"onUpdate:modelValue":a[0]||(a[0]=L=>e.value.currentPage=L)},null,8,["pagination","modelValue"]),(r(),d(S(l(y)),{item:e.value.item,onCloseModal:c,onSubmitForm:b,onDeclineForm:f,canDestroy:l(o)("destroy-promo-codes")},null,40,["item","canDestroy"]))])):p("",!0)]),_:1})}}};export{Y as default};