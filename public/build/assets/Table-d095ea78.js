import{A as y,B as t,K as r,y as c,p as l,v as o,s as a,m as k,E as u,q as _}from"./index-bc3c132c.js";const b=["onClick"],h=l("hr",{class:"my-1"},null,-1),w=["onClick"],v={__name:"Table",props:["data","statuses","canDestroy"],emits:["onDestroy","onEdit"],setup(n){const i=[{label:"ID",key:"id"},{label:"Статус",key:"status"},{label:"Імʼя",key:"name"},{label:"Телефон",key:"phone"},{label:"Номер замовлення",key:"order_id"},{label:"Коментар",key:"comment"},{label:"Оновлено<hr class='my-1'>Створено",key:"timestamps"},{label:"#",key:"actions"}];return(s,f)=>{const m=r("xcircle-component"),d=r("table-component");return c(),y(d,{headings:i,isSlotMode:!0,rows:n.data},{id:t(({data:e})=>[l("a",{href:"javascript:",onClick:p=>s.$emit("onEdit",e.row.id,e.i)},o(e.row.id),9,b)]),status:t(({data:e})=>[a(o(n.statuses[e.row.status]),1)]),comment:t(({data:e})=>[a(o(e.row.comment?e.row.comment.substr(0,30)+"...":"-"),1)]),timestamps:t(({data:e})=>[a(o(s.$filters.dateFormat(e.row.updated_at))+" ",1),h,a(" "+o(s.$filters.dateFormat(e.row.created_at)),1)]),actions:t(({data:e})=>[n.canDestroy?(c(),k("a",{key:0,href:"javascript:",onClick:p=>s.$emit("onDestroy",e.row.id)},[u(m)],8,w)):_("",!0)]),_:1},8,["rows"])}}};export{v as default};
