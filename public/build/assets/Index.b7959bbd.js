import E from"./Modal.248aa2a8.js";import P from"./Table.e5b328fe.js";import{v as D,A as $,G as F,B as N,V as r,S as d,X as u,R as s,$ as m,L as O,M as v,P as p,K as _,bc as S,Y as h,x as f}from"./moment.e1708d83.js";import"./Form.88b76d89.js";const j=h(" \u041A\u0430\u0442\u0435\u0433\u043E\u0440\u0456\u0457 "),U={key:1,class:"grid gap-4 grid-cols-1"},G=h(" \u0414\u043E\u0434\u0430\u0442\u0438 "),I={class:"text-center"},q={__name:"Index",setup(K){const n=f("$swal"),a=f("$can"),x=D({published:0,slug:null,parent_id:null,preview:null,title:{ru:null,ua:null},meta_title:{ru:null,ua:null},meta_description:{ru:null,ua:null},meta_keyword:{ru:null,ua:null},seo_text:{ru:null,ua:null}}),e=$({categories:[],currentPage:1,isLoading:!0,isActiveModal:!1,modalAction:"",item:{}});F(()=>{c(1)});const y=N(()=>e.value.isActiveModal?E:null);function c(t){e.value.isLoading=!0,t&&(e.value.currentPage=t),axios.get(route("api.categories.index",{page:e.value.currentPage})).then(o=>{Object.assign(e.value.categories,o.data.result),e.value.isLoading=!1}).catch(o=>{console.log(o),e.value.isLoading=!1})}function g(t){a("destroy-categories")&&n({title:"\u0412\u0438\u0434\u0430\u043B\u0438\u0442\u0438?",icon:"warning",showCancelButton:!0}).then(o=>{o.isConfirmed&&axios.delete(route("api.categories.destroy",t)).then(()=>{c(),e.value.isActiveModal&&l(),n({icon:"success",title:"Destroyed!"})}).catch(i=>{console.log(i),n({icon:"error",title:"Error!"})})})}function l(){e.value.isActiveModal=!e.value.isActiveModal}function A(t,o){a("edit-categories")&&axios.get(route("api.categories.edit",t)).then(({data:i})=>{e.value.item=i.result,e.value.modalAction="edit",e.value.item.index=o,l()}).catch(i=>console.log(i))}function b(){a("edit-categories")&&axios.put(route("api.categories.update",e.value.item.id),e.value.item).then(()=>{l(),c(),n({title:"Success!",icon:"success"})}).catch(t=>{console.log(t),n({title:"Error!",icon:"error"})})}function k(){a("create-categories")&&axios.post(route("api.categories.create"),e.value.item).then(({data:t})=>{l(),e.value.item={},c(),n({title:"Success!",icon:"success"})}).catch(t=>{console.log(t),n({title:"Error!",icon:"error"})})}function C(){e.value.modalAction==="edit"&&a("edit-categories")?b():e.value.modalAction==="create"&&a("create-categories")&&k()}function M(){a("create-categories")&&(Object.assign(e.value.item,x),e.value.modalAction="create",l())}return(t,o)=>{const i=u("loader-component"),V=u("button-component"),w=u("pagination"),L=u("auth-layout");return s(),r(L,{title:"\u041A\u0430\u0442\u0435\u0433\u043E\u0440\u0456\u0457"},{header:d(()=>[j]),default:d(()=>[e.value.isLoading?(s(),r(i,{key:0})):m("",!0),e.value.isLoading?m("",!0):(s(),O("div",U,[v("div",null,[p(a)("create-products")?(s(),r(V,{key:0,type:"btn",onClick:M},{default:d(()=>[G]),_:1})):m("",!0)]),_(P,{data:e.value.categories.data,onOnEdit:A,onOnDestroy:g},null,8,["data"]),v("div",I,[_(w,{pagination:e.value.categories,"click-handler":c,modelValue:e.value.currentPage,"onUpdate:modelValue":o[0]||(o[0]=B=>e.value.currentPage=B)},null,8,["pagination","modelValue"])])])),(s(),r(S(p(y)),{item:e.value.item,onCloseModal:l,onSubmitForm:C,onDeclineForm:g},null,40,["item"]))]),_:1})}}};export{q as default};
