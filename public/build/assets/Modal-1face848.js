import{_ as p}from"./Modal-e072f216.js";import d from"./Form-93012e50.js";import{z as u,l as c,s as $,y as n,w as f,v as g,x as y,n as I}from"./index-a01126e2.js";import"./Images-af80dfc1.js";import"./ImageCard-674c7c55.js";import"./XCircle-3c75bba8.js";import"./swiper-slide-9942daa4.js";import"./navigation-ba233cbe.js";import"./ImagesSelectModal-c14951e7.js";import"./Paginate-01527c78.js";import"./Button-dd1aed97.js";import"./Loader-ccf6e4ba.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./UploadImagesModal-452117b9.js";import"./UploadImagesInput-5c733d39.js";import"./Label-20131f4c.js";import"./Textarea-cb91500a.js";import"./Input-39294dfa.js";import"./Select-c098c0c0.js";import"./LangTabs-9cff8ebb.js";import"./CharacteristicsRepository-3e7466ab.js";import"./Multiselect-a4b04608.js";import"./Editor-fb472374.js";const K={__name:"Modal",props:["item","canDestroy"],emits:["closeModal","submitForm","declineForm","setProductImages","destroyImage"],setup(m,{emit:i}){const e=m,s=u(()=>{let t=null;return e.item.h1.ua?t=e.item.h1.ua:e.item.h1.ru&&(t=e.item.h1.ru.trim()),e.item.id&&t?`${e.item.id} / ${t}`:null}),a=t=>{i("setProductImages",t)},l=t=>{i("destroyImage",t)};return(t,o)=>(c(),$(p,{onCloseModal:o[0]||(o[0]=r=>t.$emit("closeModal")),"decline-button":m.canDestroy,onDeclineForm:o[1]||(o[1]=r=>t.$emit("declineForm",t.product.id)),onSubmitForm:o[2]||(o[2]=r=>t.$emit("submitForm")),onClickCancel:o[3]||(o[3]=r=>t.$emit("closeModal")),size:"extralarge"},{title:n(()=>[f(g(y(s)),1)]),content:n(()=>[I(d,{product:m.item,onSetProductImages:a,onDestroyImage:l},null,8,["product"])]),_:1},8,["decline-button"]))}};export{K as default};
