import{k as o}from"./app.c998355c.js";import n from"./Form.e0239d03.js";import{m as a,w as m,o as r,k as u,t as l,x as d}from"./vendor.693a237b.js";import"./vue.m.8e70aa70.js";import"./bootstrap.8b9397d4.js";import"./__commonjsHelpers__.488ed5c2.js";import"./_plugin-vue_export-helper.cdc0426e.js";import"./lazyload.6866379a.js";import"./Logo.c403545e.js";import"./ItemsTable.c7117300.js";import"./index.02b5b7d6.js";const D={__name:"Modal",props:["size","item","statuses","subStatuses","orderStatuses","canDestroy"],emits:["closeModal","submitForm","declineForm","submitItemForm"],setup(t){return(s,e)=>(r(),a(o,{onCloseModal:e[0]||(e[0]=i=>s.$emit("closeModal")),"decline-button":t.canDestroy,onDeclineForm:e[1]||(e[1]=i=>s.$emit("declineForm",t.item.id)),onSubmitForm:e[2]||(e[2]=i=>s.$emit("submitForm")),onClickCancel:e[3]||(e[3]=i=>s.$emit("closeModal")),size:t.size},{title:m(()=>[u(l(t.item.id+(t.item.name?" / "+t.item.name:null)),1)]),content:m(()=>[d(n,{item:t.item,statuses:t.statuses,"sub-statuses":t.subStatuses,"order-statuses":t.orderStatuses},null,8,["item","statuses","sub-statuses","order-statuses"])]),_:1},8,["decline-button","size"]))}};export{D as default};
