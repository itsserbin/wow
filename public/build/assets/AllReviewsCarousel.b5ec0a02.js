import"./create-element-if-not-defined.26147364.js";import{P as u}from"./pagination.44308c03.js";import{A as m}from"./autoplay.88899761.js";import{E as p}from"./effect-coverflow.775bdd96.js";import{S as _,a as w}from"./swiper-slide.3df0c6ab.js";import g from"./Button.678af94f.js";import{g as i,i as e,t as s,x as n,w as a,a0 as h,u as l,j as x,o,F as v,s as y,m as b,k as S}from"./vendor.1f6af4a6.js";import"./__commonjsHelpers__.488ed5c2.js";const k={key:0,class:"my-5"},B={class:"reviews__block-title font-bold text-2xl font-heading text-center text-black"},V={class:"font-bold font-subheading"},C=e("hr",{class:"bg-main shadow-lg rounded border-0 h-[1px] my-2"},null,-1),P={class:"text-base font-text"},A={class:"flex-row text-center"},N=["href"],O={__name:"AllReviewsCarousel",props:{data:{type:Array},textReviews:{type:String,default:"\u0412\u0456\u0434\u0433\u0443\u043A\u0438"},textNoReviews:{type:String,default:"\u0412\u0456\u0434\u0433\u0443\u043A\u0438 \u0432\u0456\u0434\u0441\u0443\u0442\u043D\u0456"},textSeeMore:{type:String,default:"\u0414\u0438\u0432\u0438\u0442\u0438\u0441\u044C \u0431\u0456\u043B\u044C\u0448\u0435"}},setup(t){const d=[u,m,p],c={autoHeight:!0,slidesPerView:1,spaceBetween:0,pagination:{type:"progressbar"},breakpoints:{768:{slidesPerView:2,spaceBetween:10},1024:{slidesPerView:3,spaceBetween:20}},autoplay:{delay:3500,disableOnInteraction:!1},grabCursor:!0,effect:"coverflow",centeredSlides:!0,coverflowEffect:{rotate:50,stretch:0,depth:100,modifier:1,slideShadows:!1}};return(f,R)=>t.data.length?(o(),i("section",k,[e("div",B,s(t.textReviews),1),n(l(w),h({modules:d,class:"reviews-carousel"},c),{default:a(()=>[(o(!0),i(v,null,y(t.data,r=>(o(),b(l(_),{class:"text-center bg-red-100 rounded-xl p-5"},{default:a(()=>[e("div",V,s(r.name),1),C,e("div",P,s(r.comment),1)]),_:2},1024))),256))]),_:1},16),e("div",A,[e("a",{href:f.route("reviews"),target:"_blank"},[n(g,{type:"button"},{default:a(()=>[S(s(t.textSeeMore),1)]),_:1})],8,N)])])):x("",!0)}};export{O as default};