import{k as _,l as m}from"./app-957518a1.js";import{p as o,g as s,i,s as k,v as r,z as d,j as n,x as h,l,F as w,k as u}from"./app-443dd386.js";import"./vue-i18n.esm-bundler-c84158d1.js";import"./moment-fbc5633a.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./Logo-89534839.js";const g=["width","height"],v=i("path",{d:"M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168l10-10zM11.207 2.5 13.5 4.793 14.793 3.5 12.5 1.207 11.207 2.5zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293l6.5-6.5zm-9.761 5.175-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325z"},null,-1),y=[v],f={__name:"Pencil",props:{width:{type:String,default:"16"},height:{type:String,default:"16"}},setup(a){return(p,t)=>(o(),s("svg",{xmlns:"http://www.w3.org/2000/svg",width:a.width,height:a.height,fill:"currentColor",class:"bi bi-pencil",viewBox:"0 0 16 16"},y,8,g))}},b={class:"grid grid-cols-2 gap-4"},$=["onClick"],z=["onClick"],C={key:0},V=["srcset"],B=["data-src","alt"],M={key:0},j=["href"],x={__name:"Table",props:["data"],emits:["editOrderItem","destroyOrderItem"],setup(a){const p=[{label:"Фото",key:"preview"},{label:"Назва",key:"h1"},{label:"Кількість",key:"count"},{label:"Ціна",key:"sale_price"},{label:"Сума",key:"total_price"},{label:"Колір",key:"color"},{label:"Розмір",key:"size"},{label:"Дод.продажа",key:"resale"},{label:"Знижка",key:"discount"},{label:"Артикул",key:"vendor_code"},{label:"#",key:"actions"}];return(t,I)=>(o(),k(_,{isSlotMode:!0,rows:a.data,headings:p},{actions:r(({data:e})=>[i("div",b,[i("a",{href:"javascript:",onClick:c=>t.$emit("editOrderItem",e.row.id,e.i)},[d(f)],8,$),i("a",{href:"javascript:",onClick:c=>t.$emit("destroyOrderItem",e.row.id,e.i)},[d(m)],8,z)])]),preview:r(({data:e})=>[e.row.product?(o(),s("picture",C,[i("source",{srcset:e.row.product.preview?t.route("images.350",e.row.product.preview.webp_src):null,type:"image/webp"},null,8,V),i("img",{"data-src":e.row.product.preview?t.route("images.350",e.row.product.preview.src):null,alt:e.row.product.h1.ua?e.row.product.h1.ua:e.row.product.h1.ru,class:"h-full object-cover w-full"},null,8,B)])):n("",!0)]),color:r(({data:e})=>[(o(!0),s(w,null,h(e.row.color,c=>(o(),s("span",null,l(c),1))),256))]),size:r(({data:e})=>[(o(!0),s(w,null,h(e.row.size,c=>(o(),s("span",null,l(c),1))),256))]),resale:r(({data:e})=>[u(l(e.row.resale?"Так":"Ні"),1)]),sale_price:r(({data:e})=>[u(l(t.$filters.formatMoney(e.row.sale_price)),1)]),total_price:r(({data:e})=>[u(l(t.$filters.formatMoney(e.row.total_price)),1)]),vendor_code:r(({data:e})=>[e.row.product?(o(),s("div",M,l(e.row.product.vendor_code),1)):n("",!0)]),h1:r(({data:e})=>[e.row.product?(o(),s("a",{key:0,href:t.route("product",e.row.product.id),target:"_blank"},l(e.row.product.h1.ua?e.row.product.h1.ua:e.row.product.h1.ru),9,j)):n("",!0)]),_:1},8,["rows"]))}};export{x as default};
