import{u as _,U as d,R as t,W as i,Q as h,L as n,M as o,X as a,J as w}from"./moment.5b161624.js";const y=["onClick"],k=["href"],b=n("hr",{class:"my-1"},null,-1),u=["onClick"],v={__name:"Table",props:["data","statuses"],emits:["onDestroy","onEdit"],setup(l){const r=_([{label:"ID",key:"id"},{label:"\u0421\u0442\u0430\u0442\u0443\u0441",key:"status"},{label:"\u0406\u043C\u02BC\u044F",key:"name"},{label:"\u041F\u0440\u0456\u0437\u0432\u0438\u0449\u0435",key:"last_name"},{label:"\u0422\u0435\u043B\u0435\u0444\u043E\u043D",key:"phone"},{label:"\u041D\u0430\u043A\u043B\u0430\u0434\u043A\u0430",key:"waybill"},{label:"\u0422\u043E\u0432\u0430\u0440\u0456\u0432",key:"total_count"},{label:"\u0421\u0443\u043C\u0430",key:"total_price"},{label:"\u041E\u043D\u043E\u0432\u043B\u0435\u043D\u043E<hr class='my-1'>\u0421\u0442\u0432\u043E\u0440\u0435\u043D\u043E",key:"timestamps"},{label:"#",key:"actions"}]);return(s,f)=>{const c=i("xcircle-component"),m=i("table-component");return h(),d(m,{headings:r,isSlotMode:!0,rows:l.data},{id:t(({data:e})=>[n("a",{href:"javascript:",onClick:p=>s.$emit("onEdit",e.row.id,e.i)},o(e.row.id),9,y)]),name:t(({data:e})=>[a(o(e.row.client.name?e.row.client.name:"-"),1)]),status:t(({data:e})=>[a(o(l.statuses[e.row.status]),1)]),last_name:t(({data:e})=>[a(o(e.row.client.last_name?e.row.client.last_name:"-"),1)]),total_price:t(({data:e})=>[a(o(s.$filters.formatMoney(e.row.total_price)),1)]),phone:t(({data:e})=>[n("a",{href:"tel:"+e.row.client.phone},o(e.row.client.phone),9,k)]),timestamps:t(({data:e})=>[a(o(s.$filters.dateTimeFormat(e.row.updated_at))+" ",1),b,a(" "+o(s.$filters.dateTimeFormat(e.row.created_at)),1)]),actions:t(({data:e})=>[n("a",{href:"javascript:",onClick:p=>s.$emit("onDestroy",e.row.id)},[w(c)],8,u)]),_:1},8,["headings","rows"])}}};export{v as default};
