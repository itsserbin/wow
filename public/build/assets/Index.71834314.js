import B from"./Modal.201be7fb.js";import E from"./OptionsLayout.1422b34b.js";import{z as P,D as N,A as O,u as U,U as m,R as c,Q as u,Y as v,K as I,O as y,J as _,L as g,M as f,W as p,bb as z,v as b,V as d}from"./_plugin-vue_export-helper.f3876adb.js";import"./Form.4353e1ff.js";import"./Sidebar.9ff0592f.js";import"./app.592f9bfc.js";const J=p(" \u0420\u043E\u043B\u0456 "),K={key:1},Q=p(" \u0414\u043E\u0434\u0430\u0442\u0438 "),R=["onClick"],T=g("hr",{class:"my-1"},null,-1),W=["onClick"],te={__name:"Index",setup(Y){const i=b("$swal"),n=b("$can"),h={name:null,slug:null},e=P({data:[],currentPage:1,isLoading:!0,isActiveModal:!1,modalAction:"",item:{}});N(()=>{r(1)});const C=O(()=>e.value.isActiveModal?B:null),w=U([{label:"ID",key:"id"},{label:"\u041D\u0430\u0437\u0432\u0430",key:"name"},{label:"Slug",key:"slug"},{label:"\u041E\u043D\u043E\u0432\u043B\u0435\u043D\u043E<hr class='my-1'>\u0421\u0442\u0432\u043E\u0440\u0435\u043D\u043E",key:"timestamps"},{label:"#",key:"actions"}]);function r(t){e.value.isLoading=!0,t&&(e.value.currentPage=t),axios.get(route("api.roles.index",{page:e.value.currentPage})).then(o=>{Object.assign(e.value.data,o.data.result),e.value.isLoading=!1}).catch(o=>{console.log(o),e.value.isLoading=!1})}function k(t){n("destroy-roles")&&i({title:"\u0412\u0438\u0434\u0430\u043B\u0438\u0442\u0438?",icon:"warning",showCancelButton:!0}).then(o=>{o.isConfirmed&&axios.delete(route("api.roles.destroy",t)).then(()=>{r(),e.value.isActiveModal&&s(),i({icon:"success",title:"Destroyed!"})}).catch(l=>{console.log(l),i({icon:"error",title:"Error!"})})})}function s(){e.value.isActiveModal=!e.value.isActiveModal}function x(t,o){n("edit-roles")&&axios.get(route("api.roles.edit",t)).then(({data:l})=>{e.value.item=l.result,e.value.modalAction="edit",e.value.item.index=o,s()}).catch(l=>console.log(l))}function A(){n("edit-roles")&&axios.put(route("api.roles.update",e.value.item.id),e.value.item).then(()=>{s(),r(),i({title:"Success!",icon:"success"})}).catch(t=>{console.log(t),i({title:"Error!",icon:"error"})})}function M(){n("create-roles")&&axios.post(route("api.roles.create"),e.value.item).then(()=>{s(),e.value.item=h,r(),i({title:"Success!",icon:"success"})}).catch(t=>{console.log(t),i({title:"Error!",icon:"error"})})}function V(){e.value.modalAction==="edit"&&n("edit-roles")?A():e.value.modalAction==="create"&&n("create-roles")&&M()}function $(){n("create-roles")&&(Object.assign(e.value.item,h),e.value.modalAction="create",s())}return(t,o)=>{const l=d("loader-component"),D=d("button-component"),L=d("xcircle-component"),F=d("table-component"),S=d("paginate");return u(),m(E,{title:"\u0420\u043E\u043B\u0456"},{header:c(()=>[J]),default:c(()=>[e.value.isLoading?(u(),m(l,{key:0})):v("",!0),e.value.isLoading?v("",!0):(u(),I("div",K,[y(n)("create-roles")?(u(),m(D,{key:0,type:"btn",onClick:$},{default:c(()=>[Q]),_:1})):v("",!0),_(F,{headings:w,isSlotMode:!0,rows:e.value.data.data},{id:c(({data:a})=>[g("a",{href:"javascript:",onClick:j=>x(a.row.id,a.i)},f(a.row.id),9,R)]),timestamps:c(({data:a})=>[p(f(t.$filters.dateFormat(a.row.updated_at))+" ",1),T,p(" "+f(t.$filters.dateFormat(a.row.created_at)),1)]),actions:c(({data:a})=>[g("a",{href:"javascript:",onClick:j=>k(a.row.id)},[_(L)],8,W)]),_:1},8,["headings","rows"]),_(S,{pagination:e.value.data,"click-handler":r,modelValue:e.value.currentPage,"onUpdate:modelValue":o[0]||(o[0]=a=>e.value.currentPage=a)},null,8,["pagination","modelValue"]),(u(),m(z(y(C)),{item:e.value.item,onCloseModal:s,onSubmitForm:V,onDeclineForm:k},null,40,["item"]))]))]),_:1})}}};export{te as default};