import{y as M,C,V as l,S as s,a0 as c,X as u,K as m,ad as w,L as r,M as n,F as U,Z as V,a3 as g,bO as L,P as I,a8 as $,_ as p,Y as v}from"./___vite-browser-external_commonjs-proxy.45af3daa.js";import{_ as F}from"./UploadImagesModal.ec27a8e7.js";const P=v("\u0412\u0438\u0431\u0456\u0440 \u0437\u043E\u0431\u0440\u0430\u0436\u0435\u043D\u043D\u044F"),B=v(" \u0417\u0430\u0432\u0430\u043D\u0442\u0430\u0436\u0438\u0442\u0438 "),N={key:1},j={class:"grid grid-cols-2 md:grid-cols-5 mt-3"},S={class:"block m-1"},z=["type","value","id"],D=["for"],O=["srcset"],E=["data-src"],K={key:0,class:"row flex justify-center my-5"},Y={__name:"ImagesSelectModal",props:{multiple:{type:Boolean,default:!1}},emits:["closeModal","submitForm"],setup(_){const e=M({images:[],isLoading:!1,isImagesUploadModal:!1,selected:[],currentPage:1});C(()=>{d()});function f(){i(),d()}function i(){e.value.isImagesUploadModal=!e.value.isImagesUploadModal}function d(a){e.value.isLoading=!0,a&&(e.value.currentPage=a),axios.get(route("api.images.index",{page:e.value.currentPage})).then(({data:o})=>{e.value.images=o.result,e.value.isLoading=!1}).catch(o=>{console.log(o),e.value.isLoading=!1})}return(a,o)=>{const b=l("button-component"),y=l("loader-component"),k=l("pagination"),h=l("modal-component");return s(),c(h,{onCloseModal:o[2]||(o[2]=t=>a.$emit("closeModal")),"submit-button-text":"\u0417\u0431\u0435\u0440\u0435\u0433\u0442\u0438","cancel-button-text":"\u0412\u0456\u0434\u043C\u0456\u043D\u0438\u0442\u0438",onSubmitForm:o[3]||(o[3]=t=>a.$emit("submitForm",e.value.selected)),onClickCancel:o[4]||(o[4]=t=>a.$emit("closeModal")),size:"extralarge"},{title:u(()=>[P]),content:u(()=>[m(b,{type:"btn",onClick:w(i,["prevent"])},{default:u(()=>[B]),_:1},8,["onClick"]),e.value.isLoading?(s(),c(y,{key:0})):(s(),r("div",N,[n("div",j,[(s(!0),r(U,null,V(e.value.images.data,t=>(s(),r("div",S,[g(n("input",{type:_.multiple?"checkbox":"radio",name:"images","onUpdate:modelValue":o[0]||(o[0]=x=>e.value.selected=x),value:t,id:t.id,class:"hidden peer"},null,8,z),[[L,e.value.selected]]),n("label",{for:t.id,class:"inline-flex justify-between items-center p-5 w-full text-gray-500 bg-white rounded-lg border-2 border-gray-200 cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 peer-checked:border-blue-600 hover:text-gray-600 dark:peer-checked:text-gray-300 peer-checked:text-gray-600 hover:bg-gray-50 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-900"},[n("picture",null,[n("source",{srcset:a.route("images.350",t.webp_src),type:"image/webp"},null,8,O),g(n("img",{"data-src":a.route("images.350",t.src),class:"rounded-lg mx-auto h-full object-cover"},null,8,E),[[I($)]])])],8,D)]))),256))]),e.value.images?(s(),r("div",K,[m(k,{"click-handler":d,pagination:e.value.images,modelValue:e.value.currentPage,"onUpdate:modelValue":o[1]||(o[1]=t=>e.value.currentPage=t)},null,8,["pagination","modelValue"])])):p("",!0)])),e.value.isImagesUploadModal?(s(),c(F,{key:2,onCloseModal:i,onOnUpload:f})):p("",!0)]),_:1})}}};export{Y as _};
