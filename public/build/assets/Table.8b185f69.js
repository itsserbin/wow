import{l as u,m as k}from"./app.8b7021f2.js";import{af as p,m as b,w as a,o as c,i,t as o,k as s,g as y,x as w,j as f}from"./vendor.1f6af4a6.js";import"./vue.m.8e70aa70.js";import"./bootstrap.36b92799.js";import"./__commonjsHelpers__.488ed5c2.js";import"./_plugin-vue_export-helper.cdc0426e.js";import"./Logo.c7a5de92.js";const g=["onClick"],$=["href"],v=["onClick"],j={__name:"Table",props:["data","onEdit","statuses","canDestroy"],emits:["onDestroy","onEdit","orderBy"],setup(l,{emit:d}){const{t}=p(),m=(r,n)=>{d("orderBy",r,n)},_=[{label:t("id"),key:"id",sortable:!0},{label:t("clients.status"),key:"status",sortable:!0},{label:t("clients.name"),key:"name"},{label:t("clients.last_name"),key:"last_name"},{label:t("clients.phone"),key:"phone"},{label:t("clients.number_of_purchases"),key:"number_of_purchases",sortable:!0},{label:t("clients.purchased_goods"),key:"purchased_goods",sortable:!0},{label:t("clients.average_check"),key:"average_check",sortable:!0},{label:t("clients.whole_check"),key:"whole_check",sortable:!0},{label:t("created_at"),key:"created_at",sortable:!0},{label:t("updated_at"),key:"updated_at",sortable:!0},{label:"#",key:"actions"}];return(r,n)=>(c(),b(u,{headings:_,isSlotMode:!0,rows:l.data,onSort:m},{id:a(({data:e})=>[i("a",{href:"javascript:",onClick:h=>r.$emit("onEdit",e.row.id,e.i)},o(e.row.id),9,g)]),name:a(({data:e})=>[s(o(e.row.name),1)]),last_name:a(({data:e})=>[s(o(e.row.last_name),1)]),phone:a(({data:e})=>[i("a",{href:"tel:"+e.row.phone},o(e.row.phone),9,$)]),average_check:a(({data:e})=>[s(o(r.$filters.formatMoney(e.row.average_check)),1)]),whole_check:a(({data:e})=>[s(o(r.$filters.formatMoney(e.row.whole_check)),1)]),status:a(({data:e})=>[s(o(l.statuses[e.row.status]),1)]),created_at:a(({data:e})=>[s(o(r.$filters.dateTimeFormat(e.row.created_at)),1)]),updated_at:a(({data:e})=>[s(o(r.$filters.dateTimeFormat(e.row.updated_at)),1)]),actions:a(({data:e})=>[l.canDestroy?(c(),y("a",{key:0,href:"javascript:",onClick:h=>r.$emit("onDestroy",e.row.id)},[w(k)],8,v)):f("",!0)]),_:1},8,["rows"]))}};export{j as default};