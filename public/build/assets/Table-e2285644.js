import{_ as f}from"./LangTabs-9ee1a6bd.js";import{_ as w}from"./Table-6800669f.js";import{_ as k}from"./XCircle-78b15e67.js";import{u as v}from"./vue-i18n.esm-bundler-d070be13.js";import{i as y,r as b,p as d,q as m,l,x as s,v as o,B as i,A as n,C as g}from"./app-f55448cf.js";const $=["onClick"],C=["src","alt"],D={href:"javascript:"},L=o("hr",{class:"my-1"},null,-1),j=["onClick"],F={__name:"Table",props:["data","canDestroy"],emits:["onEdit","onDestroy"],setup(c){const p=y("$defaultLang"),{t}=v(),r=b(p),u=[{label:t("id"),key:"id"},{label:t("preview"),key:"preview"},{label:t("categories.title"),key:"title"},{label:t("published"),key:"published"},{label:t("categories.parent"),key:"parent_id"},{label:t("sort"),key:"sort"},{label:t("updated_at")+"<hr class='my-1'>"+t("created_at"),key:"timestamps"},{label:"#",key:"actions"}],_=a=>{r.value=a};return(a,B)=>(d(),m("div",null,[l(f,{onClickLang:_}),l(w,{headings:u,isSlotMode:!0,rows:c.data},{id:s(({data:e})=>[o("a",{href:"javascript:",onClick:h=>a.$emit("onEdit",e.row.id,e.i)},i(e.row.id),9,$)]),preview:s(({data:e})=>[o("img",{src:e.row.preview_id?a.route("images.55",e.row.preview.src):null,alt:e.row.title[r.value],class:"mx-auto w-16"},null,8,C)]),title:s(({data:e})=>[o("a",D,i(e.row.title[r.value]),1)]),published:s(({data:e})=>[n(i(a.$filters.publishedStatus(e.row.published)),1)]),timestamps:s(({data:e})=>[n(i(a.$filters.dateTimeFormat(e.row.updated_at))+" ",1),L,n(" "+i(a.$filters.dateTimeFormat(e.row.created_at)),1)]),actions:s(({data:e})=>[c.canDestroy?(d(),m("a",{key:0,href:"javascript:",onClick:h=>a.$emit("onDestroy",e.row.id)},[l(k)],8,j)):g("",!0)]),_:1},8,["rows"])]))}};export{F as default};