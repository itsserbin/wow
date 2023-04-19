import{ah as y,r as b,j as k,p as i,q as d,B as s,t as l,C as a,v as e,l as m,x as h,F as C,K as B,L as p}from"./app-6d1ec759.js";import{u as T}from"./app-65111db7.js";import{s as f}from"./swal-76588f7d.js";import{e as A}from"./eventTracking-2c28b7ec.js";import"./vue-i18n.esm-bundler-39f45a4f.js";const j={class:"items-stretch flex flex-col no-underline border-[1px] border-secondary rounded-lg relative hover:scale-105 transition-all duration-300 h-full"},L={key:0,class:"absolute rounded-xl bg-secondary p-1 top-1 left-1 text-[0.675rem] z-10"},S={class:"w-full mx-auto"},H={key:0},P=["srcset"],V=["src","alt"],z={class:"flex flex-col items-center p-2 md:p-4 pt-0 justify-between"},F={class:"text-black mb-[15px] overflow-hidden font-bold text-center h-18 md:h-12 font-subheading text-base"},N={class:"text-sm text-gray-500 font-text w-full mb-3"},$={class:"card__price flex-col mr-auto font-subheading"},q={key:0,class:"font-bold text-lg md:text-2xl text-black"},D={key:1,class:"flex flex-col"},E={class:"text-[1rem] font-medium text-xs md:text-base line-through text-[#A5A5A5]"},G={class:"font-bold text-lg md:text-2xl text-[#ff0000]"},M=e("svg",{width:"26",height:"26",viewBox:"0 0 26 26",fill:"none",xmlns:"http://www.w3.org/2000/svg"},[e("ellipse",{cx:"12.459",cy:"22.2084",rx:"1.625",ry:"1.625",fill:"white"}),e("circle",{cx:"18.959",cy:"22.2084",r:"1.625",fill:"white"}),e("path",{d:"M7.32572 7.04167L9.60348 17.2435C9.75655 17.9291 10.3649 18.4167 11.0674 18.4167H20.0919C20.7944 18.4167 21.4028 17.9291 21.5559 17.2435L23.4258 8.86852C23.635 7.93136 22.9221 7.04167 21.9618 7.04167H7.32572ZM7.32572 7.04167L6.59497 4.35616C6.41728 3.70315 5.82435 3.25 5.1476 3.25H2.16699",stroke:"white","stroke-width":"1.5","stroke-linecap":"round"})],-1),U=[M],J={__name:"ProductCard",props:{product:Object,lang:String,textGoToProductCard:{type:String,default:"Докладніше"},slider:{type:Boolean,default:!1}},setup(t){const c=t,x=y(),v=T(),n=b({count:1,size:[],color:[],item_id:null,src:typeof window<"u"?window.location.href:null,event_id:""}),w=k(()=>(o,r)=>`- ${((o-r)*100/o).toFixed()}%`),g=()=>([1e7]+-1e3+-4e3+-8e3+-1e11).replace(/[018]/g,o=>(o^crypto.getRandomValues(new Uint8Array(1))[0]&15>>o/4).toString(16)),_=async o=>{n.value.item_id=o,n.value.event_id=g()+"_AddToCard_"+new Date().getTime(),await axios.post(route("api.v1.cart.add",n.value)).then(async()=>{x.commit("loadCart");try{A("AddToCart",{value:c.product.discount_price?c.product.discount_price:c.product.price,currency:"UAH",content_type:"product",content_ids:[n.value.item_id],content_name:c.product.h1},n.value.event_id),v.trackEvent({event:"add_product_to_cart",ecommerce:{items:[{item_name:c.product.h1,item_id:n.value.item_id,price:c.product.discount_price?c.product.discount_price:c.product.price,quantity:1}]}})}catch(r){console.log(r)}await f({icon:"success",title:"Товар додано до вашого кошика!",text:"Ви можете оформити замовлення або продовжити покупки :)",showCancelButton:!0,confirmButtonText:"Оформити замовлення",cancelButtonText:"Продовжити покупки"}).then(r=>{r.isConfirmed&&typeof window<"u"&&(window.location.href=route("checkout"))})}).catch(async()=>{await f({icon:"error",title:"Виникла помилка",text:"Перевірте корректність данних"})})};return(o,r)=>(i(),d("div",j,[t.product.discount_price?(i(),d("div",L,s(l(w)(t.product.price,t.product.discount_price)),1)):a("",!0),e("div",null,[e("div",S,[m(l(p),{href:o.route("product",t.product.id)},{default:h(()=>[t.product.preview?(i(),d("picture",H,[t.product.preview.webp_src?(i(),d("source",{key:0,srcset:o.route("images.350",t.product.preview.webp_src),type:"image/webp"},null,8,P)):a("",!0),e("img",{src:o.route("images.350",t.product.preview.src),alt:t.product.h1[t.lang],class:"object-cover w-full rounded-t-lg h-56 md:h-72"},null,8,V)])):a("",!0)]),_:1},8,["href"])])]),e("div",z,[m(l(p),{href:o.route("product",t.product.id)},{default:h(()=>[e("h5",F,s(t.product.h1[o.$page.props.lang]),1)]),_:1},8,["href"]),e("div",N,[(i(!0),d(C,null,B(t.product.sizes,u=>(i(),d("span",null,s(u.title)+"  ",1))),256))]),e("div",$,[t.product.discount_price?a("",!0):(i(),d("div",q,s(t.product.price)+" грн. ",1)),t.product.discount_price?(i(),d("div",D,[e("div",E,s(t.product.price)+" грн. ",1),e("div",G,s(t.product.discount_price)+" грн. ",1)])):a("",!0),e("a",{href:"javascript:",onClick:r[0]||(r[0]=u=>_(t.product.id)),class:"w-12 h-12 md:w-14 md:h-14 rounded-full flex justify-center items-center col-span-1 absolute right-[-7px] bottom-[-7px] bg-button hover:bg-accent hover:scale-105 transition-all duration-500"},U)])])]))}};export{J as default};
