import E from"./Modal.e2870868.js";import U from"./Table.5f22af79.js";import $ from"./ContentLayout.eba85071.js";import{ay as F,y as N,C as O,z,a0 as u,X as m,B as y,V as d,S as r,_ as v,P as l,L as R,M as g,K as f,bh as j,Y as L}from"./___vite-browser-external_commonjs-proxy.6a4e71ef.js";import"./Form.e218cc8c.js";import"./Images.8b6c8746.js";import"./app.ba48aa93.js";import"./swiper-slide.ca143e06.js";import"./ImagesSelectModal.6a98ff02.js";import"./UploadImagesModal.a47fd36c.js";const K=L(" \u0422\u043E\u0432\u0430\u0440\u0438 "),T={key:1,class:"grid gap-4 grid-cols-1"},X=L(" \u0414\u043E\u0434\u0430\u0442\u0438 "),Y={class:"grid grid-cols-1 gap-4"},q={class:"text-center"},ie={__name:"Index",setup(G){const n=y("$swal"),a=y("$can"),p=F({status:null,title:{ru:null,ua:null},characteristics:{ru:null,ua:null},description:{ru:null,ua:null},h1:{ru:null,ua:null},content:{ru:null,ua:null},published:0,preview:null,size_table:null,price:null,trade_price:null,discount_price:null,categories:[],vendor_code:null,provider_id:null,youtube:null,sizes:[],images:[],colors:[]}),e=N({products:[],currentPage:1,isLoading:!0,isActiveModal:!1,modalAction:"",item:p});O(()=>{let t=new URLSearchParams(new URL(window.location.href).search).get("product");t&&h(t),c(1)});const x=z(()=>e.value.isActiveModal?E:null);function P(t){e.value.isLoading=!0,axios.get(route("api.products.search",t)).then(({data:o})=>{e.value.currentPage=1,e.value.products=o.result,e.value.isLoading=!1}).catch(o=>{console.log(o),e.value.isLoading=!1})}function c(t){e.value.isLoading=!0,t&&(e.value.currentPage=t),axios.get(route("api.products.index",{page:e.value.currentPage})).then(({data:o})=>{e.value.products=o.result,e.value.isLoading=!1}).catch(o=>{console.log(o),e.value.isLoading=!1})}function _(t){a("destroy-products")&&n({title:"\u0412\u0438\u0434\u0430\u043B\u0438\u0442\u0438?",icon:"warning",showCancelButton:!0}).then(o=>{o.isConfirmed&&axios.delete(route("api.products.destroy",t)).then(()=>{c(),e.value.isActiveModal&&s(),n({icon:"success",title:"Destroyed!"})}).catch(i=>{console.log(i),n({icon:"error",title:"Error!"})})})}function s(){e.value.isActiveModal=!e.value.isActiveModal}function h(t){e.value.isLoading=!0,axios.get(route("api.products.edit",t)).then(({data:o})=>{e.value.item=o.result,e.value.modalAction="edit",s(),e.value.isLoading=!1}).catch(o=>{console.log(o),e.value.isLoading=!1})}function w(){a("edit-products")&&axios.put(route("api.products.update",e.value.item.id),e.value.item).then(({data:t})=>{s(),c(),n({title:"Success!",icon:"success"})}).catch(t=>{console.log(t),n({title:"Error!",icon:"error"})})}function C(){a("create-products")&&axios.post(route("api.products.create"),e.value.item).then(({data:t})=>{s(),e.value.products.data.unshift(t.result),e.value.item=p,c(),n({title:"Success!",icon:"success"})}).catch(t=>{console.log(t),n({title:"Error!",icon:"error"})})}function D(){e.value.modalAction==="edit"&&a("edit-products")?w():e.value.modalAction==="create"&&a("create-products")&&C()}function A(){a("create-products")&&(e.value.item=p,e.value.modalAction="create",s())}function b(t){e.value.item.images=e.value.item.images.concat(t)}function M(t){let o=e.value.item.images.findIndex(i=>i.id===t);e.value.item.images.splice(o,1)}function S(t,o){e.value.isLoading=!0,axios.post(route("api.products.sort.update",t),{sort:o}).then(()=>{n({icon:"success",title:"\u0417\u0431\u0435\u0440\u0435\u0436\u0435\u043D\u043E"}),e.value.isLoading=!1}).catch(i=>{console.log(i),n({icon:"error",title:"\u041F\u043E\u043C\u0438\u043B\u043A\u0430"}),e.value.isLoading=!1})}return(t,o)=>{const i=d("loader-component"),k=d("button-component"),V=d("search-component"),I=d("pagination");return r(),u($,{title:"\u0422\u043E\u0432\u0430\u0440\u0438"},{header:m(()=>[K]),default:m(()=>[e.value.isLoading?(r(),u(i,{key:0})):v("",!0),!e.value.isLoading&&l(a)("show-products")?(r(),R("div",T,[g("div",null,[l(a)("create-products")?(r(),u(k,{key:0,type:"btn",onClick:A},{default:m(()=>[X]),_:1})):v("",!0)]),g("div",Y,[f(V,{onSearch:P,clear:!0,placeholder:"ID \u0430\u0431\u043E \u0430\u0440\u0442\u0438\u043A\u0443\u043B",onOnClear:c}),f(U,{data:e.value.products.data,onOnEdit:h,onOnDestroy:_,canDestroy:l(a)("destroy-products"),onOnUpdateProductSort:S},null,8,["data","canDestroy"])]),g("div",q,[f(I,{pagination:e.value.products,"click-handler":c,modelValue:e.value.currentPage,"onUpdate:modelValue":o[0]||(o[0]=B=>e.value.currentPage=B)},null,8,["pagination","modelValue"])])])):v("",!0),(r(),u(j(l(x)),{product:e.value.item,onCloseModal:s,onSubmitForm:D,onDeclineForm:_,onSetProductImages:b,onDestroyImage:M,canDestroy:l(a)("destroy-products")},null,40,["product","canDestroy"]))]),_:1})}}};export{ie as default};