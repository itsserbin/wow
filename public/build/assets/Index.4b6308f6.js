import I from"./Modal.9ed7f3fc.js";import B from"./Table.f58369cd.js";import U from"./ContentLayout.36c5d66f.js";import{ay as $,y as F,C as O,z,a0 as u,X as m,B as y,V as d,S as r,_ as v,P as l,L as R,M as g,K as f,bh as j,Y as w}from"./___vite-browser-external_commonjs-proxy.4500e77d.js";import"./Form.530e3b58.js";import"./Images.3c2e320b.js";import"./app.6118ad44.js";import"./swiper-slide.5cc6c676.js";import"./ImagesSelectModal.d498309c.js";import"./UploadImagesModal.fda6711d.js";import"./CharacteristicsRepository.ec452529.js";const K=w(" \u0422\u043E\u0432\u0430\u0440\u0438 "),T={key:1,class:"grid gap-4 grid-cols-1"},X=w(" \u0414\u043E\u0434\u0430\u0442\u0438 "),Y={class:"grid grid-cols-1 gap-4"},q={class:"text-center"},ne={__name:"Index",setup(G){const c=y("$swal"),i=y("$can"),p=$({status:null,title:{ru:null,ua:null},characteristics:{ru:null,ua:null},description:{ru:null,ua:null},h1:{ru:null,ua:null},content:{ru:null,ua:null},characteristicsNew:{},published:0,preview:null,size_table:null,price:null,trade_price:null,discount_price:null,categories:[],vendor_code:null,provider_id:null,youtube:null,sizes:[],images:[],colors:[]}),e=F({products:[],currentPage:1,isLoading:!0,isActiveModal:!1,modalAction:"",item:p});O(()=>{let t=new URLSearchParams(new URL(window.location.href).search).get("product");t&&_(t),n(1)});const L=z(()=>e.value.isActiveModal?I:null);function x(t){e.value.isLoading=!0,axios.get(route("api.products.search",t)).then(({data:o})=>{e.value.currentPage=1,e.value.products=o.result,e.value.isLoading=!1}).catch(o=>{console.log(o),e.value.isLoading=!1})}function n(t){e.value.isLoading=!0,t&&(e.value.currentPage=t),axios.get(route("api.products.index",{page:e.value.currentPage})).then(({data:o})=>{e.value.products=o.result,e.value.isLoading=!1}).catch(o=>{console.log(o),e.value.isLoading=!1})}function h(t){i("destroy-products")&&c({title:"\u0412\u0438\u0434\u0430\u043B\u0438\u0442\u0438?",icon:"warning",showCancelButton:!0}).then(o=>{o.isConfirmed&&axios.delete(route("api.products.destroy",t)).then(()=>{n(),e.value.isActiveModal&&s(),c({icon:"success",title:"Destroyed!"})}).catch(a=>{console.log(a),c({icon:"error",title:"Error!"})})})}function s(){e.value.isActiveModal=!e.value.isActiveModal}function _(t){e.value.isLoading=!0,axios.get(route("api.products.edit",t)).then(({data:o})=>{e.value.item=o.result,e.value.item.characteristicsNew={},e.value.item.characteristics_new.length&&(e.value.item.characteristics_new.forEach(a=>{e.value.item.characteristicsNew[a.characteristic_id]=[]}),e.value.item.characteristics_new.forEach(a=>{e.value.item.characteristicsNew[a.characteristic_id].push(a)})),e.value.modalAction="edit",s(),e.value.isLoading=!1}).catch(o=>{console.log(o),e.value.isLoading=!1})}function P(){i("edit-products")&&axios.put(route("api.products.update",e.value.item.id),e.value.item).then(({data:t})=>{s(),n(),c({title:"Success!",icon:"success"})}).catch(t=>{console.log(t),c({title:"Error!",icon:"error"})})}function C(){i("create-products")&&axios.post(route("api.products.create"),e.value.item).then(({data:t})=>{s(),e.value.products.data.unshift(t.result),e.value.item=p,n(),c({title:"Success!",icon:"success"})}).catch(t=>{console.log(t),c({title:"Error!",icon:"error"})})}function D(){e.value.modalAction==="edit"&&i("edit-products")?P():e.value.modalAction==="create"&&i("create-products")&&C()}function A(){i("create-products")&&(e.value.item=p,e.value.modalAction="create",s())}function b(t){e.value.item.images=e.value.item.images.concat(t)}function M(t){let o=e.value.item.images.findIndex(a=>a.id===t);e.value.item.images.splice(o,1)}function S(t,o){e.value.isLoading=!0,axios.post(route("api.products.sort.update",t),{sort:o}).then(()=>{c({icon:"success",title:"\u0417\u0431\u0435\u0440\u0435\u0436\u0435\u043D\u043E"}),e.value.isLoading=!1}).catch(a=>{console.log(a),c({icon:"error",title:"\u041F\u043E\u043C\u0438\u043B\u043A\u0430"}),e.value.isLoading=!1})}return(t,o)=>{const a=d("loader-component"),k=d("button-component"),E=d("search-component"),N=d("pagination");return r(),u(U,{title:"\u0422\u043E\u0432\u0430\u0440\u0438"},{header:m(()=>[K]),default:m(()=>[e.value.isLoading?(r(),u(a,{key:0})):v("",!0),!e.value.isLoading&&l(i)("show-products")?(r(),R("div",T,[g("div",null,[l(i)("create-products")?(r(),u(k,{key:0,type:"btn",onClick:A},{default:m(()=>[X]),_:1})):v("",!0)]),g("div",Y,[f(E,{onSearch:x,clear:!0,placeholder:"ID \u0430\u0431\u043E \u0430\u0440\u0442\u0438\u043A\u0443\u043B",onOnClear:n}),f(B,{data:e.value.products.data,onOnEdit:_,onOnDestroy:h,canDestroy:l(i)("destroy-products"),onOnUpdateProductSort:S},null,8,["data","canDestroy"])]),g("div",q,[f(N,{pagination:e.value.products,"click-handler":n,modelValue:e.value.currentPage,"onUpdate:modelValue":o[0]||(o[0]=V=>e.value.currentPage=V)},null,8,["pagination","modelValue"])])])):v("",!0),(r(),u(j(l(L)),{product:e.value.item,onCloseModal:s,onSubmitForm:D,onDeclineForm:h,onSetProductImages:b,onDestroyImage:M,canDestroy:l(i)("destroy-products")},null,40,["product","canDestroy"]))]),_:1})}}};export{ne as default};
