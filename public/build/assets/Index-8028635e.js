import{_ as r}from"./MasterLayout-4308f7a5.js";import l from"./Breadcrumbs-851770a3.js";import m from"./Head-7f84473b.js";import{e as s}from"./eventTracking-dc861e48.js";import{d as c,o as g,g as e,z as n,i as a,l as p,j as d,F as u,p as o}from"./app-443dd386.js";import"./Header-afe8c94e.js";import"./CartIcon-212deb96.js";import"./Langs-f92e0adb.js";import"./Logo-89534839.js";import"./HeaderCategories-f231918a.js";import"./create-element-if-not-defined-cfc4b805.js";import"./pagination-93e47b88.js";import"./lazy-e32f6dbe.js";import"./autoplay-1fa09654.js";import"./swiper-slide-be164eaf.js";import"./Footer-6b726eab.js";import"./FixedBanner-93f459ed.js";import"./ScrollToTop-03f722ab.js";import"./Breadcrumbs-b8c2260d.js";const f={key:0},h={class:"font-bold text-black text-center text-2xl font-heading mb-[15px]"},x=["innerHTML"],V=c({layout:r}),E=Object.assign(V,{__name:"Index",props:["page","lang","categories","options","pages","eventIdPageView"],setup(t){return g(()=>{s("PageView",{},props.eventIdPageView)}),(i,k)=>(o(),e(u,null,[n(m,{title:t.page.meta_title[t.lang]},null,8,["title"]),t.page?(o(),e("div",f,[n(l,{"current-url":i.route().current,options:t.options,lang:t.lang,title:t.page.h1[t.lang]},null,8,["current-url","options","lang","title"]),a("h1",h,p(t.page.h1[t.lang]),1),a("div",{class:"content",innerHTML:t.page.content[t.lang]},null,8,x)])):d("",!0)],64))}});export{E as default};