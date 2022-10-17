import O from"./ItemsModal.842b3d17.js";import A from"./ItemsTable.2dad54dc.js";import{z as C,D as F,A as j,u as B,K as D,L as l,J as d,R as x,U as u,bc as E,O as $,M as f,W as b,Q as m,X as z,v as N}from"./moment.ad2399f6.js";import"./ItemsForm.060459ce.js";const S={class:"grid gap-4"},L={class:"grid grid-cols-1 md:grid-cols-4 gap-4"},R={class:"block"},T={class:"block"},J={class:"block"},K={class:"block"},P=l("a",{href:""},"\u041A\u0430\u0440\u0442\u043A\u0430 \u043A\u043B\u0456\u0454\u043D\u0442\u0430",-1),Q={class:"grid grid-cols-1 md:grid-cols-2 gap-4"},W={class:"block"},X={class:"block"},q={class:"grid grid-cols-1 md:grid-cols-4 mb-5"},G={class:"block mb-5 md:mr-5"},H={class:"block mb-5 md:mr-5"},Y={class:"block mb-5 md:mr-5"},Z={class:"block mb-5"},ee={class:"grid grid-cols-1 md:grid-cols-2 mb-10"},te={class:"block md:mr-5"},oe={class:"block mb-5"},le={class:"block mb-5"},de={class:"block"},se={class:"block"},ae={class:"mb-7"},ne={class:"grid grid-cols-2"},ie={class:"block mb-5 mr-5"},me={class:"block mb-5"},re={class:"grid grid-cols-2"},ue={class:"block mb-5 mr-5"},ce={class:"block mb-5"},ve={class:"grid grid-cols-2"},be={class:"block mb-5 mr-5"},Ve={class:"block mb-5"},ye={class:"block mb-5"},fe=z("\u0414\u043E\u0434\u0430\u0442\u0438 \u0442\u043E\u0432\u0430\u0440"),ge={class:"grid grid-cols-1 md:grid-cols-3 mt-5"},ke={class:"flex justify-center"},xe=l("p",{class:"font-semibold text-l text-gray-900 dark:text-white"}," \u041A\u0456\u043B\u044C\u043A\u0456\u0441\u0442\u044C \u0442\u043E\u0432\u0430\u0440\u0456\u0432:\xA0 ",-1),he={class:"text-l text-gray-900 dark:text-white"},pe={class:"flex justify-center"},Ue=l("p",{class:"font-semibold text-l text-gray-900 dark:text-white"}," \u0417\u0430\u0433\u0430\u043B\u044C\u043D\u0430 \u0446\u0456\u043D\u0430:\xA0 ",-1),Me={class:"text-l text-gray-900 dark:text-white"},we={class:"flex justify-center"},Ie=l("p",{class:"font-semibold text-l text-gray-900 dark:text-white"}," \u041F\u0440\u043E\u043C\u043E-\u043A\u043E\u0434:\xA0 ",-1),_e={class:"text-l text-gray-900 dark:text-white"},je={__name:"Form",props:["order","statuses","paymentMethods"],emits:["submitItemForm"],setup(t,{emit:g}){const c=t,y=N("$swal"),n=C({showItemsModal:!1,itemsModalAction:"",item:{count:1,size:"",color:"",product_id:null},statuses:[],managers:[],paymentMethods:[]});F(()=>{M();for(const[a,e]of Object.entries(c.statuses))n.value.statuses.push({key:e,value:e});for(const[a,e]of Object.entries(c.paymentMethods))n.value.paymentMethods.push({key:e,value:e})});const h=j(()=>n.value.showItemsModal?O:null),V=B([{key:0,value:"\u041D\u0456"},{key:1,value:"\u0422\u0430\u043A"}]);function p(){n.value.itemsModalAction==="create"?axios.post(route("api.order-items.add",c.order.id),n.value.item).then(({data:a})=>{v(),g("submitItemForm",a.result)}).catch(a=>console.log(a)):n.value.itemsModalAction==="edit"&&axios.put(route("api.order-items.update",n.value.item.id),n.value.item).then(({data:a})=>{v(),g("submitItemForm",a.result)}).catch(a=>console.log(a))}function U(){v(),n.value.itemsModalAction="create"}function v(){n.value.showItemsModal=!n.value.showItemsModal}function M(){axios.get(route("api.users.list.managers")).then(({data:a})=>{a.result.length&&a.result.forEach((e,s)=>{n.value.managers.push({key:e,value:s})})}).catch(a=>console.log(a))}function w(a,e){y({title:"Are you sure?",icon:"warning",showCancelButton:!0}).then(s=>{s.isConfirmed&&axios.delete(route("api.order-items.destroy",{item_id:a,order_id:c.order.id})).then(()=>{c.order.items.splice(e,1),y({title:"Success",icon:"success"})}).catch(i=>{console.log(i),y({title:"Error",icon:"error"})})})}function I(a){v(),n.value.itemsModalAction="edit",axios.get(route("api.order-items.edit",a)).then(({data:e})=>n.value.item=e.result).catch(e=>console.log(e))}return(a,e)=>{const s=b("label-component"),i=b("input-component"),k=b("button-component"),r=b("select-component"),_=b("textarea-component");return m(),D("form",S,[l("div",L,[l("div",R,[d(s,{value:"\u0406\u043C\u02BC\u044F"}),d(i,{modelValue:t.order.client.name,"onUpdate:modelValue":e[0]||(e[0]=o=>t.order.client.name=o),type:"text",disabled:""},null,8,["modelValue"])]),l("div",T,[d(s,{value:"\u041F\u0440\u0456\u0437\u0432\u0438\u0449\u0435"}),d(i,{modelValue:t.order.client.last_name,"onUpdate:modelValue":e[1]||(e[1]=o=>t.order.client.last_name=o),type:"text",disabled:""},null,8,["modelValue"])]),l("div",J,[d(s,{value:"\u041F\u043E-\u0431\u0430\u0442\u044C\u043A\u043E\u0432\u0456"}),d(i,{modelValue:t.order.client.middle_name,"onUpdate:modelValue":e[2]||(e[2]=o=>t.order.client.middle_name=o),type:"text",disabled:""},null,8,["modelValue"])]),l("div",K,[d(s,{value:"\xA0"}),d(k,{class:"w-full"},{default:x(()=>[P]),_:1})])]),l("div",Q,[l("div",W,[d(s,{value:"\u0421\u0442\u0430\u0442\u0443\u0441 \u043A\u043B\u0456\u0454\u043D\u0442\u0430"}),d(i,{modelValue:t.order.client.status,"onUpdate:modelValue":e[3]||(e[3]=o=>t.order.client.status=o),type:"text",disabled:""},null,8,["modelValue"])]),l("div",X,[d(s,{value:"\u0422\u0435\u043B\u0435\u0444\u043E\u043D"}),d(i,{modelValue:t.order.client.phone,"onUpdate:modelValue":e[4]||(e[4]=o=>t.order.client.phone=o),type:"text",disabled:""},null,8,["modelValue"])])]),l("div",q,[l("div",G,[d(s,{value:"\u0421\u0442\u0430\u0442\u0443\u0441 \u0437\u0430\u043C\u043E\u0432\u043B\u0435\u043D\u043D\u044F"}),d(r,{modelValue:t.order.status,"onUpdate:modelValue":e[5]||(e[5]=o=>t.order.status=o),options:n.value.statuses},null,8,["modelValue","options"])]),l("div",H,[d(s,{value:"\u041C\u0435\u043D\u0435\u0434\u0436\u0435\u0440"}),d(r,{modelValue:t.order.manager_id,"onUpdate:modelValue":e[6]||(e[6]=o=>t.order.manager_id=o),options:n.value.managers},null,8,["modelValue","options"])]),l("div",Y,[d(s,{value:"\u0421\u043F\u043E\u0441\u0456\u0431 \u043E\u043F\u043B\u0430\u0442\u0438"}),d(r,{modelValue:t.order.payment_method,"onUpdate:modelValue":e[7]||(e[7]=o=>t.order.payment_method=o),options:n.value.paymentMethods},null,8,["modelValue","options"])]),l("div",Z,[d(s,{value:"\u041D\u0430\u0433\u0430\u0434\u0443\u0432\u0430\u043D\u043D\u044F \u043F\u0440\u043E \u043F\u043E\u0441\u0438\u043B\u043A\u0443"}),d(r,{modelValue:t.order.parcel_reminder,"onUpdate:modelValue":e[8]||(e[8]=o=>t.order.parcel_reminder=o),options:V},null,8,["modelValue","options"])])]),l("div",ee,[l("div",te,[l("div",oe,[d(s,{value:"\u041C\u0456\u0441\u0442\u043E"}),d(i,{modelValue:t.order.city,"onUpdate:modelValue":e[9]||(e[9]=o=>t.order.city=o),type:"text"},null,8,["modelValue"])]),l("div",le,[d(s,{value:"\u041F\u043E\u0447\u0442\u043E\u0432\u0435 \u0432\u0456\u0434\u0434\u0456\u043B\u0435\u043D\u043D\u044F"}),d(i,{modelValue:t.order.postal_office,"onUpdate:modelValue":e[10]||(e[10]=o=>t.order.postal_office=o),type:"text"},null,8,["modelValue"])]),l("div",de,[d(s,{value:"\u041D\u043E\u043C\u0435\u0440 \u043D\u0430\u043A\u043B\u0430\u0434\u043D\u043E\u0457"}),d(i,{modelValue:t.order.waybill,"onUpdate:modelValue":e[11]||(e[11]=o=>t.order.waybill=o),type:"text"},null,8,["modelValue"])])]),l("div",se,[d(s,{value:"\u041A\u043E\u043C\u0435\u043D\u0442\u0430\u0440"}),d(_,{rows:"10",modelValue:t.order.comment,"onUpdate:modelValue":e[12]||(e[12]=o=>t.order.comment=o)},null,8,["modelValue"])])]),l("div",ae,[l("div",ne,[l("div",ie,[d(s,{value:"\u0414\u043E\u0434.\u043F\u0440\u043E\u0434\u0430\u0436 \u043F\u043E\u0432\u0456\u0442\u0440\u044F"}),d(r,{modelValue:t.order.sale_of_air,"onUpdate:modelValue":e[13]||(e[13]=o=>t.order.sale_of_air=o),options:V},null,8,["modelValue","options"])]),l("div",me,[d(s,{value:"\u0421\u0443\u043C\u0430 \u0434\u043E\u043F.\u043F\u0440\u043E\u0434\u0430\u0436\u0443 \u043F\u043E\u0432\u0456\u0442\u0440\u044F (\u0433\u0440\u043D.)"}),t.order.sale_of_air?(m(),u(i,{key:0,modelValue:t.order.sale_of_air_sum,"onUpdate:modelValue":e[14]||(e[14]=o=>t.order.sale_of_air_sum=o),type:"number"},null,8,["modelValue"])):(m(),u(i,{key:1,modelValue:t.order.sale_of_air_sum,"onUpdate:modelValue":e[15]||(e[15]=o=>t.order.sale_of_air_sum=o),type:"number",disabled:""},null,8,["modelValue"]))])]),l("div",re,[l("div",ue,[d(s,{value:"\u041F\u0435\u0440\u0435\u0434\u043E\u043F\u043B\u0430\u0442\u0430"}),d(r,{modelValue:t.order.prepayment,"onUpdate:modelValue":e[16]||(e[16]=o=>t.order.prepayment=o),options:V},null,8,["modelValue","options"])]),l("div",ce,[d(s,{value:"\u0421\u0443\u043C\u0430 \u043F\u0435\u0440\u0435\u0434\u043E\u043F\u043B\u0430\u0442\u0438 (\u0433\u0440\u043D.)"}),t.order.prepayment?(m(),u(i,{key:0,modelValue:t.order.prepayment_sum,"onUpdate:modelValue":e[17]||(e[17]=o=>t.order.prepayment_sum=o),type:"number"},null,8,["modelValue"])):(m(),u(i,{key:1,modelValue:t.order.prepayment_sum,"onUpdate:modelValue":e[18]||(e[18]=o=>t.order.prepayment_sum=o),type:"number",disabled:""},null,8,["modelValue"]))])]),l("div",ve,[l("div",be,[d(s,{value:"\u0417\u043D\u0438\u0436\u043A\u0430"}),d(r,{modelValue:t.order.discount,"onUpdate:modelValue":e[19]||(e[19]=o=>t.order.discount=o),options:V},null,8,["modelValue","options"])]),l("div",Ve,[d(s,{value:"\u0421\u0443\u043C\u0430 \u0437\u043D\u0438\u0436\u043A\u0438 (\u0433\u0440\u043D.)"}),t.order.discount?(m(),u(i,{key:0,modelValue:t.order.discount_sum,"onUpdate:modelValue":e[20]||(e[20]=o=>t.order.discount_sum=o),type:"number"},null,8,["modelValue"])):(m(),u(i,{key:1,modelValue:t.order.discount_sum,"onUpdate:modelValue":e[21]||(e[21]=o=>t.order.discount_sum=o),type:"number",disabled:""},null,8,["modelValue"]))])])]),l("div",ye,[d(k,{type:"button",onClick:U},{default:x(()=>[fe]),_:1}),(m(),u(E($(h)),{item:n.value.item,size:"medium",onCloseModal:v,onSubmitItemForm:p},null,40,["item"]))]),d(A,{data:t.order.items,onEditOrderItem:I,onDestroyOrderItem:w},null,8,["data"]),l("div",ge,[l("div",ke,[xe,l("p",he,f(t.order.total_count),1)]),l("div",pe,[Ue,l("p",Me,f(a.$filters.formatMoney(t.order.total_price)),1)]),l("div",we,[Ie,l("p",_e,f(t.order.promo_code?t.order.promo_code:"\u0412\u0456\u0434\u0441\u0443\u0442\u043D\u0456\u0439"),1)])])])}}};export{je as default};
