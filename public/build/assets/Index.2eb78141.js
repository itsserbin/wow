import{ag as d,m as o,w as r,v as l,B as u,o as t,i as s,g as h,s as m,y as p,D as g,u as a,L as _,t as f,F as w}from"./vendor.baa499d2.js";import"./__commonjsHelpers__.488ed5c2.js";const v={class:"grid grid-cols-1"},y={class:"grid grid-cols-2 md:grid-cols-2 gap-4"},k={class:"p-5 bg-gray-50 rounded dark:bg-gray-800 text-gray-900 dark:text-white"},C={__name:"Index",setup(x){const i=l("$can"),n=d([{title:"\u0422\u043E\u0432\u0430\u0440\u0438",permission:"show-products",href:route("admin.content.products")},{title:"\u041A\u0430\u0442\u0435\u0433\u043E\u0440\u0456\u0457",permission:"show-categories",href:route("admin.content.categories")},{title:"\u0421\u0442\u043E\u0440\u0456\u043D\u043A\u0438",permission:"show-pages",href:route("admin.content.pages")},{title:"\u0417\u043E\u0431\u0440\u0430\u0436\u0435\u043D\u043D\u044F",permission:"show-images",href:route("admin.content.images")},{title:"\u0412\u0456\u0434\u0433\u0443\u043A\u0438",permission:"show-reviews",href:route("admin.content.reviews.product")}]);return(B,D)=>{const c=u("auth-layout");return t(),o(c,null,{default:r(()=>[s("div",v,[s("div",y,[(t(!0),h(w,null,m(n,e=>p((t(),o(a(_),{href:e.href},{default:r(()=>[s("div",k,f(e.title),1)]),_:2},1032,["href"])),[[g,a(i)(e.permission)]])),256))])])]),_:1})}}};export{C as default};