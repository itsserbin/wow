import{w,y as d,J as l,K as o,M as f,X as g,H as i,F as m,z as r,A as n,L as a,P as v}from"./___vite-browser-external_commonjs-proxy.4f2b06be.js";const C=["onClick"],L=["innerHTML"],$=r("hr",{class:"my-1"},null,-1),D=["onClick"],M={__name:"Table",props:["data","canDestroy"],emits:["onDestroy","onEdit"],setup(c){const u=g("$defaultLang"),s=w(u),p=[{label:"ID",key:"id"},{label:"\u0424\u043E\u0442\u043E",key:"icon"},{label:"\u0422\u0435\u043A\u0441\u0442",key:"text"},{label:"\u0421\u0442\u0430\u0442\u0443\u0441",key:"published"},{label:"\u041E\u043D\u043E\u0432\u043B\u0435\u043D\u043E<hr class='my-1'>\u0421\u0442\u0432\u043E\u0440\u0435\u043D\u043E",key:"timestamps"},{label:"#",key:"actions"}];function _(t){s.value=t}return(t,x)=>{const h=i("lang-tabs"),b=i("xcircle-component"),y=i("table-component");return m(),d(f,null,[l(h,{onClickLang:_}),l(y,{headings:p,isSlotMode:!0,rows:c.data},{id:o(({data:e})=>[r("a",{href:"javascript:",onClick:k=>t.$emit("onEdit",e.row.id,e.i)},n(e.row.id),9,C)]),icon:o(({data:e})=>[r("div",{innerHTML:e.row.icon},null,8,L)]),text:o(({data:e})=>[a(n(s.value==="ua"?e.row.text.ua:s.value==="ru"?e.row.text.ru:null),1)]),published:o(({data:e})=>[a(n(t.$filters.publishedStatus(e.row.published)),1)]),timestamps:o(({data:e})=>[a(n(t.$filters.dateFormat(e.row.updated_at))+" ",1),$,a(" "+n(t.$filters.dateFormat(e.row.created_at)),1)]),actions:o(({data:e})=>[c.canDestroy?(m(),d("a",{key:0,href:"javascript:",onClick:k=>t.$emit("onDestroy",e.row.id)},[l(b)],8,D)):v("",!0)]),_:1},8,["rows"])],64)}}};export{M as default};
