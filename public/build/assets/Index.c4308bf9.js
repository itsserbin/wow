import E from"./Modal.a32a9e5b.js";import O from"./OptionsLayout.46107609.js";import{u as h,z as P,D as S,A as U,U as v,R as i,Q as d,W as f,K as I,O as b,J as _,L as g,M as m,Y as c,bb as z,v as k,V as p}from"./_plugin-vue_export-helper.80033396.js";import"./Form.5d2b4831.js";import"./Sidebar.3b7eddfa.js";import"./app.3d1b1164.js";const J=c(" \u041F\u043E\u0441\u0442\u0430\u0447\u0430\u043B\u044C\u043D\u0438\u043A\u0438 "),K={key:1},Q=c(" \u0414\u043E\u0434\u0430\u0442\u0438 "),R=["onClick"],T=g("hr",{class:"my-1"},null,-1),W=["onClick"],te={__name:"Index",setup(Y){const r=k("$swal"),n=k("$can"),w=h({name:null,catalog:null,time_of_dispatch:null,availability:null,prepayment:0,prepayment_sum:null,refunds:0,refunds_sum:null,contacts:null,comment:null}),e=P({providers:[],currentPage:1,isLoading:!0,isActiveModal:!1,modalAction:"",item:{}});S(()=>{u(1)});const C=U(()=>e.value.isActiveModal?E:null),A=h([{label:"ID",key:"id"},{label:"\u041D\u0430\u0437\u0432\u0430",key:"name"},{label:"\u041A\u0430\u0442\u0430\u043B\u043E\u0433",key:"catalog"},{label:"\u041D\u0430\u044F\u0432\u043D\u0456\u0441\u0442\u044C",key:"availability"},{label:"\u041F\u043E\u0432\u0435\u0440\u043D\u0435\u043D\u043D\u044F",key:"refunds"},{label:"\u041F\u0435\u0440\u0435\u0434\u043E\u043F\u043B\u0430\u0442\u0430",key:"prepayment"},{label:"\u041A\u043E\u043C\u043C\u0435\u043D\u0442\u0430\u0440",key:"comment"},{label:"\u041E\u043D\u043E\u0432\u043B\u0435\u043D\u043E<hr class='my-1'>\u0421\u0442\u0432\u043E\u0440\u0435\u043D\u043E",key:"timestamps"},{label:"#",key:"actions"}]);function u(t){e.value.isLoading=!0,t&&(e.value.currentPage=t),axios.get(route("api.providers.index",{page:e.value.currentPage})).then(a=>{Object.assign(e.value.providers,a.data.result),e.value.isLoading=!1}).catch(a=>{console.log(a),e.value.isLoading=!1})}function y(t){n("destroy-providers")&&r({title:"\u0412\u0438\u0434\u0430\u043B\u0438\u0442\u0438?",icon:"warning",showCancelButton:!0}).then(a=>{a.isConfirmed&&axios.delete(route("api.providers.destroy",t)).then(()=>{u(),e.value.isActiveModal&&l(),r({icon:"success",title:"Destroyed!"})}).catch(s=>{console.log(s),r({icon:"error",title:"Error!"})})})}function l(){e.value.isActiveModal=!e.value.isActiveModal}function x(t,a){n("edit-providers")&&axios.get(route("api.providers.edit",t)).then(({data:s})=>{e.value.item=s.result,e.value.modalAction="edit",e.value.item.index=a,l()}).catch(s=>console.log(s))}function M(){n("edit-providers")&&axios.put(route("api.providers.update",e.value.item.id),e.value.item).then(()=>{l(),u(),r({title:"Success!",icon:"success"})}).catch(t=>{console.log(t),r({title:"Error!",icon:"error"})})}function $(){n("create-providers")&&axios.post(route("api.providers.create"),e.value.item).then(({data:t})=>{l(),e.value.item={},u(),r({title:"Success!",icon:"success"})}).catch(t=>{console.log(t),r({title:"Error!",icon:"error"})})}function V(){e.value.modalAction==="edit"&&n("edit-providers")?M():e.value.modalAction==="create"&&n("create-providers")&&$()}function D(){n("create-providers")&&(Object.assign(e.value.item,w),e.value.modalAction="create",l())}return(t,a)=>{const s=p("loader-component"),L=p("button-component"),F=p("xcircle-component"),N=p("table-component"),j=p("paginate");return d(),v(O,{title:"\u041F\u043E\u0441\u0442\u0430\u0447\u0430\u043B\u044C\u043D\u0438\u043A\u0438"},{header:i(()=>[J]),default:i(()=>[e.value.isLoading?(d(),v(s,{key:0})):f("",!0),e.value.isLoading?f("",!0):(d(),I("div",K,[b(n)("create-providers")?(d(),v(L,{key:0,type:"btn",onClick:D},{default:i(()=>[Q]),_:1})):f("",!0),_(N,{headings:A,isSlotMode:!0,rows:e.value.providers.data},{id:i(({data:o})=>[g("a",{href:"javascript:",onClick:B=>x(o.row.id,o.i)},m(o.row.id),9,R)]),refunds:i(({data:o})=>[c(m(t.$filters.yesOrNo(o.row.refunds)),1)]),prepayment:i(({data:o})=>[c(m(t.$filters.yesOrNo(o.row.prepayment)),1)]),timestamps:i(({data:o})=>[c(m(t.$filters.dateFormat(o.row.updated_at))+" ",1),T,c(" "+m(t.$filters.dateFormat(o.row.created_at)),1)]),actions:i(({data:o})=>[g("a",{href:"javascript:",onClick:B=>y(o.row.id)},[_(F)],8,W)]),_:1},8,["headings","rows"]),_(j,{pagination:e.value.providers,"click-handler":u,modelValue:e.value.currentPage,"onUpdate:modelValue":a[0]||(a[0]=o=>e.value.currentPage=o)},null,8,["pagination","modelValue"]),(d(),v(z(b(C)),{item:e.value.item,onCloseModal:l,onSubmitForm:V,onDeclineForm:y},null,40,["item"]))]))]),_:1})}}};export{te as default};
