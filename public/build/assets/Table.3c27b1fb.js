import{a0 as h,W as o,$ as i,S as l,M as n,O as s,X as a,L as u,K as _,Z as k}from"./___vite-browser-external_commonjs-proxy.bd54111c.js";const b=["onClick"],y=["href"],w=["innerHTML"],f=n("hr",{class:"my-1"},null,-1),g=["onClick"],v={__name:"Table",props:["data","canDestroy"],emits:["onDestroy","onEdit"],setup(r){const c=[{label:"ID",key:"id"},{label:"\u041D\u0430\u0437\u0432\u0430",key:"title"},{label:"Slug",key:"slug"},{label:"\u041E\u043F\u0438\u0441",key:"description"},{label:"\u041E\u043D\u043E\u0432\u043B\u0435\u043D\u043E<hr class='my-1'>\u0421\u0442\u0432\u043E\u0440\u0435\u043D\u043E",key:"timestamps"},{label:"#",key:"actions"}];return(t,$)=>{const d=i("xcircle-component"),m=i("table-component");return l(),h(m,{headings:c,isSlotMode:!0,rows:r.data},{id:o(({data:e})=>[n("a",{href:"javascript:",onClick:p=>t.$emit("onEdit",e.row.id,e.i)},s(e.row.id),9,b)]),slug:o(({data:e})=>[n("a",{href:t.route("xml.fb.get",e.row.slug),target:"_blank"},s(e.row.title),9,y),n("div",{innerHTML:e.row.icon},null,8,w)]),published:o(({data:e})=>[a(s(t.$filters.publishedStatus(e.row.published)),1)]),timestamps:o(({data:e})=>[a(s(t.$filters.dateFormat(e.row.updated_at))+" ",1),f,a(" "+s(t.$filters.dateFormat(e.row.created_at)),1)]),actions:o(({data:e})=>[r.canDestroy?(l(),u("a",{key:0,href:"javascript:",onClick:p=>t.$emit("onDestroy",e.row.id)},[_(d)],8,g)):k("",!0)]),_:1},8,["rows"])}}};export{v as default};