import{B as _,C as o,M as n,z as r,q as i,x as a,v as c,p as k,G as y,s as h}from"./index.1726d409.js";const u=["onClick"],b=i("hr",{class:"my-1"},null,-1),w=["onClick"],v={__name:"Table",props:["data","canDestroy"],emits:["onDestroy","onEdit"],setup(s){const l=[{label:"ID",key:"id"},{label:"\u041D\u0430\u0437\u0432\u0430",key:"name"},{label:"Slug",key:"slug"},{label:"\u041E\u043D\u043E\u0432\u043B\u0435\u043D\u043E<hr class='my-1'>\u0421\u0442\u0432\u043E\u0440\u0435\u043D\u043E",key:"timestamps"},{label:"#",key:"actions"}];return(t,C)=>{const m=n("xcircle-component"),d=n("table-component");return r(),_(d,{headings:l,isSlotMode:!0,rows:s.data},{id:o(({data:e})=>[i("a",{href:"javascript:",onClick:p=>t.$emit("onEdit",e.row.id,e.i)},a(e.row.id),9,u)]),timestamps:o(({data:e})=>[c(a(t.$filters.dateFormat(e.row.updated_at))+" ",1),b,c(" "+a(t.$filters.dateFormat(e.row.created_at)),1)]),actions:o(({data:e})=>[s.canDestroy?(r(),k("a",{key:0,href:"javascript:",onClick:p=>t.$emit("onDestroy",e.row.id)},[y(m)],8,w)):h("",!0)]),_:1},8,["rows"])}}};export{v as default};
