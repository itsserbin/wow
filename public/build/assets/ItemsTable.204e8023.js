import{S as s,L as c,M as t,aA as g,a0 as b,X as r,V as p,K as u,Z as h,O as l,F as _,Y as n}from"./___vite-browser-external_commonjs-proxy.c41a93ce.js";const v=["width","height"],k=t("path",{d:"M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168l10-10zM11.207 2.5 13.5 4.793 14.793 3.5 12.5 1.207 11.207 2.5zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293l6.5-6.5zm-9.761 5.175-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325z"},null,-1),y=[k],f={__name:"Pencil",props:{width:{type:String,default:"16"},height:{type:String,default:"16"}},setup(i){return(d,o)=>(s(),c("svg",{xmlns:"http://www.w3.org/2000/svg",width:i.width,height:i.height,fill:"currentColor",class:"bi bi-pencil",viewBox:"0 0 16 16"},y,8,v))}},$={class:"grid grid-cols-2 gap-4"},z=["onClick"],C=["onClick"],V=["srcset"],M=["data-src","alt"],B=["href"],S={__name:"ItemsTable",props:["data"],emits:["editOrderItem","destroyOrderItem"],setup(i){const d=g([{label:"\u0424\u043E\u0442\u043E",key:"preview"},{label:"\u041D\u0430\u0437\u0432\u0430",key:"h1"},{label:"\u041A\u0456\u043B\u044C\u043A\u0456\u0441\u0442\u044C",key:"count"},{label:"\u0426\u0456\u043D\u0430",key:"sale_price"},{label:"\u0421\u0443\u043C\u0430",key:"total_price"},{label:"\u041A\u043E\u043B\u0456\u0440",key:"color"},{label:"\u0420\u043E\u0437\u043C\u0456\u0440",key:"size"},{label:"\u0414\u043E\u0434.\u043F\u0440\u043E\u0434\u0430\u0436\u0430",key:"resale"},{label:"\u0417\u043D\u0438\u0436\u043A\u0430",key:"discount"},{label:"\u0410\u0440\u0442\u0438\u043A\u0443\u043B",key:"vendor_code"},{label:"#",key:"actions"}]);return(o,I)=>{const w=p("xcircle-component"),m=p("table-component");return s(),b(m,{isSlotMode:!0,rows:i.data,headings:d},{actions:r(({data:e})=>[t("div",$,[t("a",{href:"javascript:",onClick:a=>o.$emit("editOrderItem",e.row.id,e.i)},[u(f)],8,z),t("a",{href:"javascript:",onClick:a=>o.$emit("destroyOrderItem",e.row.id,e.i)},[u(w)],8,C)])]),preview:r(({data:e})=>[t("picture",null,[t("source",{srcset:o.route("images.350",e.row.product.preview.webp_src),type:"image/webp"},null,8,V),t("img",{"data-src":o.route("images.350",e.row.product.preview.src),alt:e.row.product.h1.ua?e.row.product.h1.ua:e.row.product.h1.ru,class:"h-full object-cover w-full"},null,8,M)])]),color:r(({data:e})=>[(s(!0),c(_,null,h(e.row.color,a=>(s(),c("span",null,l(a),1))),256))]),size:r(({data:e})=>[(s(!0),c(_,null,h(e.row.size,a=>(s(),c("span",null,l(a),1))),256))]),resale:r(({data:e})=>[n(l(e.row.resale?"\u0422\u0430\u043A":"\u041D\u0456"),1)]),sale_price:r(({data:e})=>[n(l(o.$filters.formatMoney(e.row.sale_price)),1)]),total_price:r(({data:e})=>[n(l(o.$filters.formatMoney(e.row.total_price)),1)]),vendor_code:r(({data:e})=>[n(l(e.row.product.vendor_code),1)]),h1:r(({data:e})=>[t("a",{href:o.route("product",e.row.product.id),target:"_blank"},l(e.row.product.h1.ua?e.row.product.h1.ua:e.row.product.h1.ru),9,B)]),_:1},8,["rows","headings"])}}};export{S as default};
