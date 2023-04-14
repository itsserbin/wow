import f from"./Timer-9b62a585.js";import v from"./ProductCard-f69226df.js";import{_ as h}from"./MasterLayout-f4ff6b28.js";import x from"./Head-a7694429.js";import{s as d}from"./swal-1d3a8573.js";import{d as _,r as u,o as k,g as l,z as p,i as t,l as r,j as y,F as g,x as S,p as o,s as T}from"./app-85fc3642.js";import"./Header-1ac8043f.js";import"./CartIcon-f6f9fae8.js";import"./Langs-43a1aeb1.js";import"./Logo-39ed68e3.js";import"./HeaderCategories-2bfd29ad.js";import"./create-element-if-not-defined-cfc4b805.js";import"./pagination-93e47b88.js";import"./lazy-e32f6dbe.js";import"./autoplay-1fa09654.js";import"./swiper-slide-1a20efe7.js";import"./Footer-15d29674.js";import"./FixedBanner-2c3f92de.js";import"./ScrollToTop-590da26c.js";const I={class:"grid gap-4 grid-cols-1"},O={class:"grid grid-cols-1 gap-4"},P={class:"font-bold text-black text-center text-2xl font-heading"},b={class:"text-center text-xl font-subheading"},w={key:0,class:"text-center text-xl font-subheading"},D={key:0,class:"grid gap-4 mt-5"},L={class:"font-bold text-black text-center text-2xl font-subheading"},B={class:"grid grid-cols-2 md:grid-cols-4 gap-4"},M={key:1,class:"order-page__text my-5"},V=_({layout:h}),Z=Object.assign(V,{__name:"Index",props:{categories:Array,options:Object,pages:Array,lang:String,eventIdPageView:String,textThanksPageTitle:{type:String,default:"Дякую за ваше замовлення :)"},textThanksPageDescription:{type:String,default:"Найближчим часом з вами зв`яжеться оператор для підтвердження замовлення."},textThanksPageOrderId:{type:String,default:"Номер вашого замовлення:"},textThanksPageSpecials:{type:String,default:"Спеціальні пропозиції. Встигни додати до замовлення"},textThanksPageSpecialsEnds:{type:String,default:"Час дії пропозиції минув. Сподіваємось, Вас зацікавлять наші акції наступного разу. Починаємо готувати посилку і незабаром відправимо Ваше замовлення"}},setup(s){const n=u({hours:"",mins:"",secs:""}),e=u({orderId:null,isLoading:!0,products:[],activeSpecialOffer:!1});k(async()=>{e.value.orderId=route().params.id,await axios.get(route("api.v1.orders.special",e.value.orderId)).then(({data:i})=>{i.result?setInterval(function(){let a=new Date(i.result.end_time).getTime()-new Date().getTime();a>=0?(n.value.hours=("0"+Math.floor(a%(1e3*60*60*24)/(1e3*60*60))).slice(-2),n.value.mins=("0"+Math.floor(a%(1e3*60*60)/(1e3*60))).slice(-2),n.value.secs=("0"+Math.floor(a%(1e3*60)/1e3)).slice(-2),e.value.activeSpecialOffer=!0,e.value.products=i.result.products,e.value.isLoading=!1):(e.value.activeSpecialOffer=!1,e.value.isLoading=!1)},1e3):(e.value.isLoading=!1,e.value.activeSpecialOffer=!1)})});const m=async(i,a)=>{await axios.post("/api/v1/order/add-item/"+e.value.orderId,{id:i,price:a}).then(async()=>await d({icon:"success",title:"Додано!",text:"Товар успішно додано до вашого замовлення"})).catch(async c=>{console.error(c),await d({icon:"error",title:"Виникла помилка",text:"Зверніться до адміністратора"})})};return(i,a)=>(o(),l(g,null,[p(x,{title:"Дякуємо за покупку!"}),t("section",I,[t("div",O,[t("h1",P,r(s.textThanksPageTitle),1),t("div",b,[t("p",null,r(s.textThanksPageDescription),1)]),e.value.orderId?(o(),l("div",w,r(s.textThanksPageOrderId)+" "+r(e.value.orderId),1)):y("",!0)]),e.value.activeSpecialOffer?(o(),l("div",D,[t("div",L,r(s.textThanksPageSpecials),1),p(f,{timer:n.value},null,8,["timer"]),t("div",B,[(o(!0),l(g,null,S(e.value.products,c=>(o(),T(v,{product:c,onAddItemToOrder:m,lang:s.lang},null,8,["product","lang"]))),256))])])):(o(),l("div",M,[t("p",null,r(s.textThanksPageSpecialsEnds),1)]))])],64))}});export{Z as default};