import r from"./Form.bbbd01fc.js";import{x as a,Q as d,K as i,H as u,F as c,L as p,A as $,B as f,J as F}from"./___vite-browser-external_commonjs-proxy.4f2b06be.js";const C={__name:"Modal",props:["item","canDestroy"],emits:["closeModal","submitForm","declineForm"],setup(t){const o=t,l=a(()=>o.item.id?o.item.id+(o.item.title?" / "+o.item.title:null):null);return(n,e)=>{const s=u("modal-component");return c(),d(s,{onCloseModal:e[0]||(e[0]=m=>n.$emit("closeModal")),"decline-button":t.canDestroy,onDeclineForm:e[1]||(e[1]=m=>n.$emit("declineForm",t.item.id)),onSubmitForm:e[2]||(e[2]=m=>n.$emit("submitForm")),onClickCancel:e[3]||(e[3]=m=>n.$emit("closeModal")),size:"medium"},{title:i(()=>[p($(f(l)),1)]),content:i(()=>[F(r,{item:t.item},null,8,["item"])]),_:1},8,["decline-button"])}}};export{C as default};
