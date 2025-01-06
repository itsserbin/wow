import{_ as i}from"./Table-fe1ca8dd.js";import{l as m,s as n,y as r,w as l,v as s}from"./index-a01126e2.js";const u={__name:"Table",props:["data"],setup(o){const t=[{label:"Дата",key:"date"},{label:"Витрати",key:"cost"},{label:"Оберт",key:"turnover"},{label:"Маржа",key:"marginality"},{label:"Чистий прибуток",key:"clear_profit"},{label:"Винен постачальник",key:"debt_supplier"},{label:"Продажі повітря",key:"sale_of_air_sum"},{label:"Середня маржа",key:"average_marginality"},{label:"Сума переодоплат",key:"prepayment_sum"},{label:"Сума переодоплат WFP",key:"prepayment_wfp_sum"},{label:"Сума переодоплат на карту",key:"prepayment_card_sum"},{label:"Сума за повернення товару",key:"refunds_sum"},{label:"Маржа з дод.продаж",key:"additional_sales_marginality_sum"},{label:"Оберт дод.продаж",key:"additional_sales_sum"}];return(a,y)=>(m(),n(i,{headings:t,rows:o.data,isSlotMode:!0},{date:r(({data:e})=>[l(s(a.$filters.dateFormat(e.row.date)),1)]),costs:r(({data:e})=>[l(s(a.$filters.formatMoney(e.row.costs)),1)]),turnover:r(({data:e})=>[l(s(a.$filters.formatMoney(e.row.turnover)),1)]),marginality:r(({data:e})=>[l(s(a.$filters.formatMoney(e.row.marginality)),1)]),clear_profit:r(({data:e})=>[l(s(a.$filters.formatMoney(e.row.clear_profit)),1)]),average_marginality:r(({data:e})=>[l(s(a.$filters.formatMoney(e.row.average_marginality)),1)]),sale_of_air_sum:r(({data:e})=>[l(s(a.$filters.formatMoney(e.row.sale_of_air_sum)),1)]),debt_supplier:r(({data:e})=>[l(s(a.$filters.formatMoney(e.row.debt_supplier)),1)]),prepayment_sum:r(({data:e})=>[l(s(a.$filters.formatMoney(e.row.prepayment_sum)),1)]),refunds_sum:r(({data:e})=>[l(s(a.$filters.formatMoney(e.row.refunds_sum)),1)]),additional_sales_marginality_sum:r(({data:e})=>[l(s(a.$filters.formatMoney(e.row.additional_sales_marginality_sum)),1)]),additional_sales_sum:r(({data:e})=>[l(s(a.$filters.formatMoney(e.row.additional_sales_sum)),1)]),_:1},8,["rows"]))}};export{u as default};