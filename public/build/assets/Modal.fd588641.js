import a from"./Form.79c5e309.js";import{Q as r,K as c,H as d,F as p,J as u}from"./___vite-browser-external_commonjs-proxy.4f2b06be.js";import"./app.68928a22.js";const f={__name:"Modal",props:["image"],emits:["closeModal","submitForm","declineForm"],setup(m,{emit:i}){const t=m;function l(){i("declineForm",t.image.id)}return(o,e)=>{const s=d("modal-component");return p(),r(s,{onCloseModal:e[0]||(e[0]=n=>o.$emit("closeModal")),"submit-button-text":"Save","cancel-button-text":"Cancel","decline-button-text":"Destroy",onDeclineForm:l,onSubmitForm:e[1]||(e[1]=n=>o.$emit("submitForm")),onClickCancel:e[2]||(e[2]=n=>o.$emit("closeModal"))},{content:c(()=>[u(a,{image:t.image},null,8,["image"])]),_:1})}}};export{f as default};