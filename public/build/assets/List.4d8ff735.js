import{e as m}from"./app.ba48aa93.js";import{L as s,F as i,Z as n,S as a,a0 as l}from"./___vite-browser-external_commonjs-proxy.6a4e71ef.js";const d={class:"grid grid-cols-2 md:grid-cols-6 gap-4 mt-3"},p={__name:"List",props:["images"],emits:["fetch","clickImage","destroyImage"],setup(r,{emit:o}){function c(t){o("destroyImage",t)}return(t,g)=>(a(),s("div",d,[(a(!0),s(i,null,n(r.images.data,e=>(a(),l(m,{class:"m-1",image:e,id:e.id,alt:e.alt,onClickImage:u=>t.$emit("clickImage",e),destroyIcon:!0,onDestroyImage:c},null,8,["image","id","alt","onClickImage"]))),256))]))}};export{p as default};