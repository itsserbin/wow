import{_ as a}from"./vue.m.132a23fc.js";import{_ as l,i as t,j as o,y as n,w as h,u as i,F as b,v as x,t as f,k as r,o as s,l as m}from"./vendor.2c8aab53.js";import"./__commonjsHelpers__.4516dc8a.js";const y={class:"burger-menu active fixed w-[100%] h-[100%] z-40 top-[0] left-0 overflow-scroll bg-[#161616]"},E={class:"max-w-7xl mx-auto"},I={class:"grid grid-cols-1 mt-[30px] text-base md:text-2xl"},V={class:"menu__list flex flex-col justify-center items-center"},L={class:"grid gap-4 justify-items-center mt-5 text-[#fff] text-sm md:text-base"},T=["href"],w=["href"],A=["href"],D=["href"],O={class:"row"},P={key:0,class:"burger-menu__schedule flex uppercase text-[#fff] text-center"},p=["innerHTML"],B={class:"burger-menu__messengers messengers"},N=["href"],R=["href"],H={__name:"BurgerMenu",props:["options","lang"],setup(e){const _=l(()=>a(()=>import("./ViberIcon.6ff55901.js"),["assets/ViberIcon.6ff55901.js","assets/_plugin-vue_export-helper.cdc0426e.js","assets/vendor.2c8aab53.js","assets/__commonjsHelpers__.4516dc8a.js"])),g=l(()=>a(()=>import("./TelegramIcon.8ccd1a28.js"),["assets/TelegramIcon.8ccd1a28.js","assets/_plugin-vue_export-helper.cdc0426e.js","assets/vendor.2c8aab53.js","assets/__commonjsHelpers__.4516dc8a.js"])),v=l(()=>a(()=>import("./InstagramIcon.b191478d.js"),["assets/InstagramIcon.b191478d.js","assets/_plugin-vue_export-helper.cdc0426e.js","assets/vendor.2c8aab53.js","assets/__commonjsHelpers__.4516dc8a.js"])),k=l(()=>a(()=>import("./FacebookIcon.522b6c18.js"),["assets/FacebookIcon.522b6c18.js","assets/_plugin-vue_export-helper.cdc0426e.js","assets/vendor.2c8aab53.js","assets/__commonjsHelpers__.4516dc8a.js"])),u=l(()=>a(()=>import("./BurgerMenuLink.9a8c96ab.js"),["assets/BurgerMenuLink.9a8c96ab.js","assets/vendor.2c8aab53.js","assets/__commonjsHelpers__.4516dc8a.js"]));return(c,M)=>(s(),t("div",y,[o("div",E,[o("div",I,[o("ul",V,[o("li",null,[n(i(u),{href:c.route("home")},{default:h(()=>[m(f(e.lang==="ru"?"\u0413\u043B\u0430\u0432\u043D\u0430\u044F":"\u0413\u043E\u043B\u043E\u0432\u043D\u0430"),1)]),_:1},8,["href"])]),o("li",null,[n(i(u),{href:c.route("status")},{default:h(()=>[m(" \u0421\u0442\u0430\u0442\u0443\u0441 \u0437\u0430\u043C\u043E\u0432\u043B\u0435\u043D\u043D\u044F ")]),_:1},8,["href"])]),o("li",null,[n(i(u),{href:c.route("reviews")},{default:h(()=>[m(" \u0412\u0456\u0434\u0433\u0443\u043A\u0438 ")]),_:1},8,["href"])]),(s(!0),t(b,null,x(JSON.pages,d=>(s(),t("li",{key:d.id},[n(i(u),{href:c.route("pages",d.slug)},{default:h(()=>[m(f(e.lang==="ru"?d.heading.ru:d.heading.ua),1)]),_:2},1032,["href"])]))),128))])]),o("div",L,[e.options.phone?(s(),t("a",{key:0,href:"tel:"+e.options.phone},f(e.options.phone),9,T)):r("",!0),e.options.email?(s(),t("a",{key:1,href:"mailto:"+e.options.email},f(e.options.email),9,w)):r("",!0),e.options.facebook?(s(),t("a",{key:2,href:e.options.facebook,target:"_blank"},[n(i(k))],8,A)):r("",!0),e.options.instagram?(s(),t("a",{key:3,href:e.options.instagram,target:"_blank"},[n(i(v))],8,D)):r("",!0),o("div",O,[e.options.schedule?(s(),t("div",P,[o("div",{innerHTML:e.options.schedule},null,8,p)])):r("",!0),o("div",B,[e.options.telegram?(s(),t("a",{key:0,href:e.options.telegram,target:"_blank"},[n(i(g))],8,N)):r("",!0),e.options.viber?(s(),t("a",{key:1,href:e.options.viber,target:"_blank"},[n(i(_))],8,R)):r("",!0)])])])])]))}};export{H as default};
