import U from"./Modal.834f76c8.js";import q from"./Table.b181f5cd.js";import G from"./CrmLayout.18697a83.js";import"./index.6143b9f3.js";import{$ as H,j as y,p as A,o as z,C as d,D as v,G as C,N as m,A as l,v as g,u as p,q as w,s as f,H as x,F as J,E as K,x as k,y as Q,a8 as R}from"./index.e4375aa7.js";import"./Form.493585d3.js";import"./app.2c2e52ca.js";import"./moment.9709ab41.js";import"./_plugin-vue_export-helper.cdc0426e.js";import"./lazyload.6866379a.js";import"./Logo.6d532cc3.js";const W=k("\u0420\u0430\u0445\u0443\u043D\u043A\u0438"),X={key:1},Y={class:"grid grid-cols-1 md:grid-cols-5 gap-4"},Z={class:"md:col-span-1"},ee={class:"w-full md:col-span-4 grid gap-4 grid-cols-1"},te=k(" \u0414\u043E\u0434\u0430\u0442\u0438 "),oe={class:"text-center"},fe={__name:"Index",props:["statuses"],setup(h){const M=h,i=C("$swal"),a=C("$can"),S=H({order_id:null,sum:null}),e=y({data:[],isLoading:!0,isActiveModal:!1,modalAction:"",item:{},sidebarActive:"all"}),_=y([]),n=y({status:null,currentPage:1}),D=A(()=>{const t={};return t.page=n.value.currentPage,n.value.status&&(t.status=n.value.status),t});z(()=>{s(1),_.value.push({title:"\u0412\u0441\u0456",key:"all"});for(const[t,o]of Object.entries(M.statuses))_.value.push({title:o,key:t})});const E=A(()=>e.value.isActiveModal?U:null);function L(t){e.value.sidebarActive=t,t==="all"?n.value.status=null:n.value.status=t,n.value.currentPage=1,s()}function s(t){e.value.isLoading=!0,t&&(e.value.currentPage=t),axios.get(route("api.invoices.index",D.value)).then(({data:o})=>{e.value.data=o.result,e.value.isLoading=!1}).catch(o=>{console.log(o),e.value.isLoading=!1})}function b(t){a("destroy-invoices")&&i({title:"\u0412\u0438\u0434\u0430\u043B\u0438\u0442\u0438?",icon:"warning",showCancelButton:!0}).then(o=>{o.isConfirmed&&axios.delete(route("api.invoices.destroy",t)).then(()=>{s(),e.value.isActiveModal&&r(),i({icon:"success",title:"Destroyed!"})}).catch(c=>{console.log(c),i({icon:"error",title:"Error!"})})})}function r(){e.value.isActiveModal=!e.value.isActiveModal}function P(t,o){a("edit-invoices")&&axios.get(route("api.invoices.edit",t)).then(({data:c})=>{e.value.item=c.result,e.value.modalAction="edit",e.value.item.index=o,r()}).catch(c=>console.log(c))}function V(){a("edit-invoices")&&axios.put(route("api.invoices.update",e.value.item.id),e.value.item).then(()=>{r(),s(),i({title:"Success!",icon:"success"})}).catch(t=>{console.log(t),i({title:"Error!",icon:"error"})})}function $(){a("create-invoices")&&axios.post(route("api.invoices.create"),e.value.item).then(({data:t})=>{e.value.item=t.result,e.value.modalAction="edit",r(),s(),navigator.clipboard.writeText(t.result.data.invoice_url),i({title:"\u0423\u0441\u043F\u0456\u0448\u043D\u043E!",text:"\u0420\u0430\u0445\u0443\u043D\u043E\u043A \u0431\u0443\u0432 \u0443\u0441\u043F\u0456\u0448\u043D\u043E \u0441\u0442\u0432\u043E\u0440\u0435\u043D\u0438\u0439, \u043F\u043E\u0441\u0438\u043B\u0430\u043D\u043D\u044F \u043D\u0430 \u043E\u043F\u043B\u0430\u0442\u0443 \u0441\u043A\u043E\u043F\u0456\u0439\u043E\u0432\u0430\u043D\u043E \u0432 \u0431\u0443\u0444\u0435\u0440 \u043E\u0431\u043C\u0456\u043D\u0443",icon:"success"})}).catch(t=>{console.log(t),i({title:"Error!",icon:"error"})})}function B(){e.value.modalAction==="edit"&&a("edit-invoices")?V():e.value.modalAction==="create"&&a("create-invoices")&&$()}function F(){a("create-invoices")&&(e.value.item=S,e.value.modalAction="create",r())}function N(){i({title:"\u0423\u0441\u043F\u0456\u0448\u043D\u043E",text:"\u041F\u043E\u0441\u0438\u043B\u0430\u043D\u043D\u044F \u043D\u0430 \u043E\u043F\u043B\u0430\u0442\u0443 \u043D\u0430\u0434\u0456\u0441\u043B\u0430\u043D\u043E \u043A\u043B\u0456\u0454\u043D\u0442\u0443",icon:"success"}),s()}return(t,o)=>{const c=m("loader-component"),O=m("sidebar-item"),j=m("sidebar-component"),I=m("button-component"),T=m("pagination");return l(),d(G,{title:"\u0420\u0430\u0445\u0443\u043D\u043A\u0438"},{header:v(()=>[W]),default:v(()=>[e.value.isLoading?(l(),d(c,{key:0})):g("",!0),!e.value.isLoading&&p(a)("show-invoices")?(l(),w("div",X,[f("div",Y,[f("div",Z,[x(j,null,{default:v(()=>[_.value.length?(l(!0),w(J,{key:0},K(_.value,u=>(l(),d(O,{onClick:ae=>L(u.key),active:e.value.sidebarActive===u.key},{default:v(()=>[k(Q(u.title),1)]),_:2},1032,["onClick","active"]))),256)):g("",!0)]),_:1})]),f("div",ee,[f("div",null,[p(a)("create-invoices")?(l(),d(I,{key:0,type:"btn",onClick:F},{default:v(()=>[te]),_:1})):g("",!0)]),x(q,{data:e.value.data.data,statuses:h.statuses,onOnEdit:P,onOnDestroy:b,"can-destroy":p(a)("destroy-invoices"),onOnSendInvoiceSms:N},null,8,["data","statuses","can-destroy"]),f("div",oe,[x(T,{pagination:e.value.data,"click-handler":s,modelValue:n.value.currentPage,"onUpdate:modelValue":o[0]||(o[0]=u=>n.value.currentPage=u)},null,8,["pagination","modelValue"])])])]),(l(),d(R(p(E)),{item:e.value.item,onCloseModal:r,onSubmitForm:B,onDeclineForm:b,statuses:h.statuses,"can-destroy":p(a)("destroy-invoices")},null,40,["item","statuses","can-destroy"]))])):g("",!0)]),_:1})}}};export{fe as default};