import{j as r,M as u,U as d,t as l,p as i,q as p,k as f}from"./app-6d1ec759.js";const k=["value"],m={__name:"Checkbox",props:{checked:{type:[Array,Boolean],default:!1},value:{default:null}},emits:["update:checked"],setup(o,{emit:a}){const c=o,e=r({get(){return c.checked},set(t){a("update:checked",t)}});return(t,s)=>u((i(),p("input",{type:"checkbox",value:o.value,"onUpdate:modelValue":s[0]||(s[0]=n=>f(e)?e.value=n:null),class:"rounded border-gray-300 text-indigo-600 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"},null,8,k)),[[d,l(e)]])}};export{m as _};
