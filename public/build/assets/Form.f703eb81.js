import{z as _,aA as $,y as Y,C as q,L as b,M as o,K as s,X as U,_ as y,ad as S,a0 as c,bh as O,P as f,O as I,Y as x,B as j,V as k,S as u}from"./___vite-browser-external_commonjs-proxy.c41a93ce.js";import G from"./ItemsModal.b1002ebc.js";import H from"./ItemsTable.204e8023.js";import J from"./ClientOrders.c310274a.js";import Q from"./Table.7e5857ee.js";import Z from"./Modal.d0f42120.js";import"./ItemsForm.892042ed.js";import"./Form.30fffcd5.js";const ee={class:"grid gap-4"},te={class:"grid grid-cols-1 md:grid-cols-4 gap-4"},oe={class:"block"},le={class:"block"},se={class:"block"},ie={class:"block"},de=x(" \u041A\u0430\u0440\u0442\u043A\u0430 \u043A\u043B\u0456\u0454\u043D\u0442\u0430 "),ne={class:"grid grid-cols-1 md:grid-cols-2 gap-4"},ae={class:"block"},re={class:"block"},ue={key:0,class:"block"},me=o("hr",null,null,-1),ce={class:"grid grid-cols-1 md:grid-cols-4 mb-5"},ve={class:"block mb-5 md:mr-5"},ye={class:"block mb-5 md:mr-5"},be={class:"block mb-5 md:mr-5"},fe={class:"block mb-5"},he={class:"grid grid-cols-1 md:grid-cols-2 mb-10"},Ve={class:"block md:mr-5"},ge={class:"block mb-5"},ke={class:"block mb-5"},xe={class:"block"},pe={key:0},we={key:1},Ie=x(" \u0422\u0422\u041D \u043E\u0442\u043F\u0440\u0430\u0432\u043B\u0435\u043D\u0430 ("),Me=x(") "),_e={class:"block"},Ue={class:"mb-7"},Ce={class:"grid grid-cols-2"},Fe={class:"block mb-5 mr-5"},$e={class:"block mb-5"},Se={class:"grid grid-cols-2"},Oe={class:"block mb-5 mr-5"},je={class:"block mb-5"},Ae={class:"grid grid-cols-2"},Ee={class:"block mb-5 mr-5"},Be={class:"block mb-5"},De={key:0},Ne={class:"block mb-5"},ze=x("\u0414\u043E\u0434\u0430\u0442\u0438 \u0442\u043E\u0432\u0430\u0440"),Te={class:"grid grid-cols-1 md:grid-cols-4 mt-5"},Le={class:"flex justify-center"},Pe=o("p",{class:"font-semibold text-l text-gray-900 dark:text-white"}," \u041A\u0456\u043B\u044C\u043A\u0456\u0441\u0442\u044C \u0442\u043E\u0432\u0430\u0440\u0456\u0432:\xA0 ",-1),We={class:"text-l text-gray-900 dark:text-white"},Ke={class:"flex justify-center"},Re=o("p",{class:"font-semibold text-l text-gray-900 dark:text-white"}," \u0417\u0430\u0433\u0430\u043B\u044C\u043D\u0430 \u0446\u0456\u043D\u0430:\xA0 ",-1),Xe={class:"text-l text-gray-900 dark:text-white"},Ye={class:"flex justify-center"},qe=o("p",{class:"font-semibold text-l text-gray-900 dark:text-white"}," \u0426\u0456\u043D\u0430 \u043D\u0430 \u043F\u043E\u0441\u0438\u043B\u043A\u0443:\xA0 ",-1),Ge={class:"text-l text-gray-900 dark:text-white"},He={class:"flex justify-center"},Je=o("p",{class:"font-semibold text-l text-gray-900 dark:text-white"}," \u041F\u0440\u043E\u043C\u043E-\u043A\u043E\u0434:\xA0 ",-1),Qe={class:"text-l text-gray-900 dark:text-white"},Ze={key:1,class:"block"},et=x(" \u0414\u043E\u0434\u0430\u0442\u0438 \u0440\u0430\u0445\u0443\u043D\u043E\u043A "),rt={__name:"Form",props:["order","statuses","paymentMethods","invoiceStatuses"],emits:["submitItemForm","onEditClient"],setup(e,{emit:h}){const a=e,m=j("$swal"),V=j("$can"),A=_(()=>a.order.prepayment?a.order.total_price-a.order.prepayment_sum:a.order.total_price),C=$({order_id:a.order.id,sum:null}),d=Y({showItemsModal:!1,showInvoicesModal:!1,itemsModalAction:"",item:{count:1,size:"",color:"",product_id:null},invoiceItem:{},statuses:[],managers:[],paymentMethods:[]});q(()=>{P();for(const[i,t]of Object.entries(a.statuses))d.value.statuses.push({key:i,value:t});for(const[i,t]of Object.entries(a.paymentMethods))d.value.paymentMethods.push({key:i,value:t})});const E=_(()=>d.value.showItemsModal?G:null),B=_(()=>d.value.showInvoicesModal?Z:null),p=$([{key:0,value:"\u041D\u0456"},{key:1,value:"\u0422\u0430\u043A"}]);function w(){d.value.showInvoicesModal=!d.value.showInvoicesModal}function D(i){V("destroy-invoices")&&m({title:"\u0412\u0438\u0434\u0430\u043B\u0438\u0442\u0438?",icon:"warning",showCancelButton:!0}).then(t=>{t.isConfirmed&&axios.delete(route("api.invoices.destroy",i)).then(()=>{h("submitItemForm"),m({icon:"success",title:"Destroyed!"})}).catch(n=>{console.log(n),m({icon:"error",title:"Error!"})})})}function N(){V("create-invoices")&&(d.value.invoiceItem=C,w())}function z(){axios.post(route("api.invoices.create"),d.value.invoiceItem).then(({data:i})=>{d.value.invoiceItem=C,w(),navigator.clipboard.writeText(i.result.data.invoice_url),m({title:"\u0423\u0441\u043F\u0456\u0448\u043D\u043E!",text:"\u0420\u0430\u0445\u0443\u043D\u043E\u043A \u0431\u0443\u0432 \u0443\u0441\u043F\u0456\u0448\u043D\u043E \u0441\u0442\u0432\u043E\u0440\u0435\u043D\u0438\u0439, \u043F\u043E\u0441\u0438\u043B\u0430\u043D\u043D\u044F \u043D\u0430 \u043E\u043F\u043B\u0430\u0442\u0443 \u0441\u043A\u043E\u043F\u0456\u0439\u043E\u0432\u0430\u043D\u043E \u0432 \u0431\u0443\u0444\u0435\u0440 \u043E\u0431\u043C\u0456\u043D\u0443",icon:"success"}),h("submitItemForm",i.result)}).catch(i=>{console.log(i),m({title:"Error!",icon:"error"})})}function F(){a.order.waybill&&axios.post(route("notify.waybill"),{phone:a.order.client.phone,waybill:a.order.waybill,order_id:a.order.id}).then(({data:i})=>{i.success===!0?m({icon:"success",title:"\u041D\u043E\u043C\u0435\u0440 \u043D\u0430\u043A\u043B\u0430\u0434\u043D\u043E\u0439 \u0443\u0441\u043F\u0435\u0448\u043D\u043E \u043E\u0442\u043F\u0440\u0430\u0432\u043B\u0435\u043D \u043A\u043B\u0438\u0435\u043D\u0442\u0443",text:i.info}):m({icon:"error",title:"\u041E\u0448\u0438\u0431\u043A\u0430",text:i.info}),axios.put(route("api.orders.update",a.order.id),a.order)}).catch(i=>{m({icon:"error",title:"\u041E\u0448\u0438\u0431\u043A\u0430",text:"\u041E\u0431\u0440\u0430\u0442\u0438\u0442\u0435\u0441\u044C \u043A \u0430\u0434\u043C\u0438\u043D\u0438\u0441\u0442\u0440\u0430\u0442\u043E\u0440\u0443"}),console.log(i)})}function T(){d.value.itemsModalAction==="create"?axios.post(route("api.order-items.add",a.order.id),d.value.item).then(({data:i})=>{g(),h("submitItemForm",i.result)}).catch(i=>console.log(i)):d.value.itemsModalAction==="edit"&&axios.put(route("api.order-items.update",d.value.item.id),d.value.item).then(({data:i})=>{g(),h("submitItemForm",i.result)}).catch(i=>console.log(i))}function L(){g(),d.value.itemsModalAction="create"}function g(){d.value.showItemsModal=!d.value.showItemsModal}function P(){axios.get(route("api.users.list.managers")).then(({data:i})=>{i.result.length&&i.result.forEach(t=>{d.value.managers.push({key:t.id,value:t.name})})}).catch(i=>console.log(i))}function W(i,t){m({title:"Are you sure?",icon:"warning",showCancelButton:!0}).then(n=>{n.isConfirmed&&axios.delete(route("api.order-items.destroy",{item_id:i,order_id:a.order.id})).then(()=>{a.order.items.splice(t,1),m({title:"Success",icon:"success"})}).catch(r=>{console.log(r),m({title:"Error",icon:"error"})})})}function K(i){g(),d.value.itemsModalAction="edit",axios.get(route("api.order-items.edit",i)).then(({data:t})=>d.value.item=t.result).catch(t=>console.log(t))}function R(){m({title:"\u0423\u0441\u043F\u0456\u0448\u043D\u043E",text:"\u041F\u043E\u0441\u0438\u043B\u0430\u043D\u043D\u044F \u043D\u0430 \u043E\u043F\u043B\u0430\u0442\u0443 \u043D\u0430\u0434\u0456\u0441\u043B\u0430\u043D\u043E \u043A\u043B\u0456\u0454\u043D\u0442\u0443",icon:"success"}),h("submitItemForm")}return(i,t)=>{const n=k("label-component"),r=k("input-component"),M=k("button-component"),v=k("select-component"),X=k("textarea-component");return u(),b("form",ee,[o("div",te,[o("div",oe,[s(n,{value:"\u0406\u043C\u02BC\u044F"}),s(r,{modelValue:e.order.client.name,"onUpdate:modelValue":t[0]||(t[0]=l=>e.order.client.name=l),type:"text",disabled:""},null,8,["modelValue"])]),o("div",le,[s(n,{value:"\u041F\u0440\u0456\u0437\u0432\u0438\u0449\u0435"}),s(r,{modelValue:e.order.client.last_name,"onUpdate:modelValue":t[1]||(t[1]=l=>e.order.client.last_name=l),type:"text",disabled:""},null,8,["modelValue"])]),o("div",se,[s(n,{value:"\u041F\u043E-\u0431\u0430\u0442\u044C\u043A\u043E\u0432\u0456"}),s(r,{modelValue:e.order.client.middle_name,"onUpdate:modelValue":t[2]||(t[2]=l=>e.order.client.middle_name=l),type:"text",disabled:""},null,8,["modelValue"])]),o("div",ie,[s(n,{value:"\xA0"}),s(M,{class:"w-full",type:"button",onClick:t[3]||(t[3]=l=>i.$emit("onEditClient"))},{default:U(()=>[de]),_:1})])]),o("div",ne,[o("div",ae,[s(n,{value:"\u0421\u0442\u0430\u0442\u0443\u0441 \u043A\u043B\u0456\u0454\u043D\u0442\u0430"}),s(r,{modelValue:e.order.client.status,"onUpdate:modelValue":t[4]||(t[4]=l=>e.order.client.status=l),type:"text",disabled:""},null,8,["modelValue"])]),o("div",re,[s(n,{value:"\u0422\u0435\u043B\u0435\u0444\u043E\u043D"}),s(r,{modelValue:e.order.client.phone,"onUpdate:modelValue":t[5]||(t[5]=l=>e.order.client.phone=l),type:"text",disabled:""},null,8,["modelValue"])])]),e.order.client.orders.length>1?(u(),b("div",ue,[s(J,{data:e.order.client.orders,statuses:e.statuses},null,8,["data","statuses"])])):y("",!0),me,o("div",ce,[o("div",ve,[s(n,{value:"\u0421\u0442\u0430\u0442\u0443\u0441 \u0437\u0430\u043C\u043E\u0432\u043B\u0435\u043D\u043D\u044F"}),s(v,{modelValue:e.order.status,"onUpdate:modelValue":t[6]||(t[6]=l=>e.order.status=l),options:d.value.statuses},null,8,["modelValue","options"])]),o("div",ye,[s(n,{value:"\u041C\u0435\u043D\u0435\u0434\u0436\u0435\u0440"}),s(v,{modelValue:e.order.manager_id,"onUpdate:modelValue":t[7]||(t[7]=l=>e.order.manager_id=l),options:d.value.managers},null,8,["modelValue","options"])]),o("div",be,[s(n,{value:"\u0421\u043F\u043E\u0441\u0456\u0431 \u043E\u043F\u043B\u0430\u0442\u0438"}),s(v,{modelValue:e.order.payment_method,"onUpdate:modelValue":t[8]||(t[8]=l=>e.order.payment_method=l),options:d.value.paymentMethods},null,8,["modelValue","options"])]),o("div",fe,[s(n,{value:"\u041D\u0430\u0433\u0430\u0434\u0443\u0432\u0430\u043D\u043D\u044F \u043F\u0440\u043E \u043F\u043E\u0441\u0438\u043B\u043A\u0443"}),s(v,{modelValue:e.order.parcel_reminder,"onUpdate:modelValue":t[9]||(t[9]=l=>e.order.parcel_reminder=l),options:p},null,8,["modelValue","options"])])]),o("div",he,[o("div",Ve,[o("div",ge,[s(n,{value:"\u041C\u0456\u0441\u0442\u043E"}),s(r,{modelValue:e.order.city,"onUpdate:modelValue":t[10]||(t[10]=l=>e.order.city=l),type:"text"},null,8,["modelValue"])]),o("div",ke,[s(n,{value:"\u041F\u043E\u0447\u0442\u043E\u0432\u0435 \u0432\u0456\u0434\u0434\u0456\u043B\u0435\u043D\u043D\u044F"}),s(r,{modelValue:e.order.postal_office,"onUpdate:modelValue":t[11]||(t[11]=l=>e.order.postal_office=l),type:"text"},null,8,["modelValue"])]),o("div",xe,[s(n,{value:"\u041D\u043E\u043C\u0435\u0440 \u043D\u0430\u043A\u043B\u0430\u0434\u043D\u043E\u0457"}),s(r,{modelValue:e.order.waybill,"onUpdate:modelValue":t[12]||(t[12]=l=>e.order.waybill=l),type:"text"},null,8,["modelValue"]),!e.order.sms_waybill_status&&e.order.waybill?(u(),b("div",pe,[o("a",{href:"javascript:",onClick:t[13]||(t[13]=S(l=>F(e.order.client.phone,e.order.waybill),["prevent"]))},"\u041E\u0442\u043F\u0440\u0430\u0432\u0438\u0442\u044C \u0422\u0422\u041D \u043A\u043B\u0438\u0435\u043D\u0442\u0443")])):y("",!0),e.order.sms_waybill_status?(u(),b("div",we,[Ie,o("a",{href:"javascript:",onClick:t[14]||(t[14]=S(l=>F(e.order.client.phone,e.order.waybill),["prevent"]))},"\u041E\u0442\u043F\u0440\u0430\u0432\u0438\u0442\u044C \u043F\u043E\u0432\u0442\u043E\u0440\u043D\u043E"),Me])):y("",!0)])]),o("div",_e,[s(n,{value:"\u041A\u043E\u043C\u0435\u043D\u0442\u0430\u0440"}),s(X,{rows:"10",modelValue:e.order.comment,"onUpdate:modelValue":t[15]||(t[15]=l=>e.order.comment=l)},null,8,["modelValue"])])]),o("div",Ue,[o("div",Ce,[o("div",Fe,[s(n,{value:"\u0414\u043E\u0434.\u043F\u0440\u043E\u0434\u0430\u0436 \u043F\u043E\u0432\u0456\u0442\u0440\u044F"}),s(v,{modelValue:e.order.sale_of_air,"onUpdate:modelValue":t[16]||(t[16]=l=>e.order.sale_of_air=l),options:p},null,8,["modelValue","options"])]),o("div",$e,[s(n,{value:"\u0421\u0443\u043C\u0430 \u0434\u043E\u043F.\u043F\u0440\u043E\u0434\u0430\u0436\u0443 \u043F\u043E\u0432\u0456\u0442\u0440\u044F (\u0433\u0440\u043D.)"}),e.order.sale_of_air?(u(),c(r,{key:0,modelValue:e.order.sale_of_air_price,"onUpdate:modelValue":t[17]||(t[17]=l=>e.order.sale_of_air_price=l),type:"number"},null,8,["modelValue"])):(u(),c(r,{key:1,modelValue:e.order.sale_of_air_price,"onUpdate:modelValue":t[18]||(t[18]=l=>e.order.sale_of_air_price=l),type:"number",disabled:""},null,8,["modelValue"]))])]),o("div",Se,[o("div",Oe,[s(n,{value:"\u0417\u043D\u0438\u0436\u043A\u0430"}),s(v,{modelValue:e.order.discount,"onUpdate:modelValue":t[19]||(t[19]=l=>e.order.discount=l),options:p},null,8,["modelValue","options"])]),o("div",je,[s(n,{value:"\u0421\u0443\u043C\u0430 \u0437\u043D\u0438\u0436\u043A\u0438 (\u0433\u0440\u043D.)"}),e.order.discount?(u(),c(r,{key:0,modelValue:e.order.discount_sum,"onUpdate:modelValue":t[20]||(t[20]=l=>e.order.discount_sum=l),type:"number"},null,8,["modelValue"])):(u(),c(r,{key:1,modelValue:e.order.discount_sum,"onUpdate:modelValue":t[21]||(t[21]=l=>e.order.discount_sum=l),type:"number",disabled:""},null,8,["modelValue"]))])]),o("div",Ae,[o("div",Ee,[s(n,{value:"\u041F\u0435\u0440\u0435\u0434\u043E\u043F\u043B\u0430\u0442\u0430"}),s(v,{modelValue:e.order.prepayment,"onUpdate:modelValue":t[22]||(t[22]=l=>e.order.prepayment=l),options:p,disabled:""},null,8,["modelValue","options"])]),o("div",Be,[s(n,{value:"\u0421\u0443\u043C\u0430 \u043F\u0435\u0440\u0435\u0434\u043E\u043F\u043B\u0430\u0442\u0438 (\u0433\u0440\u043D.)"}),s(r,{modelValue:e.order.prepayment_sum,"onUpdate:modelValue":t[23]||(t[23]=l=>e.order.prepayment_sum=l),type:"number",disabled:""},null,8,["modelValue"]),e.order.wfp_payment?(u(),b("span",De,"\u041E\u043F\u043B\u0430\u0447\u0435\u043D\u043E \u043D\u0430 \u0441\u0430\u0439\u0442\u0456")):y("",!0)])])]),o("div",Ne,[s(M,{type:"button",onClick:L},{default:U(()=>[ze]),_:1}),(u(),c(O(f(E)),{item:d.value.item,size:"medium",onCloseModal:g,onSubmitItemForm:T},null,40,["item"]))]),s(H,{data:e.order.items,onEditOrderItem:K,onDestroyOrderItem:W},null,8,["data"]),o("div",Te,[o("div",Le,[Pe,o("p",We,I(e.order.total_count),1)]),o("div",Ke,[Re,o("p",Xe,I(i.$filters.formatMoney(e.order.total_price)),1)]),o("div",Ye,[qe,o("p",Ge,I(f(A)),1)]),o("div",He,[Je,o("p",Qe,I(e.order.promo_code?e.order.promo_code:"\u0412\u0456\u0434\u0441\u0443\u0442\u043D\u0456\u0439"),1)])]),f(V)("show-invoices")?(u(),b("div",Ze,[f(V)("create-invoices")?(u(),c(M,{key:0,type:"button",onClick:N,class:"my-4"},{default:U(()=>[et]),_:1})):y("",!0),e.order.invoices.length?(u(),c(Q,{key:1,data:e.order.invoices,statuses:e.invoiceStatuses,"can-destroy":f(V)("destroy-invoices"),onOnDestroy:D,onOnSendInvoiceSms:R},null,8,["data","statuses","can-destroy"])):y("",!0),(u(),c(O(f(B)),{item:d.value.invoiceItem,onCloseModal:w,onSubmitForm:z,onDeclineForm:w},null,40,["item"]))])):y("",!0)])}}};export{rt as default};