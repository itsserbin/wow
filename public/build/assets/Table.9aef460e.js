import{z as b,K as v,J as n,R as o,W as i,Q as k,L as l,M as s,X as r,v as g}from"./moment.5b161624.js";const y=["onClick"],f=["src","alt"],$={href:"javascript:"},C=l("hr",{class:"my-1"},null,-1),L=["onClick"],B={__name:"Table",props:["data"],emits:["onEdit","onDestroy"],setup(c){const u=g("$defaultLang"),a=b(u),p=[{label:"ID",key:"id"},{label:"\u0413\u043E\u043B\u043E\u0432\u043D\u0435 \u0437\u043E\u0431\u0440\u0430\u0436\u0435\u043D\u043D\u044F",key:"preview"},{label:"\u041D\u0430\u0437\u0432\u0430",key:"title"},{label:"\u0421\u0442\u0430\u0442\u0443\u0441 \u043F\u0443\u0431\u043B\u0456\u043A\u0430\u0446\u0456\u0457",key:"published"},{label:"\u0411\u0430\u0442\u044C\u043A\u0456\u0432\u0441\u044C\u043A\u0430 \u043A\u0430\u0442\u0435\u0433\u043E\u0440\u0456\u044F",key:"parent_id"},{label:"\u0421\u043E\u0440\u0442\u0443\u0432\u0430\u043D\u043D\u044F",key:"sort"},{label:"\u041E\u043D\u043E\u0432\u043B\u0435\u043D\u043E<hr class='my-1'>\u0421\u0442\u0432\u043E\u0440\u0435\u043D\u043E",key:"timestamps"},{label:"#",key:"actions"}];function d(t){a.value=t}return(t,j)=>{const m=i("lang-tabs"),_=i("xcircle-component"),h=i("table-component");return k(),v("div",null,[n(m,{onClickLang:d}),n(h,{headings:p,isSlotMode:!0,rows:c.data},{id:o(({data:e})=>[l("a",{href:"javascript:",onClick:w=>t.$emit("onEdit",e.row.id,e.i)},s(e.row.id),9,y)]),preview:o(({data:e})=>[l("img",{src:t.route("images.category",e.row.preview),alt:a.value==="ua"?e.row.title.ua:a.value==="ru"?e.row.title.ru:"-",class:"mx-auto w-16"},null,8,f)]),title:o(({data:e})=>[l("a",$,s(a.value==="ua"?e.row.title.ua:a.value==="ru"?e.row.title.ru:"-"),1)]),published:o(({data:e})=>[r(s(t.$filters.publishedStatus(e.row.published)),1)]),timestamps:o(({data:e})=>[r(s(t.$filters.dateFormat(e.row.updated_at))+" ",1),C,r(" "+s(t.$filters.dateFormat(e.row.created_at)),1)]),actions:o(({data:e})=>[l("a",{href:"javascript:",onClick:w=>t.$emit("onDestroy",e.row.id)},[n(_)],8,L)]),_:1},8,["rows"])])}}};export{B as default};
