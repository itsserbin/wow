import{W as y,U as o,Y as r,S as l,M as i,O as a,Z as s,L as k,K as b,a0 as _}from"./moment.325cf309.js";const f=["onClick"],h=i("hr",{class:"my-1"},null,-1),u=["onClick"],C={__name:"Table",props:["data","canDestroy"],emits:["onDestroy","onEdit"],setup(n){const c=[{label:"ID",key:"id"},{label:"\u041D\u0430\u0437\u0432\u0430",key:"name"},{label:"\u041A\u0430\u0442\u0430\u043B\u043E\u0433",key:"catalog"},{label:"\u041D\u0430\u044F\u0432\u043D\u0456\u0441\u0442\u044C",key:"availability"},{label:"\u041F\u043E\u0432\u0435\u0440\u043D\u0435\u043D\u043D\u044F",key:"refunds"},{label:"\u041F\u0435\u0440\u0435\u0434\u043E\u043F\u043B\u0430\u0442\u0430",key:"prepayment"},{label:"\u041A\u043E\u043C\u043C\u0435\u043D\u0442\u0430\u0440",key:"comment"},{label:"\u041E\u043D\u043E\u0432\u043B\u0435\u043D\u043E<hr class='my-1'>\u0421\u0442\u0432\u043E\u0440\u0435\u043D\u043E",key:"timestamps"},{label:"#",key:"actions"}];return(t,w)=>{const m=r("xcircle-component"),d=r("table-component");return l(),y(d,{headings:c,isSlotMode:!0,rows:n.data},{id:o(({data:e})=>[i("a",{href:"javascript:",onClick:p=>t.$emit("onEdit",e.row.id,e.i)},a(e.row.id),9,f)]),refunds:o(({data:e})=>[s(a(t.$filters.yesOrNo(e.row.refunds)),1)]),prepayment:o(({data:e})=>[s(a(t.$filters.yesOrNo(e.row.prepayment)),1)]),timestamps:o(({data:e})=>[s(a(t.$filters.dateFormat(e.row.updated_at))+" ",1),h,s(" "+a(t.$filters.dateFormat(e.row.created_at)),1)]),actions:o(({data:e})=>[n.canDestroy?(l(),k("a",{key:0,href:"javascript:",onClick:p=>t.$emit("onDestroy",e.row.id)},[b(m)],8,u)):_("",!0)]),_:1},8,["rows"])}}};export{C as default};
