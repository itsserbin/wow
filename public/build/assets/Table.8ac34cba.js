import{y as k,L as u,K as l,W as t,F as v,$ as r,S as p,M as i,O as a,X as n,Z as f,D as g}from"./___vite-browser-external_commonjs-proxy.bd54111c.js";const $=["onClick"],C=["src","alt"],D=i("hr",{class:"my-1"},null,-1),L=["onClick"],S={__name:"Table",props:["data","canDestroy"],emits:["onDestroy","onEdit"],setup(c){const d=g("$defaultLang"),s=k(d),m=[{label:"ID",key:"id"},{label:"\u0413\u043E\u043B\u043E\u0432\u043D\u0435 \u0437\u043E\u0431\u0440\u0430\u0436\u0435\u043D\u043D\u044F",key:"preview"},{label:"\u041D\u0430\u0437\u0432\u0430",key:"title"},{label:"\u0421\u0442\u0430\u0442\u0443\u0441 \u043F\u0443\u0431\u043B\u0456\u043A\u0430\u0446\u0456\u0457",key:"published"},{label:"\u0410\u0440\u0442\u0438\u043A\u0443\u043B",key:"vendor_code"},{label:"\u0426\u0456\u043D\u0430",key:"price"},{label:"\u0426\u0456\u043D\u0430 \u0437\u0456 \u0437\u043D\u0438\u0436\u043A\u043E\u044E",key:"discount_price"},{label:"\u0421\u043E\u0440\u0442\u0443\u0432\u0430\u043D\u043D\u044F",key:"sort"},{label:"\u041F\u0435\u0440\u0435\u0433\u043B\u044F\u0434\u0456\u0432<hr class='my-1'>\u041F\u043E\u043A\u0443\u043F\u043E\u043A",key:"stat"},{label:"#",key:"actions"}];function w(o){s.value=o}return(o,M)=>{const h=r("lang-tabs"),y=r("xcircle-component"),_=r("table-component");return p(),u(v,null,[l(h,{onClickLang:w}),l(_,{headings:m,isSlotMode:!0,rows:c.data},{id:t(({data:e})=>[i("a",{href:"javascript:",onClick:b=>o.$emit("onEdit",e.row.id,e.i)},a(e.row.id),9,$)]),title:t(({data:e})=>[n(a(s.value==="ua"?e.row.h1.ua:s.value==="ru"?e.row.h1.ru:null),1)]),published:t(({data:e})=>[n(a(o.$filters.publishedStatus(e.row.published)),1)]),price:t(({data:e})=>[n(a(o.$filters.formatMoney(e.row.price)),1)]),discount_price:t(({data:e})=>[n(a(o.$filters.formatMoney(e.row.discount_price)),1)]),preview:t(({data:e})=>[i("img",{src:e.row.preview?o.route("images.products.55",e.row.preview):null,alt:s.value==="ua"?e.row.h1.ua:s.value==="ru"?e.row.h1.ru:null,class:"mx-auto"},null,8,C)]),stat:t(({data:e})=>[n(a(e.row.viewed)+" ",1),D,n(" "+a(e.row.total_sales),1)]),actions:t(({data:e})=>[c.canDestroy?(p(),u("a",{key:0,href:"javascript:",onClick:b=>o.$emit("onDestroy",e.row.id)},[l(y)],8,L)):f("",!0)]),_:1},8,["rows"])],64)}}};export{S as default};
