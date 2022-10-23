import j from"./Modal.572c59b4.js";import B from"./StatisticLayout.1a10cb13.js";import{y as E,G as N,z as O,az as U,W as p,U as c,S as u,a0 as k,P as b,L as z,K as d,M as v,O as g,Z as m,bg as I,D as y,Y as r}from"./___vite-browser-external_commonjs-proxy.2503c6f8.js";import"./Form.18f6f13e.js";const G=m(" \u041A\u0430\u0442\u0435\u0433\u043E\u0440\u0456\u0457 \u0432\u0438\u0442\u0440\u0430\u0442 "),K={key:1},T=m(" \u0414\u043E\u0434\u0430\u0442\u0438 "),W=["onClick"],Y=v("hr",{class:"my-1"},null,-1),Z=["onClick"],X={__name:"Index",setup(q){const i=y("$swal"),_=y("$can"),f={title:null,slug:null},e=E({categories:[],isLoading:!0,isActiveModal:!1,modalAction:"",item:{},currentPage:1});N(()=>l());const w=O(()=>e.value.isActiveModal?j:null),C=U([{label:"ID",key:"id"},{label:"\u041D\u0430\u0437\u0432\u0430",key:"title"},{label:"Slug",key:"slug"},{label:"\u041E\u043D\u043E\u0432\u043B\u0435\u043D\u043E<hr class='my-1'>\u0421\u0442\u0432\u043E\u0440\u0435\u043D\u043E",key:"timestamps"},{label:"#",key:"actions"}]);function l(t){e.value.isLoading=!0,t&&(e.value.currentPage=t),axios.get(route("api.statistics.costs.categories.index",{page:e.value.currentPage})).then(o=>{Object.assign(e.value.categories,o.data.result),e.value.isLoading=!1}).catch(o=>{console.log(o),e.value.isLoading=!1})}function h(t){_("show-bookkeeping-costs")&&i({title:"\u0412\u0438\u0434\u0430\u043B\u0438\u0442\u0438?",icon:"warning",showCancelButton:!0}).then(o=>{o.isConfirmed&&axios.delete(route("api.statistics.costs.categories.destroy",t)).then(()=>{l(),e.value.isActiveModal&&s(),i({icon:"success",title:"Destroyed!"})}).catch(n=>{console.log(n),i({icon:"error",title:"Error!"})})})}function s(){e.value.isActiveModal=!e.value.isActiveModal}function x(t,o){axios.get(route("api.statistics.costs.categories.edit",t)).then(({data:n})=>{e.value.item=n.result,e.value.modalAction="edit",e.value.item.index=o,s()}).catch(n=>console.log(n))}function A(){axios.put(route("api.statistics.costs.categories.update",e.value.item.id),e.value.item).then(()=>{s(),l(),i({title:"Success!",icon:"success"})}).catch(t=>{console.log(t),i({title:"Error!",icon:"error"})})}function M(){axios.post(route("api.statistics.costs.categories.create"),e.value.item).then(()=>{s(),e.value.item=f,l(),i({title:"Success!",icon:"success"})}).catch(t=>{console.log(t),i({title:"Error!",icon:"error"})})}function $(){e.value.modalAction==="edit"?A():e.value.modalAction==="create"&&M()}function D(){Object.assign(e.value.item,f),e.value.modalAction="create",s()}return(t,o)=>{const n=r("loader-component"),L=r("button-component"),S=r("xcircle-component"),V=r("table-component"),F=r("pagination");return u(),p(B,{title:"\u041A\u0430\u0442\u0435\u0433\u043E\u0440\u0456\u0457 \u0432\u0438\u0442\u0440\u0430\u0442"},{header:c(()=>[G]),default:c(()=>[e.value.isLoading?(u(),p(n,{key:0})):k("",!0),!e.value.isLoading&&b(_)("show-bookkeeping-costs")?(u(),z("div",K,[d(L,{type:"btn",onClick:D},{default:c(()=>[T]),_:1}),d(V,{headings:C,rows:e.value.categories.data,isSlotMode:!0},{id:c(({data:a})=>[v("a",{href:"javascript:",onClick:P=>x(a.row.id,a.i)},g(a.row.id),9,W)]),timestamps:c(({data:a})=>[m(g(t.$filters.dateFormat(a.row.updated_at))+" ",1),Y,m(" "+g(t.$filters.dateFormat(a.row.created_at)),1)]),actions:c(({data:a})=>[v("a",{href:"javascript:",onClick:P=>h(a.row.id)},[d(S)],8,Z)]),_:1},8,["headings","rows"]),d(F,{pagination:e.value.categories,"click-handler":l,modelValue:e.value.currentPage,"onUpdate:modelValue":o[0]||(o[0]=a=>e.value.currentPage=a)},null,8,["pagination","modelValue"]),(u(),p(I(b(w)),{item:e.value.item,onCloseModal:s,onSubmitForm:$,onDeclineForm:h},null,40,["item"]))])):k("",!0)]),_:1})}}};export{X as default};
