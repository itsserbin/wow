import{z as k,D as b,K as r,L as i,J as l,O as h,U as _,X as m,V as d,Q as a,v as f}from"./_plugin-vue_export-helper.4dd23699.js";const g={class:"grid gap-4"},U={class:"block"},C={class:"grid grid-cols-1 md:grid-cols-2 gap-4"},B={class:"block"},D={class:"block"},O={class:"grid grid-cols-1 md:grid-cols-2 gap-4"},T={class:"block"},x={key:0,class:"block"},j={__name:"Form",props:["item"],setup(t){const u=t,v=f("$publishedStatuses"),o=k({discount_type:"",discountTypeOptions:[{key:"discount_in_hryvnia",value:"\u0417\u043D\u0438\u0436\u043A\u0430 \u0432 \u0433\u0440\u0438\u0432\u043D\u044F\u0445"},{key:"percent_discount",value:"\u0417\u043D\u0438\u0436\u043A\u0430 \u0432 \u0432\u0456\u0434\u0441\u043E\u0442\u043A\u0430\u0445"}]});b(()=>{u.item.discount_in_hryvnia&&(o.value.discount_type="discount_in_hryvnia"),u.item.percent_discount&&(o.value.discount_type="percent_discount")});function y(){o.value.discount_type==="discount_in_hryvnia"&&(u.item.percent_discount=null),o.value.discount_type==="percent_discount"&&(u.item.discount_in_hryvnia=null)}return(N,e)=>{const s=d("label-component"),p=d("select-component"),c=d("input-component"),V=d("Datepicker");return a(),r("form",g,[i("div",U,[l(s,{value:"\u0421\u0442\u0430\u0442\u0443\u0441 \u043F\u0443\u0431\u043B\u0456\u043A\u0430\u0446\u0456\u0457"}),l(p,{modelValue:t.item.published,"onUpdate:modelValue":e[0]||(e[0]=n=>t.item.published=n),options:h(v)},null,8,["modelValue","options"])]),i("div",C,[i("div",B,[l(s,{value:"\u041A\u043E\u0434"}),l(c,{modelValue:t.item.code,"onUpdate:modelValue":e[1]||(e[1]=n=>t.item.code=n),type:"text"},null,8,["modelValue"])]),i("div",D,[l(s,{value:"\u041A\u0456\u043D\u0446\u0435\u0432\u0430 \u0434\u0430\u0442\u0430"}),l(V,{modelValue:t.item.end_date,"onUpdate:modelValue":e[2]||(e[2]=n=>t.item.end_date=n),class:"w-100",locale:"ru",placeholder:"\u041E\u0431\u0435\u0440\u0456\u0442\u044C \u0434\u0430\u0442\u0443",autoApply:"",monthChangeOnScroll:!1,enableTimePicker:!1},null,8,["modelValue"])])]),i("div",O,[i("div",T,[l(s,{value:"\u0422\u0438\u043F \u0437\u043D\u0438\u0436\u043A\u0438"}),l(p,{modelValue:o.value.discount_type,"onUpdate:modelValue":e[3]||(e[3]=n=>o.value.discount_type=n),options:o.value.discountTypeOptions,onChange:y},null,8,["modelValue","options"])]),o.value.discount_type?(a(),r("div",x,[l(s,{value:"\u0421\u0443\u043C\u0430 \u0437\u043D\u0438\u0436\u043A\u0438"}),o.value.discount_type==="discount_in_hryvnia"?(a(),_(c,{key:0,modelValue:t.item.discount_in_hryvnia,"onUpdate:modelValue":e[4]||(e[4]=n=>t.item.discount_in_hryvnia=n),type:"number"},null,8,["modelValue"])):m("",!0),o.value.discount_type==="percent_discount"?(a(),_(c,{key:1,modelValue:t.item.percent_discount,"onUpdate:modelValue":e[5]||(e[5]=n=>t.item.percent_discount=n),type:"number"},null,8,["modelValue"])):m("",!0)])):m("",!0)])])}}};export{j as default};
