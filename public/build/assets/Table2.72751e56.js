import{az as l,a0 as s,W as o,$ as d,S as p,X as a,O as r}from"./___vite-browser-external_commonjs-proxy.bd54111c.js";const u={__name:"Table2",props:["data"],setup(t){const c=l([{label:"\u0414\u0430\u0442\u0430",key:"date"},{label:"\u0412\u0441\u044C\u043E\u0433\u043E",key:"applications"},{label:"\u0412\u0438\u043A\u043E\u043D\u0430\u043D\u0456",key:"completed"},{label:"\u041F\u043E\u0432\u0435\u0440\u043D\u0435\u043D\u043D\u044F",key:"refunds"},{label:"\u0421\u043A\u0430\u0441\u043E\u0432\u0430\u043D\u0456",key:"cancel"}]);return(_,i)=>{const n=d("table-component");return p(),s(n,{headings:c,rows:t.data,isSlotMode:!0},{completed:o(({data:e})=>[a(r(e.row.completed+` (${e.row.received_parcel_ratio}%)`),1)]),refunds:o(({data:e})=>[a(r(e.row.refunds+` (${e.row.returned_orders_ratio}%)`),1)]),cancel:o(({data:e})=>[a(r(e.row.cancel+` (${e.row.canceled_orders_rate}%)`),1)]),_:1},8,["headings","rows"])}}};export{u as default};