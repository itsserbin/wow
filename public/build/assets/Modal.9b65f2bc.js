import i from"./Form.39e3548f.js";import{m as l,w as r,B as s,o as a,x as d}from"./vendor.693a237b.js";import"./__commonjsHelpers__.488ed5c2.js";const c={__name:"Modal",props:["item","canDestroy"],emits:["closeModal","submitForm","declineForm"],setup(t){return(o,e)=>{const m=s("modal-component");return a(),l(m,{onCloseModal:e[0]||(e[0]=n=>o.$emit("closeModal")),"decline-button":t.canDestroy,onDeclineForm:e[1]||(e[1]=n=>o.$emit("declineForm",t.item.id)),onSubmitForm:e[2]||(e[2]=n=>o.$emit("submitForm")),onClickCancel:e[3]||(e[3]=n=>o.$emit("closeModal")),size:"large"},{content:r(()=>[d(i,{item:t.item},null,8,["item"])]),_:1},8,["decline-button"])}}};export{c as default};
