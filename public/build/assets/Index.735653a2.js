import v from"./Timer.12e0e439.js";import h from"./ProductCard.1e197263.js";import{i as x,_ as k}from"./load.d25b2206.js";import{i as g,o as I,B as u,C as P,aa as S,E as T,z as o,q as s,x as r,p as l,s as _,G as y,F as w,D as b}from"./index.1726d409.js";import"./Header.80ddd88d.js";import"./CartIcon.e7c5a976.js";import"./Langs.3beb2cbc.js";import"./Logo.9264c4eb.js";import"./HeaderCategories.bf8b75cb.js";import"./create-element-if-not-defined.26147364.js";import"./pagination.44308c03.js";import"./lazy.2bfe2e68.js";import"./autoplay.88899761.js";import"./swiper-slide.7de65c6d.js";import"./Footer.d755c37c.js";import"./FixedBanner.2140537c.js";const O={class:"grid gap-4 grid-cols-1"},V={class:"grid grid-cols-1 gap-4"},D={class:"font-bold text-black text-center text-2xl font-heading"},L={class:"text-center text-xl font-subheading"},B={key:0,class:"text-center text-xl font-subheading"},C={key:0,class:"grid gap-4 mt-5"},$={class:"font-bold text-black text-center text-2xl font-subheading"},E={class:"grid grid-cols-2 md:grid-cols-4 gap-4"},M={key:1,class:"order-page__text my-5"},Z={__name:"Index",props:{categories:Array,options:Object,pages:Array,lang:String,eventIdPageView:String,textThanksPageTitle:{type:String,default:"\u0414\u044F\u043A\u0443\u044E \u0437\u0430 \u0432\u0430\u0448\u0435 \u0437\u0430\u043C\u043E\u0432\u043B\u0435\u043D\u043D\u044F :)"},textThanksPageDescription:{type:String,default:"\u041D\u0430\u0439\u0431\u043B\u0438\u0436\u0447\u0438\u043C \u0447\u0430\u0441\u043E\u043C \u0437 \u0432\u0430\u043C\u0438 \u0437\u0432`\u044F\u0436\u0435\u0442\u044C\u0441\u044F \u043E\u043F\u0435\u0440\u0430\u0442\u043E\u0440 \u0434\u043B\u044F \u043F\u0456\u0434\u0442\u0432\u0435\u0440\u0434\u0436\u0435\u043D\u043D\u044F \u0437\u0430\u043C\u043E\u0432\u043B\u0435\u043D\u043D\u044F."},textThanksPageOrderId:{type:String,default:"\u041D\u043E\u043C\u0435\u0440 \u0432\u0430\u0448\u043E\u0433\u043E \u0437\u0430\u043C\u043E\u0432\u043B\u0435\u043D\u043D\u044F:"},textThanksPageSpecials:{type:String,default:"\u0421\u043F\u0435\u0446\u0456\u0430\u043B\u044C\u043D\u0456 \u043F\u0440\u043E\u043F\u043E\u0437\u0438\u0446\u0456\u0457. \u0412\u0441\u0442\u0438\u0433\u043D\u0438 \u0434\u043E\u0434\u0430\u0442\u0438 \u0434\u043E \u0437\u0430\u043C\u043E\u0432\u043B\u0435\u043D\u043D\u044F"},textThanksPageSpecialsEnds:{type:String,default:"\u0427\u0430\u0441 \u0434\u0456\u0457 \u043F\u0440\u043E\u043F\u043E\u0437\u0438\u0446\u0456\u0457 \u043C\u0438\u043D\u0443\u0432. \u0421\u043F\u043E\u0434\u0456\u0432\u0430\u0454\u043C\u043E\u0441\u044C, \u0412\u0430\u0441 \u0437\u0430\u0446\u0456\u043A\u0430\u0432\u043B\u044F\u0442\u044C \u043D\u0430\u0448\u0456 \u0430\u043A\u0446\u0456\u0457 \u043D\u0430\u0441\u0442\u0443\u043F\u043D\u043E\u0433\u043E \u0440\u0430\u0437\u0443. \u041F\u043E\u0447\u0438\u043D\u0430\u0454\u043C\u043E \u0433\u043E\u0442\u0443\u0432\u0430\u0442\u0438 \u043F\u043E\u0441\u0438\u043B\u043A\u0443 \u0456 \u043D\u0435\u0437\u0430\u0431\u0430\u0440\u043E\u043C \u0432\u0456\u0434\u043F\u0440\u0430\u0432\u0438\u043C\u043E \u0412\u0430\u0448\u0435 \u0437\u0430\u043C\u043E\u0432\u043B\u0435\u043D\u043D\u044F"}},setup(t){const{appContext:p}=S(),{$fbq:f}=p.config.globalProperties,n=g({hours:"",mins:"",secs:""}),e=g({orderId:null,isLoading:!0,products:[],activeSpecialOffer:!1}),d=T("$swal");I(async()=>{e.value.orderId=route().params.id,await axios.get(route("api.v1.orders.special",e.value.orderId)).then(({data:a})=>{a.result?setInterval(function(){let i=new Date(a.result.end_time).getTime()-new Date().getTime();i>=0?(n.value.hours=("0"+Math.floor(i%(1e3*60*60*24)/(1e3*60*60))).slice(-2),n.value.mins=("0"+Math.floor(i%(1e3*60*60)/(1e3*60))).slice(-2),n.value.secs=("0"+Math.floor(i%(1e3*60)/1e3)).slice(-2),e.value.activeSpecialOffer=!0,e.value.products=a.result.products,e.value.isLoading=!1):(e.value.activeSpecialOffer=!1,e.value.isLoading=!1)},1e3):(e.value.isLoading=!1,e.value.activeSpecialOffer=!1)}),x.value=!1;try{f("PageView",{},props.eventIdPageView)}catch(a){console.error(a)}});function m(a,i){axios.post("/api/v1/order/add-item/"+e.value.orderId,{id:a,price:i}).then(()=>d({icon:"success",title:"\u0414\u043E\u0434\u0430\u043D\u043E!",text:"\u0422\u043E\u0432\u0430\u0440 \u0443\u0441\u043F\u0456\u0448\u043D\u043E \u0434\u043E\u0434\u0430\u043D\u043E \u0434\u043E \u0432\u0430\u0448\u043E\u0433\u043E \u0437\u0430\u043C\u043E\u0432\u043B\u0435\u043D\u043D\u044F"})).catch(c=>{console.log(c),d({icon:"error",title:"\u0412\u0438\u043D\u0438\u043A\u043B\u0430 \u043F\u043E\u043C\u0438\u043B\u043A\u0430",text:"\u0417\u0432\u0435\u0440\u043D\u0456\u0442\u044C\u0441\u044F \u0434\u043E \u0430\u0434\u043C\u0456\u043D\u0456\u0441\u0442\u0440\u0430\u0442\u043E\u0440\u0430"})})}return(a,i)=>(o(),u(k,{categories:t.categories,options:t.options,lang:t.lang,pages:t.pages,eventIdPageView:t.eventIdPageView},{default:P(()=>[s("section",O,[s("div",V,[s("h1",D,r(t.textThanksPageTitle),1),s("div",L,[s("p",null,r(t.textThanksPageDescription),1)]),e.value.orderId?(o(),l("div",B,r(t.textThanksPageOrderId)+" "+r(e.value.orderId),1)):_("",!0)]),e.value.activeSpecialOffer?(o(),l("div",C,[s("div",$,r(t.textThanksPageSpecials),1),y(v,{timer:n.value},null,8,["timer"]),s("div",E,[(o(!0),l(w,null,b(e.value.products,c=>(o(),u(h,{product:c,onAddItemToOrder:m,lang:t.lang},null,8,["product","lang"]))),256))])])):(o(),l("div",M,[s("p",null,r(t.textThanksPageSpecialsEnds),1)]))])]),_:1},8,["categories","options","lang","pages","eventIdPageView"]))}};export{Z as default};
