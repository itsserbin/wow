import{_ as i}from"./Table-6800669f.js";import{p as d,D as m,x as a,A as t,B as s,v as u}from"./app-f55448cf.js";const n=u("br",null,null,-1),_={__name:"InvoicesTable",props:["data","statuses"],emits:["editOrderItem","destroyOrderItem"],setup(o){const l=[{label:"ID",key:"id"},{label:"Сума",key:"sum"},{label:"Статус",key:"status"},{label:"Посилання для оплати",key:"status"},{label:"Дата створення<br/>Дата новлення",key:"timestamp"}];return(r,c)=>(d(),m(i,{isSlotMode:!0,rows:o.data,headings:l},{id:a(({data:e})=>[t(s(e.row.id),1)]),sum:a(({data:e})=>[t(s(r.$filters.formatMoney(e.row.sum)),1)]),status:a(({data:e})=>[t(s(o.statuses[e.row.status]),1)]),timestamp:a(({data:e})=>[t(s(r.$filters.dateFormat(e.row.created_at))+" ",1),n,t(" "+s(r.$filters.dateFormat(e.row.updated_at)),1)]),_:1},8,["rows"]))}};export{_ as default};