import P from"./Modal.b5b83455.js";import j from"./OptionsLayout.de073cbf.js";import{A as E,G as N,B as O,v as I,V as m,S as c,R as u,$ as v,L as U,P as y,K as _,M as g,O as f,Y as p,bc as G,x as b,X as d}from"./moment.e1708d83.js";import"./Form.7ddcf343.js";const K=p(" \u0420\u043E\u043B\u0456 "),R={key:1},T=p(" \u0414\u043E\u0434\u0430\u0442\u0438 "),X=["onClick"],Y=g("hr",{class:"my-1"},null,-1),q=["onClick"],Z={__name:"Index",setup(z){const i=b("$swal"),n=b("$can"),h={name:null,slug:null},e=E({data:[],currentPage:1,isLoading:!0,isActiveModal:!1,modalAction:"",item:{}});N(()=>{r(1)});const x=O(()=>e.value.isActiveModal?P:null),C=I([{label:"ID",key:"id"},{label:"\u041D\u0430\u0437\u0432\u0430",key:"name"},{label:"Slug",key:"slug"},{label:"\u041E\u043D\u043E\u0432\u043B\u0435\u043D\u043E<hr class='my-1'>\u0421\u0442\u0432\u043E\u0440\u0435\u043D\u043E",key:"timestamps"},{label:"#",key:"actions"}]);function r(t){e.value.isLoading=!0,t&&(e.value.currentPage=t),axios.get(route("api.roles.index",{page:e.value.currentPage})).then(o=>{Object.assign(e.value.data,o.data.result),e.value.isLoading=!1}).catch(o=>{console.log(o),e.value.isLoading=!1})}function k(t){n("destroy-roles")&&i({title:"\u0412\u0438\u0434\u0430\u043B\u0438\u0442\u0438?",icon:"warning",showCancelButton:!0}).then(o=>{o.isConfirmed&&axios.delete(route("api.roles.destroy",t)).then(()=>{r(),e.value.isActiveModal&&s(),i({icon:"success",title:"Destroyed!"})}).catch(l=>{console.log(l),i({icon:"error",title:"Error!"})})})}function s(){e.value.isActiveModal=!e.value.isActiveModal}function w(t,o){n("edit-roles")&&axios.get(route("api.roles.edit",t)).then(({data:l})=>{e.value.item=l.result,e.value.modalAction="edit",e.value.item.index=o,s()}).catch(l=>console.log(l))}function A(){n("edit-roles")&&axios.put(route("api.roles.update",e.value.item.id),e.value.item).then(()=>{s(),r(),i({title:"Success!",icon:"success"})}).catch(t=>{console.log(t),i({title:"Error!",icon:"error"})})}function M(){n("create-roles")&&axios.post(route("api.roles.create"),e.value.item).then(()=>{s(),e.value.item=h,r(),i({title:"Success!",icon:"success"})}).catch(t=>{console.log(t),i({title:"Error!",icon:"error"})})}function $(){e.value.modalAction==="edit"&&n("edit-roles")?A():e.value.modalAction==="create"&&n("create-roles")&&M()}function V(){n("create-roles")&&(Object.assign(e.value.item,h),e.value.modalAction="create",s())}return(t,o)=>{const l=d("loader-component"),L=d("button-component"),S=d("xcircle-component"),B=d("table-component"),D=d("paginate");return u(),m(j,{title:"\u0420\u043E\u043B\u0456"},{header:c(()=>[K]),default:c(()=>[e.value.isLoading?(u(),m(l,{key:0})):v("",!0),e.value.isLoading?v("",!0):(u(),U("div",R,[y(n)("create-roles")?(u(),m(L,{key:0,type:"btn",onClick:V},{default:c(()=>[T]),_:1})):v("",!0),_(B,{headings:C,isSlotMode:!0,rows:e.value.data.data},{id:c(({data:a})=>[g("a",{href:"javascript:",onClick:F=>w(a.row.id,a.i)},f(a.row.id),9,X)]),timestamps:c(({data:a})=>[p(f(t.$filters.dateFormat(a.row.updated_at))+" ",1),Y,p(" "+f(t.$filters.dateFormat(a.row.created_at)),1)]),actions:c(({data:a})=>[g("a",{href:"javascript:",onClick:F=>k(a.row.id)},[_(S)],8,q)]),_:1},8,["headings","rows"]),_(D,{pagination:e.value.data,"click-handler":r,modelValue:e.value.currentPage,"onUpdate:modelValue":o[0]||(o[0]=a=>e.value.currentPage=a)},null,8,["pagination","modelValue"]),(u(),m(G(y(x)),{item:e.value.item,onCloseModal:s,onSubmitForm:$,onDeclineForm:k},null,40,["item"]))]))]),_:1})}}};export{Z as default};
