import x from"./Modal.97a1e15c.js";import I from"./Table.c30a0962.js";import{j as V,b as B,q as U,k as E}from"./app.68928a22.js";import F from"./ContentLayout.132534e4.js";import{P as r}from"./ProductsRepository.3b7ddd33.js";import{bT as O,ay as z,w as R,S as j,x as T,Q as m,K as v,X as y,F as u,L,A as P,P as f,B as d,y as q,z as w,J as g,a2 as J}from"./___vite-browser-external_commonjs-proxy.4f2b06be.js";import"./Form.617f4ed6.js";import"./Images.91a3fd0f.js";import"./swiper-slide.37961581.js";import"./ImagesSelectModal.aa115b56.js";import"./UploadImagesModal.fbd8cb33.js";import"./CharacteristicsRepository.ec452529.js";const K={key:1,class:"grid gap-4 grid-cols-1"},Q={class:"grid grid-cols-1 gap-4"},X={class:"text-center"},le={__name:"Index",setup(G){const o=y("$swal"),i=y("$can"),{t:c}=O(),p=z({status:null,title:{ru:null,ua:null},characteristics:{ru:null,ua:null},description:{ru:null,ua:null},h1:{ru:null,ua:null},content:{ru:null,ua:null},characteristicsNew:{},published:0,preview:null,size_table:null,price:null,trade_price:null,discount_price:null,categories:[],vendor_code:null,provider_id:null,youtube:null,sizes:[],images:[],colors:[]}),e=R({products:[],currentPage:1,isLoading:!0,isActiveModal:!1,modalAction:"",item:p,errors:[]});j(()=>{let a=new URLSearchParams(new URL(window.location.href).search).get("product");a&&_(a),l(1)});const $=T(()=>e.value.isActiveModal?x:null),k=async a=>{e.value.isLoading=!0;const t=await r.search(a);t.success&&(e.value.currentPage=1,e.value.products=t.result),e.value.isLoading=!1},l=async a=>{e.value.isLoading=!0,a&&(e.value.currentPage=a);const t=await r.fetch({page:e.value.currentPage});e.value.products=t.success?t.result:[],e.value.isLoading=!1},h=async a=>{if(i("destroy-products")&&(await o({title:c("swal.sure"),icon:"warning",showCancelButton:!0})).isConfirmed){const{success:s}=await r.destroy(a);s&&(await l(),e.value.isActiveModal&&n(),await o({icon:"success",title:c("swal.destroyed")}))}},n=()=>{e.value.isActiveModal=!e.value.isActiveModal},_=async a=>{e.value.isLoading=!0;const t=await r.edit(a);t.success&&(e.value.item=t.result,e.value.item.characteristicsNew={},e.value.item.characteristics_new.length&&(e.value.item.characteristics_new.forEach(s=>{e.value.item.characteristicsNew[s.characteristic_id]=[]}),e.value.item.characteristics_new.forEach(s=>{e.value.item.characteristicsNew[s.characteristic_id].push(s)})),e.value.modalAction="edit",n()),e.value.isLoading=!1},A=async()=>{if(i("edit-products")){const a=await r.update(e.value.item);a.success?(n(),await l(),await o({title:c("swal.updated"),icon:"success"})):(e.value.errors=a,console.log(a),await o({title:c("swal.error"),icon:"error",text:c("swal.check_data")}))}},D=async()=>{if(i("create-products")){const a=await r.create(e.value.item);a.success?(n(),e.value.item=p,await l(),await o({title:c("swal.created"),icon:"success"})):(e.value.errors=a,console.log(a),await o({title:c("swal.error"),text:c("swal.check_data"),icon:"error"}))}},C=async()=>{e.value.modalAction==="edit"&&i("edit-products")?await A():e.value.modalAction==="create"&&i("create-products")&&await D()},S=()=>{i("create-products")&&(e.value.item=p,e.value.modalAction="create",n())},b=a=>{e.value.item.images=e.value.item.images.concat(a)},M=a=>{let t=e.value.item.images.findIndex(s=>s.id===a);e.value.item.images.splice(t,1)},N=async(a,t)=>{e.value.isLoading=!0,(await r.updateSort(a,t)).success&&await o({title:c("swal.updated"),icon:"success"}),e.value.isLoading=!1};return(a,t)=>(u(),m(F,{title:a.$t("products.page_title")},{header:v(()=>[L(P(a.$t("products.page_title")),1)]),default:v(()=>[e.value.isLoading?(u(),m(V,{key:0})):f("",!0),!e.value.isLoading&&d(i)("show-products")?(u(),q("div",K,[w("div",null,[d(i)("create-products")?(u(),m(B,{key:0,type:"btn",onClick:S},{default:v(()=>[L(P(a.$t("add")),1)]),_:1})):f("",!0)]),w("div",Q,[g(U,{onSearch:k,clear:!0,placeholder:a.$t("products.search_placeholder"),onOnClear:l},null,8,["placeholder"]),g(I,{data:e.value.products.data,onOnEdit:_,onOnDestroy:h,canDestroy:d(i)("destroy-products"),onOnUpdateProductSort:N},null,8,["data","canDestroy"])]),w("div",X,[g(E,{pagination:e.value.products,"click-handler":l,modelValue:e.value.currentPage,"onUpdate:modelValue":t[0]||(t[0]=s=>e.value.currentPage=s)},null,8,["pagination","modelValue"])])])):f("",!0),(u(),m(J(d($)),{item:e.value.item,onCloseModal:n,onSubmitForm:C,onDeclineForm:h,onSetProductImages:b,onDestroyImage:M,canDestroy:d(i)("destroy-products")},null,40,["item","canDestroy"]))]),_:1},8,["title"]))}};export{le as default};