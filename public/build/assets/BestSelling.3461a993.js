import{_ as s,a as c,L as l}from"./app.b5ed8857.js";import{F as e,y as r,z as u,A as d,M as m,Q as n,G as o,O as x,P as g}from"./moment.359c110c.js";import"./swiper-slide.e51e5d87.js";import"./InputError.db1a4c64.js";import"./index.02b5b7d6.js";import"./ProductsRepository.3b7ddd33.js";import"./index.e44f0a5e.js";const y={key:0},f={class:"font-bold text-text text-center text-2xl font-heading mb-[15px]"},p={key:0,class:"text-center"},v={__name:"BestSelling",props:{data:{type:Array},isShowLoadMore:{type:Boolean},isLoadMore:{type:Boolean},lang:{type:String,default:"ua"},textLoadMore:{type:String,default:"\u0417\u0430\u0432\u0430\u043D\u0442\u0430\u0436\u0438\u0442\u0438 \u0449\u0435"},textGoToProductCard:{type:String,default:"\u0414\u0435\u0442\u0430\u043B\u044C\u043D\u0456\u0448\u0435"},productRoute:{type:String},textBestSelling:{type:String,default:"\u041D\u0430\u0439\u043F\u043E\u043F\u0443\u043B\u044F\u0440\u043D\u0456\u0448\u0456"}},emits:["fetch"],setup(t){return(i,a)=>t.data.length?(e(),r("div",y,[u("div",f,d(t.textBestSelling),1),m(s,{products:t.data,lang:t.lang,"text-go-to-product-card":t.textGoToProductCard,"product-route":t.productRoute,class:"mb-5",slider:!0},null,8,["products","lang","text-go-to-product-card","product-route"]),t.isShowLoadMore?(e(),r("div",p,[t.isLoadMore?(e(),n(l,{key:0})):o("",!0),t.isLoadMore?o("",!0):(e(),n(c,{key:1,onClick:a[0]||(a[0]=S=>i.$emit("fetch")),type:"button"},{default:x(()=>[g(d(t.textLoadMore),1)]),_:1}))])):o("",!0)])):o("",!0)}};export{v as default};
