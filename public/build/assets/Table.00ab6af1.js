import{Q as y,K as o,H as l,F as r,z as i,A as a,L as s,y as h,J as k,P as b}from"./___vite-browser-external_commonjs-proxy.4f2b06be.js";const _=["onClick"],u=i("hr",{class:"my-1"},null,-1),w=["onClick"],$={__name:"Table",props:["data","canDestroy"],emits:["onDestroy","onEdit"],setup(n){const c=[{label:"ID",key:"id"},{label:"\u0406\u043C\u02BC\u044F",key:"name"},{label:"\u0422\u0435\u043B\u0435\u0444\u043E\u043D",key:"phone"},{label:"\u041A\u043E\u043C\u0435\u043D\u0442\u0430\u0440",key:"comment"},{label:"\u0422\u043E\u0432\u0430\u0440",key:"product_id"},{label:"\u0421\u0442\u0430\u0442\u0443\u0441 \u043F\u0443\u0431\u043B\u0456\u043A\u0430\u0446\u0456\u0457",key:"published"},{label:"\u041E\u043D\u043E\u0432\u043B\u0435\u043D\u043E<hr class='my-1'>\u0421\u0442\u0432\u043E\u0440\u0435\u043D\u043E",key:"timestamps"},{label:"#",key:"actions"}];return(t,f)=>{const d=l("xcircle-component"),m=l("table-component");return r(),y(m,{headings:c,isSlotMode:!0,rows:n.data},{id:o(({data:e})=>[i("a",{href:"javascript:",onClick:p=>t.$emit("onEdit",e.row.id,e.i)},a(e.row.id),9,_)]),published:o(({data:e})=>[s(a(t.$filters.publishedStatus(e.row.published)),1)]),timestamps:o(({data:e})=>[s(a(t.$filters.dateFormat(e.row.updated_at))+" ",1),u,s(" "+a(t.$filters.dateFormat(e.row.created_at)),1)]),actions:o(({data:e})=>[n.canDestroy?(r(),h("a",{key:0,href:"javascript:",onClick:p=>t.$emit("onDestroy",e.row.id)},[k(d)],8,w)):b("",!0)]),_:1},8,["rows"])}}};export{$ as default};