import{k as u,l as k}from"./app-957518a1.js";import{u as p}from"./vue-i18n.esm-bundler-c84158d1.js";import{s as b,v as a,p as c,i,l as o,k as r,g as y,z as f,j as w}from"./app-443dd386.js";import"./moment-fbc5633a.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./Logo-89534839.js";const g=["onClick"],$=["href"],v=["onClick"],V={__name:"Table",props:["data","onEdit","statuses","canDestroy"],emits:["onDestroy","onEdit","orderBy"],setup(l,{emit:d}){const{t}=p(),m=(s,n)=>{d("orderBy",s,n)},_=[{label:t("id"),key:"id",sortable:!0},{label:t("clients.status"),key:"status",sortable:!0},{label:t("clients.name"),key:"name"},{label:t("clients.last_name"),key:"last_name"},{label:t("clients.phone"),key:"phone"},{label:t("clients.number_of_purchases"),key:"number_of_purchases",sortable:!0},{label:t("clients.purchased_goods"),key:"purchased_goods",sortable:!0},{label:t("clients.average_check"),key:"average_check",sortable:!0},{label:t("clients.whole_check"),key:"whole_check",sortable:!0},{label:t("created_at"),key:"created_at",sortable:!0},{label:t("updated_at"),key:"updated_at",sortable:!0},{label:"#",key:"actions"}];return(s,n)=>(c(),b(u,{headings:_,isSlotMode:!0,rows:l.data,onSort:m},{id:a(({data:e})=>[i("a",{href:"javascript:",onClick:h=>s.$emit("onEdit",e.row.id,e.i)},o(e.row.id),9,g)]),name:a(({data:e})=>[r(o(e.row.name),1)]),last_name:a(({data:e})=>[r(o(e.row.last_name),1)]),phone:a(({data:e})=>[i("a",{href:"tel:"+e.row.phone},o(e.row.phone),9,$)]),average_check:a(({data:e})=>[r(o(s.$filters.formatMoney(e.row.average_check)),1)]),whole_check:a(({data:e})=>[r(o(s.$filters.formatMoney(e.row.whole_check)),1)]),status:a(({data:e})=>[r(o(l.statuses[e.row.status]),1)]),created_at:a(({data:e})=>[r(o(s.$filters.dateTimeFormat(e.row.created_at)),1)]),updated_at:a(({data:e})=>[r(o(s.$filters.dateTimeFormat(e.row.updated_at)),1)]),actions:a(({data:e})=>[l.canDestroy?(c(),y("a",{key:0,href:"javascript:",onClick:h=>s.$emit("onDestroy",e.row.id)},[f(k)],8,v)):w("",!0)]),_:1},8,["rows"]))}};export{V as default};
