import r from"./Form.c325e727.js";import{U as a,R as c,W as d,Q as u,J as p}from"./moment.ad2399f6.js";const $={__name:"Modal",props:["item"],emits:["closeModal","submitForm","declineForm"],setup(t,{emit:m}){const i=t;function l(){m("declineForm",i.item.id)}return(o,e)=>{const s=d("modal-component");return u(),a(s,{onCloseModal:e[0]||(e[0]=n=>o.$emit("closeModal")),"submit-button-text":"Save","cancel-button-text":"Cancel","decline-button-text":"Destroy",onDeclineForm:l,onSubmitForm:e[1]||(e[1]=n=>o.$emit("submitForm")),onClickCancel:e[2]||(e[2]=n=>o.$emit("closeModal")),size:"large"},{content:c(()=>[p(r,{item:t.item},null,8,["item"])]),_:1})}}};export{$ as default};
