import{_ as c}from"./ImageCard-674c7c55.js";import{l as a,m as s,F as i,q as l,s as n}from"./index-a01126e2.js";import"./XCircle-3c75bba8.js";const d={class:"grid grid-cols-2 md:grid-cols-6 gap-4 mt-3"},k={__name:"List",props:["images"],emits:["fetch","clickImage","destroyImage"],setup(r,{emit:m}){const o=t=>{m("destroyImage",t)};return(t,g)=>(a(),s("div",d,[(a(!0),s(i,null,l(r.images.data,e=>(a(),n(c,{class:"m-1",image:e,id:e.id,alt:e.alt,onClickImage:_=>t.$emit("clickImage",e),destroyIcon:!0,onDestroyImage:o},null,8,["image","id","alt","onClickImage"]))),256))]))}};export{k as default};