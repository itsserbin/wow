import c from"./OptionsLayout.c9c3d942.js";import p from"./Form.25320b87.js";import{j as l,o as u,C as e,D as m,G as n,A as r,u as _,v as d}from"./index.e4375aa7.js";import"./app.2c2e52ca.js";import"./moment.9709ab41.js";import"./_plugin-vue_export-helper.cdc0426e.js";import"./lazyload.6866379a.js";import"./Logo.6d532cc3.js";const j={__name:"Index",setup(f){const a=n("$can"),s=n("$swal"),t=l({options:{head_scripts:null,after_body_scripts:null,footer_scripts:null}});u(()=>{axios.get(route("api.options.scripts.index")).then(({data:o})=>t.value.options=o.result).catch(o=>console.log(o))});function i(){axios.put(route("api.options.scripts.update"),t.value.options).then(({data:o})=>{s({title:"Updated!",icon:"success"})}).catch(o=>{s({title:"Error",icon:"error"}),console.log(o)})}return(o,h)=>(r(),e(c,null,{default:m(()=>[_(a)("show-scripts-options")?(r(),e(p,{key:0,options:t.value.options,onSubmitForm:i},null,8,["options"])):d("",!0)]),_:1}))}};export{j as default};