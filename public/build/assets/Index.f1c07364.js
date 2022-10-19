import L from"./Modal.2dc76d3b.js";import V from"./OptionsLayout.de073cbf.js";import E from"./Table.55e2acb3.js";import{v as F,A as P,G as $,B,V as u,S as d,R as s,$ as m,P as f,L as D,K as _,bc as O,Y as h,x as g,X as v}from"./moment.e1708d83.js";import"./Form.3ed2038a.js";const S=h(" FAQ "),j={key:1},N=h(" \u0414\u043E\u0434\u0430\u0442\u0438 "),T={__name:"Index",setup(Q){const n=g("$swal"),o=g("$can"),r=F({question:{ua:null,ru:null},answer:{ua:null,ru:null},published:0}),e=P({data:[],currentPage:1,isLoading:!0,isActiveModal:!1,modalAction:"",item:r});$(()=>{l(1)});const q=B(()=>e.value.isActiveModal?L:null);function l(t){e.value.isLoading=!0,t&&(e.value.currentPage=t),axios.get(route("api.faqs.index",{page:e.value.currentPage})).then(a=>{Object.assign(e.value.data,a.data.result),e.value.isLoading=!1}).catch(a=>{console.log(a),e.value.isLoading=!1})}function p(t){o("destroy-faq")&&n({title:"\u0412\u0438\u0434\u0430\u043B\u0438\u0442\u0438?",icon:"warning",showCancelButton:!0}).then(a=>{a.isConfirmed&&axios.delete(route("api.faqs.destroy",t)).then(()=>{l(),e.value.isActiveModal&&c(),n({icon:"success",title:"Destroyed!"})}).catch(i=>{console.log(i),n({icon:"error",title:"Error!"})})})}function c(){e.value.isActiveModal=!e.value.isActiveModal}function x(t,a){o("edit-faq")&&axios.get(route("api.faqs.edit",t)).then(({data:i})=>{e.value.item=i.result,e.value.modalAction="edit",e.value.item.index=a,c()}).catch(i=>console.log(i))}function A(){o("edit-faq")&&axios.put(route("api.faqs.update",e.value.item.id),e.value.item).then(()=>{c(),l(),n({title:"Success!",icon:"success"})}).catch(t=>{console.log(t),n({title:"Error!",icon:"error"})})}function y(){o("create-faq")&&axios.post(route("api.faqs.create"),e.value.item).then(()=>{c(),e.value.item=r,l(),n({title:"Success!",icon:"success"})}).catch(t=>{console.log(t),n({title:"Error!",icon:"error"})})}function b(){e.value.modalAction==="edit"&&o("edit-faq")?A():e.value.modalAction==="create"&&o("create-faq")&&y()}function C(){o("create-faq")&&(Object.assign(e.value.item,r),e.value.modalAction="create",c())}return(t,a)=>{const i=v("loader-component"),k=v("button-component"),M=v("pagination");return s(),u(V,{title:"FAQ"},{header:d(()=>[S]),default:d(()=>[e.value.isLoading?(s(),u(i,{key:0})):m("",!0),!e.value.isLoading&&f(o)("show-faq")?(s(),D("div",j,[f(o)("create-faq")?(s(),u(k,{key:0,type:"btn",onClick:C},{default:d(()=>[N]),_:1})):m("",!0),_(E,{data:e.value.data.data,onOnEdit:x,onOnDestroy:p},null,8,["data"]),_(M,{pagination:e.value.data,"click-handler":l,modelValue:e.value.currentPage,"onUpdate:modelValue":a[0]||(a[0]=w=>e.value.currentPage=w)},null,8,["pagination","modelValue"]),(s(),u(O(f(q)),{item:e.value.item,onCloseModal:c,onSubmitForm:b,onDeclineForm:p},null,40,["item"]))])):m("",!0)]),_:1})}}};export{T as default};
