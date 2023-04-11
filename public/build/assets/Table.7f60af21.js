import{l as f,h as g,a as k,m as b}from"./app.8b7021f2.js";import{af as $,p as V,g as p,x as n,w as t,F as C,v as x,o as h,i,t as r,k as a,j as L}from"./vendor.1f6af4a6.js";import"./vue.m.8e70aa70.js";import"./bootstrap.36b92799.js";import"./__commonjsHelpers__.488ed5c2.js";import"./_plugin-vue_export-helper.cdc0426e.js";import"./Logo.c7a5de92.js";const S=["onClick"],j=["src","alt"],D=i("hr",{class:"my-1"},null,-1),B=i("hr",{class:"my-1"},null,-1),H={class:"grid grid-cols-2 gap-3 items-center"},M=["onClick"],N=i("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"currentColor",class:"bi bi-save",viewBox:"0 0 16 16"},[i("path",{d:"M2 1a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H9.5a1 1 0 0 0-1 1v7.293l2.646-2.647a.5.5 0 0 1 .708.708l-3.5 3.5a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L7.5 9.293V2a2 2 0 0 1 2-2H14a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h2.5a.5.5 0 0 1 0 1H2z"})],-1),U=[N],E=["onClick"],G={__name:"Table",props:["data","canDestroy"],emits:["onDestroy","onEdit","onUpdateProductSort"],setup(d,{emit:w}){const m=x("$defaultLang"),{t:o}=$(),c=V(m),_=[{label:o("id"),key:"id"},{label:o("preview"),key:"preview"},{label:o("products.h1"),key:"h1"},{label:o("published"),key:"published"},{label:o("products.vendor_code"),key:"vendor_code"},{label:o("products.price"),key:"price"},{label:o("products.discount_price"),key:"discount_price"},{label:o("sort"),key:"sort"},{label:o("products.views")+"<hr class='my-1'>"+o("products.sales"),key:"stat"},{label:o("products.returns")+"<hr class='my-1'>"+o("products.refunds"),key:"stat2"},{label:"#",key:"actions"}],v=s=>{c.value=s},y=(s,u)=>{w("onUpdateProductSort",s,u)};return(s,u)=>(h(),p(C,null,[n(g,{onClickLang:v}),n(f,{headings:_,isSlotMode:!0,rows:d.data},{id:t(({data:e})=>[i("a",{href:"javascript:",onClick:l=>s.$emit("onEdit",e.row.id,e.i)},r(e.row.id),9,S)]),h1:t(({data:e})=>[a(r(e.row.h1[c.value]),1)]),published:t(({data:e})=>[a(r(s.$filters.publishedStatus(e.row.published)),1)]),price:t(({data:e})=>[a(r(s.$filters.formatMoney(e.row.price)),1)]),discount_price:t(({data:e})=>[a(r(s.$filters.formatMoney(e.row.discount_price)),1)]),preview:t(({data:e})=>[i("img",{src:e.row.preview_id?s.route("images.55",e.row.preview.src):null,alt:e.row.h1[c.value],class:"mx-auto"},null,8,j)]),stat:t(({data:e})=>[a(r(e.row.viewed?e.row.viewed:"0")+" ",1),D,a(" "+r(e.row.total_sales?e.row.total_sales:"0"),1)]),stat2:t(({data:e})=>[a(r(e.row.returns?e.row.returns:"0")+" ",1),B,a(" "+r(e.row.exchange?e.row.exchange:"0"),1)]),sort:t(({data:e})=>[i("div",H,[n(k,{modelValue:e.row.sort,"onUpdate:modelValue":l=>e.row.sort=l,class:"px-3 text-center"},null,8,["modelValue","onUpdate:modelValue"]),i("a",{href:"javascript:",onClick:l=>y(e.row.id,e.row.sort)},U,8,M)])]),actions:t(({data:e})=>[d.canDestroy?(h(),p("a",{key:0,href:"javascript:",onClick:l=>s.$emit("onDestroy",e.row.id)},[n(b)],8,E)):L("",!0)]),_:1},8,["rows"])],64))}};export{G as default};
