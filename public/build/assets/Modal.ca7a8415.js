import r from"./Form.ebc0bb9c.js";import{V as c,S as n,X as d,R as b,Y as F,O as f,K as S}from"./moment.e1708d83.js";import"./ItemsTable.81e25c3a.js";const M={__name:"Modal",props:["size","item","statuses","subStatuses"],emits:["closeModal","submitForm","declineForm","submitItemForm"],setup(t,{emit:s}){const i=t;function a(){s("declineForm",i.item.id)}function u(o){s("submitItemForm",o)}return(o,e)=>{const l=d("modal-component");return b(),c(l,{onCloseModal:e[0]||(e[0]=m=>o.$emit("closeModal")),"submit-button-text":"Save","cancel-button-text":"Cancel","decline-button-text":"Destroy",onDeclineForm:a,onSubmitForm:e[1]||(e[1]=m=>o.$emit("submitForm")),onClickCancel:e[2]||(e[2]=m=>o.$emit("closeModal")),size:t.size},{title:n(()=>[F(f(t.item.id+(t.item.name?" / "+t.item.name:null)),1)]),content:n(()=>[S(r,{item:t.item,statuses:t.statuses,"sub-statuses":t.subStatuses,onSubmitItemForm:u},null,8,["item","statuses","sub-statuses"])]),_:1},8,["size"])}}};export{M as default};