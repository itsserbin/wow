import r from"./Form.ecfe595e.js";import{l as s}from"./app.68928a22.js";import{x as a,Q as u,K as n,F as d,L as $,A as f,B as c,J as F}from"./___vite-browser-external_commonjs-proxy.4f2b06be.js";const v={__name:"Modal",props:["item","canDestroy"],emits:["closeModal","submitForm","declineForm"],setup(o){const i=o,l=a(()=>{let e=null;return i.item.h1.ua?e=i.item.h1.ua:i.item.h1.ru&&(e=i.item.h1.ru.trim()),i.item.id&&e?`${i.item.id} / ${e}`:null});return(e,t)=>(d(),u(s,{onCloseModal:t[0]||(t[0]=m=>e.$emit("closeModal")),"decline-button":o.canDestroy,onDeclineForm:t[1]||(t[1]=m=>e.$emit("declineForm",o.item.id)),onSubmitForm:t[2]||(t[2]=m=>e.$emit("submitForm")),onClickCancel:t[3]||(t[3]=m=>e.$emit("closeModal")),size:"extralarge"},{title:n(()=>[$(f(c(l)),1)]),content:n(()=>[F(r,{item:o.item},null,8,["item"])]),_:1},8,["decline-button"]))}};export{v as default};