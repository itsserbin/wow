import{p as x,q as M,B as l,o as s,m as c,w as u,x as m,I as w,g as r,i as n,F as C,s as U,y as I,ae as V,j as g,k as p}from"./vendor.1f6af4a6.js";import{_ as $}from"./UploadImagesModal.1ebd47b3.js";const B=p("\u0412\u0438\u0431\u0456\u0440 \u0437\u043E\u0431\u0440\u0430\u0436\u0435\u043D\u043D\u044F"),F=p(" \u0417\u0430\u0432\u0430\u043D\u0442\u0430\u0436\u0438\u0442\u0438 "),L={key:1},P={class:"grid grid-cols-2 md:grid-cols-5 mt-3"},j={class:"block m-1"},N=["type","value","id"],D=["for"],S=["srcset"],q=["src"],z={key:0,class:"row flex justify-center my-5"},T={__name:"ImagesSelectModal",props:{multiple:{type:Boolean,default:!1}},emits:["closeModal","submitForm"],setup(v){const e=x({images:[],isLoading:!1,isImagesUploadModal:!1,selected:[],currentPage:1});M(()=>{d()});function _(){i(),d()}function i(){e.value.isImagesUploadModal=!e.value.isImagesUploadModal}function d(a){e.value.isLoading=!0,a&&(e.value.currentPage=a),axios.get(route("api.images.index",{page:e.value.currentPage})).then(({data:o})=>{e.value.images=o.result,e.value.isLoading=!1}).catch(o=>{console.log(o),e.value.isLoading=!1})}return(a,o)=>{const f=l("button-component"),b=l("loader-component"),y=l("pagination"),k=l("modal-component");return s(),c(k,{onCloseModal:o[2]||(o[2]=t=>a.$emit("closeModal")),"submit-button-text":"\u0417\u0431\u0435\u0440\u0435\u0433\u0442\u0438","cancel-button-text":"\u0412\u0456\u0434\u043C\u0456\u043D\u0438\u0442\u0438",onSubmitForm:o[3]||(o[3]=t=>a.$emit("submitForm",e.value.selected)),onClickCancel:o[4]||(o[4]=t=>a.$emit("closeModal")),size:"extralarge"},{title:u(()=>[B]),content:u(()=>[m(f,{type:"btn",onClick:w(i,["prevent"])},{default:u(()=>[F]),_:1},8,["onClick"]),e.value.isLoading?(s(),c(b,{key:0})):(s(),r("div",L,[n("div",P,[(s(!0),r(C,null,U(e.value.images.data,t=>(s(),r("div",j,[I(n("input",{type:v.multiple?"checkbox":"radio",name:"images","onUpdate:modelValue":o[0]||(o[0]=h=>e.value.selected=h),value:t,id:t.id,class:"hidden peer"},null,8,N),[[V,e.value.selected]]),n("label",{for:t.id,class:"inline-flex justify-between items-center p-5 w-full text-gray-500 bg-white rounded-lg border-2 border-gray-200 cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 peer-checked:border-blue-600 hover:text-gray-600 dark:peer-checked:text-gray-300 peer-checked:text-gray-600 hover:bg-gray-50 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-900"},[n("picture",null,[n("source",{srcset:a.route("images.350",t.webp_src),type:"image/webp"},null,8,S),n("img",{src:a.route("images.350",t.src),class:"rounded-lg mx-auto h-full object-cover"},null,8,q)])],8,D)]))),256))]),e.value.images?(s(),r("div",z,[m(y,{"click-handler":d,pagination:e.value.images,modelValue:e.value.currentPage,"onUpdate:modelValue":o[1]||(o[1]=t=>e.value.currentPage=t)},null,8,["pagination","modelValue"])])):g("",!0)])),e.value.isImagesUploadModal?(s(),c($,{key:2,onCloseModal:i,onOnUpload:_})):g("",!0)]),_:1})}}};export{T as _};