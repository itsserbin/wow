import{g as r,F as o,x as n,j as c,p as a,i as s,l as d}from"./app-da11968c.js";const i={key:0,class:"grid gap-4 grid-cols-2 md:grid-cols-8"},u={class:"border-[1px] border-secondary hover:scale-105 transition-all duration-300 rounded-lg"},g=["href"],h={class:"h-52"},_={class:"w-full"},p=["srcset"],v=["src","alt"],f={class:"font-bold text-center p-5 font-subheading"},m={__name:"Categories",props:["lang","data"],setup(t){return(l,w)=>(a(),r("div",null,[t.data.length?(a(),r("div",i,[(a(!0),r(o,null,n(t.data,e=>(a(),r("div",u,[s("a",{href:l.route("category",e.slug)},[s("div",h,[s("picture",_,[s("source",{srcset:e.preview?l.route("images.350",e.preview.webp_src):null,type:"image/webp"},null,8,p),s("img",{src:e.preview?l.route("images.350",e.preview.src):null,class:"h-full object-cover w-full rounded-t-lg",alt:e.title[t.lang]},null,8,v)])]),s("div",f,d(e.title[t.lang]),1)],8,g)]))),256))])):c("",!0)]))}};export{m as default};
