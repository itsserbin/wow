import{_ as w}from"./LangTabs-9cff8ebb.js";import{_ as f}from"./Table-fe1ca8dd.js";import{_ as k}from"./XCircle-3c75bba8.js";import{N as y,ae as v,k as b,l as d,m,n as l,y as s,p as o,v as i,w as n,t as g}from"./index-a01126e2.js";const $=["onClick"],C=["src","alt"],D={href:"javascript:"},L=o("hr",{class:"my-1"},null,-1),N=["onClick"],S={__name:"Table",props:["data","canDestroy"],emits:["onEdit","onDestroy"],setup(c){const p=y("$defaultLang"),{t}=v(),r=b(p),u=[{label:t("id"),key:"id"},{label:t("preview"),key:"preview"},{label:t("categories.title"),key:"title"},{label:t("published"),key:"published"},{label:t("categories.parent"),key:"parent_id"},{label:t("sort"),key:"sort"},{label:t("updated_at")+"<hr class='my-1'>"+t("created_at"),key:"timestamps"},{label:"#",key:"actions"}],_=a=>{r.value=a};return(a,j)=>(d(),m("div",null,[l(w,{onClickLang:_}),l(f,{headings:u,isSlotMode:!0,rows:c.data},{id:s(({data:e})=>[o("a",{href:"javascript:",onClick:h=>a.$emit("onEdit",e.row.id,e.i)},i(e.row.id),9,$)]),preview:s(({data:e})=>[o("img",{src:e.row.preview_id?a.route("images.55",e.row.preview.src):null,alt:e.row.title[r.value],class:"mx-auto w-16"},null,8,C)]),title:s(({data:e})=>[o("a",D,i(e.row.title[r.value]),1)]),published:s(({data:e})=>[n(i(a.$filters.publishedStatus(e.row.published)),1)]),timestamps:s(({data:e})=>[n(i(a.$filters.dateTimeFormat(e.row.updated_at))+" ",1),L,n(" "+i(a.$filters.dateTimeFormat(e.row.created_at)),1)]),actions:s(({data:e})=>[c.canDestroy?(d(),m("a",{key:0,href:"javascript:",onClick:h=>a.$emit("onDestroy",e.row.id)},[l(k)],8,N)):g("",!0)]),_:1},8,["rows"])]))}};export{S as default};