import{q as s}from"./app-739a5adb.js";import{s as r,v as t,y as f,D as h,p as a,q as d,i as u,u as n,k as c,j as i}from"./app-85fc3642.js";import"./vue-i18n.esm-bundler-b26da7fc.js";import"./moment-fbc5633a.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./Logo-39ed68e3.js";const p={class:"w-full grid grid-cols-1 gap-4"},g={class:"bg-white border-b border-gray-100 dark:bg-gray-800 dark:border-gray-700 rounded-lg p-4 md:py-0"},v={class:"h-full md:h-12 grid grid-cols-2 md:grid-cols-5 gap-4"},$={__name:"ContentLayout",props:["title"],setup(l){const o=f("$can");return(e,y)=>{const m=h("auth-layout");return a(),r(m,{title:l.title},{header:t(()=>[d(e.$slots,"header")]),default:t(()=>[u("div",p,[u("nav",g,[u("div",v,[n(o)("show-products")?(a(),r(s,{key:0,href:e.route("admin.content.products"),active:e.route().current("admin.content.products"),class:"justify-center text-center"},{default:t(()=>[c(" Товари ")]),_:1},8,["href","active"])):i("",!0),n(o)("show-categories")?(a(),r(s,{key:1,href:e.route("admin.content.categories"),active:e.route().current("admin.content.categories"),class:"justify-center text-center"},{default:t(()=>[c(" Категорії ")]),_:1},8,["href","active"])):i("",!0),n(o)("show-pages")?(a(),r(s,{key:2,href:e.route("admin.content.pages"),active:e.route().current("admin.content.pages"),class:"justify-center text-center"},{default:t(()=>[c(" Сторінки ")]),_:1},8,["href","active"])):i("",!0),n(o)("show-images")?(a(),r(s,{key:3,href:e.route("admin.content.images"),active:e.route().current("admin.content.images"),class:"justify-center text-center"},{default:t(()=>[c(" Зображення ")]),_:1},8,["href","active"])):i("",!0),n(o)("show-reviews")?(a(),r(s,{key:4,href:e.route("admin.content.reviews.product"),active:e.route().current("admin.content.reviews.*"),class:"justify-center text-center"},{default:t(()=>[c(" Відгуки ")]),_:1},8,["href","active"])):i("",!0)])]),d(e.$slots,"default")])]),_:3},8,["title"])}}};export{$ as default};