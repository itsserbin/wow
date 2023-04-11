import{L as V,b as $,j as N}from"./app.8b7021f2.js";import S from"./Modal.aee14d42.js";import B from"./OptionsLayout.bff94467.js";import b from"./Table.59aa5eed.js";import{C as n}from"./CharacteristicsRepository.ec452529.js";import{p as y,q as F,f as O,m as d,w as f,v as g,o as l,j as v,u,g as j,i as h,x as _,ac as P,k as w}from"./vendor.1f6af4a6.js";import"./vue.m.8e70aa70.js";import"./bootstrap.36b92799.js";import"./__commonjsHelpers__.488ed5c2.js";import"./_plugin-vue_export-helper.cdc0426e.js";import"./Logo.c7a5de92.js";import"./Form.9908aac7.js";const J=w(" \u0425\u0430\u0440\u0430\u043A\u0442\u0435\u0440\u0438\u0441\u0442\u0438\u043A\u0438 \u0442\u043E\u0432\u0430\u0440\u0456\u0432 "),U={key:1,class:"grid grid-cols-1 gap-4"},q=w(" \u0414\u043E\u0434\u0430\u0442\u0438 "),I={class:"text-center"},te={__name:"Index",setup(R){const r=g("$swal"),t=g("$can"),m=y({currentPage:1}),A={title:{ua:null,ru:null},values:[{title:{ua:null,ru:null}}]},e=y({data:[],isLoading:!0,isActiveModal:!1,modalAction:"",item:{}});F(()=>{c()});const x=O(()=>e.value.isActiveModal?S:null);async function c(){try{const a=await n().fetch(m.value);a.success&&(e.value.data=a.result),e.value.isLoading=!1}catch(a){console.error(a),e.value.isLoading=!1}}async function p(a){try{t("destroy-characteristics")&&(await r({title:"\u0412\u0438\u0434\u0430\u043B\u0438\u0442\u0438?",icon:"warning",showCancelButton:!0})).isConfirmed&&(await n().destroy(a),e.value.isLoading=!1,await c(),e.value.isActiveModal&&o(),r({title:"Success!",icon:"success"}))}catch(i){console.error(i),r({title:"Error!",icon:"error",text:i.response.data.message||"An error occurred, please try again later"})}}function o(){e.value.isActiveModal=!e.value.isActiveModal}async function L(a,i){try{const{result:s,success:E}=await n().edit(a);E&&(e.value.item.index=i,e.value.item=s,e.value.modalAction="edit",o(),e.value.isLoading=!1)}catch(s){e.value.isLoading=!1,console.error(s),r({title:"Error!",icon:"error",text:s.response.data.message||"An error occurred, please try again later"})}}async function C(){try{if(t("edit-characteristics")){const{success:a}=await n().update(e.value.item.id,e.value.item);a&&(o(),await c(),r({title:"Success!",icon:"success"}))}}catch(a){e.value.isLoading=!1,console.error(a),r({title:"Error!",icon:"error",text:a.response.data.message||"An error occurred, please try again later"})}}async function k(){try{if(t("create-characteristics")){const{success:a}=await n().create(e.value.item);a&&(e.value.item={},o(),await c(),r({title:"Success!",icon:"success"}))}}catch(a){e.value.isLoading=!1,console.error(a),r({title:"Error!",icon:"error",text:a||"An error occurred, please try again later"})}}function D(){e.value.modalAction==="edit"&&t("edit-characteristics")?C():e.value.modalAction==="create"&&t("create-characteristics")&&k()}function M(){t("create-characteristics")&&(e.value.item=JSON.parse(JSON.stringify(A)),e.value.modalAction="create",o())}return(a,i)=>(l(),d(B,{title:"\u0425\u0430\u0440\u0430\u043A\u0442\u0435\u0440\u0438\u0441\u0442\u0438\u043A\u0438 \u0442\u043E\u0432\u0430\u0440\u0456\u0432"},{header:f(()=>[J]),default:f(()=>[e.value.isLoading?(l(),d(V,{key:0})):v("",!0),!e.value.isLoading&&u(t)("show-characteristics")?(l(),j("div",U,[h("div",null,[u(t)("create-characteristics")?(l(),d($,{key:0,type:"btn",onClick:M},{default:f(()=>[q]),_:1})):v("",!0)]),_(b,{data:e.value.data.data,onOnEdit:L,onOnDestroy:p,canDestroy:u(t)("destroy-characteristics")},null,8,["data","canDestroy"]),h("div",I,[_(N,{pagination:e.value.data,"click-handler":c,modelValue:m.value.currentPage,"onUpdate:modelValue":i[0]||(i[0]=s=>m.value.currentPage=s)},null,8,["pagination","modelValue"])])])):v("",!0),(l(),d(P(u(x)),{item:e.value.item,onCloseModal:o,onSubmitForm:D,onDeclineForm:p,canDestroy:u(t)("destroy-characteristics")},null,40,["item","canDestroy"]))]),_:1}))}};export{te as default};
