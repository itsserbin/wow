import{h as i}from"./app-23639435.js";import{g as s,F as c,x as l,p as a,s as n}from"./app-da11968c.js";import"./vue-i18n.esm-bundler-7f92347f.js";import"./moment-fbc5633a.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./Logo-9fe22fca.js";const d={class:"grid grid-cols-2 md:grid-cols-6 gap-4 mt-3"},h={__name:"List",props:["images"],emits:["fetch","clickImage","destroyImage"],setup(r,{emit:o}){const m=t=>{o("destroyImage",t)};return(t,g)=>(a(),s("div",d,[(a(!0),s(c,null,l(r.images.data,e=>(a(),n(i,{class:"m-1",image:e,id:e.id,alt:e.alt,onClickImage:p=>t.$emit("clickImage",e),destroyIcon:!0,onDestroyImage:m},null,8,["image","id","alt","onClickImage"]))),256))]))}};export{h as default};
