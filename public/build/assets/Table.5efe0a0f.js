import{l as w,m as _}from"./app.2d605236.js";import{B as p,C as t,z as i,q as s,x as o,v as r,p as y,G as b,s as k}from"./index.1726d409.js";import"./moment.9709ab41.js";import"./_plugin-vue_export-helper.cdc0426e.js";import"./lazyload.6866379a.js";import"./Logo.9264c4eb.js";const h=["onClick"],f=["href"],$={class:"whitespace-normal w-48"},B=["onClick"],g={__name:"Table",props:["data","statuses","canDestroy"],emits:["onDestroy","onEdit","orderBy"],setup(l,{emit:c}){const m=(a,n)=>{c("orderBy",a,n)},u=[{label:"ID",key:"id",sortable:!0},{label:"\u0421\u0442\u0430\u0442\u0443\u0441",key:"status",sortable:!0},{label:"\u0406\u043C\u02BC\u044F",key:"name"},{label:"\u041F\u0440\u0456\u0437\u0432\u0438\u0449\u0435",key:"last_name"},{label:"\u0422\u0435\u043B\u0435\u0444\u043E\u043D",key:"phone"},{label:"\u0422\u0422\u041D",key:"waybill"},{label:"\u0422\u043E\u0432\u0430\u0440\u0456\u0432",key:"total_count",sortable:!0},{label:"\u0421\u0443\u043C\u0430",key:"total_price",sortable:!0},{label:"\u041A\u043E\u043C\u0435\u043D\u0442\u0430\u0440",key:"comment"},{label:"\u0421\u0442\u0432\u043E\u0440\u0435\u043D\u043E",key:"created_at",sortable:!0},{label:"\u041E\u043D\u043E\u0432\u043B\u0435\u043D\u043E",key:"updated_at",sortable:!0},{label:"#",key:"actions"}];return(a,n)=>(i(),p(w,{headings:u,isSlotMode:!0,rows:l.data,onSort:m},{id:t(({data:e})=>[s("a",{href:"javascript:",onClick:d=>a.$emit("onEdit",e.row.id,e.i)},o(e.row.id),9,h)]),name:t(({data:e})=>[r(o(e.row.client?e.row.client.name?e.row.client.name:"-":null),1)]),status:t(({data:e})=>[r(o(l.statuses[e.row.status]),1)]),last_name:t(({data:e})=>[r(o(e.row.client?e.row.client.last_name?e.row.client.last_name:"-":null),1)]),total_price:t(({data:e})=>[r(o(a.$filters.formatMoney(e.row.total_price)),1)]),phone:t(({data:e})=>[s("a",{href:"tel:"+(e.row.client?e.row.client.phone:null)},o(e.row.client?e.row.client.phone:null),9,f)]),comment:t(({data:e})=>[s("div",$,o(e.row.comment?e.row.comment.substr(0,30)+"...":"-"),1)]),created_at:t(({data:e})=>[r(o(a.$filters.dateTimeFormat(e.row.created_at)),1)]),updated_at:t(({data:e})=>[r(o(a.$filters.dateTimeFormat(e.row.updated_at)),1)]),actions:t(({data:e})=>[l.canDestroy?(i(),y("a",{key:0,href:"javascript:",onClick:d=>a.$emit("onDestroy",e.row.id)},[b(_)],8,B)):k("",!0)]),_:1},8,["rows"]))}};export{g as default};
