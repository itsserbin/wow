import{l as d}from"./app.8b7021f2.js";import{m as l,w as e,o as m,i as c,t as r,k as o}from"./vendor.1f6af4a6.js";import"./vue.m.8e70aa70.js";import"./bootstrap.36b92799.js";import"./__commonjsHelpers__.488ed5c2.js";import"./_plugin-vue_export-helper.cdc0426e.js";import"./Logo.c7a5de92.js";const n=["href"],b={__name:"ClientOrders",props:["data","statuses"],emits:["editOrderItem","destroyOrderItem"],setup(s){const i=[{label:"ID",key:"id"},{label:"\u041A\u0456\u043B\u044C\u043A\u0456\u0441\u0442\u044C",key:"total_count"},{label:"\u0421\u0443\u043C\u0430",key:"total_price"},{label:"\u0421\u0442\u0430\u0442\u0443\u0441",key:"status"},{label:"\u0414\u0430\u0442\u0430 \u0441\u0442\u0432\u043E\u0440\u0435\u043D\u043D\u044F",key:"created_at"}];return(a,p)=>(m(),l(d,{isSlotMode:!0,rows:s.data,headings:i},{id:e(({data:t})=>[c("a",{href:a.route("admin.crm.orders",{id:t.row.id}),target:"_blank"},r(t.row.id),9,n)]),total_price:e(({data:t})=>[o(r(a.$filters.formatMoney(t.row.total_price)),1)]),status:e(({data:t})=>[o(r(s.statuses[t.row.status]),1)]),created_at:e(({data:t})=>[o(r(a.$filters.dateFormat(t.row.created_at)),1)]),_:1},8,["rows"]))}};export{b as default};
