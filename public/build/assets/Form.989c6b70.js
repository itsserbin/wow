import{f as V,o as v,g as b,i as n,u,t as g,x as o,w as c,J as k,F as h,v as $,B as y,k as _}from"./vendor.693a237b.js";import{_ as i,a as d,g as r,b as f}from"./app.c998355c.js";import U from"./Logo.f9e00f38.js";import"./__commonjsHelpers__.488ed5c2.js";import"./vue.m.8e70aa70.js";import"./bootstrap.8b9397d4.js";import"./_plugin-vue_export-helper.cdc0426e.js";import"./lazyload.6866379a.js";import"./Logo.c403545e.js";const w={class:"flex items-center pl-4 rounded border border-gray-200 dark:border-gray-700"},x=["name","checked","value"],B={class:"py-4 ml-2 w-full text-sm font-medium text-gray-900 dark:text-gray-300"},p={__name:"RadioBordered",props:["label","value","name","modelValue"],emits:["update:modelValue"],setup(e,{emit:s}){const a=e,l=()=>s("update:modelValue",a.value),m=V(()=>a.modelValue===a.value);return(t,ie)=>(v(),b("div",w,[n("input",{name:e.name,checked:u(m),onInput:l,value:e.value,type:"radio",class:"w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"},null,40,x),n("label",B,g(e.label),1)]))}},F={class:"block mb-5"},C={class:"block mb-5"},N={class:"grid grid-cols-2 gap-4"},S={class:"block mb-5"},j={class:"grid grid-cols-2 gap-4"},D={class:"grid grid-cols-2 gap-4 mb-5"},E={class:"block"},I={class:"block"},J={class:"grid grid-cols-2 gap-4 mb-5"},M={class:"block"},R={class:"block"},T={class:"grid grid-cols-2 gap-4 mb-5"},q={class:"block"},z={class:"block"},A={class:"block mb-5"},G={class:"block mb-5"},H={class:"block mb-5"},K={class:"block mb-5"},L={class:"block mb-5"},O={class:"block mb-5"},P={class:"block mb-5"},Q={class:"block mb-5"},W={class:"block mb-5"},X={class:"grid grid-cols-1 md:grid-cols-2 gap-4 mb-5"},Y={class:"block"},Z={class:"block"},ee={class:"grid grid-cols-1 md:grid-cols-2 gap-4 mb-5"},le={class:"block"},te={class:"block"},oe={class:"grid grid-cols-1 md:grid-cols-2 gap-4 mb-5"},ae={class:"block"},ne={class:"block"},Ve={__name:"Form",props:["options"],emits:["submitForm"],setup(e){const s=$("$tiny");return(a,l)=>{const m=y("editor");return v(),b(h,null,[o(U),n("form",{onSubmit:l[26]||(l[26]=k(t=>a.$emit("submitForm"),["prevent"]))},[n("div",F,[o(i,{value:a.$t("options.brand")},null,8,["value"]),o(d,{modelValue:e.options.brand,"onUpdate:modelValue":l[0]||(l[0]=t=>e.options.brand=t),type:"text",placeholder:a.$t("options.enter_brand")},null,8,["modelValue","placeholder"])]),n("div",C,[o(i,{value:a.$t("options.callback_status")},null,8,["value"]),n("div",N,[o(p,{name:"callback_status",value:"on",label:a.$t("options.callback_status_on"),modelValue:e.options.callback_status,"onUpdate:modelValue":l[1]||(l[1]=t=>e.options.callback_status=t)},null,8,["label","modelValue"]),o(p,{name:"callback_status",value:"off",label:a.$t("options.callback_status_off"),modelValue:e.options.callback_status,"onUpdate:modelValue":l[2]||(l[2]=t=>e.options.callback_status=t)},null,8,["label","modelValue"])])]),n("div",S,[o(i,{value:a.$t("options.consultation_status")},null,8,["value"]),n("div",j,[o(p,{name:"consultation_status",value:"on",label:a.$t("options.consultation_status_on"),modelValue:e.options.consultation_status,"onUpdate:modelValue":l[3]||(l[3]=t=>e.options.consultation_status=t)},null,8,["label","modelValue"]),o(p,{name:"consultation_status",value:"off",label:a.$t("options.consultation_status_off"),modelValue:e.options.consultation_status,"onUpdate:modelValue":l[4]||(l[4]=t=>e.options.consultation_status=t)},null,8,["label","modelValue"])])]),n("div",D,[n("div",E,[o(i,{value:a.$t("options.heading_ua")},null,8,["value"]),o(d,{modelValue:e.options.text_heading_home_page_ua,"onUpdate:modelValue":l[5]||(l[5]=t=>e.options.text_heading_home_page_ua=t),type:"text",placeholder:a.$t("options.enter_heading_ua")},null,8,["modelValue","placeholder"])]),n("div",I,[o(i,{value:a.$t("options.heading_ru")},null,8,["value"]),o(d,{modelValue:e.options.text_heading_home_page_ru,"onUpdate:modelValue":l[6]||(l[6]=t=>e.options.text_heading_home_page_ru=t),type:"text",placeholder:a.$t("options.enter_heading_ru")},null,8,["modelValue","placeholder"])])]),n("div",J,[n("div",M,[o(i,{value:a.$t("options.meta_title_ua")},null,8,["value"]),o(d,{modelValue:e.options.meta_title_ua,"onUpdate:modelValue":l[7]||(l[7]=t=>e.options.meta_title_ua=t),type:"text",placeholder:a.$t("options.enter_meta_title_ua")},null,8,["modelValue","placeholder"])]),n("div",R,[o(i,{value:a.$t("options.meta_title_ru")},null,8,["value"]),o(d,{modelValue:e.options.meta_title_ru,"onUpdate:modelValue":l[8]||(l[8]=t=>e.options.meta_title_ru=t),type:"text",placeholder:a.$t("options.enter_meta_title_ru")},null,8,["modelValue","placeholder"])])]),n("div",T,[n("div",q,[o(i,{value:a.$t("options.meta_description_ua")},null,8,["value"]),o(r,{modelValue:e.options.meta_description_ua,"onUpdate:modelValue":l[9]||(l[9]=t=>e.options.meta_description_ua=t),placeholder:a.$t("options.enter_meta_description_ua")},null,8,["modelValue","placeholder"])]),n("div",z,[o(i,{value:a.$t("options.meta_description_ru")},null,8,["value"]),o(r,{modelValue:e.options.meta_description_ru,"onUpdate:modelValue":l[10]||(l[10]=t=>e.options.meta_description_ru=t),placeholder:a.$t("options.enter_meta_description_ru")},null,8,["modelValue","placeholder"])])]),n("div",A,[o(i,{value:a.$t("options.schedule")},null,8,["value"]),o(r,{modelValue:e.options.schedule,"onUpdate:modelValue":l[11]||(l[11]=t=>e.options.schedule=t),rows:"4",placeholder:a.$t("options.enter_schedule")},null,8,["modelValue","placeholder"])]),n("div",G,[o(i,{value:a.$t("options.phone")},null,8,["value"]),o(d,{modelValue:e.options.phone,"onUpdate:modelValue":l[12]||(l[12]=t=>e.options.phone=t),type:"text",placeholder:a.$t("options.enter_phone")},null,8,["modelValue","placeholder"])]),n("div",H,[o(i,{value:a.$t("options.email")},null,8,["value"]),o(d,{modelValue:e.options.email,"onUpdate:modelValue":l[13]||(l[13]=t=>e.options.email=t),type:"text",placeholder:a.$t("options.enter_email")},null,8,["modelValue","placeholder"])]),n("div",K,[o(i,{value:a.$t("options.facebook")},null,8,["value"]),o(d,{modelValue:e.options.facebook,"onUpdate:modelValue":l[14]||(l[14]=t=>e.options.facebook=t),type:"text",placeholder:a.$t("options.enter_facebook")},null,8,["modelValue","placeholder"])]),n("div",L,[o(i,{value:a.$t("options.instagram")},null,8,["value"]),o(d,{modelValue:e.options.instagram,"onUpdate:modelValue":l[15]||(l[15]=t=>e.options.instagram=t),type:"text",placeholder:a.$t("options.enter_instagram")},null,8,["modelValue","placeholder"])]),n("div",O,[o(i,{value:a.$t("options.telegram")},null,8,["value"]),o(d,{modelValue:e.options.telegram,"onUpdate:modelValue":l[16]||(l[16]=t=>e.options.telegram=t),type:"text",placeholder:a.$t("options.enter_telegram")},null,8,["modelValue","placeholder"])]),n("div",P,[o(i,{value:a.$t("options.viber")},null,8,["value"]),o(d,{modelValue:e.options.viber,"onUpdate:modelValue":l[17]||(l[17]=t=>e.options.viber=t),type:"text",placeholder:a.$t("options.enter_viber")},null,8,["modelValue","placeholder"])]),n("div",Q,[o(i,{value:a.$t("options.whatsapp")},null,8,["value"]),o(d,{modelValue:e.options.whatsapp,"onUpdate:modelValue":l[18]||(l[18]=t=>e.options.whatsapp=t),type:"text",placeholder:a.$t("options.enter_whatsapp")},null,8,["modelValue","placeholder"])]),n("div",W,[o(i,{value:a.$t("options.fb_messenger")},null,8,["value"]),o(d,{modelValue:e.options.fb_messenger,"onUpdate:modelValue":l[19]||(l[19]=t=>e.options.fb_messenger=t),type:"text",placeholder:a.$t("options.enter_fb_messenger")},null,8,["modelValue","placeholder"])]),n("div",X,[n("div",Y,[o(i,{value:a.$t("options.text_delivery_and_payment_ua")},null,8,["value"]),o(m,{"api-key":u(s).api,modelValue:e.options.text_delivery_and_payment_ua,"onUpdate:modelValue":l[20]||(l[20]=t=>e.options.text_delivery_and_payment_ua=t),init:u(s).settings},null,8,["api-key","modelValue","init"])]),n("div",Z,[o(i,{value:a.$t("options.text_delivery_and_payment_ru")},null,8,["value"]),o(m,{"api-key":u(s).api,modelValue:e.options.text_delivery_and_payment_ru,"onUpdate:modelValue":l[21]||(l[21]=t=>e.options.text_delivery_and_payment_ru=t),init:u(s).settings},null,8,["api-key","modelValue","init"])])]),n("div",ee,[n("div",le,[o(i,{value:a.$t("options.text_return_and_exchange_ua")},null,8,["value"]),o(m,{"api-key":u(s).api,modelValue:e.options.text_return_and_exchange_ua,"onUpdate:modelValue":l[22]||(l[22]=t=>e.options.text_return_and_exchange_ua=t),init:u(s).settings},null,8,["api-key","modelValue","init"])]),n("div",te,[o(i,{value:a.$t("options.text_return_and_exchange_ru")},null,8,["value"]),o(m,{"api-key":u(s).api,modelValue:e.options.text_return_and_exchange_ru,"onUpdate:modelValue":l[23]||(l[23]=t=>e.options.text_return_and_exchange_ru=t),init:u(s).settings},null,8,["api-key","modelValue","init"])])]),n("div",oe,[n("div",ae,[o(i,{value:a.$t("options.text_home_page_ua")},null,8,["value"]),o(m,{"api-key":u(s).api,modelValue:e.options.text_home_page_ua,"onUpdate:modelValue":l[24]||(l[24]=t=>e.options.text_home_page_ua=t),init:u(s).settings},null,8,["api-key","modelValue","init"])]),n("div",ne,[o(i,{value:a.$t("options.text_home_page_ru")},null,8,["value"]),o(m,{"api-key":u(s).api,modelValue:e.options.text_home_page_ru,"onUpdate:modelValue":l[25]||(l[25]=t=>e.options.text_home_page_ru=t),init:u(s).settings},null,8,["api-key","modelValue","init"])])]),o(f,{type:"submit"},{default:c(()=>[_(g(a.$t("save")),1)]),_:1})],32)],64)}}};export{Ve as default};
