import r from"./Form.a4f31f80.js";import{f as a,m as d,w as i,B as u,o as c,k as p,t as $,u as f,x as F}from"./vendor.693a237b.js";import"./__commonjsHelpers__.488ed5c2.js";const M={__name:"Modal",props:["item","canDestroy"],emits:["closeModal","submitForm","declineForm"],setup(t){const o=t,l=a(()=>o.item.id?o.item.id+(o.item.title?" / "+o.item.title:null):null);return(n,e)=>{const s=u("modal-component");return c(),d(s,{onCloseModal:e[0]||(e[0]=m=>n.$emit("closeModal")),"decline-button":t.canDestroy,onDeclineForm:e[1]||(e[1]=m=>n.$emit("declineForm",t.item.id)),onSubmitForm:e[2]||(e[2]=m=>n.$emit("submitForm")),onClickCancel:e[3]||(e[3]=m=>n.$emit("closeModal")),size:"medium"},{title:i(()=>[p($(f(l)),1)]),content:i(()=>[F(r,{item:t.item},null,8,["item"])]),_:1},8,["decline-button"])}}};export{M as default};
