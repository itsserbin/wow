import{G as V,H as g,Y as b,u as _,v as n,z as t,am as f,D as s,y as k}from"./_plugin-vue_export-helper.f12554ed.js";const y={class:"flex flex-col"},x={class:"grid grid-cols-1 md:grid-cols-2 mb-5 gap-4"},h={class:"block mr-2"},U={class:"block"},q={class:"grid grid-cols-1 md:grid-cols-3 gap-4 mb-5"},B={class:"block"},D={class:"block"},w={class:"block"},C={class:"grid grid-cols-1"},N={__name:"Form",props:["item"],setup(o){const c=o,i=V([]);g(()=>{axios.get(route("api.statistics.costs.categories.list")).then(({data:d})=>{d.result.forEach(e=>{i.value.push({key:e.id,value:e.title})})})});const u=b(()=>c.item.quantity*c.item.sum);return(d,e)=>{const a=s("label-component"),r=s("select-component"),p=s("Datepicker"),m=s("input-component"),v=s("textarea-component");return k(),_("form",y,[n("div",x,[n("div",h,[t(a,{value:"\u041A\u0430\u0442\u0435\u0433\u043E\u0440\u0456\u044F \u0432\u0438\u0442\u0440\u0430\u0442"}),t(r,{modelValue:o.item.cost_category_id,"onUpdate:modelValue":e[0]||(e[0]=l=>o.item.cost_category_id=l),options:i.value},null,8,["modelValue","options"])]),n("div",U,[t(a,{value:"\u0424\u0456\u043B\u044C\u0442\u0440 \u043F\u043E \u0434\u0430\u0442\u0456"}),t(p,{modelValue:o.item.date,"onUpdate:modelValue":e[1]||(e[1]=l=>o.item.date=l),class:"w-100",locale:"ru",placeholder:"\u041E\u0431\u0435\u0440\u0456\u0442\u044C \u0434\u0430\u0442\u0443",autoApply:"",monthChangeOnScroll:!1,enableTimePicker:!1,utc:""},null,8,["modelValue"])])]),n("div",q,[n("div",B,[t(a,{value:"\u041A\u0456\u043B\u044C\u043A\u0456\u0441\u0442\u044C"}),t(m,{modelValue:o.item.quantity,"onUpdate:modelValue":e[2]||(e[2]=l=>o.item.quantity=l),type:"number"},null,8,["modelValue"])]),n("div",D,[t(a,{value:"\u0412\u0430\u0440\u0442\u0456\u0441\u0442\u044C"}),t(m,{modelValue:o.item.sum,"onUpdate:modelValue":e[3]||(e[3]=l=>o.item.sum=l),type:"number"},null,8,["modelValue"])]),n("div",w,[t(a,{value:"\u0417\u0430\u0433\u0430\u043B\u043E\u043C"}),t(m,{value:f(u),type:"number",disabled:""},null,8,["value"])])]),n("div",C,[t(a,{value:"\u041A\u043E\u043C\u0435\u043D\u0442\u0430\u0440"}),t(v,{modelValue:o.item.comment,"onUpdate:modelValue":e[4]||(e[4]=l=>o.item.comment=l),rows:"4"},null,8,["modelValue"])])])}}};export{N as default};
