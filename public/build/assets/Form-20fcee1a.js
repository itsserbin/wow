import{z as V,l as v,m as b,p as n,x as s,v as g,N as c,n as o,y as k,J as h,F as $,w as y}from"./index-a01126e2.js";import{_ as i}from"./Label-20131f4c.js";import{_ as u}from"./Input-39294dfa.js";import{_ as p}from"./Textarea-cb91500a.js";import{_}from"./Button-dd1aed97.js";import f from"./Logo-dda4a5dd.js";import{E as m}from"./Editor-fb472374.js";import"./swal-03cac797.js";const U={class:"flex items-center pl-4 rounded border border-gray-200 dark:border-gray-700"},w=["name","checked","value"],x={class:"py-4 ml-2 w-full text-sm font-medium text-gray-900 dark:text-gray-300"},r={__name:"RadioBordered",props:["label","value","name","modelValue"],emits:["update:modelValue"],setup(e,{emit:d}){const a=e,l=()=>d("update:modelValue",a.value),t=V(()=>a.modelValue===a.value);return(ne,ie)=>(v(),b("div",U,[n("input",{name:e.name,checked:s(t),onInput:l,value:e.value,type:"radio",class:"w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"},null,40,w),n("label",x,g(e.label),1)]))}},F={class:"block mb-5"},B={class:"block mb-5"},N={class:"grid grid-cols-2 gap-4"},E={class:"block mb-5"},C={class:"grid grid-cols-2 gap-4"},S={class:"grid grid-cols-2 gap-4 mb-5"},j={class:"block"},z={class:"block"},D={class:"grid grid-cols-2 gap-4 mb-5"},I={class:"block"},J={class:"block"},M={class:"grid grid-cols-2 gap-4 mb-5"},R={class:"block"},T={class:"block"},q={class:"block mb-5"},A={class:"block mb-5"},G={class:"block mb-5"},H={class:"block mb-5"},K={class:"block mb-5"},L={class:"block mb-5"},O={class:"block mb-5"},P={class:"block mb-5"},Q={class:"block mb-5"},W={class:"grid grid-cols-1 md:grid-cols-2 gap-4 mb-5"},X={class:"block"},Y={class:"block"},Z={class:"grid grid-cols-1 md:grid-cols-2 gap-4 mb-5"},ee={class:"block"},le={class:"block"},te={class:"grid grid-cols-1 md:grid-cols-2 gap-4 mb-5"},oe={class:"block"},ae={class:"block"},ge={__name:"Form",props:["options"],emits:["submitForm"],setup(e){const d=c("$tiny");return(a,l)=>(v(),b($,null,[o(f),n("form",{onSubmit:l[26]||(l[26]=h(t=>a.$emit("submitForm"),["prevent"]))},[n("div",F,[o(i,{value:a.$t("options.brand")},null,8,["value"]),o(u,{modelValue:e.options.brand,"onUpdate:modelValue":l[0]||(l[0]=t=>e.options.brand=t),type:"text",placeholder:a.$t("options.enter_brand")},null,8,["modelValue","placeholder"])]),n("div",B,[o(i,{value:a.$t("options.callback_status")},null,8,["value"]),n("div",N,[o(r,{name:"callback_status",value:"on",label:a.$t("options.callback_status_on"),modelValue:e.options.callback_status,"onUpdate:modelValue":l[1]||(l[1]=t=>e.options.callback_status=t)},null,8,["label","modelValue"]),o(r,{name:"callback_status",value:"off",label:a.$t("options.callback_status_off"),modelValue:e.options.callback_status,"onUpdate:modelValue":l[2]||(l[2]=t=>e.options.callback_status=t)},null,8,["label","modelValue"])])]),n("div",E,[o(i,{value:a.$t("options.consultation_status")},null,8,["value"]),n("div",C,[o(r,{name:"consultation_status",value:"on",label:a.$t("options.consultation_status_on"),modelValue:e.options.consultation_status,"onUpdate:modelValue":l[3]||(l[3]=t=>e.options.consultation_status=t)},null,8,["label","modelValue"]),o(r,{name:"consultation_status",value:"off",label:a.$t("options.consultation_status_off"),modelValue:e.options.consultation_status,"onUpdate:modelValue":l[4]||(l[4]=t=>e.options.consultation_status=t)},null,8,["label","modelValue"])])]),n("div",S,[n("div",j,[o(i,{value:a.$t("options.heading_ua")},null,8,["value"]),o(u,{modelValue:e.options.text_heading_home_page_ua,"onUpdate:modelValue":l[5]||(l[5]=t=>e.options.text_heading_home_page_ua=t),type:"text",placeholder:a.$t("options.enter_heading_ua")},null,8,["modelValue","placeholder"])]),n("div",z,[o(i,{value:a.$t("options.heading_ru")},null,8,["value"]),o(u,{modelValue:e.options.text_heading_home_page_ru,"onUpdate:modelValue":l[6]||(l[6]=t=>e.options.text_heading_home_page_ru=t),type:"text",placeholder:a.$t("options.enter_heading_ru")},null,8,["modelValue","placeholder"])])]),n("div",D,[n("div",I,[o(i,{value:a.$t("options.meta_title_ua")},null,8,["value"]),o(u,{modelValue:e.options.meta_title_ua,"onUpdate:modelValue":l[7]||(l[7]=t=>e.options.meta_title_ua=t),type:"text",placeholder:a.$t("options.enter_meta_title_ua")},null,8,["modelValue","placeholder"])]),n("div",J,[o(i,{value:a.$t("options.meta_title_ru")},null,8,["value"]),o(u,{modelValue:e.options.meta_title_ru,"onUpdate:modelValue":l[8]||(l[8]=t=>e.options.meta_title_ru=t),type:"text",placeholder:a.$t("options.enter_meta_title_ru")},null,8,["modelValue","placeholder"])])]),n("div",M,[n("div",R,[o(i,{value:a.$t("options.meta_description_ua")},null,8,["value"]),o(p,{modelValue:e.options.meta_description_ua,"onUpdate:modelValue":l[9]||(l[9]=t=>e.options.meta_description_ua=t),placeholder:a.$t("options.enter_meta_description_ua")},null,8,["modelValue","placeholder"])]),n("div",T,[o(i,{value:a.$t("options.meta_description_ru")},null,8,["value"]),o(p,{modelValue:e.options.meta_description_ru,"onUpdate:modelValue":l[10]||(l[10]=t=>e.options.meta_description_ru=t),placeholder:a.$t("options.enter_meta_description_ru")},null,8,["modelValue","placeholder"])])]),n("div",q,[o(i,{value:a.$t("options.schedule")},null,8,["value"]),o(p,{modelValue:e.options.schedule,"onUpdate:modelValue":l[11]||(l[11]=t=>e.options.schedule=t),rows:"4",placeholder:a.$t("options.enter_schedule")},null,8,["modelValue","placeholder"])]),n("div",A,[o(i,{value:a.$t("options.phone")},null,8,["value"]),o(u,{modelValue:e.options.phone,"onUpdate:modelValue":l[12]||(l[12]=t=>e.options.phone=t),type:"text",placeholder:a.$t("options.enter_phone")},null,8,["modelValue","placeholder"])]),n("div",G,[o(i,{value:a.$t("options.email")},null,8,["value"]),o(u,{modelValue:e.options.email,"onUpdate:modelValue":l[13]||(l[13]=t=>e.options.email=t),type:"text",placeholder:a.$t("options.enter_email")},null,8,["modelValue","placeholder"])]),n("div",H,[o(i,{value:a.$t("options.facebook")},null,8,["value"]),o(u,{modelValue:e.options.facebook,"onUpdate:modelValue":l[14]||(l[14]=t=>e.options.facebook=t),type:"text",placeholder:a.$t("options.enter_facebook")},null,8,["modelValue","placeholder"])]),n("div",K,[o(i,{value:a.$t("options.instagram")},null,8,["value"]),o(u,{modelValue:e.options.instagram,"onUpdate:modelValue":l[15]||(l[15]=t=>e.options.instagram=t),type:"text",placeholder:a.$t("options.enter_instagram")},null,8,["modelValue","placeholder"])]),n("div",L,[o(i,{value:a.$t("options.telegram")},null,8,["value"]),o(u,{modelValue:e.options.telegram,"onUpdate:modelValue":l[16]||(l[16]=t=>e.options.telegram=t),type:"text",placeholder:a.$t("options.enter_telegram")},null,8,["modelValue","placeholder"])]),n("div",O,[o(i,{value:a.$t("options.viber")},null,8,["value"]),o(u,{modelValue:e.options.viber,"onUpdate:modelValue":l[17]||(l[17]=t=>e.options.viber=t),type:"text",placeholder:a.$t("options.enter_viber")},null,8,["modelValue","placeholder"])]),n("div",P,[o(i,{value:a.$t("options.whatsapp")},null,8,["value"]),o(u,{modelValue:e.options.whatsapp,"onUpdate:modelValue":l[18]||(l[18]=t=>e.options.whatsapp=t),type:"text",placeholder:a.$t("options.enter_whatsapp")},null,8,["modelValue","placeholder"])]),n("div",Q,[o(i,{value:a.$t("options.fb_messenger")},null,8,["value"]),o(u,{modelValue:e.options.fb_messenger,"onUpdate:modelValue":l[19]||(l[19]=t=>e.options.fb_messenger=t),type:"text",placeholder:a.$t("options.enter_fb_messenger")},null,8,["modelValue","placeholder"])]),n("div",W,[n("div",X,[o(i,{value:a.$t("options.text_delivery_and_payment_ua")},null,8,["value"]),o(s(m),{"api-key":s(d).api,modelValue:e.options.text_delivery_and_payment_ua,"onUpdate:modelValue":l[20]||(l[20]=t=>e.options.text_delivery_and_payment_ua=t),init:s(d).settings},null,8,["api-key","modelValue","init"])]),n("div",Y,[o(i,{value:a.$t("options.text_delivery_and_payment_ru")},null,8,["value"]),o(s(m),{"api-key":s(d).api,modelValue:e.options.text_delivery_and_payment_ru,"onUpdate:modelValue":l[21]||(l[21]=t=>e.options.text_delivery_and_payment_ru=t),init:s(d).settings},null,8,["api-key","modelValue","init"])])]),n("div",Z,[n("div",ee,[o(i,{value:a.$t("options.text_return_and_exchange_ua")},null,8,["value"]),o(s(m),{"api-key":s(d).api,modelValue:e.options.text_return_and_exchange_ua,"onUpdate:modelValue":l[22]||(l[22]=t=>e.options.text_return_and_exchange_ua=t),init:s(d).settings},null,8,["api-key","modelValue","init"])]),n("div",le,[o(i,{value:a.$t("options.text_return_and_exchange_ru")},null,8,["value"]),o(s(m),{"api-key":s(d).api,modelValue:e.options.text_return_and_exchange_ru,"onUpdate:modelValue":l[23]||(l[23]=t=>e.options.text_return_and_exchange_ru=t),init:s(d).settings},null,8,["api-key","modelValue","init"])])]),n("div",te,[n("div",oe,[o(i,{value:a.$t("options.text_home_page_ua")},null,8,["value"]),o(s(m),{"api-key":s(d).api,modelValue:e.options.text_home_page_ua,"onUpdate:modelValue":l[24]||(l[24]=t=>e.options.text_home_page_ua=t),init:s(d).settings},null,8,["api-key","modelValue","init"])]),n("div",ae,[o(i,{value:a.$t("options.text_home_page_ru")},null,8,["value"]),o(s(m),{"api-key":s(d).api,modelValue:e.options.text_home_page_ru,"onUpdate:modelValue":l[25]||(l[25]=t=>e.options.text_home_page_ru=t),init:s(d).settings},null,8,["api-key","modelValue","init"])])]),o(_,{type:"submit"},{default:k(()=>[y(g(a.$t("save")),1)]),_:1})],32)],64))}};export{ge as default};
