import{y as E,G as B,z,az as D,L as V,M as l,K as d,W as U,Z as k,ac as M,a0 as u,bg as N,P as S,O as h,X as g,$ as f,S as r,D as L}from"./___vite-browser-external_commonjs-proxy.bd54111c.js";import P from"./ItemsModal.a274fc2d.js";import T from"./ItemsTable.4e89c5c3.js";import W from"./ClientOrders.9abf38b7.js";import"./ItemsForm.502137b5.js";const G={class:"grid gap-4"},K={class:"grid grid-cols-1 md:grid-cols-4 gap-4"},R={class:"block"},X={class:"block"},Z={class:"block"},q={class:"block"},H=g(" \u041A\u0430\u0440\u0442\u043A\u0430 \u043A\u043B\u0456\u0454\u043D\u0442\u0430 "),J={class:"grid grid-cols-1 md:grid-cols-2 gap-4"},Q={class:"block"},Y={class:"block"},_={key:0,class:"block"},ee=l("hr",null,null,-1),te={class:"grid grid-cols-1 md:grid-cols-4 mb-5"},oe={class:"block mb-5 md:mr-5"},le={class:"block mb-5 md:mr-5"},de={class:"block mb-5 md:mr-5"},se={class:"block mb-5"},ae={class:"grid grid-cols-1 md:grid-cols-2 mb-10"},ne={class:"block md:mr-5"},ie={class:"block mb-5"},re={class:"block mb-5"},me={class:"block"},ue={key:0},ce={key:1},ve=g(" \u0422\u0422\u041D \u043E\u0442\u043F\u0440\u0430\u0432\u043B\u0435\u043D\u0430 ("),ye=g(") "),be={class:"block"},Ve={class:"mb-7"},fe={class:"grid grid-cols-2"},ke={class:"block mb-5 mr-5"},ge={class:"block mb-5"},he={class:"grid grid-cols-2"},xe={class:"block mb-5 mr-5"},pe={class:"block mb-5"},we={key:2},Ue={class:"grid grid-cols-2"},Me={class:"block mb-5 mr-5"},Ce={class:"block mb-5"},Ie={class:"block mb-5"},$e=g("\u0414\u043E\u0434\u0430\u0442\u0438 \u0442\u043E\u0432\u0430\u0440"),je={class:"grid grid-cols-1 md:grid-cols-3 mt-5"},Oe={class:"flex justify-center"},Fe=l("p",{class:"font-semibold text-l text-gray-900 dark:text-white"}," \u041A\u0456\u043B\u044C\u043A\u0456\u0441\u0442\u044C \u0442\u043E\u0432\u0430\u0440\u0456\u0432:\xA0 ",-1),Ae={class:"text-l text-gray-900 dark:text-white"},Ee={class:"flex justify-center"},Be=l("p",{class:"font-semibold text-l text-gray-900 dark:text-white"}," \u0417\u0430\u0433\u0430\u043B\u044C\u043D\u0430 \u0446\u0456\u043D\u0430:\xA0 ",-1),ze={class:"text-l text-gray-900 dark:text-white"},De={class:"flex justify-center"},Ne=l("p",{class:"font-semibold text-l text-gray-900 dark:text-white"}," \u041F\u0440\u043E\u043C\u043E-\u043A\u043E\u0434:\xA0 ",-1),Se={class:"text-l text-gray-900 dark:text-white"},Ke={__name:"Form",props:["order","statuses","paymentMethods"],emits:["submitItemForm","onEditClient"],setup(e,{emit:x}){const m=e,v=L("$swal"),n=E({showItemsModal:!1,itemsModalAction:"",item:{count:1,size:"",color:"",product_id:null},statuses:[],managers:[],paymentMethods:[]});B(()=>{j();for(const[s,t]of Object.entries(m.statuses))n.value.statuses.push({key:s,value:t});for(const[s,t]of Object.entries(m.paymentMethods))n.value.paymentMethods.push({key:s,value:t})});const C=z(()=>n.value.showItemsModal?P:null),y=D([{key:0,value:"\u041D\u0456"},{key:1,value:"\u0422\u0430\u043A"}]);function p(){m.order.waybill&&axios.post(route("notify.waybill"),{phone:m.order.client.phone,waybill:m.order.waybill,order_id:m.order.id}).then(({data:s})=>{s.success===!0?v({icon:"success",title:"\u041D\u043E\u043C\u0435\u0440 \u043D\u0430\u043A\u043B\u0430\u0434\u043D\u043E\u0439 \u0443\u0441\u043F\u0435\u0448\u043D\u043E \u043E\u0442\u043F\u0440\u0430\u0432\u043B\u0435\u043D \u043A\u043B\u0438\u0435\u043D\u0442\u0443",text:s.info}):v({icon:"error",title:"\u041E\u0448\u0438\u0431\u043A\u0430",text:s.info}),axios.put(route("api.orders.update",m.order.id),m.order)}).catch(s=>{v({icon:"error",title:"\u041E\u0448\u0438\u0431\u043A\u0430",text:"\u041E\u0431\u0440\u0430\u0442\u0438\u0442\u0435\u0441\u044C \u043A \u0430\u0434\u043C\u0438\u043D\u0438\u0441\u0442\u0440\u0430\u0442\u043E\u0440\u0443"}),console.log(s)})}function I(){n.value.itemsModalAction==="create"?axios.post(route("api.order-items.add",m.order.id),n.value.item).then(({data:s})=>{b(),x("submitItemForm",s.result)}).catch(s=>console.log(s)):n.value.itemsModalAction==="edit"&&axios.put(route("api.order-items.update",n.value.item.id),n.value.item).then(({data:s})=>{b(),x("submitItemForm",s.result)}).catch(s=>console.log(s))}function $(){b(),n.value.itemsModalAction="create"}function b(){n.value.showItemsModal=!n.value.showItemsModal}function j(){axios.get(route("api.users.list.managers")).then(({data:s})=>{s.result.length&&s.result.forEach(t=>{n.value.managers.push({key:t.id,value:t.name})})}).catch(s=>console.log(s))}function O(s,t){v({title:"Are you sure?",icon:"warning",showCancelButton:!0}).then(a=>{a.isConfirmed&&axios.delete(route("api.order-items.destroy",{item_id:s,order_id:m.order.id})).then(()=>{m.order.items.splice(t,1),v({title:"Success",icon:"success"})}).catch(i=>{console.log(i),v({title:"Error",icon:"error"})})})}function F(s){b(),n.value.itemsModalAction="edit",axios.get(route("api.order-items.edit",s)).then(({data:t})=>n.value.item=t.result).catch(t=>console.log(t))}return(s,t)=>{const a=f("label-component"),i=f("input-component"),w=f("button-component"),c=f("select-component"),A=f("textarea-component");return r(),V("form",G,[l("div",K,[l("div",R,[d(a,{value:"\u0406\u043C\u02BC\u044F"}),d(i,{modelValue:e.order.client.name,"onUpdate:modelValue":t[0]||(t[0]=o=>e.order.client.name=o),type:"text",disabled:""},null,8,["modelValue"])]),l("div",X,[d(a,{value:"\u041F\u0440\u0456\u0437\u0432\u0438\u0449\u0435"}),d(i,{modelValue:e.order.client.last_name,"onUpdate:modelValue":t[1]||(t[1]=o=>e.order.client.last_name=o),type:"text",disabled:""},null,8,["modelValue"])]),l("div",Z,[d(a,{value:"\u041F\u043E-\u0431\u0430\u0442\u044C\u043A\u043E\u0432\u0456"}),d(i,{modelValue:e.order.client.middle_name,"onUpdate:modelValue":t[2]||(t[2]=o=>e.order.client.middle_name=o),type:"text",disabled:""},null,8,["modelValue"])]),l("div",q,[d(a,{value:"\xA0"}),d(w,{class:"w-full",type:"button",onClick:t[3]||(t[3]=o=>s.$emit("onEditClient"))},{default:U(()=>[H]),_:1})])]),l("div",J,[l("div",Q,[d(a,{value:"\u0421\u0442\u0430\u0442\u0443\u0441 \u043A\u043B\u0456\u0454\u043D\u0442\u0430"}),d(i,{modelValue:e.order.client.status,"onUpdate:modelValue":t[4]||(t[4]=o=>e.order.client.status=o),type:"text",disabled:""},null,8,["modelValue"])]),l("div",Y,[d(a,{value:"\u0422\u0435\u043B\u0435\u0444\u043E\u043D"}),d(i,{modelValue:e.order.client.phone,"onUpdate:modelValue":t[5]||(t[5]=o=>e.order.client.phone=o),type:"text",disabled:""},null,8,["modelValue"])])]),e.order.client.orders.length>1?(r(),V("div",_,[d(W,{data:e.order.client.orders,statuses:e.statuses},null,8,["data","statuses"])])):k("",!0),ee,l("div",te,[l("div",oe,[d(a,{value:"\u0421\u0442\u0430\u0442\u0443\u0441 \u0437\u0430\u043C\u043E\u0432\u043B\u0435\u043D\u043D\u044F"}),d(c,{modelValue:e.order.status,"onUpdate:modelValue":t[6]||(t[6]=o=>e.order.status=o),options:n.value.statuses},null,8,["modelValue","options"])]),l("div",le,[d(a,{value:"\u041C\u0435\u043D\u0435\u0434\u0436\u0435\u0440"}),d(c,{modelValue:e.order.manager_id,"onUpdate:modelValue":t[7]||(t[7]=o=>e.order.manager_id=o),options:n.value.managers},null,8,["modelValue","options"])]),l("div",de,[d(a,{value:"\u0421\u043F\u043E\u0441\u0456\u0431 \u043E\u043F\u043B\u0430\u0442\u0438"}),d(c,{modelValue:e.order.payment_method,"onUpdate:modelValue":t[8]||(t[8]=o=>e.order.payment_method=o),options:n.value.paymentMethods},null,8,["modelValue","options"])]),l("div",se,[d(a,{value:"\u041D\u0430\u0433\u0430\u0434\u0443\u0432\u0430\u043D\u043D\u044F \u043F\u0440\u043E \u043F\u043E\u0441\u0438\u043B\u043A\u0443"}),d(c,{modelValue:e.order.parcel_reminder,"onUpdate:modelValue":t[9]||(t[9]=o=>e.order.parcel_reminder=o),options:y},null,8,["modelValue","options"])])]),l("div",ae,[l("div",ne,[l("div",ie,[d(a,{value:"\u041C\u0456\u0441\u0442\u043E"}),d(i,{modelValue:e.order.city,"onUpdate:modelValue":t[10]||(t[10]=o=>e.order.city=o),type:"text"},null,8,["modelValue"])]),l("div",re,[d(a,{value:"\u041F\u043E\u0447\u0442\u043E\u0432\u0435 \u0432\u0456\u0434\u0434\u0456\u043B\u0435\u043D\u043D\u044F"}),d(i,{modelValue:e.order.postal_office,"onUpdate:modelValue":t[11]||(t[11]=o=>e.order.postal_office=o),type:"text"},null,8,["modelValue"])]),l("div",me,[d(a,{value:"\u041D\u043E\u043C\u0435\u0440 \u043D\u0430\u043A\u043B\u0430\u0434\u043D\u043E\u0457"}),d(i,{modelValue:e.order.waybill,"onUpdate:modelValue":t[12]||(t[12]=o=>e.order.waybill=o),type:"text"},null,8,["modelValue"]),!e.order.sms_waybill_status&&e.order.waybill?(r(),V("div",ue,[l("a",{href:"javascript:",onClick:t[13]||(t[13]=M(o=>p(e.order.client.phone,e.order.waybill),["prevent"]))},"\u041E\u0442\u043F\u0440\u0430\u0432\u0438\u0442\u044C \u0422\u0422\u041D \u043A\u043B\u0438\u0435\u043D\u0442\u0443")])):k("",!0),e.order.sms_waybill_status?(r(),V("div",ce,[ve,l("a",{href:"javascript:",onClick:t[14]||(t[14]=M(o=>p(e.order.client.phone,e.order.waybill),["prevent"]))},"\u041E\u0442\u043F\u0440\u0430\u0432\u0438\u0442\u044C \u043F\u043E\u0432\u0442\u043E\u0440\u043D\u043E"),ye])):k("",!0)])]),l("div",be,[d(a,{value:"\u041A\u043E\u043C\u0435\u043D\u0442\u0430\u0440"}),d(A,{rows:"10",modelValue:e.order.comment,"onUpdate:modelValue":t[15]||(t[15]=o=>e.order.comment=o)},null,8,["modelValue"])])]),l("div",Ve,[l("div",fe,[l("div",ke,[d(a,{value:"\u0414\u043E\u0434.\u043F\u0440\u043E\u0434\u0430\u0436 \u043F\u043E\u0432\u0456\u0442\u0440\u044F"}),d(c,{modelValue:e.order.sale_of_air,"onUpdate:modelValue":t[16]||(t[16]=o=>e.order.sale_of_air=o),options:y},null,8,["modelValue","options"])]),l("div",ge,[d(a,{value:"\u0421\u0443\u043C\u0430 \u0434\u043E\u043F.\u043F\u0440\u043E\u0434\u0430\u0436\u0443 \u043F\u043E\u0432\u0456\u0442\u0440\u044F (\u0433\u0440\u043D.)"}),e.order.sale_of_air?(r(),u(i,{key:0,modelValue:e.order.sale_of_air_price,"onUpdate:modelValue":t[17]||(t[17]=o=>e.order.sale_of_air_price=o),type:"number"},null,8,["modelValue"])):(r(),u(i,{key:1,modelValue:e.order.sale_of_air_price,"onUpdate:modelValue":t[18]||(t[18]=o=>e.order.sale_of_air_price=o),type:"number",disabled:""},null,8,["modelValue"]))])]),l("div",he,[l("div",xe,[d(a,{value:"\u041F\u0435\u0440\u0435\u0434\u043E\u043F\u043B\u0430\u0442\u0430"}),e.order.wfp_payment?(r(),u(c,{key:1,modelValue:e.order.prepayment,"onUpdate:modelValue":t[20]||(t[20]=o=>e.order.prepayment=o),options:y,disabled:""},null,8,["modelValue","options"])):(r(),u(c,{key:0,modelValue:e.order.prepayment,"onUpdate:modelValue":t[19]||(t[19]=o=>e.order.prepayment=o),options:y},null,8,["modelValue","options"]))]),l("div",pe,[d(a,{value:"\u0421\u0443\u043C\u0430 \u043F\u0435\u0440\u0435\u0434\u043E\u043F\u043B\u0430\u0442\u0438 (\u0433\u0440\u043D.)"}),e.order.prepayment&&!e.order.wfp_payment?(r(),u(i,{key:0,modelValue:e.order.prepayment_sum,"onUpdate:modelValue":t[21]||(t[21]=o=>e.order.prepayment_sum=o),type:"number"},null,8,["modelValue"])):(r(),u(i,{key:1,modelValue:e.order.prepayment_sum,"onUpdate:modelValue":t[22]||(t[22]=o=>e.order.prepayment_sum=o),type:"number",disabled:""},null,8,["modelValue"])),e.order.wfp_payment?(r(),V("span",we,"\u041E\u043F\u043B\u0430\u0447\u0435\u043D\u043E \u043D\u0430 \u0441\u0430\u0439\u0442\u0456")):k("",!0)])]),l("div",Ue,[l("div",Me,[d(a,{value:"\u0417\u043D\u0438\u0436\u043A\u0430"}),d(c,{modelValue:e.order.discount,"onUpdate:modelValue":t[23]||(t[23]=o=>e.order.discount=o),options:y},null,8,["modelValue","options"])]),l("div",Ce,[d(a,{value:"\u0421\u0443\u043C\u0430 \u0437\u043D\u0438\u0436\u043A\u0438 (\u0433\u0440\u043D.)"}),e.order.discount?(r(),u(i,{key:0,modelValue:e.order.discount_sum,"onUpdate:modelValue":t[24]||(t[24]=o=>e.order.discount_sum=o),type:"number"},null,8,["modelValue"])):(r(),u(i,{key:1,modelValue:e.order.discount_sum,"onUpdate:modelValue":t[25]||(t[25]=o=>e.order.discount_sum=o),type:"number",disabled:""},null,8,["modelValue"]))])])]),l("div",Ie,[d(w,{type:"button",onClick:$},{default:U(()=>[$e]),_:1}),(r(),u(N(S(C)),{item:n.value.item,size:"medium",onCloseModal:b,onSubmitItemForm:I},null,40,["item"]))]),d(T,{data:e.order.items,onEditOrderItem:F,onDestroyOrderItem:O},null,8,["data"]),l("div",je,[l("div",Oe,[Fe,l("p",Ae,h(e.order.total_count),1)]),l("div",Ee,[Be,l("p",ze,h(s.$filters.formatMoney(e.order.total_price)),1)]),l("div",De,[Ne,l("p",Se,h(e.order.promo_code?e.order.promo_code:"\u0412\u0456\u0434\u0441\u0443\u0442\u043D\u0456\u0439"),1)])])])}}};export{Ke as default};
