import{o as a}from"./app.553ddd32.js";import{Q as r,O as t,U as f,K as m,F as s,J as u,z as d,B as n,G as c,P as i}from"./moment.791e2419.js";const g={class:"w-full grid grid-cols-1 gap-4"},_={class:"bg-white border-b border-gray-100 dark:bg-gray-800 dark:border-gray-700 rounded-lg p-4 md:py-0"},p={class:"h-full md:h-12 grid grid-cols-2 md:grid-cols-5 gap-4"},v=i(" \u0422\u043E\u0432\u0430\u0440\u0438 "),y=i(" \u041A\u0430\u0442\u0435\u0433\u043E\u0440\u0456\u0457 "),w=i(" \u0421\u0442\u043E\u0440\u0456\u043D\u043A\u0438 "),k=i(" \u0417\u043E\u0431\u0440\u0430\u0436\u0435\u043D\u043D\u044F "),b=i(" \u0412\u0456\u0434\u0433\u0443\u043A\u0438 "),$={__name:"ContentLayout",props:["title"],setup(l){const o=f("$can");return(e,j)=>{const h=m("auth-layout");return s(),r(h,{title:l.title},{header:t(()=>[u(e.$slots,"header")]),default:t(()=>[d("div",g,[d("nav",_,[d("div",p,[n(o)("show-products")?(s(),r(a,{key:0,href:e.route("admin.content.products"),active:e.route().current("admin.content.products"),class:"justify-center text-center"},{default:t(()=>[v]),_:1},8,["href","active"])):c("",!0),n(o)("show-categories")?(s(),r(a,{key:1,href:e.route("admin.content.categories"),active:e.route().current("admin.content.categories"),class:"justify-center text-center"},{default:t(()=>[y]),_:1},8,["href","active"])):c("",!0),n(o)("show-pages")?(s(),r(a,{key:2,href:e.route("admin.content.pages"),active:e.route().current("admin.content.pages"),class:"justify-center text-center"},{default:t(()=>[w]),_:1},8,["href","active"])):c("",!0),n(o)("show-images")?(s(),r(a,{key:3,href:e.route("admin.content.images"),active:e.route().current("admin.content.images"),class:"justify-center text-center"},{default:t(()=>[k]),_:1},8,["href","active"])):c("",!0),n(o)("show-reviews")?(s(),r(a,{key:4,href:e.route("admin.content.reviews.product"),active:e.route().current("admin.content.reviews.*"),class:"justify-center text-center"},{default:t(()=>[b]),_:1},8,["href","active"])):c("",!0)])]),u(e.$slots,"default")])]),_:3},8,["title"])}}};export{$ as default};