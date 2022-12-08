import P from"./Modal.9eb58d5b.js";import j from"./StatisticLayout.e3b02687.js";import{y as E,C as N,z as O,az as z,a0 as p,X as c,B as k,V as r,S as u,_ as b,P as y,L as I,K as d,M as v,O as g,Y as m,bg as U}from"./___vite-browser-external_commonjs-proxy.af1999bf.js";import"./Form.fb13f290.js";const K=m(" \u041A\u0430\u0442\u0435\u0433\u043E\u0440\u0456\u0457 \u0432\u0438\u0442\u0440\u0430\u0442 "),T={key:1},X=m(" \u0414\u043E\u0434\u0430\u0442\u0438 "),Y=["onClick"],q=v("hr",{class:"my-1"},null,-1),G=["onClick"],Z={__name:"Index",setup(H){const i=k("$swal"),_=k("$can"),f={title:null,slug:null},e=E({categories:[],isLoading:!0,isActiveModal:!1,modalAction:"",item:{},currentPage:1});N(()=>l());const w=O(()=>e.value.isActiveModal?P:null),C=z([{label:"ID",key:"id"},{label:"\u041D\u0430\u0437\u0432\u0430",key:"title"},{label:"Slug",key:"slug"},{label:"\u041E\u043D\u043E\u0432\u043B\u0435\u043D\u043E<hr class='my-1'>\u0421\u0442\u0432\u043E\u0440\u0435\u043D\u043E",key:"timestamps"},{label:"#",key:"actions"}]);function l(t){e.value.isLoading=!0,t&&(e.value.currentPage=t),axios.get(route("api.statistics.costs.categories.index",{page:e.value.currentPage})).then(o=>{Object.assign(e.value.categories,o.data.result),e.value.isLoading=!1}).catch(o=>{console.log(o),e.value.isLoading=!1})}function h(t){_("show-bookkeeping-costs")&&i({title:"\u0412\u0438\u0434\u0430\u043B\u0438\u0442\u0438?",icon:"warning",showCancelButton:!0}).then(o=>{o.isConfirmed&&axios.delete(route("api.statistics.costs.categories.destroy",t)).then(()=>{l(),e.value.isActiveModal&&s(),i({icon:"success",title:"Destroyed!"})}).catch(n=>{console.log(n),i({icon:"error",title:"Error!"})})})}function s(){e.value.isActiveModal=!e.value.isActiveModal}function x(t,o){axios.get(route("api.statistics.costs.categories.edit",t)).then(({data:n})=>{e.value.item=n.result,e.value.modalAction="edit",e.value.item.index=o,s()}).catch(n=>console.log(n))}function A(){axios.put(route("api.statistics.costs.categories.update",e.value.item.id),e.value.item).then(()=>{s(),l(),i({title:"Success!",icon:"success"})}).catch(t=>{console.log(t),i({title:"Error!",icon:"error"})})}function M(){axios.post(route("api.statistics.costs.categories.create"),e.value.item).then(()=>{s(),e.value.item=f,l(),i({title:"Success!",icon:"success"})}).catch(t=>{console.log(t),i({title:"Error!",icon:"error"})})}function V(){e.value.modalAction==="edit"?A():e.value.modalAction==="create"&&M()}function $(){Object.assign(e.value.item,f),e.value.modalAction="create",s()}return(t,o)=>{const n=r("loader-component"),L=r("button-component"),S=r("xcircle-component"),B=r("table-component"),D=r("pagination");return u(),p(j,{title:"\u041A\u0430\u0442\u0435\u0433\u043E\u0440\u0456\u0457 \u0432\u0438\u0442\u0440\u0430\u0442"},{header:c(()=>[K]),default:c(()=>[e.value.isLoading?(u(),p(n,{key:0})):b("",!0),!e.value.isLoading&&y(_)("show-bookkeeping-costs")?(u(),I("div",T,[d(L,{type:"btn",onClick:$},{default:c(()=>[X]),_:1}),d(B,{headings:C,rows:e.value.categories.data,isSlotMode:!0},{id:c(({data:a})=>[v("a",{href:"javascript:",onClick:F=>x(a.row.id,a.i)},g(a.row.id),9,Y)]),timestamps:c(({data:a})=>[m(g(t.$filters.dateFormat(a.row.updated_at))+" ",1),q,m(" "+g(t.$filters.dateFormat(a.row.created_at)),1)]),actions:c(({data:a})=>[v("a",{href:"javascript:",onClick:F=>h(a.row.id)},[d(S)],8,G)]),_:1},8,["headings","rows"]),d(D,{pagination:e.value.categories,"click-handler":l,modelValue:e.value.currentPage,"onUpdate:modelValue":o[0]||(o[0]=a=>e.value.currentPage=a)},null,8,["pagination","modelValue"]),(u(),p(U(y(w)),{item:e.value.item,onCloseModal:s,onSubmitForm:V,onDeclineForm:h},null,40,["item"]))])):b("",!0)]),_:1})}}};export{Z as default};