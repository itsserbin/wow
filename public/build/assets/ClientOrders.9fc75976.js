import{ay as d,a0 as i,X as t,V as c,S as m,M as _,O as a,Y as o}from"./___vite-browser-external_commonjs-proxy.6a4e71ef.js";const p=["href"],b={__name:"ClientOrders",props:["data","statuses"],emits:["editOrderItem","destroyOrderItem"],setup(s){const l=d([{label:"ID",key:"id"},{label:"\u041A\u0456\u043B\u044C\u043A\u0456\u0441\u0442\u044C",key:"total_count"},{label:"\u0421\u0443\u043C\u0430",key:"total_price"},{label:"\u0421\u0442\u0430\u0442\u0443\u0441",key:"status"},{label:"\u0414\u0430\u0442\u0430 \u0441\u0442\u0432\u043E\u0440\u0435\u043D\u043D\u044F",key:"created_at"}]);return(r,u)=>{const n=c("table-component");return m(),i(n,{isSlotMode:!0,rows:s.data,headings:l},{id:t(({data:e})=>[_("a",{href:r.route("admin.crm.orders",{id:e.row.id}),target:"_blank"},a(e.row.id),9,p)]),total_price:t(({data:e})=>[o(a(r.$filters.formatMoney(e.row.total_price)),1)]),status:t(({data:e})=>[o(a(s.statuses[e.row.status]),1)]),created_at:t(({data:e})=>[o(a(r.$filters.dateFormat(e.row.created_at)),1)]),_:1},8,["rows","headings"])}}};export{b as default};