import m from"./Breadcrumbs.d6408893.js";import{i as n,_ as l}from"./load.a7bf59d5.js";import p from"./Form.d3664b64.js";import u from"./Status.0af36774.js";import{s as d}from"./swal.1147426a.js";import{p as c,q as g,m as r,w as f,o,g as v,x as _,i as h,j as i}from"./vendor.aefaaf5e.js";import"./Breadcrumbs.35555212.js";import"./__commonjsHelpers__.488ed5c2.js";import"./Header.696833fd.js";import"./vue.m.8e70aa70.js";import"./CartIcon.562737bb.js";import"./Langs.a251c5f0.js";import"./Logo.9cbb3071.js";import"./HeaderCategories.c53a540e.js";import"./create-element-if-not-defined.26147364.js";import"./pagination.44308c03.js";import"./lazy.2bfe2e68.js";import"./autoplay.88899761.js";import"./swiper-slide.63205cf8.js";import"./Footer.8749869b.js";import"./FixedBanner.a21fb294.js";import"./ScrollToTop.055414eb.js";import"./Label.7d866754.js";import"./Input.f9018368.js";import"./Button.8ea31d3d.js";import"./maska.esm.2315e0de.js";import"./OrderItem.915595eb.js";const w={key:0},x={class:"max-w-xl mx-auto"},U={__name:"Index",props:["statuses","categories","options","lang","pages","eventIdPageView"],setup(t){const e=c({item:{phone:null,order_id:null},isLoading:!1,statuses:[],order:null});g(async()=>{route().params.order_id&&route().params.phone&&(e.value.item.phone=route().params.phone,e.value.item.order_id=route().params.order_id,await s()),n.value=!1});const s=async()=>{await axios.post(route("api.v1.orders.status"),e.value.item).then(({data:a})=>{a.result?e.value.order=a.result:d({icon:"error",title:"\u0417\u0430\u043C\u043E\u0432\u043B\u0435\u043D\u043D\u044F \u043D\u0435 \u0437\u043D\u0430\u0439\u0434\u0435\u043D\u043E",text:"\u041F\u0435\u0440\u0435\u0432\u0456\u0440\u0442\u0435 \u0432\u0432\u0435\u0434\u0435\u043D\u0456 \u0434\u0430\u043D\u0456 \u0430\u0431\u043E \u0437\u0432\u0435\u0440\u043D\u0456\u0442\u044C\u0441\u044F \u0437\u0430 \u0434\u043E\u043F\u043E\u043C\u043E\u0433\u043E\u044E \u0434\u043E \u043C\u0435\u043D\u0435\u0434\u0436\u0435\u0440\u0430"})})};return(a,k)=>(o(),r(l,{categories:t.categories,options:t.options,lang:t.lang,pages:t.pages,eventIdPageView:t.eventIdPageView},{default:f(()=>[e.value.isLoading?i("",!0):(o(),v("div",w,[_(m,{options:t.options,lang:t.lang,title:"\u0421\u0442\u0430\u0442\u0443\u0441 \u0437\u0430\u043C\u043E\u0432\u043B\u0435\u043D\u043D\u044F"},null,8,["options","lang"]),h("div",x,[e.value.order?i("",!0):(o(),r(p,{key:0,item:e.value.item,onSubmitForm:s},null,8,["item"])),e.value.order?(o(),r(u,{key:1,order:e.value.order,statuses:e.value.statuses},null,8,["order","statuses"])):i("",!0)])]))]),_:1},8,["categories","options","lang","pages","eventIdPageView"]))}};export{U as default};
