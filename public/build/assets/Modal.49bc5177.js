import r from"./Form.f9751ee0.js";import{p as a,C as d,D as m,N as u,A as c,x as p,y as $,u as f,H as C}from"./index.e4375aa7.js";const D={__name:"Modal",props:["item","canDestroy"],emits:["closeModal","submitForm","declineForm"],setup(t,{emit:F}){const o=t,l=a(()=>o.item.id?o.item.id+(o.item.title?" / "+o.item.title:null):null);return(n,e)=>{const s=u("modal-component");return c(),d(s,{onCloseModal:e[0]||(e[0]=i=>n.$emit("closeModal")),"decline-button":t.canDestroy,onDeclineForm:e[1]||(e[1]=i=>n.$emit("declineForm",t.item.id)),onSubmitForm:e[2]||(e[2]=i=>n.$emit("submitForm")),onClickCancel:e[3]||(e[3]=i=>n.$emit("closeModal")),size:"large"},{title:m(()=>[p($(f(l)),1)]),content:m(()=>[C(r,{item:t.item},null,8,["item"])]),_:1},8,["decline-button"])}}};export{D as default};
