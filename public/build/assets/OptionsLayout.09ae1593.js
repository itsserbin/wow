import{ax as a,W as n,U as i,Y as l,S as o,a7 as f,M as d,K as u,L as m,V as c,F as p}from"./moment.325cf309.js";const g={class:"grid grid-cols-1 md:grid-cols-5 gap-4"},B={class:"md:col-span-1"},L={class:"w-full md:col-span-4"},F={__name:"OptionsLayout",props:["title"],setup(h){const _=a([{title:"\u0413\u043E\u043B\u043E\u0432\u043D\u0430",href:route("admin.options.index")},{title:"\u041E\u0441\u043D\u043E\u0432\u043D\u0456",href:route("admin.options.main")},{title:"\u0421\u043A\u0440\u0438\u043F\u0442\u0438",href:route("admin.options.scripts")},{title:"\u0411\u0430\u043D\u0435\u0440\u0438",href:route("admin.options.banners.index")},{title:"\u041F\u0435\u0440\u0435\u0432\u0430\u0433\u0438",href:route("admin.options.advantages.index")},{title:"FAQ",href:route("admin.options.faqs.index")}]),v=a([{title:"\u041A\u043E\u0440\u0438\u0441\u0442\u0443\u0432\u0430\u0447\u0456",href:route("admin.users.index")},{title:"\u0420\u043E\u043B\u0456",href:route("admin.roles.index")},{title:"\u041F\u0440\u0430\u0432\u0430",href:route("admin.permissions.index")}]),x=a([{title:"\u041A\u043E\u043B\u044C\u043E\u0440\u0438",href:route("admin.options.colors.index")},{title:"\u0420\u043E\u0437\u043C\u0456\u0440\u0438",href:route("admin.options.sizes.index")},{title:"\u041F\u043E\u0441\u0442\u0430\u0447\u0430\u043B\u044C\u043D\u0438\u043A\u0438",href:route("admin.options.providers.index")},{title:"\u041F\u0440\u043E\u043C\u043E-\u043A\u043E\u0434\u0438",href:route("admin.options.promo-codes.index")},{title:"XML",href:route("admin.options.xmls.index")}]);return(e,k)=>{const r=l("sidebar-item"),s=l("sidebar-component"),b=l("auth-layout");return o(),n(b,{title:h.title},{header:i(()=>[f(e.$slots,"header")]),default:i(()=>[d("div",g,[d("div",B,[u(s,{class:"mb-5"},{default:i(()=>[(o(!0),m(p,null,c(_,t=>(o(),n(r,{item:t,active:e.route(e.route().current())===t.href},null,8,["item","active"]))),256))]),_:1}),u(s,{class:"mb-5"},{default:i(()=>[(o(!0),m(p,null,c(x,t=>(o(),n(r,{item:t,active:e.route(e.route().current())===t.href},null,8,["item","active"]))),256))]),_:1}),u(s,null,{default:i(()=>[(o(!0),m(p,null,c(v,t=>(o(),n(r,{item:t,active:e.route(e.route().current())===t.href},null,8,["item","active"]))),256))]),_:1})]),d("div",L,[f(e.$slots,"default")])])]),_:3},8,["title"])}}};export{F as default};
