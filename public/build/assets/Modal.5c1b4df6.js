import a from"./Form.58f910f4.js";import{V as r,S as c,X as d,R as p,K as u}from"./moment.e1708d83.js";import"./app.663608d0.js";const f={__name:"Modal",props:["image"],emits:["closeModal","submitForm","declineForm"],setup(m,{emit:i}){const t=m;function l(){i("declineForm",t.image.id)}return(o,e)=>{const s=d("modal-component");return p(),r(s,{onCloseModal:e[0]||(e[0]=n=>o.$emit("closeModal")),"submit-button-text":"Save","cancel-button-text":"Cancel","decline-button-text":"Destroy",onDeclineForm:l,onSubmitForm:e[1]||(e[1]=n=>o.$emit("submitForm")),onClickCancel:e[2]||(e[2]=n=>o.$emit("closeModal"))},{content:c(()=>[u(a,{image:t.image},null,8,["image"])]),_:1})}}};export{f as default};
