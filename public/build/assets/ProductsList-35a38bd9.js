import c from"./Heading-4b9aa4de.js";import m from"./Button-60b98f54.js";import u from"./Loader-5995a82b.js";import f from"./ProductCard-d1f91d6f.js";import{p as t,q as o,D as r,C as a,v as n,F as g,K as y,x as h,l as k,A as p,B as L}from"./app-f55448cf.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./app-a1b5f484.js";import"./vue-i18n.esm-bundler-d070be13.js";import"./swal-01ed9a07.js";import"./eventTracking-2c28b7ec.js";const B={key:0},v={class:"grid justify-items-center my-5"},x={class:"grid grid-cols-2 md:grid-cols-4 gap-6 w-full"},M={key:1,class:"text-center"},j={__name:"ProductsList",props:{data:{type:Array},isShowLoadMore:{type:Boolean},isLoadMore:{type:Boolean},lang:{type:String,default:"ua"},textLoadMore:{type:String,default:"Завантажити ще"},heading:{type:String,default:null},slider:{type:Boolean,default:!1}},emits:["fetch"],setup(e){return(s,i)=>e.data.length?(t(),o("div",B,[e.heading?(t(),r(c,{key:0,heading:e.heading},null,8,["heading"])):a("",!0),n("div",v,[n("div",x,[(t(!0),o(g,null,y(e.data,(d,l)=>(t(),o("div",{key:l},[k(f,{product:d,lang:e.lang,slider:e.slider},null,8,["product","lang","slider"])]))),128))])]),e.isShowLoadMore?(t(),o("div",M,[e.isLoadMore?(t(),r(u,{key:0})):a("",!0),e.isLoadMore?a("",!0):(t(),r(m,{key:1,onClick:i[0]||(i[0]=d=>s.$emit("fetch")),type:"button"},{default:h(()=>[p(L(e.textLoadMore),1)]),_:1}))])):a("",!0)])):a("",!0)}};export{j as default};