import{_ as m}from"./Select-c098c0c0.js";import{_ as s}from"./Label-20131f4c.js";import{_ as u}from"./Input-39294dfa.js";import{d as V}from"./vue-datepicker-3bdc29fb.js";import{N as f,k,o as h,l as a,m as r,p as l,n as i,x as p,s as _,t as c}from"./index-a01126e2.js";import"./index-2cbe9ca3.js";const g={class:"grid gap-4"},b={class:"block"},U={class:"grid grid-cols-1 md:grid-cols-2 gap-4"},x={class:"block"},B={class:"block"},C={class:"grid grid-cols-1 md:grid-cols-2 gap-4"},N={class:"block"},T={key:0,class:"block"},E={__name:"Form",props:["item"],setup(t){const d=t,v=f("$publishedStatuses"),n=k({discount_type:"",discountTypeOptions:[{key:"discount_in_hryvnia",value:"Знижка в гривнях"},{key:"percent_discount",value:"Знижка в відсотках"}]});h(()=>{d.item.discount_in_hryvnia&&(n.value.discount_type="discount_in_hryvnia"),d.item.percent_discount&&(n.value.discount_type="percent_discount")});function y(){n.value.discount_type==="discount_in_hryvnia"&&(d.item.percent_discount=null),n.value.discount_type==="percent_discount"&&(d.item.discount_in_hryvnia=null)}return($,e)=>(a(),r("form",g,[l("div",b,[i(s,{value:"Статус публікації"}),i(m,{modelValue:t.item.published,"onUpdate:modelValue":e[0]||(e[0]=o=>t.item.published=o),options:p(v)},null,8,["modelValue","options"])]),l("div",U,[l("div",x,[i(s,{value:"Код"}),i(u,{modelValue:t.item.code,"onUpdate:modelValue":e[1]||(e[1]=o=>t.item.code=o),type:"text"},null,8,["modelValue"])]),l("div",B,[i(s,{value:"Кінцева дата"}),i(p(V),{modelValue:t.item.end_date,"onUpdate:modelValue":e[2]||(e[2]=o=>t.item.end_date=o),class:"w-100",locale:"ru",placeholder:"Оберіть дату",autoApply:"",monthChangeOnScroll:!1,enableTimePicker:!1},null,8,["modelValue"])])]),l("div",C,[l("div",N,[i(s,{value:"Тип знижки"}),i(m,{modelValue:n.value.discount_type,"onUpdate:modelValue":e[3]||(e[3]=o=>n.value.discount_type=o),options:n.value.discountTypeOptions,onChange:y},null,8,["modelValue","options"])]),n.value.discount_type?(a(),r("div",T,[i(s,{value:"Сума знижки"}),n.value.discount_type==="discount_in_hryvnia"?(a(),_(u,{key:0,modelValue:t.item.discount_in_hryvnia,"onUpdate:modelValue":e[4]||(e[4]=o=>t.item.discount_in_hryvnia=o),type:"number"},null,8,["modelValue"])):c("",!0),n.value.discount_type==="percent_discount"?(a(),_(u,{key:1,modelValue:t.item.percent_discount,"onUpdate:modelValue":e[5]||(e[5]=o=>t.item.percent_discount=o),type:"number"},null,8,["modelValue"])):c("",!0)])):c("",!0)])]))}};export{E as default};
