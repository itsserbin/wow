import{_ as i}from"./Modal-1e77e375.js";import n from"./Form-99c9512f.js";import{p as r,D as s,x as l,l as a}from"./app-6d1ec759.js";import"./Label-646a10b8.js";import"./Input-335d7e3d.js";import"./Multiselect-55904e29.js";import"./_plugin-vue_export-helper-c27b6911.js";const c={__name:"Modal",props:["item"],emits:["closeModal","submitItemForm"],setup(m){return(o,t)=>(r(),s(i,{onCloseModal:t[0]||(t[0]=e=>o.$emit("closeModal")),"submit-button-text":"Зберегти","cancel-button-text":"Відмінити",onSubmitForm:t[1]||(t[1]=e=>o.$emit("submitItemForm")),onClickCancel:t[2]||(t[2]=e=>o.$emit("closeModal"))},{content:l(()=>[a(n,{item:m.item},null,8,["item"])]),_:1}))}};export{c as default};
