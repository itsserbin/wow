import s from"./Form.e64ce1c6.js";import{a0 as r,X as c,V as d,S as p,K as u}from"./___vite-browser-external_commonjs-proxy.86165f86.js";import"./app.ab310418.js";const f={__name:"Modal",props:["image"],emits:["closeModal","submitForm","declineForm"],setup(m,{emit:i}){const t=m;function l(){i("declineForm",t.image.id)}return(o,e)=>{const a=d("modal-component");return p(),r(a,{onCloseModal:e[0]||(e[0]=n=>o.$emit("closeModal")),"submit-button-text":"Save","cancel-button-text":"Cancel","decline-button-text":"Destroy",onDeclineForm:l,onSubmitForm:e[1]||(e[1]=n=>o.$emit("submitForm")),onClickCancel:e[2]||(e[2]=n=>o.$emit("closeModal"))},{content:c(()=>[u(s,{image:t.image},null,8,["image"])]),_:1})}}};export{f as default};