import a from"./Form.8618d26b.js";import{m as r,B as d,C as i,M as u,z as c,v as $,x as f,u as p,G as v}from"./index.1726d409.js";const b={__name:"Modal",props:["item","statuses","canDestroy"],emits:["closeModal","submitForm","declineForm"],setup(t,{emit:C}){const o=t,s=r(()=>o.item.id?o.item.id+(o.item.title?" / "+o.item.title:null):null);return(n,e)=>{const l=u("modal-component");return c(),d(l,{onCloseModal:e[0]||(e[0]=m=>n.$emit("closeModal")),onDeclineForm:e[1]||(e[1]=m=>n.$emit("declineForm",t.item.id)),onSubmitForm:e[2]||(e[2]=m=>n.$emit("submitForm")),onClickCancel:e[3]||(e[3]=m=>n.$emit("closeModal")),size:"extralarge","decline-button":t.canDestroy},{title:i(()=>[$(f(p(s)),1)]),content:i(()=>[v(a,{item:t.item,statuses:t.statuses},null,8,["item","statuses"])]),_:1},8,["decline-button"])}}};export{b as default};