import P from"./Modal.9afaa377.js";import j from"./OptionsLayout.3f67aa03.js";import{A as E,G as N,B as O,v as I,V as d,S as l,R as u,_ as v,L as U,P as y,K as _,M as g,O as f,Y as p,bc as G,x as b,X as m}from"./moment.fb372146.js";import"./Form.641891eb.js";const K=p(" \u041F\u0440\u0430\u0432\u0430 "),R={key:1},T=p(" \u0414\u043E\u0434\u0430\u0442\u0438 "),X=["onClick"],Y=g("hr",{class:"my-1"},null,-1),q=["onClick"],Z={__name:"Index",setup(z){const n=b("$swal"),a=b("$can"),h={name:null,slug:null},e=E({data:[],currentPage:1,isLoading:!0,isActiveModal:!1,modalAction:"",item:{}});N(()=>{r(1)});const x=O(()=>e.value.isActiveModal?P:null),C=I([{label:"ID",key:"id"},{label:"\u041D\u0430\u0437\u0432\u0430",key:"name"},{label:"Slug",key:"slug"},{label:"\u041E\u043D\u043E\u0432\u043B\u0435\u043D\u043E<hr class='my-1'>\u0421\u0442\u0432\u043E\u0440\u0435\u043D\u043E",key:"timestamps"},{label:"#",key:"actions"}]);function r(t){e.value.isLoading=!0,t&&(e.value.currentPage=t),axios.get(route("api.permissions.index",{page:e.value.currentPage})).then(o=>{Object.assign(e.value.data,o.data.result),e.value.isLoading=!1}).catch(o=>{console.log(o),e.value.isLoading=!1})}function k(t){a("destroy-permissions")&&n({title:"\u0412\u0438\u0434\u0430\u043B\u0438\u0442\u0438?",icon:"warning",showCancelButton:!0}).then(o=>{o.isConfirmed&&axios.delete(route("api.permissions.destroy",t)).then(()=>{r(),e.value.isActiveModal&&c(),n({icon:"success",title:"Destroyed!"})}).catch(s=>{console.log(s),n({icon:"error",title:"Error!"})})})}function c(){e.value.isActiveModal=!e.value.isActiveModal}function w(t,o){a("edit-permissions")&&axios.get(route("api.permissions.edit",t)).then(({data:s})=>{e.value.item=s.result,e.value.modalAction="edit",e.value.item.index=o,c()}).catch(s=>console.log(s))}function A(){a("edit-permissions")&&axios.put(route("api.permissions.update",e.value.item.id),e.value.item).then(()=>{c(),r(),n({title:"Success!",icon:"success"})}).catch(t=>{console.log(t),n({title:"Error!",icon:"error"})})}function M(){a("create-permissions")&&axios.post(route("api.permissions.create"),e.value.item).then(()=>{c(),e.value.item=h,r(),n({title:"Success!",icon:"success"})}).catch(t=>{console.log(t),n({title:"Error!",icon:"error"})})}function V(){e.value.modalAction==="edit"&&a("edit-permissions")?A():e.value.modalAction==="create"&&a("create-permissions")&&M()}function $(){a("create-permissions")&&(Object.assign(e.value.item,h),e.value.modalAction="create",c())}return(t,o)=>{const s=m("loader-component"),L=m("button-component"),S=m("xcircle-component"),B=m("table-component"),D=m("paginate");return u(),d(j,{title:"\u041F\u0440\u0430\u0432\u0430"},{header:l(()=>[K]),default:l(()=>[e.value.isLoading?(u(),d(s,{key:0})):v("",!0),e.value.isLoading?v("",!0):(u(),U("div",R,[y(a)("create-permissions")?(u(),d(L,{key:0,type:"btn",onClick:$},{default:l(()=>[T]),_:1})):v("",!0),_(B,{headings:C,isSlotMode:!0,rows:e.value.data.data},{id:l(({data:i})=>[g("a",{href:"javascript:",onClick:F=>w(i.row.id,i.i)},f(i.row.id),9,X)]),timestamps:l(({data:i})=>[p(f(t.$filters.dateFormat(i.row.updated_at))+" ",1),Y,p(" "+f(t.$filters.dateFormat(i.row.created_at)),1)]),actions:l(({data:i})=>[g("a",{href:"javascript:",onClick:F=>k(i.row.id)},[_(S)],8,q)]),_:1},8,["headings","rows"]),_(D,{pagination:e.value.data,"click-handler":r,modelValue:e.value.currentPage,"onUpdate:modelValue":o[0]||(o[0]=i=>e.value.currentPage=i)},null,8,["pagination","modelValue"]),(u(),d(G(y(x)),{item:e.value.item,onCloseModal:c,onSubmitForm:V,onDeclineForm:k},null,40,["item"]))]))]),_:1})}}};export{Z as default};
