import{m as w,h as y,n as f}from"./app.460df568.js";import{bT as k,w as b,y as d,J as l,K as s,X as v,F as m,z as o,A as i,L as n,P as g}from"./___vite-browser-external_commonjs-proxy.4f2b06be.js";const $=["onClick"],C=["src","alt"],L={href:"javascript:"},D=o("hr",{class:"my-1"},null,-1),T=["onClick"],B={__name:"Table",props:["data","canDestroy"],emits:["onEdit","onDestroy"],setup(c){const u=v("$defaultLang"),{t}=k(),r=b(u),p=[{label:t("id"),key:"id"},{label:t("preview"),key:"preview"},{label:t("categories.title"),key:"title"},{label:t("published"),key:"published"},{label:t("categories.parent"),key:"parent_id"},{label:t("sort"),key:"sort"},{label:t("updated_at")+"<hr class='my-1'>"+t("created_at"),key:"timestamps"},{label:"#",key:"actions"}],h=a=>{r.value=a};return(a,j)=>(m(),d("div",null,[l(y,{onClickLang:h}),l(w,{headings:p,isSlotMode:!0,rows:c.data},{id:s(({data:e})=>[o("a",{href:"javascript:",onClick:_=>a.$emit("onEdit",e.row.id,e.i)},i(e.row.id),9,$)]),preview:s(({data:e})=>[o("img",{src:e.row.preview_id?a.route("images.55",e.row.preview.src):null,alt:e.row.title[r.value],class:"mx-auto w-16"},null,8,C)]),title:s(({data:e})=>[o("a",L,i(e.row.title[r.value]),1)]),published:s(({data:e})=>[n(i(a.$filters.publishedStatus(e.row.published)),1)]),timestamps:s(({data:e})=>[n(i(a.$filters.dateTimeFormat(e.row.updated_at))+" ",1),D,n(" "+i(a.$filters.dateTimeFormat(e.row.created_at)),1)]),actions:s(({data:e})=>[c.canDestroy?(m(),d("a",{key:0,href:"javascript:",onClick:_=>a.$emit("onDestroy",e.row.id)},[l(f)],8,T)):g("",!0)]),_:1},8,["rows"])]))}};export{B as default};
