import O from"./Modal.be7735c4.js";import j from"./Table.baac6301.js";import{y as h,z as k,G as z,a0 as m,W as p,$ as n,S as l,Z as y,P as g,L,M as _,K as f,F as U,Y as G,X as E,O as I,bg as K,D as S}from"./___vite-browser-external_commonjs-proxy.bd54111c.js";import"./Form.5f5b258f.js";import"./ItemsTable.9c42cdf6.js";const T=E(" \u041A\u043B\u0456\u0454\u043D\u0442\u0438 "),W={key:1},X={class:"grid grid-cols-1 md:grid-cols-5 gap-4"},Y={class:"md:col-span-1"},Z={class:"w-full md:col-span-4 grid grid-cols-1 gap-4"},q={class:"text-center"},se={__name:"Index",setup(H){const e=h({data:[],statuses:[],subStatuses:[],isLoading:!0,isActiveEditModal:!1,sidebarActive:"all",modal:{}}),s=h({status:null,currentPage:1}),M=k(()=>{const t={};return t.page=s.value.currentPage,s.value.status&&(t.status=s.value.status),t}),r=h([]),i=S("$swal"),d=S("$can");z(()=>{u(),axios.get(route("api.clients.statuses")).then(({data:t})=>{e.value.statuses=t.statuses,e.value.subStatuses=t.subStatuses,r.value.push({title:"\u0412\u0441\u0456 \u043A\u043B\u0456\u0454\u043D\u0442\u0438",key:"all"});for(const[a,o]of Object.entries(t.statuses))r.value.push({title:o,key:a})}),route().params.id&&(e.value.isLoading=!0,x(route().params.id))});const A=k(()=>e.value.isActiveEditModal?O:null);function C(t){axios.get(route("api.clients.search",{search:t})).then(({data:a})=>{e.value.sidebarActive=null,s.value.currentPage=1,e.value.data=a.result,e.value.isLoading=!1}).catch(a=>{console.log(a),e.value.isLoading=!1})}function D(t){e.value.sidebarActive=t,t==="all"?s.value.status=null:s.value.status=t,u()}function P(t){t&&(s.value.currentPage=t),u()}function u(){axios.get(route("api.clients.index",M.value)).then(({data:t})=>{e.value.data=t.result,e.value.isLoading=!1}).catch(t=>{console.log(t),e.value.isLoading=!1})}function b(t){d("destroy-clients")&&i({title:"\u0412\u0438\u0434\u0430\u043B\u0438\u0442\u0438?",icon:"warning",showCancelButton:!0}).then(a=>{a.isConfirmed&&axios.delete(route("api.clients.destroy",t)).then(()=>{e.value.isLoading=!1,u(),e.value.isActiveEditModal&&v(),i({title:"Success!",icon:"success"})}).catch(o=>{console.log(o),i({title:"Error!",icon:"error"})})})}function x(t,a){axios.get(route("api.clients.edit",t)).then(({data:o})=>{e.value.modal.index=a,e.value.modal=o.result,v(),e.value.isLoading=!1}).catch(o=>console.log(o))}function w(){axios.put(route("api.clients.update",e.value.modal.id),e.value.modal).then(()=>{v(),u(),i({title:"Success!",icon:"success"})}).catch(t=>{console.log(t),i({title:"Error!",icon:"error"})})}function v(){e.value.isActiveEditModal=!e.value.isActiveEditModal}return(t,a)=>{const o=n("loader-component"),V=n("sidebar-item"),B=n("sidebar-component"),$=n("search-component"),F=n("pagination"),N=n("auth-layout");return l(),m(N,{title:"\u041A\u043B\u0456\u0454\u043D\u0442\u0438"},{header:p(()=>[T]),default:p(()=>[e.value.isLoading?(l(),m(o,{key:0})):y("",!0),!e.value.isLoading&&g(d)("show-clients")?(l(),L("div",W,[_("div",X,[_("div",Y,[f(B,null,{default:p(()=>[r.value.length?(l(!0),L(U,{key:0},G(r.value,c=>(l(),m(V,{onClick:J=>D(c.key),active:e.value.sidebarActive===c.key},{default:p(()=>[E(I(c.title),1)]),_:2},1032,["onClick","active"]))),256)):y("",!0)]),_:1})]),_("div",Z,[f($,{onSearch:C,clear:!0,placeholder:"\u0406\u043C\u02BC\u044F, \u043F\u0440\u0456\u0437\u0432\u0438\u0449\u0435, \u043F\u043E-\u0431\u0430\u0442\u044C\u043A\u043E\u0432\u0456, \u0442\u0435\u043B\u0435\u0444\u043E\u043D, email, \u043A\u043E\u043C\u0435\u043D\u0442\u0430\u0440..."}),f(j,{data:e.value.data.data,onOnEdit:x,onOnDestroy:b,statuses:e.value.statuses,canDestroy:g(d)("destroy-clients")},null,8,["data","statuses","canDestroy"]),_("div",q,[f(F,{pagination:e.value.data,"click-handler":P,modelValue:s.value.currentPage,"onUpdate:modelValue":a[0]||(a[0]=c=>s.value.currentPage=c)},null,8,["pagination","modelValue"])])])]),(l(),m(K(g(A)),{item:e.value.modal,statuses:e.value.statuses,"sub-statuses":e.value.subStatuses,size:"extralarge",onCloseModal:v,onDeclineForm:b,onSubmitForm:w,canDestroy:g(d)("destroy-clients")},null,40,["item","statuses","sub-statuses","canDestroy"]))])):y("",!0)]),_:1})}}};export{se as default};