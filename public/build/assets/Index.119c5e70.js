import m from"./Breadcrumbs.49a1d0b2.js";import{i as p,_ as d}from"./load.d25b2206.js";import v from"./Card.1dedea12.js";import f from"./Loader.471d868e.js";import w from"./Button.8012267c.js";import{i as x,o as h,B as r,C as l,aa as L,z as o,p as n,G as y,F as M,D as P,s as i,v as V,x as _,q as k}from"./index.1726d409.js";import"./Breadcrumbs.6cb7044e.js";import"./Header.80ddd88d.js";import"./CartIcon.e7c5a976.js";import"./Langs.3beb2cbc.js";import"./Logo.9264c4eb.js";import"./HeaderCategories.bf8b75cb.js";import"./create-element-if-not-defined.26147364.js";import"./pagination.44308c03.js";import"./lazy.2bfe2e68.js";import"./autoplay.88899761.js";import"./swiper-slide.7de65c6d.js";import"./Footer.d755c37c.js";import"./FixedBanner.2140537c.js";import"./moment.9709ab41.js";import"./_plugin-vue_export-helper.cdc0426e.js";const b={key:0},I=k("h1",{class:"font-bold text-black text-center text-[24px] mb-[15px]"}," \u0412\u0456\u0434\u0433\u0443\u043A\u0438 ",-1),C={key:0,class:"text-center"},Y={__name:"Index",props:{lang:String,categories:Array,options:Object,pages:Array,textLoadMore:{type:String,default:"\u0417\u0430\u0432\u0430\u043D\u0442\u0430\u0436\u0438\u0442\u0438 \u0449\u0435"},eventIdPageView:String},setup(t){const{appContext:c}=L(),{$fbq:g}=c.config.globalProperties,e=x({reviews:[],isLoadingMore:!1,showLoadMore:!0,currentPage:0,endpoint:"/api/v1/reviews/paginate-list?page="});h(async()=>{await s(),p.value=!1;try{g("PageView",{},props.eventIdPageView)}catch(a){console.error(a)}});const s=async()=>{e.value.isLoadingMore=!0,axios.get(e.value.endpoint+(e.value.currentPage+1)).then(({data:a})=>{e.value.isLoadingMore=!1,e.value.currentPage=a.result.current_page,e.value.reviews=e.value.reviews.concat(a.result.data),e.value.showLoadMore=a.result.to!==a.result.total})};return(a,B)=>(o(),r(d,{categories:t.categories,options:t.options,lang:t.lang,pages:t.pages,eventIdPageView:t.eventIdPageView},{default:l(()=>[e.value.reviews.length?(o(),n("div",b,[y(m,{options:t.options,lang:t.lang,title:"\u0412\u0456\u0434\u0433\u0443\u043A\u0438"},null,8,["options","lang"]),I,(o(!0),n(M,null,P(e.value.reviews,u=>(o(),r(v,{item:u},null,8,["item"]))),256)),e.value.showLoadMore?(o(),n("div",C,[e.value.isLoadingMore?(o(),r(f,{key:0})):i("",!0),e.value.isLoadingMore?i("",!0):(o(),r(w,{key:1,onClick:s,type:"button"},{default:l(()=>[V(_(t.textLoadMore),1)]),_:1}))])):i("",!0)])):i("",!0)]),_:1},8,["categories","options","lang","pages","eventIdPageView"]))}};export{Y as default};
