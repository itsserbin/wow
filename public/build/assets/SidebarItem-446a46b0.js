import{_ as i}from"./_plugin-vue_export-helper-c27b6911.js";import{l as a,m as t,p as o,P as c,s as l,y as n,A as s,t as d,v as g,x as m,L as f}from"./index-a01126e2.js";const y={},h={class:"w-full"},u={class:"overflow-y-auto py-4 px-3 bg-gray-50 rounded dark:bg-gray-800"},b={class:"space-y-2"};function k(e,r){return a(),t("aside",h,[o("div",u,[o("ul",b,[c(e.$slots,"default")])])])}const S=i(y,[["render",k]]),v={class:"ml-3"},$={__name:"SidebarItem",props:["item","active"],setup(e){return(r,x)=>(a(),t("li",null,[e.item?(a(),l(m(f),{key:0,href:e.item.href?e.item.href:"javascript:",class:s([{"bg-gray-100 dark:bg-gray-700":e.active},"flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"])},{default:n(()=>[e.item.icon?(a(),t("i",{key:0,class:s(e.item.icon)},null,2)):d("",!0),o("span",v,g(e.item.title),1)]),_:1},8,["href","class"])):(a(),t("a",{key:1,href:"javascript:",class:s([{"bg-gray-100 dark:bg-gray-700":e.active},"flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"])},[c(r.$slots,"icon"),c(r.$slots,"default")],2))]))}};export{S,$ as _};