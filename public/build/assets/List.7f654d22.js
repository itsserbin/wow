import{g as m}from"./app.663608d0.js";import{L as s,F as i,U as n,R as a,V as l}from"./moment.e1708d83.js";const d={class:"grid grid-cols-2 md:grid-cols-6 gap-4 mt-3"},_={__name:"List",props:["images"],emits:["fetch","clickImage","destroyImage"],setup(r,{emit:o}){function c(e){o("destroyImage",e)}return(e,g)=>(a(),s("div",d,[(a(!0),s(i,null,n(r.images.data,t=>(a(),l(m,{class:"m-1",image:e.route("images.products.350",t.src),id:t.id,alt:t.alt,onClickImage:u=>e.$emit("clickImage",t),destroyIcon:!0,onDestroyImage:c},null,8,["image","id","alt","onClickImage"]))),256))]))}};export{_ as default};
