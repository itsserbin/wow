import{az as d,W as h,U as t,Y as r,S as c,M as n,O as o,Z as a,L as w,K as y,a0 as k}from"./___vite-browser-external_commonjs-proxy.2503c6f8.js";const b=["onClick"],u=["href"],f={class:"whitespace-normal w-48"},v=n("hr",{class:"my-1"},null,-1),C=["onClick"],g={__name:"Table",props:["data","statuses","canDestroy"],emits:["onDestroy","onEdit"],setup(l){const i=d([{label:"ID",key:"id"},{label:"\u0421\u0442\u0430\u0442\u0443\u0441",key:"status"},{label:"\u0406\u043C\u02BC\u044F",key:"name"},{label:"\u041F\u0440\u0456\u0437\u0432\u0438\u0449\u0435",key:"last_name"},{label:"\u0422\u0435\u043B\u0435\u0444\u043E\u043D",key:"phone"},{label:"\u041D\u0430\u043A\u043B\u0430\u0434\u043A\u0430",key:"waybill"},{label:"\u0422\u043E\u0432\u0430\u0440\u0456\u0432",key:"total_count"},{label:"\u0421\u0443\u043C\u0430",key:"total_price"},{label:"\u041A\u043E\u043C\u0435\u043D\u0442\u0430\u0440",key:"comment"},{label:"\u041E\u043D\u043E\u0432\u043B\u0435\u043D\u043E<hr class='my-1'>\u0421\u0442\u0432\u043E\u0440\u0435\u043D\u043E",key:"timestamps"},{label:"#",key:"actions"}]);return(s,$)=>{const m=r("xcircle-component"),_=r("table-component");return c(),h(_,{headings:i,isSlotMode:!0,rows:l.data},{id:t(({data:e})=>[n("a",{href:"javascript:",onClick:p=>s.$emit("onEdit",e.row.id,e.i)},o(e.row.id),9,b)]),name:t(({data:e})=>[a(o(e.row.client.name?e.row.client.name:"-"),1)]),status:t(({data:e})=>[a(o(l.statuses[e.row.status]),1)]),last_name:t(({data:e})=>[a(o(e.row.client.last_name?e.row.client.last_name:"-"),1)]),total_price:t(({data:e})=>[a(o(s.$filters.formatMoney(e.row.total_price)),1)]),phone:t(({data:e})=>[n("a",{href:"tel:"+e.row.client.phone},o(e.row.client.phone),9,u)]),comment:t(({data:e})=>[n("div",f,o(e.row.comment?e.row.comment.substr(0,30)+"...":"-"),1)]),timestamps:t(({data:e})=>[a(o(s.$filters.dateTimeFormat(e.row.updated_at))+" ",1),v,a(" "+o(s.$filters.dateTimeFormat(e.row.created_at)),1)]),actions:t(({data:e})=>[l.canDestroy?(c(),w("a",{key:0,href:"javascript:",onClick:p=>s.$emit("onDestroy",e.row.id)},[y(m)],8,C)):k("",!0)]),_:1},8,["headings","rows"])}}};export{g as default};
