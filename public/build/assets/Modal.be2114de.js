import{k as r}from"./app.c998355c.js";import a from"./Form.711ca511.js";import{f as l,m as d,w as s,o as u,k as $,t as p,u as S,x as v}from"./vendor.693a237b.js";import"./vue.m.8e70aa70.js";import"./bootstrap.8b9397d4.js";import"./__commonjsHelpers__.488ed5c2.js";import"./_plugin-vue_export-helper.cdc0426e.js";import"./lazyload.6866379a.js";import"./Logo.c403545e.js";import"./Modal.b75da28d.js";import"./Form.a6b4aa00.js";import"./Table.22b87c99.js";import"./ClientOrders.3bda4ebe.js";import"./Table.44e1bade.js";import"./Modal.4f753e14.js";import"./Form.3a3bb5da.js";const g={__name:"Modal",props:["size","order","statuses","paymentMethods","canDestroy","clientStatuses","invoiceStatuses"],emits:["closeModal","submitForm","declineForm","submitItemForm","onEditClient"],setup(e){const n=e,m=l(()=>n.order.id+" / "+(n.order.client.name?n.order.client.name:"\u0406\u043C\u02BC\u044F \u043D\u0435 \u0432\u043A\u0430\u0437\u0430\u043D\u043E"));return(o,t)=>(u(),d(r,{onCloseModal:t[2]||(t[2]=i=>o.$emit("closeModal")),"decline-button":e.canDestroy,onDeclineForm:t[3]||(t[3]=i=>o.$emit("declineForm",e.order.id)),onSubmitForm:t[4]||(t[4]=i=>o.$emit("submitForm")),onClickCancel:t[5]||(t[5]=i=>o.$emit("closeModal")),size:e.size},{title:s(()=>[$(p(S(m)),1)]),content:s(()=>[v(a,{order:e.order,statuses:e.statuses,paymentMethods:e.paymentMethods,invoiceStatuses:e.invoiceStatuses,clientStatuses:e.clientStatuses,onSubmitItemForm:t[0]||(t[0]=i=>o.$emit("submitItemForm")),onOnEditClient:t[1]||(t[1]=i=>o.$emit("onEditClient"))},null,8,["order","statuses","paymentMethods","invoiceStatuses","clientStatuses"])]),_:1},8,["decline-button","size"]))}};export{g as default};
