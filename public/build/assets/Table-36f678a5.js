import{_ as y}from"./Input-4fdb1b47.js";import{_ as g}from"./LangTabs-9ee1a6bd.js";import{_ as k}from"./Table-6800669f.js";import{_ as b}from"./XCircle-78b15e67.js";import{u as $}from"./vue-i18n.esm-bundler-d070be13.js";import{i as C,r as V,p,q as m,l as n,x as r,F as x,v as i,B as t,A as a,C as L}from"./app-f55448cf.js";const S=["onClick"],B=["src","alt"],D=i("hr",{class:"my-1"},null,-1),j=i("hr",{class:"my-1"},null,-1),H={class:"grid grid-cols-2 gap-3 items-center"},M=["onClick"],N=i("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"currentColor",class:"bi bi-save",viewBox:"0 0 16 16"},[i("path",{d:"M2 1a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H9.5a1 1 0 0 0-1 1v7.293l2.646-2.647a.5.5 0 0 1 .708.708l-3.5 3.5a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L7.5 9.293V2a2 2 0 0 1 2-2H14a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h2.5a.5.5 0 0 1 0 1H2z"})],-1),U=[N],E=["onClick"],I={__name:"Table",props:["data","canDestroy"],emits:["onDestroy","onEdit","onUpdateProductSort"],setup(d,{emit:h}){const w=C("$defaultLang"),{t:o}=$(),c=V(w),_=[{label:o("id"),key:"id"},{label:o("preview"),key:"preview"},{label:o("products.h1"),key:"h1"},{label:o("published"),key:"published"},{label:o("products.vendor_code"),key:"vendor_code"},{label:o("products.price"),key:"price"},{label:o("products.discount_price"),key:"discount_price"},{label:o("sort"),key:"sort"},{label:o("products.views")+"<hr class='my-1'>"+o("products.sales"),key:"stat"},{label:o("products.returns")+"<hr class='my-1'>"+o("products.refunds"),key:"stat2"},{label:"#",key:"actions"}],v=s=>{c.value=s},f=(s,u)=>{h("onUpdateProductSort",s,u)};return(s,u)=>(p(),m(x,null,[n(g,{onClickLang:v}),n(k,{headings:_,isSlotMode:!0,rows:d.data},{id:r(({data:e})=>[i("a",{href:"javascript:",onClick:l=>s.$emit("onEdit",e.row.id,e.i)},t(e.row.id),9,S)]),h1:r(({data:e})=>[a(t(e.row.h1[c.value]),1)]),published:r(({data:e})=>[a(t(s.$filters.publishedStatus(e.row.published)),1)]),price:r(({data:e})=>[a(t(s.$filters.formatMoney(e.row.price)),1)]),discount_price:r(({data:e})=>[a(t(s.$filters.formatMoney(e.row.discount_price)),1)]),preview:r(({data:e})=>[i("img",{src:e.row.preview_id?s.route("images.55",e.row.preview.src):null,alt:e.row.h1[c.value],class:"mx-auto"},null,8,B)]),stat:r(({data:e})=>[a(t(e.row.viewed?e.row.viewed:"0")+" ",1),D,a(" "+t(e.row.total_sales?e.row.total_sales:"0"),1)]),stat2:r(({data:e})=>[a(t(e.row.returns?e.row.returns:"0")+" ",1),j,a(" "+t(e.row.exchange?e.row.exchange:"0"),1)]),sort:r(({data:e})=>[i("div",H,[n(y,{modelValue:e.row.sort,"onUpdate:modelValue":l=>e.row.sort=l,class:"px-3 text-center"},null,8,["modelValue","onUpdate:modelValue"]),i("a",{href:"javascript:",onClick:l=>f(e.row.id,e.row.sort)},U,8,M)])]),actions:r(({data:e})=>[d.canDestroy?(p(),m("a",{key:0,href:"javascript:",onClick:l=>s.$emit("onDestroy",e.row.id)},[n(b)],8,E)):L("",!0)]),_:1},8,["rows"])],64))}};export{I as default};