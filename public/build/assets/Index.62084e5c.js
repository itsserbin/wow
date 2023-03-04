import{bT as F,w as V,x as y,S as B,Q as l,K as g,X as _,F as i,L as M,A as h,P as p,B as d,y as P,z as I,a7 as b,J as L,a2 as k}from"./___vite-browser-external_commonjs-proxy.4f2b06be.js";import{j as D,b as E,k as N}from"./app.68928a22.js";import{_ as S}from"./UploadImagesModal.fbd8cb33.js";import j from"./List.eb026afb.js";import z from"./Modal.fd588641.js";import T from"./ContentLayout.132534e4.js";import"./Form.79c5e309.js";const v={async fetch(t){try{return(await axios.get(route("api.images.index",t))).data}catch(s){throw new Error(s.response.data)}},async destroy(t){try{return(await axios.delete(route("api.images.destroy",t))).data}catch(s){throw new Error(s.response.data)}},async update(t){try{return(await axios.put(route("api.images.update",t.id),t)).data}catch(s){throw new Error(s.response.data)}}},J={key:1,class:"grid grid-cols-1 gap-4"},K={class:"text-center"},W={__name:"Index",setup(t){const s=_("$swal"),r=_("$can"),{t:u}=F(),a=V({imagesList:[],isActiveUploadModal:!1,isActiveImageModal:!1,imageUploadModal:[],imageModal:{id:null,src:null,alt:null},currentPage:1,isLoading:!0}),$=y(()=>a.value.isActiveUploadModal?S:null),C=y(()=>a.value.isActiveImageModal?z:null);B(()=>n());const f=()=>{a.value.isActiveUploadModal=!a.value.isActiveUploadModal},c=()=>{a.value.isActiveImageModal=!a.value.isActiveImageModal},A=e=>{c(),a.value.imageModal=e},U=async()=>{if(r("edit-images")){const{success:e}=await v.update(a.value.imageModal);e&&(c(),await s({icon:"success",title:u("swal.updated")}))}},x=async e=>{await w(e),c()},w=async e=>{if(r("destroy-images")&&(await s({title:u("swal.sure"),icon:"warning",showCancelButton:!0})).isConfirmed){a.value.isLoading=!0;const{success:m}=await v.destroy(e);m&&(await n(),await s({icon:"success",title:u("swal.destroyed")})),a.value.isLoading=!1}},n=async e=>{a.value.isLoading=!0,e&&(a.value.currentPage=e);const o=await v.fetch({page:a.value.currentPage});a.value.imagesList=o.success?o.result:[],a.value.isLoading=!1};return(e,o)=>(i(),l(T,{title:e.$t("images.page_title")},{header:g(()=>[M(h(e.$t("images.page_title")),1)]),default:g(()=>[a.value.isLoading?(i(),l(D,{key:0})):p("",!0),!a.value.isLoading&&d(r)("show-images")?(i(),P("div",J,[I("div",null,[d(r)("create-images")?(i(),l(E,{key:0,type:"btn",onClick:b(f,["prevent"])},{default:g(()=>[M(h(e.$t("add")),1)]),_:1},8,["onClick"])):p("",!0)]),L(j,{images:a.value.imagesList,onClickImage:A,onFetch:n,onDestroyImage:w},null,8,["images"]),I("div",K,[L(N,{pagination:a.value.imagesList,"click-handler":n,modelValue:a.value.currentPage,"onUpdate:modelValue":o[0]||(o[0]=m=>a.value.currentPage=m)},null,8,["pagination","modelValue"])])])):p("",!0),(i(),l(k(d(C)),{onCloseModal:c,onSubmitForm:U,onDeclineForm:x,image:a.value.imageModal,size:"large"},null,40,["image"])),(i(),l(k(d($)),{onCloseModal:f,onOnUpload:n},null,32))]),_:1},8,["title"]))}};export{W as default};