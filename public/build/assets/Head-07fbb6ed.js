import n from"./Head-949a494b.js";import{p as t,D as a,x as i,q as o,C as r}from"./app-f55448cf.js";const u=["content"],l=["content"],d={key:2,property:"og:image:type",content:"image/webp"},m=["content"],w={__name:"Head",props:["product","lang"],setup(e){return(c,p)=>(t(),a(n,{title:e.product.title[e.lang],description:e.product.description[e.lang]},{default:i(()=>[e.product.preview?(t(),o("meta",{key:0,property:"og:image",content:c.route("images",e.product.preview.webp_src)},null,8,u)):r("",!0),e.product.preview?(t(),o("meta",{key:1,property:"og:image:secure_url",content:c.route("images",e.product.preview.webp_src)},null,8,l)):r("",!0),e.product.preview?(t(),o("meta",d)):r("",!0),e.product.preview?(t(),o("meta",{key:3,property:"og:image:alt",content:e.product.title[e.lang]},null,8,m)):r("",!0)]),_:1},8,["title","description"]))}};export{w as default};