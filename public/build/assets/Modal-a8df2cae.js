import i from"./Form-a57dd812.js";import{A as l,B as s,K as r,y as a,E as d}from"./index-bc3c132c.js";const c={__name:"Modal",props:["item","canDestroy"],emits:["closeModal","submitForm","declineForm"],setup(t){return(o,e)=>{const m=r("modal-component");return a(),l(m,{onCloseModal:e[0]||(e[0]=n=>o.$emit("closeModal")),"decline-button":t.canDestroy,onDeclineForm:e[1]||(e[1]=n=>o.$emit("declineForm",t.item.id)),onSubmitForm:e[2]||(e[2]=n=>o.$emit("submitForm")),onClickCancel:e[3]||(e[3]=n=>o.$emit("closeModal")),size:"large"},{content:s(()=>[d(i,{item:t.item},null,8,["item"])]),_:1},8,["decline-button"])}}};export{c as default};
