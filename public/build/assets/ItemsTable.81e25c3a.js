import{v as n,V as d,S as o,X as c,R as p,M as s,O as a,Y as r}from"./moment.e1708d83.js";const _=["href"],u=s("hr",{class:"my-1 max-w-[40%] mx-auto"},null,-1),y={__name:"ItemsTable",props:["data"],emits:["editOrderItem","destroyOrderItem"],setup(i){const l=n([{label:"ID",key:"id"},{label:"\u0421\u0442\u0430\u0442\u0443\u0441",key:"status"},{label:"\u041A\u0456\u043B\u044C\u043A\u0456\u0441\u0442\u044C",key:"total_count"},{label:"\u0421\u0443\u043C\u0430",key:"total_price"},{label:"\u041E\u043D\u043E\u0432\u043B\u0435\u043D\u043E<hr class='my-1 max-w-[40%] mx-auto'>\u0421\u0442\u0432\u043E\u0440\u0435\u043D\u043E",key:"timestamps"}]);return(t,h)=>{const m=c("table-component");return p(),d(m,{isSlotMode:!0,rows:i.data,headings:l},{id:o(({data:e})=>[s("a",{href:t.route("admin.orders.index",{id:e.row.id}),target:"_blank"},a(e.row.id),9,_)]),total_price:o(({data:e})=>[r(a(t.$filters.formatMoney(e.row.total_price)),1)]),timestamps:o(({data:e})=>[r(a(t.$filters.dateTimeFormat(e.row.updated_at))+" ",1),u,r(" "+a(t.$filters.dateTimeFormat(e.row.created_at)),1)]),_:1},8,["rows","headings"])}}};export{y as default};
