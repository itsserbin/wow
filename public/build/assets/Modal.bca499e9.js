import a from"./Form.ee0011df.js";import{W as r,U as s,Y as d,S as p,K as u}from"./___vite-browser-external_commonjs-proxy.2503c6f8.js";import"./UploadBannersInput.29ff97c2.js";const F={__name:"Modal",props:["item","canDestroy"],emits:["closeModal","submitForm","declineForm","onUploadImage"],setup(n,{emit:i}){function l(e,o,t){i("onUploadImage",e,o,t)}return(e,o)=>{const t=d("modal-component");return p(),r(t,{onCloseModal:o[0]||(o[0]=m=>e.$emit("closeModal")),"decline-button":n.canDestroy,onDeclineForm:o[1]||(o[1]=m=>e.$emit("declineForm",n.item.id)),onSubmitForm:o[2]||(o[2]=m=>e.$emit("submitForm")),onClickCancel:o[3]||(o[3]=m=>e.$emit("closeModal")),size:"large"},{content:s(()=>[u(a,{item:n.item,onOnUploadImage:l},null,8,["item"])]),_:1},8,["decline-button"])}}};export{F as default};
