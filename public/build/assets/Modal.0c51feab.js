import a from"./Form.c7575a21.js";import{f as r,m as d,w as i,B as u,o as c,k as $,t as f,u as p,x as F}from"./vendor.693a237b.js";import"./__commonjsHelpers__.488ed5c2.js";const k={__name:"Modal",props:["item","statuses","canDestroy"],emits:["closeModal","submitForm","declineForm"],setup(t,{emit:b}){const o=t,s=r(()=>o.item.id?o.item.id+(o.item.title?" / "+o.item.title:null):null);return(n,e)=>{const l=u("modal-component");return c(),d(l,{onCloseModal:e[0]||(e[0]=m=>n.$emit("closeModal")),onDeclineForm:e[1]||(e[1]=m=>n.$emit("declineForm",t.item.id)),onSubmitForm:e[2]||(e[2]=m=>n.$emit("submitForm")),onClickCancel:e[3]||(e[3]=m=>n.$emit("closeModal")),size:"extralarge","decline-button":t.canDestroy},{title:i(()=>[$(f(p(s)),1)]),content:i(()=>[F(a,{item:t.item,statuses:t.statuses},null,8,["item","statuses"])]),_:1},8,["decline-button"])}}};export{k as default};
