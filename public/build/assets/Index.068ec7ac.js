import{_ as c}from"./vue.m.8e70aa70.js";import{i as P,_ as x}from"./load.0b5421db.js";import _ from"./Banners.560d6362.js";import h from"./ProductsList.5eae7982.js";import V from"./Categories.ca87251c.js";import{_ as g,p as v,q as A,m as r,w as E,o as n,i as I,j as l,u}from"./vendor.1f6af4a6.js";import"./Header.6ebc2146.js";import"./CartIcon.fe083e6a.js";import"./__commonjsHelpers__.488ed5c2.js";import"./Langs.d546e1f4.js";import"./Logo.c7a5de92.js";import"./HeaderCategories.3cfee59b.js";import"./create-element-if-not-defined.26147364.js";import"./pagination.44308c03.js";import"./lazy.2bfe2e68.js";import"./autoplay.88899761.js";import"./swiper-slide.3df0c6ab.js";import"./Footer.cbd5536b.js";import"./FixedBanner.b61bbed6.js";import"./ScrollToTop.ee29a78a.js";import"./Heading.2c441860.js";import"./Button.678af94f.js";import"./Loader.39470ae5.js";import"./_plugin-vue_export-helper.cdc0426e.js";import"./ProductCards.6f31e563.js";import"./ProductCard.679ec37d.js";import"./navigation.b481f07e.js";import"./swal.1147426a.js";const C={class:"grid grid-cols-1 gap-4"},se={__name:"Index",props:["lang","categories","options","banners","bestSellingProducts","newProducts","allProducts","pages","reviews","text","faqs","advantages","eventIdPageView"],setup(e){const t=e,w=g(()=>c(()=>import("./Content.4293c373.js"),["assets/Content.4293c373.js","assets/vendor.1f6af4a6.js","assets/__commonjsHelpers__.488ed5c2.js"])),L=g(()=>c(()=>import("./Advantages.010a6410.js"),["assets/Advantages.010a6410.js","assets/vendor.1f6af4a6.js","assets/__commonjsHelpers__.488ed5c2.js"])),f=g(()=>c(()=>import("./AllReviewsCarousel.b5ec0a02.js"),["assets/AllReviewsCarousel.b5ec0a02.js","assets/AllReviewsCarousel.f247a4ef.css","assets/create-element-if-not-defined.26147364.js","assets/pagination.44308c03.js","assets/autoplay.88899761.js","assets/effect-coverflow.775bdd96.js","assets/swiper-slide.3df0c6ab.js","assets/vendor.1f6af4a6.js","assets/__commonjsHelpers__.488ed5c2.js","assets/Button.678af94f.js"])),p=g(()=>c(()=>import("./FaqComponent.673b2d38.js"),["assets/FaqComponent.673b2d38.js","assets/Accordion.23b8a919.js","assets/_plugin-vue_export-helper.cdc0426e.js","assets/vendor.1f6af4a6.js","assets/__commonjsHelpers__.488ed5c2.js","assets/AccordionItem.8590e527.js","assets/index.02b5b7d6.js"])),M=g(()=>c(()=>import("./Support.fd4a4d81.js"),["assets/Support.fd4a4d81.js","assets/_plugin-vue_export-helper.cdc0426e.js","assets/vendor.1f6af4a6.js","assets/__commonjsHelpers__.488ed5c2.js"])),i=v({data:[],isLoadMore:!1,isShowLoadMore:!1,currentPage:1,endpoint:"/api/v1/product/new-products?page="}),s=v({data:[],isLoadMore:!1,isShowLoadMore:!1,currentPage:1,endpoint:"/api/v1/product?page="}),o=v({data:[],isLoadMore:!1,isShowLoadMore:!1,currentPage:1,endpoint:"/api/v1/product/best-selling?page="});A(()=>{t.bestSellingProducts&&(o.value.data=t.bestSellingProducts.data,t.bestSellingProducts.current_page!==t.bestSellingProducts.per_page&&(o.value.isShowLoadMore=!0)),t.newProducts&&(i.value.data=t.newProducts.data,t.newProducts.current_page!==t.newProducts.per_page&&(o.value.isShowLoadMore=!0)),t.allProducts&&(s.value.data=t.allProducts.data,t.allProducts.current_page!==t.allProducts.per_page&&(s.value.isShowLoadMore=!0)),P.value=!1});const S=async()=>{s.value.isLoadMore=!0,await axios.get(s.value.endpoint+(s.value.currentPage+1)).then(({data:a})=>m(s.value,a)).catch(a=>console.error(a))},y=async()=>{o.value.isLoadMore=!0,await axios.get(o.value.endpoint+(o.value.currentPage+1)).then(({data:a})=>m(o.value,a)).catch(a=>console.error(a))},k=async()=>{await axios.get(i.value.endpoint+(i.value.currentPage+1)).then(({data:a})=>m(i.value,a)).catch(a=>console.error(a))},m=(a,d)=>{a.data=a.data.concat(d.result.data),a.total=d.result.total,a.currentPage=d.result.current_page,a.isShowLoadMore=d.result.to!==d.result.total,a.isLoadMore=!1};return(a,d)=>(n(),r(x,{categories:e.categories,options:e.options,lang:e.lang,pages:e.pages,eventIdPageView:e.eventIdPageView},{default:E(()=>[I("div",C,[e.banners.length?(n(),r(_,{key:0,data:e.banners,lang:e.lang},null,8,["data","lang"])):l("",!0),e.categories.length?(n(),r(V,{key:1,data:e.categories,lang:e.lang},null,8,["data","lang"])):l("",!0),o.value.data.length?(n(),r(h,{key:2,slider:!0,lang:e.lang,data:o.value.data,isLoadMore:o.value.isLoadMore,isShowLoadMore:o.value.isShowLoadMore,onFetch:y,heading:"\u041D\u0430\u0439\u043F\u043E\u043F\u0443\u043B\u044F\u0440\u043D\u0456\u0448\u0456"},null,8,["lang","data","isLoadMore","isShowLoadMore"])):l("",!0),i.value.data.length?(n(),r(h,{key:3,slider:!0,lang:e.lang,data:i.value.data,isLoadMore:i.value.isLoadMore,isShowLoadMore:i.value.isShowLoadMore,onFetch:k,heading:"\u041E\u0441\u0442\u0430\u043D\u043D\u0456 \u043D\u0430\u0434\u0445\u043E\u0434\u0436\u0435\u043D\u043D\u044F"},null,8,["lang","data","isLoadMore","isShowLoadMore"])):l("",!0),s.value.data.length?(n(),r(h,{key:4,slider:!0,lang:e.lang,data:s.value.data,isLoadMore:s.value.isLoadMore,isShowLoadMore:s.value.isShowLoadMore,onFetch:S,heading:"\u0423\u0441\u0456 \u0442\u043E\u0432\u0430\u0440\u0438"},null,8,["lang","data","isLoadMore","isShowLoadMore"])):l("",!0),e.advantages.length?(n(),r(u(L),{key:5,lang:e.lang,data:e.advantages},null,8,["lang","data"])):l("",!0),e.reviews.length?(n(),r(u(f),{key:6,data:e.reviews},null,8,["data"])):l("",!0),e.options.text_home_page_ua||e.options.text_home_page_ru?(n(),r(u(w),{key:7,data:e.lang==="ua"?e.options.text_home_page_ua:e.options.text_home_page_ru},null,8,["data"])):l("",!0),e.faqs.length?(n(),r(u(p),{key:8,lang:e.lang,data:e.faqs},null,8,["lang","data"])):l("",!0),u(P)?l("",!0):(n(),r(u(M),{key:9}))])]),_:1},8,["categories","options","lang","pages","eventIdPageView"]))}};export{se as default};
