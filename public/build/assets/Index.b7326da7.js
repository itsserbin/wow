import x from"./Modal.5cb59c2d.js";import I from"./Table.43a7fb26.js";import{L as V,b as B,p as E,j as U}from"./app.2d605236.js";import F from"./ContentLayout.60027cdf.js";import{P as r}from"./ProductsRepository.3b7ddd33.js";import{ak as O,Z as z,i as R,o as j,m as q,B as m,C as v,E as y,z as u,v as L,x as P,s as f,u as d,p as G,q as w,G as g,a7 as T}from"./index.1726d409.js";import"./Form.154bd11d.js";import"./Images.b1a0fbd0.js";import"./swiper-slide.7de65c6d.js";import"./create-element-if-not-defined.26147364.js";import"./navigation.b481f07e.js";import"./moment.9709ab41.js";import"./_plugin-vue_export-helper.cdc0426e.js";import"./lazyload.6866379a.js";import"./Logo.9264c4eb.js";import"./ImagesSelectModal.b7511e28.js";import"./UploadImagesModal.7076471d.js";import"./CharacteristicsRepository.ec452529.js";const Z={key:1,class:"grid gap-4 grid-cols-1"},H={class:"grid grid-cols-1 gap-4"},J={class:"text-center"},ve={__name:"Index",setup(K){const c=y("$swal"),i=y("$can"),{t:o}=O(),p=z({status:null,title:{ru:null,ua:null},characteristics:{ru:null,ua:null},description:{ru:null,ua:null},h1:{ru:null,ua:null},content:{ru:null,ua:null},characteristicsNew:{},published:0,preview:null,size_table:null,price:null,trade_price:null,discount_price:null,categories:[],vendor_code:null,provider_id:null,youtube:null,sizes:[],images:[],colors:[]}),e=R({products:[],currentPage:1,isLoading:!0,isActiveModal:!1,modalAction:"",item:p,errors:[]});j(()=>{let t=new URLSearchParams(new URL(window.location.href).search).get("product");t&&_(t),l(1)});const $=q(()=>e.value.isActiveModal?x:null),k=async t=>{e.value.isLoading=!0;const a=await r.search(t);a.success&&(e.value.currentPage=1,e.value.products=a.result),e.value.isLoading=!1},l=async t=>{e.value.isLoading=!0,t&&(e.value.currentPage=t);const a=await r.fetch({page:e.value.currentPage});e.value.products=a.success?a.result:[],e.value.isLoading=!1},h=async t=>{if(i("destroy-products")&&(await c({title:o("swal.sure"),icon:"warning",showCancelButton:!0})).isConfirmed){const{success:s}=await r.destroy(t);s&&(await l(),e.value.isActiveModal&&n(),await c({icon:"success",title:o("swal.destroyed")}))}},n=()=>{e.value.isActiveModal=!e.value.isActiveModal},_=async t=>{e.value.isLoading=!0;const a=await r.edit(t);a.success&&(e.value.item=a.result,e.value.item.characteristicsNew={},e.value.item.characteristics_new.length&&(e.value.item.characteristics_new.forEach(s=>{e.value.item.characteristicsNew[s.characteristic_id]=[]}),e.value.item.characteristics_new.forEach(s=>{e.value.item.characteristicsNew[s.characteristic_id].push(s)})),e.value.modalAction="edit",n()),e.value.isLoading=!1},A=async()=>{if(i("edit-products")){const t=await r.update(e.value.item);t.success?(n(),await l(),await c({title:o("swal.updated"),icon:"success"})):(e.value.errors=t,console.log(t),await c({title:o("swal.error"),icon:"error",text:o("swal.check_data")}))}},C=async()=>{if(i("create-products")){const t=await r.create(e.value.item);t.success?(n(),e.value.item=p,await l(),await c({title:o("swal.created"),icon:"success"})):(e.value.errors=t,console.log(t),await c({title:o("swal.error"),text:o("swal.check_data"),icon:"error"}))}},D=async()=>{e.value.modalAction==="edit"&&i("edit-products")?await A():e.value.modalAction==="create"&&i("create-products")&&await C()},M=()=>{i("create-products")&&(e.value.item=p,e.value.modalAction="create",n())},N=t=>{e.value.item.images=e.value.item.images.concat(t)},S=t=>{let a=e.value.item.images.findIndex(s=>s.id===t);e.value.item.images.splice(a,1)},b=async(t,a)=>{e.value.isLoading=!0,(await r.updateSort(t,a)).success&&await c({title:o("swal.updated"),icon:"success"}),e.value.isLoading=!1};return(t,a)=>(u(),m(F,{title:t.$t("products.page_title")},{header:v(()=>[L(P(t.$t("products.page_title")),1)]),default:v(()=>[e.value.isLoading?(u(),m(V,{key:0})):f("",!0),!e.value.isLoading&&d(i)("show-products")?(u(),G("div",Z,[w("div",null,[d(i)("create-products")?(u(),m(B,{key:0,type:"btn",onClick:M},{default:v(()=>[L(P(t.$t("add")),1)]),_:1})):f("",!0)]),w("div",H,[g(E,{onSearch:k,clear:!0,placeholder:t.$t("products.search_placeholder"),onOnClear:l},null,8,["placeholder"]),g(I,{data:e.value.products.data,onOnEdit:_,onOnDestroy:h,canDestroy:d(i)("destroy-products"),onOnUpdateProductSort:b},null,8,["data","canDestroy"])]),w("div",J,[g(U,{pagination:e.value.products,"click-handler":l,modelValue:e.value.currentPage,"onUpdate:modelValue":a[0]||(a[0]=s=>e.value.currentPage=s)},null,8,["pagination","modelValue"])])])):f("",!0),(u(),m(T(d($)),{item:e.value.item,onCloseModal:n,onSubmitForm:D,onDeclineForm:h,onSetProductImages:N,onDestroyImage:S,canDestroy:d(i)("destroy-products")},null,40,["item","canDestroy"]))]),_:1},8,["title"]))}};export{ve as default};
