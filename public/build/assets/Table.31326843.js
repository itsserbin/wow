import{l as w,h as k,m as f}from"./app.2d605236.js";import{ak as v,i as y,p as d,G as l,C as s,E as b,z as m,q as o,x as i,v as n,s as g}from"./index.1726d409.js";import"./moment.9709ab41.js";import"./_plugin-vue_export-helper.cdc0426e.js";import"./lazyload.6866379a.js";import"./Logo.9264c4eb.js";const $=["onClick"],C=["src","alt"],D={href:"javascript:"},L=o("hr",{class:"my-1"},null,-1),j=["onClick"],q={__name:"Table",props:["data","canDestroy"],emits:["onEdit","onDestroy"],setup(c){const p=b("$defaultLang"),{t}=v(),r=y(p),u=[{label:t("id"),key:"id"},{label:t("preview"),key:"preview"},{label:t("categories.title"),key:"title"},{label:t("published"),key:"published"},{label:t("categories.parent"),key:"parent_id"},{label:t("sort"),key:"sort"},{label:t("updated_at")+"<hr class='my-1'>"+t("created_at"),key:"timestamps"},{label:"#",key:"actions"}],h=a=>{r.value=a};return(a,E)=>(m(),d("div",null,[l(k,{onClickLang:h}),l(w,{headings:u,isSlotMode:!0,rows:c.data},{id:s(({data:e})=>[o("a",{href:"javascript:",onClick:_=>a.$emit("onEdit",e.row.id,e.i)},i(e.row.id),9,$)]),preview:s(({data:e})=>[o("img",{src:e.row.preview_id?a.route("images.55",e.row.preview.src):null,alt:e.row.title[r.value],class:"mx-auto w-16"},null,8,C)]),title:s(({data:e})=>[o("a",D,i(e.row.title[r.value]),1)]),published:s(({data:e})=>[n(i(a.$filters.publishedStatus(e.row.published)),1)]),timestamps:s(({data:e})=>[n(i(a.$filters.dateTimeFormat(e.row.updated_at))+" ",1),L,n(" "+i(a.$filters.dateTimeFormat(e.row.created_at)),1)]),actions:s(({data:e})=>[c.canDestroy?(m(),d("a",{key:0,href:"javascript:",onClick:_=>a.$emit("onDestroy",e.row.id)},[l(f)],8,j)):g("",!0)]),_:1},8,["rows"])]))}};export{q as default};
