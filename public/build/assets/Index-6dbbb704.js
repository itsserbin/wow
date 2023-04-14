import{d as k,aj as c,r as v,o as A,g as V,z as m,i as F,s as i,j as l,u,F as I,p as s,a9 as g}from"./app-85fc3642.js";import L from"./ProductsList-9b180b76.js";import{_ as B}from"./MasterLayout-f4ff6b28.js";import C from"./Banners-1821c31d.js";import O from"./Categories-2c69e4cd.js";import R from"./Head-a7694429.js";import{i as b}from"./load-43492b90.js";import"./Heading-74359a15.js";import"./Button-bcf99afc.js";import"./Loader-6e24c3c0.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./ProductCard-6b83f109.js";import"./app-f66b29a1.js";import"./vue-i18n.esm-bundler-b26da7fc.js";import"./swal-1d3a8573.js";import"./Header-1ac8043f.js";import"./CartIcon-f6f9fae8.js";import"./Langs-43a1aeb1.js";import"./Logo-39ed68e3.js";import"./HeaderCategories-2bfd29ad.js";import"./create-element-if-not-defined-cfc4b805.js";import"./pagination-93e47b88.js";import"./lazy-e32f6dbe.js";import"./autoplay-1fa09654.js";import"./swiper-slide-1a20efe7.js";import"./Footer-15d29674.js";import"./FixedBanner-2c3f92de.js";import"./ScrollToTop-590da26c.js";const D={class:"grid grid-cols-1 gap-4"},N=k({layout:B}),me=Object.assign(N,{__name:"Index",props:["lang","categories","options","banners","bestSellingProducts","newProducts","allProducts","pages","reviews","text","faqs","advantages","eventIdPageView"],setup(e){const t=e,P=c(()=>g(()=>import("./Content-e3785d91.js"),["assets/Content-e3785d91.js","assets/app-85fc3642.js"])),_=c(()=>g(()=>import("./Advantages-9449d6c8.js"),["assets/Advantages-9449d6c8.js","assets/app-85fc3642.js"])),M=c(()=>g(()=>import("./AllReviewsCarousel-a1deb6c8.js"),["assets/AllReviewsCarousel-a1deb6c8.js","assets/create-element-if-not-defined-cfc4b805.js","assets/pagination-93e47b88.js","assets/autoplay-1fa09654.js","assets/effect-coverflow-d8202d96.js","assets/swiper-slide-1a20efe7.js","assets/app-85fc3642.js","assets/Button-bcf99afc.js","assets/AllReviewsCarousel-f247a4ef.css"])),w=c(()=>g(()=>import("./FaqComponent-4122a732.js"),["assets/FaqComponent-4122a732.js","assets/Accordion-a5a199ce.js","assets/_plugin-vue_export-helper-c27b6911.js","assets/app-85fc3642.js","assets/AccordionItem-1e77ef19.js","assets/index-10963069.js"])),S=c(()=>g(()=>import("./Support-77fe024d.js"),["assets/Support-77fe024d.js","assets/_plugin-vue_export-helper-c27b6911.js","assets/app-85fc3642.js"])),f={title:t.lang==="ua"?t.options.meta_title_ua:t.options.meta_title_ru,description:t.lang==="ua"?t.options.meta_description_ua:t.options.meta_description_ru},r=v({data:[],isLoadMore:!1,isShowLoadMore:!1,currentPage:1,endpoint:"/api/v1/product/new-products?page="}),o=v({data:[],isLoadMore:!1,isShowLoadMore:!1,currentPage:1,endpoint:"/api/v1/product?page="}),n=v({data:[],isLoadMore:!1,isShowLoadMore:!1,currentPage:1,endpoint:"/api/v1/product/best-selling?page="});A(()=>{n.value.data=t.bestSellingProducts.data,r.value.data=t.newProducts.data,o.value.data=t.allProducts.data,t.bestSellingProducts.current_page!==t.bestSellingProducts.per_page&&p(n.value),t.newProducts.current_page!==t.newProducts.per_page&&p(r.value),t.allProducts.current_page!==t.allProducts.per_page&&p(o.value),console.log(t.bestSellingProducts)});const p=a=>{a.isShowLoadMore=!0},y=async()=>{o.value.isLoadMore=!0,await axios.get(o.value.endpoint+(o.value.currentPage+1)).then(({data:a})=>h(o.value,a)).catch(a=>console.error(a))},x=async()=>{n.value.isLoadMore=!0,await axios.get(n.value.endpoint+(n.value.currentPage+1)).then(({data:a})=>h(n.value,a)).catch(a=>console.error(a))},E=async()=>{await axios.get(r.value.endpoint+(r.value.currentPage+1)).then(({data:a})=>h(r.value,a)).catch(a=>console.error(a))},h=(a,d)=>{a.data=a.data.concat(d.result.data),a.total=d.result.total,a.currentPage=d.result.current_page,a.isShowLoadMore=d.result.to!==d.result.total,a.isLoadMore=!1};return(a,d)=>(s(),V(I,null,[m(R,{title:f.title,description:f.description},null,8,["title","description"]),F("div",D,[e.banners.length?(s(),i(C,{key:0,data:e.banners,lang:e.lang},null,8,["data","lang"])):l("",!0),e.categories.length?(s(),i(O,{key:1,data:e.categories,lang:e.lang},null,8,["data","lang"])):l("",!0),m(L,{slider:!0,lang:e.lang,data:n.value.data,isLoadMore:n.value.isLoadMore,isShowLoadMore:n.value.isShowLoadMore,onFetch:x,heading:"Найпопулярніші"},null,8,["lang","data","isLoadMore","isShowLoadMore"]),m(L,{slider:!0,lang:e.lang,data:r.value.data,isLoadMore:r.value.isLoadMore,isShowLoadMore:r.value.isShowLoadMore,onFetch:E,heading:"Останні надходження"},null,8,["lang","data","isLoadMore","isShowLoadMore"]),m(L,{slider:!0,lang:e.lang,data:o.value.data,isLoadMore:o.value.isLoadMore,isShowLoadMore:o.value.isShowLoadMore,onFetch:y,heading:"Усі товари"},null,8,["lang","data","isLoadMore","isShowLoadMore"]),e.advantages.length?(s(),i(u(_),{key:2,lang:e.lang,data:e.advantages},null,8,["lang","data"])):l("",!0),e.reviews.length?(s(),i(u(M),{key:3,data:e.reviews},null,8,["data"])):l("",!0),e.options.text_home_page_ua||e.options.text_home_page_ru?(s(),i(u(P),{key:4,data:e.lang==="ua"?e.options.text_home_page_ua:e.options.text_home_page_ru},null,8,["data"])):l("",!0),e.faqs.length?(s(),i(u(w),{key:5,lang:e.lang,data:e.faqs},null,8,["lang","data"])):l("",!0),u(b)?l("",!0):(s(),i(u(S),{key:6}))])],64))}});export{me as default};