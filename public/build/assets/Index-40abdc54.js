import p from"./Breadcrumbs-9b3597c2.js";import c from"./Card-0eca5130.js";import d from"./Loader-4079abec.js";import g from"./Button-a598e6b2.js";import _ from"./Head-e91aef5a.js";import{_ as f}from"./MasterLayout-537f18ff.js";import{j as v,k as x,o as y,l as t,m as o,n as l,F as m,q as h,s,t as a,y as w,p as L,w as M,v as k}from"./index-a01126e2.js";import"./Breadcrumbs-b886890f.js";import"./moment-fbc5633a.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./Callback-e4d8a8f7.js";import"./swal-03cac797.js";import"./Modal-4a985b91.js";import"./Input-f389d631.js";import"./Label-106de98b.js";import"./InputError-f28ae438.js";import"./maska-224de96c.js";import"./Header-10a3104d.js";import"./CartIcon-0074655f.js";import"./Logo-83ffc10f.js";import"./HeaderCategories-9feed3c9.js";import"./swiper-slide-9942daa4.js";import"./pagination-09fa0ae8.js";import"./lazy-e052734e.js";import"./autoplay-5b9d7d48.js";import"./Footer-9e10e39a.js";import"./ScrollToTop-e1a64eae.js";const b={key:0},$=L("h1",{class:"font-bold text-black text-center text-[24px] mb-[15px]"}," Відгуки ",-1),B={key:0,class:"text-center"},C=v({layout:f}),oe=Object.assign(C,{__name:"Index",props:{lang:String,categories:Array,options:Object,pages:Array,textLoadMore:{type:String,default:"Завантажити ще"}},setup(i){const e=x({reviews:[],isLoadingMore:!1,showLoadMore:!0,currentPage:0,endpoint:"/api/v1/reviews/paginate-list?page="});y(async()=>{await n()});const n=async()=>{e.value.isLoadingMore=!0,axios.get(e.value.endpoint+(e.value.currentPage+1)).then(({data:r})=>{e.value.isLoadingMore=!1,e.value.currentPage=r.result.current_page,e.value.reviews=e.value.reviews.concat(r.result.data),e.value.showLoadMore=r.result.to!==r.result.total})};return(r,N)=>(t(),o(m,null,[l(_,{title:"Відгуки"}),e.value.reviews.length?(t(),o("div",b,[l(p,{"current-url":r.route().current,options:i.options,lang:i.lang,title:"Відгуки"},null,8,["current-url","options","lang"]),$,(t(!0),o(m,null,h(e.value.reviews,u=>(t(),s(c,{item:u},null,8,["item"]))),256)),e.value.showLoadMore?(t(),o("div",B,[e.value.isLoadingMore?(t(),s(d,{key:0})):a("",!0),e.value.isLoadingMore?a("",!0):(t(),s(g,{key:1,onClick:n,type:"button"},{default:w(()=>[M(k(i.textLoadMore),1)]),_:1}))])):a("",!0)])):a("",!0)],64))}});export{oe as default};