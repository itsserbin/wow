import{l}from"./app.8b7021f2.js";import{af as c,ag as n,m as u,w as s,o as p,i as m,t as a,k as o}from"./vendor.1f6af4a6.js";import"./vue.m.8e70aa70.js";import"./bootstrap.36b92799.js";import"./__commonjsHelpers__.488ed5c2.js";import"./_plugin-vue_export-helper.cdc0426e.js";import"./Logo.c7a5de92.js";const _=["href"],f=m("hr",{class:"my-1 max-w-[40%] mx-auto"},null,-1),S={__name:"ItemsTable",props:["data","orderStatuses"],emits:["editOrderItem","destroyOrderItem"],setup(i){const{t:e}=c(),d=n([{label:e("id"),key:"id"},{label:e("status"),key:"status"},{label:e("orders.total_count"),key:"total_count"},{label:e("orders.total_price"),key:"total_price"},{label:e("updated_at")+"<hr class='my-1 max-w-[40%] mx-auto'>"+e("created_at"),key:"timestamps"}]);return(r,w)=>(p(),u(l,{isSlotMode:!0,rows:i.data,headings:d},{id:s(({data:t})=>[m("a",{href:r.route("admin.crm.orders",{id:t.row.id}),target:"_blank"},a(t.row.id),9,_)]),status:s(({data:t})=>[o(a(i.orderStatuses[t.row.status]),1)]),total_price:s(({data:t})=>[o(a(r.$filters.formatMoney(t.row.total_price)),1)]),timestamps:s(({data:t})=>[o(a(r.$filters.dateTimeFormat(t.row.updated_at))+" ",1),f,o(" "+a(r.$filters.dateTimeFormat(t.row.created_at)),1)]),_:1},8,["rows","headings"]))}};export{S as default};
