import l from"./Header-4c1f7986.js";import i from"./Footer-78de8f84.js";import g from"./FixedBanner-a8dfca4a.js";import c from"./ScrollToTop-c9ea5f34.js";import{o as m,p as d,g as f,i as a,z as o,q as u,F as _,ac as $}from"./app-da11968c.js";const h={class:"w-[100%] fixed top-0 z-20 bg-[#fff] flex-[0_0_auto]"},w={class:"main flex-[1_0_auto]"},V={class:"max-w-7xl mx-auto pt-36 md:pt-40 px-3 h-full"},B={__name:"MasterLayout",props:["eventIdPageView"],setup(n){const t=n,{appContext:p}=$(),{$fbq:r}=p.config.globalProperties;return m(()=>{try{r("PageView",{},t.eventIdPageView)}catch(s){console.error(s)}const e=document.querySelector(".loader");e&&e.classList.add("hidden")}),(e,s)=>(d(),f(_,null,[a("header",h,[o(g,{lang:e.$page.props.lang},null,8,["lang"]),o(l,{options:e.$page.props.options,categories:e.$page.props.categories,lang:e.$page.props.lang},null,8,["options","categories","lang"])]),a("main",w,[a("div",V,[u(e.$slots,"default")])]),o(i,{options:e.$page.props.options,lang:e.$page.props.lang,pages:e.$page.props.pages},null,8,["options","lang","pages"]),o(c)],64))}};export{B as _};
