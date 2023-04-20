import M from"./Modal-a5032f96.js";import L from"./Table-e2285644.js";import V from"./ContentLayout-3cc2f430.js";import{L as B}from"./Loader-8bf33617.js";import{_ as b}from"./Paginate-b71b7269.js";import{_ as P}from"./Button-3f74bcad.js";import{C as n}from"./Form-182c6d5b.js";import{u as F}from"./vue-i18n.esm-bundler-d070be13.js";import{s as l}from"./swal-01ed9a07.js";import{i as N,G as j,r as E,o as O,j as I,p as u,D as d,x as p,A as f,B as w,C as v,t as m,q as S,v as _,l as y,J as U}from"./app-f55448cf.js";import"./Modal-381c1367.js";import"./LangTabs-9ee1a6bd.js";import"./Table-6800669f.js";import"./XCircle-78b15e67.js";import"./AuthenticatedLayout-ecf8db9d.js";import"./index.esm-f21e1dfa.js";import"./Logo-edac3a30.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./ImagesSelectModal-66d24b34.js";import"./UploadImagesModal-d4208a3d.js";import"./UploadImagesInput-2d85b50d.js";import"./Label-fa7af1d1.js";import"./ImageCard-e3dc587b.js";import"./InputError-688221d0.js";import"./Input-4fdb1b47.js";import"./Textarea-faf312b0.js";import"./Select-35904355.js";import"./Editor-113ec15f.js";const q={key:1,class:"grid gap-4 grid-cols-1"},G={class:"text-center"},_e={__name:"Index",setup(J){const a=N("$can"),{t:o}=F(),h=j({published:0,slug:null,parent_id:null,preview_id:null,preview:null,title:{ru:null,ua:null},meta_title:{ru:null,ua:null},meta_description:{ru:null,ua:null},meta_keyword:{ru:null,ua:null},seo_text:{ru:null,ua:null}}),e=E({categories:[],currentPage:1,isLoading:!0,isActiveModal:!1,modalAction:"",item:{},errors:[]});O(()=>{c(1)});const k=I(()=>e.value.isActiveModal?M:null),c=async t=>{e.value.isLoading=!0,t&&(e.value.currentPage=t);const i=await n.fetch({page:e.value.currentPage});e.value.categories=i.success?i.result:[],e.value.isLoading=!1},g=async t=>{if(a("destroy-categories")&&(await l({title:o("swal.sure"),icon:"warning",showCancelButton:!0})).isConfirmed){const{success:s}=await n.destroy(t);s&&(await c(),e.value.isActiveModal&&r(),await l({icon:"success",title:o("swal.destroyed")}))}},r=()=>{e.value.isActiveModal=!e.value.isActiveModal},A=async(t,i)=>{if(a("edit-categories")){const s=await n.edit(t);s.success&&(e.value.item=s.result,e.value.modalAction="edit",e.value.item.index=i,r())}},C=async()=>{if(a("edit-categories")){const t=await n.update(e.value.item);e.value.errors=[],t.success?(r(),await c(),await l({title:o("swal.updated"),icon:"success"})):(e.value.errors=t,console.log(t),await l({title:o("swal.error"),icon:"error",text:o("swal.check_data")}))}},D=async()=>{if(a("create-categories")){const t=await n.create(e.value.item);e.value.errors=[],t.success?(r(),e.value.item={},await c(),await l({title:o("swal.created"),icon:"success"})):(e.value.errors=t,console.log(t),await l({title:o("swal.error"),text:o("swal.check_data"),icon:"error"}))}},$=async()=>{e.value.modalAction==="edit"&&a("edit-categories")?await C():e.value.modalAction==="create"&&a("create-categories")&&await D()},x=()=>{a("create-categories")&&(Object.assign(e.value.item,h),e.value.modalAction="create",e.value.errors=[],r())};return(t,i)=>(u(),d(V,{title:t.$t("categories.page_title")},{header:p(()=>[f(w(t.$t("categories.page_title")),1)]),default:p(()=>[e.value.isLoading?(u(),d(B,{key:0})):v("",!0),!e.value.isLoading&&m(a)("show-categories")?(u(),S("div",q,[_("div",null,[m(a)("create-categories")?(u(),d(P,{key:0,type:"btn",onClick:x},{default:p(()=>[f(w(t.$t("add")),1)]),_:1})):v("",!0)]),y(L,{data:e.value.categories.data,onOnEdit:A,onOnDestroy:g,canDestroy:m(a)("destroy-categories")},null,8,["data","canDestroy"]),_("div",G,[y(b,{pagination:e.value.categories,"click-handler":c,modelValue:e.value.currentPage,"onUpdate:modelValue":i[0]||(i[0]=s=>e.value.currentPage=s)},null,8,["pagination","modelValue"])])])):v("",!0),(u(),d(U(m(k)),{item:e.value.item,errors:e.value.errors,onCloseModal:r,onSubmitForm:$,onDeclineForm:g,canDestroy:m(a)("destroy-categories")},null,40,["item","errors","canDestroy"]))]),_:1},8,["title"]))}};export{_e as default};