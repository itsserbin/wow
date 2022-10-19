import{ax as n,W as m,U as r,Y as f,S as _,Z as o,O as t}from"./moment.325cf309.js";const d={__name:"Table",props:["data"],setup(s){const l=n([{label:"\u0414\u0430\u0442\u0430",key:"date"},{label:"\u0412\u0441\u044C\u043E\u0433\u043E",key:"applications"},{label:"\u041F\u0435\u0440\u0435\u0434\u0430\u043D\u0456 \u043F\u043E\u0441\u0442\u0430\u0447\u0430\u043B\u044C\u043D\u0438\u043A\u0443",key:"transferred_to_supplier"},{label:"\u0412\u0438\u043C\u0430\u0433\u0430\u044E\u0442\u044C \u0443\u0442\u043E\u0447\u043D\u0435\u043D\u043D\u044F",key:"requires_clarification"},{label:"\u041E\u0447\u0456\u043A\u0443\u044E\u0442\u044C \u0432\u0456\u0434\u043F\u0440\u0430\u0432\u043B\u0435\u043D\u043D\u044F",key:"awaiting_dispatch"},{label:"\u041E\u0447\u0456\u043A\u0443\u044E\u0442\u044C \u043F\u0435\u0440\u0435\u0434\u043E\u043F\u043B\u0430\u0442\u0438",key:"awaiting_prepayment"},{label:"\u0412 \u0434\u043E\u0440\u043E\u0437\u0456",key:"on_the_road"},{label:"\u0412 \u043F\u0440\u043E\u0446\u0435\u0441\u0456",key:"in_process"},{label:"\u041D\u0430 \u043F\u043E\u0448\u0442\u0456",key:"at_the_post_office"},{label:"\u0412\u0438\u043A\u043E\u043D\u0430\u043D\u0456",key:"completed"},{label:"\u041F\u043E\u0432\u0435\u0440\u043D\u0435\u043D\u043D\u044F",key:"refunds"},{label:"\u0421\u043A\u0430\u0441\u043E\u0432\u0430\u043D\u0456",key:"cancel"},{label:"\u041D\u043E\u0432\u0456",key:"unprocessed"}]);return(a,y)=>{const i=f("table-component");return _(),m(i,{headings:l,rows:s.data,isSlotMode:!0},{date:r(({data:e})=>[o(t(a.$filters.dateFormat(e.row.date)),1)]),costs:r(({data:e})=>[o(t(a.$filters.formatMoney(e.row.costs)),1)]),turnover:r(({data:e})=>[o(t(a.$filters.formatMoney(e.row.turnover)),1)]),marginality:r(({data:e})=>[o(t(a.$filters.formatMoney(e.row.marginality)),1)]),clear_profit:r(({data:e})=>[o(t(a.$filters.formatMoney(e.row.clear_profit)),1)]),average_marginality:r(({data:e})=>[o(t(a.$filters.formatMoney(e.row.average_marginality)),1)]),sale_of_air_sum:r(({data:e})=>[o(t(a.$filters.formatMoney(e.row.sale_of_air_sum)),1)]),debt_supplier:r(({data:e})=>[o(t(a.$filters.formatMoney(e.row.debt_supplier)),1)]),prepayment_sum:r(({data:e})=>[o(t(a.$filters.formatMoney(e.row.prepayment_sum)),1)]),refunds_sum:r(({data:e})=>[o(t(a.$filters.formatMoney(e.row.refunds_sum)),1)]),additional_sales_marginality_sum:r(({data:e})=>[o(t(a.$filters.formatMoney(e.row.additional_sales_marginality_sum)),1)]),additional_sales_sum:r(({data:e})=>[o(t(a.$filters.formatMoney(e.row.additional_sales_sum)),1)]),_:1},8,["headings","rows"])}}};export{d as default};
