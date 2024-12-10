import{_ as k}from"./Table-fe1ca8dd.js";import{_ as w}from"./XCircle-3c75bba8.js";import{l as t,s as y,y as o,w as c,v as i,m as a,t as n,n as p,p as r}from"./index-a01126e2.js";const f=["onClick"],b=r("svg",{xmlns:"http://www.w3.org/2000/svg",width:"15px",height:"15px",viewBox:"0 0 115.77 122.88",class:"dark:invert"},[r("g",null,[r("path",{class:"st0",d:"M89.62,13.96v7.73h12.19h0.01v0.02c3.85,0.01,7.34,1.57,9.86,4.1c2.5,2.51,4.06,5.98,4.07,9.82h0.02v0.02 v73.27v0.01h-0.02c-0.01,3.84-1.57,7.33-4.1,9.86c-2.51,2.5-5.98,4.06-9.82,4.07v0.02h-0.02h-61.7H40.1v-0.02 c-3.84-0.01-7.34-1.57-9.86-4.1c-2.5-2.51-4.06-5.98-4.07-9.82h-0.02v-0.02V92.51H13.96h-0.01v-0.02c-3.84-0.01-7.34-1.57-9.86-4.1 c-2.5-2.51-4.06-5.98-4.07-9.82H0v-0.02V13.96v-0.01h0.02c0.01-3.85,1.58-7.34,4.1-9.86c2.51-2.5,5.98-4.06,9.82-4.07V0h0.02h61.7 h0.01v0.02c3.85,0.01,7.34,1.57,9.86,4.1c2.5,2.51,4.06,5.98,4.07,9.82h0.02V13.96L89.62,13.96z M79.04,21.69v-7.73v-0.02h0.02 c0-0.91-0.39-1.75-1.01-2.37c-0.61-0.61-1.46-1-2.37-1v0.02h-0.01h-61.7h-0.02v-0.02c-0.91,0-1.75,0.39-2.37,1.01 c-0.61,0.61-1,1.46-1,2.37h0.02v0.01v64.59v0.02h-0.02c0,0.91,0.39,1.75,1.01,2.37c0.61,0.61,1.46,1,2.37,1v-0.02h0.01h12.19V35.65 v-0.01h0.02c0.01-3.85,1.58-7.34,4.1-9.86c2.51-2.5,5.98-4.06,9.82-4.07v-0.02h0.02H79.04L79.04,21.69z M105.18,108.92V35.65v-0.02 h0.02c0-0.91-0.39-1.75-1.01-2.37c-0.61-0.61-1.46-1-2.37-1v0.02h-0.01h-61.7h-0.02v-0.02c-0.91,0-1.75,0.39-2.37,1.01 c-0.61,0.61-1,1.46-1,2.37h0.02v0.01v73.27v0.02h-0.02c0,0.91,0.39,1.75,1.01,2.37c0.61,0.61,1.46,1,2.37,1v-0.02h0.01h61.7h0.02 v0.02c0.91,0,1.75-0.39,2.37-1.01c0.61-0.61,1-1.46,1-2.37h-0.02V108.92L105.18,108.92z"})])],-1),S={key:0},V=r("br",null,null,-1),g=["onClick"],x=r("hr",{class:"my-1"},null,-1),C=["onClick"],B={__name:"Table",props:["data","statuses","canDestroy"],emits:["onDestroy","onEdit","onSendInvoiceSms"],setup(l,{emit:m}){const u=[{label:"ID",key:"id"},{label:"Статус",key:"status"},{label:"Номер замовлення",key:"order_id"},{label:"Сумма",key:"sum"},{label:"Посилання для оплати",key:"invoice_url"},{label:"SMS",key:"sms"},{label:"Кіль-сть SMS",key:"sms_count"},{label:"Оновлено<hr class='my-1'>Створено",key:"timestamps"},{label:"#",key:"actions"}];function _(s){navigator.clipboard.writeText(s)}function d(s){axios.post(route("api.sms.invoice",s)).then(()=>{m("onSendInvoiceSms")}).catch(h=>console.log(h))}return(s,h)=>(t(),y(k,{headings:u,isSlotMode:!0,rows:l.data},{status:o(({data:e})=>[c(i(l.statuses[e.row.status]),1)]),invoice_url:o(({data:e})=>[e.row.invoice_url?(t(),a("a",{key:0,href:"javascript:",onClick:v=>_(e.row.invoice_url),class:"flex"},[c(i(e.row.invoice_url?e.row.invoice_url.substr(0,30)+"...":"-")+" ",1),b],8,f)):n("",!0)]),sms:o(({data:e})=>[c(i(e.row.sms?"Надіслано":"Не надіслано")+" ",1),e.row.sms?n("",!0):(t(),a("div",S,[V,e.row.invoice_url?(t(),a("a",{key:0,href:"javascript:",onClick:v=>d(e.row.id),class:"text-blue-600"},"Відправити SMS",8,g)):n("",!0)]))]),timestamps:o(({data:e})=>[c(i(s.$filters.dateTimeFormat(e.row.updated_at))+" ",1),x,c(" "+i(s.$filters.dateTimeFormat(e.row.created_at)),1)]),actions:o(({data:e})=>[l.canDestroy?(t(),a("a",{key:0,href:"javascript:",onClick:v=>s.$emit("onDestroy",e.row.id)},[p(w)],8,C)):n("",!0)]),_:1},8,["rows"]))}};export{B as default};
