import l from"./Support.fd4a4d81.js";import u from"./FaqComponent.673b2d38.js";import g from"./AllReviewsCarousel.b5ec0a02.js";import p from"./BestSellingProducts.8962180c.js";import f from"./RelativeProducts.84d302c7.js";import v from"./NewProducts.93822752.js";import h from"./ImagesSlider.70ae958d.js";import x from"./Content.5aad4a14.js";import I from"./AddToCart.c5282d57.js";import{i as C,_ as w}from"./load.8dadcf97.js";import P from"./Breadcrumbs.bf04d080.js";import{q as k,m as y,w as b,Z as $,a9 as T,o as n,x as o,i,t as r,g as c,j as V}from"./vendor.1f6af4a6.js";import"./_plugin-vue_export-helper.cdc0426e.js";import"./__commonjsHelpers__.488ed5c2.js";import"./Accordion.23b8a919.js";import"./AccordionItem.8590e527.js";import"./index.02b5b7d6.js";import"./create-element-if-not-defined.26147364.js";import"./pagination.44308c03.js";import"./autoplay.88899761.js";import"./effect-coverflow.775bdd96.js";import"./swiper-slide.3df0c6ab.js";import"./Button.678af94f.js";import"./ProductCard.84d6414c.js";import"./navigation.b481f07e.js";import"./lazy.2bfe2e68.js";import"./swal.1147426a.js";import"./vue.m.8e70aa70.js";import"./Characteristics.ecb521a9.js";import"./BuyIn1ClickModal.1531a1e9.js";import"./maska.esm.2315e0de.js";import"./Modal.2a74feaf.js";import"./Loader.39470ae5.js";import"./Input.0cfa13d3.js";import"./InputError.37578239.js";import"./Label.81064beb.js";import"./Header.d2b3c3f2.js";import"./CartIcon.fe083e6a.js";import"./Langs.d546e1f4.js";import"./Logo.c7a5de92.js";import"./HeaderCategories.1d9e9395.js";import"./Footer.cbd5536b.js";import"./FixedBanner.b61bbed6.js";import"./ScrollToTop.ee29a78a.js";import"./Breadcrumbs.3bb13552.js";const q={class:"grid grid-cols-1 gap-4"},A={class:"grid grid-cols-1 md:grid-cols-2 gap-4"},B={class:"slider"},z={class:"text-3xl font-heading text-text font-bold"},H={class:"grid grid-cols-1 md:grid-cols-2 font-subheading"},L={class:"d-flex text-[10px]"},M={key:0},N={key:0,class:"text-[#38af44] text-[14px] font-medium text-end"},U={key:1,class:"text-[#FFC300] text-[14px] font-medium text-end"},E={key:2,class:"text-[#C70039] text-[14px] font-medium text-end"},F=["innerHTML"],S={class:"grid grid-cols-1 gap-5"},Ht={__name:"Index",props:["categories","options","pages","lang","reviews","bestProducts","newProducts","recommendProducts","characteristics","product","faqs","authUser","eventIdPageView","eventIdContent","eventIdAddToCard","eventIdPurchaseIn1Click"],setup(t){const e=t,{appContext:d}=$(),{$fbq:s}=d.config.globalProperties,m=T();return k(async()=>{C.value=!1;try{s("track","ViewContent",{value:e.product.discount_price?e.product.discount_price:e.product.price,currency:"UAH",content_type:"product",content_ids:[e.product.id],content_name:e.product.h1},e.eventIdContent),m.trackEvent({event:"view_product",ecommerce:{items:[{item_name:e.product.h1,item_id:e.product.id,price:e.product.discount_price?e.product.discount_price:e.product.price,quantity:1}]}})}catch(a){console.error(a)}}),(a,j)=>(n(),y(w,{categories:t.categories,options:t.options,lang:t.lang,pages:t.pages,eventIdPageView:t.eventIdPageView},{default:b(()=>[o(P,{options:t.options,"parent-url":a.route("category",t.product.categories[0].slug),parent:t.product.categories[0].title[t.lang],title:t.product.h1[t.lang]},null,8,["options","parent-url","parent","title"]),i("div",q,[i("div",A,[i("div",B,[o(h,{images:t.product.images,preview:t.product.preview},null,8,["images","preview"])]),i("div",null,[i("h2",z,r(t.product.h1[t.lang]),1),i("div",H,[i("div",L,[i("div",null,"\u041A\u043E\u0434: "+r(t.product.id),1),t.authUser?(n(),c("div",M,"\u0410\u0440\u0442\u0438\u043A\u0443\u043B: "+r(t.product.vendor_code),1)):V("",!0)]),t.product.status==="in stock"?(n(),c("span",N," \u0412 \u043D\u0430\u044F\u0432\u043D\u043E\u0441\u0442\u0456 ")):t.product.status==="ends"?(n(),c("span",U," \u0417\u0430\u043A\u0456\u043D\u0447\u0443\u0454\u0442\u044C\u0441\u044F ")):(n(),c("span",E," \u041D\u0435\u043C\u0430 \u0432 \u043D\u0430\u044F\u0432\u043D\u043E\u0441\u0442\u0456 "))]),o(I,{product:t.product,eventIdAddToCard:t.eventIdAddToCard,eventIdPurchaseIn1Click:t.eventIdPurchaseIn1Click},null,8,["product","eventIdAddToCard","eventIdPurchaseIn1Click"]),i("div",{class:"content",innerHTML:t.product.content[t.lang]},null,8,F)])]),o(x,{lang:t.lang,characteristics:t.characteristics,sizeTable:t.product.size_table,youtube:t.product.youtube,options:t.options},null,8,["lang","characteristics","sizeTable","youtube","options"]),o(g,{data:t.reviews},null,8,["data"]),i("div",S,[o(f,{lang:t.lang,products:t.recommendProducts},null,8,["lang","products"]),o(p,{lang:t.lang,products:t.bestProducts},null,8,["lang","products"]),o(v,{lang:t.lang,products:t.newProducts},null,8,["lang","products"])]),o(u,{data:t.faqs,lang:t.lang},null,8,["data","lang"]),o(l)])]),_:1},8,["categories","options","lang","pages","eventIdPageView"]))}};export{Ht as default};
