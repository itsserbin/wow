import r from"./Form.04ae9202.js";import{p as a,C as d,D as i,N as u,A as c,x as p,y as $,u as f,H as C}from"./index.e4375aa7.js";const v={__name:"Modal",props:["item","canDestroy"],emits:["closeModal","submitForm","declineForm"],setup(t){const o=t,l=a(()=>o.item.id?o.item.id+(o.item.title?" / "+o.item.title:null):null);return(n,e)=>{const s=u("modal-component");return c(),d(s,{onCloseModal:e[0]||(e[0]=m=>n.$emit("closeModal")),"decline-button":t.canDestroy,onDeclineForm:e[1]||(e[1]=m=>n.$emit("declineForm",t.item.id)),onSubmitForm:e[2]||(e[2]=m=>n.$emit("submitForm")),onClickCancel:e[3]||(e[3]=m=>n.$emit("closeModal")),size:"medium"},{title:i(()=>[p($(f(l)),1)]),content:i(()=>[C(r,{item:t.item},null,8,["item"])]),_:1},8,["decline-button"])}}};export{v as default};
