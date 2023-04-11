import{p as S,f as j,g as c,t as d,u,j as l,i as e,x as m,w as h,a0 as A,F as f,s as p,Z as P,E as T,o as r,m as L,a9 as N}from"./vendor.1f6af4a6.js";import{S as g,a as V}from"./swiper-slide.3df0c6ab.js";import"./create-element-if-not-defined.26147364.js";import{N as H}from"./navigation.b481f07e.js";import{L as E}from"./lazy.2bfe2e68.js";import{s as v}from"./swal.1147426a.js";import"./__commonjsHelpers__.488ed5c2.js";import"./vue.m.8e70aa70.js";const F={class:"items-stretch flex flex-col no-underline border-[1px] border-secondary rounded-lg relative hover:scale-105 transition-all duration-300 h-full"},$={key:0,class:"absolute rounded-xl bg-secondary p-1 top-1 left-1 text-[0.675rem] z-10"},q={class:"w-full mx-auto"},D={key:0},G=["href"],M=["srcset"],U=["src","alt"],Z={key:1},I=["href"],O=["srcset"],R=["src","alt"],J=["href"],K=["data-src","data-srcset","alt"],Q=e("div",{class:"swiper-lazy-preloader swiper-lazy-preloader-black"},null,-1),W={class:"flex flex-col items-center p-2 md:p-4 pt-0 justify-between"},X=["href"],Y={class:"text-black mb-[15px] overflow-hidden font-bold text-center h-18 md:h-12 font-subheading text-base"},tt={class:"text-sm text-gray-500 font-text w-full mb-3"},et={class:"card__price flex-col mr-auto font-subheading"},ot={key:0,class:"font-bold text-lg md:text-2xl text-black"},rt={key:1,class:"flex flex-col"},ct={class:"text-[1rem] font-medium text-xs md:text-base line-through text-[#A5A5A5]"},st={class:"font-bold text-lg md:text-2xl text-[#ff0000]"},it=e("svg",{width:"26",height:"26",viewBox:"0 0 26 26",fill:"none",xmlns:"http://www.w3.org/2000/svg"},[e("ellipse",{cx:"12.459",cy:"22.2084",rx:"1.625",ry:"1.625",fill:"white"}),e("circle",{cx:"18.959",cy:"22.2084",r:"1.625",fill:"white"}),e("path",{d:"M7.32572 7.04167L9.60348 17.2435C9.75655 17.9291 10.3649 18.4167 11.0674 18.4167H20.0919C20.7944 18.4167 21.4028 17.9291 21.5559 17.2435L23.4258 8.86852C23.635 7.93136 22.9221 7.04167 21.9618 7.04167H7.32572ZM7.32572 7.04167L6.59497 4.35616C6.41728 3.70315 5.82435 3.25 5.1476 3.25H2.16699",stroke:"white","stroke-width":"1.5","stroke-linecap":"round"})],-1),at=[it],gt={__name:"ProductCard",props:{product:Object,lang:String,textGoToProductCard:{type:String,default:"\u0414\u043E\u043A\u043B\u0430\u0434\u043D\u0456\u0448\u0435"},slider:{type:Boolean,default:!1}},setup(t){const s=t,{appContext:w}=P(),{$fbq:x}=w.config.globalProperties,y=[E,H],b={slidesPerView:1,lazy:!0,navigation:!0,loop:!0,style:{"--swiper-navigation-color":"rgba(255, 255, 255, 0.3)","--swiper-pagination-color":"rgba(255, 255, 255, 0.3)"}},k=T(),C=N(),a=S({count:1,size:[],color:[],item_id:null,src:route(route().current(),route().params),event_id:""}),_=j(()=>(o,i)=>`- ${((o-i)*100/o).toFixed()}%`);function z(){return([1e7]+-1e3+-4e3+-8e3+-1e11).replace(/[018]/g,o=>(o^crypto.getRandomValues(new Uint8Array(1))[0]&15>>o/4).toString(16))}const B=async o=>{a.value.item_id=o,a.value.event_id=z()+"_AddToCard_"+new Date().getTime(),await axios.post(route("api.v1.cart.add",a.value)).then(async()=>{k.commit("loadCart");try{x("AddToCart",{value:s.product.discount_price?s.product.discount_price:s.product.price,currency:"UAH",content_type:"product",content_ids:[a.value.item_id],content_name:s.product.h1},a.value.event_id),C.trackEvent({event:"add_product_to_cart",ecommerce:{items:[{item_name:s.product.h1,item_id:a.value.item_id,price:s.product.discount_price?s.product.discount_price:s.product.price,quantity:1}]}})}catch(i){console.log(i)}await v({icon:"success",title:"\u0422\u043E\u0432\u0430\u0440 \u0434\u043E\u0434\u0430\u043D\u043E \u0434\u043E \u0432\u0430\u0448\u043E\u0433\u043E \u043A\u043E\u0448\u0438\u043A\u0430!",text:"\u0412\u0438 \u043C\u043E\u0436\u0435\u0442\u0435 \u043E\u0444\u043E\u0440\u043C\u0438\u0442\u0438 \u0437\u0430\u043C\u043E\u0432\u043B\u0435\u043D\u043D\u044F \u0430\u0431\u043E \u043F\u0440\u043E\u0434\u043E\u0432\u0436\u0438\u0442\u0438 \u043F\u043E\u043A\u0443\u043F\u043A\u0438 :)",showCancelButton:!0,confirmButtonText:"\u041E\u0444\u043E\u0440\u043C\u0438\u0442\u0438 \u0437\u0430\u043C\u043E\u0432\u043B\u0435\u043D\u043D\u044F",cancelButtonText:"\u041F\u0440\u043E\u0434\u043E\u0432\u0436\u0438\u0442\u0438 \u043F\u043E\u043A\u0443\u043F\u043A\u0438"}).then(i=>{i.isConfirmed&&(window.location.href=route("checkout"))})}).catch(async()=>{await v({icon:"error",title:"\u0412\u0438\u043D\u0438\u043A\u043B\u0430 \u043F\u043E\u043C\u0438\u043B\u043A\u0430",text:"\u041F\u0435\u0440\u0435\u0432\u0456\u0440\u0442\u0435 \u043A\u043E\u0440\u0440\u0435\u043A\u0442\u043D\u0456\u0441\u0442\u044C \u0434\u0430\u043D\u043D\u0438\u0445"})})};return(o,i)=>(r(),c("div",F,[t.product.discount_price?(r(),c("div",$,d(u(_)(t.product.price,t.product.discount_price)),1)):l("",!0),e("div",null,[e("div",q,[t.slider?l("",!0):(r(),c("div",D,[e("a",{href:o.route("product",t.product.id)},[e("picture",null,[o.route("images.350",t.product.preview.webp_src)?(r(),c("source",{key:0,srcset:o.route("images.350",t.product.preview.webp_src),type:"image/webp"},null,8,M)):l("",!0),e("img",{src:o.route("images.350",t.product.preview.src),alt:t.lang==="ru"?t.product.h1.ru:t.lang==="ua"?t.product.h1.ua:null,class:"h-full object-cover w-full rounded-t-lg h-56 md:h-72"},null,8,U)])],8,G)])),t.slider?(r(),c("div",Z,[m(u(V),A(b,{modules:y,class:"product-card-swiper"}),{default:h(()=>[m(u(g),null,{default:h(()=>[e("a",{href:o.route("product",t.product.id)},[e("picture",null,[e("source",{srcset:t.product.preview?o.route("images.350",t.product.preview.webp_src):null,type:"image/webp"},null,8,O),e("img",{src:t.product.preview?o.route("images.350",t.product.preview.src):null,class:"h-full object-cover w-full rounded-t-lg h-56 md:h-72 swiper-lazy",alt:t.product.h1[t.lang]},null,8,R)])],8,I)]),_:1}),(r(!0),c(f,null,p(t.product.images,n=>(r(),L(u(g),null,{default:h(()=>[e("a",{href:o.route("product",t.product.id)},[e("img",{"data-src":o.route("images.350",n.src),"data-srcset":o.route("images.350",n.webp_src),alt:t.product.h1[t.lang],class:"h-full object-cover w-full rounded-t-lg h-56 md:h-72 swiper-lazy"},null,8,K),Q],8,J)]),_:2},1024))),256))]),_:1},16)])):l("",!0)])]),e("div",W,[e("a",{href:o.route("product",t.product.id)},[e("h5",Y,d(t.lang==="ru"?t.product.h1.ru:t.lang==="ua"?t.product.h1.ua:null),1)],8,X),e("div",tt,[(r(!0),c(f,null,p(t.product.sizes,n=>(r(),c("span",null,d(n.title)+"\xA0 ",1))),256))]),e("div",et,[t.product.discount_price?l("",!0):(r(),c("div",ot,d(t.product.price)+" \u0433\u0440\u043D. ",1)),t.product.discount_price?(r(),c("div",rt,[e("div",ct,d(t.product.price)+" \u0433\u0440\u043D. ",1),e("div",st,d(t.product.discount_price)+" \u0433\u0440\u043D. ",1)])):l("",!0),e("a",{href:"javascript:",onClick:i[0]||(i[0]=n=>B(t.product.id)),class:"w-12 h-12 md:w-14 md:h-14 rounded-full flex justify-center items-center col-span-1 absolute right-[-7px] bottom-[-7px] bg-button hover:bg-accent hover:scale-105 transition-all duration-500"},at)])])]))}};export{gt as default};
