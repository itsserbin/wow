import{m as _,w as o,B as n,o as r,i,t as a,k as c,g as k,x as y,j as h}from"./vendor.1f6af4a6.js";import"./__commonjsHelpers__.488ed5c2.js";const u=["onClick"],w=i("hr",{class:"my-1"},null,-1),b=["onClick"],D={__name:"Table",props:["data","canDestroy"],emits:["onDestroy","onEdit"],setup(s){const l=[{label:"ID",key:"id"},{label:"\u041D\u0430\u0437\u0432\u0430",key:"name"},{label:"Slug",key:"slug"},{label:"\u041E\u043D\u043E\u0432\u043B\u0435\u043D\u043E<hr class='my-1'>\u0421\u0442\u0432\u043E\u0440\u0435\u043D\u043E",key:"timestamps"},{label:"#",key:"actions"}];return(t,f)=>{const m=n("xcircle-component"),d=n("table-component");return r(),_(d,{headings:l,isSlotMode:!0,rows:s.data},{id:o(({data:e})=>[i("a",{href:"javascript:",onClick:p=>t.$emit("onEdit",e.row.id,e.i)},a(e.row.id),9,u)]),timestamps:o(({data:e})=>[c(a(t.$filters.dateFormat(e.row.updated_at))+" ",1),w,c(" "+a(t.$filters.dateFormat(e.row.created_at)),1)]),actions:o(({data:e})=>[s.canDestroy?(r(),k("a",{key:0,href:"javascript:",onClick:p=>t.$emit("onDestroy",e.row.id)},[y(m)],8,b)):h("",!0)]),_:1},8,["rows"])}}};export{D as default};