import B from"./Modal.0ff78bdc.js";import E from"./Table.db6759c7.js";import $ from"./ContentLayout.ffb9b2c5.js";import{az as z,y as F,C as N,z as U,a0 as u,X as m,B as y,V as d,S as s,_ as v,P as l,L as O,M as g,K as f,bg as R,Y as x}from"./___vite-browser-external_commonjs-proxy.f18235ae.js";import"./Form.be29ded2.js";import"./Images.91c43c15.js";import"./app.26f0266a.js";import"./swiper-slide.579e1ea8.js";import"./ImagesSelectModal.307ee55d.js";import"./UploadImagesModal.ebcd6dd4.js";const j=x(" \u0422\u043E\u0432\u0430\u0440\u0438 "),K={key:1,class:"grid gap-4 grid-cols-1"},T=x(" \u0414\u043E\u0434\u0430\u0442\u0438 "),X={class:"grid grid-cols-1 gap-4"},Y={class:"text-center"},ne={__name:"Index",setup(q){const n=y("$swal"),a=y("$can"),p=z({status:null,title:{ru:null,ua:null},characteristics:{ru:null,ua:null},description:{ru:null,ua:null},h1:{ru:null,ua:null},content:{ru:null,ua:null},published:0,preview:null,size_table:null,price:null,trade_price:null,discount_price:null,categories:[],vendor_code:null,provider_id:null,youtube:null,sizes:[],images:[],colors:[]}),e=F({products:[],currentPage:1,isLoading:!0,isActiveModal:!1,modalAction:"",item:p});N(()=>{let t=new URLSearchParams(new URL(window.location.href).search).get("product");t&&h(t),c(1)});const L=U(()=>e.value.isActiveModal?B:null);function w(t){e.value.isLoading=!0,axios.get(route("api.products.search",t)).then(({data:o})=>{e.value.currentPage=1,e.value.products=o.result,e.value.isLoading=!1}).catch(o=>{console.log(o),e.value.isLoading=!1})}function c(t){e.value.isLoading=!0,t&&(e.value.currentPage=t),axios.get(route("api.products.index",{page:e.value.currentPage})).then(({data:o})=>{e.value.products=o.result,e.value.isLoading=!1}).catch(o=>{console.log(o),e.value.isLoading=!1})}function _(t){a("destroy-products")&&n({title:"\u0412\u0438\u0434\u0430\u043B\u0438\u0442\u0438?",icon:"warning",showCancelButton:!0}).then(o=>{o.isConfirmed&&axios.delete(route("api.products.destroy",t)).then(()=>{c(),e.value.isActiveModal&&i(),n({icon:"success",title:"Destroyed!"})}).catch(r=>{console.log(r),n({icon:"error",title:"Error!"})})})}function i(){e.value.isActiveModal=!e.value.isActiveModal}function h(t){axios.get(route("api.products.edit",t)).then(({data:o})=>{e.value.item=o.result,e.value.modalAction="edit",i()}).catch(o=>console.log(o))}function C(){a("edit-products")&&axios.put(route("api.products.update",e.value.item.id),e.value.item).then(({data:t})=>{i(),c(),n({title:"Success!",icon:"success"})}).catch(t=>{console.log(t),n({title:"Error!",icon:"error"})})}function D(){a("create-products")&&axios.post(route("api.products.create"),e.value.item).then(({data:t})=>{i(),e.value.products.data.unshift(t.result),e.value.item=p,c(),n({title:"Success!",icon:"success"})}).catch(t=>{console.log(t),n({title:"Error!",icon:"error"})})}function A(){e.value.modalAction==="edit"&&a("edit-products")?C():e.value.modalAction==="create"&&a("create-products")&&D()}function P(){a("create-products")&&(e.value.item=p,e.value.modalAction="create",i())}function b(t){e.value.item.images=e.value.item.images.concat(t)}function M(t){let o=e.value.item.images.findIndex(r=>r.id===t);e.value.item.images.splice(o,1)}return(t,o)=>{const r=d("loader-component"),k=d("button-component"),V=d("search-component"),I=d("pagination");return s(),u($,{title:"\u0422\u043E\u0432\u0430\u0440\u0438"},{header:m(()=>[j]),default:m(()=>[e.value.isLoading?(s(),u(r,{key:0})):v("",!0),!e.value.isLoading&&l(a)("show-products")?(s(),O("div",K,[g("div",null,[l(a)("create-products")?(s(),u(k,{key:0,type:"btn",onClick:P},{default:m(()=>[T]),_:1})):v("",!0)]),g("div",X,[f(V,{onSearch:w,clear:!0,placeholder:"ID \u0430\u0431\u043E \u0430\u0440\u0442\u0438\u043A\u0443\u043B",onOnClear:c}),f(E,{data:e.value.products.data,onOnEdit:h,onOnDestroy:_,canDestroy:l(a)("destroy-products")},null,8,["data","canDestroy"])]),g("div",Y,[f(I,{pagination:e.value.products,"click-handler":c,modelValue:e.value.currentPage,"onUpdate:modelValue":o[0]||(o[0]=S=>e.value.currentPage=S)},null,8,["pagination","modelValue"])])])):v("",!0),(s(),u(R(l(L)),{product:e.value.item,onCloseModal:i,onSubmitForm:A,onDeclineForm:_,onSetProductImages:b,onDestroyImage:M,canDestroy:l(a)("destroy-products")},null,40,["product","canDestroy"]))]),_:1})}}};export{ne as default};
