import i from"./Form.addf413a.js";import{C as l,D as s,N as r,A as a,H as d}from"./index.e4375aa7.js";const c={__name:"Modal",props:["item","canDestroy"],emits:["closeModal","submitForm","declineForm"],setup(t){return(o,e)=>{const m=r("modal-component");return a(),l(m,{onCloseModal:e[0]||(e[0]=n=>o.$emit("closeModal")),"decline-button":t.canDestroy,onDeclineForm:e[1]||(e[1]=n=>o.$emit("declineForm",t.item.id)),onSubmitForm:e[2]||(e[2]=n=>o.$emit("submitForm")),onClickCancel:e[3]||(e[3]=n=>o.$emit("closeModal")),size:"large"},{content:s(()=>[d(i,{item:t.item},null,8,["item"])]),_:1},8,["decline-button"])}}};export{c as default};