import{f as d}from"./app-739a5adb.js";import u from"./Form-f030ef77.js";import{f as p,s as c,v as s,p as f,k as $,l as g,u as I,z as y}from"./app-85fc3642.js";import"./vue-i18n.esm-bundler-b26da7fc.js";import"./moment-fbc5633a.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./Logo-39ed68e3.js";import"./Images-7286f4c2.js";import"./swiper-slide-1a20efe7.js";import"./create-element-if-not-defined-cfc4b805.js";import"./navigation-e27e8b73.js";import"./ImagesSelectModal-13ab26b5.js";import"./UploadImagesModal-e5294c53.js";import"./CharacteristicsRepository-3e7466ab.js";const H={__name:"Modal",props:["item","canDestroy"],emits:["closeModal","submitForm","declineForm","setProductImages","destroyImage"],setup(m,{emit:i}){const o=m,n=p(()=>{let t=null;return o.item.h1.ua?t=o.item.h1.ua:o.item.h1.ru&&(t=o.item.h1.ru.trim()),o.item.id&&t?`${o.item.id} / ${t}`:null}),a=t=>{i("setProductImages",t)},l=t=>{i("destroyImage",t)};return(t,e)=>(f(),c(d,{onCloseModal:e[0]||(e[0]=r=>t.$emit("closeModal")),"decline-button":m.canDestroy,onDeclineForm:e[1]||(e[1]=r=>t.$emit("declineForm",t.product.id)),onSubmitForm:e[2]||(e[2]=r=>t.$emit("submitForm")),onClickCancel:e[3]||(e[3]=r=>t.$emit("closeModal")),size:"extralarge"},{title:s(()=>[$(g(I(n)),1)]),content:s(()=>[y(u,{product:m.item,onSetProductImages:a,onDestroyImage:l},null,8,["product"])]),_:1},8,["decline-button"]))}};export{H as default};