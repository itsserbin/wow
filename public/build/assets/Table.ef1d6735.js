import{A as w,L as k,K as r,S as t,F as v,X as s,R as y,M as i,O as a,Y as l,x as f}from"./moment.e1708d83.js";const g=["onClick"],$=["src","alt"],C=["onClick"],M={__name:"Table",props:["data"],emits:["onDestroy","onEdit"],setup(c){const u=f("$defaultLang"),n=w(u),p=[{label:"ID",key:"id"},{label:"\u0413\u043E\u043B\u043E\u0432\u043D\u0435 \u0437\u043E\u0431\u0440\u0430\u0436\u0435\u043D\u043D\u044F",key:"preview"},{label:"\u041D\u0430\u0437\u0432\u0430",key:"title"},{label:"\u0421\u0442\u0430\u0442\u0443\u0441 \u043F\u0443\u0431\u043B\u0456\u043A\u0430\u0446\u0456\u0457",key:"published"},{label:"\u0410\u0440\u0442\u0438\u043A\u0443\u043B",key:"vendor_code"},{label:"\u0426\u0456\u043D\u0430",key:"price"},{label:"\u0426\u0456\u043D\u0430 \u0437\u0456 \u0437\u043D\u0438\u0436\u043A\u043E\u044E",key:"discount_price"},{label:"\u0421\u043E\u0440\u0442\u0443\u0432\u0430\u043D\u043D\u044F",key:"sort"},{label:"\u041F\u0435\u0440\u0435\u0433\u043B\u044F\u0434\u0456\u0432<hr class='my-1'>\u041F\u043E\u043A\u0443\u043F\u043E\u043A",key:"sort"},{label:"#",key:"actions"}];function d(o){n.value=o}return(o,L)=>{const m=s("lang-tabs"),_=s("xcircle-component"),b=s("table-component");return y(),k(v,null,[r(m,{onClickLang:d}),r(b,{headings:p,isSlotMode:!0,rows:c.data},{id:t(({data:e})=>[i("a",{href:"javascript:",onClick:h=>o.$emit("onEdit",e.row.id,e.i)},a(e.row.id),9,g)]),title:t(({data:e})=>[l(a(n.value==="ua"?e.row.h1.ua:n.value==="ru"?e.row.h1.ru:null),1)]),published:t(({data:e})=>[l(a(o.$filters.publishedStatus(e.row.published)),1)]),price:t(({data:e})=>[l(a(o.$filters.formatMoney(e.row.price)),1)]),discount_price:t(({data:e})=>[l(a(o.$filters.formatMoney(e.row.discount_price)),1)]),preview:t(({data:e})=>[i("img",{src:e.row.preview?o.route("images.products.55",e.row.preview):null,alt:n.value==="ua"?e.row.h1.ua:n.value==="ru"?e.row.h1.ru:null,class:"mx-auto"},null,8,$)]),actions:t(({data:e})=>[i("a",{href:"javascript:",onClick:h=>o.$emit("onDestroy",e.row.id)},[r(_)],8,C)]),_:1},8,["rows"])],64)}}};export{M as default};
