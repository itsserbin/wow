import{A as x,B as o,D as w,K as v,y as t,p as e,m as n,C as a,G as d,N as l,u as i,E as p,v as h,L as c,F as m}from"./index-bc3c132c.js";const y={class:"grid grid-cols-1 gap-14"},k={class:"grid grid-cols-2 md:grid-cols-3 gap-4"},b={class:"p-5 bg-gray-50 rounded dark:bg-gray-800 text-gray-900 dark:text-white"},B={class:"grid grid-cols-2 md:grid-cols-3 gap-4"},L={class:"p-5 bg-gray-50 rounded dark:bg-gray-800 text-gray-900 dark:text-white"},C={class:"grid grid-cols-2 md:grid-cols-3 gap-4"},D={class:"p-5 bg-gray-50 rounded dark:bg-gray-800 text-gray-900 dark:text-white"},A={__name:"Index",setup(F){const r=w("$can"),u=[{title:"Головна",permission:"show-options",href:route("admin.options.index")},{title:"Основні",permission:"show-main-options",href:route("admin.options.main")},{title:"Скрипти",permission:"show-scripts-options",href:route("admin.options.scripts")},{title:"Банери",permission:"show-banners",href:route("admin.options.banners.index")},{title:"Переваги",permission:"show-advantages",href:route("admin.options.advantages.index")},{title:"FAQ",permission:"show-faq",href:route("admin.options.faqs.index")}],f=[{title:"Користувачі",permission:"show-users",href:route("admin.users.index")},{title:"Ролі",permission:"show-roles",href:route("admin.roles.index")},{title:"Права",permission:"show-permissions",href:route("admin.permissions.index")}],g=[{title:"Кольори",permission:"show-colors",href:route("admin.options.colors.index")},{title:"Розміри",permission:"show-sizes",href:route("admin.options.sizes.index")},{title:"Характеристики",permission:"show-characteristics",href:route("admin.options.characteristics.index")},{title:"Постачальники",permission:"show-providers",href:route("admin.options.providers.index")},{title:"Промо-коди",permission:"show-promo-codes",href:route("admin.options.promo-codes.index")},{title:"XML",permission:"show-xmls",href:route("admin.options.xmls.index")}];return(N,q)=>{const _=v("auth-layout");return t(),x(_,null,{default:o(()=>[e("div",y,[e("div",k,[(t(),n(m,null,a(u,s=>d(p(i(c),{href:s.href},{default:o(()=>[e("div",b,h(s.title),1)]),_:2},1032,["href"]),[[l,i(r)(s.permission)]])),64))]),e("div",B,[(t(),n(m,null,a(f,s=>d(p(i(c),{href:s.href},{default:o(()=>[e("div",L,h(s.title),1)]),_:2},1032,["href"]),[[l,i(r)(s.permission)]])),64))]),e("div",C,[(t(),n(m,null,a(g,s=>d(p(i(c),{href:s.href},{default:o(()=>[e("div",D,h(s.title),1)]),_:2},1032,["href"]),[[l,i(r)(s.permission)]])),64))])])]),_:1})}}};export{A as default};
