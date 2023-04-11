import{_ as d,a as g}from"./app.c998355c.js";import{p as _,ag as f,g as r,x as c,i as o,t as p,v as h,o as i}from"./vendor.693a237b.js";import"./vue.m.8e70aa70.js";import"./bootstrap.8b9397d4.js";import"./__commonjsHelpers__.488ed5c2.js";import"./_plugin-vue_export-helper.cdc0426e.js";import"./lazyload.6866379a.js";import"./Logo.c403545e.js";const x={class:"mb-4"},y={class:"mt-2"},v={key:0},w=["srcset"],k=["src","alt"],b={key:1},B={class:"mt-2 text-sm text-gray-500"},N={__name:"Logo",props:["title"],setup($){const l=h("$swal"),e=_(null),{t:n}=f(),u=async t=>{const s=new FormData;s.append("logo",t),await axios.post(route("api.images.logo.upload"),s,{headers:{"Content-Type":"multipart/form-data"}}).then(({data:a})=>{e.value=a.result,l({title:n("swal.logo.upload"),icon:"success",confirmButtonText:"Ok"})}).catch(a=>{console.log(a),l({text:n("swal.logo.error"),icon:"error",confirmButtonText:"Ok"})})},m=async()=>{await axios.delete(route("api.images.logo.delete")).then(()=>{e.value=null,l({title:n("swal.logo.destroy.success"),icon:"success",confirmButtonText:"Ok"})}).catch(t=>{console.log(t),l({title:n("swal.logo.destroy.error"),icon:"error",confirmButtonText:"Ok"})})};return(t,s)=>(i(),r("div",x,[c(d,{value:t.$t("options.text_label_logo")},null,8,["value"]),o("div",y,[e.value?(i(),r("div",v,[o("picture",null,[o("source",{srcset:"/storage/"+e.value+".webp",type:"image/webp"},null,8,w),o("img",{src:"/storage/"+e.value+".jpeg",alt:t.$t("options.text_label_logo")},null,8,k)]),o("button",{type:"button",class:"text-sm font-medium text-red-500 hover:text-red-700",onClick:m},p(t.$t("options.text_destroyLabel")),1)])):(i(),r("div",b,[c(g,{type:"file",onChange:s[0]||(s[0]=a=>u(a.target.files[0]))}),o("p",B,p(t.$t("options.instructions")),1)]))])]))}};export{N as default};
