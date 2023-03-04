import w from"./Modal.a75eab4c.js";import E from"./OptionsLayout.2a012a84.js";import P from"./Table.b7ec8604.js";import{ay as V,w as B,S as F,x as $,Q as u,K as m,X as x,H as d,F as s,P as p,B as r,y as O,J as _,a2 as S,L as g}from"./___vite-browser-external_commonjs-proxy.4f2b06be.js";import"./Form.85f9a942.js";import"./app.68928a22.js";const j=g(" XML "),N={key:1},X=g(" \u0414\u043E\u0434\u0430\u0442\u0438 "),q={__name:"Index",setup(U){const n=x("$swal"),t=x("$can"),v=V({products:[],title:null,description:null,category:null}),e=B({data:[],currentPage:1,isLoading:!0,isActiveModal:!1,modalAction:"",item:{}});F(()=>{c(1)});const h=$(()=>e.value.isActiveModal?w:null);function c(o){e.value.isLoading=!0,o&&(e.value.currentPage=o),axios.get(route("api.xmls.index",{page:e.value.currentPage})).then(a=>{Object.assign(e.value.data,a.data.result),e.value.isLoading=!1}).catch(a=>{console.log(a),e.value.isLoading=!1})}function f(o){t("destroy-xml")&&n({title:"\u0412\u0438\u0434\u0430\u043B\u0438\u0442\u0438?",icon:"warning",showCancelButton:!0}).then(a=>{a.isConfirmed&&axios.delete(route("api.xmls.destroy",o)).then(()=>{c(),e.value.isActiveModal&&l(),n({icon:"success",title:"Destroyed!"})}).catch(i=>{console.log(i),n({icon:"error",title:"Error!"})})})}function l(){e.value.isActiveModal=!e.value.isActiveModal}function y(o,a){t("edit-xml")&&axios.get(route("api.xmls.edit",o)).then(({data:i})=>{e.value.item=i.result,e.value.modalAction="edit",e.value.item.index=a,l()}).catch(i=>console.log(i))}function A(){t("edit-xml")&&axios.put(route("api.xmls.update",e.value.item.id),e.value.item).then(()=>{l(),c(),n({title:"Success!",icon:"success"})}).catch(o=>{console.log(o),n({title:"Error!",icon:"error"})})}function M(){t("create-xml")&&axios.post(route("api.xmls.create"),e.value.item).then(()=>{l(),e.value.item=v,c(),n({title:"Success!",icon:"success"})}).catch(o=>{console.log(o),n({title:"Error!",icon:"error"})})}function C(){e.value.modalAction==="edit"&&t("edit-xml")?A():e.value.modalAction==="create"&&t("create-xml")&&M()}function D(){t("create-xml")&&(Object.assign(e.value.item,v),e.value.modalAction="create",l())}return(o,a)=>{const i=d("loader-component"),L=d("button-component"),k=d("pagination");return s(),u(E,{title:"XML"},{header:m(()=>[j]),default:m(()=>[e.value.isLoading?(s(),u(i,{key:0})):p("",!0),!e.value.isLoading&&r(t)("show-xml")?(s(),O("div",N,[r(t)("create-xml")?(s(),u(L,{key:0,type:"btn",onClick:D},{default:m(()=>[X]),_:1})):p("",!0),_(P,{data:e.value.data.data,onOnEdit:y,onOnDestroy:f,canDestroy:r(t)("destroy-xml")},null,8,["data","canDestroy"]),_(k,{pagination:e.value.data,"click-handler":c,modelValue:e.value.currentPage,"onUpdate:modelValue":a[0]||(a[0]=b=>e.value.currentPage=b)},null,8,["pagination","modelValue"]),(s(),u(S(r(h)),{item:e.value.item,onCloseModal:l,onSubmitForm:C,onDeclineForm:f,canDestroy:r(t)("destroy-xml")},null,40,["item","canDestroy"]))])):p("",!0)]),_:1})}}};export{q as default};