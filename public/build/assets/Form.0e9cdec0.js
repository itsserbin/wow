import{o as b}from"./app.2c2e52ca.js";import{p as f,j as v,q as l,s as c,F as r,E as y,H as n,u as V,v as x,N as s,A as i,D as C,x as N,y as S}from"./index.e4375aa7.js";import"./moment.9709ab41.js";import"./_plugin-vue_export-helper.cdc0426e.js";import"./lazyload.6866379a.js";import"./Logo.6d532cc3.js";const h={class:"grid grid-cols-2 md:grid-cols-4 gap-4 mb-5"},z={key:0},B={class:"block mt-5"},w={__name:"Form",props:["image"],setup(t){const u=f(()=>e=>a.value==="55"?route("images.55",e):a.value==="350"?route("images.350",e):a.value==="500"?route("images.500",e):route("images",e)),d=[{label:"55",key:"55"},{label:"350",key:"350"},{label:"500",key:"500"},{label:"O\u0440\u0438\u0433\u0456\u043D\u0430\u043B",key:null}],a=v("350");function p(e){a.value=e}return(e,m)=>{const g=s("button-component"),_=s("label-component"),k=s("input-component");return i(),l(r,null,[c("div",h,[(i(),l(r,null,y(d,o=>n(g,{type:"button",onClick:F=>p(o.key),active:o.key===a.value},{default:C(()=>[N(S(o.label),1)]),_:2},1032,["onClick","active"])),64))]),t.image?(i(),l("div",z,[n(b,{image:V(u)(t.image.src),"image-alt":t.image.alt},null,8,["image","image-alt"]),c("div",B,[n(_,{value:"Alt"}),n(k,{modelValue:t.image.alt,"onUpdate:modelValue":m[0]||(m[0]=o=>t.image.alt=o),type:"text"},null,8,["modelValue"])])])):x("",!0)],64)}}};export{w as default};
