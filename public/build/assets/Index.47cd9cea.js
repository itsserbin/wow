import S from"./Modal.758cf77e.js";import j from"./StatisticLayout.8ddc1755.js";import{i as P,o as N,m as I,Z as O,B as p,C as c,E as k,M as r,z as u,s as b,u as y,p as U,G as d,q as v,x as g,v as m,a7 as q}from"./index.1726d409.js";import"./Form.21b1af14.js";import"./app.2d605236.js";import"./moment.9709ab41.js";import"./_plugin-vue_export-helper.cdc0426e.js";import"./lazyload.6866379a.js";import"./Logo.9264c4eb.js";const z=m(" \u041A\u0430\u0442\u0435\u0433\u043E\u0440\u0456\u0457 \u0432\u0438\u0442\u0440\u0430\u0442 "),G={key:1},T=m(" \u0414\u043E\u0434\u0430\u0442\u0438 "),Z=["onClick"],H=v("hr",{class:"my-1"},null,-1),J=["onClick"],ie={__name:"Index",setup(K){const i=k("$swal"),_=k("$can"),f={title:null,slug:null,code:null},e=P({categories:[],isLoading:!0,isActiveModal:!1,modalAction:"",item:{},currentPage:1});N(()=>l());const w=I(()=>e.value.isActiveModal?S:null),C=O([{label:"ID",key:"id"},{label:"\u041A\u043E\u0434 ",key:"code"},{label:"\u041D\u0430\u0437\u0432\u0430",key:"title"},{label:"Slug",key:"slug"},{label:"\u041E\u043D\u043E\u0432\u043B\u0435\u043D\u043E<hr class='my-1'>\u0421\u0442\u0432\u043E\u0440\u0435\u043D\u043E",key:"timestamps"},{label:"#",key:"actions"}]);function l(t){e.value.isLoading=!0,t&&(e.value.currentPage=t),axios.get(route("api.statistics.costs.categories.index",{page:e.value.currentPage})).then(o=>{Object.assign(e.value.categories,o.data.result),e.value.isLoading=!1}).catch(o=>{console.log(o),e.value.isLoading=!1})}function h(t){_("show-bookkeeping-costs")&&i({title:"\u0412\u0438\u0434\u0430\u043B\u0438\u0442\u0438?",icon:"warning",showCancelButton:!0}).then(o=>{o.isConfirmed&&axios.delete(route("api.statistics.costs.categories.destroy",t)).then(()=>{l(),e.value.isActiveModal&&s(),i({icon:"success",title:"Destroyed!"})}).catch(n=>{console.log(n),i({icon:"error",title:"Error!"})})})}function s(){e.value.isActiveModal=!e.value.isActiveModal}function x(t,o){axios.get(route("api.statistics.costs.categories.edit",t)).then(({data:n})=>{e.value.item=n.result,e.value.modalAction="edit",e.value.item.index=o,s()}).catch(n=>console.log(n))}function A(){axios.put(route("api.statistics.costs.categories.update",e.value.item.id),e.value.item).then(()=>{s(),l(),i({title:"Success!",icon:"success"})}).catch(t=>{console.log(t),i({title:"Error!",icon:"error"})})}function M(){axios.post(route("api.statistics.costs.categories.create"),e.value.item).then(()=>{s(),e.value.item=f,l(),i({title:"Success!",icon:"success"})}).catch(t=>{console.log(t),i({title:"Error!",icon:"error"})})}function $(){e.value.modalAction==="edit"?A():e.value.modalAction==="create"&&M()}function V(){Object.assign(e.value.item,f),e.value.modalAction="create",s()}return(t,o)=>{const n=r("loader-component"),B=r("button-component"),D=r("xcircle-component"),E=r("table-component"),F=r("pagination");return u(),p(j,{title:"\u041A\u0430\u0442\u0435\u0433\u043E\u0440\u0456\u0457 \u0432\u0438\u0442\u0440\u0430\u0442"},{header:c(()=>[z]),default:c(()=>[e.value.isLoading?(u(),p(n,{key:0})):b("",!0),!e.value.isLoading&&y(_)("show-bookkeeping-costs")?(u(),U("div",G,[d(B,{type:"btn",onClick:V},{default:c(()=>[T]),_:1}),d(E,{headings:C,rows:e.value.categories.data,isSlotMode:!0},{id:c(({data:a})=>[v("a",{href:"javascript:",onClick:L=>x(a.row.id,a.i)},g(a.row.id),9,Z)]),timestamps:c(({data:a})=>[m(g(t.$filters.dateFormat(a.row.updated_at))+" ",1),H,m(" "+g(t.$filters.dateFormat(a.row.created_at)),1)]),actions:c(({data:a})=>[v("a",{href:"javascript:",onClick:L=>h(a.row.id)},[d(D)],8,J)]),_:1},8,["headings","rows"]),d(F,{pagination:e.value.categories,"click-handler":l,modelValue:e.value.currentPage,"onUpdate:modelValue":o[0]||(o[0]=a=>e.value.currentPage=a)},null,8,["pagination","modelValue"]),(u(),p(q(y(w)),{item:e.value.item,onCloseModal:s,onSubmitForm:$,onDeclineForm:h},null,40,["item"]))])):b("",!0)]),_:1})}}};export{ie as default};