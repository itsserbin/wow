import{B as _,C as t,M as l,z as n,q as a,x as s,v as i,p as d,s as m,G as b}from"./index.1726d409.js";const k=["onClick"],w={class:"whitespace-normal"},y={key:0},v=a("hr",{class:"my-1"},null,-1),C=["onClick"],f=a("hr",{class:"my-1"},null,-1),$=["onClick"],N={__name:"Table",props:["data","canDestroy"],emits:["onDestroy","publishReview","onEdit"],setup(r){const p=[{label:"ID",key:"id"},{label:"\u0406\u043C\u02BC\u044F",key:"name"},{label:"\u0422\u0435\u043B\u0435\u0444\u043E\u043D",key:"phone"},{label:"\u041A\u043E\u043C\u0435\u043D\u0442\u0430\u0440",key:"comment"},{label:"\u0422\u043E\u0432\u0430\u0440",key:"product_id"},{label:"\u0421\u0442\u0430\u0442\u0443\u0441 \u043F\u0443\u0431\u043B\u0456\u043A\u0430\u0446\u0456\u0457",key:"published"},{label:"\u041E\u043D\u043E\u0432\u043B\u0435\u043D\u043E<hr class='my-1'>\u0421\u0442\u0432\u043E\u0440\u0435\u043D\u043E",key:"timestamps"},{label:"#",key:"actions"}];return(o,D)=>{const h=l("xcircle-component"),u=l("table-component");return n(),_(u,{headings:p,isSlotMode:!0,rows:r.data},{id:t(({data:e})=>[a("a",{href:"javascript:",onClick:c=>o.$emit("onEdit",e.row.id,e.i)},s(e.row.id),9,k)]),product_id:t(({data:e})=>[i(s(e.row.product.h1.ua?e.row.product.h1.ua:e.row.product.h1.ru),1)]),comment:t(({data:e})=>[a("div",w,s(e.row.comment),1)]),published:t(({data:e})=>[i(s(o.$filters.publishedStatus(e.row.published))+" ",1),e.row.published?m("",!0):(n(),d("div",y,[v,a("a",{onClick:c=>o.$emit("publishReview",e.row.id),href:"javascript:",class:"text-blue-600"}," \u041E\u043F\u0443\u0431\u043B\u0456\u043A\u0443\u0432\u0430\u0442\u0438 ",8,C)]))]),timestamps:t(({data:e})=>[i(s(o.$filters.dateFormat(e.row.updated_at))+" ",1),f,i(" "+s(o.$filters.dateFormat(e.row.created_at)),1)]),actions:t(({data:e})=>[r.canDestroy?(n(),d("a",{key:0,href:"javascript:",onClick:c=>o.$emit("onDestroy",e.row.id)},[b(h)],8,$)):m("",!0)]),_:1},8,["rows"])}}};export{N as default};
