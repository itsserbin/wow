import V from"./Modal.b9409a11.js";import B from"./Table.bd86492b.js";import U from"./ContentLayout.ddd3d024.js";import{ay as F,w as $,S as O,x as z,Q as u,K as m,X as y,H as d,F as r,P as v,B as l,y as R,z as g,J as f,a2 as j,L as w}from"./___vite-browser-external_commonjs-proxy.4f2b06be.js";import"./Form.7c155b57.js";import"./Images.958cc8ea.js";import"./app.460df568.js";import"./swiper-slide.37961581.js";import"./ImagesSelectModal.abb8b8b2.js";import"./UploadImagesModal.0da56257.js";import"./CharacteristicsRepository.ec452529.js";const H=w(" \u0422\u043E\u0432\u0430\u0440\u0438 "),J={key:1,class:"grid gap-4 grid-cols-1"},K=w(" \u0414\u043E\u0434\u0430\u0442\u0438 "),Q={class:"grid grid-cols-1 gap-4"},T={class:"text-center"},ne={__name:"Index",setup(X){const c=y("$swal"),i=y("$can"),p=F({status:null,title:{ru:null,ua:null},characteristics:{ru:null,ua:null},description:{ru:null,ua:null},h1:{ru:null,ua:null},content:{ru:null,ua:null},characteristicsNew:{},published:0,preview:null,size_table:null,price:null,trade_price:null,discount_price:null,categories:[],vendor_code:null,provider_id:null,youtube:null,sizes:[],images:[],colors:[]}),e=$({products:[],currentPage:1,isLoading:!0,isActiveModal:!1,modalAction:"",item:p});O(()=>{let t=new URLSearchParams(new URL(window.location.href).search).get("product");t&&_(t),n(1)});const L=z(()=>e.value.isActiveModal?V:null);function x(t){e.value.isLoading=!0,axios.get(route("api.products.search",t)).then(({data:o})=>{e.value.currentPage=1,e.value.products=o.result,e.value.isLoading=!1}).catch(o=>{console.log(o),e.value.isLoading=!1})}function n(t){e.value.isLoading=!0,t&&(e.value.currentPage=t),axios.get(route("api.products.index",{page:e.value.currentPage})).then(({data:o})=>{e.value.products=o.result,e.value.isLoading=!1}).catch(o=>{console.log(o),e.value.isLoading=!1})}function h(t){i("destroy-products")&&c({title:"\u0412\u0438\u0434\u0430\u043B\u0438\u0442\u0438?",icon:"warning",showCancelButton:!0}).then(o=>{o.isConfirmed&&axios.delete(route("api.products.destroy",t)).then(()=>{n(),e.value.isActiveModal&&s(),c({icon:"success",title:"Destroyed!"})}).catch(a=>{console.log(a),c({icon:"error",title:"Error!"})})})}function s(){e.value.isActiveModal=!e.value.isActiveModal}function _(t){e.value.isLoading=!0,axios.get(route("api.products.edit",t)).then(({data:o})=>{e.value.item=o.result,e.value.item.characteristicsNew={},e.value.item.characteristics_new.length&&(e.value.item.characteristics_new.forEach(a=>{e.value.item.characteristicsNew[a.characteristic_id]=[]}),e.value.item.characteristics_new.forEach(a=>{e.value.item.characteristicsNew[a.characteristic_id].push(a)})),e.value.modalAction="edit",s(),e.value.isLoading=!1}).catch(o=>{console.log(o),e.value.isLoading=!1})}function P(){i("edit-products")&&axios.put(route("api.products.update",e.value.item.id),e.value.item).then(({data:t})=>{s(),n(),c({title:"Success!",icon:"success"})}).catch(t=>{console.log(t),c({title:"Error!",icon:"error"})})}function D(){i("create-products")&&axios.post(route("api.products.create"),e.value.item).then(({data:t})=>{s(),e.value.products.data.unshift(t.result),e.value.item=p,n(),c({title:"Success!",icon:"success"})}).catch(t=>{console.log(t),c({title:"Error!",icon:"error"})})}function A(){e.value.modalAction==="edit"&&i("edit-products")?P():e.value.modalAction==="create"&&i("create-products")&&D()}function C(){i("create-products")&&(e.value.item=p,e.value.modalAction="create",s())}function S(t){e.value.item.images=e.value.item.images.concat(t)}function b(t){let o=e.value.item.images.findIndex(a=>a.id===t);e.value.item.images.splice(o,1)}function k(t,o){e.value.isLoading=!0,axios.post(route("api.products.sort.update",t),{sort:o}).then(()=>{c({icon:"success",title:"\u0417\u0431\u0435\u0440\u0435\u0436\u0435\u043D\u043E"}),e.value.isLoading=!1}).catch(a=>{console.log(a),c({icon:"error",title:"\u041F\u043E\u043C\u0438\u043B\u043A\u0430"}),e.value.isLoading=!1})}return(t,o)=>{const a=d("loader-component"),E=d("button-component"),M=d("search-component"),N=d("pagination");return r(),u(U,{title:"\u0422\u043E\u0432\u0430\u0440\u0438"},{header:m(()=>[H]),default:m(()=>[e.value.isLoading?(r(),u(a,{key:0})):v("",!0),!e.value.isLoading&&l(i)("show-products")?(r(),R("div",J,[g("div",null,[l(i)("create-products")?(r(),u(E,{key:0,type:"btn",onClick:C},{default:m(()=>[K]),_:1})):v("",!0)]),g("div",Q,[f(M,{onSearch:x,clear:!0,placeholder:"ID \u0430\u0431\u043E \u0430\u0440\u0442\u0438\u043A\u0443\u043B",onOnClear:n}),f(B,{data:e.value.products.data,onOnEdit:_,onOnDestroy:h,canDestroy:l(i)("destroy-products"),onOnUpdateProductSort:k},null,8,["data","canDestroy"])]),g("div",T,[f(N,{pagination:e.value.products,"click-handler":n,modelValue:e.value.currentPage,"onUpdate:modelValue":o[0]||(o[0]=I=>e.value.currentPage=I)},null,8,["pagination","modelValue"])])])):v("",!0),(r(),u(j(l(L)),{product:e.value.item,onCloseModal:s,onSubmitForm:A,onDeclineForm:h,onSetProductImages:S,onDestroyImage:b,canDestroy:l(i)("destroy-products")},null,40,["product","canDestroy"]))]),_:1})}}};export{ne as default};
