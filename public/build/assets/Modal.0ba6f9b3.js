import a from"./Form.8f0dfe8f.js";import{z as r,a0 as d,W as m,$ as u,S as c,X as $,O as f,P as p,K as F}from"./___vite-browser-external_commonjs-proxy.bd54111c.js";const M={__name:"Modal",props:["item","statuses","canDestroy"],emits:["closeModal","submitForm","declineForm"],setup(t,{emit:b}){const o=t,s=r(()=>o.item.id?o.item.id+(o.item.title?" / "+o.item.title:null):null);return(n,e)=>{const l=u("modal-component");return c(),d(l,{onCloseModal:e[0]||(e[0]=i=>n.$emit("closeModal")),onDeclineForm:e[1]||(e[1]=i=>n.$emit("declineForm",t.item.id)),onSubmitForm:e[2]||(e[2]=i=>n.$emit("submitForm")),onClickCancel:e[3]||(e[3]=i=>n.$emit("closeModal")),size:"extralarge","decline-button":t.canDestroy},{title:m(()=>[$(f(p(s)),1)]),content:m(()=>[F(a,{item:t.item,statuses:t.statuses},null,8,["item","statuses"])]),_:1},8,["decline-button"])}}};export{M as default};
