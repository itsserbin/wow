import{a0 as y,X as t,V as m,S as s,Y as c,O as n,L as a,_ as r,K as b,M as i}from"./___vite-browser-external_commonjs-proxy.c41a93ce.js";const S=["onClick"],V=i("svg",{xmlns:"http://www.w3.org/2000/svg",width:"15px",height:"15px",viewBox:"0 0 115.77 122.88",class:"dark:invert"},[i("g",null,[i("path",{class:"st0",d:"M89.62,13.96v7.73h12.19h0.01v0.02c3.85,0.01,7.34,1.57,9.86,4.1c2.5,2.51,4.06,5.98,4.07,9.82h0.02v0.02 v73.27v0.01h-0.02c-0.01,3.84-1.57,7.33-4.1,9.86c-2.51,2.5-5.98,4.06-9.82,4.07v0.02h-0.02h-61.7H40.1v-0.02 c-3.84-0.01-7.34-1.57-9.86-4.1c-2.5-2.51-4.06-5.98-4.07-9.82h-0.02v-0.02V92.51H13.96h-0.01v-0.02c-3.84-0.01-7.34-1.57-9.86-4.1 c-2.5-2.51-4.06-5.98-4.07-9.82H0v-0.02V13.96v-0.01h0.02c0.01-3.85,1.58-7.34,4.1-9.86c2.51-2.5,5.98-4.06,9.82-4.07V0h0.02h61.7 h0.01v0.02c3.85,0.01,7.34,1.57,9.86,4.1c2.5,2.51,4.06,5.98,4.07,9.82h0.02V13.96L89.62,13.96z M79.04,21.69v-7.73v-0.02h0.02 c0-0.91-0.39-1.75-1.01-2.37c-0.61-0.61-1.46-1-2.37-1v0.02h-0.01h-61.7h-0.02v-0.02c-0.91,0-1.75,0.39-2.37,1.01 c-0.61,0.61-1,1.46-1,2.37h0.02v0.01v64.59v0.02h-0.02c0,0.91,0.39,1.75,1.01,2.37c0.61,0.61,1.46,1,2.37,1v-0.02h0.01h12.19V35.65 v-0.01h0.02c0.01-3.85,1.58-7.34,4.1-9.86c2.51-2.5,5.98-4.06,9.82-4.07v-0.02h0.02H79.04L79.04,21.69z M105.18,108.92V35.65v-0.02 h0.02c0-0.91-0.39-1.75-1.01-2.37c-0.61-0.61-1.46-1-2.37-1v0.02h-0.01h-61.7h-0.02v-0.02c-0.91,0-1.75,0.39-2.37,1.01 c-0.61,0.61-1,1.46-1,2.37h0.02v0.01v73.27v0.02h-0.02c0,0.91,0.39,1.75,1.01,2.37c0.61,0.61,1.46,1,2.37,1v-0.02h0.01h61.7h0.02 v0.02c0.91,0,1.75-0.39,2.37-1.01c0.61-0.61,1-1.46,1-2.37h-0.02V108.92L105.18,108.92z"})])],-1),f={key:0},x=i("br",null,null,-1),g=["onClick"],C=i("hr",{class:"my-1"},null,-1),M=["onClick"],$={__name:"Table",props:["data","statuses","canDestroy"],emits:["onDestroy","onEdit","onSendInvoiceSms"],setup(l,{emit:u}){const _=[{label:"ID",key:"id"},{label:"\u0421\u0442\u0430\u0442\u0443\u0441",key:"status"},{label:"\u041D\u043E\u043C\u0435\u0440 \u0437\u0430\u043C\u043E\u0432\u043B\u0435\u043D\u043D\u044F",key:"order_id"},{label:"\u0421\u0443\u043C\u043C\u0430",key:"sum"},{label:"\u041F\u043E\u0441\u0438\u043B\u0430\u043D\u043D\u044F \u0434\u043B\u044F \u043E\u043F\u043B\u0430\u0442\u0438",key:"invoice_url"},{label:"SMS",key:"sms"},{label:"\u041A\u0456\u043B\u044C-\u0441\u0442\u044C SMS",key:"sms_count"},{label:"\u041E\u043D\u043E\u0432\u043B\u0435\u043D\u043E<hr class='my-1'>\u0421\u0442\u0432\u043E\u0440\u0435\u043D\u043E",key:"timestamps"},{label:"#",key:"actions"}];function d(o){navigator.clipboard.writeText(o)}function p(o){axios.post(route("api.sms.invoice",o)).then(()=>{u("onSendInvoiceSms")}).catch(h=>console.log(h))}return(o,h)=>{const k=m("xcircle-component"),w=m("table-component");return s(),y(w,{headings:_,isSlotMode:!0,rows:l.data},{status:t(({data:e})=>[c(n(l.statuses[e.row.status]),1)]),invoice_url:t(({data:e})=>[e.row.invoice_url?(s(),a("a",{key:0,href:"javascript:",onClick:v=>d(e.row.invoice_url),class:"flex"},[c(n(e.row.invoice_url?e.row.invoice_url.substr(0,30)+"...":"-")+" ",1),V],8,S)):r("",!0)]),sms:t(({data:e})=>[c(n(e.row.sms?"\u041D\u0430\u0434\u0456\u0441\u043B\u0430\u043D\u043E":"\u041D\u0435 \u043D\u0430\u0434\u0456\u0441\u043B\u0430\u043D\u043E")+" ",1),e.row.sms?r("",!0):(s(),a("div",f,[x,e.row.invoice_url?(s(),a("a",{key:0,href:"javascript:",onClick:v=>p(e.row.id),class:"text-blue-600"},"\u0412\u0456\u0434\u043F\u0440\u0430\u0432\u0438\u0442\u0438 SMS",8,g)):r("",!0)]))]),timestamps:t(({data:e})=>[c(n(o.$filters.dateTimeFormat(e.row.updated_at))+" ",1),C,c(" "+n(o.$filters.dateTimeFormat(e.row.created_at)),1)]),actions:t(({data:e})=>[l.canDestroy?(s(),a("a",{key:0,href:"javascript:",onClick:v=>o.$emit("onDestroy",e.row.id)},[b(k)],8,M)):r("",!0)]),_:1},8,["rows"])}}};export{$ as default};