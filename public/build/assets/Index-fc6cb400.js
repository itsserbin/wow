import p from"./OptionsLayout-a4072b2b.js";import c from"./Form-7b76fa1e.js";import{r as l,o as u,s as e,v as m,y as n,p as r,u as _,j as d}from"./app-443dd386.js";import"./app-957518a1.js";import"./vue-i18n.esm-bundler-c84158d1.js";import"./moment-fbc5633a.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./Logo-89534839.js";const j={__name:"Index",setup(f){const a=n("$can"),s=n("$swal"),t=l({options:{head_scripts:null,after_body_scripts:null,footer_scripts:null}});u(()=>{axios.get(route("api.options.scripts.index")).then(({data:o})=>t.value.options=o.result).catch(o=>console.log(o))});function i(){axios.put(route("api.options.scripts.update"),t.value.options).then(({data:o})=>{s({title:"Updated!",icon:"success"})}).catch(o=>{s({title:"Error",icon:"error"}),console.log(o)})}return(o,h)=>(r(),e(p,null,{default:m(()=>[_(a)("show-scripts-options")?(r(),e(c,{key:0,options:t.value.options,onSubmitForm:i},null,8,["options"])):d("",!0)]),_:1}))}};export{j as default};
