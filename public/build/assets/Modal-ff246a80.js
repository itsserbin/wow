import a from"./Form-15c6b052.js";import{s,v as r,D as d,p,z as u}from"./app-443dd386.js";import"./UploadBannersInput-0f9387cf.js";const v={__name:"Modal",props:["item","canDestroy"],emits:["closeModal","submitForm","declineForm","onUploadImage"],setup(n,{emit:i}){function l(e,o,t){i("onUploadImage",e,o,t)}return(e,o)=>{const t=d("modal-component");return p(),s(t,{onCloseModal:o[0]||(o[0]=m=>e.$emit("closeModal")),"decline-button":n.canDestroy,onDeclineForm:o[1]||(o[1]=m=>e.$emit("declineForm",n.item.id)),onSubmitForm:o[2]||(o[2]=m=>e.$emit("submitForm")),onClickCancel:o[3]||(o[3]=m=>e.$emit("closeModal")),size:"large"},{content:r(()=>[u(a,{item:n.item,onOnUploadImage:l},null,8,["item"])]),_:1},8,["decline-button"])}}};export{v as default};