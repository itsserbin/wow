import{k as r}from"./app.1edad9f2.js";import a from"./Form.b320bef9.js";import{g as l,p as d,w as s,o as u,l as $,t as p,u as S,y as v}from"./vendor.2c8aab53.js";import"./vue.m.132a23fc.js";import"./_plugin-vue_export-helper.cdc0426e.js";import"./Logo.6090e12d.js";import"./__commonjsHelpers__.4516dc8a.js";import"./Modal.189d4847.js";import"./Form.72c95260.js";import"./Table.5c46b3dd.js";import"./ClientOrders.5287f3d2.js";import"./Table.47573a89.js";import"./Modal.62cc5960.js";import"./Form.09b568d3.js";const B={__name:"Modal",props:["size","order","statuses","paymentMethods","canDestroy","clientStatuses","invoiceStatuses"],emits:["closeModal","submitForm","declineForm","submitItemForm","onEditClient"],setup(e){const n=e,m=l(()=>n.order.id+" / "+(n.order.client.name?n.order.client.name:"\u0406\u043C\u02BC\u044F \u043D\u0435 \u0432\u043A\u0430\u0437\u0430\u043D\u043E"));return(o,t)=>(u(),d(r,{onCloseModal:t[2]||(t[2]=i=>o.$emit("closeModal")),"decline-button":e.canDestroy,onDeclineForm:t[3]||(t[3]=i=>o.$emit("declineForm",e.order.id)),onSubmitForm:t[4]||(t[4]=i=>o.$emit("submitForm")),onClickCancel:t[5]||(t[5]=i=>o.$emit("closeModal")),size:e.size},{title:s(()=>[$(p(S(m)),1)]),content:s(()=>[v(a,{order:e.order,statuses:e.statuses,paymentMethods:e.paymentMethods,invoiceStatuses:e.invoiceStatuses,clientStatuses:e.clientStatuses,onSubmitItemForm:t[0]||(t[0]=i=>o.$emit("submitItemForm")),onOnEditClient:t[1]||(t[1]=i=>o.$emit("onEditClient"))},null,8,["order","statuses","paymentMethods","invoiceStatuses","clientStatuses"])]),_:1},8,["decline-button","size"]))}};export{B as default};