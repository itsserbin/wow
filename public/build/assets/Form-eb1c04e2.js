import{r as k,o as b,g as r,i,z as l,u as g,s as _,j as m,y as h,D as d,p as a}from"./app-da11968c.js";const f={class:"grid gap-4"},U={class:"block"},C={class:"grid grid-cols-1 md:grid-cols-2 gap-4"},B={class:"block"},D={class:"block"},T={class:"grid grid-cols-1 md:grid-cols-2 gap-4"},x={class:"block"},N={key:0,class:"block"},j={__name:"Form",props:["item"],setup(t){const u=t,v=h("$publishedStatuses"),o=k({discount_type:"",discountTypeOptions:[{key:"discount_in_hryvnia",value:"Знижка в гривнях"},{key:"percent_discount",value:"Знижка в відсотках"}]});b(()=>{u.item.discount_in_hryvnia&&(o.value.discount_type="discount_in_hryvnia"),u.item.percent_discount&&(o.value.discount_type="percent_discount")});function y(){o.value.discount_type==="discount_in_hryvnia"&&(u.item.percent_discount=null),o.value.discount_type==="percent_discount"&&(u.item.discount_in_hryvnia=null)}return(O,e)=>{const s=d("label-component"),p=d("select-component"),c=d("input-component"),V=d("Datepicker");return a(),r("form",f,[i("div",U,[l(s,{value:"Статус публікації"}),l(p,{modelValue:t.item.published,"onUpdate:modelValue":e[0]||(e[0]=n=>t.item.published=n),options:g(v)},null,8,["modelValue","options"])]),i("div",C,[i("div",B,[l(s,{value:"Код"}),l(c,{modelValue:t.item.code,"onUpdate:modelValue":e[1]||(e[1]=n=>t.item.code=n),type:"text"},null,8,["modelValue"])]),i("div",D,[l(s,{value:"Кінцева дата"}),l(V,{modelValue:t.item.end_date,"onUpdate:modelValue":e[2]||(e[2]=n=>t.item.end_date=n),class:"w-100",locale:"ru",placeholder:"Оберіть дату",autoApply:"",monthChangeOnScroll:!1,enableTimePicker:!1},null,8,["modelValue"])])]),i("div",T,[i("div",x,[l(s,{value:"Тип знижки"}),l(p,{modelValue:o.value.discount_type,"onUpdate:modelValue":e[3]||(e[3]=n=>o.value.discount_type=n),options:o.value.discountTypeOptions,onChange:y},null,8,["modelValue","options"])]),o.value.discount_type?(a(),r("div",N,[l(s,{value:"Сума знижки"}),o.value.discount_type==="discount_in_hryvnia"?(a(),_(c,{key:0,modelValue:t.item.discount_in_hryvnia,"onUpdate:modelValue":e[4]||(e[4]=n=>t.item.discount_in_hryvnia=n),type:"number"},null,8,["modelValue"])):m("",!0),o.value.discount_type==="percent_discount"?(a(),_(c,{key:1,modelValue:t.item.percent_discount,"onUpdate:modelValue":e[5]||(e[5]=n=>t.item.percent_discount=n),type:"number"},null,8,["modelValue"])):m("",!0)])):m("",!0)])])}}};export{j as default};
