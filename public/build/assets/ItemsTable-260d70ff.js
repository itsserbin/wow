import{l}from"./app-b232e098.js";import{am as c,a0 as n,A as u,B as s,y as p,p as d,v as a,s as o}from"./index-bc3c132c.js";import"./moment-fbc5633a.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./Logo-3d23fa23.js";const _=["href"],f=d("hr",{class:"my-1 max-w-[40%] mx-auto"},null,-1),x={__name:"ItemsTable",props:["data","orderStatuses"],emits:["editOrderItem","destroyOrderItem"],setup(i){const{t:e}=c(),m=n([{label:e("id"),key:"id"},{label:e("status"),key:"status"},{label:e("orders.total_count"),key:"total_count"},{label:e("orders.total_price"),key:"total_price"},{label:e("updated_at")+"<hr class='my-1 max-w-[40%] mx-auto'>"+e("created_at"),key:"timestamps"}]);return(r,h)=>(p(),u(l,{isSlotMode:!0,rows:i.data,headings:m},{id:s(({data:t})=>[d("a",{href:r.route("admin.crm.orders",{id:t.row.id}),target:"_blank"},a(t.row.id),9,_)]),status:s(({data:t})=>[o(a(i.orderStatuses[t.row.status]),1)]),total_price:s(({data:t})=>[o(a(r.$filters.formatMoney(t.row.total_price)),1)]),timestamps:s(({data:t})=>[o(a(r.$filters.dateTimeFormat(t.row.updated_at))+" ",1),f,o(" "+a(r.$filters.dateTimeFormat(t.row.created_at)),1)]),_:1},8,["rows","headings"]))}};export{x as default};
