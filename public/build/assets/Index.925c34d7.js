import L from"./Modal.010211fc.js";import B from"./Table.cf67277b.js";import E from"./ContentLayout.23784d1c.js";import{ay as P,y as $,C as F,z as N,a0 as u,X as d,B as v,V as m,S as s,_ as g,P as r,L as O,M as _,K as f,bh as S,Y as h}from"./___vite-browser-external_commonjs-proxy.4500e77d.js";import"./Form.ce83ae8e.js";import"./ImagesSelectModal.9b8309f5.js";import"./UploadImagesModal.5b4e840f.js";import"./app.904dadda.js";const j=h(" \u041A\u0430\u0442\u0435\u0433\u043E\u0440\u0456\u0457 "),U={key:1,class:"grid gap-4 grid-cols-1"},z=h(" \u0414\u043E\u0434\u0430\u0442\u0438 "),I={class:"text-center"},R={__name:"Index",setup(K){const i=v("$swal"),o=v("$can"),y=P({published:0,slug:null,parent_id:null,preview_id:null,preview:null,title:{ru:null,ua:null},meta_title:{ru:null,ua:null},meta_description:{ru:null,ua:null},meta_keyword:{ru:null,ua:null},seo_text:{ru:null,ua:null}}),e=$({categories:[],currentPage:1,isLoading:!0,isActiveModal:!1,modalAction:"",item:{}});F(()=>{l(1)});const x=N(()=>e.value.isActiveModal?L:null);function l(t){e.value.isLoading=!0,t&&(e.value.currentPage=t),axios.get(route("api.categories.index",{page:e.value.currentPage})).then(a=>{Object.assign(e.value.categories,a.data.result),e.value.isLoading=!1}).catch(a=>{console.log(a),e.value.isLoading=!1})}function p(t){o("destroy-categories")&&i({title:"\u0412\u0438\u0434\u0430\u043B\u0438\u0442\u0438?",icon:"warning",showCancelButton:!0}).then(a=>{a.isConfirmed&&axios.delete(route("api.categories.destroy",t)).then(()=>{l(),e.value.isActiveModal&&c(),i({icon:"success",title:"Destroyed!"})}).catch(n=>{console.log(n),i({icon:"error",title:"Error!"})})})}function c(){e.value.isActiveModal=!e.value.isActiveModal}function A(t,a){o("edit-categories")&&axios.get(route("api.categories.edit",t)).then(({data:n})=>{e.value.item=n.result,e.value.modalAction="edit",e.value.item.index=a,c()}).catch(n=>console.log(n))}function C(){o("edit-categories")&&axios.put(route("api.categories.update",e.value.item.id),e.value.item).then(()=>{c(),l(),i({title:"Success!",icon:"success"})}).catch(t=>{console.log(t),i({title:"Error!",icon:"error"})})}function b(){o("create-categories")&&axios.post(route("api.categories.create"),e.value.item).then(({data:t})=>{c(),e.value.item={},l(),i({title:"Success!",icon:"success"})}).catch(t=>{console.log(t),i({title:"Error!",icon:"error"})})}function k(){e.value.modalAction==="edit"&&o("edit-categories")?C():e.value.modalAction==="create"&&o("create-categories")&&b()}function w(){o("create-categories")&&(Object.assign(e.value.item,y),e.value.modalAction="create",c())}return(t,a)=>{const n=m("loader-component"),D=m("button-component"),M=m("pagination");return s(),u(E,{title:"\u041A\u0430\u0442\u0435\u0433\u043E\u0440\u0456\u0457"},{header:d(()=>[j]),default:d(()=>[e.value.isLoading?(s(),u(n,{key:0})):g("",!0),!e.value.isLoading&&r(o)("show-categories")?(s(),O("div",U,[_("div",null,[r(o)("create-categories")?(s(),u(D,{key:0,type:"btn",onClick:w},{default:d(()=>[z]),_:1})):g("",!0)]),f(B,{data:e.value.categories.data,onOnEdit:A,onOnDestroy:p,canDestroy:r(o)("destroy-categories")},null,8,["data","canDestroy"]),_("div",I,[f(M,{pagination:e.value.categories,"click-handler":l,modelValue:e.value.currentPage,"onUpdate:modelValue":a[0]||(a[0]=V=>e.value.currentPage=V)},null,8,["pagination","modelValue"])])])):g("",!0),(s(),u(S(r(x)),{item:e.value.item,onCloseModal:c,onSubmitForm:k,onDeclineForm:p,canDestroy:r(o)("destroy-categories")},null,40,["item","canDestroy"]))]),_:1})}}};export{R as default};
