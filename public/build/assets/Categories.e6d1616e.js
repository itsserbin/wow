import{p as a,F as o,D as n,s as c,z as r,G as d,C as i,q as s,x as u,u as g,L as h}from"./index.1726d409.js";const p={key:0,class:"grid gap-4 grid-cols-2 md:grid-cols-8"},_={class:"border-[1px] border-secondary hover:scale-105 transition-all duration-300 rounded-lg"},f={class:"h-52"},v={class:"w-full"},w=["srcset"],b=["src","alt"],m={class:"font-bold text-center p-5 font-subheading"},C={__name:"Categories",props:["lang","data"],setup(t){return(l,y)=>(r(),a("div",null,[t.data.length?(r(),a("div",p,[(r(!0),a(o,null,n(t.data,e=>(r(),a("div",_,[d(g(h),{href:l.route("category",e.slug)},{default:i(()=>[s("div",f,[s("picture",v,[s("source",{srcset:e.preview?l.route("images.350",e.preview.webp_src):null,type:"image/webp"},null,8,w),s("img",{src:e.preview?l.route("images.350",e.preview.src):null,class:"h-full object-cover w-full rounded-t-lg",alt:e.title[t.lang]},null,8,b)])]),s("div",m,u(e.title[t.lang]),1)]),_:2},1032,["href"])]))),256))])):c("",!0)]))}};export{C as default};