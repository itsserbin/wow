import c from"./Heading-c48405b9.js";import m from"./Button-5a7dd9cc.js";import u from"./Loader-ccbb56f4.js";import f from"./ProductCard-df2db459.js";import{p as t,q as o,D as r,C as a,v as n,F as g,K as y,x as h,l as k,A as p,B as L}from"./app-6d1ec759.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./app-65111db7.js";import"./vue-i18n.esm-bundler-39f45a4f.js";import"./swal-76588f7d.js";import"./eventTracking-2c28b7ec.js";const B={key:0},v={class:"grid justify-items-center my-5"},x={class:"grid grid-cols-2 md:grid-cols-4 gap-6 w-full"},M={key:1,class:"text-center"},j={__name:"ProductsList",props:{data:{type:Array},isShowLoadMore:{type:Boolean},isLoadMore:{type:Boolean},lang:{type:String,default:"ua"},textLoadMore:{type:String,default:"Завантажити ще"},heading:{type:String,default:null},slider:{type:Boolean,default:!1}},emits:["fetch"],setup(e){return(s,i)=>e.data.length?(t(),o("div",B,[e.heading?(t(),r(c,{key:0,heading:e.heading},null,8,["heading"])):a("",!0),n("div",v,[n("div",x,[(t(!0),o(g,null,y(e.data,(d,l)=>(t(),o("div",{key:l},[k(f,{product:d,lang:e.lang,slider:e.slider},null,8,["product","lang","slider"])]))),128))])]),e.isShowLoadMore?(t(),o("div",M,[e.isLoadMore?(t(),r(u,{key:0})):a("",!0),e.isLoadMore?a("",!0):(t(),r(m,{key:1,onClick:i[0]||(i[0]=d=>s.$emit("fetch")),type:"button"},{default:h(()=>[p(L(e.textLoadMore),1)]),_:1}))])):a("",!0)])):a("",!0)}};export{j as default};
