import{s as _,v as l,D as p,p as r,k as t,l as o}from"./app-da11968c.js";const b={__name:"Table",props:["data"],setup(s){const n=[{label:"Дата",key:"date"},{label:"Надійшло заявок",key:"count_applications"},{label:"В процесі",key:"in_process_applications"},{label:"Зроблено дод.продаж",key:"count_additional_sales"},{label:"Скасованих",key:"canceled_applications"},{label:"Повернень",key:"returned_applications"},{label:"Виконаних",key:"done_applications"},{label:"Загальний апрув",key:"total_applications"},{label:"Кількість дод.продажів повітря",key:"count_sale_of_air"},{label:"Сума дод.продажів повітря",key:"price_sale_of_air"},{label:"Прибуток з дод.продажів повітря",key:"total_sale_of_air"},{label:"Загальна маржа дод.продажів",key:"sum_additional_sales"},{label:"Сума за заявки",key:"sum_price_applications"},{label:"Сума за дод.продажі",key:"sum_price_additional_sales"},{label:"Кількість нагадувань про посилку",key:"count_parcel_reminder"},{label:"Кількість передоплат",key:"count_prepayments"},{label:"Сума за передоплати",key:"prepayments_amount"},{label:"Загальна сума",key:"total_price"}];return(a,c)=>{const i=p("table-component");return r(),_(i,{headings:n,rows:s.data,isSlotMode:!0},{date:l(({data:e})=>[t(o(a.$filters.dateFormat(e.row.date)),1)]),costs:l(({data:e})=>[t(o(a.$filters.formatMoney(e.row.costs)),1)]),_:1},8,["rows"])}}};export{b as default};
