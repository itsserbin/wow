import{B as k,C as t,M as r,z as c,q as l,x as o,v as a,p as y,G as u,s as _}from"./index.1726d409.js";const b=["onClick"],h=l("hr",{class:"my-1"},null,-1),w=["onClick"],v={__name:"Table",props:["data","statuses","canDestroy"],emits:["onDestroy","onEdit"],setup(n){const i=[{label:"ID",key:"id"},{label:"\u0421\u0442\u0430\u0442\u0443\u0441",key:"status"},{label:"\u0406\u043C\u02BC\u044F",key:"name"},{label:"\u0422\u0435\u043B\u0435\u0444\u043E\u043D",key:"phone"},{label:"\u041D\u043E\u043C\u0435\u0440 \u0437\u0430\u043C\u043E\u0432\u043B\u0435\u043D\u043D\u044F",key:"order_id"},{label:"\u041A\u043E\u043C\u0435\u043D\u0442\u0430\u0440",key:"comment"},{label:"\u041E\u043D\u043E\u0432\u043B\u0435\u043D\u043E<hr class='my-1'>\u0421\u0442\u0432\u043E\u0440\u0435\u043D\u043E",key:"timestamps"},{label:"#",key:"actions"}];return(s,C)=>{const m=r("xcircle-component"),d=r("table-component");return c(),k(d,{headings:i,isSlotMode:!0,rows:n.data},{id:t(({data:e})=>[l("a",{href:"javascript:",onClick:p=>s.$emit("onEdit",e.row.id,e.i)},o(e.row.id),9,b)]),status:t(({data:e})=>[a(o(n.statuses[e.row.status]),1)]),comment:t(({data:e})=>[a(o(e.row.comment?e.row.comment.substr(0,30)+"...":"-"),1)]),timestamps:t(({data:e})=>[a(o(s.$filters.dateFormat(e.row.updated_at))+" ",1),h,a(" "+o(s.$filters.dateFormat(e.row.created_at)),1)]),actions:t(({data:e})=>[n.canDestroy?(c(),y("a",{key:0,href:"javascript:",onClick:p=>s.$emit("onDestroy",e.row.id)},[u(m)],8,w)):_("",!0)]),_:1},8,["rows"])}}};export{v as default};
