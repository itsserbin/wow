import s from"./Form.03c04a80.js";import{a0 as i,X as l,V as a,S as r,K as d}from"./___vite-browser-external_commonjs-proxy.f18235ae.js";const c={__name:"Modal",props:["item","statuses","canDestroy"],emits:["closeModal","submitForm","declineForm"],setup(t){return(o,e)=>{const m=a("modal-component");return r(),i(m,{onCloseModal:e[0]||(e[0]=n=>o.$emit("closeModal")),onDeclineForm:e[1]||(e[1]=n=>o.$emit("declineForm",t.item.id)),onSubmitForm:e[2]||(e[2]=n=>o.$emit("submitForm")),onClickCancel:e[3]||(e[3]=n=>o.$emit("closeModal")),size:"large","decline-button":t.canDestroy},{content:l(()=>[d(s,{item:t.item,statuses:t.statuses},null,8,["item","statuses"])]),_:1},8,["decline-button"])}}};export{c as default};
