import{f as m}from"./app.714c321a.js";import{y as s,H as i,I as l,F as a,Q as n}from"./moment.aeac0934.js";const d={class:"grid grid-cols-2 md:grid-cols-6 gap-4 mt-3"},p={__name:"List",props:["images"],emits:["fetch","clickImage","destroyImage"],setup(r,{emit:o}){const c=t=>{o("destroyImage",t)};return(t,g)=>(a(),s("div",d,[(a(!0),s(i,null,l(r.images.data,e=>(a(),n(m,{class:"m-1",image:e,id:e.id,alt:e.alt,onClickImage:I=>t.$emit("clickImage",e),destroyIcon:!0,onDestroyImage:c},null,8,["image","id","alt","onClickImage"]))),256))]))}};export{p as default};