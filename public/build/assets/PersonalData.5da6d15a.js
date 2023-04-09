import s from"./Label.9918c3e0.js";import d from"./Input.c1a6bdb4.js";import{_ as i}from"./InputError.2731f248.js";import{p as n,q as l,G as a,C as m,F as c,D as f,s as h,H as g,ae as k,z as o,B as V,v as u}from"./index.1726d409.js";const v={class:"bg-[#fff] border-[0.5px] rounded-[15px] shadow-lg box-border mb-[1.5rem] pt-[1.5rem] pr-[1rem] pb-[1.25rem] pl-[1rem]"},x=l("div",{class:"text-2xl font-heading font-[400]"},[l("h3",null,"\u041F\u0435\u0440\u0441\u043E\u043D\u0430\u043B\u044C\u043D\u0456 \u0434\u0430\u043D\u0456")],-1),b={class:"grid gap-4"},p={class:"block"},y=u("\u0406\u043C`\u044F"),B={class:"block"},q=u("\u041F\u0440\u0456\u0437\u0432\u0438\u0449\u0435"),D={class:"block"},N=u("\u041F\u043E \u0431\u0430\u0442\u044C\u043A\u043E\u0432\u0456"),U={class:"block"},w=u("\u041D\u043E\u043C\u0435\u0440 \u0442\u0435\u043B\u0435\u0444\u043E\u043D\u0443"),G={__name:"PersonalData",props:["order","errors"],setup(e){return(C,r)=>{const _=k("maska");return o(),n("div",v,[x,l("div",b,[l("div",p,[a(s,{required:!0},{default:m(()=>[y]),_:1}),a(d,{placeholder:"\u0412\u0432\u0435\u0434\u0456\u0442\u044C \u0432\u0430\u0448\u0435 \u0456\u043C'\u044F",type:"text",modelValue:e.order.name,"onUpdate:modelValue":r[0]||(r[0]=t=>e.order.name=t)},null,8,["modelValue"]),e.errors.name?(o(!0),n(c,{key:0},f(e.errors.name,t=>(o(),V(i,{message:t},null,8,["message"]))),256)):h("",!0)]),l("div",B,[a(s,{required:!0},{default:m(()=>[q]),_:1}),a(d,{placeholder:"\u0412\u0432\u0435\u0434\u0456\u0442\u044C \u043F\u0440\u0456\u0437\u0432\u0438\u0449\u0435",type:"text",modelValue:e.order.last_name,"onUpdate:modelValue":r[1]||(r[1]=t=>e.order.last_name=t)},null,8,["modelValue"]),e.errors.last_name?(o(!0),n(c,{key:0},f(e.errors.last_name,t=>(o(),V(i,{message:t},null,8,["message"]))),256)):h("",!0)]),l("div",D,[a(s,null,{default:m(()=>[N]),_:1}),a(d,{placeholder:"\u0412\u0432\u0435\u0434\u0456\u0442\u044C \u043F\u043E \u0431\u0430\u0442\u044C\u043A\u043E\u0432\u0456",type:"text",modelValue:e.order.middle_name,"onUpdate:modelValue":r[2]||(r[2]=t=>e.order.middle_name=t)},null,8,["modelValue"])]),l("div",U,[a(s,{required:!0},{default:m(()=>[w]),_:1}),g(a(d,{placeholder:"+38 (0",type:"tel",modelValue:e.order.phone,"onUpdate:modelValue":r[3]||(r[3]=t=>e.order.phone=t)},null,8,["modelValue"]),[[_,"+38 (0##) ###-##-##"]]),e.errors.phone?(o(!0),n(c,{key:0},f(e.errors.phone,t=>(o(),V(i,{message:t},null,8,["message"]))),256)):h("",!0)])])])}}};export{G as default};