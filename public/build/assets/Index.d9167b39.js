import B from"./Modal.f20d8870.js";import E from"./OptionsLayout.f9997a9a.js";import{z as P,D as N,A as O,u as U,U as d,R as l,Q as u,W as v,K as I,O as y,J as _,L as g,M as f,Z as p,bb as z,v as b,V as m}from"./_plugin-vue_export-helper.a5aa4da2.js";import"./Form.4633d535.js";import"./Sidebar.e61fd8e8.js";import"./app.22f6e2f6.js";const J=p(" \u041F\u0440\u0430\u0432\u0430 "),K={key:1},Q=p(" \u0414\u043E\u0434\u0430\u0442\u0438 "),R=["onClick"],T=g("hr",{class:"my-1"},null,-1),W=["onClick"],te={__name:"Index",setup(Z){const n=b("$swal"),a=b("$can"),h={name:null,slug:null},e=P({data:[],currentPage:1,isLoading:!0,isActiveModal:!1,modalAction:"",item:{}});N(()=>{r(1)});const C=O(()=>e.value.isActiveModal?B:null),w=U([{label:"ID",key:"id"},{label:"\u041D\u0430\u0437\u0432\u0430",key:"name"},{label:"Slug",key:"slug"},{label:"\u041E\u043D\u043E\u0432\u043B\u0435\u043D\u043E<hr class='my-1'>\u0421\u0442\u0432\u043E\u0440\u0435\u043D\u043E",key:"timestamps"},{label:"#",key:"actions"}]);function r(t){e.value.isLoading=!0,t&&(e.value.currentPage=t),axios.get(route("api.permissions.index",{page:e.value.currentPage})).then(o=>{Object.assign(e.value.data,o.data.result),e.value.isLoading=!1}).catch(o=>{console.log(o),e.value.isLoading=!1})}function k(t){a("destroy-permissions")&&n({title:"\u0412\u0438\u0434\u0430\u043B\u0438\u0442\u0438?",icon:"warning",showCancelButton:!0}).then(o=>{o.isConfirmed&&axios.delete(route("api.permissions.destroy",t)).then(()=>{r(),e.value.isActiveModal&&c(),n({icon:"success",title:"Destroyed!"})}).catch(s=>{console.log(s),n({icon:"error",title:"Error!"})})})}function c(){e.value.isActiveModal=!e.value.isActiveModal}function x(t,o){a("edit-permissions")&&axios.get(route("api.permissions.edit",t)).then(({data:s})=>{e.value.item=s.result,e.value.modalAction="edit",e.value.item.index=o,c()}).catch(s=>console.log(s))}function A(){a("edit-permissions")&&axios.put(route("api.permissions.update",e.value.item.id),e.value.item).then(()=>{c(),r(),n({title:"Success!",icon:"success"})}).catch(t=>{console.log(t),n({title:"Error!",icon:"error"})})}function M(){a("create-permissions")&&axios.post(route("api.permissions.create"),e.value.item).then(()=>{c(),e.value.item=h,r(),n({title:"Success!",icon:"success"})}).catch(t=>{console.log(t),n({title:"Error!",icon:"error"})})}function V(){e.value.modalAction==="edit"&&a("edit-permissions")?A():e.value.modalAction==="create"&&a("create-permissions")&&M()}function $(){a("create-permissions")&&(Object.assign(e.value.item,h),e.value.modalAction="create",c())}return(t,o)=>{const s=m("loader-component"),D=m("button-component"),L=m("xcircle-component"),F=m("table-component"),S=m("paginate");return u(),d(E,{title:"\u041F\u0440\u0430\u0432\u0430"},{header:l(()=>[J]),default:l(()=>[e.value.isLoading?(u(),d(s,{key:0})):v("",!0),e.value.isLoading?v("",!0):(u(),I("div",K,[y(a)("create-permissions")?(u(),d(D,{key:0,type:"btn",onClick:$},{default:l(()=>[Q]),_:1})):v("",!0),_(F,{headings:w,isSlotMode:!0,rows:e.value.data.data},{id:l(({data:i})=>[g("a",{href:"javascript:",onClick:j=>x(i.row.id,i.i)},f(i.row.id),9,R)]),timestamps:l(({data:i})=>[p(f(t.$filters.dateFormat(i.row.updated_at))+" ",1),T,p(" "+f(t.$filters.dateFormat(i.row.created_at)),1)]),actions:l(({data:i})=>[g("a",{href:"javascript:",onClick:j=>k(i.row.id)},[_(L)],8,W)]),_:1},8,["headings","rows"]),_(S,{pagination:e.value.data,"click-handler":r,modelValue:e.value.currentPage,"onUpdate:modelValue":o[0]||(o[0]=i=>e.value.currentPage=i)},null,8,["pagination","modelValue"]),(u(),d(z(y(C)),{item:e.value.item,onCloseModal:c,onSubmitForm:V,onDeclineForm:k},null,40,["item"]))]))]),_:1})}}};export{te as default};