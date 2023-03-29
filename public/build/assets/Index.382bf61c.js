import P from"./Modal.b2d44465.js";import j from"./StatisticLayout.62449672.js";import{w as E,S as N,x as O,az as U,Q as p,O as c,U as k,K as r,F as u,G as b,B as y,y as z,M as d,z as v,A as g,P as m,a7 as I}from"./moment.791e2419.js";import"./Form.10017f8d.js";const G=m(" \u041A\u0430\u0442\u0435\u0433\u043E\u0440\u0456\u0457 \u0432\u0438\u0442\u0440\u0430\u0442 "),K={key:1},Q=m(" \u0414\u043E\u0434\u0430\u0442\u0438 "),T=["onClick"],q=v("hr",{class:"my-1"},null,-1),H=["onClick"],Z={__name:"Index",setup(J){const i=k("$swal"),_=k("$can"),f={title:null,slug:null},e=E({categories:[],isLoading:!0,isActiveModal:!1,modalAction:"",item:{},currentPage:1});N(()=>l());const w=O(()=>e.value.isActiveModal?P:null),x=U([{label:"ID",key:"id"},{label:"\u041D\u0430\u0437\u0432\u0430",key:"title"},{label:"Slug",key:"slug"},{label:"\u041E\u043D\u043E\u0432\u043B\u0435\u043D\u043E<hr class='my-1'>\u0421\u0442\u0432\u043E\u0440\u0435\u043D\u043E",key:"timestamps"},{label:"#",key:"actions"}]);function l(t){e.value.isLoading=!0,t&&(e.value.currentPage=t),axios.get(route("api.statistics.costs.categories.index",{page:e.value.currentPage})).then(o=>{Object.assign(e.value.categories,o.data.result),e.value.isLoading=!1}).catch(o=>{console.log(o),e.value.isLoading=!1})}function h(t){_("show-bookkeeping-costs")&&i({title:"\u0412\u0438\u0434\u0430\u043B\u0438\u0442\u0438?",icon:"warning",showCancelButton:!0}).then(o=>{o.isConfirmed&&axios.delete(route("api.statistics.costs.categories.destroy",t)).then(()=>{l(),e.value.isActiveModal&&s(),i({icon:"success",title:"Destroyed!"})}).catch(n=>{console.log(n),i({icon:"error",title:"Error!"})})})}function s(){e.value.isActiveModal=!e.value.isActiveModal}function C(t,o){axios.get(route("api.statistics.costs.categories.edit",t)).then(({data:n})=>{e.value.item=n.result,e.value.modalAction="edit",e.value.item.index=o,s()}).catch(n=>console.log(n))}function A(){axios.put(route("api.statistics.costs.categories.update",e.value.item.id),e.value.item).then(()=>{s(),l(),i({title:"Success!",icon:"success"})}).catch(t=>{console.log(t),i({title:"Error!",icon:"error"})})}function M(){axios.post(route("api.statistics.costs.categories.create"),e.value.item).then(()=>{s(),e.value.item=f,l(),i({title:"Success!",icon:"success"})}).catch(t=>{console.log(t),i({title:"Error!",icon:"error"})})}function $(){e.value.modalAction==="edit"?A():e.value.modalAction==="create"&&M()}function F(){Object.assign(e.value.item,f),e.value.modalAction="create",s()}return(t,o)=>{const n=r("loader-component"),S=r("button-component"),V=r("xcircle-component"),B=r("table-component"),D=r("pagination");return u(),p(j,{title:"\u041A\u0430\u0442\u0435\u0433\u043E\u0440\u0456\u0457 \u0432\u0438\u0442\u0440\u0430\u0442"},{header:c(()=>[G]),default:c(()=>[e.value.isLoading?(u(),p(n,{key:0})):b("",!0),!e.value.isLoading&&y(_)("show-bookkeeping-costs")?(u(),z("div",K,[d(S,{type:"btn",onClick:F},{default:c(()=>[Q]),_:1}),d(B,{headings:x,rows:e.value.categories.data,isSlotMode:!0},{id:c(({data:a})=>[v("a",{href:"javascript:",onClick:L=>C(a.row.id,a.i)},g(a.row.id),9,T)]),timestamps:c(({data:a})=>[m(g(t.$filters.dateFormat(a.row.updated_at))+" ",1),q,m(" "+g(t.$filters.dateFormat(a.row.created_at)),1)]),actions:c(({data:a})=>[v("a",{href:"javascript:",onClick:L=>h(a.row.id)},[d(V)],8,H)]),_:1},8,["headings","rows"]),d(D,{pagination:e.value.categories,"click-handler":l,modelValue:e.value.currentPage,"onUpdate:modelValue":o[0]||(o[0]=a=>e.value.currentPage=a)},null,8,["pagination","modelValue"]),(u(),p(I(y(w)),{item:e.value.item,onCloseModal:s,onSubmitForm:$,onDeclineForm:h},null,40,["item"]))])):b("",!0)]),_:1})}}};export{Z as default};
