import{p as z,f as S,g as c,t as l,u as f,j as u,i as e,x as n,w as a,$ as j,F as p,s as g,E as L,B as A,o,m as T,a8 as P}from"./vendor.aefaaf5e.js";import{S as v,a as N}from"./swiper-slide.63205cf8.js";import"./create-element-if-not-defined.26147364.js";import{N as V}from"./navigation.b481f07e.js";import{L as H}from"./lazy.2bfe2e68.js";import{s as w}from"./swal.1147426a.js";import"./__commonjsHelpers__.488ed5c2.js";import"./vue.m.8e70aa70.js";const E={class:"items-stretch flex flex-col no-underline border-[1px] border-secondary rounded-lg relative hover:scale-105 transition-all duration-300 h-full"},F={key:0,class:"absolute rounded-xl bg-secondary p-1 top-1 left-1 text-[0.675rem] z-10"},$={class:"w-full mx-auto"},q={key:0},D=["srcset"],G=["src","alt"],M={key:1},U=["srcset"],O=["src","alt"],R=["data-src","data-srcset","alt"],Z=e("div",{class:"swiper-lazy-preloader swiper-lazy-preloader-black"},null,-1),I={class:"flex flex-col items-center p-2 md:p-4 pt-0 justify-between"},J={class:"text-black mb-[15px] overflow-hidden font-bold text-center h-18 md:h-12 font-subheading text-base"},K={class:"text-sm text-gray-500 font-text w-full mb-3"},Q={class:"card__price flex-col mr-auto font-subheading"},W={key:0,class:"font-bold text-lg md:text-2xl text-black"},X={key:1,class:"flex flex-col"},Y={class:"text-[1rem] font-medium text-xs md:text-base line-through text-[#A5A5A5]"},tt={class:"font-bold text-lg md:text-2xl text-[#ff0000]"},et=e("svg",{width:"26",height:"26",viewBox:"0 0 26 26",fill:"none",xmlns:"http://www.w3.org/2000/svg"},[e("ellipse",{cx:"12.459",cy:"22.2084",rx:"1.625",ry:"1.625",fill:"white"}),e("circle",{cx:"18.959",cy:"22.2084",r:"1.625",fill:"white"}),e("path",{d:"M7.32572 7.04167L9.60348 17.2435C9.75655 17.9291 10.3649 18.4167 11.0674 18.4167H20.0919C20.7944 18.4167 21.4028 17.9291 21.5559 17.2435L23.4258 8.86852C23.635 7.93136 22.9221 7.04167 21.9618 7.04167H7.32572ZM7.32572 7.04167L6.59497 4.35616C6.41728 3.70315 5.82435 3.25 5.1476 3.25H2.16699",stroke:"white","stroke-width":"1.5","stroke-linecap":"round"})],-1),rt=[et],nt={__name:"ProductCard",props:{product:Object,lang:String,textGoToProductCard:{type:String,default:"\u0414\u043E\u043A\u043B\u0430\u0434\u043D\u0456\u0448\u0435"},slider:{type:Boolean,default:!1}},setup(t){const i=t,x=[H,V],y={slidesPerView:1,lazy:!0,navigation:!0,loop:!0,style:{"--swiper-navigation-color":"rgba(255, 255, 255, 0.3)","--swiper-pagination-color":"rgba(255, 255, 255, 0.3)"}},b=L(),k=P(),d=z({count:1,size:[],color:[],item_id:null,src:route(route().current(),route().params),event_id:""}),C=S(()=>(r,s)=>`- ${((r-s)*100/r).toFixed()}%`);function _(){return([1e7]+-1e3+-4e3+-8e3+-1e11).replace(/[018]/g,r=>(r^crypto.getRandomValues(new Uint8Array(1))[0]&15>>r/4).toString(16))}const B=async r=>{d.value.item_id=r,d.value.event_id=_()+"_AddToCard_"+new Date().getTime(),await axios.post(route("api.v1.cart.add",d.value)).then(async()=>{b.commit("loadCart");try{fbq("track","AddToCart",{value:i.product.discount_price?i.product.discount_price:i.product.price,currency:"UAH",content_type:"product",content_ids:[d.value.item_id],content_name:i.product.h1},d.value.event_id),k.trackEvent({event:"add_product_to_cart",ecommerce:{items:[{item_name:i.product.h1,item_id:d.value.item_id,price:i.product.discount_price?i.product.discount_price:i.product.price,quantity:1}]}})}catch(s){console.log(s)}await w({icon:"success",title:"\u0422\u043E\u0432\u0430\u0440 \u0434\u043E\u0434\u0430\u043D\u043E \u0434\u043E \u0432\u0430\u0448\u043E\u0433\u043E \u043A\u043E\u0448\u0438\u043A\u0430!",text:"\u0412\u0438 \u043C\u043E\u0436\u0435\u0442\u0435 \u043E\u0444\u043E\u0440\u043C\u0438\u0442\u0438 \u0437\u0430\u043C\u043E\u0432\u043B\u0435\u043D\u043D\u044F \u0430\u0431\u043E \u043F\u0440\u043E\u0434\u043E\u0432\u0436\u0438\u0442\u0438 \u043F\u043E\u043A\u0443\u043F\u043A\u0438 :)",showCancelButton:!0,confirmButtonText:"\u041E\u0444\u043E\u0440\u043C\u0438\u0442\u0438 \u0437\u0430\u043C\u043E\u0432\u043B\u0435\u043D\u043D\u044F",cancelButtonText:"\u041F\u0440\u043E\u0434\u043E\u0432\u0436\u0438\u0442\u0438 \u043F\u043E\u043A\u0443\u043F\u043A\u0438"}).then(s=>{s.isConfirmed&&(window.location.href=route("checkout"))})}).catch(async()=>{await w({icon:"error",title:"\u0412\u0438\u043D\u0438\u043A\u043B\u0430 \u043F\u043E\u043C\u0438\u043B\u043A\u0430",text:"\u041F\u0435\u0440\u0435\u0432\u0456\u0440\u0442\u0435 \u043A\u043E\u0440\u0440\u0435\u043A\u0442\u043D\u0456\u0441\u0442\u044C \u0434\u0430\u043D\u043D\u0438\u0445"})})};return(r,s)=>{const h=A("Link");return o(),c("div",E,[t.product.discount_price?(o(),c("div",F,l(f(C)(t.product.price,t.product.discount_price)),1)):u("",!0),e("div",null,[e("div",$,[t.slider?u("",!0):(o(),c("div",q,[n(h,{href:r.route("product",t.product.id)},{default:a(()=>[e("picture",null,[r.route("images.350",t.product.preview.webp_src)?(o(),c("source",{key:0,srcset:r.route("images.350",t.product.preview.webp_src),type:"image/webp"},null,8,D)):u("",!0),e("img",{src:r.route("images.350",t.product.preview.src),alt:t.lang==="ru"?t.product.h1.ru:t.lang==="ua"?t.product.h1.ua:null,class:"h-full object-cover w-full rounded-t-lg h-56 md:h-72"},null,8,G)])]),_:1},8,["href"])])),t.slider?(o(),c("div",M,[n(f(N),j(y,{modules:x,class:"product-card-swiper"}),{default:a(()=>[n(f(v),null,{default:a(()=>[n(h,{href:r.route("product",t.product.id)},{default:a(()=>[e("picture",null,[e("source",{srcset:t.product.preview?r.route("images.350",t.product.preview.webp_src):null,type:"image/webp"},null,8,U),e("img",{src:t.product.preview?r.route("images.350",t.product.preview.src):null,class:"h-full object-cover w-full rounded-t-lg h-56 md:h-72 swiper-lazy",alt:t.product.h1[t.lang]},null,8,O)])]),_:1},8,["href"])]),_:1}),(o(!0),c(p,null,g(t.product.images,m=>(o(),T(f(v),null,{default:a(()=>[n(h,{href:r.route("product",t.product.id)},{default:a(()=>[e("img",{"data-src":r.route("images.350",m.src),"data-srcset":r.route("images.350",m.webp_src),alt:t.product.h1[t.lang],class:"h-full object-cover w-full rounded-t-lg h-56 md:h-72 swiper-lazy"},null,8,R),Z]),_:2},1032,["href"])]),_:2},1024))),256))]),_:1},16)])):u("",!0)])]),e("div",I,[n(h,{href:r.route("product",t.product.id)},{default:a(()=>[e("h5",J,l(t.lang==="ru"?t.product.h1.ru:t.lang==="ua"?t.product.h1.ua:null),1)]),_:1},8,["href"]),e("div",K,[(o(!0),c(p,null,g(t.product.sizes,m=>(o(),c("span",null,l(m.title)+"\xA0 ",1))),256))]),e("div",Q,[t.product.discount_price?u("",!0):(o(),c("div",W,l(t.product.price)+" \u0433\u0440\u043D. ",1)),t.product.discount_price?(o(),c("div",X,[e("div",Y,l(t.product.price)+" \u0433\u0440\u043D. ",1),e("div",tt,l(t.product.discount_price)+" \u0433\u0440\u043D. ",1)])):u("",!0),e("a",{href:"javascript:",onClick:s[0]||(s[0]=m=>B(t.product.id)),class:"w-12 h-12 md:w-14 md:h-14 rounded-full flex justify-center items-center col-span-1 absolute right-[-7px] bottom-[-7px] bg-button hover:bg-accent hover:scale-105 transition-all duration-500"},rt)])])])}}};export{nt as default};
