import{i as k,o as g,p as i,q as a,G as o,H as v,J as f,s as y,F as x,M as p,z as r}from"./index.1726d409.js";import{a as d,_ as m}from"./app.2d605236.js";import"./moment.9709ab41.js";import"./_plugin-vue_export-helper.cdc0426e.js";import"./lazyload.6866379a.js";import"./Logo.9264c4eb.js";const $={class:"block mb-5"},U={class:"block mb-5"},C={class:"block mb-5"},z={class:"block mb-5"},B={class:"block mb-5"},F={class:"flex items-center mb-4"},M=a("label",{for:"resale",class:"ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"},"\u0414\u043E\u0434\u0430\u0442\u043A\u043E\u0432\u0430 \u043F\u0440\u043E\u0434\u0430\u0436\u0430",-1),N={key:0,class:"block mb-5"},G={__name:"Form",props:["item"],setup(l){const n=k([]);g(()=>{axios.get(route("api.products.list")).then(({data:s})=>n.value=s.result).catch(s=>console.log(s))});const c=({h1:s,id:e,vendor_code:u})=>{const t=s?s.ua?s.ua:s.ru:"",b=t&&e?" - ":"",V=u?`${u}/`:"";return`${t}${b}${V}${e}`};return(s,e)=>{const u=p("multiselect");return r(),i(x,null,[a("div",$,[o(m,{value:"\u0422\u043E\u0432\u0430\u0440"}),o(u,{options:n.value,modelValue:l.item.product_id,"onUpdate:modelValue":e[0]||(e[0]=t=>l.item.product_id=t),"custom-label":c,class:"mb-5","track-by":"id","close-on-select":!0,searchable:!0},null,8,["options","modelValue"])]),a("div",U,[o(m,{value:"\u0420\u043E\u0437\u043C\u0456\u0440"}),o(d,{modelValue:l.item.size,"onUpdate:modelValue":e[1]||(e[1]=t=>l.item.size=t),type:"text"},null,8,["modelValue"])]),a("div",C,[o(m,{value:"\u041A\u043E\u043B\u0456\u0440"}),o(d,{modelValue:l.item.color,"onUpdate:modelValue":e[2]||(e[2]=t=>l.item.color=t),type:"text"},null,8,["modelValue"])]),a("div",z,[o(m,{value:"\u041A\u0456\u043B\u044C\u043A\u0456\u0441\u0442\u044C"}),o(d,{modelValue:l.item.count,"onUpdate:modelValue":e[3]||(e[3]=t=>l.item.count=t),type:"number"},null,8,["modelValue"])]),a("div",B,[a("div",F,[v(a("input",{id:"resale","onUpdate:modelValue":e[4]||(e[4]=t=>l.item.resale=t),type:"checkbox",class:"w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"},null,512),[[f,l.item.resale]]),M])]),l.item.resale?(r(),i("div",N,[o(m,{value:"\u0421\u0443\u043C\u0430 \u0437\u043D\u0438\u0436\u043A\u0438 (\u0433\u0440\u043D.)"}),o(d,{modelValue:l.item.discount,"onUpdate:modelValue":e[5]||(e[5]=t=>l.item.discount=t),type:"number"},null,8,["modelValue"])])):y("",!0)],64)}}};export{G as default};
