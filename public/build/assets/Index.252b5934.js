import L from"./Modal.e599c20a.js";import V from"./Table.31326843.js";import b from"./ContentLayout.60027cdf.js";import{L as B,b as P,j as E}from"./app.2d605236.js";import{C as n}from"./Form.09fedc59.js";import{ak as F,Z as N,i as j,o as O,m as I,B as m,C as v,E as f,z as u,v as w,x as _,s as g,u as d,p as S,q as y,G as k,a7 as U}from"./index.1726d409.js";import"./moment.9709ab41.js";import"./_plugin-vue_export-helper.cdc0426e.js";import"./lazyload.6866379a.js";import"./Logo.9264c4eb.js";import"./ImagesSelectModal.b7511e28.js";import"./UploadImagesModal.7076471d.js";import"./InputError.2731f248.js";const q={key:1,class:"grid gap-4 grid-cols-1"},z={class:"text-center"},se={__name:"Index",setup(G){const i=f("$swal"),t=f("$can"),{t:s}=F(),h=N({published:0,slug:null,parent_id:null,preview_id:null,preview:null,title:{ru:null,ua:null},meta_title:{ru:null,ua:null},meta_description:{ru:null,ua:null},meta_keyword:{ru:null,ua:null},seo_text:{ru:null,ua:null}}),e=j({categories:[],currentPage:1,isLoading:!0,isActiveModal:!1,modalAction:"",item:{},errors:[]});O(()=>{c(1)});const C=I(()=>e.value.isActiveModal?L:null),c=async a=>{e.value.isLoading=!0,a&&(e.value.currentPage=a);const o=await n.fetch({page:e.value.currentPage});e.value.categories=o.success?o.result:[],e.value.isLoading=!1},p=async a=>{if(t("destroy-categories")&&(await i({title:s("swal.sure"),icon:"warning",showCancelButton:!0})).isConfirmed){const{success:l}=await n.destroy(a);l&&(await c(),e.value.isActiveModal&&r(),await i({icon:"success",title:s("swal.destroyed")}))}},r=()=>{e.value.isActiveModal=!e.value.isActiveModal},A=async(a,o)=>{if(t("edit-categories")){const l=await n.edit(a);l.success&&(e.value.item=l.result,e.value.modalAction="edit",e.value.item.index=o,r())}},$=async()=>{if(t("edit-categories")){const a=await n.update(e.value.item);e.value.errors=[],a.success?(r(),await c(),await i({title:s("swal.updated"),icon:"success"})):(e.value.errors=a,console.log(a),await i({title:s("swal.error"),icon:"error",text:s("swal.check_data")}))}},D=async()=>{if(t("create-categories")){const a=await n.create(e.value.item);e.value.errors=[],a.success?(r(),e.value.item={},await c(),await i({title:s("swal.created"),icon:"success"})):(e.value.errors=a,console.log(a),await i({title:s("swal.error"),text:s("swal.check_data"),icon:"error"}))}},x=async()=>{e.value.modalAction==="edit"&&t("edit-categories")?await $():e.value.modalAction==="create"&&t("create-categories")&&await D()},M=()=>{t("create-categories")&&(Object.assign(e.value.item,h),e.value.modalAction="create",e.value.errors=[],r())};return(a,o)=>(u(),m(b,{title:a.$t("categories.page_title")},{header:v(()=>[w(_(a.$t("categories.page_title")),1)]),default:v(()=>[e.value.isLoading?(u(),m(B,{key:0})):g("",!0),!e.value.isLoading&&d(t)("show-categories")?(u(),S("div",q,[y("div",null,[d(t)("create-categories")?(u(),m(P,{key:0,type:"btn",onClick:M},{default:v(()=>[w(_(a.$t("add")),1)]),_:1})):g("",!0)]),k(V,{data:e.value.categories.data,onOnEdit:A,onOnDestroy:p,canDestroy:d(t)("destroy-categories")},null,8,["data","canDestroy"]),y("div",z,[k(E,{pagination:e.value.categories,"click-handler":c,modelValue:e.value.currentPage,"onUpdate:modelValue":o[0]||(o[0]=l=>e.value.currentPage=l)},null,8,["pagination","modelValue"])])])):g("",!0),(u(),m(U(d(C)),{item:e.value.item,errors:e.value.errors,onCloseModal:r,onSubmitForm:x,onDeclineForm:p,canDestroy:d(t)("destroy-categories")},null,40,["item","errors","canDestroy"]))]),_:1},8,["title"]))}};export{se as default};