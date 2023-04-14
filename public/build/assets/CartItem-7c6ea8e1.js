import{m as n,p as t,v as o,s as l,S as u,y as a}from"./index-bc3c132c.js";const h={class:"mb-3"},x={class:"grid grid-cols-8 border-[1px] border-gray-300 rounded-[10px] relative"},_={class:"col-span-2"},p=t("div",{class:"h-[100px] absolute z-40"},null,-1),f={class:"w-full"},C=["srcset"],v=["src"],g=t("svg",{width:"18",height:"18",viewBox:"0 0 18 18",fill:"none",xmlns:"http://www.w3.org/2000/svg"},[t("path",{d:"M10.0575 9.00002L14.7825 4.28252C14.9237 4.14129 15.003 3.94974 15.003 3.75002C15.003 3.55029 14.9237 3.35874 14.7825 3.21752C14.6412 3.07629 14.4497 2.99695 14.25 2.99695C14.0502 2.99695 13.8587 3.07629 13.7175 3.21752L8.99995 7.94252L4.28245 3.21752C4.14123 3.07629 3.94968 2.99695 3.74995 2.99695C3.55023 2.99695 3.35868 3.07629 3.21745 3.21752C3.07623 3.35874 2.99689 3.55029 2.99689 3.75002C2.99689 3.94974 3.07623 4.14129 3.21745 4.28252L7.94245 9.00002L3.21745 13.7175C3.14716 13.7872 3.09136 13.8702 3.05329 13.9616C3.01521 14.053 2.99561 14.151 2.99561 14.25C2.99561 14.349 3.01521 14.4471 3.05329 14.5384C3.09136 14.6298 3.14716 14.7128 3.21745 14.7825C3.28718 14.8528 3.37013 14.9086 3.46152 14.9467C3.55292 14.9848 3.65095 15.0044 3.74995 15.0044C3.84896 15.0044 3.94699 14.9848 4.03839 14.9467C4.12978 14.9086 4.21273 14.8528 4.28245 14.7825L8.99995 10.0575L13.7175 14.7825C13.7872 14.8528 13.8701 14.9086 13.9615 14.9467C14.0529 14.9848 14.1509 15.0044 14.25 15.0044C14.349 15.0044 14.447 14.9848 14.5384 14.9467C14.6298 14.9086 14.7127 14.8528 14.7825 14.7825C14.8527 14.7128 14.9085 14.6298 14.9466 14.5384C14.9847 14.4471 15.0043 14.349 15.0043 14.25C15.0043 14.151 14.9847 14.053 14.9466 13.9616C14.9085 13.8702 14.8527 13.7872 14.7825 13.7175L10.0575 9.00002Z",fill:"#878787"})],-1),w=[g],b={class:"col-span-6 p-4"},y=["href"],L={class:"flex h-full items-center pb-3"},k={class:"text-[#231f20] w-full flex flex-col text-[1.5rem] font-[700] whitespace-nowrap"},j={key:0,class:"flex flex-col justify-center"},B={class:"text-[#777] text-[1rem] mb-3"},S={class:"text-gray-600 text-[1rem]"},N=t("span",{class:"text-xs"},"грн.",-1),V={class:"text-[#ff4c3b] text-[1.5rem] font-[700] no-underline mt-[-14px]"},z={class:"text-red-600"},D=t("span",{class:"text-xs"}," грн.",-1),E={key:1,class:"flex flex-col justify-center"},F={class:"text-[1.5rem] font-[700] no-underline mt-[-14px]"},I=t("span",{class:"text-xs"}," грн.",-1),M={class:"flex justify-end w-full"},R={class:"flex max-w-[6.25rem]"},T=t("span",{class:"minus"},"-",-1),Z=[T],q=["value"],A=t("span",{class:"plus"},"+",-1),G=[A],K={__name:"CartItem",props:["item","productRoute"],setup(e){const c=e,i=u();function r(){axios.delete(route("api.v1.cart.delete",c.item.id)).then(()=>i.commit("loadCart")).catch(s=>console.log(s))}function d(){axios.post(route("api.v1.cart.update.decrement",c.item.id)).then(()=>i.commit("loadCart")).catch(s=>console.log(s))}function m(){axios.post(route("api.v1.cart.update.increment",c.item.id)).then(()=>i.commit("loadCart")).catch(s=>console.log(s))}return(s,H)=>(a(),n("div",h,[t("div",x,[t("div",_,[p,t("picture",f,[t("source",{srcset:s.route("images.350",e.item.image.webp_src),type:"image/webp"},null,8,C),t("img",{src:s.route("images.350",e.item.image.src),class:"w-full h-full p-3 object-cover"},null,8,v)])]),t("div",{class:"absolute cursor-pointer right-3 top-3",onClick:r},w),t("div",b,[t("a",{href:s.route("product",e.item.id),class:"text-red-600 col-span-7 text-[1rem]"},[t("div",null,o(e.item.name.ua?e.item.name.ua:e.item.name.ru),1)],8,y),t("div",L,[t("div",k,[e.item.discount_price?(a(),n("div",j,[t("del",B,[t("span",S,[l(o(e.item.price)+" ",1),N])]),t("ins",V,[t("span",z,[l(o(e.item.discount_price)+" ",1),D])])])):(a(),n("div",E,[t("ins",F,[l(o(e.item.discount_price)+" ",1),I])]))]),t("div",M,[t("div",R,[t("div",{onClick:d,class:"text-red-600 cursor-pointer text-[1.25rem] font-[400] pt-[0.125rem] pb-[0.125rem] pr-[0.5rem] pl-[0.5rem]"},Z),t("input",{type:"text",value:e.item.count,class:"text-[#e3342f] border-none text-sm w-10 outline-none text-center mx-auto",disabled:""},null,8,q),t("div",{onClick:m,class:"text-red-600 cursor-pointer text-[1.25rem] font-[400] pt-[0.125rem] pb-[0.125rem] pr-[0.5rem] pl-[0.5rem]"},G)])])])])])]))}};export{K as default};
