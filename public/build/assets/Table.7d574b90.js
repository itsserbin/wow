import{y as V,L as d,K as i,X as t,F as C,B as $,V as c,S as w,M as r,O as s,Y as n,_ as x}from"./___vite-browser-external_commonjs-proxy.45af3daa.js";const L=["onClick"],S=["src","alt"],D=r("hr",{class:"my-1"},null,-1),B=r("hr",{class:"my-1"},null,-1),M={class:"grid grid-cols-2 gap-3 items-center"},j=["onClick"],H=r("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"currentColor",class:"bi bi-save",viewBox:"0 0 16 16"},[r("path",{d:"M2 1a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H9.5a1 1 0 0 0-1 1v7.293l2.646-2.647a.5.5 0 0 1 .708.708l-3.5 3.5a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L7.5 9.293V2a2 2 0 0 1 2-2H14a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h2.5a.5.5 0 0 1 0 1H2z"})],-1),N=[H],U=["onClick"],P={__name:"Table",props:["data","canDestroy"],emits:["onDestroy","onEdit","onUpdateProductSort"],setup(u,{emit:h}){const m=$("$defaultLang"),l=V(m),_=[{label:"ID",key:"id"},{label:"\u0413\u043E\u043B\u043E\u0432\u043D\u0435 \u0437\u043E\u0431\u0440\u0430\u0436\u0435\u043D\u043D\u044F",key:"preview"},{label:"\u041D\u0430\u0437\u0432\u0430",key:"title"},{label:"\u0421\u0442\u0430\u0442\u0443\u0441 \u043F\u0443\u0431\u043B\u0456\u043A\u0430\u0446\u0456\u0457",key:"published"},{label:"\u0410\u0440\u0442\u0438\u043A\u0443\u043B",key:"vendor_code"},{label:"\u0426\u0456\u043D\u0430",key:"price"},{label:"\u0426\u0456\u043D\u0430 \u0437\u0456 \u0437\u043D\u0438\u0436\u043A\u043E\u044E",key:"discount_price"},{label:"\u0421\u043E\u0440\u0442\u0443\u0432\u0430\u043D\u043D\u044F",key:"sort"},{label:"\u041F\u0435\u0440\u0435\u0433\u043B\u044F\u0434\u0456\u0432<hr class='my-1'>\u041F\u043E\u043A\u0443\u043F\u043E\u043A",key:"stat"},{label:"\u041F\u043E\u0432\u0435\u0440\u043D\u0435\u043D\u044C<hr class='my-1'>\u041E\u0431\u043C\u0456\u043D\u0456\u0432",key:"stat2"},{label:"#",key:"actions"}];function v(o){l.value=o}function y(o,p){h("onUpdateProductSort",o,p)}return(o,p)=>{const g=c("lang-tabs"),b=c("input-component"),k=c("xcircle-component"),f=c("table-component");return w(),d(C,null,[i(g,{onClickLang:v}),i(f,{headings:_,isSlotMode:!0,rows:u.data},{id:t(({data:e})=>[r("a",{href:"javascript:",onClick:a=>o.$emit("onEdit",e.row.id,e.i)},s(e.row.id),9,L)]),title:t(({data:e})=>[n(s(l.value==="ua"?e.row.h1.ua:l.value==="ru"?e.row.h1.ru:null),1)]),published:t(({data:e})=>[n(s(o.$filters.publishedStatus(e.row.published)),1)]),price:t(({data:e})=>[n(s(o.$filters.formatMoney(e.row.price)),1)]),discount_price:t(({data:e})=>[n(s(o.$filters.formatMoney(e.row.discount_price)),1)]),preview:t(({data:e})=>[r("img",{src:e.row.preview_id?o.route("images.55",e.row.preview.src):null,alt:l.value==="ua"?e.row.h1.ua:l.value==="ru"?e.row.h1.ru:null,class:"mx-auto"},null,8,S)]),stat:t(({data:e})=>[n(s(e.row.viewed?e.row.viewed:"0")+" ",1),D,n(" "+s(e.row.total_sales?e.row.total_sales:"0"),1)]),stat2:t(({data:e})=>[n(s(e.row.returns?e.row.returns:"0")+" ",1),B,n(" "+s(e.row.exchange?e.row.exchange:"0"),1)]),sort:t(({data:e})=>[r("div",M,[i(b,{modelValue:e.row.sort,"onUpdate:modelValue":a=>e.row.sort=a,class:"px-3 text-center"},null,8,["modelValue","onUpdate:modelValue"]),r("a",{href:"javascript:",onClick:a=>y(e.row.id,e.row.sort)},N,8,j)])]),actions:t(({data:e})=>[u.canDestroy?(w(),d("a",{key:0,href:"javascript:",onClick:a=>o.$emit("onDestroy",e.row.id)},[i(k)],8,U)):x("",!0)]),_:1},8,["rows"])],64)}}};export{P as default};
