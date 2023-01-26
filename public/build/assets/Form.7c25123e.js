import{z as _,ay as $,y as Y,C as q,L as k,M as o,K as s,X as U,_ as b,ab as S,a0 as m,bh as O,P as f,O as p,Y as x,B as j,V as g,S as u}from"./___vite-browser-external_commonjs-proxy.6a4e71ef.js";import G from"./ItemsModal.dd2979fb.js";import H from"./ItemsTable.ae2e90e5.js";import J from"./ClientOrders.9fc75976.js";import Q from"./Table.02816539.js";import Z from"./Modal.9ed37b2d.js";import"./ItemsForm.090142c6.js";import"./Form.715a186a.js";const ee={class:"grid gap-4"},te={class:"grid grid-cols-1 md:grid-cols-4 gap-4"},oe={class:"block"},le={class:"block"},se={class:"block"},ie={class:"block"},de=x(" \u041A\u0430\u0440\u0442\u043A\u0430 \u043A\u043B\u0456\u0454\u043D\u0442\u0430 "),ne={class:"grid grid-cols-1 md:grid-cols-2 gap-4"},ae={class:"block"},re={class:"block"},ue={key:0,class:"block"},ce=o("hr",null,null,-1),me={class:"grid grid-cols-1 md:grid-cols-4 mb-5"},ve={class:"block mb-5 md:mr-5"},ye={class:"block mb-5 md:mr-5"},be={class:"block mb-5 md:mr-5"},fe={class:"block mb-5"},he={class:"grid grid-cols-1 md:grid-cols-2 mb-10"},Ve={class:"block md:mr-5"},ke={class:"block mb-5"},ge={class:"block mb-5"},xe={class:"block"},we={key:0},pe={key:1},Ie=x(" \u0422\u0422\u041D \u043E\u0442\u043F\u0440\u0430\u0432\u043B\u0435\u043D\u0430 ("),Me=x(") "),_e={class:"block"},Ue={class:"mb-7"},Ce={class:"grid grid-cols-2"},Fe={class:"block mb-5 mr-5"},$e={class:"block mb-5"},Se={class:"grid grid-cols-2"},Oe={class:"block mb-5 mr-5"},je={class:"block mb-5"},Ee={class:"grid grid-cols-2"},Ae={class:"block mb-5 mr-5"},Be={class:"block mb-5"},De={class:"block mb-5"},Ne=x("\u0414\u043E\u0434\u0430\u0442\u0438 \u0442\u043E\u0432\u0430\u0440"),ze={class:"grid grid-cols-1 md:grid-cols-4 mt-5"},Te={class:"flex justify-center"},Le=o("p",{class:"font-semibold text-l text-gray-900 dark:text-white"}," \u041A\u0456\u043B\u044C\u043A\u0456\u0441\u0442\u044C \u0442\u043E\u0432\u0430\u0440\u0456\u0432:\xA0 ",-1),Pe={class:"text-l text-gray-900 dark:text-white"},We={class:"flex justify-center"},Ke=o("p",{class:"font-semibold text-l text-gray-900 dark:text-white"}," \u0417\u0430\u0433\u0430\u043B\u044C\u043D\u0430 \u0446\u0456\u043D\u0430:\xA0 ",-1),Re={class:"text-l text-gray-900 dark:text-white"},Xe={class:"flex justify-center"},Ye=o("p",{class:"font-semibold text-l text-gray-900 dark:text-white"}," \u0426\u0456\u043D\u0430 \u043D\u0430 \u043F\u043E\u0441\u0438\u043B\u043A\u0443:\xA0 ",-1),qe={class:"text-l text-gray-900 dark:text-white"},Ge={class:"flex justify-center"},He=o("p",{class:"font-semibold text-l text-gray-900 dark:text-white"}," \u041F\u0440\u043E\u043C\u043E-\u043A\u043E\u0434:\xA0 ",-1),Je={class:"text-l text-gray-900 dark:text-white"},Qe={key:1,class:"block"},Ze=x(" \u0414\u043E\u0434\u0430\u0442\u0438 \u0440\u0430\u0445\u0443\u043D\u043E\u043A "),at={__name:"Form",props:["order","statuses","paymentMethods","invoiceStatuses"],emits:["submitItemForm","onEditClient"],setup(e,{emit:v}){const r=e,c=j("$swal"),h=j("$can"),E=_(()=>r.order.prepayment_sum?r.order.total_price-r.order.prepayment_sum:r.order.total_price),C=$({order_id:r.order.id,sum:null}),d=Y({showItemsModal:!1,showInvoicesModal:!1,itemsModalAction:"",item:{count:1,size:"",color:"",product_id:null},invoiceItem:{},statuses:[],managers:[],paymentMethods:[]});q(()=>{P();for(const[i,t]of Object.entries(r.statuses))d.value.statuses.push({key:i,value:t});for(const[i,t]of Object.entries(r.paymentMethods))d.value.paymentMethods.push({key:i,value:t})});const A=_(()=>d.value.showItemsModal?G:null),B=_(()=>d.value.showInvoicesModal?Z:null),I=$([{key:0,value:"\u041D\u0456"},{key:1,value:"\u0422\u0430\u043A"}]);function w(){d.value.showInvoicesModal=!d.value.showInvoicesModal}function D(i){h("destroy-invoices")&&c({title:"\u0412\u0438\u0434\u0430\u043B\u0438\u0442\u0438?",icon:"warning",showCancelButton:!0}).then(t=>{t.isConfirmed&&axios.delete(route("api.invoices.destroy",i)).then(()=>{v("submitItemForm"),c({icon:"success",title:"Destroyed!"})}).catch(n=>{console.log(n),c({icon:"error",title:"Error!"})})})}function N(){h("create-invoices")&&(d.value.invoiceItem=C,w())}function z(){axios.post(route("api.invoices.create"),d.value.invoiceItem).then(({data:i})=>{d.value.invoiceItem=C,w(),navigator.clipboard.writeText(i.result.data.invoice_url),c({title:"\u0423\u0441\u043F\u0456\u0448\u043D\u043E!",text:"\u0420\u0430\u0445\u0443\u043D\u043E\u043A \u0431\u0443\u0432 \u0443\u0441\u043F\u0456\u0448\u043D\u043E \u0441\u0442\u0432\u043E\u0440\u0435\u043D\u0438\u0439, \u043F\u043E\u0441\u0438\u043B\u0430\u043D\u043D\u044F \u043D\u0430 \u043E\u043F\u043B\u0430\u0442\u0443 \u0441\u043A\u043E\u043F\u0456\u0439\u043E\u0432\u0430\u043D\u043E \u0432 \u0431\u0443\u0444\u0435\u0440 \u043E\u0431\u043C\u0456\u043D\u0443",icon:"success"}),v("submitItemForm",i.result)}).catch(i=>{console.log(i),c({title:"Error!",icon:"error"})})}function F(){r.order.waybill&&axios.post(route("notify.waybill"),{phone:r.order.client.phone,waybill:r.order.waybill,order_id:r.order.id}).then(({data:i})=>{i.success===!0?c({icon:"success",title:"\u041D\u043E\u043C\u0435\u0440 \u043D\u0430\u043A\u043B\u0430\u0434\u043D\u043E\u0439 \u0443\u0441\u043F\u0435\u0448\u043D\u043E \u043E\u0442\u043F\u0440\u0430\u0432\u043B\u0435\u043D \u043A\u043B\u0438\u0435\u043D\u0442\u0443",text:i.info}):c({icon:"error",title:"\u041E\u0448\u0438\u0431\u043A\u0430",text:i.info}),axios.put(route("api.orders.update",r.order.id),r.order)}).catch(i=>{c({icon:"error",title:"\u041E\u0448\u0438\u0431\u043A\u0430",text:"\u041E\u0431\u0440\u0430\u0442\u0438\u0442\u0435\u0441\u044C \u043A \u0430\u0434\u043C\u0438\u043D\u0438\u0441\u0442\u0440\u0430\u0442\u043E\u0440\u0443"}),console.log(i)})}function T(){d.value.itemsModalAction==="create"?axios.post(route("api.order-items.add",r.order.id),d.value.item).then(({data:i})=>{V(),v("submitItemForm",i.result)}).catch(i=>console.log(i)):d.value.itemsModalAction==="edit"&&axios.put(route("api.order-items.update",d.value.item.id),d.value.item).then(({data:i})=>{V(),v("submitItemForm",i.result)}).catch(i=>console.log(i))}function L(){V(),d.value.itemsModalAction="create"}function V(){d.value.showItemsModal=!d.value.showItemsModal}function P(){axios.get(route("api.users.list.managers")).then(({data:i})=>{i.result.length&&i.result.forEach(t=>{d.value.managers.push({key:t.id,value:t.name})})}).catch(i=>console.log(i))}function W(i,t){c({title:"Are you sure?",icon:"warning",showCancelButton:!0}).then(n=>{n.isConfirmed&&axios.delete(route("api.order-items.destroy",{item_id:i,order_id:r.order.id})).then(()=>{v("submitItemForm"),c({title:"Success",icon:"success"})}).catch(a=>{console.log(a),c({title:"Error",icon:"error"})})})}function K(i){V(),d.value.itemsModalAction="edit",axios.get(route("api.order-items.edit",i)).then(({data:t})=>d.value.item=t.result).catch(t=>console.log(t))}function R(){c({title:"\u0423\u0441\u043F\u0456\u0448\u043D\u043E",text:"\u041F\u043E\u0441\u0438\u043B\u0430\u043D\u043D\u044F \u043D\u0430 \u043E\u043F\u043B\u0430\u0442\u0443 \u043D\u0430\u0434\u0456\u0441\u043B\u0430\u043D\u043E \u043A\u043B\u0456\u0454\u043D\u0442\u0443",icon:"success"}),v("submitItemForm")}return(i,t)=>{const n=g("label-component"),a=g("input-component"),M=g("button-component"),y=g("select-component"),X=g("textarea-component");return u(),k("form",ee,[o("div",te,[o("div",oe,[s(n,{value:"\u0406\u043C\u02BC\u044F"}),s(a,{modelValue:e.order.client.name,"onUpdate:modelValue":t[0]||(t[0]=l=>e.order.client.name=l),type:"text",disabled:""},null,8,["modelValue"])]),o("div",le,[s(n,{value:"\u041F\u0440\u0456\u0437\u0432\u0438\u0449\u0435"}),s(a,{modelValue:e.order.client.last_name,"onUpdate:modelValue":t[1]||(t[1]=l=>e.order.client.last_name=l),type:"text",disabled:""},null,8,["modelValue"])]),o("div",se,[s(n,{value:"\u041F\u043E-\u0431\u0430\u0442\u044C\u043A\u043E\u0432\u0456"}),s(a,{modelValue:e.order.client.middle_name,"onUpdate:modelValue":t[2]||(t[2]=l=>e.order.client.middle_name=l),type:"text",disabled:""},null,8,["modelValue"])]),o("div",ie,[s(n,{value:"\xA0"}),s(M,{class:"w-full",type:"button",onClick:t[3]||(t[3]=l=>i.$emit("onEditClient"))},{default:U(()=>[de]),_:1})])]),o("div",ne,[o("div",ae,[s(n,{value:"\u0421\u0442\u0430\u0442\u0443\u0441 \u043A\u043B\u0456\u0454\u043D\u0442\u0430"}),s(a,{modelValue:e.order.client.status,"onUpdate:modelValue":t[4]||(t[4]=l=>e.order.client.status=l),type:"text",disabled:""},null,8,["modelValue"])]),o("div",re,[s(n,{value:"\u0422\u0435\u043B\u0435\u0444\u043E\u043D"}),s(a,{modelValue:e.order.client.phone,"onUpdate:modelValue":t[5]||(t[5]=l=>e.order.client.phone=l),type:"text",disabled:""},null,8,["modelValue"])])]),e.order.client.orders.length>1?(u(),k("div",ue,[s(J,{data:e.order.client.orders,statuses:e.statuses},null,8,["data","statuses"])])):b("",!0),ce,o("div",me,[o("div",ve,[s(n,{value:"\u0421\u0442\u0430\u0442\u0443\u0441 \u0437\u0430\u043C\u043E\u0432\u043B\u0435\u043D\u043D\u044F"}),s(y,{modelValue:e.order.status,"onUpdate:modelValue":t[6]||(t[6]=l=>e.order.status=l),options:d.value.statuses},null,8,["modelValue","options"])]),o("div",ye,[s(n,{value:"\u041C\u0435\u043D\u0435\u0434\u0436\u0435\u0440"}),s(y,{modelValue:e.order.manager_id,"onUpdate:modelValue":t[7]||(t[7]=l=>e.order.manager_id=l),options:d.value.managers},null,8,["modelValue","options"])]),o("div",be,[s(n,{value:"\u0421\u043F\u043E\u0441\u0456\u0431 \u043E\u043F\u043B\u0430\u0442\u0438"}),s(y,{modelValue:e.order.payment_method,"onUpdate:modelValue":t[8]||(t[8]=l=>e.order.payment_method=l),options:d.value.paymentMethods},null,8,["modelValue","options"])]),o("div",fe,[s(n,{value:"\u041D\u0430\u0433\u0430\u0434\u0443\u0432\u0430\u043D\u043D\u044F \u043F\u0440\u043E \u043F\u043E\u0441\u0438\u043B\u043A\u0443"}),s(y,{modelValue:e.order.parcel_reminder,"onUpdate:modelValue":t[9]||(t[9]=l=>e.order.parcel_reminder=l),options:I},null,8,["modelValue","options"])])]),o("div",he,[o("div",Ve,[o("div",ke,[s(n,{value:"\u041C\u0456\u0441\u0442\u043E"}),s(a,{modelValue:e.order.city,"onUpdate:modelValue":t[10]||(t[10]=l=>e.order.city=l),type:"text"},null,8,["modelValue"])]),o("div",ge,[s(n,{value:"\u041F\u043E\u0447\u0442\u043E\u0432\u0435 \u0432\u0456\u0434\u0434\u0456\u043B\u0435\u043D\u043D\u044F"}),s(a,{modelValue:e.order.postal_office,"onUpdate:modelValue":t[11]||(t[11]=l=>e.order.postal_office=l),type:"text"},null,8,["modelValue"])]),o("div",xe,[s(n,{value:"\u041D\u043E\u043C\u0435\u0440 \u043D\u0430\u043A\u043B\u0430\u0434\u043D\u043E\u0457"}),s(a,{modelValue:e.order.waybill,"onUpdate:modelValue":t[12]||(t[12]=l=>e.order.waybill=l),type:"text"},null,8,["modelValue"]),!e.order.sms_waybill_status&&e.order.waybill?(u(),k("div",we,[o("a",{href:"javascript:",onClick:t[13]||(t[13]=S(l=>F(e.order.client.phone,e.order.waybill),["prevent"]))},"\u041E\u0442\u043F\u0440\u0430\u0432\u0438\u0442\u044C \u0422\u0422\u041D \u043A\u043B\u0438\u0435\u043D\u0442\u0443")])):b("",!0),e.order.sms_waybill_status?(u(),k("div",pe,[Ie,o("a",{href:"javascript:",onClick:t[14]||(t[14]=S(l=>F(e.order.client.phone,e.order.waybill),["prevent"]))},"\u041E\u0442\u043F\u0440\u0430\u0432\u0438\u0442\u044C \u043F\u043E\u0432\u0442\u043E\u0440\u043D\u043E"),Me])):b("",!0)])]),o("div",_e,[s(n,{value:"\u041A\u043E\u043C\u0435\u043D\u0442\u0430\u0440"}),s(X,{rows:"10",modelValue:e.order.comment,"onUpdate:modelValue":t[15]||(t[15]=l=>e.order.comment=l)},null,8,["modelValue"])])]),o("div",Ue,[o("div",Ce,[o("div",Fe,[s(n,{value:"\u0414\u043E\u0434.\u043F\u0440\u043E\u0434\u0430\u0436 \u043F\u043E\u0432\u0456\u0442\u0440\u044F"}),s(y,{modelValue:e.order.sale_of_air,"onUpdate:modelValue":t[16]||(t[16]=l=>e.order.sale_of_air=l),options:I},null,8,["modelValue","options"])]),o("div",$e,[s(n,{value:"\u0421\u0443\u043C\u0430 \u0434\u043E\u043F.\u043F\u0440\u043E\u0434\u0430\u0436\u0443 \u043F\u043E\u0432\u0456\u0442\u0440\u044F (\u0433\u0440\u043D.)"}),e.order.sale_of_air?(u(),m(a,{key:0,modelValue:e.order.sale_of_air_price,"onUpdate:modelValue":t[17]||(t[17]=l=>e.order.sale_of_air_price=l),type:"number"},null,8,["modelValue"])):(u(),m(a,{key:1,modelValue:e.order.sale_of_air_price,"onUpdate:modelValue":t[18]||(t[18]=l=>e.order.sale_of_air_price=l),type:"number",disabled:""},null,8,["modelValue"]))])]),o("div",Se,[o("div",Oe,[s(n,{value:"\u0417\u043D\u0438\u0436\u043A\u0430"}),s(y,{modelValue:e.order.discount,"onUpdate:modelValue":t[19]||(t[19]=l=>e.order.discount=l),options:I},null,8,["modelValue","options"])]),o("div",je,[s(n,{value:"\u0421\u0443\u043C\u0430 \u0437\u043D\u0438\u0436\u043A\u0438 (\u0433\u0440\u043D.)"}),e.order.discount?(u(),m(a,{key:0,modelValue:e.order.discount_sum,"onUpdate:modelValue":t[20]||(t[20]=l=>e.order.discount_sum=l),type:"number"},null,8,["modelValue"])):(u(),m(a,{key:1,modelValue:e.order.discount_sum,"onUpdate:modelValue":t[21]||(t[21]=l=>e.order.discount_sum=l),type:"number",disabled:""},null,8,["modelValue"]))])]),o("div",Ee,[o("div",Ae,[s(n,{value:"\u041E\u043F\u043B\u0430\u0442\u0430 \u043D\u0430 \u0441\u0430\u0439\u0442\u0456"}),e.order.wfp_payment_sum?(u(),m(a,{key:0,value:"\u041E\u043F\u043B\u0430\u0447\u0435\u043D\u043E",type:"text",disabled:""})):(u(),m(a,{key:1,value:"\u041D\u0435 \u043F\u043B\u0430\u0447\u0435\u043D\u043E",type:"text",disabled:""}))]),o("div",Be,[s(n,{value:"\u0417\u0430\u0433\u0430\u043B\u044C\u043D\u0430 \u0441\u0443\u043C\u0430 \u043F\u0435\u0440\u0435\u0434\u043E\u043F\u043B\u0430\u0442\u0438 (\u0433\u0440\u043D.)"}),s(a,{modelValue:e.order.prepayment_sum,"onUpdate:modelValue":t[22]||(t[22]=l=>e.order.prepayment_sum=l),type:"number",disabled:""},null,8,["modelValue"])])])]),o("div",De,[s(M,{type:"button",onClick:L},{default:U(()=>[Ne]),_:1}),(u(),m(O(f(A)),{item:d.value.item,size:"medium",onCloseModal:V,onSubmitItemForm:T},null,40,["item"]))]),s(H,{data:e.order.items,onEditOrderItem:K,onDestroyOrderItem:W},null,8,["data"]),o("div",ze,[o("div",Te,[Le,o("p",Pe,p(e.order.total_count),1)]),o("div",We,[Ke,o("p",Re,p(i.$filters.formatMoney(e.order.total_price)),1)]),o("div",Xe,[Ye,o("p",qe,p(f(E)),1)]),o("div",Ge,[He,o("p",Je,p(e.order.promo_code?e.order.promo_code:"\u0412\u0456\u0434\u0441\u0443\u0442\u043D\u0456\u0439"),1)])]),f(h)("show-invoices")?(u(),k("div",Qe,[f(h)("create-invoices")?(u(),m(M,{key:0,type:"button",onClick:N,class:"my-4"},{default:U(()=>[Ze]),_:1})):b("",!0),e.order.invoices.length?(u(),m(Q,{key:1,data:e.order.invoices,statuses:e.invoiceStatuses,"can-destroy":f(h)("destroy-invoices"),onOnDestroy:D,onOnSendInvoiceSms:R},null,8,["data","statuses","can-destroy"])):b("",!0),(u(),m(O(f(B)),{item:d.value.invoiceItem,onCloseModal:w,onSubmitForm:z,onDeclineForm:w},null,40,["item"]))])):b("",!0)])}}};export{at as default};