import{i as r,_ as s}from"./load.8f608a9c.js";import n from"./Form.eba1cfcd.js";import{i as m,o as c,B as l,C as p,E as u,z as d,q as g,G as f}from"./index.1726d409.js";import"./Header.80ddd88d.js";import"./CartIcon.e7c5a976.js";import"./Langs.3beb2cbc.js";import"./Logo.9264c4eb.js";import"./HeaderCategories.bf8b75cb.js";import"./create-element-if-not-defined.26147364.js";import"./pagination.44308c03.js";import"./lazy.2bfe2e68.js";import"./autoplay.88899761.js";import"./swiper-slide.7de65c6d.js";import"./Footer.d755c37c.js";import"./FixedBanner.2140537c.js";import"./Label.9918c3e0.js";import"./Input.c1a6bdb4.js";import"./InputError.2731f248.js";import"./Button.8012267c.js";import"./Textarea.fb2e0fcc.js";const v={class:"max-w-xl mx-auto"},M={__name:"Index",props:["eventIdPageView","categories","options","lang","pages"],setup(e){const o=u("$swal"),t=m({isLoading:!1,item:{name:null,phone:null,order_id:null,comment:null},errors:[]});c(()=>{r.value=!1});const i=async()=>{await axios.post(route("api.v1.support.create"),t.value.item).then(()=>{o({icon:"success",title:"\u0412\u0456\u0434\u043F\u0440\u0430\u0432\u043B\u0435\u043D\u043E!",text:"\u0412\u0430\u0448 \u0437\u0430\u043F\u0438\u0442 \u043F\u0435\u0440\u0435\u0434\u0430\u043D\u043E \u043D\u0430 \u043E\u0431\u0440\u043E\u0431\u043A\u0443, \u0447\u0435\u043A\u0430\u0439\u0442\u0435 \u0437\u0432\u02BC\u044F\u0437\u043A\u0443 \u0437 \u043D\u0430\u0448\u0438\u043C \u043C\u0435\u043D\u0435\u0434\u0436\u0435\u0440\u043E\u043C \u043D\u0430\u0439\u0431\u043B\u0438\u0436\u0447\u0438\u043C \u0447\u0430\u0441\u043E\u043C"}),setTimeout(()=>{window.location.href=route("home")},3e3)}).catch(({response:a})=>{t.value.errors=a.data,o({icon:"error",title:"\u041F\u043E\u043C\u0438\u043B\u043A\u0430!",text:"\u041F\u0435\u0440\u0435\u0432\u0456\u0440\u0442\u0435 \u043A\u043E\u0440\u0435\u043A\u0442\u043D\u0456\u0441\u0442\u044C \u0434\u0430\u043D\u0438\u0445"})})};return(a,w)=>(d(),l(s,{categories:e.categories,options:e.options,lang:e.lang,pages:e.pages,eventIdPageView:e.eventIdPageView},{default:p(()=>[g("div",v,[f(n,{item:t.value.item,onSubmitForm:i,errors:t.value.errors},null,8,["item","errors"])])]),_:1},8,["categories","options","lang","pages","eventIdPageView"]))}};export{M as default};