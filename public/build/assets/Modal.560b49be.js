import d from"./Form.7ddcf343.js";import{B as c,V as u,S as i,X as p,R as f,Y as b,O as F,P as $,K as C}from"./moment.e1708d83.js";const x={__name:"Modal",props:["item"],emits:["closeModal","submitForm","declineForm"],setup(n,{emit:l}){const t=n,s=c(()=>t.item.id?t.item.id+(t.item.title?" / "+t.item.title:null):null);function a(){l("declineForm",t.item.id)}return(o,e)=>{const r=p("modal-component");return f(),u(r,{onCloseModal:e[0]||(e[0]=m=>o.$emit("closeModal")),"submit-button-text":"Save","cancel-button-text":"Cancel","decline-button-text":"Destroy",onDeclineForm:a,onSubmitForm:e[1]||(e[1]=m=>o.$emit("submitForm")),onClickCancel:e[2]||(e[2]=m=>o.$emit("closeModal")),size:"medium"},{title:i(()=>[b(F($(s)),1)]),content:i(()=>[C(d,{item:n.item},null,8,["item"])]),_:1})}}};export{x as default};
