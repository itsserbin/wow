import m from"./Form-dd0fd8b3.js";import{s as i,v as l,D as a,p as r,z as d}from"./app-da11968c.js";const c={__name:"Modal",props:["item","statuses","canDestroy"],emits:["closeModal","submitForm","declineForm"],setup(t){return(o,e)=>{const s=a("modal-component");return r(),i(s,{onCloseModal:e[0]||(e[0]=n=>o.$emit("closeModal")),onDeclineForm:e[1]||(e[1]=n=>o.$emit("declineForm",t.item.id)),onSubmitForm:e[2]||(e[2]=n=>o.$emit("submitForm")),onClickCancel:e[3]||(e[3]=n=>o.$emit("closeModal")),size:"extralarge","decline-button":t.canDestroy},{content:l(()=>[d(m,{item:t.item,statuses:t.statuses},null,8,["item","statuses"])]),_:1},8,["decline-button"])}}};export{c as default};
