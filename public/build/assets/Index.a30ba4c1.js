import{i as m,_ as p}from"./load.0b5421db.js";import l from"./Form.9d77c695.js";import c from"./Breadcrumbs.302adf0e.js";import{s as i}from"./swal.1147426a.js";import{p as g,q as u,m as d,w as f,Z as w,o as v,x as r,i as x}from"./vendor.1f6af4a6.js";import"./Header.6ebc2146.js";import"./vue.m.8e70aa70.js";import"./CartIcon.fe083e6a.js";import"./__commonjsHelpers__.488ed5c2.js";import"./Langs.d546e1f4.js";import"./Logo.c7a5de92.js";import"./HeaderCategories.3cfee59b.js";import"./create-element-if-not-defined.26147364.js";import"./pagination.44308c03.js";import"./lazy.2bfe2e68.js";import"./autoplay.88899761.js";import"./swiper-slide.3df0c6ab.js";import"./Footer.cbd5536b.js";import"./FixedBanner.b61bbed6.js";import"./ScrollToTop.ee29a78a.js";import"./Label.81064beb.js";import"./Input.0cfa13d3.js";import"./InputError.37578239.js";import"./Button.678af94f.js";import"./Textarea.0b07f3d6.js";import"./maska.esm.2315e0de.js";import"./Breadcrumbs.3bb13552.js";const h={class:"max-w-xl mx-auto"},Q={__name:"Index",props:["eventIdPageView","categories","options","lang","pages"],setup(t){const{appContext:a}=w(),{$fbq:s}=a.config.globalProperties,e=g({isLoading:!1,item:{name:null,phone:null,order_id:null,comment:null},errors:[]});u(()=>{m.value=!1;try{s("PageView",{},props.eventIdPageView)}catch(o){console.error(o)}});const n=async()=>{await axios.post(route("api.v1.support.create"),e.value.item).then(()=>{i({icon:"success",title:"\u0412\u0456\u0434\u043F\u0440\u0430\u0432\u043B\u0435\u043D\u043E!",text:"\u0412\u0430\u0448 \u0437\u0430\u043F\u0438\u0442 \u043F\u0435\u0440\u0435\u0434\u0430\u043D\u043E \u043D\u0430 \u043E\u0431\u0440\u043E\u0431\u043A\u0443, \u0447\u0435\u043A\u0430\u0439\u0442\u0435 \u0437\u0432\u02BC\u044F\u0437\u043A\u0443 \u0437 \u043D\u0430\u0448\u0438\u043C \u043C\u0435\u043D\u0435\u0434\u0436\u0435\u0440\u043E\u043C \u043D\u0430\u0439\u0431\u043B\u0438\u0436\u0447\u0438\u043C \u0447\u0430\u0441\u043E\u043C"}),setTimeout(()=>{window.location.href=route("home")},3e3)}).catch(({response:o})=>{e.value.errors=o.data,i({icon:"error",title:"\u041F\u043E\u043C\u0438\u043B\u043A\u0430!",text:"\u041F\u0435\u0440\u0435\u0432\u0456\u0440\u0442\u0435 \u043A\u043E\u0440\u0435\u043A\u0442\u043D\u0456\u0441\u0442\u044C \u0434\u0430\u043D\u0438\u0445"})})};return(o,V)=>(v(),d(p,{categories:t.categories,options:t.options,lang:t.lang,pages:t.pages,eventIdPageView:t.eventIdPageView},{default:f(()=>[r(c,{options:t.options,lang:t.lang,title:"\u041F\u0456\u0434\u0442\u0440\u0438\u043C\u043A\u0430"},null,8,["options","lang"]),x("div",h,[r(l,{item:e.value.item,onSubmitForm:n,errors:e.value.errors},null,8,["item","errors"])])]),_:1},8,["categories","options","lang","pages","eventIdPageView"]))}};export{Q as default};
