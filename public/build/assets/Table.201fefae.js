import{l as m,m as c}from"./app.1c4fbfa0.js";import{m as y,w as t,o as d,i as s,t as o,k as r,x as k}from"./vendor.baa499d2.js";import"./vue.m.8e70aa70.js";import"./bootstrap.2c4b2a4d.js";import"./__commonjsHelpers__.488ed5c2.js";import"./_plugin-vue_export-helper.cdc0426e.js";import"./Logo.6344e541.js";const p=["onClick"],f=["onClick"],v={__name:"Table",props:["data"],emits:["onDestroy","onEdit"],setup(i){const l=[{label:"ID",key:"id"},{label:"\u0414\u0430\u0442\u0430",key:"date"},{label:"\u041A\u0430\u0442\u0435\u0433\u043E\u0440\u0456\u044F",key:"category"},{label:"\u041A\u0456\u043B\u044C\u043A\u0456\u0441\u0442\u044C",key:"quantity"},{label:"\u0421\u0443\u043C\u0430",key:"sum"},{label:"\u0417\u0430\u0433\u0430\u043B\u043E\u043C",key:"total"},{label:"\u0412\u0456\u0434\u043F\u043E\u0432\u0456\u0434\u0430\u043B\u044C\u043D\u0438\u0439",key:"user"},{label:"\u041A\u043E\u043C\u0435\u043D\u0442\u0430\u0440",key:"comment"},{label:"\u041E\u043D\u043E\u0432\u043B\u0435\u043D\u043E<hr class='my-1'>\u0421\u0442\u0432\u043E\u0440\u0435\u043D\u043E",key:"timestamps"},{label:"#",key:"actions"}];return(a,u)=>(d(),y(m,{headings:l,rows:i.data,isSlotMode:!0},{id:t(({data:e})=>[s("a",{href:"javascript:",onClick:n=>a.$emit("onEdit",e.row.id,e.i)},o(e.row.id),9,p)]),date:t(({data:e})=>[r(o(a.$filters.dateFormat(e.row.date)),1)]),category:t(({data:e})=>[r(o(e.row.category.title),1)]),sum:t(({data:e})=>[r(o(a.$filters.formatMoney(e.row.sum)),1)]),total:t(({data:e})=>[r(o(a.$filters.formatMoney(e.row.total)),1)]),user:t(({data:e})=>[r(o(e.row.user?e.row.user.name:"-"),1)]),actions:t(({data:e})=>[s("a",{href:"javascript:",onClick:n=>a.$emit("onDestroy",e.row.id)},[k(c)],8,f)]),_:1},8,["rows"]))}};export{v as default};