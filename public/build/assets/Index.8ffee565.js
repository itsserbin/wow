import{p as c,w as t,x as l,C as d,o as r,j as s,i as m,v as h,z as p,E as u,u as o,y as _,t as f,L as g,F as w}from"./vendor.2c8aab53.js";import"./__commonjsHelpers__.4516dc8a.js";const v={class:"grid grid-cols-1"},k={class:"grid grid-cols-2 md:grid-cols-2 gap-4"},x={class:"p-5 bg-gray-50 rounded dark:bg-gray-800 text-gray-900 dark:text-white"},j={__name:"Index",setup(y){const a=l("$can"),i=[{title:"\u0417\u0430\u043C\u043E\u0432\u043B\u0435\u043D\u043D\u044F",permission:"show-orders",href:route("admin.crm.orders")},{title:"\u041A\u043B\u0456\u0454\u043D\u0442\u0438",permission:"show-clients",href:route("admin.crm.clients")},{title:"\u0417\u0432\u043E\u0440\u043E\u0442\u043D\u0456\u0439 \u0437\u0432\u02BC\u044F\u0437\u043E\u043A",permission:"show-callbacks",href:route("admin.crm.callbacks")},{title:"\u041F\u0456\u0434\u0442\u0440\u0438\u043C\u043A\u0430 \u043A\u043B\u0456\u0454\u043D\u0442\u0456\u0432",permission:"show-supports",href:route("admin.crm.supports")},{title:"\u0420\u0430\u0445\u0443\u043D\u043A\u0438",permission:"show-invoices",href:route("admin.crm.invoices")}];return(b,B)=>{const n=d("auth-layout");return r(),c(n,null,{default:t(()=>[s("div",v,[s("div",k,[(r(),m(w,null,h(i,e=>p(_(o(g),{href:e.href},{default:t(()=>[s("div",x,f(e.title),1)]),_:2},1032,["href"]),[[u,o(a)(e.permission)]])),64))])])]),_:1})}}};export{j as default};