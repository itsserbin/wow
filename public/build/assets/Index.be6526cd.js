import w from"./Modal.6303a50a.js";import B from"./Table.aa54c4e0.js";import E from"./ContentLayout.ae5c10e2.js";import{az as P,y as $,C as F,z as N,a0 as r,X as d,B as f,V as m,S as c,_ as p,P as u,L as S,M as g,K as _,bg as O,Y as h}from"./___vite-browser-external_commonjs-proxy.af1999bf.js";import"./Form.cedd73c2.js";import"./app.180de32d.js";const j=h(" \u0421\u0442\u043E\u0440\u0456\u043D\u043A\u0438 "),z={key:1,class:"grid gap-4 grid-cols-1"},U=h(" \u0414\u043E\u0434\u0430\u0442\u0438 "),I={class:"text-center"},J={__name:"Index",setup(K){const n=f("$swal"),a=f("$can"),y=P({slug:null,published:0,heading:{ru:null,ua:null},h1:{ru:null,ua:null},content:{ru:null,ua:null},meta_title:{ru:null,ua:null},meta_description:{ru:null,ua:null}}),e=$({data:[],currentPage:1,isLoading:!0,isActiveModal:!1,modalAction:"",item:{}});F(()=>{s(1)});const x=N(()=>e.value.isActiveModal?w:null);function s(t){e.value.isLoading=!0,t&&(e.value.currentPage=t),axios.get(route("api.pages.index",{page:e.value.currentPage})).then(o=>{Object.assign(e.value.data,o.data.result),e.value.isLoading=!1}).catch(o=>{console.log(o),e.value.isLoading=!1})}function v(t){a("destroy-pages")&&n({title:"\u0412\u0438\u0434\u0430\u043B\u0438\u0442\u0438?",icon:"warning",showCancelButton:!0}).then(o=>{o.isConfirmed&&axios.delete(route("api.pages.destroy",t)).then(()=>{s(),e.value.isActiveModal&&l(),n({icon:"success",title:"Destroyed!"})}).catch(i=>{console.log(i),n({icon:"error",title:"Error!"})})})}function l(){e.value.isActiveModal=!e.value.isActiveModal}function A(t,o){a("edit-pages")&&axios.get(route("api.pages.edit",t)).then(({data:i})=>{e.value.item=i.result,e.value.modalAction="edit",e.value.item.index=o,l()}).catch(i=>console.log(i))}function C(){a("edit-pages")&&axios.put(route("api.pages.update",e.value.item.id),e.value.item).then(()=>{l(),s(),n({title:"Success!",icon:"success"})}).catch(t=>{console.log(t),n({title:"Error!",icon:"error"})})}function D(){a("create-pages")&&axios.post(route("api.pages.create"),e.value.item).then(({data:t})=>{l(),e.value.item={},s(),n({title:"Success!",icon:"success"})}).catch(t=>{console.log(t),n({title:"Error!",icon:"error"})})}function M(){e.value.modalAction==="edit"&&a("edit-pages")?C():e.value.modalAction==="create"&&a("create-pages")&&D()}function b(){a("create-pages")&&(e.value.item=y,e.value.modalAction="create",l())}return(t,o)=>{const i=m("loader-component"),k=m("button-component"),V=m("pagination");return c(),r(E,{title:"\u0421\u0442\u043E\u0440\u0456\u043D\u043A\u0438"},{header:d(()=>[j]),default:d(()=>[e.value.isLoading?(c(),r(i,{key:0})):p("",!0),!e.value.isLoading&&u(a)("show-pages")?(c(),S("div",z,[g("div",null,[u(a)("create-pages")?(c(),r(k,{key:0,type:"btn",onClick:b},{default:d(()=>[U]),_:1})):p("",!0)]),g("div",null,[_(B,{data:e.value.data.data,onOnEdit:A,onOnDestroy:v,canDestroy:u(a)("destroy-pages")},null,8,["data","canDestroy"])]),g("div",I,[_(V,{pagination:e.value.data,"click-handler":s,modelValue:e.value.currentPage,"onUpdate:modelValue":o[0]||(o[0]=L=>e.value.currentPage=L)},null,8,["pagination","modelValue"])])])):p("",!0),(c(),r(O(u(x)),{item:e.value.item,onCloseModal:l,onSubmitForm:M,onDeclineForm:v,canDestroy:u(a)("destroy-pages")},null,40,["item","canDestroy"]))]),_:1})}}};export{J as default};
