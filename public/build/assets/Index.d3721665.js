import c from"./OptionsLayout.f43cdd98.js";import p from"./Form.2e2c5b00.js";import{w as l,S as u,Q as e,O as _,U as n,F as a,B as m,G as d}from"./moment.791e2419.js";import"./app.553ddd32.js";const k={__name:"Index",setup(f){const r=n("$can"),s=n("$swal"),o=l({options:{head_scripts:null,after_body_scripts:null,footer_scripts:null}});u(()=>{axios.get(route("api.options.scripts.index")).then(({data:t})=>o.value.options=t.result).catch(t=>console.log(t))});function i(){axios.put(route("api.options.scripts.update"),o.value.options).then(({data:t})=>{s({title:"Updated!",icon:"success"})}).catch(t=>{s({title:"Error",icon:"error"}),console.log(t)})}return(t,h)=>(a(),e(c,null,{default:_(()=>[m(r)("show-scripts-options")?(a(),e(p,{key:0,options:o.value.options,onSubmitForm:i},null,8,["options"])):d("",!0)]),_:1}))}};export{k as default};