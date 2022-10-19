import O from"./Modal.ca7a8415.js";import U from"./Table.60670c70.js";import{A as g,B as y,G as j,V as v,S as m,X as n,R as l,$ as f,P as x,L as k,M as p,K as _,F as z,U as G,Y as A,O as I,bc as K,x as S}from"./moment.e1708d83.js";import"./Form.ebc0bb9c.js";import"./ItemsTable.81e25c3a.js";const R=A(" \u041A\u043B\u0456\u0454\u043D\u0442\u0438 "),T={key:1},X={class:"grid grid-cols-1 md:grid-cols-5 gap-4"},Y={class:"md:col-span-1"},q={class:"w-full md:col-span-4 grid grid-cols-1 gap-4"},H={class:"text-center"},se={__name:"Index",setup(J){const e=g({data:[],statuses:[],subStatuses:[],isLoading:!0,isActiveEditModal:!1,sidebarActive:"all",modal:{}}),s=g({status:null,currentPage:1}),E=y(()=>{const t={};return t.page=s.value.currentPage,s.value.status&&(t.status=s.value.status),t}),r=g([]),i=S("$swal"),h=S("$can");j(()=>{u(),axios.get(route("api.clients.statuses")).then(({data:t})=>{e.value.statuses=t.statuses,e.value.subStatuses=t.subStatuses,r.value.push({title:"\u0412\u0441\u0456 \u043A\u043B\u0456\u0454\u043D\u0442\u0438",key:"all"});for(const[a,o]of Object.entries(t.statuses))r.value.push({title:o,key:a})})});const L=y(()=>e.value.isActiveEditModal?O:null);function M(t){axios.get(route("api.clients.search",{search:t})).then(({data:a})=>{e.value.sidebarActive=null,s.value.currentPage=1,e.value.data=a.result,e.value.isLoading=!1}).catch(a=>{console.log(a),e.value.isLoading=!1})}function C(t){e.value.sidebarActive=t,t==="all"?s.value.status=null:s.value.status=t,u()}function P(t){t&&(s.value.currentPage=t),u()}function u(){axios.get(route("api.clients.index",E.value)).then(({data:t})=>{e.value.data=t.result,e.value.isLoading=!1}).catch(t=>{console.log(t),e.value.isLoading=!1})}function b(t){h("destroy-clients")&&i({title:"\u0412\u0438\u0434\u0430\u043B\u0438\u0442\u0438?",icon:"warning",showCancelButton:!0}).then(a=>{a.isConfirmed&&axios.delete(route("api.clients.destroy",t)).then(()=>{e.value.isLoading=!1,u(),e.value.isActiveEditModal&&d(),i({title:"Success!",icon:"success"})}).catch(o=>{console.log(o),i({title:"Error!",icon:"error"})})})}function V(t,a){axios.get(route("api.clients.edit",t)).then(({data:o})=>{e.value.modal.index=a,e.value.modal=o.result,d()}).catch(o=>console.log(o))}function w(){axios.put(route("api.clients.update",e.value.modal.id),e.value.modal).then(()=>{d(),u(),i({title:"Success!",icon:"success"})}).catch(t=>{console.log(t),i({title:"Error!",icon:"error"})})}function d(){e.value.isActiveEditModal=!e.value.isActiveEditModal}return(t,a)=>{const o=n("loader-component"),B=n("sidebar-item"),$=n("sidebar-component"),F=n("search-component"),D=n("pagination"),N=n("auth-layout");return l(),v(N,{title:"\u041A\u043B\u0456\u0454\u043D\u0442\u0438"},{header:m(()=>[R]),default:m(()=>[e.value.isLoading?(l(),v(o,{key:0})):f("",!0),!e.value.isLoading&&x(h)("show-clients")?(l(),k("div",T,[p("div",X,[p("div",Y,[_($,null,{default:m(()=>[r.value.length?(l(!0),k(z,{key:0},G(r.value,c=>(l(),v(B,{onClick:Q=>C(c.key),active:e.value.sidebarActive===c.key},{default:m(()=>[A(I(c.title),1)]),_:2},1032,["onClick","active"]))),256)):f("",!0)]),_:1})]),p("div",q,[_(F,{onSearch:M,clear:!0,placeholder:"\u0406\u043C\u02BC\u044F, \u043F\u0440\u0456\u0437\u0432\u0438\u0449\u0435, \u043F\u043E-\u0431\u0430\u0442\u044C\u043A\u043E\u0432\u0456, \u0442\u0435\u043B\u0435\u0444\u043E\u043D, email, \u043A\u043E\u043C\u0435\u043D\u0442\u0430\u0440..."}),_(U,{data:e.value.data.data,onOnEdit:V,onOnDestroy:b,statuses:e.value.statuses},null,8,["data","statuses"]),p("div",H,[_(D,{pagination:e.value.data,"click-handler":P,modelValue:s.value.currentPage,"onUpdate:modelValue":a[0]||(a[0]=c=>s.value.currentPage=c)},null,8,["pagination","modelValue"])])])]),(l(),v(K(x(L)),{item:e.value.modal,statuses:e.value.statuses,"sub-statuses":e.value.subStatuses,size:"extralarge",onCloseModal:d,onDeclineForm:b,onSubmitForm:w},null,40,["item","statuses","sub-statuses"]))])):f("",!0)]),_:1})}}};export{se as default};
