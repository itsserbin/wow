import{a as r,b as g,h as x,_ as m}from"./app.2c2e52ca.js";import{j as V,q as n,H as s,s as e,C as L,v as k,F as C,E as w,D as b,G as $,A as i,x as y}from"./index.e4375aa7.js";import"./moment.9709ab41.js";import"./_plugin-vue_export-helper.cdc0426e.js";import"./lazyload.6866379a.js";import"./Logo.6d532cc3.js";const B={class:"flex flex-col"},N={class:"grid grid-cols-1 gap-4"},j={class:"block"},z={class:"block"},F={class:"grid gap-4"},H={class:"flex"},M=["onClick"],U=e("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"currentColor",class:"bi bi-dash-square",viewBox:"0 0 16 16"},[e("path",{d:"M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z"}),e("path",{d:"M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8z"})],-1),q=[U],A={class:"text-center"},E=y("\u0414\u043E\u0434\u0430\u0442\u0438 \u043E\u043F\u0446\u0456\u044E"),O={__name:"Form",props:["item"],setup(t){const c=t,v=$("$defaultLang"),a=V({activeLang:v});function h(l){a.value.activeLang=l}function _(){c.item.values.push({title:{ua:null,ru:null}})}function p(l){c.item.values.splice(l,1)}return(l,d)=>(i(),n("form",B,[s(x,{onClickLang:h}),e("div",N,[e("div",j,[s(m,{value:"\u041D\u0430\u0437\u0432\u0430"}),s(r,{modelValue:t.item.title[a.value.activeLang],"onUpdate:modelValue":d[0]||(d[0]=o=>t.item.title[a.value.activeLang]=o),type:"text",placeholder:"\u0412\u043A\u0430\u0436\u0456\u0442\u044C \u043D\u0430\u0437\u0432\u0443 \u0445\u0430\u0440\u0430\u043A\u0442\u0435\u0440\u0438\u0441\u0442\u0438\u043A\u0438"},null,8,["modelValue"])]),e("div",z,[t.item.values.length?(i(),L(m,{key:0,value:"\u041E\u043F\u0446\u0456\u0457"})):k("",!0),e("div",F,[(i(!0),n(C,null,w(t.item.values,(o,f)=>(i(),n("div",H,[s(r,{modelValue:o.title[a.value.activeLang],"onUpdate:modelValue":u=>o.title[a.value.activeLang]=u,type:"text",placeholder:"\u0412\u043A\u0430\u0436\u0456\u0442\u044C \u0437\u043D\u0430\u0447\u0435\u043D\u043D\u044F \u0445\u0430\u0440\u0430\u043A\u0442\u0435\u0440\u0438\u0441\u0442\u0438\u043A\u0438"},null,8,["modelValue","onUpdate:modelValue"]),e("div",{class:"flex items-center justify-center pl-3 cursor-pointer",onClick:u=>p(f)},q,8,M)]))),256)),e("div",A,[s(g,{type:"button",onClick:_},{default:b(()=>[E]),_:1})])])])])]))}};export{O as default};