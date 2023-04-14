import{L as V,b as $,e as N}from"./app-739a5adb.js";import S from"./Modal-32c525b6.js";import B from"./OptionsLayout-ff197b11.js";import b from"./Table-98c9555e.js";import{C as n}from"./CharacteristicsRepository-3e7466ab.js";import{r as y,o as F,f as O,s as d,v as f,y as g,p as l,k as h,j as v,u,g as P,i as _,z as w,a2 as j}from"./app-85fc3642.js";import"./vue-i18n.esm-bundler-b26da7fc.js";import"./moment-fbc5633a.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./Logo-39ed68e3.js";import"./Form-91965ce2.js";const J={key:1,class:"grid grid-cols-1 gap-4"},U={class:"text-center"},Z={__name:"Index",setup(z){const r=g("$swal"),t=g("$can"),m=y({currentPage:1}),A={title:{ua:null,ru:null},values:[{title:{ua:null,ru:null}}]},e=y({data:[],isLoading:!0,isActiveModal:!1,modalAction:"",item:{}});F(()=>{c()});const L=O(()=>e.value.isActiveModal?S:null);async function c(){try{const a=await n().fetch(m.value);a.success&&(e.value.data=a.result),e.value.isLoading=!1}catch(a){console.error(a),e.value.isLoading=!1}}async function p(a){try{t("destroy-characteristics")&&(await r({title:"Видалити?",icon:"warning",showCancelButton:!0})).isConfirmed&&(await n().destroy(a),e.value.isLoading=!1,await c(),e.value.isActiveModal&&s(),r({title:"Success!",icon:"success"}))}catch(i){console.error(i),r({title:"Error!",icon:"error",text:i.response.data.message||"An error occurred, please try again later"})}}function s(){e.value.isActiveModal=!e.value.isActiveModal}async function x(a,i){try{const{result:o,success:E}=await n().edit(a);E&&(e.value.item.index=i,e.value.item=o,e.value.modalAction="edit",s(),e.value.isLoading=!1)}catch(o){e.value.isLoading=!1,console.error(o),r({title:"Error!",icon:"error",text:o.response.data.message||"An error occurred, please try again later"})}}async function C(){try{if(t("edit-characteristics")){const{success:a}=await n().update(e.value.item.id,e.value.item);a&&(s(),await c(),r({title:"Success!",icon:"success"}))}}catch(a){e.value.isLoading=!1,console.error(a),r({title:"Error!",icon:"error",text:a.response.data.message||"An error occurred, please try again later"})}}async function k(){try{if(t("create-characteristics")){const{success:a}=await n().create(e.value.item);a&&(e.value.item={},s(),await c(),r({title:"Success!",icon:"success"}))}}catch(a){e.value.isLoading=!1,console.error(a),r({title:"Error!",icon:"error",text:a||"An error occurred, please try again later"})}}function D(){e.value.modalAction==="edit"&&t("edit-characteristics")?C():e.value.modalAction==="create"&&t("create-characteristics")&&k()}function M(){t("create-characteristics")&&(e.value.item=JSON.parse(JSON.stringify(A)),e.value.modalAction="create",s())}return(a,i)=>(l(),d(B,{title:"Характеристики товарів"},{header:f(()=>[h(" Характеристики товарів ")]),default:f(()=>[e.value.isLoading?(l(),d(V,{key:0})):v("",!0),!e.value.isLoading&&u(t)("show-characteristics")?(l(),P("div",J,[_("div",null,[u(t)("create-characteristics")?(l(),d($,{key:0,type:"btn",onClick:M},{default:f(()=>[h(" Додати ")]),_:1})):v("",!0)]),w(b,{data:e.value.data.data,onOnEdit:x,onOnDestroy:p,canDestroy:u(t)("destroy-characteristics")},null,8,["data","canDestroy"]),_("div",U,[w(N,{pagination:e.value.data,"click-handler":c,modelValue:m.value.currentPage,"onUpdate:modelValue":i[0]||(i[0]=o=>m.value.currentPage=o)},null,8,["pagination","modelValue"])])])):v("",!0),(l(),d(j(u(L)),{item:e.value.item,onCloseModal:s,onSubmitForm:D,onDeclineForm:p,canDestroy:u(t)("destroy-characteristics")},null,40,["item","canDestroy"]))]),_:1}))}};export{Z as default};