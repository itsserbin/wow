import{k as w,j as k,l as f}from"./app-957518a1.js";import{u as y}from"./vue-i18n.esm-bundler-c84158d1.js";import{r as v,g as d,z as l,v as s,y as b,p as m,i as o,l as i,k as n,j as g}from"./app-443dd386.js";import"./moment-fbc5633a.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./Logo-89534839.js";const $=["onClick"],C=["src","alt"],j={href:"javascript:"},D=o("hr",{class:"my-1"},null,-1),L=["onClick"],z={__name:"Table",props:["data","canDestroy"],emits:["onEdit","onDestroy"],setup(c){const p=b("$defaultLang"),{t}=y(),r=v(p),u=[{label:t("id"),key:"id"},{label:t("preview"),key:"preview"},{label:t("categories.title"),key:"title"},{label:t("published"),key:"published"},{label:t("categories.parent"),key:"parent_id"},{label:t("sort"),key:"sort"},{label:t("updated_at")+"<hr class='my-1'>"+t("created_at"),key:"timestamps"},{label:"#",key:"actions"}],_=a=>{r.value=a};return(a,N)=>(m(),d("div",null,[l(k,{onClickLang:_}),l(w,{headings:u,isSlotMode:!0,rows:c.data},{id:s(({data:e})=>[o("a",{href:"javascript:",onClick:h=>a.$emit("onEdit",e.row.id,e.i)},i(e.row.id),9,$)]),preview:s(({data:e})=>[o("img",{src:e.row.preview_id?a.route("images.55",e.row.preview.src):null,alt:e.row.title[r.value],class:"mx-auto w-16"},null,8,C)]),title:s(({data:e})=>[o("a",j,i(e.row.title[r.value]),1)]),published:s(({data:e})=>[n(i(a.$filters.publishedStatus(e.row.published)),1)]),timestamps:s(({data:e})=>[n(i(a.$filters.dateTimeFormat(e.row.updated_at))+" ",1),D,n(" "+i(a.$filters.dateTimeFormat(e.row.created_at)),1)]),actions:s(({data:e})=>[c.canDestroy?(m(),d("a",{key:0,href:"javascript:",onClick:h=>a.$emit("onDestroy",e.row.id)},[l(f)],8,L)):g("",!0)]),_:1},8,["rows"])]))}};export{z as default};