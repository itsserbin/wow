import{a2 as h,p as o,q as c,v as t,B as s,A as i}from"./app-f55448cf.js";import{s as a}from"./swal-01ed9a07.js";const x={class:"grid grid-cols-8 border-[1px] border-gray-300 rounded-[10px] relative"},u={class:"col-span-2"},m={class:"w-full"},_=["srcset"],f=["src","alt"],p={class:"col-span-6 p-[20px] flex flex-col"},v={class:"flex space-x-[50px]"},g={class:"text-text font-subheading text-lg"},b={class:"flex h-full items-end"},w={class:"text-[#231f20] flex flex-col text-base font-[700] whitespace-nowrap font-subheading"},y={key:0,class:"flex flex-col justify-center"},k={class:"text-[#777] text-[1rem] mb-3"},A={class:"text-gray-600 text-[1rem]"},B=t("span",{class:"text-xs"},"грн.",-1),C={class:"text-[#ff4c3b] text-[1.5rem] font-[700] no-underline mt-[-14px]"},z={class:"text-red-600"},j=t("span",{class:"text-xs"}," грн.",-1),M={key:1,class:"flex flex-col justify-center"},N={class:"text-[1.5rem] font-[700] no-underline mt-[-14px]"},S=t("span",{class:"text-xs"}," грн.",-1),T=t("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"currentColor",class:"bi bi-plus-circle",viewBox:"0 0 16 16"},[t("path",{d:"M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"}),t("path",{d:"M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"})],-1),V=[T],P={__name:"AdditionalProductCard",props:["item","lang"],setup(e){const n=e,d=h();function r(){axios.post(route("api.v1.cart.add",{item_id:n.item.id,count:1,size:null,color:null})).then(()=>{d.commit("loadCart"),a({icon:"success",title:"Додано!",text:"Товар успішно додано до вашого замовлення"})}).catch(()=>{a({icon:"error",title:"Виникла помилка",text:"Зверніться до адміністратора"})})}return(l,q)=>(o(),c("div",x,[t("div",u,[t("picture",m,[t("source",{srcset:l.route("images.350",e.item.preview.webp_src),type:"image/webp"},null,8,_),t("img",{src:l.route("images.350",e.item.preview.src),class:"w-full h-full object-cover",alt:e.item.h1[e.lang]},null,8,f)])]),t("div",p,[t("div",v,[t("div",g,s(e.item.h1[e.lang]),1)]),t("div",b,[t("div",w,[e.item.discount_price?(o(),c("div",y,[t("del",k,[t("span",A,[i(s(e.item.price)+" ",1),B])]),t("ins",C,[t("span",z,[i(s(e.item.discount_price)+" ",1),j])])])):(o(),c("div",M,[t("ins",N,[i(s(e.item.discount_price)+" ",1),S])]))])]),t("div",{class:"block pl-[1.25rem] absolute right-5 top-16"},[t("div",{class:"plus-btn",onClick:r},V)])])]))}};export{P as default};