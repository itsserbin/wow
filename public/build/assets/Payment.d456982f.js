import{i as n,j as e,z as a,aa as s,o as d}from"./vendor.2c8aab53.js";import"./__commonjsHelpers__.4516dc8a.js";const l={class:"bg-[#fff] border-[0.5px] border-gray-300 rounded-[12px] shadow-lg box-border mb-[1.5rem] pt-[1.25rem] pr-[1rem] pb-[1.25rem] pl-[1rem]"},m=e("div",{class:"text-2xl font-heading font-[400]"},[e("h3",null,"\u041E\u043F\u043B\u0430\u0442\u0430")],-1),i={class:"grid gap-4 font-subheading"},c={class:"text-[1.075rem] text-[#686868] font-[500] w-[100%] flex items-center"},p=e("p",{class:"a-text"},"\u041D\u0430\u043A\u043B\u0430\u0434\u0435\u043D\u0438\u0439 \u043F\u043B\u0430\u0442\u0456\u0436",-1),u={class:"text-[1.075rem] text-[#686868] font-[500] w-[100%] flex items-center"},f=e("p",{class:"a-text"},"\u041C\u0456\u043D\u0456\u043C\u0430\u043B\u044C\u043D\u0430 \u043F\u0435\u0440\u0435\u0434\u043E\u043F\u043B\u0430\u0442\u0430 (10%)",-1),x={class:"text-[1.075rem] text-[#686868] font-[500] w-[100%] flex items-center"},_=e("p",{class:"a-text"},"\u041F\u043E\u0432\u043D\u0430 \u043F\u0435\u0440\u0435\u0434\u043E\u043F\u043B\u0430\u0442\u0430",-1),g={__name:"Payment",props:["order"],setup(t){return(y,o)=>(d(),n("div",l,[m,e("div",i,[e("label",c,[a(e("input",{type:"radio",name:"payment",value:"cash_on_delivery","onUpdate:modelValue":o[0]||(o[0]=r=>t.order.payment_method=r),class:"mr-2 focus:border-red-600 focus:ring-red-600"},null,512),[[s,t.order.payment_method]]),p]),e("label",u,[a(e("input",{type:"radio",name:"payment",value:"minimum_prepayment","onUpdate:modelValue":o[1]||(o[1]=r=>t.order.payment_method=r),class:"mr-2 focus:border-red-600 focus:ring-red-600"},null,512),[[s,t.order.payment_method]]),f]),e("label",x,[a(e("input",{type:"radio",name:"payment",value:"full_prepayment","onUpdate:modelValue":o[2]||(o[2]=r=>t.order.payment_method=r),class:"mr-2 focus:border-red-600 focus:ring-red-600"},null,512),[[s,t.order.payment_method]]),_])])]))}};export{g as default};
