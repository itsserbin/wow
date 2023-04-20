import{i as g}from"./load-961000ef.js";import w from"./Support-3ddce1aa.js";import S from"./Consultation-f3569e91.js";import k from"./Content-aa62c889.js";import F from"./Banners-f1d7dd73.js";import L from"./Products-e2bfe363.js";import b from"./Sort-03bf1f7b.js";import x from"./Filter-7119b441.js";import{P as M}from"./ProductsRepository-30e2f09f.js";import P from"./Button-60b98f54.js";import{_ as $}from"./MasterLayout-708fe47e.js";import V from"./Breadcrumbs-a0175d26.js";import C from"./Head-bf9fce9a.js";import{m as _,r as f,j,o as B,p as r,q as N,l as c,v as i,D as s,C as l,x as U,y as z,t as I,F as O,A as q}from"./app-f55448cf.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./Modal-d1854147.js";import"./Loader-5995a82b.js";import"./Input-98d67925.js";import"./InputError-688221d0.js";import"./swal-01ed9a07.js";import"./maska-224de96c.js";import"./swiper-slide-34ecd3e2.js";import"./pagination-6ae33427.js";import"./autoplay-2a374956.js";import"./ProductCards-50a179cf.js";import"./ProductCard-d1f91d6f.js";import"./app-a1b5f484.js";import"./vue-i18n.esm-bundler-d070be13.js";import"./eventTracking-2c28b7ec.js";import"./Accordion-f0e65e67.js";import"./AccordionItem-32f4f6a4.js";import"./index-10963069.js";import"./Header-6bd9643f.js";import"./CartIcon-2fcb85d4.js";import"./Langs-a0e0f8ed.js";import"./Logo-edac3a30.js";import"./HeaderCategories-f7d5d684.js";import"./lazy-eaa7cd7a.js";import"./Footer-57c415cb.js";import"./FixedBanner-43435fe8.js";import"./ScrollToTop-e8556863.js";import"./Breadcrumbs-f4355ac7.js";import"./Head-949a494b.js";const A={class:"grid grid-cols-1 gap-4"},D={class:"flex justify-between md:justify-end items-center"},E={class:"block md:hidden mr-2"},R={class:"grid grid-cols-12 gap-4"},T={class:"products col-span-12 md:col-span-9"},G=_({layout:$}),Ut=Object.assign(G,{__name:"Index",props:["banners","lang","title","characteristics","text","consultation","products","categories","category","options","pages","eventIdPageView"],setup(t){const p=t,e=f({products:[],isLoadingMore:!1,isShowLoadMore:!0,isShowFilter:!1}),o=f({currentPage:1,sort:null,filter:null}),v=j(()=>{const{currentPage:a,sort:n,filter:d}=o.value;return{page:a,sort:n,filter:d,slug:route().params.slug}});B(async()=>{e.value.products=p.products.data,g.value=!1});const h=async()=>{o.value.currentPage=0,e.value.products=[],await u()},y=async a=>{o.value.filter=a,o.value.currentPage=0,e.value.products=[],e.value.isShowFilter&&m(),await u()},u=async()=>{o.value.currentPage+=1;try{const a=await M.v1().category(v.value);a.success&&(o.value.currentPage=a.result.current_page,e.value.products=e.value.products.concat(a.result.data),e.value.isShowLoadMore=a.result.to!==a.result.total)}catch(a){console.error(a),e.value.isLoading=!1}},m=()=>{e.value.isShowFilter=!e.value.isShowFilter};return(a,n)=>(r(),N(O,null,[c(C,{category:t.category,lang:t.lang},null,8,["category","lang"]),c(V,{currentUrl:a.route().current,options:t.options,lang:t.lang,title:t.category.title[t.lang]},null,8,["currentUrl","options","lang","title"]),i("div",A,[t.banners.length?(r(),s(F,{key:0,lang:t.lang,data:t.banners},null,8,["lang","data"])):l("",!0),i("div",D,[i("div",E,[c(P,{type:"button",onClick:m},{default:U(()=>[q("Фільтрувати")]),_:1})]),c(b,{modelValue:o.value.sort,"onUpdate:modelValue":n[0]||(n[0]=d=>o.value.sort=d),onSort:h},null,8,["modelValue"])]),i("div",R,[i("div",{class:z([{"!block fixed h-full w-full z-50 overflow-y-scroll top-0 right-0":e.value.isShowFilter},"filter hidden md:col-span-3 md:block"])},[Object.keys(t.characteristics).length?(r(),s(x,{key:0,characteristics:t.characteristics,lang:t.lang,onFetch:y,onClose:m,isShow:e.value.isShowFilter},null,8,["characteristics","lang","isShow"])):l("",!0)],2),i("div",T,[e.value.products.length?(r(),s(L,{key:0,lang:t.lang,title:t.title,data:e.value.products,isLoadingMore:e.value.isLoadingMore,isShowLoadMore:e.value.isShowLoadMore,onFetch:u},null,8,["lang","title","data","isLoadingMore","isShowLoadMore"])):l("",!0)])]),t.text?(r(),s(k,{key:1,data:t.text},null,8,["data"])):l("",!0),t.consultation?(r(),s(S,{key:2})):l("",!0),I(g)?l("",!0):(r(),s(w,{key:3}))])],64))}});export{Ut as default};