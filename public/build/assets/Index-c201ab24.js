import V from"./Modal-77e3d79e.js";import w from"./OptionsLayout-a4072b2b.js";import E from"./Table-9c5d8af5.js";import{V as P,r as $,o as j,f as B,s as u,v as m,y as x,D as d,p as s,k as g,j as p,u as r,g as F,z as _,a2 as O}from"./app-443dd386.js";import"./Form-efa68d2e.js";import"./app-957518a1.js";import"./vue-i18n.esm-bundler-c84158d1.js";import"./moment-fbc5633a.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./Logo-89534839.js";const N={key:1},Q={__name:"Index",setup(S){const n=x("$swal"),t=x("$can"),v=P({products:[],title:null,description:null,category:null}),e=$({data:[],currentPage:1,isLoading:!0,isActiveModal:!1,modalAction:"",item:{}});j(()=>{c(1)});const y=B(()=>e.value.isActiveModal?V:null);function c(o){e.value.isLoading=!0,o&&(e.value.currentPage=o),axios.get(route("api.xmls.index",{page:e.value.currentPage})).then(a=>{Object.assign(e.value.data,a.data.result),e.value.isLoading=!1}).catch(a=>{console.log(a),e.value.isLoading=!1})}function f(o){t("destroy-xml")&&n({title:"Видалити?",icon:"warning",showCancelButton:!0}).then(a=>{a.isConfirmed&&axios.delete(route("api.xmls.destroy",o)).then(()=>{c(),e.value.isActiveModal&&l(),n({icon:"success",title:"Destroyed!"})}).catch(i=>{console.log(i),n({icon:"error",title:"Error!"})})})}function l(){e.value.isActiveModal=!e.value.isActiveModal}function h(o,a){t("edit-xml")&&axios.get(route("api.xmls.edit",o)).then(({data:i})=>{e.value.item=i.result,e.value.modalAction="edit",e.value.item.index=a,l()}).catch(i=>console.log(i))}function A(){t("edit-xml")&&axios.put(route("api.xmls.update",e.value.item.id),e.value.item).then(()=>{l(),c(),n({title:"Success!",icon:"success"})}).catch(o=>{console.log(o),n({title:"Error!",icon:"error"})})}function D(){t("create-xml")&&axios.post(route("api.xmls.create"),e.value.item).then(()=>{l(),e.value.item=v,c(),n({title:"Success!",icon:"success"})}).catch(o=>{console.log(o),n({title:"Error!",icon:"error"})})}function M(){e.value.modalAction==="edit"&&t("edit-xml")?A():e.value.modalAction==="create"&&t("create-xml")&&D()}function k(){t("create-xml")&&(Object.assign(e.value.item,v),e.value.modalAction="create",l())}return(o,a)=>{const i=d("loader-component"),C=d("button-component"),L=d("pagination");return s(),u(w,{title:"XML"},{header:m(()=>[g(" XML ")]),default:m(()=>[e.value.isLoading?(s(),u(i,{key:0})):p("",!0),!e.value.isLoading&&r(t)("show-xml")?(s(),F("div",N,[r(t)("create-xml")?(s(),u(C,{key:0,type:"btn",onClick:k},{default:m(()=>[g(" Додати ")]),_:1})):p("",!0),_(E,{data:e.value.data.data,onOnEdit:h,onOnDestroy:f,canDestroy:r(t)("destroy-xml")},null,8,["data","canDestroy"]),_(L,{pagination:e.value.data,"click-handler":c,modelValue:e.value.currentPage,"onUpdate:modelValue":a[0]||(a[0]=b=>e.value.currentPage=b)},null,8,["pagination","modelValue"]),(s(),u(O(r(y)),{item:e.value.item,onCloseModal:l,onSubmitForm:M,onDeclineForm:f,canDestroy:r(t)("destroy-xml")},null,40,["item","canDestroy"]))])):p("",!0)]),_:1})}}};export{Q as default};
