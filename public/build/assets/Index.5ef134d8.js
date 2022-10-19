import E from"./Modal.74f66e1c.js";import P from"./Table.ed26b853.js";import{v as D,A as $,G as F,B as N,V as u,S as d,X as r,R as c,$ as m,P as p,L as S,M as g,K as f,bc as O,Y as h,x as _}from"./moment.e1708d83.js";import"./Form.4886ff4c.js";const j=h(" \u0421\u0442\u043E\u0440\u0456\u043D\u043A\u0438 "),U={key:1,class:"grid gap-4 grid-cols-1"},G=h(" \u0414\u043E\u0434\u0430\u0442\u0438 "),I={class:"text-center"},q={__name:"Index",setup(K){const n=_("$swal"),o=_("$can"),x=D({slug:null,published:0,heading:{ru:null,ua:null},h1:{ru:null,ua:null},content:{ru:null,ua:null},meta_title:{ru:null,ua:null},meta_description:{ru:null,ua:null}}),e=$({data:[],currentPage:1,isLoading:!0,isActiveModal:!1,modalAction:"",item:{}});F(()=>{s(1)});const y=N(()=>e.value.isActiveModal?E:null);function s(t){e.value.isLoading=!0,t&&(e.value.currentPage=t),axios.get(route("api.pages.index",{page:e.value.currentPage})).then(a=>{Object.assign(e.value.data,a.data.result),e.value.isLoading=!1}).catch(a=>{console.log(a),e.value.isLoading=!1})}function v(t){o("destroy-pages")&&n({title:"\u0412\u0438\u0434\u0430\u043B\u0438\u0442\u0438?",icon:"warning",showCancelButton:!0}).then(a=>{a.isConfirmed&&axios.delete(route("api.pages.destroy",t)).then(()=>{s(),e.value.isActiveModal&&l(),n({icon:"success",title:"Destroyed!"})}).catch(i=>{console.log(i),n({icon:"error",title:"Error!"})})})}function l(){e.value.isActiveModal=!e.value.isActiveModal}function A(t,a){o("edit-pages")&&axios.get(route("api.pages.edit",t)).then(({data:i})=>{e.value.item=i.result,e.value.modalAction="edit",e.value.item.index=a,l()}).catch(i=>console.log(i))}function C(){o("edit-pages")&&axios.put(route("api.pages.update",e.value.item.id),e.value.item).then(()=>{l(),s(),n({title:"Success!",icon:"success"})}).catch(t=>{console.log(t),n({title:"Error!",icon:"error"})})}function M(){o("create-pages")&&axios.post(route("api.pages.create"),e.value.item).then(({data:t})=>{l(),e.value.item={},s(),n({title:"Success!",icon:"success"})}).catch(t=>{console.log(t),n({title:"Error!",icon:"error"})})}function b(){e.value.modalAction==="edit"&&o("edit-pages")?C():e.value.modalAction==="create"&&o("create-pages")&&M()}function k(){o("create-pages")&&(e.value.item=x,e.value.modalAction="create",l())}return(t,a)=>{const i=r("loader-component"),V=r("button-component"),L=r("pagination"),w=r("auth-layout");return c(),u(w,{title:"\u0421\u0442\u043E\u0440\u0456\u043D\u043A\u0438"},{header:d(()=>[j]),default:d(()=>[e.value.isLoading?(c(),u(i,{key:0})):m("",!0),!e.value.isLoading&&p(o)("show-pages")?(c(),S("div",U,[g("div",null,[p(o)("create-pages")?(c(),u(V,{key:0,type:"btn",onClick:k},{default:d(()=>[G]),_:1})):m("",!0)]),g("div",null,[f(P,{data:e.value.data.data,onOnEdit:A,onOnDestroy:v},null,8,["data"])]),g("div",I,[f(L,{pagination:e.value.data,"click-handler":s,modelValue:e.value.currentPage,"onUpdate:modelValue":a[0]||(a[0]=B=>e.value.currentPage=B)},null,8,["pagination","modelValue"])])])):m("",!0),(c(),u(O(p(y)),{item:e.value.item,onCloseModal:l,onSubmitForm:b,onDeclineForm:v},null,40,["item"]))]),_:1})}}};export{q as default};
