import p from"./Breadcrumbs.76b21b45.js";import{i as d,_ as v}from"./load.15dc3d34.js";import f from"./Card.1dedea12.js";import w from"./Loader.471d868e.js";import x from"./Button.8012267c.js";import{i as h,o as L,B as r,C as l,aa as y,z as o,p as n,G as M,F as P,D as V,s as i,v as k,x as _,q as b}from"./index.1726d409.js";import"./Breadcrumbs.dc94d0a6.js";import"./Header.5f4284bf.js";import"./CartIcon.e7c5a976.js";import"./Langs.3beb2cbc.js";import"./Logo.9264c4eb.js";import"./HeaderCategories.1be926b2.js";import"./create-element-if-not-defined.26147364.js";import"./pagination.44308c03.js";import"./lazy.2bfe2e68.js";import"./autoplay.88899761.js";import"./swiper-slide.7de65c6d.js";import"./Footer.d755c37c.js";import"./FixedBanner.2140537c.js";import"./moment.9709ab41.js";import"./_plugin-vue_export-helper.cdc0426e.js";const I={key:0},C=b("h1",{class:"font-bold text-black text-center text-[24px] mb-[15px]"}," \u0412\u0456\u0434\u0433\u0443\u043A\u0438 ",-1),B={key:0,class:"text-center"},Z={__name:"Index",props:{lang:String,categories:Array,options:Object,pages:Array,textLoadMore:{type:String,default:"\u0417\u0430\u0432\u0430\u043D\u0442\u0430\u0436\u0438\u0442\u0438 \u0449\u0435"},eventIdPageView:String},setup(t){const c=t,{appContext:g}=y(),{$fbq:u}=g.config.globalProperties,e=h({reviews:[],isLoadingMore:!1,showLoadMore:!0,currentPage:0,endpoint:"/api/v1/reviews/paginate-list?page="});L(async()=>{await s(),d.value=!1;try{u("PageView",{},c.eventIdPageView)}catch(a){console.error(a)}});const s=async()=>{e.value.isLoadingMore=!0,axios.get(e.value.endpoint+(e.value.currentPage+1)).then(({data:a})=>{e.value.isLoadingMore=!1,e.value.currentPage=a.result.current_page,e.value.reviews=e.value.reviews.concat(a.result.data),e.value.showLoadMore=a.result.to!==a.result.total})};return(a,$)=>(o(),r(v,{categories:t.categories,options:t.options,lang:t.lang,pages:t.pages,eventIdPageView:t.eventIdPageView},{default:l(()=>[e.value.reviews.length?(o(),n("div",I,[M(p,{options:t.options,lang:t.lang,title:"\u0412\u0456\u0434\u0433\u0443\u043A\u0438"},null,8,["options","lang"]),C,(o(!0),n(P,null,V(e.value.reviews,m=>(o(),r(f,{item:m},null,8,["item"]))),256)),e.value.showLoadMore?(o(),n("div",B,[e.value.isLoadingMore?(o(),r(w,{key:0})):i("",!0),e.value.isLoadingMore?i("",!0):(o(),r(x,{key:1,onClick:s,type:"button"},{default:l(()=>[k(_(t.textLoadMore),1)]),_:1}))])):i("",!0)])):i("",!0)]),_:1},8,["categories","options","lang","pages","eventIdPageView"]))}};export{Z as default};
