import l from"./Form-67ffa991.js";import{_ as s}from"./Modal-e072f216.js";import{l as a,s as p,y as u,n as c}from"./index-a01126e2.js";import"./Card-d700085f.js";import"./Button-dd1aed97.js";import"./Label-20131f4c.js";import"./Input-39294dfa.js";const M={__name:"Modal",props:["image"],emits:["closeModal","submitForm","declineForm"],setup(i,{emit:n}){const t=i;function r(){n("declineForm",t.image.id)}return(o,e)=>(a(),p(s,{onCloseModal:e[0]||(e[0]=m=>o.$emit("closeModal")),"submit-button-text":"Save","cancel-button-text":"Cancel","decline-button-text":"Destroy",onDeclineForm:r,onSubmitForm:e[1]||(e[1]=m=>o.$emit("submitForm")),onClickCancel:e[2]||(e[2]=m=>o.$emit("closeModal"))},{content:u(()=>[c(l,{image:t.image},null,8,["image"])]),_:1}))}};export{M as default};