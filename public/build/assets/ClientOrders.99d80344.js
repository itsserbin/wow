import{ax as i,W as l,U as t,Y as c,S as _,M as m,O as a,Z as o}from"./moment.325cf309.js";const p=["href"],f={__name:"ClientOrders",props:["data","statuses"],emits:["editOrderItem","destroyOrderItem"],setup(s){const n=i([{label:"ID",key:"id"},{label:"\u041A\u0456\u043B\u044C\u043A\u0456\u0441\u0442\u044C",key:"total_count"},{label:"\u0421\u0443\u043C\u0430",key:"total_price"},{label:"\u0421\u0442\u0430\u0442\u0443\u0441",key:"status"},{label:"\u0414\u0430\u0442\u0430 \u0441\u0442\u0432\u043E\u0440\u0435\u043D\u043D\u044F",key:"created_at"}]);return(r,u)=>{const d=c("table-component");return _(),l(d,{isSlotMode:!0,rows:s.data,headings:n},{id:t(({data:e})=>[m("a",{href:r.route("admin.orders.index",{id:e.row.id}),target:"_blank"},a(e.row.id),9,p)]),total_price:t(({data:e})=>[o(a(r.$filters.formatMoney(e.row.total_price)),1)]),status:t(({data:e})=>[o(a(s.statuses[e.row.status]),1)]),created_at:t(({data:e})=>[o(a(r.$filters.dateFormat(e.row.created_at)),1)]),_:1},8,["rows","headings"])}}};export{f as default};