import s from"./Form.0f59278a.js";import{U as d,R as c,V as p,Q as u,J as b}from"./_plugin-vue_export-helper.4dd23699.js";import"./UploadBannersInput.5ed88a68.js";const C={__name:"Modal",props:["item"],emits:["closeModal","submitForm","declineForm","onUploadImage"],setup(n,{emit:m}){const i=n;function a(){m("declineForm",i.item.id)}function r(e,o,t){m("onUploadImage",e,o,t)}return(e,o)=>{const t=p("modal-component");return u(),d(t,{onCloseModal:o[0]||(o[0]=l=>e.$emit("closeModal")),"submit-button-text":"Save","cancel-button-text":"Cancel","decline-button-text":"Destroy",onDeclineForm:a,onSubmitForm:o[1]||(o[1]=l=>e.$emit("submitForm")),onClickCancel:o[2]||(o[2]=l=>e.$emit("closeModal")),size:"large"},{content:c(()=>[b(s,{item:n.item,onOnUploadImage:r},null,8,["item"])]),_:1})}}};export{C as default};
