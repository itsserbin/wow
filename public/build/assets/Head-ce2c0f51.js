import c from"./Head-e91aef5a.js";import{l as t,s as n,y as i,m as a,t as o}from"./index-a01126e2.js";const g=["content"],m=["content"],l={key:2,property:"og:image:type",content:"image/webp"},y=["content"],w={__name:"Head",props:["category","lang"],setup(e){return(r,s)=>(t(),n(c,{title:e.category.meta_title[e.lang],description:e.category.meta_description[e.lang]},{default:i(()=>[e.category.preview?(t(),a("meta",{key:0,property:"og:image",content:r.route("images",e.category.preview.webp_src)},null,8,g)):o("",!0),e.category.preview?(t(),a("meta",{key:1,property:"og:image:secure_url",content:r.route("images",e.category.preview.webp_src)},null,8,m)):o("",!0),e.category.preview?(t(),a("meta",l)):o("",!0),e.category.preview?(t(),a("meta",{key:3,property:"og:image:alt",content:e.category.title[e.lang]},null,8,y)):o("",!0)]),_:1},8,["title","description"]))}};export{w as default};
