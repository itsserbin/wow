import a from"./Form.f112c18d.js";import{m as r,w as s,B as d,o as p,x as u}from"./vendor.1f6af4a6.js";import"./UploadBannersInput.b4e8e782.js";import"./__commonjsHelpers__.488ed5c2.js";const b={__name:"Modal",props:["item","canDestroy"],emits:["closeModal","submitForm","declineForm","onUploadImage"],setup(n,{emit:i}){function l(e,o,t){i("onUploadImage",e,o,t)}return(e,o)=>{const t=d("modal-component");return p(),r(t,{onCloseModal:o[0]||(o[0]=m=>e.$emit("closeModal")),"decline-button":n.canDestroy,onDeclineForm:o[1]||(o[1]=m=>e.$emit("declineForm",n.item.id)),onSubmitForm:o[2]||(o[2]=m=>e.$emit("submitForm")),onClickCancel:o[3]||(o[3]=m=>e.$emit("closeModal")),size:"large"},{content:s(()=>[u(a,{item:n.item,onOnUploadImage:l},null,8,["item"])]),_:1},8,["decline-button"])}}};export{b as default};