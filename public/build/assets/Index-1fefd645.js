import w from"./Modal-c7665deb.js";import E from"./OptionsLayout-e0b9352c.js";import L from"./Table-caea6e76.js";import{V as P,r as $,o as j,f as B,s as u,v as d,y as g,D as m,p as r,k as _,j as p,u as s,g as F,z as h,a2 as O}from"./app-da11968c.js";import"./Form-b895fe17.js";import"./app-23639435.js";import"./vue-i18n.esm-bundler-7f92347f.js";import"./moment-fbc5633a.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./Logo-9fe22fca.js";const N={key:1},R={__name:"Index",setup(S){const n=g("$swal"),o=g("$can"),v=P({name:null,hex:null}),e=$({colors:[],currentPage:1,isLoading:!0,isActiveModal:!1,modalAction:"",item:{}});j(()=>{l(1)});const y=B(()=>e.value.isActiveModal?w:null);function l(t){e.value.isLoading=!0,t&&(e.value.currentPage=t),axios.get(route("api.colors.index",{page:e.value.currentPage})).then(a=>{Object.assign(e.value.colors,a.data.result),e.value.isLoading=!1}).catch(a=>{console.log(a),e.value.isLoading=!1})}function f(t){o("destroy-colors")&&n({title:"Видалити?",icon:"warning",showCancelButton:!0}).then(a=>{a.isConfirmed&&axios.delete(route("api.colors.destroy",t)).then(()=>{l(),e.value.isActiveModal&&c(),n({icon:"success",title:"Destroyed!"})}).catch(i=>{console.log(i),n({icon:"error",title:"Error!"})})})}function c(){e.value.isActiveModal=!e.value.isActiveModal}function x(t,a){o("edit-colors")&&axios.get(route("api.colors.edit",t)).then(({data:i})=>{e.value.item=i.result,e.value.modalAction="edit",e.value.item.index=a,c()}).catch(i=>console.log(i))}function A(){o("edit-colors")&&axios.put(route("api.colors.update",e.value.item.id),e.value.item).then(()=>{c(),l(),n({title:"Success!",icon:"success"})}).catch(t=>{console.log(t),n({title:"Error!",icon:"error"})})}function D(){o("create-colors")&&axios.post(route("api.colors.create"),e.value.item).then(()=>{c(),e.value.item=v,l(),n({title:"Success!",icon:"success"})}).catch(t=>{console.log(t),n({title:"Error!",icon:"error"})})}function k(){e.value.modalAction==="edit"&&o("edit-colors")?A():e.value.modalAction==="create"&&o("create-colors")&&D()}function C(){o("create-colors")&&(Object.assign(e.value.item,v),e.value.modalAction="create",c())}return(t,a)=>{const i=m("loader-component"),M=m("button-component"),b=m("pagination");return r(),u(E,{title:"Кольори"},{header:d(()=>[_(" Кольори ")]),default:d(()=>[e.value.isLoading?(r(),u(i,{key:0})):p("",!0),!e.value.isLoading&&s(o)("show-colors")?(r(),F("div",N,[s(o)("create-providers")?(r(),u(M,{key:0,type:"btn",onClick:C},{default:d(()=>[_(" Додати ")]),_:1})):p("",!0),h(L,{data:e.value.colors.data,onOnEdit:x,onOnDestroy:f,canDestroy:s(o)("destroy-colors")},null,8,["data","canDestroy"]),h(b,{pagination:e.value.colors,"click-handler":l,modelValue:e.value.currentPage,"onUpdate:modelValue":a[0]||(a[0]=V=>e.value.currentPage=V)},null,8,["pagination","modelValue"]),(r(),u(O(s(y)),{item:e.value.item,onCloseModal:c,onSubmitForm:k,onDeclineForm:f,canDestroy:s(o)("destroy-colors")},null,40,["item","canDestroy"]))])):p("",!0)]),_:1})}}};export{R as default};
