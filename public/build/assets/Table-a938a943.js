import{_ as m}from"./Table-d4015883.js";import{_ as d}from"./XCircle-0fb660d3.js";import{p as i,D as k,x as t,v as n,B as s,A as o,q as y,l as u,C as _}from"./app-6d1ec759.js";const h=["onClick"],p=n("hr",{class:"my-1"},null,-1),f=["onClick"],D={__name:"Table",props:["data","statuses","canDestroy"],emits:["onDestroy","onEdit"],setup(r){const c=[{label:"ID",key:"id"},{label:"Статус",key:"status"},{label:"Імʼя",key:"name"},{label:"Телефон",key:"phone"},{label:"Коментар",key:"comment"},{label:"Оновлено<hr class='my-1'>Створено",key:"timestamps"},{label:"#",key:"actions"}];return(a,w)=>(i(),k(m,{headings:c,isSlotMode:!0,rows:r.data},{id:t(({data:e})=>[n("a",{href:"javascript:",onClick:l=>a.$emit("onEdit",e.row.id,e.i)},s(e.row.id),9,h)]),status:t(({data:e})=>[o(s(r.statuses[e.row.status]),1)]),comment:t(({data:e})=>[o(s(e.row.comment?e.row.comment.substr(0,30)+"...":"-"),1)]),timestamps:t(({data:e})=>[o(s(a.$filters.dateFormat(e.row.updated_at))+" ",1),p,o(" "+s(a.$filters.dateFormat(e.row.created_at)),1)]),actions:t(({data:e})=>[r.canDestroy?(i(),y("a",{key:0,href:"javascript:",onClick:l=>a.$emit("onDestroy",e.row.id)},[u(d)],8,f)):_("",!0)]),_:1},8,["rows"]))}};export{D as default};
