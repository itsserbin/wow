import{ah as l,p as d,q as n,v as t,B as o,t as e,l as c,x as a,A as _,L as r}from"./app-6d1ec759.js";import f from"./Button-5a7dd9cc.js";const h={class:"rounded-[15px] bg-[#fff] border-[0.5px] border-gray-300 shadow-lg box-border mb-[1.5rem] p-[1rem] font-subheading"},u={class:"pb-[0.625rem]"},p={class:"items-center flex justify-between"},x=t("div",{class:"text-text font-[500] uppercase"},"Товарів",-1),v={class:"value"},m={class:"text-[#231f20] flex flex-col text-[1.5rem] font-[700] whitespace-nowrap"},b={class:"price total"},w=t("hr",null,null,-1),y={class:"items-center flex justify-between"},g=t("div",{class:"text-[#e3342f] text-base"},"Ціна без знижки",-1),k={class:"value"},B={class:"product-card__price"},j={class:"price"},C={class:"amount price-old"},N={class:"flex items-center justify-between"},V=t("div",{class:"text-[#000] font-[500] uppercase"},"До сплати",-1),L={class:"value"},S={class:"text-[#231f20] flex flex-col text-[1.5rem] font-[700] whitespace-nowrap"},T={class:"price total"},q={class:"items-center flex flex-col"},$={__name:"CartTotal",setup(A){const s=l();return(i,D)=>(d(),n("div",h,[t("div",u,[t("div",p,[x,t("div",v,[t("div",m,[t("div",b,o(e(s).state.totalCount),1)])])]),w,t("div",y,[g,t("div",k,[t("div",B,[t("div",j,[t("del",null,[t("span",C,o(e(s).state.price_without_discount)+" грн. ",1)])])])])]),t("div",N,[V,t("div",L,[t("div",S,[t("div",T,o(e(s).state.totalPrice)+" грн.",1)])])])]),t("div",q,[c(e(r),{href:i.route("checkout"),class:"w-full"},{default:a(()=>[c(f,{type:"submit",class:"w-full"},{default:a(()=>[_(" Оформити замовлення ")]),_:1})]),_:1},8,["href"])])]))}};export{$ as default};
