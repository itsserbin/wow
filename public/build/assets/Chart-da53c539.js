import{L as g}from"./index-56b1b8f0.js";import{r as i,o as u,s as f,u as b,y as h,p as m}from"./app-da11968c.js";import"./app-23639435.js";import"./vue-i18n.esm-bundler-7f92347f.js";import"./moment-fbc5633a.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./Logo-9fe22fca.js";const M={__name:"Chart",props:{chartData:{type:Array,default:()=>{}}},setup(p){const l=p,n=h("$moment"),e={average_application_price:"Ср. ціна заявки",average_approve_application_price:"Ср. ціна апрува",average_done_application_price:"Ср. ціна виконаної заявки",average_check:"Ср. чек",average_marginality:"Ср. маржа",average_items:"Ср. кількість товарів"},r=i({labels:[],datasets:[{label:e.average_application_price,data:[],borderColor:["#5DADE2"]},{label:e.average_approve_application_price,data:[],borderColor:["#F4D03F"]},{label:e.average_done_application_price,data:[],borderColor:["#58D68D"]},{label:e.average_check,data:[],borderColor:["#E74C3C"]},{label:e.average_marginality,data:[],borderColor:["#A569BD"]},{label:e.average_items,data:[],borderColor:["#85929E"]}]}),c=i({responsive:!0,interaction:{intersect:!1}});return u(()=>{const t=r.value.datasets.find(a=>a.label===e.average_application_price),o=r.value.datasets.find(a=>a.label===e.average_approve_application_price),s=r.value.datasets.find(a=>a.label===e.average_done_application_price),_=r.value.datasets.find(a=>a.label===e.average_check),v=r.value.datasets.find(a=>a.label===e.average_marginality),d=r.value.datasets.find(a=>a.label===e.average_items);l.chartData.forEach(a=>{t.data.unshift(a.average_application_price),o.data.unshift(a.average_approve_application_price),s.data.unshift(a.average_done_application_price),_.data.unshift(a.average_check),v.data.unshift(a.average_marginality),d.data.unshift(a.average_items),r.value.labels.unshift(n(a.date).format("DD.MM.YY"))})}),(t,o)=>(m(),f(b(g),{chartData:r.value,options:c.value},null,8,["chartData","options"]))}};export{M as default};
