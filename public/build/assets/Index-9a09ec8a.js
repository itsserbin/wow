import w from"./Support-6e3e13a6.js";import S from"./Consultation-7fcdf072.js";import k from"./Content-9e9e6e9c.js";import v from"./Banners-73cb5fa0.js";import F from"./Products-9ac13071.js";import b from"./Sort-e907bd16.js";import L from"./Filter-828d8af3.js";import{P}from"./ProductsRepository-30e2f09f.js";import $ from"./Button-a598e6b2.js";import{_ as x}from"./MasterLayout-d937be98.js";import M from"./Breadcrumbs-a7697ce7.js";import V from"./Head-ce2c0f51.js";import{j as _,g as p,z as C,l as a,m as j,n as s,p as i,s as n,t as l,y as B,A as N,F as z,w as U}from"./index-a01126e2.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./Modal-4a985b91.js";import"./Loader-4079abec.js";import"./Input-f389d631.js";import"./InputError-f28ae438.js";import"./swal-03cac797.js";import"./maska-224de96c.js";import"./swiper-slide-9942daa4.js";import"./pagination-09fa0ae8.js";import"./autoplay-5b9d7d48.js";import"./ProductCards-c0ec583a.js";import"./ProductCard-e0b7cd73.js";import"./eventTracking-f0a600c6.js";import"./Accordion-0a08389a.js";import"./AccordionItem-c5205387.js";import"./index-10963069.js";import"./Callback-e4d8a8f7.js";import"./Label-106de98b.js";import"./Header-cef4326c.js";import"./CartIcon-0074655f.js";import"./Langs-1324ac38.js";import"./Logo-83ffc10f.js";import"./HeaderCategories-9feed3c9.js";import"./lazy-e052734e.js";import"./Footer-9e10e39a.js";import"./ScrollToTop-e1a64eae.js";import"./Breadcrumbs-b886890f.js";import"./Head-e91aef5a.js";const I={class:"grid grid-cols-1 gap-4"},O={class:"flex justify-between md:justify-end items-center"},A={class:"block md:hidden mr-2"},E={class:"grid grid-cols-12 gap-4"},R={class:"products col-span-12 md:col-span-9"},T=_({layout:x}),_t=Object.assign(T,{__name:"Index",props:["banners","lang","title","characteristics","text","consultation","products","categories","category","options","pages","eventIdPageView"],setup(t){const m=t,o=p({products:m.products.data,isLoadingMore:!1,isShowLoadMore:m.products.to!==m.products.total,isShowFilter:!1}),r=p({currentPage:1,sort:null,filter:null}),f=C(()=>{const{currentPage:e,sort:c,filter:g}=r;return{page:e,sort:c,filter:g,slug:route().params.slug}}),h=async()=>{r.currentPage=0,o.products=[],await d()},y=async e=>{r.filter=e,r.currentPage=0,o.products=[],o.isShowFilter&&u(),await d()},d=async()=>{r.currentPage+=1;try{const e=await P.v1().category(f.value);e.success&&(r.currentPage=e.result.current_page,o.products=o.products.concat(e.result.data),o.isShowLoadMore=e.result.to!==e.result.total)}catch(e){console.error(e),o.isLoading=!1}},u=()=>{o.isShowFilter=!o.isShowFilter};return(e,c)=>(a(),j(z,null,[s(V,{category:t.category,lang:t.lang},null,8,["category","lang"]),s(M,{currentUrl:e.route().current,options:t.options,lang:t.lang,title:t.category.title[t.lang]},null,8,["currentUrl","options","lang","title"]),i("div",I,[t.banners.length?(a(),n(v,{key:0,lang:t.lang,data:t.banners},null,8,["lang","data"])):l("",!0),i("div",O,[i("div",A,[s($,{type:"button",onClick:u},{default:B(()=>[U("Фільтрувати")]),_:1})]),s(b,{modelValue:r.sort,"onUpdate:modelValue":c[0]||(c[0]=g=>r.sort=g),onSort:h},null,8,["modelValue"])]),i("div",E,[i("div",{class:N([{"!block fixed h-full w-full z-50 overflow-y-scroll top-0 right-0":o.isShowFilter},"filter hidden md:col-span-3 md:block"])},[Object.keys(t.characteristics).length?(a(),n(L,{key:0,characteristics:t.characteristics,lang:t.lang,onFetch:y,onClose:u,isShow:o.isShowFilter},null,8,["characteristics","lang","isShow"])):l("",!0)],2),i("div",R,[o.products.length?(a(),n(F,{key:0,lang:t.lang,title:t.title,data:o.products,isLoadingMore:o.isLoadingMore,isShowLoadMore:o.isShowLoadMore,onFetch:d},null,8,["lang","title","data","isLoadingMore","isShowLoadMore"])):l("",!0)])]),t.text?(a(),n(k,{key:1,data:t.text},null,8,["data"])):l("",!0),t.options.consultation_status==="on"?(a(),n(S,{key:2})):l("",!0),s(w)])],64))}});export{_t as default};
