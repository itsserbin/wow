import{a0 as n,W as t,$ as d,S as p,M as u,O as o,X as a}from"./___vite-browser-external_commonjs-proxy.bd54111c.js";const _=["href"],b={__name:"Table",props:["data"],setup(s){const c=[{label:"\u0414\u0430\u0442\u0430",key:"date"},{label:"\u0422\u043E\u0432\u0430\u0440",key:"product_id"},{label:"\u041F\u0440\u043E\u0434\u0430\u0436\u0456\u0432",key:"sales"},{label:"\u041F\u043E\u0432\u0435\u0440\u043D\u0435\u043D\u044C",key:"returns"},{label:"\u041E\u0431\u043C\u0456\u043D\u0456\u0432",key:"exchanges"},{label:"\u0421\u043A\u0430\u0441\u0443\u0432\u0430\u043D\u044C",key:"canceled"}];return(r,i)=>{const l=d("table-component");return p(),n(l,{headings:c,rows:s.data,isSlotMode:!0},{product_id:t(({data:e})=>[u("a",{target:"_blank",href:r.route("product",e.row.product_id)},o(e.row.product_id)+" -",9,_),a(" "+o(e.row.product.h1.ua?e.row.product.h1.ua:e.row.product.h1.ru?e.row.product.h1.ru:"\u0411\u0435\u0437 \u043D\u0430\u0437\u0432\u0438"),1)]),date:t(({data:e})=>[a(o(r.$filters.dateFormat(e.row.date)),1)]),_:1},8,["rows"])}}};export{b as default};
