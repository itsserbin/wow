import{k as d}from"./app.8b7021f2.js";import u from"./Form.9a065297.js";import{f as p,m as c,w as n,o as f,k as $,t as g,u as I,x as y}from"./vendor.1f6af4a6.js";import"./vue.m.8e70aa70.js";import"./bootstrap.36b92799.js";import"./__commonjsHelpers__.488ed5c2.js";import"./_plugin-vue_export-helper.cdc0426e.js";import"./Logo.c7a5de92.js";import"./Images.341aaac6.js";import"./swiper-slide.3df0c6ab.js";import"./create-element-if-not-defined.26147364.js";import"./navigation.b481f07e.js";import"./ImagesSelectModal.001668aa.js";import"./UploadImagesModal.1ebd47b3.js";import"./CharacteristicsRepository.ec452529.js";const H={__name:"Modal",props:["item","canDestroy"],emits:["closeModal","submitForm","declineForm","setProductImages","destroyImage"],setup(m,{emit:i}){const o=m,s=p(()=>{let t=null;return o.item.h1.ua?t=o.item.h1.ua:o.item.h1.ru&&(t=o.item.h1.ru.trim()),o.item.id&&t?`${o.item.id} / ${t}`:null}),a=t=>{i("setProductImages",t)},l=t=>{i("destroyImage",t)};return(t,e)=>(f(),c(d,{onCloseModal:e[0]||(e[0]=r=>t.$emit("closeModal")),"decline-button":m.canDestroy,onDeclineForm:e[1]||(e[1]=r=>t.$emit("declineForm",t.product.id)),onSubmitForm:e[2]||(e[2]=r=>t.$emit("submitForm")),onClickCancel:e[3]||(e[3]=r=>t.$emit("closeModal")),size:"extralarge"},{title:n(()=>[$(g(I(s)),1)]),content:n(()=>[y(u,{product:m.item,onSetProductImages:a,onDestroyImage:l},null,8,["product"])]),_:1},8,["decline-button"]))}};export{H as default};