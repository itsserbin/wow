import{_ as s}from"./Modal-e072f216.js";import d from"./Form-a0699878.js";import{z as c,l as p,s as u,y as n,w as f,v as $,x as b,n as F}from"./index-a01126e2.js";import"./Label-20131f4c.js";import"./Input-39294dfa.js";import"./Textarea-cb91500a.js";import"./Select-c098c0c0.js";import"./Datepicker-1dfd351e.js";import"./isDark-c828c264.js";import"./vue-datepicker-3bdc29fb.js";import"./index-2cbe9ca3.js";import"./index-7a810988.js";const B={__name:"Modal",props:["item","modalAction"],emits:["closeModal","submitForm","declineForm"],setup(o,{emit:l}){const e=o,r=c(()=>e.item.id?e.item.id+(e.item.title?" / "+e.item.title:null):null);function a(){l("declineForm",e.item.id)}return(i,t)=>(p(),u(s,{onCloseModal:t[0]||(t[0]=m=>i.$emit("closeModal")),"submit-button-text":"Save","cancel-button-text":"Cancel","decline-button-text":"Destroy",onDeclineForm:a,onSubmitForm:t[1]||(t[1]=m=>i.$emit("submitForm")),onClickCancel:t[2]||(t[2]=m=>i.$emit("closeModal")),size:"large"},{title:n(()=>[f($(b(r)),1)]),content:n(()=>[F(d,{item:o.item,modalAction:o.modalAction},null,8,["item","modalAction"])]),_:1}))}};export{B as default};