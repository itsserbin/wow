import{g}from"./app.06bf31ad.js";import{A as p,L as s,M as f,F as c,U as _,K as k,_ as I,X as y,R as t,V}from"./moment.fb372146.js";const v={class:"grid grid-cols-2 md:grid-cols-6 mt-3"},h={key:0,class:"row flex justify-center my-5"},N={__name:"List",props:["images"],emits:["fetch","clickImage","destroyImage"],setup(l,{emit:n}){const o=l,r=p(1);function m(e){n("fetch",e)}function d(e){n("destroyImage",e)}return(e,i)=>{const u=y("pagination");return t(),s(c,null,[f("div",v,[(t(!0),s(c,null,_(o.images.data,a=>(t(),V(g,{class:"m-1",image:e.route("images.products.350",a.src),id:a.id,alt:a.alt,onClickImage:B=>e.$emit("clickImage",a),destroyIcon:!0,onDestroyImage:d},null,8,["image","id","alt","onClickImage"]))),256))]),o.images?(t(),s("div",h,[k(u,{pagination:o.images,"click-handler":m,modelValue:r.value,"onUpdate:modelValue":i[0]||(i[0]=a=>r.value=a)},null,8,["pagination","modelValue"])])):I("",!0)],64)}}};export{N as default};
