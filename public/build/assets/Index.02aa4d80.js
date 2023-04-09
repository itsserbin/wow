import w from"./Modal.d3ba0b9c.js";import E from"./OptionsLayout.c9c3d942.js";import F from"./Table.7a33fa21.js";import{$ as L,j as V,o as $,p as P,C as u,D as m,G as _,N as f,A as l,v as p,u as r,q as j,H as g,a8 as B,x as h}from"./index.e4375aa7.js";import"./Form.b5bfaee2.js";import"./app.2c2e52ca.js";import"./moment.9709ab41.js";import"./_plugin-vue_export-helper.cdc0426e.js";import"./lazyload.6866379a.js";import"./Logo.6d532cc3.js";const N=h(" FAQ "),O={key:1},S=h(" \u0414\u043E\u0434\u0430\u0442\u0438 "),X={__name:"Index",setup(Q){const n=_("$swal"),t=_("$can"),d=L({question:{ua:null,ru:null},answer:{ua:null,ru:null},published:0}),e=V({data:[],currentPage:1,isLoading:!0,isActiveModal:!1,modalAction:"",item:d});$(()=>{s(1)});const q=P(()=>e.value.isActiveModal?w:null);function s(a){e.value.isLoading=!0,a&&(e.value.currentPage=a),axios.get(route("api.faqs.index",{page:e.value.currentPage})).then(o=>{Object.assign(e.value.data,o.data.result),e.value.isLoading=!1}).catch(o=>{console.log(o),e.value.isLoading=!1})}function v(a){t("destroy-faq")&&n({title:"\u0412\u0438\u0434\u0430\u043B\u0438\u0442\u0438?",icon:"warning",showCancelButton:!0}).then(o=>{o.isConfirmed&&axios.delete(route("api.faqs.destroy",a)).then(()=>{s(),e.value.isActiveModal&&c(),n({icon:"success",title:"Destroyed!"})}).catch(i=>{console.log(i),n({icon:"error",title:"Error!"})})})}function c(){e.value.isActiveModal=!e.value.isActiveModal}function y(a,o){t("edit-faq")&&axios.get(route("api.faqs.edit",a)).then(({data:i})=>{e.value.item=i.result,e.value.modalAction="edit",e.value.item.index=o,c()}).catch(i=>console.log(i))}function x(){t("edit-faq")&&axios.put(route("api.faqs.update",e.value.item.id),e.value.item).then(()=>{c(),s(),n({title:"Success!",icon:"success"})}).catch(a=>{console.log(a),n({title:"Error!",icon:"error"})})}function A(){t("create-faq")&&axios.post(route("api.faqs.create"),e.value.item).then(()=>{c(),e.value.item=d,s(),n({title:"Success!",icon:"success"})}).catch(a=>{console.log(a),n({title:"Error!",icon:"error"})})}function C(){e.value.modalAction==="edit"&&t("edit-faq")?x():e.value.modalAction==="create"&&t("create-faq")&&A()}function D(){t("create-faq")&&(Object.assign(e.value.item,d),e.value.modalAction="create",c())}return(a,o)=>{const i=f("loader-component"),b=f("button-component"),k=f("pagination");return l(),u(E,{title:"FAQ"},{header:m(()=>[N]),default:m(()=>[e.value.isLoading?(l(),u(i,{key:0})):p("",!0),!e.value.isLoading&&r(t)("show-faq")?(l(),j("div",O,[r(t)("create-faq")?(l(),u(b,{key:0,type:"btn",onClick:D},{default:m(()=>[S]),_:1})):p("",!0),g(F,{data:e.value.data.data,onOnEdit:y,onOnDestroy:v,canDestroy:r(t)("destroy-faq")},null,8,["data","canDestroy"]),g(k,{pagination:e.value.data,"click-handler":s,modelValue:e.value.currentPage,"onUpdate:modelValue":o[0]||(o[0]=M=>e.value.currentPage=M)},null,8,["pagination","modelValue"]),(l(),u(B(r(q)),{item:e.value.item,onCloseModal:c,onSubmitForm:C,onDeclineForm:v,canDestroy:r(t)("destroy-faq")},null,40,["item","canDestroy"]))])):p("",!0)]),_:1})}}};export{X as default};