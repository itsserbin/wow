import n from"./Loader-1cd55f27.js";import s from"./ProductCards-f6313530.js";import c from"./Button-a15233b2.js";import{g as r,i as l,l as m,z as u,s as i,j as e,v as g,p as o,k as f}from"./app-422a3702.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./ProductCard-10674750.js";import"./app-c33e59b4.js";import"./vue-i18n.esm-bundler-24bde026.js";import"./swal-0489f100.js";import"./eventTracking-c6c2514d.js";const x={key:0},p={class:"font-bold text-black text-center text-[24px] mb-[15px]"},k={key:0,class:"text-center mt-5"},$={__name:"Products",props:{isShowLoadMore:Boolean,isLoadingMore:Boolean,title:String,data:Array,lang:{type:String,default:"ua"},textLoadMore:{type:String,default:"Завантажити ще"},textGoToProductCard:{type:String,default:"Детальніше"}},emits:["fetch"],setup(t){return(d,a)=>t.data.length?(o(),r("div",x,[l("div",p,m(t.title),1),u(s,{products:t.data,lang:t.lang,"text-go-to-product-card":t.textGoToProductCard,slider:!0},null,8,["products","lang","text-go-to-product-card"]),t.isShowLoadMore?(o(),r("div",k,[t.isLoadingMore?(o(),i(n,{key:0})):e("",!0),t.isLoadingMore?e("",!0):(o(),i(c,{key:1,onClick:a[0]||(a[0]=y=>d.$emit("fetch")),type:"button"},{default:g(()=>[f("Завантажити ще ")]),_:1}))])):e("",!0)])):e("",!0)}};export{$ as default};
