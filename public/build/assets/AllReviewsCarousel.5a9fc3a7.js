import"./create-element-if-not-defined.26147364.js";import{P as u}from"./pagination.44308c03.js";import{A as m}from"./autoplay.88899761.js";import{E as p}from"./effect-coverflow.775bdd96.js";import{S as _,a as w}from"./swiper-slide.5e46ad1c.js";import h from"./Button.fe7a9c84.js";import{q as n,s as e,y as s,H as i,D as a,a6 as x,u as l,v as g,A as o,F as v,E as y,C as b,x as S}from"./index.e4375aa7.js";const k={key:0,class:"my-5"},B={class:"reviews__block-title font-bold text-2xl font-heading text-center text-black"},C={class:"font-bold font-subheading"},V=e("hr",{class:"bg-main shadow-lg rounded border-0 h-[1px] my-2"},null,-1),A={class:"text-base font-text"},P={class:"flex-row text-center"},E=["href"],L={__name:"AllReviewsCarousel",props:{data:{type:Array},textReviews:{type:String,default:"\u0412\u0456\u0434\u0433\u0443\u043A\u0438"},textNoReviews:{type:String,default:"\u0412\u0456\u0434\u0433\u0443\u043A\u0438 \u0432\u0456\u0434\u0441\u0443\u0442\u043D\u0456"},textSeeMore:{type:String,default:"\u0414\u0438\u0432\u0438\u0442\u0438\u0441\u044C \u0431\u0456\u043B\u044C\u0448\u0435"}},setup(t){const d=[u,m,p],c={autoHeight:!0,slidesPerView:1,spaceBetween:0,pagination:{type:"progressbar"},breakpoints:{768:{slidesPerView:2,spaceBetween:10},1024:{slidesPerView:3,spaceBetween:20}},autoplay:{delay:3500,disableOnInteraction:!1},grabCursor:!0,effect:"coverflow",centeredSlides:!0,coverflowEffect:{rotate:50,stretch:0,depth:100,modifier:1,slideShadows:!1}};return(f,N)=>t.data.length?(o(),n("section",k,[e("div",B,s(t.textReviews),1),i(l(w),x({modules:d,class:"reviews-carousel"},c),{default:a(()=>[(o(!0),n(v,null,y(t.data,r=>(o(),b(l(_),{class:"text-center bg-red-100 rounded-xl p-5"},{default:a(()=>[e("div",C,s(r.name),1),V,e("div",A,s(r.comment),1)]),_:2},1024))),256))]),_:1},16),e("div",P,[e("a",{href:f.route("reviews"),target:"_blank"},[i(h,{type:"button"},{default:a(()=>[S(s(t.textSeeMore),1)]),_:1})],8,E)])])):g("",!0)}};export{L as default};