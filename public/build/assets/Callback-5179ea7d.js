import{r as k,g as C,i as o,s as p,v as n,j as v,F as _,D as r,al as V,p as i,k as u,z as a,A as h,x as L,U as y}from"./app-da11968c.js";import{s as x}from"./swal-dd8503f8.js";const B=o("div",{class:"items-center bg-button rounded-[50%] cursor-pointer flex h-[50px] justify-center opacity-[0.9] w-[50px] hover:bg-accent transition-all duration-150"},[o("svg",{width:"36",height:"36",viewBox:"0 0 36 36",fill:"none",xmlns:"http://www.w3.org/2000/svg"},[o("path",{d:"M29.16 19.5C28.83 19.5 28.485 19.395 28.155 19.32C27.4868 19.1727 26.83 18.9772 26.19 18.735C25.4942 18.4818 24.7293 18.495 24.0425 18.7719C23.3557 19.0488 22.7957 19.5699 22.47 20.235L22.14 20.91C20.679 20.0973 19.3365 19.0878 18.15 17.91C16.9722 16.7235 15.9628 15.381 15.15 13.92L15.78 13.5C16.4451 13.1744 16.9662 12.6143 17.2431 11.9275C17.52 11.2408 17.5332 10.4759 17.28 9.77998C17.0419 9.13862 16.8464 8.48218 16.695 7.81499C16.62 7.48499 16.56 7.13999 16.515 6.79499C16.3329 5.73842 15.7795 4.7816 14.9545 4.09684C14.1295 3.41209 13.0871 3.0444 12.015 3.05999H7.51503C6.86858 3.05392 6.2284 3.18721 5.63809 3.45078C5.04778 3.71436 4.52119 4.10203 4.09417 4.58741C3.66716 5.07279 3.34973 5.64448 3.16351 6.26356C2.97729 6.88264 2.92665 7.53457 3.01503 8.17498C3.81414 14.4591 6.68407 20.2978 11.1715 24.7689C15.6589 29.2401 21.5081 32.0887 27.795 32.865H28.365C29.4712 32.8666 30.5391 32.4608 31.365 31.725C31.8396 31.3006 32.2187 30.7803 32.4772 30.1985C32.7358 29.6167 32.868 28.9866 32.865 28.35V23.85C32.8467 22.8081 32.4672 21.8048 31.7915 21.0115C31.1158 20.2182 30.1858 19.6839 29.16 19.5ZM29.91 28.5C29.9098 28.713 29.8641 28.9234 29.7762 29.1174C29.6883 29.3114 29.56 29.4844 29.4 29.625C29.2324 29.7697 29.0364 29.8778 28.8246 29.9424C28.6128 30.007 28.3899 30.0266 28.17 30C22.5524 29.2797 17.3344 26.7097 13.3391 22.6954C9.34382 18.6811 6.79865 13.451 6.10503 7.82999C6.08116 7.61026 6.10208 7.38798 6.16653 7.17657C6.23099 6.96516 6.33763 6.76902 6.48003 6.59999C6.62059 6.43998 6.79362 6.31175 6.9876 6.22381C7.18157 6.13588 7.39205 6.09026 7.60503 6.08999H12.105C12.4538 6.08222 12.7945 6.1963 13.0682 6.41259C13.342 6.62888 13.5318 6.93384 13.605 7.27499C13.665 7.68499 13.74 8.08998 13.83 8.48998C14.0033 9.2807 14.2339 10.0578 14.52 10.815L12.42 11.79C12.2405 11.8724 12.079 11.9894 11.9448 12.1344C11.8106 12.2794 11.7063 12.4494 11.638 12.6348C11.5697 12.8201 11.5387 13.0172 11.5468 13.2146C11.5549 13.412 11.6018 13.6058 11.685 13.785C13.8438 18.4091 17.5609 22.1262 22.185 24.285C22.5502 24.435 22.9598 24.435 23.325 24.285C23.5121 24.2181 23.684 24.1147 23.8308 23.9808C23.9776 23.8469 24.0963 23.6851 24.18 23.505L25.11 21.405C25.8855 21.6823 26.6769 21.9127 27.48 22.095C27.88 22.185 28.285 22.26 28.695 22.32C29.0362 22.3932 29.3411 22.583 29.5574 22.8568C29.7737 23.1306 29.8878 23.4712 29.88 23.82L29.91 28.5Z",fill:"white"})])],-1),M=[B],z={class:"grid grid-cols-1 gap-4"},F={class:"block"},N={class:"block"},U={class:"block"},q={__name:"Callback",setup(D){const e=k({show:!1,isLoading:!1,item:{name:null,phone:null,comment:null},errors:[]});function s(){e.value.show=!e.value.show}function f(){e.value.isLoading=!0,axios.post(route("api.v1.callback.create"),e.value.item).then(()=>{x({icon:"success",title:"Ваш запит надіслано!",text:"Наш оператор зателефонує Вам протягом 5 хвилин"}),e.value.item={name:null,phone:null,comment:null},e.value.isLoading=!1,s()}).catch(({response:d})=>{x({icon:"error",title:"Виникла помилка",text:"Перевірте корректність данних"}),e.value.errors=d.data,e.value.isLoading=!1})}return(d,l)=>{const c=r("label-component"),m=r("input-component"),g=r("input-error"),b=r("modal"),w=V("maska");return i(),C(_,null,[o("div",null,[o("div",{class:"bottom-[5%] block fixed right-[2%] z-10",onClick:s},M)]),e.value.show?(i(),p(b,{key:0,onCloseModal:s,size:"medium","submit-button-text":"Відправити","cancel-button-text":"Не потрібно",onSubmitForm:f,onClickCancel:s,"is-loading":e.value.isLoading},{title:n(()=>[u(" Замовити дзвінок ")]),content:n(()=>[o("div",z,[o("div",F,[a(c,{required:!0},{default:n(()=>[u("Ім`я")]),_:1}),a(m,{placeholder:"Введіть ваше ім'я",type:"text",modelValue:e.value.item.name,"onUpdate:modelValue":l[0]||(l[0]=t=>e.value.item.name=t)},null,8,["modelValue"])]),o("div",N,[a(c,{required:!0},{default:n(()=>[u("Номер телефону")]),_:1}),h(a(m,{placeholder:"+380",modelValue:e.value.item.phone,"onUpdate:modelValue":l[1]||(l[1]=t=>e.value.item.phone=t),type:"tel"},null,8,["modelValue"]),[[w,"+38 (0##) ###-##-##"]]),e.value.errors.phone?(i(!0),C(_,{key:0},L(e.value.errors.phone,t=>(i(),p(g,{message:t},null,8,["message"]))),256)):v("",!0)]),o("div",U,[a(c,null,{default:n(()=>[u("Коментар")]),_:1}),h(o("textarea",{class:"border-[0.5px] rounded-[10px] box-border font-[350] h-[100px] mt-[0.75rem] p-[1rem] resize-none w-[100%] outline-none border-red-600 focus:border-red-600 focus:ring-red-600",rows:"6","onUpdate:modelValue":l[2]||(l[2]=t=>e.value.item.comment=t)},null,512),[[y,e.value.item.comment]])])])]),_:1},8,["is-loading"])):v("",!0)],64)}}};export{q as default};
