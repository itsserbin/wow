import{p as o}from"./app-351aedfb.js";import{s as t,v as r,y as f,D as h,p as a,q as d,i as u,u as c,k as i,j as n}from"./app-0cccff29.js";import"./index.esm-87d59e5b.js";import"./vue-i18n.esm-bundler-7516fc44.js";import"./moment-fbc5633a.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./Logo-857fc5bc.js";const p={class:"w-full grid grid-cols-1 gap-4"},v={class:"bg-white border-b border-gray-100 dark:bg-gray-800 dark:border-gray-700 rounded-lg p-4 md:py-0"},y={class:"h-full md:h-12 grid grid-cols-2 md:grid-cols-5 gap-4"},B={__name:"CrmLayout",props:["title"],setup(l){const s=f("$can");return(e,g)=>{const m=h("auth-layout");return a(),t(m,{title:l.title},{header:r(()=>[d(e.$slots,"header")]),default:r(()=>[u("div",p,[u("nav",v,[u("div",y,[c(s)("show-orders")?(a(),t(o,{key:0,href:e.route("admin.crm.orders"),active:e.route().current("admin.crm.orders"),class:"justify-center text-center"},{default:r(()=>[i(" Замовлення ")]),_:1},8,["href","active"])):n("",!0),c(s)("show-clients")?(a(),t(o,{key:1,href:e.route("admin.crm.clients"),active:e.route().current("admin.crm.clients"),class:"justify-center text-center"},{default:r(()=>[i(" Клієнти ")]),_:1},8,["href","active"])):n("",!0),c(s)("show-callbacks")?(a(),t(o,{key:2,href:e.route("admin.crm.callbacks"),active:e.route().current("admin.crm.callbacks"),class:"justify-center text-center"},{default:r(()=>[i(" Зворотній звʼязок ")]),_:1},8,["href","active"])):n("",!0),c(s)("show-supports")?(a(),t(o,{key:3,href:e.route("admin.crm.supports"),active:e.route().current("admin.crm.supports"),class:"justify-center text-center"},{default:r(()=>[i(" Підтримка ")]),_:1},8,["href","active"])):n("",!0),c(s)("show-invoices")?(a(),t(o,{key:4,href:e.route("admin.crm.invoices"),active:e.route().current("admin.crm.invoices"),class:"justify-center text-center"},{default:r(()=>[i(" Рахунки ")]),_:1},8,["href","active"])):n("",!0)])]),d(e.$slots,"default")])]),_:3},8,["title"])}}};export{B as default};
