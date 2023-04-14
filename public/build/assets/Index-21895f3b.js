import U from"./Modal-5913b481.js";import z from"./Table-c9410bd8.js";import q from"./CrmLayout-7f065217.js";import"./hmac-md5-9cf4694e.js";import{V as G,r as h,f as A,o as H,s as d,v,y as C,D as m,p as l,k,j as _,u as p,g as w,i as f,z as x,F as J,x as K,l as Q,a2 as R}from"./app-da11968c.js";import"./Form-6ead5c0c.js";import"./app-23639435.js";import"./vue-i18n.esm-bundler-7f92347f.js";import"./moment-fbc5633a.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./Logo-9fe22fca.js";const W={key:1},X={class:"grid grid-cols-1 md:grid-cols-5 gap-4"},Y={class:"md:col-span-1"},Z={class:"w-full md:col-span-4 grid gap-4 grid-cols-1"},ee={class:"text-center"},me={__name:"Index",props:["statuses"],setup(y){const M=y,i=C("$swal"),a=C("$can"),S=G({order_id:null,sum:null}),e=h({data:[],isLoading:!0,isActiveModal:!1,modalAction:"",item:{},sidebarActive:"all"}),g=h([]),n=h({status:null,currentPage:1}),V=A(()=>{const t={};return t.page=n.value.currentPage,n.value.status&&(t.status=n.value.status),t});H(()=>{s(1),g.value.push({title:"Всі",key:"all"});for(const[t,o]of Object.entries(M.statuses))g.value.push({title:o,key:t})});const D=A(()=>e.value.isActiveModal?U:null);function L(t){e.value.sidebarActive=t,t==="all"?n.value.status=null:n.value.status=t,n.value.currentPage=1,s()}function s(t){e.value.isLoading=!0,t&&(e.value.currentPage=t),axios.get(route("api.invoices.index",V.value)).then(({data:o})=>{e.value.data=o.result,e.value.isLoading=!1}).catch(o=>{console.log(o),e.value.isLoading=!1})}function b(t){a("destroy-invoices")&&i({title:"Видалити?",icon:"warning",showCancelButton:!0}).then(o=>{o.isConfirmed&&axios.delete(route("api.invoices.destroy",t)).then(()=>{s(),e.value.isActiveModal&&r(),i({icon:"success",title:"Destroyed!"})}).catch(c=>{console.log(c),i({icon:"error",title:"Error!"})})})}function r(){e.value.isActiveModal=!e.value.isActiveModal}function P(t,o){a("edit-invoices")&&axios.get(route("api.invoices.edit",t)).then(({data:c})=>{e.value.item=c.result,e.value.modalAction="edit",e.value.item.index=o,r()}).catch(c=>console.log(c))}function B(){a("edit-invoices")&&axios.put(route("api.invoices.update",e.value.item.id),e.value.item).then(()=>{r(),s(),i({title:"Success!",icon:"success"})}).catch(t=>{console.log(t),i({title:"Error!",icon:"error"})})}function E(){a("create-invoices")&&axios.post(route("api.invoices.create"),e.value.item).then(({data:t})=>{e.value.item=t.result,e.value.modalAction="edit",r(),s(),navigator.clipboard.writeText(t.result.data.invoice_url),i({title:"Успішно!",text:"Рахунок був успішно створений, посилання на оплату скопійовано в буфер обміну",icon:"success"})}).catch(t=>{console.log(t),i({title:"Error!",icon:"error"})})}function F(){e.value.modalAction==="edit"&&a("edit-invoices")?B():e.value.modalAction==="create"&&a("create-invoices")&&E()}function $(){a("create-invoices")&&(e.value.item=S,e.value.modalAction="create",r())}function N(){i({title:"Успішно",text:"Посилання на оплату надіслано клієнту",icon:"success"}),s()}return(t,o)=>{const c=m("loader-component"),O=m("sidebar-item"),j=m("sidebar-component"),I=m("button-component"),T=m("pagination");return l(),d(q,{title:"Рахунки"},{header:v(()=>[k("Рахунки")]),default:v(()=>[e.value.isLoading?(l(),d(c,{key:0})):_("",!0),!e.value.isLoading&&p(a)("show-invoices")?(l(),w("div",W,[f("div",X,[f("div",Y,[x(j,null,{default:v(()=>[g.value.length?(l(!0),w(J,{key:0},K(g.value,u=>(l(),d(O,{onClick:te=>L(u.key),active:e.value.sidebarActive===u.key},{default:v(()=>[k(Q(u.title),1)]),_:2},1032,["onClick","active"]))),256)):_("",!0)]),_:1})]),f("div",Z,[f("div",null,[p(a)("create-invoices")?(l(),d(I,{key:0,type:"btn",onClick:$},{default:v(()=>[k(" Додати ")]),_:1})):_("",!0)]),x(z,{data:e.value.data.data,statuses:y.statuses,onOnEdit:P,onOnDestroy:b,"can-destroy":p(a)("destroy-invoices"),onOnSendInvoiceSms:N},null,8,["data","statuses","can-destroy"]),f("div",ee,[x(T,{pagination:e.value.data,"click-handler":s,modelValue:n.value.currentPage,"onUpdate:modelValue":o[0]||(o[0]=u=>n.value.currentPage=u)},null,8,["pagination","modelValue"])])])]),(l(),d(R(p(D)),{item:e.value.item,onCloseModal:r,onSubmitForm:F,onDeclineForm:b,statuses:y.statuses,"can-destroy":p(a)("destroy-invoices")},null,40,["item","statuses","can-destroy"]))])):_("",!0)]),_:1})}}};export{me as default};
