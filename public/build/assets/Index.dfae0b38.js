import{i as g,_ as S}from"./load.04b6d02c.js";import k from"./Support.e80cd578.js";import P from"./Consultation.27cd5386.js";import L from"./Content.ee10cac8.js";import V from"./Banners.b8051d65.js";import x from"./Products.906c7bcb.js";import M from"./Sort.3cbf75d4.js";import b from"./Filter.a17dad0e.js";import{P as F}from"./ProductsRepository.3b7ddd33.js";import $ from"./Button.8012267c.js";import C from"./Breadcrumbs.99afd0e3.js";import{i as f,m as I,o as B,B as i,C as p,z as r,G as m,q as s,s as l,y as N,u as j,v as z}from"./index.1726d409.js";import"./Header.80ddd88d.js";import"./CartIcon.e7c5a976.js";import"./Langs.3beb2cbc.js";import"./Logo.9264c4eb.js";import"./HeaderCategories.bf8b75cb.js";import"./create-element-if-not-defined.26147364.js";import"./pagination.44308c03.js";import"./lazy.2bfe2e68.js";import"./autoplay.88899761.js";import"./swiper-slide.7de65c6d.js";import"./Footer.d755c37c.js";import"./FixedBanner.2140537c.js";import"./_plugin-vue_export-helper.cdc0426e.js";import"./Loader.471d868e.js";import"./ProductCards.fa5bc552.js";import"./ProductCard.16bad754.js";import"./app.63860471.js";import"./lazyload.6866379a.js";import"./navigation.b481f07e.js";import"./Input.c1a6bdb4.js";import"./Accordion.31491f58.js";import"./AccordionItem.d4dc981e.js";import"./index.02b5b7d6.js";import"./Breadcrumbs.6cb7044e.js";const q={class:"grid grid-cols-1 gap-4"},G={class:"flex justify-between md:justify-end items-center"},O={class:"block md:hidden mr-2"},R=z("\u0424\u0456\u043B\u044C\u0442\u0440\u0443\u0432\u0430\u0442\u0438"),T={class:"grid grid-cols-12 gap-4"},U={class:"products col-span-12 md:col-span-9"},Vt={__name:"Index",props:["banners","lang","title","characteristics","text","consultation","products","categories","category","options","pages","eventIdPageView"],setup(t){const v=t,e=f({products:[],isLoadingMore:!1,isShowLoadMore:!0,isShowFilter:!1}),o=f({currentPage:1,sort:null,filter:null}),h=I(()=>{const{currentPage:a,sort:n,filter:d}=o.value;return{page:a,sort:n,filter:d,slug:route().params.slug}});B(async()=>{e.value.products=v.products.data,g.value=!1});const w=async()=>{o.value.currentPage=0,e.value.products=[],await c()},y=async a=>{o.value.filter=a,o.value.currentPage=0,e.value.products=[],e.value.isShowFilter&&u(),await c()},c=async()=>{o.value.currentPage+=1;try{const a=await F.v1().category(h.value);a.success&&(o.value.currentPage=a.result.current_page,e.value.products=e.value.products.concat(a.result.data),e.value.isShowLoadMore=a.result.to!==a.result.total)}catch(a){console.error(a),e.value.isLoading=!1}},u=()=>{e.value.isShowFilter=!e.value.isShowFilter};return(a,n)=>(r(),i(S,{categories:t.categories,options:t.options,lang:t.lang,pages:t.pages,eventIdPageView:t.eventIdPageView},{default:p(()=>[m(C,{options:t.options,lang:t.lang,title:t.category.title[t.lang]},null,8,["options","lang","title"]),s("div",q,[t.banners.length?(r(),i(V,{key:0,lang:t.lang,data:t.banners},null,8,["lang","data"])):l("",!0),s("div",G,[s("div",O,[m($,{type:"button",onClick:u},{default:p(()=>[R]),_:1})]),m(M,{modelValue:o.value.sort,"onUpdate:modelValue":n[0]||(n[0]=d=>o.value.sort=d),onSort:w},null,8,["modelValue"])]),s("div",T,[s("div",{class:N([{"!block fixed h-full w-full z-50 overflow-y-scroll top-0 right-0":e.value.isShowFilter},"filter hidden md:col-span-3 md:block"])},[Object.keys(t.characteristics).length?(r(),i(b,{key:0,characteristics:t.characteristics,lang:t.lang,onFetch:y,onClose:u,isShow:e.value.isShowFilter},null,8,["characteristics","lang","isShow"])):l("",!0)],2),s("div",U,[e.value.products.length?(r(),i(x,{key:0,lang:t.lang,title:t.title,data:e.value.products,isLoadingMore:e.value.isLoadingMore,isShowLoadMore:e.value.isShowLoadMore,onFetch:c},null,8,["lang","title","data","isLoadingMore","isShowLoadMore"])):l("",!0)])]),t.text?(r(),i(L,{key:1,data:t.text},null,8,["data"])):l("",!0),t.consultation?(r(),i(P,{key:2})):l("",!0),j(g)?l("",!0):(r(),i(k,{key:3}))])]),_:1},8,["categories","options","lang","pages","eventIdPageView"]))}};export{Vt as default};
