import{L as g}from"./index-3a1926a5.js";import{r as i,o as u,s as f,u as m,y as b,p as h}from"./app-0cccff29.js";import"./app-351aedfb.js";import"./index.esm-87d59e5b.js";import"./vue-i18n.esm-bundler-7516fc44.js";import"./moment-fbc5633a.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./Logo-857fc5bc.js";const x={__name:"Chart",props:{chartData:{type:Array,default:()=>{}}},setup(p){const l=p,n=b("$moment"),e={average_application_price:"Ср. ціна заявки",average_approve_application_price:"Ср. ціна апрува",average_done_application_price:"Ср. ціна виконаної заявки",average_check:"Ср. чек",average_marginality:"Ср. маржа",average_items:"Ср. кількість товарів"},r=i({labels:[],datasets:[{label:e.average_application_price,data:[],borderColor:["#5DADE2"]},{label:e.average_approve_application_price,data:[],borderColor:["#F4D03F"]},{label:e.average_done_application_price,data:[],borderColor:["#58D68D"]},{label:e.average_check,data:[],borderColor:["#E74C3C"]},{label:e.average_marginality,data:[],borderColor:["#A569BD"]},{label:e.average_items,data:[],borderColor:["#85929E"]}]}),c=i({responsive:!0,interaction:{intersect:!1}});return u(()=>{const t=r.value.datasets.find(a=>a.label===e.average_application_price),o=r.value.datasets.find(a=>a.label===e.average_approve_application_price),s=r.value.datasets.find(a=>a.label===e.average_done_application_price),_=r.value.datasets.find(a=>a.label===e.average_check),v=r.value.datasets.find(a=>a.label===e.average_marginality),d=r.value.datasets.find(a=>a.label===e.average_items);l.chartData.forEach(a=>{t.data.unshift(a.average_application_price),o.data.unshift(a.average_approve_application_price),s.data.unshift(a.average_done_application_price),_.data.unshift(a.average_check),v.data.unshift(a.average_marginality),d.data.unshift(a.average_items),r.value.labels.unshift(n(a.date).format("DD.MM.YY"))})}),(t,o)=>(h(),f(m(g),{chartData:r.value,options:c.value},null,8,["chartData","options"]))}};export{x as default};
