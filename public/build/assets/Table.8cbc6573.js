import{W as m,U as a,Y as n,S as s,M as d,O as p,L as k,K as y,a0 as _}from"./moment.325cf309.js";const h=["onClick"],b=["onClick"],w={__name:"Table",props:["data","canDestroy"],emits:["onDestroy","onEdit"],setup(o){const c=[{label:"ID",key:"id"},{label:"\u041A\u043E\u043B\u0456\u0440",key:"color"},{label:"\u041D\u0430\u0437\u0432\u0430",key:"name"},{label:"HEX",key:"hex"},{label:"\u041E\u043D\u043E\u0432\u043B\u0435\u043D\u043E<hr class='my-1'>\u0421\u0442\u0432\u043E\u0440\u0435\u043D\u043E",key:"timestamps"},{label:"#",key:"actions"}];return(t,C)=>{const r=n("xcircle-component"),i=n("table-component");return s(),m(i,{headings:c,isSlotMode:!0,rows:o.data},{id:a(({data:e})=>[d("a",{href:"javascript:",onClick:l=>t.$emit("onEdit",e.row.id,e.i)},p(e.row.id),9,h)]),actions:a(({data:e})=>[o.canDestroy?(s(),k("a",{key:0,href:"javascript:",onClick:l=>t.$emit("onDestroy",e.row.id)},[y(r)],8,b)):_("",!0)]),_:1},8,["rows"])}}};export{w as default};
