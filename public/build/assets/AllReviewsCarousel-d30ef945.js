import{S as u,a as m}from"./swiper-slide-5d66ba81.js";import{P as p}from"./pagination-7c85a91c.js";import{A as _}from"./autoplay-53c9f8a7.js";import{E as w}from"./effect-coverflow-da92c820.js";import h from"./Button-5a7dd9cc.js";import{p as a,q as n,v as e,B as s,l,x as o,ac as x,t as i,C as g,F as v,K as y,D as b,A as S}from"./app-6d1ec759.js";const k={key:0,class:"my-5"},B={class:"reviews__block-title font-bold text-2xl font-heading text-center text-black"},C={class:"font-bold font-subheading"},V=e("hr",{class:"bg-main shadow-lg rounded border-0 h-[1px] my-2"},null,-1),A={class:"text-base font-text"},P={class:"flex-row text-center"},N=["href"],I={__name:"AllReviewsCarousel",props:{data:{type:Array},textReviews:{type:String,default:"Відгуки"},textNoReviews:{type:String,default:"Відгуки відсутні"},textSeeMore:{type:String,default:"Дивитись більше"}},setup(t){const c=[p,_,w],d={autoHeight:!0,slidesPerView:1,spaceBetween:0,pagination:{type:"progressbar"},breakpoints:{768:{slidesPerView:2,spaceBetween:10},1024:{slidesPerView:3,spaceBetween:20}},autoplay:{delay:3500,disableOnInteraction:!1},grabCursor:!0,effect:"coverflow",centeredSlides:!0,coverflowEffect:{rotate:50,stretch:0,depth:100,modifier:1,slideShadows:!1}};return(f,R)=>t.data.length?(a(),n("section",k,[e("div",B,s(t.textReviews),1),l(i(m),x({modules:c,class:"reviews-carousel"},d),{default:o(()=>[(a(!0),n(v,null,y(t.data,r=>(a(),b(i(u),{class:"text-center bg-red-100 rounded-xl p-5"},{default:o(()=>[e("div",C,s(r.name),1),V,e("div",A,s(r.comment),1)]),_:2},1024))),256))]),_:1},16),e("div",P,[e("a",{href:f.route("reviews"),target:"_blank"},[l(h,{type:"button"},{default:o(()=>[S(s(t.textSeeMore),1)]),_:1})],8,N)])])):g("",!0)}};export{I as default};
