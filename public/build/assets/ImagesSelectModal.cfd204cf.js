import{A as M,G as x,B as C,V as p,S as d,R as s,K as c,ab as U,M as i,L as u,U as $,Z as w,a9 as F,F as I,$ as S,bc as V,P as A,Y as f,X as v}from"./moment.e1708d83.js";import{f as L,g as P}from"./app.663608d0.js";import{_ as B}from"./UploadImagesModal.b4685c30.js";const D=f("Select images"),N=f(" Add "),j={class:"grid grid-cols-2 md:grid-cols-5 mt-3"},z={class:"block m-1"},E=["value","id"],T=["for"],G={class:"block"},K={key:0,class:"row flex justify-center my-5"},q={__name:"ImagesSelectModal",emits:["submitForm","closeModal","clickImage","destroyImage"],setup(R,{emit:b}){const e=M({images:{},pagination:{},imagesSelected:[],imageUploadModal:[],isLoading:!1,isActiveUploadModal:!1,currentPage:1});x(()=>r());const _=C(()=>e.value.isActiveUploadModal?B:null);async function r(t){e.value.isLoading=!0,t&&(e.value.currentPage=t),await axios.get(route("api.images.index",{page:e.value.currentPage})).then(a=>{e.value.images=a.data.result,e.value.isLoading=!1}).catch(a=>{console.log(a),e.value.isLoading=!1})}function k(){b("submitForm",e.value.imagesSelected)}function m(){e.value.isActiveUploadModal=!e.value.isActiveUploadModal}function h(t){Array.from(t).forEach(function(a){let n=new FormData;n.append("image",a),axios.post(route("api.images.upload"),n,{headers:{"Content-Type":"multipart/form-data"}}).then(({data:l})=>{e.value.imageUploadModal.push({src:l.result}),r()}).catch(l=>console.log(l))})}function y(){e.value.imageUploadModal=[]}return(t,a)=>{const n=v("button-component"),l=v("paginate");return s(),p(L,{onCloseModal:a[2]||(a[2]=o=>t.$emit("closeModal")),"submit-button-text":"Save","cancel-button-text":"Cancel",onSubmitForm:k,onClickCancel:a[3]||(a[3]=o=>t.$emit("closeModal")),size:"large"},{title:d(()=>[D]),content:d(()=>[c(n,{type:"btn",onClick:U(m,["prevent"])},{default:d(()=>[N]),_:1},8,["onClick"]),i("div",j,[(s(!0),u(I,null,$(e.value.images.data,o=>(s(),u("div",z,[w(i("input",{type:"checkbox","onUpdate:modelValue":a[0]||(a[0]=g=>e.value.imagesSelected=g),value:o,id:o.id,class:"hidden peer"},null,8,E),[[F,e.value.imagesSelected]]),i("label",{for:o.id,class:"inline-flex justify-between items-center p-5 w-full text-gray-500 bg-white rounded-lg border-2 border-gray-200 cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 peer-checked:border-blue-600 hover:text-gray-600 dark:peer-checked:text-gray-300 peer-checked:text-gray-600 hover:bg-gray-50 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700"},[i("div",G,[c(P,{class:"m-1",image:t.route("images.products.350",o.src),alt:o.alt,onClick:g=>t.$emit("clickImage",o)},null,8,["image","alt","onClick"])])],8,T)]))),256))]),e.value.images?(s(),u("div",K,[c(l,{"click-handler":r,pagination:e.value.images,modelValue:e.value.currentPage,"onUpdate:modelValue":a[1]||(a[1]=o=>e.value.currentPage=o)},null,8,["pagination","modelValue"])])):S("",!0),(s(),p(V(A(_)),{onCloseModal:m,onUploadImages:h,onLoadMoreImages:y,images:e.value.imageUploadModal,size:"large"},null,40,["images"]))]),_:1})}}};export{q as default};
