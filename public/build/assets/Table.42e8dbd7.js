import{l as _}from"./app.c998355c.js";import{m as d,w as o,o as m,k as t,t as a}from"./vendor.693a237b.js";import"./vue.m.8e70aa70.js";import"./bootstrap.8b9397d4.js";import"./__commonjsHelpers__.488ed5c2.js";import"./_plugin-vue_export-helper.cdc0426e.js";import"./lazyload.6866379a.js";import"./Logo.c403545e.js";const b={__name:"Table",props:["data"],setup(i){const s=[{label:"\u0414\u0430\u0442\u0430",key:"date"},{label:"\u041D\u043E\u043C\u0435\u0440 \u0437\u0430\u043C\u043E\u0432\u043B\u0435\u043D\u043D\u044F",key:"order_id"},{label:"\u0421\u0443\u043C\u0430 \u043F\u043E\u0441\u0442\u0430\u0447\u0430\u043B\u044C\u043D\u0438\u043A\u0430",key:"sum_provider_trade_price"},{label:"\u0421\u0443\u043C\u0430 \u0437\u0430\u043C\u043E\u0432\u043B\u0435\u043D\u043D\u044F",key:"sum_order_price"},{label:"\u0421\u0443\u043C\u0430 \u0441\u043F\u043B\u0430\u0442\u0438 \u043F\u043E\u0441\u0442\u0430\u0447\u0430\u043B\u044C\u043D\u0438\u043A\u043E\u043C",key:"sum_provider_refund"},{label:"\u0421\u0443\u043C\u0430 \u0441\u043F\u043B\u0430\u0442\u0438 \u043A\u043B\u0456\u0454\u043D\u0442\u0443",key:"sum_client_refund"}];return(r,l)=>(m(),d(_,{headings:s,rows:i.data,isSlotMode:!0},{date:o(({data:e})=>[t(a(r.$filters.dateFormat(e.row.date)),1)]),sum_provider_trade_price:o(({data:e})=>[t(a(r.$filters.formatMoney(e.row.sum_provider_trade_price)),1)]),sum_order_price:o(({data:e})=>[t(a(r.$filters.formatMoney(e.row.sum_order_price)),1)]),sum_provider_refund:o(({data:e})=>[t(a(r.$filters.formatMoney(e.row.sum_provider_refund)),1)]),sum_client_refund:o(({data:e})=>[t(a(r.$filters.formatMoney(e.row.sum_client_refund)),1)]),_:1},8,["rows"]))}};export{b as default};
