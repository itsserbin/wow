import{_ as r}from"./Modal-1e77e375.js";import s from"./Form-eee294bb.js";import{j as a,p as d,D as u,x as n,A as p,B as $,t as f,l as c}from"./app-6d1ec759.js";import"./Label-646a10b8.js";import"./Input-335d7e3d.js";import"./Button-18e692de.js";import"./LangTabs-75b411e7.js";const y={__name:"Modal",props:["item","canDestroy"],emits:["closeModal","submitForm","declineForm"],setup(t){const i=t,l=a(()=>i.item.id?i.item.id+(i.item.title?" / "+i.item.title:null):null);return(o,e)=>(d(),u(r,{onCloseModal:e[0]||(e[0]=m=>o.$emit("closeModal")),"decline-button":t.canDestroy,onDeclineForm:e[1]||(e[1]=m=>o.$emit("declineForm",t.item.id)),onSubmitForm:e[2]||(e[2]=m=>o.$emit("submitForm")),onClickCancel:e[3]||(e[3]=m=>o.$emit("closeModal")),size:"medium"},{title:n(()=>[p($(f(l)),1)]),content:n(()=>[c(s,{item:t.item},null,8,["item"])]),_:1},8,["decline-button"]))}};export{y as default};
