import{Q as y,O as o,K as m,F as a,z as c,A as n,P as r,y as l,I as k,H as u,M as h,G as b}from"./moment.791e2419.js";const w=["onClick"],f=c("hr",{class:"my-1"},null,-1),C=c("br",null,null,-1),D=["onClick"],g={__name:"Table",props:["data","canDestroy"],emits:["onDestroy","onEdit"],setup(i){const d=[{label:"ID",key:"id"},{label:"\u0406\u043C\u02BC\u044F",key:"name"},{label:"Email",key:"email"},{label:"\u0420\u043E\u043B\u044C",key:"role"},{label:"\u041E\u043D\u043E\u0432\u043B\u0435\u043D\u043E<hr class='my-1'>\u0421\u0442\u0432\u043E\u0440\u0435\u043D\u043E",key:"timestamps"},{label:"#",key:"actions"}];return(t,$)=>{const p=m("xcircle-component"),_=m("table-component");return a(),y(_,{headings:d,isSlotMode:!0,rows:i.data},{id:o(({data:e})=>[c("a",{href:"javascript:",onClick:s=>t.$emit("onEdit",e.row.id,e.i)},n(e.row.id),9,w)]),timestamps:o(({data:e})=>[r(n(t.$filters.dateFormat(e.row.updated_at))+" ",1),f,r(" "+n(t.$filters.dateFormat(e.row.created_at)),1)]),role:o(({data:e})=>[(a(!0),l(u,null,k(e.row.roles,s=>(a(),l("span",null,[r(n(s.name),1),C]))),256))]),actions:o(({data:e})=>[i.canDestroy?(a(),l("a",{key:0,href:"javascript:",onClick:s=>t.$emit("onDestroy",e.row.id)},[h(p)],8,D)):b("",!0)]),_:1},8,["rows"])}}};export{g as default};