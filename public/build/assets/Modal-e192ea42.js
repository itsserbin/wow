import r from"./Form-82b5213e.js";import{l as a,A as d,B as m,K as u,y as c,s as p,v as $,u as f,E as v}from"./index-bc3c132c.js";const C={__name:"Modal",props:["item","canDestroy"],emits:["closeModal","submitForm","declineForm"],setup(t){const o=t,l=a(()=>o.item.id?o.item.id+(o.item.title?" / "+o.item.title:null):null);return(n,e)=>{const s=u("modal-component");return c(),d(s,{onCloseModal:e[0]||(e[0]=i=>n.$emit("closeModal")),"decline-button":t.canDestroy,onDeclineForm:e[1]||(e[1]=i=>n.$emit("declineForm",t.item.id)),onSubmitForm:e[2]||(e[2]=i=>n.$emit("submitForm")),onClickCancel:e[3]||(e[3]=i=>n.$emit("closeModal")),size:"large"},{title:m(()=>[p($(f(l)),1)]),content:m(()=>[v(r,{item:t.item},null,8,["item"])]),_:1},8,["decline-button"])}}};export{C as default};
