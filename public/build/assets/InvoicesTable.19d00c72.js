import{a0 as m,X as a,V as d,S as i,Y as t,O as s,M as u}from"./___vite-browser-external_commonjs-proxy.f18235ae.js";const c=u("br",null,null,-1),_={__name:"InvoicesTable",props:["data","statuses"],emits:["editOrderItem","destroyOrderItem"],setup(r){const l=[{label:"ID",key:"id"},{label:"\u0421\u0443\u043C\u0430",key:"sum"},{label:"\u0421\u0442\u0430\u0442\u0443\u0441",key:"status"},{label:"\u041F\u043E\u0441\u0438\u043B\u0430\u043D\u043D\u044F \u0434\u043B\u044F \u043E\u043F\u043B\u0430\u0442\u0438",key:"status"},{label:"\u0414\u0430\u0442\u0430 \u0441\u0442\u0432\u043E\u0440\u0435\u043D\u043D\u044F<br/>\u0414\u0430\u0442\u0430 \u043D\u043E\u0432\u043B\u0435\u043D\u043D\u044F",key:"timestamp"}];return(o,p)=>{const n=d("table-component");return i(),m(n,{isSlotMode:!0,rows:r.data,headings:l},{id:a(({data:e})=>[t(s(e.row.id),1)]),sum:a(({data:e})=>[t(s(o.$filters.formatMoney(e.row.sum)),1)]),status:a(({data:e})=>[t(s(r.statuses[e.row.status]),1)]),timestamp:a(({data:e})=>[t(s(o.$filters.dateFormat(e.row.created_at))+" ",1),c,t(" "+s(o.$filters.dateFormat(e.row.updated_at)),1)]),_:1},8,["rows"])}}};export{_ as default};
