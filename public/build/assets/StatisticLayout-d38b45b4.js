import{x as _,t as o,S as n}from"./app-23639435.js";import{s as g,v as s,y as v,p as i,q as c,u as x,g as r,i as d,z as a,F as l,x as u,j as k}from"./app-da11968c.js";import"./vue-i18n.esm-bundler-7f92347f.js";import"./moment-fbc5633a.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./Logo-9fe22fca.js";const $={key:0,class:"grid grid-cols-1 md:grid-cols-5 gap-4"},B={class:"md:col-span-1"},S={class:"w-full md:col-span-4"},F={__name:"StatisticLayout",props:["title"],setup(m){const f=v("$can"),h=[{title:"Головна",href:route("admin.statistics.index")},{title:"Повернення",href:route("admin.statistics.refunds.index")},{title:"Прибуток",href:route("admin.statistics.profits.index")},{title:"Заявки",href:route("admin.statistics.orders.index")},{title:"Маркетинг",href:route("admin.statistics.marketing.index")},{title:"Менеджери",href:route("admin.statistics.managers.index")},{title:"Товари",href:route("admin.statistics.products.index")}],p=[{title:"Витрати",href:route("admin.statistics.costs.index")},{title:"Категорії витрат",href:route("admin.statistics.costs.categories.index")}];return(t,b)=>(i(),g(_,{title:m.title},{header:s(()=>[c(t.$slots,"header")]),default:s(()=>[x(f)("show-bookkeeping")?(i(),r("div",$,[d("div",B,[a(n,{class:"mb-5"},{default:s(()=>[(i(),r(l,null,u(h,e=>a(o,{item:e,active:t.route(t.route().current())===e.href},null,8,["item","active"])),64))]),_:1}),a(n,null,{default:s(()=>[(i(),r(l,null,u(p,e=>a(o,{item:e,active:t.route(t.route().current())===e.href},null,8,["item","active"])),64))]),_:1})]),d("div",S,[c(t.$slots,"default")])])):k("",!0)]),_:3},8,["title"]))}};export{F as default};
