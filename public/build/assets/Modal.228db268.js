import d from"./Form.ce260021.js";import{A as c,U as u,R as m,W as p,Q as f,X as b,M as F,O as $,J as C}from"./_plugin-vue_export-helper.19045d4a.js";const x={__name:"Modal",props:["item"],emits:["closeModal","submitForm","declineForm"],setup(n,{emit:l}){const t=n,s=c(()=>t.item.id?t.item.id+(t.item.title?" / "+t.item.title:null):null);function a(){l("declineForm",t.item.id)}return(o,e)=>{const r=p("modal-component");return f(),u(r,{onCloseModal:e[0]||(e[0]=i=>o.$emit("closeModal")),"submit-button-text":"Save","cancel-button-text":"Cancel","decline-button-text":"Destroy",onDeclineForm:a,onSubmitForm:e[1]||(e[1]=i=>o.$emit("submitForm")),onClickCancel:e[2]||(e[2]=i=>o.$emit("closeModal")),size:"large"},{title:m(()=>[b(F($(s)),1)]),content:m(()=>[C(d,{item:n.item},null,8,["item"])]),_:1})}}};export{x as default};
