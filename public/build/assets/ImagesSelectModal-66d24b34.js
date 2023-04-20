import{r as y,o as b,p as s,D as d,x as u,A as c,l as m,z as _,q as r,v as l,F as k,K as h,M as x,O as M,C as g}from"./app-f55448cf.js";import{_ as $}from"./Modal-381c1367.js";import{_ as w}from"./Paginate-b71b7269.js";import{_ as C}from"./Button-3f74bcad.js";import{L as U}from"./Loader-8bf33617.js";import{_ as L}from"./UploadImagesModal-d4208a3d.js";const V={key:1},I={class:"grid grid-cols-2 md:grid-cols-5 mt-3"},F={class:"block m-1"},B=["type","value","id"],P=["for"],N=["srcset"],j=["src"],D={key:0,class:"row flex justify-center my-5"},K={__name:"ImagesSelectModal",props:{multiple:{type:Boolean,default:!1}},emits:["closeModal","submitForm"],setup(p){const e=y({images:[],isLoading:!1,isImagesUploadModal:!1,selected:[],currentPage:1});b(()=>{n()});function v(){i(),n()}function i(){e.value.isImagesUploadModal=!e.value.isImagesUploadModal}function n(o){e.value.isLoading=!0,o&&(e.value.currentPage=o),axios.get(route("api.images.index",{page:e.value.currentPage})).then(({data:a})=>{e.value.images=a.result,e.value.isLoading=!1}).catch(a=>{console.log(a),e.value.isLoading=!1})}return(o,a)=>(s(),d($,{onCloseModal:a[2]||(a[2]=t=>o.$emit("closeModal")),"submit-button-text":"Зберегти","cancel-button-text":"Відмінити",onSubmitForm:a[3]||(a[3]=t=>o.$emit("submitForm",e.value.selected)),onClickCancel:a[4]||(a[4]=t=>o.$emit("closeModal")),size:"extralarge"},{title:u(()=>[c("Вибір зображення")]),content:u(()=>[m(C,{type:"btn",onClick:_(i,["prevent"])},{default:u(()=>[c(" Завантажити ")]),_:1},8,["onClick"]),e.value.isLoading?(s(),d(U,{key:0})):(s(),r("div",V,[l("div",I,[(s(!0),r(k,null,h(e.value.images.data,t=>(s(),r("div",F,[x(l("input",{type:p.multiple?"checkbox":"radio",name:"images","onUpdate:modelValue":a[0]||(a[0]=f=>e.value.selected=f),value:t,id:t.id,class:"hidden peer"},null,8,B),[[M,e.value.selected]]),l("label",{for:t.id,class:"inline-flex justify-between items-center p-5 w-full text-gray-500 bg-white rounded-lg border-2 border-gray-200 cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 peer-checked:border-blue-600 hover:text-gray-600 dark:peer-checked:text-gray-300 peer-checked:text-gray-600 hover:bg-gray-50 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-900"},[l("picture",null,[l("source",{srcset:o.route("images.350",t.webp_src),type:"image/webp"},null,8,N),l("img",{src:o.route("images.350",t.src),class:"rounded-lg mx-auto h-full object-cover",alt:""},null,8,j)])],8,P)]))),256))]),e.value.images?(s(),r("div",D,[m(w,{"click-handler":n,pagination:e.value.images,modelValue:e.value.currentPage,"onUpdate:modelValue":a[1]||(a[1]=t=>e.value.currentPage=t)},null,8,["pagination","modelValue"])])):g("",!0)])),e.value.isImagesUploadModal?(s(),d(L,{key:2,onCloseModal:i,onOnUpload:v})):g("",!0)]),_:1}))}};export{K as _};