import{_ as m}from"./Table-6800669f.js";import{u as c}from"./vue-i18n.esm-bundler-d070be13.js";import{G as n,p as u,D as _,x as s,v as d,B as a,A as o}from"./app-f55448cf.js";const p=["href"],f=d("hr",{class:"my-1 max-w-[40%] mx-auto"},null,-1),b={__name:"ItemsTable",props:["data","orderStatuses"],emits:["editOrderItem","destroyOrderItem"],setup(i){const{t:e}=c(),l=n([{label:e("id"),key:"id"},{label:e("status"),key:"status"},{label:e("orders.total_count"),key:"total_count"},{label:e("orders.total_price"),key:"total_price"},{label:e("updated_at")+"<hr class='my-1 max-w-[40%] mx-auto'>"+e("created_at"),key:"timestamps"}]);return(r,h)=>(u(),_(m,{isSlotMode:!0,rows:i.data,headings:l},{id:s(({data:t})=>[d("a",{href:r.route("admin.crm.orders",{id:t.row.id}),target:"_blank"},a(t.row.id),9,p)]),status:s(({data:t})=>[o(a(i.orderStatuses[t.row.status]),1)]),total_price:s(({data:t})=>[o(a(r.$filters.formatMoney(t.row.total_price)),1)]),timestamps:s(({data:t})=>[o(a(r.$filters.dateTimeFormat(t.row.updated_at))+" ",1),f,o(" "+a(r.$filters.dateTimeFormat(t.row.created_at)),1)]),_:1},8,["rows","headings"]))}};export{b as default};