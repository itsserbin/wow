import{l as d}from"./app-b232e098.js";import{A as l,B as t,y as c,p as m,v as a,s}from"./index-bc3c132c.js";import"./moment-fbc5633a.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./Logo-3d23fa23.js";const n=["href"],w={__name:"ClientOrders",props:["data","statuses"],emits:["editOrderItem","destroyOrderItem"],setup(o){const i=[{label:"ID",key:"id"},{label:"Кількість",key:"total_count"},{label:"Сума",key:"total_price"},{label:"Статус",key:"status"},{label:"Дата створення",key:"created_at"}];return(r,_)=>(c(),l(d,{isSlotMode:!0,rows:o.data,headings:i},{id:t(({data:e})=>[m("a",{href:r.route("admin.crm.orders",{id:e.row.id}),target:"_blank"},a(e.row.id),9,n)]),total_price:t(({data:e})=>[s(a(r.$filters.formatMoney(e.row.total_price)),1)]),status:t(({data:e})=>[s(a(o.statuses[e.row.status]),1)]),created_at:t(({data:e})=>[s(a(r.$filters.dateFormat(e.row.created_at)),1)]),_:1},8,["rows"]))}};export{w as default};
