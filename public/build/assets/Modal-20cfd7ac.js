import l from"./Form-4b7fb9cc.js";import{_ as s}from"./Modal-381c1367.js";import{j as a,p as u,D as d,x as n,A as p,B as $,t as f,l as c}from"./app-f55448cf.js";import"./Label-fa7af1d1.js";import"./Input-4fdb1b47.js";import"./Textarea-faf312b0.js";import"./Select-35904355.js";import"./LangTabs-9ee1a6bd.js";import"./Editor-113ec15f.js";const B={__name:"Modal",props:["item","canDestroy"],emits:["closeModal","submitForm","declineForm"],setup(o){const i=o,r=a(()=>{let e=null;return i.item.h1.ua?e=i.item.h1.ua:i.item.h1.ru&&(e=i.item.h1.ru.trim()),i.item.id&&e?`${i.item.id} / ${e}`:null});return(e,t)=>(u(),d(s,{onCloseModal:t[0]||(t[0]=m=>e.$emit("closeModal")),"decline-button":o.canDestroy,onDeclineForm:t[1]||(t[1]=m=>e.$emit("declineForm",o.item.id)),onSubmitForm:t[2]||(t[2]=m=>e.$emit("submitForm")),onClickCancel:t[3]||(t[3]=m=>e.$emit("closeModal")),size:"extralarge"},{title:n(()=>[p($(f(r)),1)]),content:n(()=>[c(l,{item:o.item},null,8,["item"])]),_:1},8,["decline-button"]))}};export{B as default};