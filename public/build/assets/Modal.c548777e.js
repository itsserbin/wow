import s from"./Form.6405cbc0.js";import{B as a,C as p,M as c,z as d,G as u}from"./index.1726d409.js";import"./app.2d605236.js";import"./moment.9709ab41.js";import"./_plugin-vue_export-helper.cdc0426e.js";import"./lazyload.6866379a.js";import"./Logo.9264c4eb.js";const v={__name:"Modal",props:["image"],emits:["closeModal","submitForm","declineForm"],setup(m,{emit:i}){const t=m;function r(){i("declineForm",t.image.id)}return(e,o)=>{const l=c("modal-component");return d(),a(l,{onCloseModal:o[0]||(o[0]=n=>e.$emit("closeModal")),"submit-button-text":"Save","cancel-button-text":"Cancel","decline-button-text":"Destroy",onDeclineForm:r,onSubmitForm:o[1]||(o[1]=n=>e.$emit("submitForm")),onClickCancel:o[2]||(o[2]=n=>e.$emit("closeModal"))},{content:p(()=>[u(s,{image:t.image},null,8,["image"])]),_:1})}}};export{v as default};