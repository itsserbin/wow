import{u as _,U as d,R as o,W as l,Q as k,L as n,M as a,X as t,J as p}from"./moment.5b161624.js";const w=["onClick"],y=["href"],u=n("hr",{class:"my-1"},null,-1),b=["onClick"],$={__name:"Table",props:["data","onEdit","statuses"],emits:["onDestroy"],setup(r){const c=_([{label:"ID",key:"id"},{label:"\u0421\u0442\u0430\u0442\u0443\u0441",key:"status"},{label:"\u0406\u043C\u02BC\u044F",key:"name"},{label:"\u041F\u0440\u0456\u0437\u0432\u0438\u0449\u0435",key:"last_name"},{label:"\u0422\u0435\u043B\u0435\u0444\u043E\u043D",key:"phone"},{label:"\u0417\u0430\u043C\u043E\u0432\u043B\u0435\u043D\u044C",key:"number_of_purchases"},{label:"\u0421\u0435\u0440\u0435\u0434\u043D\u0456\u0439 \u0447\u0435\u043A",key:"average_check"},{label:"\u0417\u0430\u0433\u0430\u043B\u044C\u043D\u0438\u0439 \u0447\u0435\u043A",key:"whole_check"},{label:"\u041E\u043D\u043E\u0432\u043B\u0435\u043D\u043E<hr class='my-1'>\u0421\u0442\u0432\u043E\u0440\u0435\u043D\u043E",key:"timestamps"},{label:"#",key:"actions"}]);return(s,f)=>{const i=l("xcircle-component"),m=l("table-component");return k(),d(m,{headings:c,isSlotMode:!0,rows:r.data},{id:o(({data:e})=>[n("a",{href:"javascript:",onClick:h=>s.$emit("onEdit",e.row.id,e.i)},a(e.row.id),9,w)]),name:o(({data:e})=>[t(a(e.row.name),1)]),last_name:o(({data:e})=>[t(a(e.row.last_name),1)]),phone:o(({data:e})=>[n("a",{href:"tel:"+e.row.phone},a(e.row.phone),9,y)]),average_check:o(({data:e})=>[t(a(s.$filters.formatMoney(e.row.average_check)),1)]),whole_check:o(({data:e})=>[t(a(s.$filters.formatMoney(e.row.whole_check)),1)]),status:o(({data:e})=>[t(a(r.statuses[e.row.status]),1)]),timestamps:o(({data:e})=>[t(a(s.$filters.dateTimeFormat(e.row.updated_at))+" ",1),u,t(" "+a(s.$filters.dateTimeFormat(e.row.created_at)),1)]),actions:o(({data:e})=>[n("a",{href:"javascript:",onClick:h=>s.$emit("onDestroy",e.row.id)},[p(i)],8,b)]),_:1},8,["headings","rows"])}}};export{$ as default};
