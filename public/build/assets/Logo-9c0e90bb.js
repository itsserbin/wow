import{_ as d,a as g}from"./app-351aedfb.js";import{u as _}from"./vue-i18n.esm-bundler-7516fc44.js";import{r as f,g as r,z as c,i as o,l as u,y,p as i}from"./app-0cccff29.js";import"./index.esm-87d59e5b.js";import"./moment-fbc5633a.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./Logo-857fc5bc.js";const h={class:"mb-4"},x={class:"mt-2"},v={key:0},w=["srcset"],k=["src","alt"],b={key:1},B={class:"mt-2 text-sm text-gray-500"},L={__name:"Logo",props:["title"],setup($){const l=y("$swal"),e=f(null),{t:n}=_(),p=async t=>{const s=new FormData;s.append("logo",t),await axios.post(route("api.images.logo.upload"),s,{headers:{"Content-Type":"multipart/form-data"}}).then(({data:a})=>{e.value=a.result,l({title:n("swal.logo.upload"),icon:"success",confirmButtonText:"Ok"})}).catch(a=>{console.log(a),l({text:n("swal.logo.error"),icon:"error",confirmButtonText:"Ok"})})},m=async()=>{await axios.delete(route("api.images.logo.delete")).then(()=>{e.value=null,l({title:n("swal.logo.destroy.success"),icon:"success",confirmButtonText:"Ok"})}).catch(t=>{console.log(t),l({title:n("swal.logo.destroy.error"),icon:"error",confirmButtonText:"Ok"})})};return(t,s)=>(i(),r("div",h,[c(d,{value:t.$t("options.text_label_logo")},null,8,["value"]),o("div",x,[e.value?(i(),r("div",v,[o("picture",null,[o("source",{srcset:"/storage/"+e.value+".webp",type:"image/webp"},null,8,w),o("img",{src:"/storage/"+e.value+".jpeg",alt:t.$t("options.text_label_logo")},null,8,k)]),o("button",{type:"button",class:"text-sm font-medium text-red-500 hover:text-red-700",onClick:m},u(t.$t("options.text_destroyLabel")),1)])):(i(),r("div",b,[c(g,{type:"file",onChange:s[0]||(s[0]=a=>p(a.target.files[0]))}),o("p",B,u(t.$t("options.instructions")),1)]))])]))}};export{L as default};
