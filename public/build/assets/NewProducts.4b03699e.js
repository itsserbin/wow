import c from"./Loader.e4a965ae.js";import n from"./Button.62ea125d.js";import l from"./ProductCards.45180c93.js";import{i as r,j as m,t as d,y as u,p as i,k as e,w as f,o,l as p}from"./vendor.2c8aab53.js";import"./_plugin-vue_export-helper.cdc0426e.js";import"./__commonjsHelpers__.4516dc8a.js";import"./ProductCard.44e557fb.js";import"./swiper-slide.b99d7d5f.js";import"./create-element-if-not-defined.26147364.js";import"./navigation.b481f07e.js";import"./lazy.2bfe2e68.js";import"./swal.ca5633e8.js";import"./vue.m.132a23fc.js";const x={key:0},y={class:"font-bold text-black text-center text-2xl font-heading mb-[15px]"},g={key:0,class:"text-center"},T={__name:"NewProducts",props:{data:{type:Array},isShowLoadMore:{type:Boolean},isLoadMore:{type:Boolean},lang:{type:String,default:"ua"},textLoadMore:{type:String,default:"\u0417\u0430\u0432\u0430\u043D\u0442\u0430\u0436\u0438\u0442\u0438 \u0449\u0435"},textGoToProductCard:{type:String,default:"\u0414\u0435\u0442\u0430\u043B\u044C\u043D\u0456\u0448\u0435"},textLatestProducts:{type:String,default:"\u041E\u0441\u0442\u0430\u043D\u043D\u0456 \u043D\u0430\u0434\u0445\u043E\u0434\u0436\u0435\u043D\u043D\u044F"}},emits:["fetch"],setup(t){return(s,a)=>t.data.length?(o(),r("div",x,[m("div",y,d(t.textLatestProducts),1),u(l,{products:t.data,lang:t.lang,"text-go-to-product-card":t.textGoToProductCard,class:"mb-5",slider:!0},null,8,["products","lang","text-go-to-product-card"]),t.isShowLoadMore?(o(),r("div",g,[t.isLoadMore?(o(),i(c,{key:0})):e("",!0),t.isLoadMore?e("",!0):(o(),i(n,{key:1,onClick:a[0]||(a[0]=k=>s.$emit("fetch")),type:"button"},{default:f(()=>[p(d(t.textLoadMore),1)]),_:1}))])):e("",!0)])):e("",!0)}};export{T as default};