import w from"./Modal.7f107a07.js";import E from"./OptionsLayout.8dda99b2.js";import V from"./Table.59cf02b2.js";import{ag as P,q as $,s as B,g as F,p as u,w as m,x,C as d,o as s,l as g,k as p,u as r,i as O,y as _,ac as j}from"./vendor.2c8aab53.js";import"./Form.dce491b3.js";import"./__commonjsHelpers__.4516dc8a.js";import"./app.1edad9f2.js";import"./vue.m.132a23fc.js";import"./_plugin-vue_export-helper.cdc0426e.js";import"./Logo.6090e12d.js";const N={key:1},Q={__name:"Index",setup(S){const n=x("$swal"),t=x("$can"),v=P({products:[],title:null,description:null,category:null}),e=$({data:[],currentPage:1,isLoading:!0,isActiveModal:!1,modalAction:"",item:{}});B(()=>{c(1)});const y=F(()=>e.value.isActiveModal?w:null);function c(o){e.value.isLoading=!0,o&&(e.value.currentPage=o),axios.get(route("api.xmls.index",{page:e.value.currentPage})).then(a=>{Object.assign(e.value.data,a.data.result),e.value.isLoading=!1}).catch(a=>{console.log(a),e.value.isLoading=!1})}function f(o){t("destroy-xml")&&n({title:"\u0412\u0438\u0434\u0430\u043B\u0438\u0442\u0438?",icon:"warning",showCancelButton:!0}).then(a=>{a.isConfirmed&&axios.delete(route("api.xmls.destroy",o)).then(()=>{c(),e.value.isActiveModal&&l(),n({icon:"success",title:"Destroyed!"})}).catch(i=>{console.log(i),n({icon:"error",title:"Error!"})})})}function l(){e.value.isActiveModal=!e.value.isActiveModal}function h(o,a){t("edit-xml")&&axios.get(route("api.xmls.edit",o)).then(({data:i})=>{e.value.item=i.result,e.value.modalAction="edit",e.value.item.index=a,l()}).catch(i=>console.log(i))}function A(){t("edit-xml")&&axios.put(route("api.xmls.update",e.value.item.id),e.value.item).then(()=>{l(),c(),n({title:"Success!",icon:"success"})}).catch(o=>{console.log(o),n({title:"Error!",icon:"error"})})}function C(){t("create-xml")&&axios.post(route("api.xmls.create"),e.value.item).then(()=>{l(),e.value.item=v,c(),n({title:"Success!",icon:"success"})}).catch(o=>{console.log(o),n({title:"Error!",icon:"error"})})}function M(){e.value.modalAction==="edit"&&t("edit-xml")?A():e.value.modalAction==="create"&&t("create-xml")&&C()}function k(){t("create-xml")&&(Object.assign(e.value.item,v),e.value.modalAction="create",l())}return(o,a)=>{const i=d("loader-component"),D=d("button-component"),L=d("pagination");return s(),u(E,{title:"XML"},{header:m(()=>[g(" XML ")]),default:m(()=>[e.value.isLoading?(s(),u(i,{key:0})):p("",!0),!e.value.isLoading&&r(t)("show-xml")?(s(),O("div",N,[r(t)("create-xml")?(s(),u(D,{key:0,type:"btn",onClick:k},{default:m(()=>[g(" \u0414\u043E\u0434\u0430\u0442\u0438 ")]),_:1})):p("",!0),_(V,{data:e.value.data.data,onOnEdit:h,onOnDestroy:f,canDestroy:r(t)("destroy-xml")},null,8,["data","canDestroy"]),_(L,{pagination:e.value.data,"click-handler":c,modelValue:e.value.currentPage,"onUpdate:modelValue":a[0]||(a[0]=b=>e.value.currentPage=b)},null,8,["pagination","modelValue"]),(s(),u(j(r(y)),{item:e.value.item,onCloseModal:l,onSubmitForm:M,onDeclineForm:f,canDestroy:r(t)("destroy-xml")},null,40,["item","canDestroy"]))])):p("",!0)]),_:1})}}};export{Q as default};
