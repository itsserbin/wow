import a from"./Form-d0c05d85.js";import{l as r,A as d,B as i,K as u,y as c,s as $,v as f,u as p,E as v}from"./index-bc3c132c.js";const M={__name:"Modal",props:["item","statuses","canDestroy"],emits:["closeModal","submitForm","declineForm"],setup(t,{emit:F}){const o=t,m=r(()=>o.item.id?o.item.id+(o.item.title?" / "+o.item.title:null):null);return(n,e)=>{const l=u("modal-component");return c(),d(l,{onCloseModal:e[0]||(e[0]=s=>n.$emit("closeModal")),onDeclineForm:e[1]||(e[1]=s=>n.$emit("declineForm",t.item.id)),onSubmitForm:e[2]||(e[2]=s=>n.$emit("submitForm")),onClickCancel:e[3]||(e[3]=s=>n.$emit("closeModal")),size:"extralarge","decline-button":t.canDestroy},{title:i(()=>[$(f(p(m)),1)]),content:i(()=>[v(a,{item:t.item,statuses:t.statuses},null,8,["item","statuses"])]),_:1},8,["decline-button"])}}};export{M as default};
