import e from"./OptionsLayout.ce2fe43c.js";import n from"./Form.000bd4cd.js";import{z as a,D as i,U as p,R as r,Q as c,J as l}from"./moment.ad2399f6.js";import"./Sidebar.71c59552.js";import"./app.834fdcb5.js";const g={__name:"Index",setup(u){const t=a({options:{head_scripts:null,after_body_scripts:null,footer_scripts:null}});i(()=>{axios.get(route("api.options.scripts.index")).then(({data:o})=>t.value.options=o.result).catch(o=>console.log(o))});function s(){axios.put(route("api.options.scripts.update"),t.value.options).then(({data:o})=>console.log(o)).catch(o=>console.log(o))}return(o,_)=>(c(),p(e,null,{default:r(()=>[l(n,{options:t.value.options,onSubmitForm:s},null,8,["options"])]),_:1}))}};export{g as default};
