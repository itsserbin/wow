import a from"./Label-040fda4f.js";import d from"./Input-aacbae22.js";import{r as n,g as c,i as e,z as l,v as s,p as m,k as i}from"./app-da11968c.js";const f={class:"rounded-[15px] bg-[#fff] border-[0.5px] border-gray-300 shadow-lg mb-[1.5rem] pt-[1.25rem] pr-[1rem] pb-[1.25rem] pl-[1rem]"},p=e("div",{class:"text-2xl font-heading font-[400]"},[e("h3",null,"Доставка")],-1),u={class:"grid gap-4"},_={class:"block"},x={class:"block"},v={__name:"Delivery",props:["order"],setup(o){return n({cities:[],isLoadingCities:!1}),(V,t)=>(m(),c("div",f,[p,e("div",u,[e("div",_,[l(a,null,{default:s(()=>[i("Місто")]),_:1}),l(d,{type:"text",placeholder:"Вкажіть місто",modelValue:o.order.city,"onUpdate:modelValue":t[0]||(t[0]=r=>o.order.city=r)},null,8,["modelValue"])]),e("div",x,[l(a,null,{default:s(()=>[i("Відділення Нова Пошта")]),_:1}),l(d,{type:"text",placeholder:"Вкажіть відділення НП",modelValue:o.order.postal_office,"onUpdate:modelValue":t[1]||(t[1]=r=>o.order.postal_office=r)},null,8,["modelValue"])])])]))}};export{v as default};
