import{l as _,h as f,m as k}from"./app.2c2e52ca.js";import{ak as y,j as b,q as d,H as r,D as s,F as w,G as $,A as c,s as m,y as o,x as i,v}from"./index.e4375aa7.js";import"./moment.9709ab41.js";import"./_plugin-vue_export-helper.cdc0426e.js";import"./lazyload.6866379a.js";import"./Logo.6d532cc3.js";const C=["onClick"],D=m("hr",{class:"my-1"},null,-1),L=["onClick"],S={__name:"Table",props:["data","canDestroy"],emits:["onDestroy","onEdit"],setup(l){const h=$("$defaultLang"),{t}=y(),n=b(h),p=[{label:t("id"),key:"id"},{label:t("pages.heading"),key:"heading"},{label:t("pages.h1"),key:"h1"},{label:t("published"),key:"published"},{label:t("updated_at")+"<hr class='my-1'>"+t("created_at"),key:"timestamps"},{label:"#",key:"actions"}],u=a=>{n.value=a};return(a,j)=>(c(),d(w,null,[r(f,{onClickLang:u}),r(_,{headings:p,isSlotMode:!0,rows:l.data},{id:s(({data:e})=>[m("a",{href:"javascript:",onClick:g=>a.$emit("onEdit",e.row.id,e.i)},o(e.row.id),9,C)]),heading:s(({data:e})=>[i(o(e.row.heading[n.value]),1)]),h1:s(({data:e})=>[i(o(e.row.h1[n.value]),1)]),published:s(({data:e})=>[i(o(a.$filters.publishedStatus(e.row.published)),1)]),timestamps:s(({data:e})=>[i(o(a.$filters.dateTimeFormat(e.row.updated_at))+" ",1),D,i(" "+o(a.$filters.dateTimeFormat(e.row.created_at)),1)]),actions:s(({data:e})=>[l.canDestroy?(c(),d("a",{key:0,href:"javascript:",onClick:g=>a.$emit("onDestroy",e.row.id)},[r(k)],8,L)):v("",!0)]),_:1},8,["rows"])],64))}};export{S as default};
