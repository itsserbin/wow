import{p as o,q as t}from"./app-f55448cf.js";const d=["rows","placeholder","value"],s={__name:"Textarea",props:{rows:String,placeholder:String,modelValue:String},setup(e){return(a,r)=>(o(),t("textarea",{rows:e.rows,class:"block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500",placeholder:e.placeholder,onInput:r[0]||(r[0]=l=>a.$emit("update:modelValue",l.target.value)),value:e.modelValue},null,40,d))}};export{s as _};