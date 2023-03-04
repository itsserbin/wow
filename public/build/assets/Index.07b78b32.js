import U from"./Modal.a1930da3.js";import z from"./Table.a3c6f757.js";import H from"./CrmLayout.b3a4f20f.js";import"./index.a54632f7.js";import{ay as J,w as y,x as A,S as K,Q as d,K as v,X as C,H as m,F as l,P as g,B as p,y as w,z as f,J as x,M as Q,O as X,L as k,A as q,a2 as G}from"./___vite-browser-external_commonjs-proxy.4f2b06be.js";import"./Form.458afa8e.js";import"./app.68928a22.js";const R=k("\u0420\u0430\u0445\u0443\u043D\u043A\u0438"),W={key:1},Y={class:"grid grid-cols-1 md:grid-cols-5 gap-4"},Z={class:"md:col-span-1"},ee={class:"w-full md:col-span-4 grid gap-4 grid-cols-1"},te=k(" \u0414\u043E\u0434\u0430\u0442\u0438 "),oe={class:"text-center"},de={__name:"Index",props:["statuses"],setup(h){const M=h,i=C("$swal"),a=C("$can"),S=J({order_id:null,sum:null}),e=y({data:[],isLoading:!0,isActiveModal:!1,modalAction:"",item:{},sidebarActive:"all"}),_=y([]),n=y({status:null,currentPage:1}),L=A(()=>{const t={};return t.page=n.value.currentPage,n.value.status&&(t.status=n.value.status),t});K(()=>{s(1),_.value.push({title:"\u0412\u0441\u0456",key:"all"});for(const[t,o]of Object.entries(M.statuses))_.value.push({title:o,key:t})});const P=A(()=>e.value.isActiveModal?U:null);function B(t){e.value.sidebarActive=t,t==="all"?n.value.status=null:n.value.status=t,n.value.currentPage=1,s()}function s(t){e.value.isLoading=!0,t&&(e.value.currentPage=t),axios.get(route("api.invoices.index",L.value)).then(({data:o})=>{e.value.data=o.result,e.value.isLoading=!1}).catch(o=>{console.log(o),e.value.isLoading=!1})}function b(t){a("destroy-invoices")&&i({title:"\u0412\u0438\u0434\u0430\u043B\u0438\u0442\u0438?",icon:"warning",showCancelButton:!0}).then(o=>{o.isConfirmed&&axios.delete(route("api.invoices.destroy",t)).then(()=>{s(),e.value.isActiveModal&&r(),i({icon:"success",title:"Destroyed!"})}).catch(c=>{console.log(c),i({icon:"error",title:"Error!"})})})}function r(){e.value.isActiveModal=!e.value.isActiveModal}function V(t,o){a("edit-invoices")&&axios.get(route("api.invoices.edit",t)).then(({data:c})=>{e.value.item=c.result,e.value.modalAction="edit",e.value.item.index=o,r()}).catch(c=>console.log(c))}function D(){a("edit-invoices")&&axios.put(route("api.invoices.update",e.value.item.id),e.value.item).then(()=>{r(),s(),i({title:"Success!",icon:"success"})}).catch(t=>{console.log(t),i({title:"Error!",icon:"error"})})}function E(){a("create-invoices")&&axios.post(route("api.invoices.create"),e.value.item).then(({data:t})=>{e.value.item=t.result,e.value.modalAction="edit",r(),s(),navigator.clipboard.writeText(t.result.data.invoice_url),i({title:"\u0423\u0441\u043F\u0456\u0448\u043D\u043E!",text:"\u0420\u0430\u0445\u0443\u043D\u043E\u043A \u0431\u0443\u0432 \u0443\u0441\u043F\u0456\u0448\u043D\u043E \u0441\u0442\u0432\u043E\u0440\u0435\u043D\u0438\u0439, \u043F\u043E\u0441\u0438\u043B\u0430\u043D\u043D\u044F \u043D\u0430 \u043E\u043F\u043B\u0430\u0442\u0443 \u0441\u043A\u043E\u043F\u0456\u0439\u043E\u0432\u0430\u043D\u043E \u0432 \u0431\u0443\u0444\u0435\u0440 \u043E\u0431\u043C\u0456\u043D\u0443",icon:"success"})}).catch(t=>{console.log(t),i({title:"Error!",icon:"error"})})}function F(){e.value.modalAction==="edit"&&a("edit-invoices")?D():e.value.modalAction==="create"&&a("create-invoices")&&E()}function $(){a("create-invoices")&&(e.value.item=S,e.value.modalAction="create",r())}function O(){i({title:"\u0423\u0441\u043F\u0456\u0448\u043D\u043E",text:"\u041F\u043E\u0441\u0438\u043B\u0430\u043D\u043D\u044F \u043D\u0430 \u043E\u043F\u043B\u0430\u0442\u0443 \u043D\u0430\u0434\u0456\u0441\u043B\u0430\u043D\u043E \u043A\u043B\u0456\u0454\u043D\u0442\u0443",icon:"success"}),s()}return(t,o)=>{const c=m("loader-component"),N=m("sidebar-item"),I=m("sidebar-component"),j=m("button-component"),T=m("pagination");return l(),d(H,{title:"\u0420\u0430\u0445\u0443\u043D\u043A\u0438"},{header:v(()=>[R]),default:v(()=>[e.value.isLoading?(l(),d(c,{key:0})):g("",!0),!e.value.isLoading&&p(a)("show-invoices")?(l(),w("div",W,[f("div",Y,[f("div",Z,[x(I,null,{default:v(()=>[_.value.length?(l(!0),w(Q,{key:0},X(_.value,u=>(l(),d(N,{onClick:ae=>B(u.key),active:e.value.sidebarActive===u.key},{default:v(()=>[k(q(u.title),1)]),_:2},1032,["onClick","active"]))),256)):g("",!0)]),_:1})]),f("div",ee,[f("div",null,[p(a)("create-invoices")?(l(),d(j,{key:0,type:"btn",onClick:$},{default:v(()=>[te]),_:1})):g("",!0)]),x(z,{data:e.value.data.data,statuses:h.statuses,onOnEdit:V,onOnDestroy:b,"can-destroy":p(a)("destroy-invoices"),onOnSendInvoiceSms:O},null,8,["data","statuses","can-destroy"]),f("div",oe,[x(T,{pagination:e.value.data,"click-handler":s,modelValue:n.value.currentPage,"onUpdate:modelValue":o[0]||(o[0]=u=>n.value.currentPage=u)},null,8,["pagination","modelValue"])])])]),(l(),d(G(p(P)),{item:e.value.item,onCloseModal:r,onSubmitForm:F,onDeclineForm:b,statuses:h.statuses,"can-destroy":p(a)("destroy-invoices")},null,40,["item","statuses","can-destroy"]))])):g("",!0)]),_:1})}}};export{de as default};