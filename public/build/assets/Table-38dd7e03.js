import{k as f,j as k,l as _}from"./app-23639435.js";import{u as y}from"./vue-i18n.esm-bundler-7f92347f.js";import{r as b,g as d,z as r,v as s,F as w,y as $,p as c,i as m,l as o,k as i,j as v}from"./app-da11968c.js";import"./moment-fbc5633a.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./Logo-9fe22fca.js";const C=["onClick"],j=m("hr",{class:"my-1"},null,-1),D=["onClick"],S={__name:"Table",props:["data","canDestroy"],emits:["onDestroy","onEdit"],setup(l){const h=$("$defaultLang"),{t}=y(),n=b(h),p=[{label:t("id"),key:"id"},{label:t("pages.heading"),key:"heading"},{label:t("pages.h1"),key:"h1"},{label:t("published"),key:"published"},{label:t("updated_at")+"<hr class='my-1'>"+t("created_at"),key:"timestamps"},{label:"#",key:"actions"}],u=a=>{n.value=a};return(a,L)=>(c(),d(w,null,[r(k,{onClickLang:u}),r(f,{headings:p,isSlotMode:!0,rows:l.data},{id:s(({data:e})=>[m("a",{href:"javascript:",onClick:g=>a.$emit("onEdit",e.row.id,e.i)},o(e.row.id),9,C)]),heading:s(({data:e})=>[i(o(e.row.heading[n.value]),1)]),h1:s(({data:e})=>[i(o(e.row.h1[n.value]),1)]),published:s(({data:e})=>[i(o(a.$filters.publishedStatus(e.row.published)),1)]),timestamps:s(({data:e})=>[i(o(a.$filters.dateTimeFormat(e.row.updated_at))+" ",1),j,i(" "+o(a.$filters.dateTimeFormat(e.row.created_at)),1)]),actions:s(({data:e})=>[l.canDestroy?(c(),d("a",{key:0,href:"javascript:",onClick:g=>a.$emit("onDestroy",e.row.id)},[r(_)],8,D)):v("",!0)]),_:1},8,["rows"])],64))}};export{S as default};
