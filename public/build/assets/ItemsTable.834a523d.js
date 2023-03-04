import{m as _,n as m}from"./app.68928a22.js";import{F as o,y as s,z as i,Q as y,K as r,J as p,P as n,O as h,A as l,M as w,L as u}from"./___vite-browser-external_commonjs-proxy.4f2b06be.js";const k=["width","height"],g=i("path",{d:"M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168l10-10zM11.207 2.5 13.5 4.793 14.793 3.5 12.5 1.207 11.207 2.5zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293l6.5-6.5zm-9.761 5.175-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325z"},null,-1),v=[g],f={__name:"Pencil",props:{width:{type:String,default:"16"},height:{type:String,default:"16"}},setup(a){return(d,t)=>(o(),s("svg",{xmlns:"http://www.w3.org/2000/svg",width:a.width,height:a.height,fill:"currentColor",class:"bi bi-pencil",viewBox:"0 0 16 16"},v,8,k))}},b={class:"grid grid-cols-2 gap-4"},$=["onClick"],z=["onClick"],C={key:0},V=["srcset"],M=["data-src","alt"],B={key:0},I=["href"],j={__name:"ItemsTable",props:["data"],emits:["editOrderItem","destroyOrderItem"],setup(a){const d=[{label:"\u0424\u043E\u0442\u043E",key:"preview"},{label:"\u041D\u0430\u0437\u0432\u0430",key:"h1"},{label:"\u041A\u0456\u043B\u044C\u043A\u0456\u0441\u0442\u044C",key:"count"},{label:"\u0426\u0456\u043D\u0430",key:"sale_price"},{label:"\u0421\u0443\u043C\u0430",key:"total_price"},{label:"\u041A\u043E\u043B\u0456\u0440",key:"color"},{label:"\u0420\u043E\u0437\u043C\u0456\u0440",key:"size"},{label:"\u0414\u043E\u0434.\u043F\u0440\u043E\u0434\u0430\u0436\u0430",key:"resale"},{label:"\u0417\u043D\u0438\u0436\u043A\u0430",key:"discount"},{label:"\u0410\u0440\u0442\u0438\u043A\u0443\u043B",key:"vendor_code"},{label:"#",key:"actions"}];return(t,O)=>(o(),y(_,{isSlotMode:!0,rows:a.data,headings:d},{actions:r(({data:e})=>[i("div",b,[i("a",{href:"javascript:",onClick:c=>t.$emit("editOrderItem",e.row.id,e.i)},[p(f)],8,$),i("a",{href:"javascript:",onClick:c=>t.$emit("destroyOrderItem",e.row.id,e.i)},[p(m)],8,z)])]),preview:r(({data:e})=>[e.row.product?(o(),s("picture",C,[i("source",{srcset:e.row.product.preview?t.route("images.350",e.row.product.preview.webp_src):null,type:"image/webp"},null,8,V),i("img",{"data-src":e.row.product.preview?t.route("images.350",e.row.product.preview.src):null,alt:e.row.product.h1.ua?e.row.product.h1.ua:e.row.product.h1.ru,class:"h-full object-cover w-full"},null,8,M)])):n("",!0)]),color:r(({data:e})=>[(o(!0),s(w,null,h(e.row.color,c=>(o(),s("span",null,l(c),1))),256))]),size:r(({data:e})=>[(o(!0),s(w,null,h(e.row.size,c=>(o(),s("span",null,l(c),1))),256))]),resale:r(({data:e})=>[u(l(e.row.resale?"\u0422\u0430\u043A":"\u041D\u0456"),1)]),sale_price:r(({data:e})=>[u(l(t.$filters.formatMoney(e.row.sale_price)),1)]),total_price:r(({data:e})=>[u(l(t.$filters.formatMoney(e.row.total_price)),1)]),vendor_code:r(({data:e})=>[e.row.product?(o(),s("div",B,l(e.row.product.vendor_code),1)):n("",!0)]),h1:r(({data:e})=>[e.row.product?(o(),s("a",{key:0,href:t.route("product",e.row.product.id),target:"_blank"},l(e.row.product.h1.ua?e.row.product.h1.ua:e.row.product.h1.ru),9,I)):n("",!0)]),_:1},8,["rows"]))}};export{j as default};
