import{i as c,_ as g}from"./load.b37ff6c1.js";import r from"./Breadcrumbs.3d2db132.js";import{o as l,C as m,D as d,g as p,A as a,q as f,H as u,s as n,y as h,v as x}from"./index.e4375aa7.js";import"./Header.e8aa8bb2.js";import"./CartIcon.4309a04f.js";import"./Langs.e14d71d1.js";import"./Logo.6d532cc3.js";import"./HeaderCategories.0efe3a6c.js";import"./create-element-if-not-defined.26147364.js";import"./pagination.44308c03.js";import"./lazy.2bfe2e68.js";import"./autoplay.88899761.js";import"./swiper-slide.5e46ad1c.js";import"./Footer.41bbe5c1.js";import"./FixedBanner.e4ee86af.js";import"./Breadcrumbs.ebc3090a.js";const v={key:0},V={class:"font-bold text-black text-center text-2xl font-heading mb-[15px]"},w=["innerHTML"],S={__name:"Index",props:["page","lang","categories","options","pages","eventIdPageView"],setup(e){const o=e,{appContext:i}=p(),{$fbq:s}=i.config.globalProperties;return l(()=>{c.value=!1;try{s("PageView",{},o.eventIdPageView)}catch(t){console.error(t)}}),(t,I)=>(a(),m(g,{categories:e.categories,options:e.options,lang:e.lang,pages:e.pages,eventIdPageView:e.eventIdPageView},{default:d(()=>[e.page?(a(),f("div",v,[u(r,{options:e.options,lang:e.lang,title:e.page.h1[e.lang]},null,8,["options","lang","title"]),n("h1",V,h(e.page.h1[e.lang]),1),n("div",{class:"content",innerHTML:e.page.content[e.lang]},null,8,w)])):x("",!0)]),_:1},8,["categories","options","lang","pages","eventIdPageView"]))}};export{S as default};
