import{R as a,l as t,m as o,p as s,n,y as h,x as i,F as x,q as b,v as f,t as r,w as m,_ as l}from"./index-a01126e2.js";const y={class:"burger-menu active fixed w-[100%] h-[100%] z-40 top-[0] left-0 overflow-scroll bg-[#161616]"},E={class:"max-w-7xl mx-auto"},I={class:"grid grid-cols-1 mt-[30px] text-base md:text-2xl"},V={class:"menu__list flex flex-col justify-center items-center"},L={class:"grid gap-4 justify-items-center mt-5 text-[#fff] text-sm md:text-base"},T=["href"],w=["href"],A=["href"],D=["href"],O={class:"row"},P={key:0,class:"burger-menu__schedule flex uppercase text-[#fff] text-center"},R=["innerHTML"],B={class:"burger-menu__messengers messengers"},N=["href"],p=["href"],F={__name:"BurgerMenu",props:["options","lang"],setup(e){const _=a(()=>l(()=>import("./ViberIcon-0d28ed50.js"),["assets/ViberIcon-0d28ed50.js","assets/index-a01126e2.js"])),g=a(()=>l(()=>import("./TelegramIcon-add4635f.js"),["assets/TelegramIcon-add4635f.js","assets/index-a01126e2.js"])),v=a(()=>l(()=>import("./InstagramIcon-d26c5744.js"),["assets/InstagramIcon-d26c5744.js","assets/index-a01126e2.js"])),k=a(()=>l(()=>import("./FacebookIcon-e1fbcd6e.js"),["assets/FacebookIcon-e1fbcd6e.js","assets/index-a01126e2.js"])),u=a(()=>l(()=>import("./BurgerMenuLink-d8c61377.js"),["assets/BurgerMenuLink-d8c61377.js","assets/index-a01126e2.js"]));return(c,M)=>(t(),o("div",y,[s("div",E,[s("div",I,[s("ul",V,[s("li",null,[n(i(u),{href:c.route("home")},{default:h(()=>[m(f(e.lang==="ru"?"Главная":"Головна"),1)]),_:1},8,["href"])]),s("li",null,[n(i(u),{href:c.route("status")},{default:h(()=>[m(" Статус замовлення ")]),_:1},8,["href"])]),s("li",null,[n(i(u),{href:c.route("reviews")},{default:h(()=>[m(" Відгуки ")]),_:1},8,["href"])]),(t(!0),o(x,null,b(JSON.pages,d=>(t(),o("li",{key:d.id},[n(i(u),{href:c.route("pages",d.slug)},{default:h(()=>[m(f(e.lang==="ru"?d.heading.ru:d.heading.ua),1)]),_:2},1032,["href"])]))),128))])]),s("div",L,[e.options.phone?(t(),o("a",{key:0,href:"tel:"+e.options.phone},f(e.options.phone),9,T)):r("",!0),e.options.email?(t(),o("a",{key:1,href:"mailto:"+e.options.email},f(e.options.email),9,w)):r("",!0),e.options.facebook?(t(),o("a",{key:2,href:e.options.facebook,target:"_blank"},[n(i(k))],8,A)):r("",!0),e.options.instagram?(t(),o("a",{key:3,href:e.options.instagram,target:"_blank"},[n(i(v))],8,D)):r("",!0),s("div",O,[e.options.schedule?(t(),o("div",P,[s("div",{innerHTML:e.options.schedule},null,8,R)])):r("",!0),s("div",B,[e.options.telegram?(t(),o("a",{key:0,href:e.options.telegram,target:"_blank"},[n(i(g))],8,N)):r("",!0),e.options.viber?(t(),o("a",{key:1,href:e.options.viber,target:"_blank"},[n(i(_))],8,p)):r("",!0)])])])])]))}};export{F as default};