import{L as g}from"./index.1ff5b4ab.js";import{z as o,D as u,U as f,O as b,v as h,Q as m}from"./_plugin-vue_export-helper.19045d4a.js";import"./app.29455998.js";const y={__name:"Chart",props:{chartData:{type:Array,default:()=>{}}},setup(l){const n=l,p=h("$moment"),e={average_application_price:"\u0421\u0440. \u0446\u0456\u043D\u0430 \u0437\u0430\u044F\u0432\u043A\u0438",average_approve_application_price:"\u0421\u0440. \u0446\u0456\u043D\u0430 \u0430\u043F\u0440\u0443\u0432\u0430",average_done_application_price:"\u0421\u0440. \u0446\u0456\u043D\u0430 \u0432\u0438\u043A\u043E\u043D\u0430\u043D\u043E\u0457 \u0437\u0430\u044F\u0432\u043A\u0438",average_check:"\u0421\u0440. \u0447\u0435\u043A",average_marginality:"\u0421\u0440. \u043C\u0430\u0440\u0436\u0430",average_items:"\u0421\u0440. \u043A\u0456\u043B\u044C\u043A\u0456\u0441\u0442\u044C \u0442\u043E\u0432\u0430\u0440\u0456\u0432"},t=o({labels:[],datasets:[{label:e.average_application_price,data:[],borderColor:["#5DADE2"]},{label:e.average_approve_application_price,data:[],borderColor:["#F4D03F"]},{label:e.average_done_application_price,data:[],borderColor:["#58D68D"]},{label:e.average_check,data:[],borderColor:["#E74C3C"]},{label:e.average_marginality,data:[],borderColor:["#A569BD"]},{label:e.average_items,data:[],borderColor:["#85929E"]}]}),c=o({responsive:!0,interaction:{intersect:!1}});return u(()=>{const r=t.value.datasets.find(a=>a.label===e.average_application_price),i=t.value.datasets.find(a=>a.label===e.average_approve_application_price),s=t.value.datasets.find(a=>a.label===e.average_done_application_price),_=t.value.datasets.find(a=>a.label===e.average_check),v=t.value.datasets.find(a=>a.label===e.average_marginality),d=t.value.datasets.find(a=>a.label===e.average_items);n.chartData.forEach(a=>{r.data.unshift(a.average_application_price),i.data.unshift(a.average_approve_application_price),s.data.unshift(a.average_done_application_price),_.data.unshift(a.average_check),v.data.unshift(a.average_marginality),d.data.unshift(a.average_items),t.value.labels.unshift(p(a.date).format("DD.MM.YY"))})}),(r,i)=>(m(),f(b(g),{chartData:t.value,options:c.value},null,8,["chartData","options"]))}};export{y as default};
