import{_ as n}from"./MasterLayout-537f18ff.js";import a from"./Form-36187cef.js";import s from"./Breadcrumbs-0ff71aa7.js";import p from"./Head-e91aef5a.js";import{s as i}from"./swal-03cac797.js";import{j as l,k as c,l as u,m as f,n as r,p as _,F as d}from"./index-a01126e2.js";import"./Callback-e4d8a8f7.js";import"./Modal-4a985b91.js";import"./Loader-4079abec.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./Input-f389d631.js";import"./Label-106de98b.js";import"./InputError-f28ae438.js";import"./maska-224de96c.js";import"./Header-10a3104d.js";import"./CartIcon-0074655f.js";import"./Logo-83ffc10f.js";import"./HeaderCategories-9feed3c9.js";import"./swiper-slide-9942daa4.js";import"./pagination-09fa0ae8.js";import"./lazy-e052734e.js";import"./autoplay-5b9d7d48.js";import"./Footer-9e10e39a.js";import"./ScrollToTop-e1a64eae.js";import"./Button-a598e6b2.js";import"./Textarea-38770553.js";import"./Breadcrumbs-b886890f.js";const g={class:"max-w-xl mx-auto"},w=l({layout:n}),L=Object.assign(w,{__name:"Index",props:["eventIdPageView","categories","options","lang","pages"],setup(e){const t=c({item:{name:null,phone:null,order_id:null,comment:null},errors:[]}),m=async()=>{await axios.post(route("api.v1.support.create"),t.value.item).then(()=>{i({icon:"success",title:"Відправлено!",text:"Ваш запит передано на обробку, чекайте звʼязку з нашим менеджером найближчим часом"}),setTimeout(()=>{typeof window<"u"&&(window.location.href=route("home"))},3e3)}).catch(({response:o})=>{t.value.errors=o.data,i({icon:"error",title:"Помилка!",text:"Перевірте коректність даних"})})};return(o,x)=>(u(),f(d,null,[r(p,{title:"Підтримка клієнтів"}),r(s,{currentUrl:o.route().current,options:e.options,lang:e.lang,title:"Підтримка"},null,8,["currentUrl","options","lang"]),_("div",g,[r(a,{item:t.value.item,onSubmitForm:m,errors:t.value.errors},null,8,["item","errors"])])],64))}});export{L as default};