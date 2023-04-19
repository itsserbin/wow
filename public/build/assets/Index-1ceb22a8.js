import{i as x,r as V,j as y,o as B,p as i,D as n,x as u,A as _,B as M,C as p,t as c,q as F,v as h,z as D,l as I,J as L}from"./app-6d1ec759.js";import{L as P}from"./Loader-3f12bd2d.js";import{_ as E}from"./Button-18e692de.js";import{_ as N}from"./Paginate-7604e12b.js";import{_ as b}from"./UploadImagesModal-764d5655.js";import j from"./List-91f54d49.js";import z from"./Modal-8d1dad3e.js";import S from"./ContentLayout-6476cabf.js";import{s as g}from"./swal-76588f7d.js";import{u as q}from"./vue-i18n.esm-bundler-39f45a4f.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./UploadImagesInput-b445dfef.js";import"./Label-646a10b8.js";import"./Modal-1e77e375.js";import"./ImageCard-f6ab6853.js";import"./XCircle-0fb660d3.js";import"./Form-37d60ea1.js";import"./Card-36606ffb.js";import"./Input-335d7e3d.js";import"./AuthenticatedLayout-53775af0.js";import"./index.esm-09a1b1ab.js";import"./Logo-7b0b10d2.js";const f={async fetch(o){try{return(await axios.get(route("api.images.index",o))).data}catch(t){throw new Error(t.response.data)}},async destroy(o){try{return(await axios.delete(route("api.images.destroy",o))).data}catch(t){throw new Error(t.response.data)}},async update(o){try{return(await axios.put(route("api.images.update",o.id),o)).data}catch(t){throw new Error(t.response.data)}}},J={key:1,class:"grid grid-cols-1 gap-4"},O={class:"text-center"},ua={__name:"Index",setup(o){const t=x("$can"),{t:m}=q(),a=V({imagesList:[],isActiveUploadModal:!1,isActiveImageModal:!1,imageUploadModal:[],imageModal:{id:null,src:null,alt:null},currentPage:1,isLoading:!0}),C=y(()=>a.value.isActiveUploadModal?b:null),k=y(()=>a.value.isActiveImageModal?z:null);B(async()=>await r());const v=()=>{a.value.isActiveUploadModal=!a.value.isActiveUploadModal},l=()=>{a.value.isActiveImageModal=!a.value.isActiveImageModal},$=e=>{l(),a.value.imageModal=e},A=async()=>{if(t("edit-images")){const{success:e}=await f.update(a.value.imageModal);e&&(l(),await g({icon:"success",title:m("swal.updated")}))}},U=async e=>{await w(e),l()},w=async e=>{if(t("destroy-images")&&(await g({title:m("swal.sure"),icon:"warning",showCancelButton:!0})).isConfirmed){a.value.isLoading=!0;const{success:d}=await f.destroy(e);d&&(await r(),await g({icon:"success",title:m("swal.destroyed")})),a.value.isLoading=!1}},r=async e=>{a.value.isLoading=!0,e&&(a.value.currentPage=e);const s=await f.fetch({page:a.value.currentPage});a.value.imagesList=s.success?s.result:[],a.value.isLoading=!1};return(e,s)=>(i(),n(S,{title:e.$t("images.page_title")},{header:u(()=>[_(M(e.$t("images.page_title")),1)]),default:u(()=>[a.value.isLoading?(i(),n(P,{key:0})):p("",!0),!a.value.isLoading&&c(t)("show-images")?(i(),F("div",J,[h("div",null,[c(t)("create-images")?(i(),n(E,{key:0,type:"btn",onClick:D(v,["prevent"])},{default:u(()=>[_(M(e.$t("add")),1)]),_:1},8,["onClick"])):p("",!0)]),I(j,{images:a.value.imagesList,onClickImage:$,onFetch:r,onDestroyImage:w},null,8,["images"]),h("div",O,[I(N,{pagination:a.value.imagesList,"click-handler":r,modelValue:a.value.currentPage,"onUpdate:modelValue":s[0]||(s[0]=d=>a.value.currentPage=d)},null,8,["pagination","modelValue"])])])):p("",!0),(i(),n(L(c(k)),{onCloseModal:l,onSubmitForm:A,onDeclineForm:U,image:a.value.imageModal,size:"large"},null,40,["image"])),(i(),n(L(c(C)),{onCloseModal:v,onOnUpload:r},null,32))]),_:1},8,["title"]))}};export{ua as default};
