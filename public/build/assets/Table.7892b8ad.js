import{V as p,S as o,X as r,R as _,M as n,O as s,Y as i,K as h}from"./moment.e1708d83.js";const u=["onClick"],b=["href"],k=["innerHTML"],w=n("hr",{class:"my-1"},null,-1),f=["onClick"],$={__name:"Table",props:["data"],emits:["onDestroy","onEdit"],setup(a){const l=[{label:"ID",key:"id"},{label:"\u041D\u0430\u0437\u0432\u0430",key:"title"},{label:"Slug",key:"slug"},{label:"\u041E\u043F\u0438\u0441",key:"description"},{label:"\u041E\u043D\u043E\u0432\u043B\u0435\u043D\u043E<hr class='my-1'>\u0421\u0442\u0432\u043E\u0440\u0435\u043D\u043E",key:"timestamps"},{label:"#",key:"actions"}];return(t,y)=>{const c=r("xcircle-component"),d=r("table-component");return _(),p(d,{headings:l,isSlotMode:!0,rows:a.data},{id:o(({data:e})=>[n("a",{href:"javascript:",onClick:m=>t.$emit("onEdit",e.row.id,e.i)},s(e.row.id),9,u)]),slug:o(({data:e})=>[n("a",{href:t.route("xml.fb.get",e.row.slug),target:"_blank"},s(e.row.title),9,b),n("div",{innerHTML:e.row.icon},null,8,k)]),published:o(({data:e})=>[i(s(t.$filters.publishedStatus(e.row.published)),1)]),timestamps:o(({data:e})=>[i(s(t.$filters.dateFormat(e.row.updated_at))+" ",1),w,i(" "+s(t.$filters.dateFormat(e.row.created_at)),1)]),actions:o(({data:e})=>[n("a",{href:"javascript:",onClick:m=>t.$emit("onDestroy",e.row.id)},[h(c)],8,f)]),_:1},8,["rows"])}}};export{$ as default};
