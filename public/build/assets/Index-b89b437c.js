import{_ as a}from"./MasterLayout-010f9124.js";import n from"./Form-b5350547.js";import s from"./Breadcrumbs-8cf062c2.js";import p from"./Head-de796659.js";import{s as i}from"./swal-dd8503f8.js";import{d as l,r as c,g as u,z as r,i as f,F as _,p as d}from"./app-da11968c.js";import"./Header-4c1f7986.js";import"./CartIcon-d0aaf1a7.js";import"./Langs-2265ce9f.js";import"./Logo-9fe22fca.js";import"./HeaderCategories-033e77a6.js";import"./create-element-if-not-defined-cfc4b805.js";import"./pagination-93e47b88.js";import"./lazy-e32f6dbe.js";import"./autoplay-1fa09654.js";import"./swiper-slide-d2fd35cc.js";import"./Footer-78de8f84.js";import"./FixedBanner-a8dfca4a.js";import"./ScrollToTop-c9ea5f34.js";import"./Label-040fda4f.js";import"./Input-aacbae22.js";import"./InputError-98f1dafe.js";import"./Button-32e5d6b0.js";import"./Textarea-2253d46b.js";import"./maska-224de96c.js";import"./Breadcrumbs-a78075e9.js";const g={class:"max-w-xl mx-auto"},w=l({layout:a}),K=Object.assign(w,{__name:"Index",props:["eventIdPageView","categories","options","lang","pages"],setup(e){const t=c({item:{name:null,phone:null,order_id:null,comment:null},errors:[]}),m=async()=>{await axios.post(route("api.v1.support.create"),t.value.item).then(()=>{i({icon:"success",title:"Відправлено!",text:"Ваш запит передано на обробку, чекайте звʼязку з нашим менеджером найближчим часом"}),setTimeout(()=>{typeof window<"u"&&(window.location.href=route("home"))},3e3)}).catch(({response:o})=>{t.value.errors=o.data,i({icon:"error",title:"Помилка!",text:"Перевірте коректність даних"})})};return(o,x)=>(d(),u(_,null,[r(p,{title:"Підтримка клієнтів"}),r(s,{currentUrl:o.route().current,options:e.options,lang:e.lang,title:"Підтримка"},null,8,["currentUrl","options","lang"]),f("div",g,[r(n,{item:t.value.item,onSubmitForm:m,errors:t.value.errors},null,8,["item","errors"])])],64))}});export{K as default};
