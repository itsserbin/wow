import V from"./Modal.cbe02cd3.js";import w from"./OptionsLayout.1a4176bf.js";import E from"./Table.4e6ffffb.js";import{ay as P,y as B,C as $,z as F,a0 as u,X as m,B as p,V as v,S as l,_ as g,P as r,L as O,K as _,bh as S,Y as h}from"./___vite-browser-external_commonjs-proxy.4500e77d.js";import"./Form.1bf69f26.js";const j=h(" \u041F\u0435\u0440\u0435\u0432\u0430\u0433\u0438 "),N={key:1},U=h(" \u0414\u043E\u0434\u0430\u0442\u0438 "),q={__name:"Index",setup(z){const n=p("$swal"),t=p("$can"),d=P({text:{ua:null,ru:null},icon:null,published:0}),e=B({data:[],currentPage:1,isLoading:!0,isActiveModal:!1,modalAction:"",item:d});$(()=>{c(1)});const y=F(()=>e.value.isActiveModal?V:null);function c(a){e.value.isLoading=!0,a&&(e.value.currentPage=a),axios.get(route("api.advantages.index",{page:e.value.currentPage})).then(o=>{Object.assign(e.value.data,o.data.result),e.value.isLoading=!1}).catch(o=>{console.log(o),e.value.isLoading=!1})}function f(a){t("destroy-advantages")&&n({title:"\u0412\u0438\u0434\u0430\u043B\u0438\u0442\u0438?",icon:"warning",showCancelButton:!0}).then(o=>{o.isConfirmed&&axios.delete(route("api.advantages.destroy",a)).then(()=>{c(),e.value.isActiveModal&&s(),n({icon:"success",title:"Destroyed!"})}).catch(i=>{console.log(i),n({icon:"error",title:"Error!"})})})}function s(){e.value.isActiveModal=!e.value.isActiveModal}function x(a,o){t("edit-advantages")&&axios.get(route("api.advantages.edit",a)).then(({data:i})=>{e.value.item=i.result,e.value.modalAction="edit",e.value.item.index=o,s()}).catch(i=>console.log(i))}function A(){t("edit-advantages")&&axios.put(route("api.advantages.update",e.value.item.id),e.value.item).then(()=>{s(),c(),n({title:"Success!",icon:"success"})}).catch(a=>{console.log(a),n({title:"Error!",icon:"error"})})}function C(){t("create-advantages")&&axios.post(route("api.advantages.create"),e.value.item).then(()=>{s(),e.value.item=d,c(),n({title:"Success!",icon:"success"})}).catch(a=>{console.log(a),n({title:"Error!",icon:"error"})})}function b(){e.value.modalAction==="edit"&&t("edit-advantages")?A():e.value.modalAction==="create"&&t("create-advantages")&&C()}function D(){t("create-advantages")&&(Object.assign(e.value.item,d),e.value.modalAction="create",s())}return(a,o)=>{const i=v("loader-component"),k=v("button-component"),M=v("pagination");return l(),u(w,{title:"\u041F\u0435\u0440\u0435\u0432\u0430\u0433\u0438"},{header:m(()=>[j]),default:m(()=>[e.value.isLoading?(l(),u(i,{key:0})):g("",!0),!e.value.isLoading&&r(t)("show-advantages")?(l(),O("div",N,[r(t)("create-advantages")?(l(),u(k,{key:0,type:"btn",onClick:D},{default:m(()=>[U]),_:1})):g("",!0),_(E,{data:e.value.data.data,onOnEdit:x,onOnDestroy:f,canDestroy:r(t)("destroy-advantages")},null,8,["data","canDestroy"]),_(M,{pagination:e.value.data,"click-handler":c,modelValue:e.value.currentPage,"onUpdate:modelValue":o[0]||(o[0]=L=>e.value.currentPage=L)},null,8,["pagination","modelValue"]),(l(),u(S(r(y)),{item:e.value.item,onCloseModal:s,onSubmitForm:b,onDeclineForm:f,canDestroy:r(t)("destroy-advantages")},null,40,["item","canDestroy"]))])):g("",!0)]),_:1})}}};export{q as default};