import{f as o}from"./app-957518a1.js";import n from"./Form-8c5d339d.js";import{s as a,v as m,p as r,k as u,l,z as d}from"./app-443dd386.js";import"./vue-i18n.esm-bundler-c84158d1.js";import"./moment-fbc5633a.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./Logo-89534839.js";import"./ItemsTable-95512d92.js";import"./index-10963069.js";const k={__name:"Modal",props:["size","item","statuses","subStatuses","orderStatuses","canDestroy"],emits:["closeModal","submitForm","declineForm","submitItemForm"],setup(t){return(s,e)=>(r(),a(o,{onCloseModal:e[0]||(e[0]=i=>s.$emit("closeModal")),"decline-button":t.canDestroy,onDeclineForm:e[1]||(e[1]=i=>s.$emit("declineForm",t.item.id)),onSubmitForm:e[2]||(e[2]=i=>s.$emit("submitForm")),onClickCancel:e[3]||(e[3]=i=>s.$emit("closeModal")),size:t.size},{title:m(()=>[u(l(t.item.id+(t.item.name?" / "+t.item.name:null)),1)]),content:m(()=>[d(n,{item:t.item,statuses:t.statuses,"sub-statuses":t.subStatuses,"order-statuses":t.orderStatuses},null,8,["item","statuses","sub-statuses","order-statuses"])]),_:1},8,["decline-button","size"]))}};export{k as default};
