import{l as r,m as o,F as s,q as l,v as n,p as c}from"./index-a01126e2.js";const u=["value"],i=c("option",{value:null},"Не обрано",-1),p=["value"],m={__name:"Select",props:["modelValue","options"],setup(t){return(d,a)=>(r(),o("select",{onInput:a[0]||(a[0]=e=>d.$emit("update:modelValue",e.target.value)),value:t.modelValue,class:"relative block w-full pl-3 pr-12 py-2.5 rounded-lg overflow-hidden border-solid text-sm text-vtd-secondary-700 placeholder-vtd-secondary-400 transition-colors bg-white border border-vtd-secondary-300 focus:border-vtd-primary-300 focus:ring focus:ring-vtd-primary-500 focus:ring-opacity-10 focus:outline-none dark:bg-vtd-secondary-800 dark:border-vtd-secondary-700 dark:text-vtd-secondary-100 dark:placeholder-vtd-secondary-500 dark:focus:border-vtd-primary-500 dark:focus:ring-opacity-20"},[i,(r(!0),o(s,null,l(t.options,e=>(r(),o("option",{value:e.key},n(e.value),9,p))),256))],40,u))}};export{m as _};