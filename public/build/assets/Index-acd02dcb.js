import u from"./Breadcrumbs-8113cad3.js";import p from"./Card-6b897ed7.js";import d from"./Loader-61360dbf.js";import g from"./Button-23fb6d1c.js";import _ from"./Head-7fb5c9df.js";import{_ as f}from"./MasterLayout-5dc9e578.js";import{f as v,g as x,o as y,m as r,E as l,F as m,C as h,A as s,q as a,B as w,p as L,y as t,s as M,v as k}from"./index-bc3c132c.js";import"./Breadcrumbs-d838bc30.js";import"./moment-fbc5633a.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./Header-4e8300ae.js";import"./CartIcon-0dd2aeff.js";import"./Langs-d061ad53.js";import"./Logo-3d23fa23.js";import"./HeaderCategories-9ccd6cd7.js";import"./create-element-if-not-defined-cfc4b805.js";import"./pagination-93e47b88.js";import"./lazy-e32f6dbe.js";import"./autoplay-1fa09654.js";import"./swiper-slide-df8ae9a2.js";import"./Footer-ac622e64.js";import"./FixedBanner-2bf1409b.js";import"./ScrollToTop-28cf97b5.js";const b={key:0},B=L("h1",{class:"font-bold text-black text-center text-[24px] mb-[15px]"}," Відгуки ",-1),C={key:0,class:"text-center"},V=v({layout:f}),Z=Object.assign(V,{__name:"Index",props:{lang:String,categories:Array,options:Object,pages:Array,textLoadMore:{type:String,default:"Завантажити ще"},eventIdPageView:String},setup(i){const e=x({reviews:[],isLoadingMore:!1,showLoadMore:!0,currentPage:0,endpoint:"/api/v1/reviews/paginate-list?page="});y(async()=>{await n()});const n=async()=>{e.value.isLoadingMore=!0,axios.get(e.value.endpoint+(e.value.currentPage+1)).then(({data:o})=>{e.value.isLoadingMore=!1,e.value.currentPage=o.result.current_page,e.value.reviews=e.value.reviews.concat(o.result.data),e.value.showLoadMore=o.result.to!==o.result.total})};return(o,$)=>(t(),r(m,null,[l(_,{title:"Відгуки"}),e.value.reviews.length?(t(),r("div",b,[l(u,{options:i.options,lang:i.lang,title:"Відгуки"},null,8,["options","lang"]),B,(t(!0),r(m,null,h(e.value.reviews,c=>(t(),s(p,{item:c},null,8,["item"]))),256)),e.value.showLoadMore?(t(),r("div",C,[e.value.isLoadingMore?(t(),s(d,{key:0})):a("",!0),e.value.isLoadingMore?a("",!0):(t(),s(g,{key:1,onClick:n,type:"button"},{default:w(()=>[M(k(i.textLoadMore),1)]),_:1}))])):a("",!0)])):a("",!0)],64))}});export{Z as default};
