import r from"./Form.4ffe1358.js";import{m as a,B as d,C as i,M as u,z as c,v as p,x as $,u as f,G as v}from"./index.1726d409.js";const M={__name:"Modal",props:["item","canDestroy"],emits:["closeModal","submitForm","declineForm"],setup(t){const o=t,l=a(()=>o.item.id?o.item.id+(o.item.title?" / "+o.item.title:null):null);return(n,e)=>{const s=u("modal-component");return c(),d(s,{onCloseModal:e[0]||(e[0]=m=>n.$emit("closeModal")),"decline-button":t.canDestroy,onDeclineForm:e[1]||(e[1]=m=>n.$emit("declineForm",t.item.id)),onSubmitForm:e[2]||(e[2]=m=>n.$emit("submitForm")),onClickCancel:e[3]||(e[3]=m=>n.$emit("closeModal")),size:"large"},{title:i(()=>[p($(f(l)),1)]),content:i(()=>[v(r,{item:t.item},null,8,["item"])]),_:1},8,["decline-button"])}}};export{M as default};
