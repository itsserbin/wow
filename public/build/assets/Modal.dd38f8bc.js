import s from"./Form.0d1d06bb.js";import{m as a,w as p,B as c,o as d,x as u}from"./vendor.693a237b.js";import"./app.c998355c.js";import"./vue.m.8e70aa70.js";import"./bootstrap.8b9397d4.js";import"./__commonjsHelpers__.488ed5c2.js";import"./_plugin-vue_export-helper.cdc0426e.js";import"./lazyload.6866379a.js";import"./Logo.c403545e.js";const k={__name:"Modal",props:["image"],emits:["closeModal","submitForm","declineForm"],setup(n,{emit:i}){const t=n;function r(){i("declineForm",t.image.id)}return(e,o)=>{const l=c("modal-component");return d(),a(l,{onCloseModal:o[0]||(o[0]=m=>e.$emit("closeModal")),"submit-button-text":"Save","cancel-button-text":"Cancel","decline-button-text":"Destroy",onDeclineForm:r,onSubmitForm:o[1]||(o[1]=m=>e.$emit("submitForm")),onClickCancel:o[2]||(o[2]=m=>e.$emit("closeModal"))},{content:p(()=>[u(s,{image:t.image},null,8,["image"])]),_:1})}}};export{k as default};
