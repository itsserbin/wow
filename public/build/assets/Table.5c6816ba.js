import{l as d,m as _}from"./app.8b7021f2.js";import{m as p,w as t,o as i,i as s,t as o,k as a,g as y,x as b,j as k}from"./vendor.1f6af4a6.js";import"./vue.m.8e70aa70.js";import"./bootstrap.36b92799.js";import"./__commonjsHelpers__.488ed5c2.js";import"./_plugin-vue_export-helper.cdc0426e.js";import"./Logo.c7a5de92.js";const h=["onClick"],f=["href"],$={class:"whitespace-normal w-48"},B=["onClick"],j={__name:"Table",props:["data","statuses","canDestroy"],emits:["onDestroy","onEdit","orderBy"],setup(l,{emit:c}){const m=(r,n)=>{c("orderBy",r,n)},u=[{label:"ID",key:"id",sortable:!0},{label:"\u0421\u0442\u0430\u0442\u0443\u0441",key:"status",sortable:!0},{label:"\u0406\u043C\u02BC\u044F",key:"name"},{label:"\u041F\u0440\u0456\u0437\u0432\u0438\u0449\u0435",key:"last_name"},{label:"\u0422\u0435\u043B\u0435\u0444\u043E\u043D",key:"phone"},{label:"\u0422\u0422\u041D",key:"waybill"},{label:"\u0422\u043E\u0432\u0430\u0440\u0456\u0432",key:"total_count",sortable:!0},{label:"\u0421\u0443\u043C\u0430",key:"total_price",sortable:!0},{label:"\u041A\u043E\u043C\u0435\u043D\u0442\u0430\u0440",key:"comment"},{label:"\u0421\u0442\u0432\u043E\u0440\u0435\u043D\u043E",key:"created_at",sortable:!0},{label:"\u041E\u043D\u043E\u0432\u043B\u0435\u043D\u043E",key:"updated_at",sortable:!0},{label:"#",key:"actions"}];return(r,n)=>(i(),p(d,{headings:u,isSlotMode:!0,rows:l.data,onSort:m},{id:t(({data:e})=>[s("a",{href:"javascript:",onClick:w=>r.$emit("onEdit",e.row.id,e.i)},o(e.row.id),9,h)]),name:t(({data:e})=>[a(o(e.row.client?e.row.client.name?e.row.client.name:"-":null),1)]),status:t(({data:e})=>[a(o(l.statuses[e.row.status]),1)]),last_name:t(({data:e})=>[a(o(e.row.client?e.row.client.last_name?e.row.client.last_name:"-":null),1)]),total_price:t(({data:e})=>[a(o(r.$filters.formatMoney(e.row.total_price)),1)]),phone:t(({data:e})=>[s("a",{href:"tel:"+(e.row.client?e.row.client.phone:null)},o(e.row.client?e.row.client.phone:null),9,f)]),comment:t(({data:e})=>[s("div",$,o(e.row.comment?e.row.comment.substr(0,30)+"...":"-"),1)]),created_at:t(({data:e})=>[a(o(r.$filters.dateTimeFormat(e.row.created_at)),1)]),updated_at:t(({data:e})=>[a(o(r.$filters.dateTimeFormat(e.row.updated_at)),1)]),actions:t(({data:e})=>[l.canDestroy?(i(),y("a",{key:0,href:"javascript:",onClick:w=>r.$emit("onDestroy",e.row.id)},[b(_)],8,B)):k("",!0)]),_:1},8,["rows"]))}};export{j as default};
