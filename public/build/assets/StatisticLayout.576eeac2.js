import{_ as e}from"./Sidebar.259fb7c7.js";import{u as i,U as m,R as a,V as u,Q as _,Y as o,L as t,J as r}from"./_plugin-vue_export-helper.4dd23699.js";import"./app.bf5b84e8.js";const f={class:"grid grid-cols-1 md:grid-cols-5 gap-4"},h={class:"md:col-span-1"},p={class:"w-full md:col-span-4"},y={__name:"StatisticLayout",props:["title"],setup(n){const c=i([{title:"\u0413\u043E\u043B\u043E\u0432\u043D\u0430",href:route("admin.statistics.index")},{title:"\u041F\u0440\u0438\u0431\u0443\u0442\u043E\u043A",href:route("admin.statistics.profits.index")},{title:"\u0417\u0430\u044F\u0432\u043A\u0438",href:route("admin.statistics.orders.index")},{title:"\u041C\u0430\u0440\u043A\u0435\u0442\u0438\u043D\u0433",href:route("admin.statistics.marketing.index")},{title:"\u041C\u0435\u043D\u0435\u0434\u0436\u0435\u0440\u0438",href:route("admin.statistics.managers.index")}]),l=i([{title:"\u0412\u0438\u0442\u0440\u0430\u0442\u0438",href:route("admin.statistics.costs.index")},{title:"\u041A\u0430\u0442\u0435\u0433\u043E\u0440\u0456\u0457 \u0432\u0438\u0442\u0440\u0430\u0442",href:route("admin.statistics.costs.categories.index")}]);return(s,x)=>{const d=u("auth-layout");return _(),m(d,{title:n.title},{header:a(()=>[o(s.$slots,"header")]),default:a(()=>[t("div",f,[t("div",h,[r(e,{items:c,class:"mb-5"},null,8,["items"]),r(e,{items:l},null,8,["items"])]),t("div",p,[o(s.$slots,"default")])])]),_:3},8,["title"])}}};export{y as default};
