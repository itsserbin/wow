import{l as o}from"./app.b9f24222.js";import n from"./Form.62902ff5.js";import{Q as a,K as m,F as u,L as l,A as r,J as d}from"./___vite-browser-external_commonjs-proxy.4f2b06be.js";import"./ItemsTable.6ec5fcee.js";import"./index.02b5b7d6.js";const c={__name:"Modal",props:["size","item","statuses","subStatuses","orderStatuses","canDestroy"],emits:["closeModal","submitForm","declineForm","submitItemForm"],setup(e){return(s,t)=>(u(),a(o,{onCloseModal:t[0]||(t[0]=i=>s.$emit("closeModal")),"decline-button":e.canDestroy,onDeclineForm:t[1]||(t[1]=i=>s.$emit("declineForm",e.item.id)),onSubmitForm:t[2]||(t[2]=i=>s.$emit("submitForm")),onClickCancel:t[3]||(t[3]=i=>s.$emit("closeModal")),size:e.size},{title:m(()=>[l(r(e.item.id+(e.item.name?" / "+e.item.name:null)),1)]),content:m(()=>[d(n,{item:e.item,statuses:e.statuses,"sub-statuses":e.subStatuses,"order-statuses":e.orderStatuses},null,8,["item","statuses","sub-statuses","order-statuses"])]),_:1},8,["decline-button","size"]))}};export{c as default};
