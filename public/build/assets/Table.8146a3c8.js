import{V as k,S as o,X as i,R as r,M as s,O as a,Y as l,L as c,U as u,F as h,K as y}from"./moment.e1708d83.js";const b=["onClick"],w=s("hr",{class:"my-1"},null,-1),f=s("br",null,null,-1),C=["onClick"],g={__name:"Table",props:["data"],emits:["onDestroy","onEdit"],setup(m){const d=[{label:"ID",key:"id"},{label:"\u0406\u043C\u02BC\u044F",key:"name"},{label:"Email",key:"email"},{label:"\u0420\u043E\u043B\u044C",key:"role"},{label:"\u041E\u043D\u043E\u0432\u043B\u0435\u043D\u043E<hr class='my-1'>\u0421\u0442\u0432\u043E\u0440\u0435\u043D\u043E",key:"timestamps"},{label:"#",key:"actions"}];return(t,$)=>{const p=i("xcircle-component"),_=i("table-component");return r(),k(_,{headings:d,isSlotMode:!0,rows:m.data},{id:o(({data:e})=>[s("a",{href:"javascript:",onClick:n=>t.$emit("onEdit",e.row.id,e.i)},a(e.row.id),9,b)]),timestamps:o(({data:e})=>[l(a(t.$filters.dateFormat(e.row.updated_at))+" ",1),w,l(" "+a(t.$filters.dateFormat(e.row.created_at)),1)]),role:o(({data:e})=>[(r(!0),c(h,null,u(e.row.roles,n=>(r(),c("span",null,[l(a(n.name),1),f]))),256))]),actions:o(({data:e})=>[s("a",{href:"javascript:",onClick:n=>t.$emit("onDestroy",e.row.id)},[y(p)],8,C)]),_:1},8,["rows"])}}};export{g as default};
