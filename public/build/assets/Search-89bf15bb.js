import{r as u,p as a,q as s,v as e,M as c,a6 as b,l as m,C as g,z as h,A as p}from"./app-f55448cf.js";import{_ as f}from"./XCircle-78b15e67.js";const v=e("label",{for:"search",class:"sr-only"},"Пошук",-1),x={class:"relative w-full"},k=e("div",{class:"flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none"},[e("svg",{"aria-hidden":"true",class:"w-5 h-5 text-gray-500 dark:text-gray-400",fill:"currentColor",viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg"},[e("path",{"fill-rule":"evenodd",d:"M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z","clip-rule":"evenodd"})])],-1),w=["placeholder"],y=e("button",{type:"submit",class:"inline-flex items-center py-2.5 px-3 ml-2 text-sm font-medium text-white bg-blue-700 rounded-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"},[e("svg",{"aria-hidden":"true",class:"mr-2 -ml-1 w-5 h-5",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},[e("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"})]),p(" Шукати ")],-1),M={__name:"Search",props:["clear","placeholder"],emits:["search","onClear"],setup(l,{emit:n}){const r=u(null);function i(){r.value=null,n("onClear")}return(d,t)=>(a(),s("form",{class:"flex items-center",onSubmit:t[1]||(t[1]=h(o=>d.$emit("search",encodeURIComponent(r.value)),["prevent"]))},[v,e("div",x,[k,c(e("input",{type:"text","onUpdate:modelValue":t[0]||(t[0]=o=>r.value=o),id:"search",class:"bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500",placeholder:l.placeholder,required:""},null,8,w),[[b,r.value]]),l.clear?(a(),s("button",{key:0,type:"button",class:"flex absolute inset-y-0 right-0 items-center pr-3",onClick:i},[m(f,{class:"text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"})])):g("",!0)]),y],32))}};export{M as _};