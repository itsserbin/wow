import{_ as r}from"./Modal-e072f216.js";import s from"./Form-bd9bb929.js";import{z as a,l as d,s as u,y as n,w as p,v as $,x as f,n as c}from"./index-a01126e2.js";import"./Label-20131f4c.js";import"./Input-39294dfa.js";import"./Button-dd1aed97.js";import"./LangTabs-9cff8ebb.js";const k={__name:"Modal",props:["item","canDestroy"],emits:["closeModal","submitForm","declineForm"],setup(t){const i=t,l=a(()=>i.item.id?i.item.id+(i.item.title?" / "+i.item.title:null):null);return(o,e)=>(d(),u(r,{onCloseModal:e[0]||(e[0]=m=>o.$emit("closeModal")),"decline-button":t.canDestroy,onDeclineForm:e[1]||(e[1]=m=>o.$emit("declineForm",t.item.id)),onSubmitForm:e[2]||(e[2]=m=>o.$emit("submitForm")),onClickCancel:e[3]||(e[3]=m=>o.$emit("closeModal")),size:"medium"},{title:n(()=>[p($(f(l)),1)]),content:n(()=>[c(s,{item:t.item},null,8,["item"])]),_:1},8,["decline-button"]))}};export{k as default};