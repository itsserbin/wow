import{a0 as k,W as o,$ as r,S as c,M as l,O as a,X as n,L as y,K as u,Z as _}from"./___vite-browser-external_commonjs-proxy.bd54111c.js";const h=["onClick"],b=l("hr",{class:"my-1"},null,-1),w=["onClick"],$={__name:"Table",props:["data","statuses","canDestroy"],emits:["onDestroy","onEdit"],setup(s){const i=[{label:"ID",key:"id"},{label:"\u0421\u0442\u0430\u0442\u0443\u0441",key:"status"},{label:"\u0406\u043C\u02BC\u044F",key:"name"},{label:"\u0422\u0435\u043B\u0435\u0444\u043E\u043D",key:"phone"},{label:"\u041A\u043E\u043C\u0435\u043D\u0442\u0430\u0440",key:"comment"},{label:"\u041E\u043D\u043E\u0432\u043B\u0435\u043D\u043E<hr class='my-1'>\u0421\u0442\u0432\u043E\u0440\u0435\u043D\u043E",key:"timestamps"},{label:"#",key:"actions"}];return(t,f)=>{const m=r("xcircle-component"),d=r("table-component");return c(),k(d,{headings:i,isSlotMode:!0,rows:s.data},{id:o(({data:e})=>[l("a",{href:"javascript:",onClick:p=>t.$emit("onEdit",e.row.id,e.i)},a(e.row.id),9,h)]),status:o(({data:e})=>[n(a(s.statuses[e.row.status]),1)]),timestamps:o(({data:e})=>[n(a(t.$filters.dateFormat(e.row.updated_at))+" ",1),b,n(" "+a(t.$filters.dateFormat(e.row.created_at)),1)]),actions:o(({data:e})=>[s.canDestroy?(c(),y("a",{key:0,href:"javascript:",onClick:p=>t.$emit("onDestroy",e.row.id)},[u(m)],8,w)):_("",!0)]),_:1},8,["rows"])}}};export{$ as default};