import s from"./Button.32a11ad1.js";import c from"./Loader.19991d38.js";import n from"./ProductCards.f83d3bd4.js";import{g as r,i as l,t as m,x as u,m as d,j as e,w as f,o,k as p}from"./vendor.693a237b.js";import"./__commonjsHelpers__.488ed5c2.js";import"./_plugin-vue_export-helper.cdc0426e.js";import"./ProductCard.02412e5d.js";import"./lazyload.6866379a.js";import"./swiper-slide.d590aaff.js";import"./create-element-if-not-defined.26147364.js";import"./navigation.b481f07e.js";import"./lazy.2bfe2e68.js";const x={key:0},g={class:"font-bold text-black text-center text-2xl font-subheading mb-[15px]"},y={key:0,class:"text-center"},h=p("\u0417\u0430\u0432\u0430\u043D\u0442\u0430\u0436\u0438\u0442\u0438 \u0449\u0435"),$={__name:"AllProducts",props:{data:{type:Array},isShowLoadMore:{type:Boolean},isLoadMore:{type:Boolean},lang:{type:String,default:"ua"},textGoToProductCard:{type:String,default:"\u0414\u0435\u0442\u0430\u043B\u044C\u043D\u0456\u0448\u0435"},textAllProducts:{type:String,default:"\u0423\u0441\u0456 \u0442\u043E\u0432\u0430\u0440\u0438"}},emits:["fetch"],setup(t){return(i,a)=>t.data.length?(o(),r("div",x,[l("div",g,m(t.textAllProducts),1),u(n,{products:t.data,lang:t.lang,"text-go-to-product-card":t.textGoToProductCard,class:"mb-5",slider:!0},null,8,["products","lang","text-go-to-product-card"]),t.isShowLoadMore?(o(),r("div",y,[t.isLoadMore?(o(),d(c,{key:0})):e("",!0),t.isLoadMore?e("",!0):(o(),d(s,{key:1,onClick:a[0]||(a[0]=k=>i.$emit("fetch")),type:"button"},{default:f(()=>[h]),_:1}))])):e("",!0)])):e("",!0)}};export{$ as default};
