import{p as g,q as u,m as a,w as f,Z as _,E as v,o,i as e,g as h,s as w,F as P,x as i,I}from"./vendor.1f6af4a6.js";import V from"./AdditionalProducts.a467182b.js";import x from"./CartItem.d8307022.js";import $ from"./PromoCode.dad0244a.js";import b from"./CartTotal.de1a5397.js";import{i as k,_ as B}from"./load.0b5421db.js";import"./__commonjsHelpers__.488ed5c2.js";import"./AdditionalProductCard.c7985f1c.js";import"./swal.1147426a.js";import"./vue.m.8e70aa70.js";import"./Button.678af94f.js";import"./Input.0cfa13d3.js";import"./Header.6ebc2146.js";import"./CartIcon.fe083e6a.js";import"./Langs.d546e1f4.js";import"./Logo.c7a5de92.js";import"./HeaderCategories.3cfee59b.js";import"./create-element-if-not-defined.26147364.js";import"./pagination.44308c03.js";import"./lazy.2bfe2e68.js";import"./autoplay.88899761.js";import"./swiper-slide.3df0c6ab.js";import"./Footer.cbd5536b.js";import"./FixedBanner.b61bbed6.js";import"./ScrollToTop.ee29a78a.js";const C=["onSubmit"],S={class:"grid grid-cols-1 md:grid-cols-2 relative gap-4"},q={class:""},y={class:""},E={class:"cart-item__right row mb-3"},st={__name:"Index",props:["recommendProducts","lang","categories","options","pages","eventIdPageView"],setup(t){const n=t,{appContext:c}=_(),{$fbq:m}=c.config.globalProperties,l=v(),r=g({});u(async()=>{r.value=l.state,k.value=!1;try{m("PageView",{},n.eventIdPageView)}catch(s){console.error(s)}});const d=()=>{window.location.href=route("checkout")};return(s,F)=>(o(),a(B,{categories:t.categories,options:t.options,lang:t.lang,pages:t.pages,eventIdPageView:t.eventIdPageView},{default:f(()=>[e("form",{onSubmit:I(d,["prevent"])},[e("div",S,[e("div",q,[(o(!0),h(P,null,w(r.value.list,p=>(o(),a(x,{item:p},null,8,["item"]))),256))]),e("div",y,[e("div",E,[i($),i(b),i(V,{products:t.recommendProducts,lang:t.lang},null,8,["products","lang"])])])])],40,C)]),_:1},8,["categories","options","lang","pages","eventIdPageView"]))}};export{st as default};
